// Menu page: "Build Your Own Paleta Loca" interactive preview (not a real checkout).

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PALETA_LOCA_BUILDER === "undefined") return;
  initBuilder();
});

function initBuilder() {
  const flavorsEl = document.getElementById("builder-flavors");
  const toppingsEl = document.getElementById("builder-toppings");
  if (!flavorsEl || !toppingsEl) return;

  const state = {
    flavor: null,
    toppings: new Set()
  };

  flavorsEl.innerHTML = PALETA_LOCA_BUILDER.flavorStyles
    .map((f) => `<button type="button" class="paleta-flavor-toggle" data-flavor="${f.id}">${f.label}</button>`)
    .join("");

  toppingsEl.innerHTML = PALETA_LOCA_BUILDER.toppings
    .map(
      (t) =>
        `<button type="button" class="topping-toggle" data-topping="${t.id}">
          <span class="emoji" aria-hidden="true">${t.emoji}</span>${t.label}
        </button>`
    )
    .join("");

  flavorsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".paleta-flavor-toggle");
    if (!btn) return;
    state.flavor = btn.dataset.flavor;
    flavorsEl.querySelectorAll(".paleta-flavor-toggle").forEach((b) => {
      b.classList.toggle("is-selected", b === btn);
    });
    renderSummary(state);
  });

  toppingsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".topping-toggle");
    if (!btn) return;
    const id = btn.dataset.topping;
    if (state.toppings.has(id)) {
      state.toppings.delete(id);
      btn.classList.remove("is-selected");
    } else {
      state.toppings.add(id);
      btn.classList.add("is-selected");
    }
    renderSummary(state);
  });

  renderSummary(state);
}

function renderSummary(state) {
  const nameEl = document.getElementById("builder-flavor-name");
  const listEl = document.getElementById("builder-summary-list");
  const priceEl = document.getElementById("builder-price");
  if (!nameEl || !listEl || !priceEl) return;

  const flavorLabel = state.flavor
    ? PALETA_LOCA_BUILDER.flavorStyles.find((f) => f.id === state.flavor).label + " Paleta Loca"
    : "Pick a flavor style";
  nameEl.textContent = flavorLabel;

  if (state.toppings.size === 0) {
    listEl.innerHTML = '<span class="empty-hint">No toppings yet — tap a few above.</span>';
  } else {
    listEl.innerHTML = Array.from(state.toppings)
      .map((id) => {
        const t = PALETA_LOCA_BUILDER.toppings.find((tp) => tp.id === id);
        return `<span class="builder-summary-chip">${t.emoji} ${t.label}</span>`;
      })
      .join("");
  }

  priceEl.textContent = `$${PALETA_LOCA_BUILDER.basePrice.toFixed(2)}`;
}
