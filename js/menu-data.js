/**
 * Paletería Los Freseros — menu data
 * Primary source: in-store chalkboard menu photos (re-verified 2026-08-29) — actual walk-in
 * pricing, used wherever an item appears on the boards. Boards are handwritten and change
 * over time, so board pricing always wins over older DoorDash-sourced prices. Items not shown
 * on any photographed board are kept from the DoorDash listing at DoorDash's price, which runs
 * higher (standard delivery markup).
 * Update this file to update the whole site.
 */

const MENU_ITEMS = [
  // ---- Paletas ----
  {
    id: "paleta",
    name: "Paleta",
    price: 3.50,
    category: "paletas",
    description: "Classic Mexican paleta.",
    image: "images/paleta-regular.png"
  },
  {
    id: "paleta-loca",
    name: "Paleta Loca",
    price: 7.99,
    category: "paletas",
    description: "Choice of paleta, gummies, Tajín, miguelito, chamoy, jabalina, and fruit.",
    badge: "Fan Favorite",
    image: "images/Paleta Loca.png"
  },

  // ---- Nieves / Ice Cream ----
  {
    id: "ice-cream-cup-1",
    name: "Ice Cream Cup — 1 Scoop",
    price: 4.49,
    category: "nieves",
    description: "Choice of flavor in a cup: lime, mango, vanilla, lavender, pistachio, chocolate, cookie dough, rainbow sherbet, strawberry cream, bubble gum, 10-20 caramel, and more.",
    image: "images/ice-cream-one-scoop.png"
  },
  {
    id: "ice-cream-cup-2",
    name: "Ice Cream Cup — 2 Scoop",
    price: 5.49,
    category: "nieves",
    description: "Two scoops, choice of flavors, in a cup.",
    image: "images/ice-cream-two-scoops.png"
  },
  {
    id: "ice-cream-cup-3",
    name: "Ice Cream Cup — 3 Scoop",
    price: 7.49,
    category: "nieves",
    description: "Three scoops, choice of flavors, in a cup.",
    image: "images/ice-cream-three-scoops.png"
  },
  {
    id: "ice-cream-waffle-1",
    name: "Waffle Cone — 1 Scoop",
    price: 5.99,
    category: "nieves",
    description: "One scoop in a fresh waffle cone.",
    image: "images/waffle-cone-one-scoops.png"
  },
  {
    id: "ice-cream-waffle-2",
    name: "Waffle Cone — 2 Scoop",
    price: 6.99,
    category: "nieves",
    description: "Two scoops in a fresh waffle cone.",
    image: "images/waffle-cone-two-scoops.png"
  },
  {
    id: "ice-cream-waffle-3",
    name: "Waffle Cone — 3 Scoop",
    price: 8.99,
    category: "nieves",
    description: "Three scoops in a fresh waffle cone.",
    image: "images/waffle-cone-three-scoops.png"
  },
  {
    id: "banana-split",
    name: "Banana Split",
    price: 13.49,
    category: "nieves",
    description: "Three scoops of ice cream, banana, chocolate, whipped cream, and a cherry.",
    image: "images/bananna-split.png"
  },
  {
    id: "gansito-split",
    name: "Gansito Split",
    price: 13.49,
    category: "nieves",
    description: "Three scoops of ice cream, Gansito, chocolate, whipped cream, and a cherry.",
    image: "images/Gansito-Split.png"
  },
  {
    id: "ice-cream-pints",
    name: "Ice Cream Pints",
    price: 9.99,
    category: "nieves",
    description: "Homemade mango or lime.",
    image: "images/ice-cream-Pints.png"
  },
  {
    id: "cremi-mango-sm",
    name: "Cremi Mango — Small",
    price: 8.99,
    category: "nieves",
    description: "Mango ice cream, sweet cream, and whipped cream.",
    image: "images/Mango-cream.png"
  },
  {
    id: "cremi-mango-lg",
    name: "Cremi Mango — Large",
    price: 9.99,
    category: "nieves",
    description: "Mango ice cream, sweet cream, and whipped cream.",
    image: "images/Mango-cream.png"
  },
  {
    id: "milkshake-sm",
    name: "Milkshake — Small",
    price: 8.99,
    category: "nieves",
    description: "Classic hand-blended milkshake, choice of flavor.",
    image: "images/milkshake-v2.png"
  },
  {
    id: "milkshake-lg",
    name: "Milkshake — Large",
    price: 10.49,
    category: "nieves",
    description: "Classic hand-blended milkshake, choice of flavor.",
    image: "images/milkshake-v2.png"
  },
  {
    id: "sundae-2",
    name: "Sundae — 2 Scoops",
    price: 9.99,
    category: "nieves",
    description: "Two scoops of ice cream with your choice of toppings.",
    image: "images/sundae-v2.png"
  },
  {
    id: "sundae-3",
    name: "Sundae — 3 Scoops",
    price: 11.99,
    category: "nieves",
    description: "Three scoops of ice cream with your choice of toppings.",
    image: "images/sundae-v2.png"
  },

  // ---- Mangonadas ----
  {
    id: "diablito-sm",
    name: "Diablito — Small",
    price: 8.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, jabalina, and chamoy.",
    image: "images/diablito-Mangonada-v4.png"
  },
  {
    id: "diablito-md",
    name: "Diablito — Medium",
    price: 9.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, jabalina, and chamoy.",
    image: "images/diablito-Mangonada-v4.png"
  },
  {
    id: "mangonada-sm",
    name: "Mangonada — Small",
    price: 8.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, lime, jabalina, chamoy, and fresh mango.",
    badge: "Fan Favorite",
    image: "images/Mangonada.png"
  },
  {
    id: "mangonada-md",
    name: "Mangonada — Medium",
    price: 9.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, lime, jabalina, chamoy, and fresh mango.",
    image: "images/Mangonada.png"
  },
  {
    id: "manzana-loca",
    name: "Manzana Loca",
    price: 9.49,
    category: "mangonadas",
    description: "Chamoy-covered apple, gummy candies, and Tajín.",
    image: "images/Manzana Loca.png"
  },
  {
    id: "arizona-loca",
    name: "Arizona Loca",
    price: 7.99,
    category: "mangonadas",
    description: "Watermelon-flavored or mango, served on an Arizona can with fruit, gummies, jabalina, chamoy, and miguelito.",
    image: "images/Arizona_loca.png"
  },

  // ---- Frutas ----
  {
    id: "acai-bowl-sm",
    name: "Açaí Bowl — Small (16 oz)",
    price: 9.99,
    category: "frutas",
    description: "Strawberries, banana, blueberries, granola, and honey.",
    image: "images/Acai Bowl.png"
  },
  {
    id: "acai-bowl-lg",
    name: "Açaí Bowl — Large (24 oz)",
    price: 10.99,
    category: "frutas",
    description: "Strawberries, banana, blueberries, granola, and honey.",
    image: "images/Acai Bowl.png"
  },
  {
    id: "fresas-con-crema-sm",
    name: "Fresas con Crema — Small",
    price: 9.99,
    category: "frutas",
    description: "Fresh strawberries, sweet cream, whipped cream, and a cherry.",
    image: "images/Fresas_con_crema.png"
  },
  {
    id: "fresas-con-crema-lg",
    name: "Fresas con Crema — Large",
    price: 10.99,
    category: "frutas",
    description: "Fresh strawberries, sweet cream, whipped cream, and a cherry.",
    image: "images/Fresas_con_crema.png"
  },
  {
    id: "caja-fresas-congeladas",
    name: "Caja Fresas Congeladas",
    category: "frutas",
    description: "Frozen strawberries in a box, topped with sweet cream and a wafer straw. One regular size.",
    image: "images/caja-fresas-congeladas.png"
  },
  {
    id: "coctel-de-frutas",
    name: "Coctel de Frutas",
    price: 9.99,
    category: "frutas",
    description: "Any fruit available, lime, Tajín, jabalina, and chamoy.",
    image: "images/Coctel-de-frutas .png"
  },
  {
    id: "bionico",
    name: "Bionico",
    price: 10.99,
    category: "frutas",
    description: "Seasonal fruit (typically mango, strawberries, green apple) covered in a house-made sweet cream.",
    image: "images/bionico.png"
  },

  // ---- Antojitos ----
  {
    id: "maruchan-loca",
    name: "Maruchan Loca",
    price: 12.49,
    category: "antojitos",
    description: "Doritos, elote preparado, on the side with hot noodles.",
    image: "images/Maruchan_Loca.png"
  },
  {
    id: "tostilocos",
    name: "Tostilocos",
    price: 10.50,
    category: "antojitos",
    description: "Any choice of chips, pickled pork, jicama, cucumber, peanuts, chile, and lime.",
    image: "images/tostiloco.png"
  },
  {
    id: "tostielote-mixto",
    name: "Tostielote Mixto",
    price: 12.49,
    category: "antojitos",
    description: "Tostilocos with any chips, plus elote.",
    badge: "Best Seller",
    image: "images/menu/tostielote-mixto.jpg"
  },
  {
    id: "crepes",
    name: "Crepes",
    price: 10.29,
    category: "antojitos",
    description: "Nutella, banana, strawberries, whipped cream, and powdered sugar.",
    image: "images/Crepes.png"
  },
  {
    id: "concha-sandwich",
    name: "Concha Sandwich",
    price: 8.99,
    category: "antojitos",
    description: "Chocolate or vanilla concha (pan dulce), any ice cream, whipped cream.",
    image: "images/Concha Sandwich.png"
  },
  {
    id: "elote-sm",
    name: "Elote — Small",
    price: 5.49,
    category: "antojitos",
    description: "Mayo, cheese, chile, lime.",
    image: "images/Esquite.png"
  },
  {
    id: "elote-lg",
    name: "Elote — Large",
    price: 7.49,
    category: "antojitos",
    description: "Mayo, cheese, chile, lime.",
    image: "images/Esquite.png"
  },
  {
    id: "tosti-elote",
    name: "Tosti-Elote",
    price: 11.99,
    category: "antojitos",
    description: "Tostitos chips with prepared elote.",
    image: "images/Tosti-elote.png"
  },
  {
    id: "chicharron-preparado",
    name: "Chicharrón Preparado",
    price: 11.49,
    category: "antojitos",
    description: "Duro chicharrón with cabbage, onion, tomato, avocado, pickled pork, lime, and salsa.",
    image: "images/Chicharron-preparado.png"
  },
  {
    id: "chicharrmes",
    name: "Chicharrmes",
    price: 2.99,
    category: "antojitos",
    description: "Wheel chicharrón chips covered in lime & chile.",
    image: "images/Chicharrones.png"
  },

  // ---- Bebidas ----
  {
    id: "fountain-drink",
    name: "Fountain Drink",
    price: 2.99,
    category: "bebidas",
    description: "Coke, Sprite, Fanta, Kombucha, or sparkling water.",
    image: "images/fountain-drinks.png"
  },
  {
    id: "aguas-frescas-sm",
    name: "Agua's Frescas — Small",
    price: 5.49,
    category: "bebidas",
    description: "Horchata, or lime with chia.",
    image: "images/horchata_grande.png"
  },
  {
    id: "aguas-frescas-lg",
    name: "Agua's Frescas — Large",
    price: 8.49,
    category: "bebidas",
    description: "Horchata, or lime with chia.",
    image: "images/horchata_grande.png"
  },
  {
    id: "agua-de-limon-chia-pepino-sm",
    name: "Agua de Limón con Chía y Pepino — Small",
    price: 5.49,
    category: "bebidas",
    description: "Lime, cucumber, and chia agua fresca.",
    image: "images/Agua_de_limon_con_chia_y_pepino.png"
  },
  {
    id: "agua-de-limon-chia-pepino-lg",
    name: "Agua de Limón con Chía y Pepino — Large",
    price: 8.49,
    category: "bebidas",
    description: "Lime, cucumber, and chia agua fresca.",
    image: "images/Agua_de_limon_con_chia_y_pepino.png"
  },
  {
    id: "italian-soda-sm",
    name: "Italian Soda — Small",
    price: 3.99,
    category: "bebidas",
    description: "Choice of flavor, made fresh.",
    image: "images/menu/italian-soda.jpg"
  },
  {
    id: "italian-soda-lg",
    name: "Italian Soda — Large",
    price: 4.99,
    category: "bebidas",
    description: "Choice of flavor, made fresh.",
    image: "images/menu/italian-soda.jpg"
  },
  {
    id: "frapuchino-sm",
    name: "Frapuchino — Small",
    price: 8.99,
    category: "bebidas",
    description: "Choice of blended Gansito, Oreo, Mazapán, coffee (extra Nescafé), or chocolate/caramel, with milk and whipped cream.",
    image: "images/Frappe_de_mazapan.png"
  },
  {
    id: "frapuchino-lg",
    name: "Frapuchino — Large",
    price: 10.49,
    category: "bebidas",
    description: "Choice of blended Gansito, Oreo, Mazapán, coffee (extra Nescafé), or chocolate/caramel, with milk and whipped cream.",
    image: "images/Frappe_de_mazapan.png"
  }
];

