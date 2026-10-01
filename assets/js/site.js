(function () {
  var header = document.getElementById("site-header");
  var bar = document.getElementById("header-bar");
  var toggle = document.getElementById("menu-toggle");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.getAttribute("data-state") === "active";
      header.setAttribute("data-state", open ? "inactive" : "active");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      toggle.setAttribute("aria-label", open ? "Open Menu" : "Close Menu");
    });
  }

  if (bar) {
    var onScroll = function () {
      if (window.scrollY > 50) {
        bar.classList.add("is-scrolled");
      } else {
        bar.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Locale dropdowns
  document.querySelectorAll("[data-locale-selector]").forEach(function (root) {
    var trigger = root.querySelector(".locale-trigger");
    var menu = root.querySelector(".locale-menu");
    if (!trigger || !menu) return;

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = menu.classList.contains("hidden");
      document.querySelectorAll(".locale-menu").forEach(function (m) {
        m.classList.add("hidden");
      });
      document.querySelectorAll(".locale-trigger").forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        menu.classList.remove("hidden");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    menu.querySelectorAll("a[data-locale]").forEach(function (link) {
      link.addEventListener("click", function () {
        try {
          localStorage.setItem("locale", link.getAttribute("data-locale") || "");
        } catch (_) {}
      });
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".locale-menu").forEach(function (m) {
      m.classList.add("hidden");
    });
    document.querySelectorAll(".locale-trigger").forEach(function (t) {
      t.setAttribute("aria-expanded", "false");
    });
  });
})();
