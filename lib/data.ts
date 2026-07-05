// =============================================================
//  CATÁLOGO DEMO — productos, categorías y contenido ficticio.
//  Todo editable. Precios en ARS. Las ilustraciones son SVG propias
//  (ver components/ProductArt.tsx) mapeadas por `kind`.
// =============================================================

export type Kind =
  | "notebook"
  | "gpu"
  | "cpu"
  | "monitor"
  | "keyboard"
  | "mouse"
  | "headset"
  | "chair"
  | "ram"
  | "ssd"
  | "mobo"
  | "case"
  | "pc";

export type Category = {
  slug: string;
  name: string;
  kind: Kind;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "notebooks", name: "Notebooks", kind: "notebook", blurb: "Gamer y trabajo" },
  { slug: "gpu", name: "Placas de Video", kind: "gpu", blurb: "GeForce RTX & Radeon" },
  { slug: "cpu", name: "Procesadores", kind: "cpu", blurb: "Intel & AMD Ryzen" },
  { slug: "monitores", name: "Monitores", kind: "monitor", blurb: "144Hz+ y 4K" },
  { slug: "perifericos", name: "Periféricos", kind: "keyboard", blurb: "Teclado, mouse, headset" },
  { slug: "componentes", name: "Componentes", kind: "mobo", blurb: "RAM, SSD, mother, gabinete" },
  { slug: "sillas", name: "Sillas Gamer", kind: "chair", blurb: "Ergonómicas premium" },
  { slug: "pc", name: "PCs Armadas", kind: "pc", blurb: "Listas para jugar" },
];

export const brands = [
  "NVIDIA",
  "AMD",
  "Intel",
  "ASUS",
  "MSI",
  "Logitech",
  "Corsair",
  "Redragon",
  "Samsung",
  "Kingston",
];

export type Product = {
  id: string;
  name: string;
  brand: string;
  cat: string; // slug de categoría
  kind: Kind;
  price: number;
  oldPrice?: number;
  tag?: "OFERTA" | "NUEVO" | "TOP" | "ÚLTIMAS";
  rating: number;
  reviews: number;
  cuotas: number; // cuotas sin interés
  featured?: boolean;
  freeShip?: boolean;
  specs: string[];
  stock: number;
};

// Cuotas sin interés por defecto
const C = 12;