const MENU_CATEGORIES = [
  { id: "paletas", name: "Paletas", spanish: "Paletas", description: "Fruit, cream, and specialty paletas." },
  { id: "nieves", name: "Nieves", spanish: "Nieves", description: "Ice cream by the scoop, cones, splits, and pints." },
  { id: "mangonadas", name: "Mangonadas", spanish: "Mangonadas", description: "Mango, chamoy, chile, and lime combinations." },
  { id: "frutas", name: "Frutas", spanish: "Frutas", description: "Fresh fruit cups, strawberries with cream, and bionicos." },
  { id: "antojitos", name: "Antojitos", spanish: "Antojitos", description: "Elotes, crepes, and Mexican-inspired street-food classics." },
  { id: "bebidas", name: "Bebidas", spanish: "Bebidas", description: "Aguas frescas, fountain drinks, and specialty drinks." }
];

const CRAVING_FILTERS = [
  { id: "dulce", emoji: "🍓", label: "Algo Dulce", categories: ["paletas", "nieves", "frutas"] },
  { id: "tropical", emoji: "🥭", label: "Algo Tropical", categories: ["frutas", "mangonadas"] },
  { id: "chile", emoji: "🌶️", label: "Algo con Chile", categories: ["mangonadas", "antojitos"] },
  { id: "cremoso", emoji: "🍦", label: "Algo Cremoso", categories: ["nieves"] },
  { id: "paleta", emoji: "🍭", label: "Una Paleta", categories: ["paletas"] }
];

