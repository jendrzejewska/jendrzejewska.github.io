(function () {
  var path = window.location.pathname;
  var lang = "pl";
  var base = path;

  if (path.indexOf("/en/") === 0) {
    lang = "en";
    base = path.slice(3);
  } else if (path.indexOf("/ua/") === 0) {
    lang = "ua";
    base = path.slice(3);
  }

  if (!base) base = "/";
  if (base === "/index.html") base = "/";
  if (base.endsWith("/index.html")) base = base.slice(0, -10);
  if (!base.startsWith("/")) base = "/" + base;
  if (base !== "/" && !base.endsWith("/")) base += "/";

  var nav = document.querySelector(".nav, .navlinks, .menu, .site-nav");
  if (!nav || document.querySelector(".language-switcher")) return;

  // Use clear flag icons while preserving accessible language names.
  var style = document.createElement("style");
  style.textContent = [
    ".language-switcher{display:inline-flex;align-items:center;justify-content:center;gap:6px;margin-left:10px;padding:3px;flex:0 0 auto;white-space:nowrap}",
    ".language-switcher a{display:inline-flex!important;align-items:center;justify-content:center;width:34px;height:32px;min-width:34px;padding:0!important;border:1px solid transparent;border-radius:7px;font-size:21px!important;line-height:1!important;letter-spacing:normal!important;text-decoration:none!important;opacity:.88;transition:background-color .18s ease,opacity .18s ease,border-color .18s ease}",
    ".language-switcher a:hover{opacity:1;background:rgba(255,255,255,.13);text-decoration:none!important}",
    ".language-switcher a[aria-current=page]{opacity:1;background:rgba(232,203,168,.2);border-color:#e8cba8}",
    ".language-switcher a:focus-visible{opacity:1;outline:2px solid #e8cba8;outline-offset:2px}",
    "@media(max-width:650px){.language-switcher{margin-left:0;gap:5px}.language-switcher a{width:31px;height:30px;min-width:31px;font-size:20px!important}}"
  ].join("");
  document.head.appendChild(style);

  var box = document.createElement("div");
  box.className = "language-switcher";
  box.setAttribute("role", "group");
  box.setAttribute("aria-label", "Choose language");

  [
    { id: "pl", flag: "🇵🇱", name: "Polski" },
    { id: "en", flag: "🇬🇧", name: "English" },
    { id: "ua", flag: "🇺🇦", name: "Українська" }
  ].forEach(function (item) {
    var a = document.createElement("a");
    a.textContent = item.flag;
    if (base === "/dopomoha-ukraintsiam/" && item.id !== "ua") {
      a.href = item.id === "pl" ? "/" : "/en/";
    } else {
      a.href = item.id === "pl" ? base : "/" + item.id + base;
    }
    a.setAttribute("aria-label", item.name);
    a.setAttribute("title", item.name);
    a.setAttribute("hreflang", item.id === "ua" ? "uk" : item.id);
    if (item.id === lang) a.setAttribute("aria-current", "page");
    box.appendChild(a);
  });

  nav.appendChild(box);
})();