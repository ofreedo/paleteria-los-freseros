// Homepage: rotating spotlight of real badged menu items (Fan Favorite / Best Seller).

document.addEventListener("DOMContentLoaded", () => {
  if (typeof MENU_ITEMS === "undefined") return;
  initSpotlight();
});

function initSpotlight() {
  const el = document.getElementById("flavor-spotlight");
  if (!el) return;

  // Curated: real photo + genuinely notable (badge, or a signature/best-seller item).
  const spotlightIds = ["tostielote-mixto", "mangonada-sm", "banana-split", "coctel-de-frutas"];
  const items = spotlightIds
    .map((id) => MENU_ITEMS.find((i) => i.id === id))
    .filter((i) => i && i.image && !i.image.startsWith("images/menu/"));
  if (items.length < 2) return;

  el.innerHTML =
    items
      .map((item, i) => {
        const category = MENU_CATEGORIES.find((c) => c.id === item.category);
        const badgeLabel = item.badge || (category ? category.name : "");
        return `
      <div class="spotlight-slide${i === 0 ? " is-active" : ""}" data-index="${i}">
        <div class="spotlight-media"><img src="${item.image}" alt="${item.name}" loading="${i === 0 ? "eager" : "lazy"}"></div>
        <div class="spotlight-copy">
          ${badgeLabel ? `<span class="badge">${badgeLabel}</span>` : ""}
          <h3 class="h3">${item.name}</h3>
          <p>${item.description}</p>
          ${typeof item.price === "number" ? `<p class="price">$${item.price.toFixed(2)}</p>` : ""}
        </div>
      </div>`;
      })
      .join("") +
    `<div class="spotlight-dots">${items
      .map((_, i) => `<button type="button" class="spotlight-dot${i === 0 ? " is-active" : ""}" data-goto="${i}" aria-label="Show item ${i + 1}"></button>`)
      .join("")}</div>`;

  let current = 0;
  const slides = el.querySelectorAll(".spotlight-slide");
  const dots = el.querySelectorAll(".spotlight-dot");

  function goTo(index) {
    current = index;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }

  let timer = startRotation();

  function startRotation() {
    return setInterval(() => goTo((current + 1) % items.length), 4500);
  }

  el.querySelector(".spotlight-dots").addEventListener("click", (e) => {
    const dot = e.target.closest(".spotlight-dot");
    if (!dot) return;
    clearInterval(timer);
    goTo(Number(dot.dataset.goto));
    timer = startRotation();
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) clearInterval(timer);
}
