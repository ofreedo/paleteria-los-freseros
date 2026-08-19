// Temporary password gate — remove this script tag from every page once the site is ready to launch publicly.
(function () {
  var GATE_PASSWORD = "freseros2026";
  var STORAGE_KEY = "losFreserosGateOK";

  if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

  document.documentElement.style.visibility = "hidden";

  function showGate() {
    document.documentElement.style.visibility = "";
    var overlay = document.createElement("div");
    overlay.id = "site-gate-overlay";
    overlay.innerHTML =
      '<div class="site-gate-card">' +
      '<img src="images/logo.png" alt="Paletería Los Freseros" class="site-gate-logo">' +
      '<h1>Preview</h1>' +
      '<p>This site is not public yet. Enter the password to continue.</p>' +
      '<form id="site-gate-form">' +
      '<input type="password" id="site-gate-input" placeholder="Password" autocomplete="off" autofocus>' +
      '<button type="submit">Enter</button>' +
      '</form>' +
      '<p id="site-gate-error">Wrong password. Try again.</p>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById("site-gate-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var val = document.getElementById("site-gate-input").value;
      if (val === GATE_PASSWORD) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        overlay.remove();
      } else {
        document.getElementById("site-gate-error").classList.add("is-visible");
        document.getElementById("site-gate-input").value = "";
        document.getElementById("site-gate-input").focus();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showGate);
  } else {
    showGate();
  }
})();
