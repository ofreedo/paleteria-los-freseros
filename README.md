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

The password gate used during development has been removed from all 5 main pages, and the `noindex` meta tag is gone — Google and other search engines can now crawl and index the site normally.

`js/site-gate.js` and `css/site-gate.css` still exist in the repo but are no longer referenced by any page. They're safe to delete, or keep around in case the site ever needs to go back into a private preview state (e.g. before a major redesign) — just re-add the `<link>`/`<script>` tags and the `noindex` meta tag to bring the gate back.

`tv-slideshow.html` (see below) intentionally carries its own `noindex` tag and is not linked from navigation — it's reachable only by direct URL.

## Ordering: phone only, no DoorDash

The client asked to stop routing customers to DoorDash. Every "Order Online" button across the site was replaced with **"Call to Order"**, linking to `tel:+18318335370`. There is no DoorDash link anywhere on the site anymore — don't reintroduce one without explicit direction.

## Project structure

```
paleteria-los-freseros/
├── index.html          Homepage
├── menu.html            Full menu + three "Build Your Own" builders
├── story.html            "In the Shop" page (video hero + brand story)
├── specials.html          Specials (currently an empty-state template)
├── contact.html            Contact / Visit Us page
├── tv-slideshow.html        Unlisted, full-screen looping menu slideshow for the in-store TV
├── proposal.html           Internal pricing one-pager (not linked from the site nav)
├── CNAME                  GitHub Pages custom domain config
├── css/
│   ├── tokens.css         Design tokens: colors, type scale, spacing, radii
│   ├── base.css            Global resets, typography, buttons, layout helpers
│   ├── components.css       Shared components used across pages (header, footer, cards, chips, lightbox, final-cta)
│   ├── home.css              Homepage-only sections (hero, spotlight, builder teaser, etc.)
│   ├── menu.css                Menu page + the three "Build Your Own" builders
│   ├── story.css                 "In the Shop" page
│   ├── specials.css                Specials page
│   ├── contact.css                   Contact page
│   └── site-gate.css                   Password gate lock screen (disabled — see above)
├── js/
│   ├── menu-data.js         Single source of truth: menu items, categories, hours, business info, builder data
│   ├── main.js                Shared behavior: mobile nav, scroll-reveal animations, header shadow, header-height sync
│   ├── home.js                  Renders homepage favorites/preview/category grids
│   ├── menu.js                    Renders menu categories, handles filters, deep links, and scroll-spy chip highlighting
│   ├── builder.js                   Paleta Loca / Arizona Loca / Manzana Loca interactive configurators
│   ├── lightbox.js                    Click-to-enlarge modal for any menu item photo
│   ├── spotlight.js                     Homepage rotating flavor spotlight
│   ├── open-status.js                     Live "Open now / Closed" badge
│   ├── contact.js                           Renders the hours table on the Contact page
│   └── site-gate.js                           Password gate logic (disabled — see above)
└── images/                 Logo + real business/menu photography
```

## Updating the menu, hours, or business info

Everything content-related lives in **`js/menu-data.js`** — edit it once and every page that uses that data (homepage favorites, menu grid, builders, spotlight, contact hours, TV slideshow) updates automatically.

