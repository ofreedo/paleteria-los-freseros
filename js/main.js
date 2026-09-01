// Paletería Los Freseros — shared site behavior

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollReveal();
  initHeaderShadowOnScroll();
  initReducedMotionVideo();
  initHeaderHeightVar();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((t) => observer.observe(t));
}

function initHeaderShadowOnScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 4px 16px rgba(42,24,16,0.08)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initReducedMotionVideo() {
  const video = document.querySelector(".story-hero-video video");
  if (!video) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.removeAttribute("autoplay");
    video.removeAttribute("loop");
    video.pause();
    video.currentTime = 0;
  }
}

// Measures the real rendered header height so sticky elements below it
// (e.g. the menu page's category toolbar) can stick flush underneath it
// instead of relying on a guessed pixel value that drifts at different
// viewport sizes.
function initHeaderHeightVar() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const setVar = () => {
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
  };
  setVar();
  window.addEventListener("resize", setVar);
  if ("ResizeObserver" in window) {
    new ResizeObserver(setVar).observe(header);
  }
}
