// Bootstrap validation (disable submission if invalid)
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

// Footer year (safe check)
var yearEl = document.getElementById("copyrightSpan");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal on scroll (IntersectionObserver)
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // If IntersectionObserver not supported, show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
})();