export const products: Product[] = [
  // ---- Notebooks ----
  {
    id: "nb-nitro-v16",
    name: "Notebook Gamer Nitro V16 · RTX 4060 · Ryzen 7",
    brand: "ASUS",
    cat: "notebooks",
    kind: "notebook",
    price: 1899000,
    oldPrice: 2290000,
    tag: "OFERTA",
    rating: 4.8,
    reviews: 214,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ['16" 165Hz', "RTX 4060 8GB", "Ryzen 7 8845HS", "16GB · 1TB SSD"],
    stock: 8,
  },
  {
    id: "nb-air-oled",
    name: "Notebook Ultrabook Air OLED · Core i7 · 32GB",
    brand: "Intel",
    cat: "notebooks",
    kind: "notebook",
    price: 1649000,
    tag: "NUEVO",
    rating: 4.9,
    reviews: 98,
    cuotas: C,
    freeShip: true,
    specs: ['14" OLED 2.8K', "Core i7-1360P", "32GB · 1TB", "1.1 kg"],
    stock: 12,
  },
  {
    id: "nb-strix-rtx4080",
    name: "Notebook ROG Strix · RTX 4080 · 240Hz",
    brand: "ASUS",
    cat: "notebooks",
    kind: "notebook",
    price: 3790000,
    oldPrice: 4150000,
    tag: "TOP",
    rating: 5.0,
    reviews: 61,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ['18" QHD 240Hz', "RTX 4080 12GB", "Ryzen 9 · 32GB", "2TB SSD"],
    stock: 4,
  },

  // ---- Placas de video ----
  {
    id: "gpu-rtx4070",
    name: "Placa de Video GeForce RTX 4070 SUPER 12GB",
    brand: "MSI",
    cat: "gpu",
    kind: "gpu",
    price: 1120000,
    oldPrice: 1290000,
    tag: "OFERTA",
    rating: 4.9,
    reviews: 340,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["12GB GDDR6X", "DLSS 3", "Ray Tracing", "2x fan"],
    stock: 15,
  },
  {
    id: "gpu-rtx4090",
    name: "Placa de Video GeForce RTX 4090 24GB",
    brand: "NVIDIA",
    cat: "gpu",
    kind: "gpu",
    price: 3450000,
    tag: "TOP",
    rating: 5.0,
    reviews: 122,
    cuotas: C,
    freeShip: true,
    specs: ["24GB GDDR6X", "4K Ultra", "DLSS 3.5", "Triple fan"],
    stock: 3,
  },
  {
    id: "gpu-rx7800",
    name: "Placa de Video Radeon RX 7800 XT 16GB",
    brand: "AMD",
    cat: "gpu",
    kind: "gpu",
    price: 980000,
    oldPrice: 1120000,
    tag: "OFERTA",
    rating: 4.7,
    reviews: 187,
    cuotas: C,
    featured: true,
    specs: ["16GB GDDR6", "1440p Ultra", "FSR 3", "RDNA 3"],
    stock: 9,
  },

  // ---- Procesadores ----
  {
    id: "cpu-ryzen7800x3d",
    name: "Procesador AMD Ryzen 7 7800X3D",
    brand: "AMD",
    cat: "cpu",
    kind: "cpu",
    price: 685000,
    oldPrice: 760000,
    tag: "TOP",
    rating: 5.0,
    reviews: 411,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["8 núcleos", "5.0GHz", "3D V-Cache", "AM5"],
    stock: 20,
  },
  {
    id: "cpu-i7-14700k",
    name: "Procesador Intel Core i7-14700K",
    brand: "Intel",
    cat: "cpu",
    kind: "cpu",
    price: 590000,
    tag: "NUEVO",
    rating: 4.8,
    reviews: 156,
    cuotas: C,
    specs: ["20 núcleos", "5.6GHz", "LGA 1700", "Turbo Boost"],
    stock: 14,
  },
  {
    id: "cpu-ryzen5-7600",
    name: "Procesador AMD Ryzen 5 7600",
    brand: "AMD",
    cat: "cpu",
    kind: "cpu",
    price: 315000,
    oldPrice: 369000,
    tag: "OFERTA",
    rating: 4.7,
    reviews: 278,
    cuotas: C,
    specs: ["6 núcleos", "5.1GHz", "AM5", "Cooler incluido"],
    stock: 25,
  },

  // ---- Monitores ----
  {
    id: "mon-27-165",
    name: 'Monitor Gamer 27" QHD 165Hz IPS',
    brand: "MSI",
    cat: "monitores",
    kind: "monitor",
    price: 445000,
    oldPrice: 520000,
    tag: "OFERTA",
    rating: 4.8,
    reviews: 302,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ['27" 2560×1440', "165Hz · 1ms", "IPS · HDR", "FreeSync"],
    stock: 18,
  },
  {
    id: "mon-34-uw",
    name: 'Monitor Ultrawide 34" 180Hz Curvo',
    brand: "ASUS",
    cat: "monitores",
    kind: "monitor",
    price: 890000,
    tag: "TOP",
    rating: 4.9,
    reviews: 141,
    cuotas: C,
    freeShip: true,
    specs: ['34" 3440×1440', "180Hz · 1ms", "Curvo 1500R", "G-Sync"],
    stock: 7,
  },
  {
    id: "mon-24-180",
    name: 'Monitor Gamer 24" Full HD 180Hz',
    brand: "Samsung",
    cat: "monitores",
    kind: "monitor",
    price: 255000,
    oldPrice: 299000,
    tag: "OFERTA",
    rating: 4.6,
    reviews: 388,
    cuotas: C,
    specs: ['24" 1920×1080', "180Hz · 1ms", "VA · HDR10", "FreeSync"],
    stock: 30,
  },

  // ---- Periféricos ----
  {
    id: "kb-mecanico",
    name: "Teclado Mecánico RGB Switch Red · Español",
    brand: "Redragon",
    cat: "perifericos",
    kind: "keyboard",
    price: 78000,
    oldPrice: 99000,
    tag: "OFERTA",
    rating: 4.7,
    reviews: 620,
    cuotas: C,
    featured: true,
    specs: ["Switch rojo", "RGB por tecla", "Anti-ghosting", "Layout ES"],
    stock: 40,
  },
  {
    id: "ms-pro-wireless",
    name: "Mouse Gamer Inalámbrico Pro 26K DPI",
    brand: "Logitech",
    cat: "perifericos",
    kind: "mouse",
    price: 112000,
    tag: "TOP",
    rating: 4.9,
    reviews: 503,
    cuotas: C,
    featured: true,
    specs: ["26.000 DPI", "Inalámbrico", "60g ultraligero", "70h batería"],
    stock: 22,
  },
  {
    id: "hs-headset-71",
    name: "Auriculares Gamer 7.1 con Micrófono",
    brand: "Corsair",
    cat: "perifericos",
    kind: "headset",
    price: 96000,
    oldPrice: 125000,
    tag: "OFERTA",
    rating: 4.6,
    reviews: 417,
    cuotas: C,
    featured: true,
    specs: ["Sonido 7.1", "Mic desmontable", "RGB", "USB + 3.5mm"],
    stock: 27,
  },
  {
    id: "ms-silent",
    name: "Mouse Óptico Silent 12K DPI RGB",
    brand: "Redragon",
    cat: "perifericos",
    kind: "mouse",
    price: 34000,
    tag: "ÚLTIMAS",
    rating: 4.5,
    reviews: 289,
    cuotas: C,
    specs: ["12.000 DPI", "Clicks silenciosos", "7 botones", "RGB"],
    stock: 5,
  },

  // ---- Componentes ----
  {
    id: "ram-32-ddr5",
    name: "Memoria RAM 32GB (2×16) DDR5 6000MHz RGB",
    brand: "Corsair",
    cat: "componentes",
    kind: "ram",
    price: 168000,
    oldPrice: 199000,
    tag: "OFERTA",
    rating: 4.9,
    reviews: 233,
    cuotas: C,
    featured: true,
    specs: ["32GB (2×16)", "DDR5 6000MHz", "RGB", "CL30"],
    stock: 16,
  },
  {
    id: "ssd-2tb-nvme",
    name: "SSD NVMe 2TB Gen4 7000MB/s",
    brand: "Samsung",
    cat: "componentes",
    kind: "ssd",
    price: 215000,
    tag: "TOP",
    rating: 4.9,
    reviews: 512,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["2TB M.2", "PCIe Gen4", "7.000 MB/s", "5 años garantía"],
    stock: 21,
  },
  {
    id: "mobo-b650",
    name: "Motherboard B650 WiFi AM5 DDR5",
    brand: "ASUS",
    cat: "componentes",
    kind: "mobo",
    price: 289000,
    oldPrice: 335000,
    tag: "OFERTA",
    rating: 4.7,
    reviews: 148,
    cuotas: C,
    specs: ["Socket AM5", "DDR5", "WiFi 6", "PCIe 4.0"],
    stock: 11,
  },
  {
    id: "case-torre-rgb",
    name: "Gabinete Torre Vidrio Templado · 4 fans ARGB",
    brand: "MSI",
    cat: "componentes",
    kind: "case",
    price: 132000,
    tag: "NUEVO",
    rating: 4.6,
    reviews: 176,
    cuotas: C,
    featured: true,
    specs: ["Mid tower", "Vidrio templado", "4 fans ARGB", "USB-C frontal"],
    stock: 13,
  },

  // ---- Sillas ----
  {
    id: "silla-pro-x",
    name: "Silla Gamer Pro-X Reclinable · Ergonómica",
    brand: "Corsair",
    cat: "sillas",
    kind: "chair",
    price: 289000,
    oldPrice: 349000,
    tag: "OFERTA",
    rating: 4.7,
    reviews: 205,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["Reclina 180°", "Lumbar + cervical", "Hasta 150kg", "Cuero PU"],
    stock: 9,
  },
  {
    id: "silla-ergo-mesh",
    name: "Silla Ergonómica Mesh · Soporte Lumbar",
    brand: "Logitech",
    cat: "sillas",
    kind: "chair",
    price: 235000,
    tag: "NUEVO",
    rating: 4.8,
    reviews: 87,
    cuotas: C,
    specs: ["Malla transpirable", "Lumbar ajustable", "Apoyabrazos 4D", "Ruedas silenciosas"],
    stock: 14,
  },

  // ---- PCs Armadas ----
  {
    id: "pc-starter",
    name: "PC Gamer Starter · Ryzen 5 + RTX 4060",
    brand: "Vórtex",
    cat: "pc",
    kind: "pc",
    price: 1290000,
    oldPrice: 1490000,
    tag: "OFERTA",
    rating: 4.8,
    reviews: 143,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["Ryzen 5 7600", "RTX 4060 8GB", "16GB DDR5", "1TB NVMe"],
    stock: 6,
  },
  {
    id: "pc-elite",
    name: "PC Gamer Elite · Ryzen 7 X3D + RTX 4070Ti",
    brand: "Vórtex",
    cat: "pc",
    kind: "pc",
    price: 2490000,
    tag: "TOP",
    rating: 5.0,
    reviews: 92,
    cuotas: C,
    featured: true,
    freeShip: true,
    specs: ["Ryzen 7 7800X3D", "RTX 4070 Ti", "32GB DDR5", "2TB NVMe"],
    stock: 4,
  },
  {
    id: "pc-titan",
    name: "PC Gamer Titan · i9 + RTX 4090 · Refrig. líquida",
    brand: "Vórtex",
    cat: "pc",
    kind: "pc",
    price: 4890000,
    tag: "TOP",
    rating: 5.0,
    reviews: 38,
    cuotas: C,
    freeShip: true,
    specs: ["Core i9-14900K", "RTX 4090 24GB", "64GB DDR5", "4TB NVMe"],
    stock: 2,
  },
];

