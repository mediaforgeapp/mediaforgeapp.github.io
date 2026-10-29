import {
  buyProduct,
  errMessage,
  finishOAuth,
  getAccess,
  getCredits,
  getMe,
  isSignedIn,
  listProducts,
  logout,
  patchMe,
  startOAuth,
  uploadAvatar,
} from "./builtly.js";

function $(sel, root = document) {
  return root.querySelector(sel);
}

function setStatus(el, msg, kind = "error") {
  if (!el) return;
  el.hidden = !msg;
  el.textContent = msg || "";
  el.dataset.kind = kind;
}

function formatMoney(amount, currency) {
  const cur = (currency || "usd").toUpperCase();
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: cur,
      minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
    }).format(amount / 100);
  } catch {
    return (amount / 100).toFixed(2) + " " + cur;
  }
}

const NEXT_KEY = "builtly_next";

function loginPath() {
  return (window.BUILTLY && window.BUILTLY.loginPath) || "/account/login/";
}

function accountPath() {
  return (window.BUILTLY && window.BUILTLY.accountPath) || "/account/";
}

function requireAuth(path) {
  if (!isSignedIn()) {
    const next = encodeURIComponent(location.pathname + location.search);
    location.replace((path || loginPath()) + "?next=" + next);
    return false;
  }
  return true;
}

function nextPath() {
  const n = new URLSearchParams(location.search).get("next");
  if (n && n.startsWith("/") && !n.startsWith("//")) return n;
  try {
    const stored = sessionStorage.getItem(NEXT_KEY);
    if (stored && stored.startsWith("/") && !stored.startsWith("//")) return stored;
  } catch (_) {}
  return accountPath();
}

function rememberNext() {
  try {
    const n = new URLSearchParams(location.search).get("next");
    const path =
      n && n.startsWith("/") && !n.startsWith("//") ? n : accountPath();
    sessionStorage.setItem(NEXT_KEY, path);
  } catch (_) {}
}

function consumeNext() {
  const path = nextPath();
  try {
    sessionStorage.removeItem(NEXT_KEY);
  } catch (_) {}
  return path;
}

async function initLogin() {
  const status = $("#auth-status");
  const buttons = Array.from(document.querySelectorAll("[data-oauth]"));
  const wrap = $(".auth-page__oauth-wrap");
  const loading = $(".auth-page__oauth-loading");

  function setOAuthBusy(busy) {
    buttons.forEach((btn) => {
      btn.disabled = busy;
    });
    wrap?.classList.toggle("is-busy", busy);
    if (loading) {
      loading.hidden = !busy;
      loading.setAttribute("aria-busy", busy ? "true" : "false");
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      setStatus(status, "");
      setOAuthBusy(true);
      rememberNext();
      try {
        await startOAuth(btn.getAttribute("data-oauth"));
      } catch (err) {
        setOAuthBusy(false);
        setStatus(status, errMessage(err));
      }
    });
  });

  if (getAccess()) {
    location.replace(consumeNext());
  }
}

async function initCallback() {
  const status = $("#auth-status");
  setStatus(status, "Completing sign-in…", "info");
  try {
    await finishOAuth();
    location.replace(consumeNext());
  } catch (err) {
    setStatus(status, errMessage(err));
  }
}

function renderAccountProfile(profileEl, user) {
  if (!profileEl) return;
  const avatar = user.avatar_url
    ? '<img class="account-page__avatar" src="' +
      escapeAttr(user.avatar_url) +
      '" alt="" width="72" height="72">'
    : '<div class="account-page__avatar account-page__avatar--empty" aria-hidden="true"></div>';
  profileEl.innerHTML =
    '<div class="account-page__avatar-row">' +
    avatar +
    '<label class="builtly-btn builtly-btn--ghost account-page__avatar-btn">' +
    "Change avatar" +
    '<input id="account-avatar-input" type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden>' +
    "</label></div>" +
    '<div class="builtly-kv"><span>Email</span><strong>' +
    escapeHtml(user.email || "—") +
    "</strong></div>" +
    '<div class="builtly-kv"><span>Name</span><strong>' +
    escapeHtml(user.display_name || "—") +
    "</strong></div>" +
    '<div class="builtly-kv"><span>Verified</span><strong>' +
    (user.email_verified ? "Yes" : "No") +
    "</strong></div>" +
    '<div class="builtly-kv"><span>Locale</span><strong>' +
    escapeHtml(user.locale || "—") +
    "</strong></div>" +
    '<div class="builtly-kv"><span>IP</span><strong class="mono">' +
    escapeHtml(user.last_ip || "—") +
    "</strong></div>" +
    '<div class="builtly-kv"><span>UTM source</span><strong>' +
    escapeHtml(user.utm_source || "—") +
    "</strong></div>" +
    '<form id="account-locale-form" class="account-page__locale">' +
    '<label for="account-locale">Update locale</label>' +
    '<div class="account-page__locale-row">' +
    '<input id="account-locale" name="locale" value="' +
    escapeAttr(user.locale || "") +
    '" placeholder="en-US" maxlength="35">' +
    '<button type="submit" class="builtly-btn">Save</button>' +
    "</div></form>";
}

