// Click-to-enlarge modal for menu item photos (".card-media img").
// Event-delegated so it works for cards rendered after page load (menu grid,
// homepage favorites/preview), with no per-page wiring needed.

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Close">&times;</button>
    <figure class="lightbox-figure">
      <img class="lightbox-img" src="" alt="">
      <figcaption class="lightbox-caption"></figcaption>
    </figure>`;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector(".lightbox-img");
  const captionEl = overlay.querySelector(".lightbox-caption");
  const closeBtn = overlay.querySelector(".lightbox-close");
  let lastFocused = null;

  function openLightbox(src, alt) {
    lastFocused = document.activeElement;
    imgEl.src = src;
    imgEl.alt = alt || "";
    captionEl.textContent = alt || "";
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-locked");
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("lightbox-locked");
    imgEl.src = "";
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".card-media img");
    if (!img) return;
    openLightbox(img.currentSrc || img.src, img.alt);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === closeBtn) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeLightbox();
  });
});