const PALETA_LOCA_BUILDER = {
  basePrice: 7.99,
  flavorStyles: [
    { id: "limon", label: "Limón" },
    { id: "watermelon", label: "Watermelon" },
    { id: "guava", label: "Guava" },
    { id: "pineapple", label: "Pineapple" },
    { id: "strawberry", label: "Strawberry" },
    { id: "tamarind", label: "Tamarind" },
    { id: "bubble-gum", label: "Bubble Gum" }
  ],
  toppings: [
    { id: "gummies", emoji: "🐻", label: "Gummies", image: "images/gummies-bears.png.webp" },
    { id: "tajin", emoji: "🌶️", label: "Tajín", image: "images/tajin.png.webp" },
    { id: "miguelito", emoji: "🍋", label: "Miguelito", image: "images/miguelito.jpg" },
    { id: "chamoy", emoji: "🍯", label: "Chamoy", image: "images/chamoy-v2.png" },
    { id: "jabalina", emoji: "🍬", label: "Jabalina", image: "images/jabalina-v2.jpg.webp" },
    { id: "fruit", emoji: "🍓", label: "Fresh fruit" }
  ]
};

// Shared gummy options used by both the Arizona Loca and Manzana Loca builders.
const LOCA_GUMMIES = [
  { id: "worms", emoji: "🐛", label: "Worms", image: "images/worms-gummies.jpg" },
  { id: "apple-rings", emoji: "🍏", label: "Apple Rings", image: "images/apple-rings.jpg" },
  { id: "peach-rings", emoji: "🍑", label: "Peach Rings", image: "images/peach-rings.jpg" },
  { id: "skwinkles", emoji: "🍭", label: "Skwinkles", image: "images/Skwinkles.jpg" },
  { id: "mangitos", emoji: "🥭", label: "Mangitos", image: "images/71YUgKoZ+DL._SL1200_.jpg" }
];

