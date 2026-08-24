(function () {
  "use strict";

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 8, 6) * 60 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Decorative "next prayer" countdown inside the phone mockup — an
  // illustration of the real Home-screen behaviour, not a live feed.
  var countdownEl = document.querySelector("[data-countdown]");
  if (countdownEl) {
    var target = Date.now() + 2 * 60 * 60 * 1000 + 14 * 60 * 1000 + 33 * 1000;
    var tick = function () {
      var remaining = target - Date.now();
      if (remaining <= 0) {
        target = Date.now() + 3 * 60 * 60 * 1000;
        remaining = target - Date.now();
      }
      var h = Math.floor(remaining / 3600000);
      var m = Math.floor((remaining % 3600000) / 60000);
      var s = Math.floor((remaining % 60000) / 1000);
      var pad = function (n) {
        return String(n).padStart(2, "0");
      };
      countdownEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
    };
    tick();
    if (!reduceMotion) {
      setInterval(tick, 1000);
    }
  }
})();
