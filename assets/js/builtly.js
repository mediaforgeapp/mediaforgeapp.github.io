const cfg = window.BUILTLY || {};
const TOKEN_KEY = "builtly_access";
const REFRESH_KEY = "builtly_refresh";
const PKCE_KEY = "builtly_pkce";

export function getAccess() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function getRefresh() {
  return localStorage.getItem(REFRESH_KEY);
}

export function isSignedIn() {
  return Boolean(getAccess() || getRefresh());
}

export function saveTokens(tokens) {
  if (!tokens) return;
  if (tokens.access_token) sessionStorage.setItem(TOKEN_KEY, tokens.access_token);
  if (tokens.refresh_token) localStorage.setItem(REFRESH_KEY, tokens.refresh_token);
}

export function clearTokens() {
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
}

export async function api(method, path, { body, auth = false, headers = {} } = {}) {
  if (!cfg.apiBase || !cfg.appId) {
    throw { code: "misconfigured", message: "BUILTLY config missing" };
  }
  const h = {
    "Content-Type": "application/json",
    "X-App-ID": cfg.appId,
    ...headers,
  };
  if (auth) {
    let t = getAccess();
    if (!t && getRefresh()) {
      await refreshSession();
      t = getAccess();
    }
    if (!t) throw { code: "unauthorized", message: "not signed in" };
    h.Authorization = "Bearer " + t;
  }
  let res = await fetch(cfg.apiBase + path, {
    method,
    headers: h,
    body: body == null ? undefined : JSON.stringify(body),
  });
  if (res.status === 401 && auth && getRefresh()) {
    await refreshSession();
    h.Authorization = "Bearer " + getAccess();
    res = await fetch(cfg.apiBase + path, {
      method,
      headers: h,
      body: body == null ? undefined : JSON.stringify(body),
    });
  }
  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data.error || { code: "http_" + res.status, message: res.statusText };
  return data;
}

async function refreshSession() {
  const data = await api("POST", "/auth/refresh", {
    body: { refresh_token: getRefresh() },
  });
  saveTokens(data.tokens);
  return data;
}

export async function register(email, password, displayName) {
  const data = await api("POST", "/auth/register", {
    body: { email, password, display_name: displayName || undefined },
  });
  saveTokens(data.tokens);
  return data;
}

export async function login(email, password) {
  const data = await api("POST", "/auth/login", { body: { email, password } });
  saveTokens(data.tokens);
  return data;
}

export async function logout() {
  const rt = getRefresh();
  clearTokens();
  if (rt) {
    try {
      await api("POST", "/auth/logout", { body: { refresh_token: rt } });
    } catch {
      /* ignore */
    }
  }
}

function b64url(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function startOAuth(provider) {
  const verifier = b64url(crypto.getRandomValues(new Uint8Array(32)));
  sessionStorage.setItem(PKCE_KEY, verifier);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  const challenge = b64url(digest);
  const u = new URL(cfg.apiBase + "/auth/oauth/" + provider);
  u.searchParams.set("app_id", cfg.appId);
  u.searchParams.set("redirect_uri", cfg.authRedirect);
  u.searchParams.set("code_challenge", challenge);
  u.searchParams.set("code_challenge_method", "S256");
  const url = u.toString();

  // Probe first so misconfig (provider disabled / not configured) shows on the login page
  // instead of a bare Builtly error document. Successful IdP redirects are opaqueredirect.
  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      redirect: "manual",
      headers: { "X-App-ID": cfg.appId },
    });
  } catch {
    location.href = url;
    return;
  }
  if (res.type === "opaqueredirect" || res.status === 0 || (res.status >= 300 && res.status < 400)) {
    location.href = url;
    return;
  }
  if (!res.ok) {
    const text = (await res.text().catch(() => "")).trim();
    let message = text || "OAuth provider is not available";
    if (/app not found/i.test(message)) {
      message =
        "Builtly app_id in the site config does not exist on this API. Update builtly.app_id in _config.yml to the current app UUID from Builtly admin, then rebuild the site.";
    } else if (/not configured/i.test(message)) {
      message =
        "OAuth is not configured in Builtly. Create a google_oauth / github_oauth connection and bind it on this app.";
    } else if (/password authentication is disabled|provider_disabled/i.test(message)) {
      message =
        "This sign-in provider is disabled for the app. Enable google/github under app auth.providers in Builtly admin.";
    }
    throw { code: "oauth_start_failed", message };
  }
  location.href = url;
}

export async function finishOAuth() {
  const params = new URLSearchParams(location.search);
  if (params.get("error")) throw { code: params.get("error"), message: "oauth failed" };
  const code = params.get("code");
  if (!code) throw { code: "missing_code", message: "missing oauth code" };
  const verifier = sessionStorage.getItem(PKCE_KEY);
  sessionStorage.removeItem(PKCE_KEY);
  const data = await api("POST", "/auth/oauth/exchange", {
    body: { code, code_verifier: verifier },
  });
  saveTokens(data.tokens);
  return data;
}

export async function getMe() {
  return api("GET", "/user/me", { auth: true });
}

export async function patchMe(body) {
  return api("PATCH", "/user/me", { auth: true, body });
}

export async function uploadAvatar(file) {
  const created = await api("POST", "/user/me/avatar", {
    auth: true,
    body: {
      filename: file.name || "avatar.png",
      content_type: file.type || "image/png",
      size_bytes: file.size,
    },
  });
  const upload = created.upload || {};
  const headers = { ...(upload.headers || {}) };
  const put = await fetch(upload.url, {
    method: upload.method || "PUT",
    headers,
    body: file,
  });
  if (!put.ok) {
    throw { code: "upload_failed", message: "avatar upload to storage failed (" + put.status + ")" };
  }
  return api("POST", "/user/me/avatar/complete", {
    auth: true,
    body: { file_id: created.file.id },
  });
}

export async function getCredits() {
  return api("GET", "/user/credits", { auth: true });
}

export async function listProducts() {
  return api("GET", "/products");
}

export async function buyProduct(productId) {
  const success = cfg.checkoutSuccess || "/billing/thanks/";
  const cancel = cfg.checkoutCancel || "/pricing/";
  const data = await api("POST", "/checkout/stripe", {
    auth: true,
    body: {
      product_id: productId,
      success_url:
        success + (success.includes("?") ? "&" : "?") + "session_id={CHECKOUT_SESSION_ID}",
      cancel_url: cancel,
    },
  });
  location.href = data.checkout_url;
  return data;
}

export function errMessage(err) {
  if (!err) return "Something went wrong";
  if (typeof err === "string") return err;
  return (err.code ? err.code + ": " : "") + (err.message || "request failed");
}
