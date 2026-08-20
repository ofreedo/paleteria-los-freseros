/**
 * Paletería Los Freseros — menu data
 * Primary source: in-store chalkboard menu photos (verified 2026-08-19) — actual walk-in
 * pricing, used wherever an item appears on the boards. Items not shown on the boards
 * (boards photographed may not cover the full menu) are kept from the DoorDash listing
 * at DoorDash's price, which runs higher (standard delivery markup).
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
    image: "images/menu/paleta.jpg"
  },
  {
    id: "paleta-loca",
    name: "Paleta Loca",
    price: 7.99,
    category: "paletas",
    description: "Choice of paleta, gummies, Tajín, miguelito, chamoy, jabalina, and fruit.",
    badge: "Fan Favorite",
    image: "images/menu/paleta-loca.jpg"
  },

  // ---- Nieves / Ice Cream ----
  {
    id: "ice-cream-cup-1",
    name: "Ice Cream Cup — 1 Scoop",
    price: 4.49,
    category: "nieves",
    description: "Choice of flavor in a cup. Ask about today's flavors: coco-pineapple, rainbow sherbet, mint chip, strawberry cheesecake, rocky road, fudge brownie, coffee, strawberry cream, bubblegum, coffee almond fudge, cookie dough, and more.",
    image: "images/menu/ice-cream-cup.jpg"
  },
  {
    id: "ice-cream-cup-2",
    name: "Ice Cream Cup — 2 Scoop",
    price: 5.49,
    category: "nieves",
    description: "Two scoops, choice of flavors, in a cup.",
    image: "images/menu/ice-cream-cup.jpg"
  },
  {
    id: "ice-cream-cup-3",
    name: "Ice Cream Cup — 3 Scoop",
    price: 7.49,
    category: "nieves",
    description: "Three scoops, choice of flavors, in a cup.",
    image: "images/menu/ice-cream-cup.jpg"
  },
  {
    id: "ice-cream-waffle-1",
    name: "Waffle Cone — 1 Scoop",
    price: 5.99,
    category: "nieves",
    description: "One scoop in a fresh waffle cone.",
    image: "images/menu/waffle-cone.jpg"
  },
  {
    id: "ice-cream-waffle-2",
    name: "Waffle Cone — 2 Scoop",
    price: 6.99,
    category: "nieves",
    description: "Two scoops in a fresh waffle cone.",
    image: "images/menu/waffle-cone.jpg"
  },
  {
    id: "ice-cream-waffle-3",
    name: "Waffle Cone — 3 Scoop",
    price: 8.99,
    category: "nieves",
    description: "Three scoops in a fresh waffle cone.",
    image: "images/menu/waffle-cone.jpg"
  },
  {
    id: "banana-gansito-split",
    name: "Banana / Gansito Split",
    price: 13.49,
    category: "nieves",
    description: "Three scoops of ice cream, banana or Gansito, chocolate, whipped cream, and a cherry.",
    image: "images/739281514_1051278033965727_3295791141335479555_n.jpg"
  },
  {
    id: "ice-cream-pints",
    name: "Ice Cream Pints",
    price: 9.99,
    category: "nieves",
    description: "Homemade mango or lime.",
    image: "images/menu/ice-cream-pints.jpg"
  },
  {
    id: "cremi-mango-sm",
    name: "Cremi Mango — Small",
    price: 8.99,
    category: "nieves",
    description: "Mango ice cream, sweet cream, and whipped cream.",
    image: "images/menu/cremi-mango.jpg"
  },
  {
    id: "cremi-mango-lg",
    name: "Cremi Mango — Large",
    price: 9.99,
    category: "nieves",
    description: "Mango ice cream, sweet cream, and whipped cream.",
    image: "images/menu/cremi-mango.jpg"
  },
  {
    id: "acai-bowl",
    name: "Açaí Bowl",
    price: 12.98,
    category: "nieves",
    description: "Berry blend with fresh strawberries, banana, and toppings.",
    image: "images/menu/acai-bowl.jpg"
  },

  // ---- Mangonadas ----
  {
    id: "diablito-sm",
    name: "Diablito — Small",
    price: 7.49,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, jabalina, and chamoy.",
    image: "images/menu/diablito.jpg"
  },
  {
    id: "diablito-md",
    name: "Diablito — Medium",
    price: 8.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, jabalina, and chamoy.",
    image: "images/menu/diablito.jpg"
  },
  {
    id: "mangonada-sm",
    name: "Mangonada — Small",
    price: 7.49,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, lime, jabalina, chamoy, and fresh mango.",
    badge: "Fan Favorite",
    image: "images/menu/mangonada.jpg"
  },
  {
    id: "mangonada-md",
    name: "Mangonada — Medium",
    price: 8.99,
    category: "mangonadas",
    description: "Any water-based ice cream, Tajín, lime, jabalina, chamoy, and fresh mango.",
    image: "images/menu/mangonada.jpg"
  },
  {
    id: "manzana-loca",
    name: "Manzana Loca",
    price: 12.33,
    category: "mangonadas",
    description: "Chamoy-covered apple with watermelon and house toppings.",
    image: "images/menu/manzana-loca.jpg"
  },
  {
    id: "arizona-loca",
    name: "Arizona Loca",
    price: 10.38,
    category: "mangonadas",
    description: "Fresh fruit choice of watermelon or mango, served on an Arizona can with chamoy and candy.",
    image: "images/734756085_2080408462548013_9059996889824121553_n.jpg"
  },

  // ---- Frutas ----
  {
    id: "fresas-con-crema-sm",
    name: "Fresas con Crema — Small",
    price: 9.99,
    category: "frutas",
    description: "Fresh strawberries, sweet cream, whipped cream, and a cherry.",
    image: "images/menu/fresas-con-crema.jpg"
  },
  {
    id: "fresas-con-crema-lg",
    name: "Fresas con Crema — Large",
    price: 10.99,
    category: "frutas",
    description: "Fresh strawberries, sweet cream, whipped cream, and a cherry.",
    image: "images/menu/fresas-con-crema.jpg"
  },
  {
    id: "fresas-con-crema-frozen",
    name: "Fresas con Crema — Frozen Cup",
    category: "frutas",
    description: "Frozen strawberries, sweet cream, whipped cream, and a cherry.",
    image: "images/menu/fresas-con-crema.jpg"
  },
  {
    id: "coctel-de-frutas",
    name: "Coctel de Frutas",
    category: "frutas",
    description: "Any fruit available, Tajín, jabalina, and chamoy.",
    image: "images/739312568_1499884337942383_3169866657931373353_n.jpg"
  },
  {
    id: "bionico",
    name: "Bionico",
    price: 14.28,
    category: "frutas",
    description: "Seasonal fruit (typically mango, strawberries, green apple) covered in a house-made sweet cream.",
    image: "images/b1143db917bdeeac430463f0147e3ead.jpeg"
  },

  // ---- Antojitos ----
  {
    id: "maruchan-loca",
    name: "Maruchan Loca",
    price: 12.49,
    category: "antojitos",
    description: "Doritos, elote preparado, on the side with hot noodles.",
    image: "images/menu/maruchan-loca.jpg"
  },
  {
    id: "tostielote-mixto",
    name: "Tostielote Mixto",
    price: 12.49,
    category: "antojitos",
    description: "Tostilocos with any chips, plus elote.",
    badge: "Best Seller",
    image: "images/737383685_2064433927614981_448211206417074020_n.jpg"
  },
  {
    id: "crepes",
    name: "Crepes",
    price: 13.37,
    category: "antojitos",
    description: "Nutella, banana, strawberries, homemade whipped cream.",
    image: "images/1ec9cedbcab70bfda43ae021e054aeb9.jpeg"
  },
  {
    id: "concha-sandwich",
    name: "Concha Sandwich",
    price: 11.68,
    category: "antojitos",
    description: "Chocolate or vanilla concha (pan dulce) ice cream sandwich.",
    image: "images/893e75105e5a0b4c56a55017606b6b5c.jpeg"
  },
  {
    id: "elote",
    name: "Elote",
    price: 7.13,
    category: "antojitos",
    description: "Mayo, cheese, chile, lime.",
    image: "images/menu/elote.jpg"
  },
  {
    id: "tosti-elote",
    name: "Tosti-Elote",
    price: 11.99,
    category: "antojitos",
    description: "Tostitos chips with prepared elote.",
    image: "images/menu/tosti-elote.jpg"
  },
  {
    id: "chicharron-preparado",
    name: "Chicharrón Preparado",
    price: 11.49,
    category: "antojitos",
    description: "Duro chicharrón with cabbage, onion, tomato, avocado, pickled pork, lime, and salsa.",
    image: "images/menu/chicharron-preparado.jpg"
  },
  {
    id: "chicharrmes",
    name: "Chicharrmes",
    price: 4.99,
    category: "antojitos",
    description: "Wheel chicharrón chips covered in lime & chile.",
    image: "images/menu/chicharrmes.jpg"
  },

  // ---- Bebidas ----
  {
    id: "fountain-drink",
    name: "Fountain Drink",
    price: 2.99,
    category: "bebidas",
    description: "Coke, Sprite, Fanta, Kombucha, or sparkling water.",
    image: "images/menu/drinks.jpg"
  },
  {
    id: "aguas-frescas",
    name: "Agua's Frescas",
    price: 7.13,
    category: "bebidas",
    description: "Horchata, or lime with chia.",
    image: "images/menu/aguas-frescas.jpg"
  },
  {
    id: "frapuchino",
    name: "Frapuchino",
    price: 11.68,
    category: "bebidas",
    description: "Choice of blended Gansito, Oreo, or Mazapán.",
    image: "images/734732898_1796622708178205_699087450600480272_n.jpg"
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
    { id: "fruit-base", label: "Fruit-Based" },
    { id: "cream-base", label: "Cream-Based" }
  ],
  toppings: [
    { id: "gummies", emoji: "🐻", label: "Gummies" },
    { id: "tajin", emoji: "🌶️", label: "Tajín" },
    { id: "miguelito", emoji: "🍋", label: "Miguelito" },
    { id: "chamoy", emoji: "🍯", label: "Chamoy" },
    { id: "jabalina", emoji: "🍬", label: "Jabalina" },
    { id: "fruit", emoji: "🍓", label: "Fresh fruit" }
  ]
};

const BUSINESS_INFO = {
  name: "Paletería Los Freseros",
  address: "7985 Highway 9, Ben Lomond, CA 95005",
  phone: "(831) 750-0477",
  phoneHref: "tel:+18317500477",
  orderUrl: "https://www.doordash.com/store/paleteria-los-freseros-ben-lomond-49023325/114671147/",
  hours: [
    { day: "Monday", time: "11:15 AM – 9:30 PM" },
    { day: "Tuesday", time: "11:15 AM – 9:30 PM" },
    { day: "Wednesday", time: "11:15 AM – 9:30 PM" },
    { day: "Thursday", time: "11:15 AM – 9:30 PM" },
    { day: "Friday", time: "11:15 AM – 10:00 PM" },
    { day: "Saturday", time: "11:15 AM – 10:00 PM" },
    { day: "Sunday", time: "11:15 AM – 9:30 PM" }
  ],
  // Same schedule as `hours` above, in 24-hour minutes-from-midnight for live open/closed checks.
  // Keep in sync with `hours` if the schedule ever changes.
  hoursMinutes: {
    0: { open: 11 * 60 + 15, close: 21 * 60 + 30 }, // Sunday
    1: { open: 11 * 60 + 15, close: 21 * 60 + 30 }, // Monday
    2: { open: 11 * 60 + 15, close: 21 * 60 + 30 }, // Tuesday
    3: { open: 11 * 60 + 15, close: 21 * 60 + 30 }, // Wednesday
    4: { open: 11 * 60 + 15, close: 21 * 60 + 30 }, // Thursday
    5: { open: 11 * 60 + 15, close: 22 * 60 }, // Friday
    6: { open: 11 * 60 + 15, close: 22 * 60 } // Saturday
  },
  mapEmbedQuery: "7985 Highway 9, Ben Lomond, CA 95005"
};