async function initAccount() {
  if (!requireAuth()) return;
  const profileEl = $("#account-profile");
  const creditsEl = $("#account-credits");
  const status = $("#account-status");
  const logoutBtn = $("#account-logout");

  logoutBtn?.addEventListener("click", async () => {
    await logout();
    location.href = loginPath();
  });

  const bindProfileActions = (user) => {
    const input = $("#account-avatar-input");
    input?.addEventListener("change", async () => {
      const file = input.files && input.files[0];
      input.value = "";
      if (!file) return;
      setStatus(status, "Uploading avatar…", "info");
      try {
        const me = await uploadAvatar(file);
        renderAccountProfile(profileEl, me.user || me);
        bindProfileActions(me.user || me);
        setStatus(status, "Avatar updated.", "ok");
      } catch (err) {
        setStatus(status, errMessage(err));
      }
    });
    $("#account-locale-form")?.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const locale = new FormData(ev.target).get("locale");
      setStatus(status, "Saving…", "info");
      try {
        const me = await patchMe({ locale: String(locale || "") });
        renderAccountProfile(profileEl, me.user || me);
        bindProfileActions(me.user || me);
        setStatus(status, "Locale saved.", "ok");
      } catch (err) {
        setStatus(status, errMessage(err));
      }
    });
  };

  try {
    const [me, credits] = await Promise.all([getMe(), getCredits()]);
    const user = me.user || me;
    renderAccountProfile(profileEl, user);
    bindProfileActions(user);
    if (creditsEl) {
      creditsEl.textContent = String(credits.balance ?? 0);
    }
  } catch (err) {
    if (err && err.code === "unauthorized") {
      location.replace(loginPath());
      return;
    }
    setStatus(status, errMessage(err));
  }
}

async function initPricing() {
  const grid = $("#pricing-grid");
  const status = $("#pricing-status");
  if (!grid) return;

  try {
    const data = await listProducts();
    const items = (data.items || data || []).filter((p) => p.active !== false);
    if (!items.length) {
      grid.innerHTML =
        '<p class="builtly-muted">No credit packs yet. Create products in the Builtly admin, then refresh.</p>';
      return;
    }
    grid.innerHTML = items
      .map((p) => {
        const price = formatMoney(p.price_amount, p.currency);
        const canBuy = Boolean(
          p.stripe_price_id || (p.channels && p.channels.stripe)
        );
        return (
          '<article class="builtly-card">' +
          "<h2>" +
          escapeHtml(p.name) +
          "</h2>" +
          '<p class="builtly-muted">' +
          escapeHtml(p.description || "") +
          "</p>" +
          '<div class="builtly-price">' +
          escapeHtml(price) +
          "</div>" +
          '<div class="builtly-credits">' +
          Number(p.credits || 0).toLocaleString() +
          " credits</div>" +
          '<button type="button" class="builtly-btn" data-buy="' +
          escapeAttr(p.id) +
          '"' +
          (canBuy ? "" : ' disabled title="Stripe price not linked"') +
          ">Buy</button>" +
          "</article>"
        );
      })
      .join("");

    grid.querySelectorAll("[data-buy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (!isSignedIn()) {
          location.href =
            loginPath() + "?next=" + encodeURIComponent("/pricing/");
          return;
        }
        setStatus(status, "Opening Stripe Checkout…", "info");
        btn.disabled = true;
        try {
          await buyProduct(btn.getAttribute("data-buy"));
        } catch (err) {
          setStatus(status, errMessage(err));
          btn.disabled = false;
        }
      });
    });
  } catch (err) {
    setStatus(status, errMessage(err));
    grid.innerHTML =
      '<p class="builtly-muted">Could not load products. Is Builtly running and CORS origins configured?</p>';
  }
}

async function initThanks() {
  const balanceEl = $("#thanks-balance");
  const status = $("#thanks-status");
  if (!isSignedIn()) {
    setStatus(status, "Signed out — balance will update after you sign in.", "info");
    return;
  }
  setStatus(status, "Refreshing balance…", "info");
  let tries = 0;
  const poll = async () => {
    try {
      const credits = await getCredits();
      if (balanceEl) balanceEl.textContent = String(credits.balance ?? 0);
      setStatus(status, "Credits updated.", "ok");
    } catch (err) {
      setStatus(status, errMessage(err));
    }
    tries += 1;
    if (tries < 5) setTimeout(poll, 2000);
  };
  poll();
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

function syncHeaderAuth() {
  const signed = isSignedIn();
  document.querySelectorAll("[data-auth-guest]").forEach((el) => {
    el.hidden = signed;
  });
  document.querySelectorAll("[data-auth-user]").forEach((el) => {
    el.hidden = !signed;
  });
}

const page =
  document.body?.dataset?.builtlyPage ||
  document.querySelector("[data-builtly-boot]")?.getAttribute("data-builtly-boot");
syncHeaderAuth();
if (page === "login") initLogin();
else if (page === "callback") initCallback();
else if (page === "account") initAccount();
else if (page === "pricing") initPricing();
else if (page === "thanks") initThanks();
