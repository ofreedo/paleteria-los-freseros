// Menu page: "Build Your Own" interactive previews (not a real checkout).
// Reusable factory so Paleta Loca, Arizona Loca, and Manzana Loca can each run
// their own independent instance from the same code.

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PALETA_LOCA_BUILDER !== "undefined") {
    initBuilder({ rootId: "paleta-builder", data: PALETA_LOCA_BUILDER, itemName: "Paleta Loca", hasFlavorStyles: true });
  }
  if (typeof ARIZONA_LOCA_BUILDER !== "undefined") {
    initBuilder({ rootId: "arizona-builder", data: ARIZONA_LOCA_BUILDER, itemName: "Arizona Loca", hasFlavorStyles: true });
  }
  if (typeof MANZANA_LOCA_BUILDER !== "undefined") {
    initBuilder({ rootId: "manzana-builder", data: MANZANA_LOCA_BUILDER, itemName: "Manzana Loca" });
  }
  initBuilderTabs();
});

function initBuilder(config) {
  const root = document.getElementById(config.rootId);
  if (!root) return;

  const flavorsEl = root.querySelector("[data-builder-flavors]");
  const toppingsEl = root.querySelector("[data-builder-toppings]");
  const nameEl = root.querySelector("[data-builder-name]");
  const listEl = root.querySelector("[data-builder-summary-list]");
  const priceEl = root.querySelector("[data-builder-price]");
  if (!toppingsEl || !nameEl || !listEl || !priceEl) return;

  const state = { flavor: null, toppings: new Set() };

  if (config.hasFlavorStyles && flavorsEl) {
    flavorsEl.innerHTML = config.data.flavorStyles
      .map((f) => `<button type="button" class="paleta-flavor-toggle" data-flavor="${f.id}">${f.label}</button>`)
      .join("");
    flavorsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".paleta-flavor-toggle");
      if (!btn) return;
      state.flavor = btn.dataset.flavor;
      flavorsEl.querySelectorAll(".paleta-flavor-toggle").forEach((b) => b.classList.toggle("is-selected", b === btn));
      render();
    });
  }

  toppingsEl.innerHTML = config.data.toppings
    .map((t) => {
      const mediaHtml = t.image
        ? `<img class="topping-thumb" src="${t.image}" alt="" aria-hidden="true">`
        : `<span class="emoji" aria-hidden="true">${t.emoji}</span>`;
      return `<button type="button" class="topping-toggle" data-topping="${t.id}">
          ${mediaHtml}${t.label}
        </button>`;
    })
    .join("");
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
    render();
  });

  function render() {
    nameEl.textContent = config.hasFlavorStyles
      ? state.flavor
        ? config.data.flavorStyles.find((f) => f.id === state.flavor).label + " " + config.itemName
        : "Pick a flavor style"
      : config.itemName;

    if (state.toppings.size === 0) {
      listEl.innerHTML = '<span class="empty-hint">No toppings yet — tap a few above.</span>';
    } else {
      listEl.innerHTML = Array.from(state.toppings)
        .map((id) => {
          const t = config.data.toppings.find((tp) => tp.id === id);
          return `<span class="builder-summary-chip">${t.emoji} ${t.label}</span>`;
        })
        .join("");
    }

    priceEl.textContent = `$${config.data.basePrice.toFixed(2)}`;
  }

  render();
}

function initBuilderTabs() {
  const tabs = document.querySelectorAll("[data-builder-tab]");
  const panels = document.querySelectorAll("[data-builder-panel]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.builderTab;
      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle("is-active", isActive);
        t.setAttribute("aria-selected", String(isActive));
      });
      panels.forEach((p) => {
        p.hidden = p.id !== targetId;
      });
    });
  });
}
