// Homepage: renders favorites, category tiles, and menu preview from shared menu data.

document.addEventListener("DOMContentLoaded", () => {
  renderFavorites();
  renderCategories();
  renderPreview();
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
    <div class="card reveal is-visible">
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

function renderFavorites() {
  const el = document.getElementById("favorites-grid");
  if (!el) return;
  const featured = MENU_ITEMS.filter((i) => i.badge);
  const picks = featured.length >= 3 ? featured.slice(0, 3) : MENU_ITEMS.slice(0, 3);
  el.innerHTML = picks.map(productCard).join("");
}

function renderPreview() {
  const el = document.getElementById("preview-grid");
  if (!el) return;
  const previewIds = ["fresas-con-crema-sm", "elote", "banana-gansito-split"];
  const picks = previewIds.map((id) => MENU_ITEMS.find((i) => i.id === id)).filter(Boolean);
  el.innerHTML = picks.map(productCard).join("");
}

function renderCategories() {
  const el = document.getElementById("category-grid");
  if (!el) return;
  el.innerHTML = MENU_CATEGORIES.map(
    (cat) => `
    <a href="menu.html#${cat.id}" class="category-card">
      <div class="ph-img" style="position:absolute; inset:0; width:100%; height:100%;">[${cat.name} photo]</div>
      <div class="category-card-body">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
      </div>
    </a>`
  ).join("");
}
