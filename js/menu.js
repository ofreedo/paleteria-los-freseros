// Menu page: renders category sections, handles filters, deep-links from craving finder & category tiles.

document.addEventListener("DOMContentLoaded", () => {
  renderFilterBar();
  renderMenu();
  wireFilterClicks();
  applyInitialFilter();
  if (typeof initScrollReveal === "function") initScrollReveal();
});

function moneyfmt(n) {
  return `$${n.toFixed(2)}`;
}

function hasRealPhoto(item) {
  return !!item.image && !item.image.startsWith("images/menu/");
}

function productCard(item) {
  const priceHtml = typeof item.price === "number"
    ? `<p class="price" style="margin-top:0.6rem; font-size:1.15rem;">${moneyfmt(item.price)}</p>`
    : `<p class="price" style="margin-top:0.6rem; font-size:0.85rem; color:var(--text-muted);">Ask for pricing in-store</p>`;
  const mediaHtml = hasRealPhoto(item)
    ? `<img src="${item.image}" alt="${item.name}" loading="lazy">`
    : `<div class="ph-img">[${item.name} photo]</div>`;
  return `
    <div class="card reveal">
      <div class="card-media">
        ${item.badge ? `<span class="badge card-top-badge">${item.badge}</span>` : ""}
        ${mediaHtml}
      </div>
      <div class="card-body">
        <h3 class="h3">${item.name}</h3>
        <p style="margin-top:0.4rem; color:var(--text-muted); font-size:0.92rem;">${item.description}</p>
        ${priceHtml}
      </div>
    </div>`;
}

function renderFilterBar() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  const chips = MENU_CATEGORIES.map(
    (cat) => `<button class="chip-filter" data-filter="${cat.id}">${cat.name}</button>`
  ).join("");
  bar.insertAdjacentHTML("beforeend", chips);
}

function renderMenu() {
  const container = document.getElementById("menu-categories");
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map((cat) => {
    const items = MENU_ITEMS.filter((i) => i.category === cat.id);
    if (!items.length) return "";
    return `
      <section class="menu-category-block" id="${cat.id}" data-category="${cat.id}">
        <div class="menu-category-head reveal">
          <h2 class="h2">${cat.name}</h2>
          <p>${cat.description}</p>
        </div>
        <div class="menu-grid">
          ${items.map(productCard).join("")}
        </div>
      </section>`;
  }).join("");
}

function wireFilterClicks() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-filter");
    if (!btn) return;
    setActiveFilter(btn.dataset.filter, { scroll: true });
    history.replaceState(null, "", btn.dataset.filter === "all" ? "menu.html" : `menu.html?craving=${btn.dataset.filter}`);
  });
}

function setActiveFilter(filterId, options) {
  options = options || {};
  document.querySelectorAll(".chip-filter").forEach((c) => {
    c.classList.toggle("is-active", c.dataset.filter === filterId);
  });

  const blocks = document.querySelectorAll(".menu-category-block");
  let anyVisible = false;
  let firstVisibleBlock = null;

  if (filterId === "all") {
    blocks.forEach((b) => (b.style.display = ""));
    anyVisible = blocks.length > 0;
    firstVisibleBlock = blocks[0] || null;
  } else {
    const craving = CRAVING_FILTERS.find((c) => c.id === filterId);
    const allowedCategories = craving ? craving.categories : [filterId];
    blocks.forEach((b) => {
      const show = allowedCategories.includes(b.dataset.category);
      b.style.display = show ? "" : "none";
      if (show) {
        anyVisible = true;
        if (!firstVisibleBlock) firstVisibleBlock = b;
      }
    });
  }

  document.getElementById("menu-empty").classList.toggle("is-visible", !anyVisible);

  if (options.scroll && firstVisibleBlock) {
    firstVisibleBlock.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function applyInitialFilter() {
  const params = new URLSearchParams(window.location.search);
  const craving = params.get("craving");
  const hash = window.location.hash.replace("#", "");

  if (craving && CRAVING_FILTERS.some((c) => c.id === craving)) {
    setTimeout(() => setActiveFilter(craving, { scroll: true }), 50);
  } else if (hash && document.getElementById(hash)) {
    setTimeout(() => document.getElementById(hash).scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
}
