# Paletería Los Freseros — Website

Marketing website for Paletería Los Freseros, a Mexican paletería in Ben Lomond, California. Static HTML/CSS/JS — no build step, no framework, no backend.

**Live site:** [paleterialosfreseros.com](https://paleterialosfreseros.com)

## Quick start

This is plain HTML/CSS/JS, so there's nothing to install or build. Serve the folder with any static file server and open it in a browser:

```bash
python3 -m http.server 8844
```

Then visit `http://localhost:8844`.

## The site is public and indexable

The password gate used during development has been removed from all 5 pages, and the `noindex` meta tag is gone — Google and other search engines can now crawl and index the site normally.

`js/site-gate.js` and `css/site-gate.css` still exist in the repo but are no longer referenced by any page. They're safe to delete, or keep around in case the site ever needs to go back into a private preview state (e.g. before a major redesign) — just re-add the `<link>`/`<script>` tags and the `noindex` meta tag to bring the gate back.

## Project structure

```
paleteria-los-freseros/
├── index.html          Homepage
├── menu.html            Full menu + "Build Your Own Paleta Loca"
├── story.html            Our Story page
├── specials.html          Specials (currently an empty-state template)
├── contact.html            Contact / Visit Us page
├── proposal.html           Internal pricing one-pager (not linked from the site nav)
├── CNAME                  GitHub Pages custom domain config
├── css/
│   ├── tokens.css         Design tokens: colors, type scale, spacing, radii
│   ├── base.css            Global resets, typography, buttons, layout helpers
│   ├── components.css       Shared components used across pages (header, footer, cards, chips)
│   ├── home.css              Homepage-only sections (hero, spotlight, builder teaser, etc.)
│   ├── menu.css                Menu page + Paleta Loca builder
│   ├── story.css                 Our Story page
│   ├── specials.css                Specials page
│   ├── contact.css                   Contact page
│   └── site-gate.css                   Password gate lock screen (temporary — see above)
├── js/
│   ├── menu-data.js         Single source of truth: menu items, categories, hours, business info
│   ├── main.js                Shared behavior: mobile nav, scroll-reveal animations, header shadow
│   ├── home.js                  Renders homepage favorites/preview/category grids
│   ├── menu.js                    Renders menu categories, handles filters and deep links
│   ├── builder.js                   "Build Your Own Paleta Loca" interactive configurator
│   ├── spotlight.js                   Homepage rotating flavor spotlight
│   ├── open-status.js                   Live "Open now / Closed" badge
│   ├── contact.js                         Renders the hours table on the Contact page
│   └── site-gate.js                        Password gate logic (temporary — see above)
└── images/                 Logo + real business/menu photography
```

## Updating the menu, hours, or business info

Everything content-related lives in **`js/menu-data.js`** — edit it once and every page that uses that data (homepage favorites, menu grid, builder, spotlight, contact hours) updates automatically.

- **`MENU_ITEMS`** — every menu item: id, name, price, category, description, optional `badge` ("Fan Favorite" / "Best Seller"), and `image` path.
  - Items with a real photo point to a file directly in `images/` (e.g. `images/734756085_...jpg`).
  - Items without a confirmed photo yet use a placeholder path starting with `images/menu/` (e.g. `images/menu/elote.jpg`) — these files **don't exist yet**. The site detects this prefix and shows a labeled placeholder box instead of a broken image. Once you have a real photo for one of these items, drop the file into `images/` and update the `image` field to point at it.
  - Leave `price` out entirely (don't set it to `0` or `null`) for items where the price isn't confirmed — the site will show "Ask for pricing in-store" instead of a dollar amount.
- **`MENU_CATEGORIES`** — the 6 menu sections (Paletas, Nieves, Mangonadas, Frutas, Antojitos, Bebidas) and their descriptions.
- **`CRAVING_FILTERS`** — the "¿Qué se te antoja?" homepage tiles and which categories each one filters to on the menu page.
- **`PALETA_LOCA_BUILDER`** — the toppings and flavor-style options used by the interactive builder on the menu page.
- **`BUSINESS_INFO`** — address, phone, DoorDash order link, and hours.
  - `hours` is the human-readable schedule shown in the footer and Contact page.
  - `hoursMinutes` is the same schedule in minutes-from-midnight, used by the live "Open now" badge to do real-time math. **If you change `hours`, update `hoursMinutes` too** — they're not derived from each other.

## Adding real photography

Photography is still missing for some menu items and most of the "Our Story" page. Any image slot using a placeholder shows a clearly labeled box (e.g. "[Elote photo]") describing what shot is needed — treat these as a shot list. Once you have a photo:

1. Add the image file to `images/`.
2. Update the relevant `image` field in `js/menu-data.js` (for menu items) or the `<img src="...">` in the relevant HTML file (for hero/story/gallery photos).

## Specials page

`specials.html` currently shows an empty state ("No specials posted right now") because there are no confirmed real specials yet. There's a commented-out `.special-card` template in the HTML — duplicate it, fill in real details, and remove the empty-state block once you have at least one live special. Don't invent specials that don't exist.

## Design system notes

- **Colors, fonts, spacing:** all defined as CSS custom properties in `css/tokens.css`. Change a token there and it updates everywhere.
- **Fonts:** Fraunces (display/headings) + Plus Jakarta Sans (body) + Caveat (script accents), loaded from Google Fonts.
- **Scalloped dividers:** the papel-picado-style wavy section breaks are a reusable `.scallop-divider` SVG component in `css/components.css` — used sparingly at a few key transitions, not on every section.
- **Scroll reveals:** any element with class `reveal` fades/rises into view on scroll (see `initScrollReveal()` in `js/main.js`). Elements rendered dynamically by JS (menu cards, category tiles) call `initScrollReveal()` again after inserting into the DOM.
- **Motion:** all animations respect `prefers-reduced-motion` and disable themselves for users who have that preference set.

## Hosting & deployment

The site is hosted on **GitHub Pages**, served from the `main` branch. The custom domain (`paleterialosfreseros.com`) is configured via the `CNAME` file in this repo plus DNS records with the domain registrar (4 A records pointing at GitHub's Pages IPs, plus a CNAME for `www`).

To publish changes:

```bash
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages rebuilds automatically within a minute or two of a push to `main`.

### Ongoing costs

- **Domain renewal:** ~$15–20/year through whichever registrar the domain was purchased from.
- **Hosting:** free (GitHub Pages).
- **SSL/HTTPS:** free, auto-renewing (GitHub Pages).

There is no monthly hosting bill and no CMS/admin panel — content updates (menu, photos, copy) require editing the code directly, either by hand or by asking a developer.

## SEO / social sharing

Each page has its own `<title>`, meta description, and canonical URL. The homepage and Contact page additionally include `IceCreamShop` JSON-LD structured data and Open Graph tags (using the logo as the share-preview image) for richer Google and social media results. If the business address, phone, or hours ever change, update them in **both** `js/menu-data.js` and the JSON-LD `<script type="application/ld+json">` blocks in `index.html` and `contact.html` — they're not currently generated from the same source.