export const benefits = [
  {
    icon: "shipping",
    title: "Envío a todo el país",
    text: "Gratis en compras desde $500.000. Despacho en 24-48 hs.",
  },
  {
    icon: "installments",
    title: "Hasta 12 cuotas sin interés",
    text: "Con todas las tarjetas. Precio transparente, sin sorpresas.",
  },
  {
    icon: "warranty",
    title: "Garantía oficial",
    text: "Todos los productos con garantía y factura A/B.",
  },
  {
    icon: "support",
    title: "Soporte técnico real",
    text: "Te asesoramos antes y después de la compra.",
  },
];

export const heroSlides = [
  {
    eyebrow: "Hot Sale Gaming",
    title: "Hasta 30% OFF en placas de video",
    subtitle: "GeForce RTX y Radeon con stock real y 12 cuotas sin interés.",
    cta: "Ver placas de video",
    href: "#catalogo",
    kind: "gpu" as Kind,
    accent: "cyan",
  },
  {
    eyebrow: "Nuevas Notebooks",
    title: "Notebooks gamer que vuelan",
    subtitle: "RTX 40 Series, pantallas 165Hz y envío gratis a todo el país.",
    cta: "Ver notebooks",
    href: "#catalogo",
    kind: "notebook" as Kind,
    accent: "violet",
  },
  {
    eyebrow: "Armá tu PC",
    title: "Tu PC ideal, armada por expertos",
    subtitle: "Elegí las piezas o dejá que te asesoremos. Testeada y lista para jugar.",
    cta: "Armar mi PC",
    href: "#arma-pc",
    kind: "pc" as Kind,
    accent: "magenta",
  },
];