const ARIZONA_LOCA_BUILDER = {
  basePrice: 7.99,
  flavorStyles: [
    { id: "mango", label: "Mango" },
    { id: "watermelon", label: "Watermelon" },
    { id: "kiwi-strawberry", label: "Kiwi-and-Strawberry" }
  ],
  toppings: [
    { id: "fresh-watermelon", emoji: "🍉", label: "Fresh Watermelon", image: "images/watermelon.png" },
    { id: "fresh-mango", emoji: "🥭", label: "Fresh Mango" },
    { id: "large-peanuts", emoji: "🥜", label: "Large Peanuts" },
    ...LOCA_GUMMIES
  ]
};

const MANZANA_LOCA_BUILDER = {
  basePrice: 9.49,
  toppings: [
    { id: "chamoy", emoji: "🍯", label: "Chamoy", image: "images/chamoy-v2.png" },
    { id: "watermelon", emoji: "🍉", label: "Watermelon", image: "images/watermelon.png" },
    { id: "mango", emoji: "🥭", label: "Mango" },
    { id: "jabalina", emoji: "🍬", label: "Jabalina", image: "images/jabalina-v2.jpg.webp" },
    ...LOCA_GUMMIES
  ]
};

const BUSINESS_INFO = {
  name: "Paletería Los Freseros",
  address: "7985 Highway 9, Ben Lomond, CA 95005",
  phone: "(831) 833-5370",
  phoneHref: "tel:+18318335370",
  email: "plosfreseros7985@gmail.com",
  emailHref: "mailto:plosfreseros7985@gmail.com",
  hours: [
    { day: "Monday", time: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM" },
    { day: "Saturday", time: "11:00 AM – 11:00 PM" },
    { day: "Sunday", time: "11:00 AM – 10:00 PM" }
  ],
  // Same schedule as `hours` above, in 24-hour minutes-from-midnight for live open/closed checks.
  // Keep in sync with `hours` if the schedule ever changes.
  hoursMinutes: {
    0: { open: 11 * 60, close: 22 * 60 }, // Sunday
    1: { open: 11 * 60, close: 22 * 60 }, // Monday
    2: { open: 11 * 60, close: 22 * 60 }, // Tuesday
    3: { open: 11 * 60, close: 22 * 60 }, // Wednesday
    4: { open: 11 * 60, close: 22 * 60 }, // Thursday
    5: { open: 11 * 60, close: 23 * 60 }, // Friday
    6: { open: 11 * 60, close: 23 * 60 } // Saturday
  },
  mapEmbedQuery: "7985 Highway 9, Ben Lomond, CA 95005"
};