- **`MENU_ITEMS`** — every menu item: id, name, price, category, description, optional `badge` ("Fan Favorite" / "Best Seller"), and `image` path.
  - Items with a real photo point to a file directly in `images/` (e.g. `images/Paleta Loca.png`).
  - Items without a confirmed photo yet use a placeholder path starting with `images/menu/` (e.g. `images/menu/milkshake.jpg`) — these files **don't exist**. The site detects this prefix and shows a labeled placeholder box instead of a broken image. Once you have a real photo for one of these items, drop the file into `images/` and update the `image` field to point at it.
  - Leave `price` out entirely (don't set it to `0` or `null`) for items where the price isn't confirmed — the site will show "Ask for pricing in-store" instead of a dollar amount.
  - Most menu photos are real, in-store product photos at this point — only a handful of items are still on placeholders.
- **`MENU_CATEGORIES`** — the 6 menu sections (Paletas, Nieves, Mangonadas, Frutas, Antojitos, Bebidas) and their descriptions.
- **`CRAVING_FILTERS`** — the "¿Qué se te antoja?" homepage tiles and which categories each one filters to on the menu page.
- **`PALETA_LOCA_BUILDER`, `ARIZONA_LOCA_BUILDER`, `MANZANA_LOCA_BUILDER`** — flavor-style options and toppings for each of the three interactive "Build Your Own" tools on the menu page. Toppings can optionally include an `image` field for a real photo thumbnail instead of an emoji (see `js/builder.js`).
- **`BUSINESS_INFO`** — address, phone, email, and hours. There is no `orderUrl`/DoorDash field — ordering is phone-only (see above).
  - `hours` is the human-readable schedule shown in the footer and Contact page.
  - `hoursMinutes` is the same schedule in minutes-from-midnight, used by the live "Open now" badge to do real-time math. **If you change `hours`, update `hoursMinutes` too** — they're not derived from each other.

## The three "Build Your Own" builders

`menu.html` has three tabs — Paleta Loca, Arizona Loca, and Manzana Loca — all rendered by the same reusable factory function in `js/builder.js`, driven by the three `*_BUILDER` objects in `js/menu-data.js`. Each can independently have a flavor-style picker and a topping picker; toppings render a real photo thumbnail when the topping object has an `image` field, or an emoji otherwise.

Each builder's base price appears in two places that must be kept in sync: the `basePrice` field in `menu-data.js`, and a hardcoded fallback price in the builder's summary card markup in `menu.html` (shown before JS finishes rendering). If you change a builder's base price, update both.

## TV slideshow (`tv-slideshow.html`)

A full-screen, auto-looping slideshow of real menu photos for a TV in the store. Not linked from site navigation and marked `noindex` — reachable only via direct URL.

- Builds its slide list live from `MENU_ITEMS` every time it loads — collapses items sharing the same photo (e.g. size variants) into one slide with all matching prices shown together. No manual slide list to maintain.
- `SLIDESHOW_EXCLUDED_IDS` near the top of the inline script lets you exclude specific items from the slideshow only (they stay on the real menu) — currently used to hide ice cream cups, waffle cones, and sodas per client request.
- Photos noticeably squarer than the 16:9 frame (portrait shots, and 4:3 shots) are shown uncropped (`object-fit: contain`) instead of being aggressively cropped by `cover` — see `PORTRAIT_THRESHOLD` in the script if a photo still looks over- or under-cropped.
- Subtle prev/next arrow controls sit at the screen edges, invisible until hovered/tapped/focused — useful for manually stepping through slides during setup, not needed for normal unattended looping. Arrow keys also work.
- To change how long each slide is shown, edit `SLIDE_DURATION_MS` near the top of the script (currently 6000ms).
- To turn it into an actual video file (e.g. for upload somewhere that needs an MP4), open it full-screen in a browser and record the screen (e.g. QuickTime's Screen Recording on a Mac) for one full loop, then trim/export.

## Adding real photography

A few menu items and most of the "In the Shop" page still use labeled placeholder boxes (e.g. "[Milkshake photo]") describing the shot needed — treat these as a shot list. Once you have a photo:

1. Add the image file to `images/`.
2. Update the relevant `image` field in `js/menu-data.js` (for menu items) or the `<img src="...">` in the relevant HTML file (for hero/story/gallery photos).

Clicking any real menu photo on the site (menu page or homepage) opens a full-size lightbox modal (`js/lightbox.js`) — this is automatic for any `.card-media img`, no per-photo setup needed.

## Specials page

`specials.html` currently shows an empty state ("No specials posted right now") because there are no confirmed real specials yet. There's a commented-out `.special-card` template in the HTML — duplicate it, fill in real details, and remove the empty-state block once you have at least one live special. Don't invent specials that don't exist.

## Design system notes

- **Colors, fonts, spacing:** all defined as CSS custom properties in `css/tokens.css`. Change a token there and it updates everywhere.
- **Bold section backgrounds:** short/card-heavy sections (craving finder, category tiles, reviews, builder teasers, final CTAs) use solid logo-derived colors via `.bg-chili`, `.bg-tropical`, `.bg-mango` utility classes (defined in `css/base.css`) for a bolder, more "Mexican market" feel — paragraph-heavy sections stay on cream/white for readability. When adding a new bold-color section, double check any child component (buttons, badges, chip text) that has its own hardcoded color still has enough contrast against the new background — several early passes at this needed follow-up fixes for exactly that reason.
- **Fonts:** Fraunces (display/headings) + Plus Jakarta Sans (body) + Caveat (script accents), loaded from Google Fonts.
- **Scalloped dividers:** the papel-picado-style wavy section breaks are a reusable `.scallop-divider` SVG component in `css/components.css` — used sparingly at a few key transitions, not on every section.
- **Serape stripe accent:** a repeating four-color gradient (chili/mango/tropical/strawberry) used as a decorative top border on the footer and the menu page's sticky toolbar.
- **Scroll reveals:** any element with class `reveal` fades/rises into view on scroll (see `initScrollReveal()` in `js/main.js`). Elements rendered dynamically by JS (menu cards, category tiles) call `initScrollReveal()` again after inserting into the DOM.
- **Menu filter scroll-spy:** on `menu.html`, the category filter chip that matches whichever section is currently scrolled into view highlights automatically (see `initScrollSpy()` in `js/menu.js`). It stops once the user explicitly picks a filter/craving, so it never fights a deliberate choice.
- **Motion:** all animations respect `prefers-reduced-motion` and disable themselves for users who have that preference set, including the story page's background video.

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

Each of the 5 main pages (`index.html`, `menu.html`, `story.html`, `specials.html`, `contact.html`) has its own `<title>`, meta description, canonical URL, and Open Graph tags (using the logo as the share-preview image) for richer Google and social media results. The homepage and Contact page additionally include `IceCreamShop` JSON-LD structured data. If the business address, phone, or hours ever change, update them in **both** `js/menu-data.js` and the JSON-LD `<script type="application/ld+json">` blocks in `index.html` and `contact.html` — they're not currently generated from the same source.

`tv-slideshow.html` is deliberately excluded from all of this via a `noindex` meta tag — it's an operational tool, not a page meant to be found by visitors or search engines.

## Social links

The footer's Instagram icon links to [@paleteria.los_freseros](https://www.instagram.com/paleteria.los_freseros/). There is no Facebook icon — it was removed at the client's request; don't re-add it without confirming first.