export const testimonios = [
  {
    name: "Lucas M.",
    role: "Compró una PC Gamer Elite",
    text: "Me armaron la máquina en 48hs y anda perfecta. El asesoramiento por WhatsApp fue un lujo, me ahorraron plata en piezas que no necesitaba.",
    rating: 5,
  },
  {
    name: "Brenda R.",
    role: "Compró Notebook + Monitor",
    text: "Llegó al día siguiente a Córdoba, todo con factura y garantía. Ya es mi tienda de tecnología de cabecera.",
    rating: 5,
  },
  {
    name: "Damián V.",
    role: "Compró RTX 4070 Super",
    text: "Precio imbatible y 12 cuotas sin interés reales. La placa vino sellada y con garantía oficial. 10 puntos.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí. Enviamos a toda la Argentina por correo y transporte. El envío es gratis en compras desde $500.000 y el despacho se realiza en 24 a 48 horas hábiles.",
  },
  {
    q: "¿En cuántas cuotas puedo pagar?",
    a: "Trabajamos con hasta 12 cuotas sin interés con todas las tarjetas de crédito. También aceptamos transferencia, débito y efectivo con descuento adicional.",
  },
  {
    q: "¿Los productos tienen garantía?",
    a: "Todos nuestros productos son nuevos, con garantía oficial del fabricante y factura A o B. Las PCs armadas incluyen además garantía de armado de Vórtex.",
  },
  {
    q: "¿Puedo armar una PC a medida?",
    a: "Claro. Te asesoramos según tu presupuesto y el uso (gaming, streaming, diseño, oficina). Elegís las piezas o nos decís para qué la querés y te la armamos, testeamos y entregamos lista.",
  },
  {
    q: "¿Tienen local físico?",
    a: "Sí, tenemos showroom en CABA con retiro en el día. También podés coordinar por WhatsApp para ver disponibilidad y stock en tiempo real.",
  },
];
