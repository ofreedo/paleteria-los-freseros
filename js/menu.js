// Menu page: renders category sections, handles filters, deep-links from craving finder & category tiles.

document.addEventListener("DOMContentLoaded", () => {
  renderFilterBar();
  renderMenu();
  wireFilterClicks();
  applyInitialFilter();
  initScrollSpy();
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

// True once the user has explicitly picked a filter (click, craving link, or
// deep link) — scroll-spy stops overriding the active chip once this is set,
// since it must not fight a filter the user actually chose. Note this is
// separate from the ".is-active" DOM class, which scroll-spy also writes to
// while this flag is still false.
let userSelectedFilter = false;

function wireFilterClicks() {
  const bar = document.getElementById("filter-bar");
  if (!bar) return;
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-filter");
    if (!btn) return;
    userSelectedFilter = btn.dataset.filter !== "all";
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
    userSelectedFilter = true;
    setTimeout(() => setActiveFilter(craving, { scroll: true }), 50);
  } else if (hash && document.getElementById(hash)) {
    setTimeout(() => document.getElementById(hash).scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
}

// Highlights the filter chip for whichever category section is currently in
// view while scrolling. Only active when "All" is selected — once the user
// filters down to a specific category/craving, the chip they picked stays
// highlighted instead of being overridden by scroll position.
//
// Uses a throttled scroll listener rather than IntersectionObserver: with a
// tall page and many sections, IntersectionObserver only re-fires when a
// *watched element's own* ratio crosses a threshold, so it stops updating
// once every section is either fully past or fully ahead of the viewport —
// exactly the case here. Recomputing from live geometry on scroll instead
// stays correct regardless of scroll distance or speed.
function initScrollSpy() {
  const blocks = Array.from(document.querySelectorAll(".menu-category-block"));
  const toolbar = document.querySelector(".menu-toolbar");
  if (!blocks.length) return;

  function updateActiveChip() {
    if (userSelectedFilter) return;

    const lineY = (toolbar?.getBoundingClientRect().bottom || 0) + 20;
    const current = blocks.reduce((a, b) => {
      const aTop = a.getBoundingClientRect().top;
      const bTop = b.getBoundingClientRect().top;
      return bTop <= lineY && bTop > aTop ? b : a;
    }, blocks[0]);
    const categoryId = current.dataset.category;
    document.querySelectorAll(".chip-filter").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.filter === categoryId);
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActiveChip();
      ticking = false;
    });
  }, { passive: true });

  updateActiveChip();
}
