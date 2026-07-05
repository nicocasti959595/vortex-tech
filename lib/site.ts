// =============================================================
//  DATOS DEL NEGOCIO — editá todo acá para adaptar la tienda.
//  Marca, teléfono, precios y reseñas son FICTICIOS (demo de venta).
// =============================================================

export const site = {
  name: "Vórtex",
  legalName: "Vórtex Tecnología S.R.L.",
  brandFull: "Vórtex",
  kicker: "Tecnología & Gaming",
  tagline: "Armá tu setup. Jugá sin límites.",
  claim:
    "Tienda de tecnología y gaming en Argentina. Notebooks, placas de video, procesadores, periféricos y PCs armadas a medida. Cuotas sin interés, garantía oficial y envío a todo el país.",

  // Contacto (placeholders — reemplazar por los reales)
  phoneDisplay: "+54 9 11 5555-0192",
  phoneRaw: "+5491155550192",
  whatsappRaw: "5491155550192", // sin + ni espacios, para wa.me
  email: "hola@vortextech.com.ar",

  // Ubicación (showroom demo)
  city: "Ciudad Autónoma de Buenos Aires",
  region: "Envíos a todo el país",
  addressStreet: "Av. Corrientes 3247",
  addressLocality: "Balvanera, CABA",
  addressRegion: "Buenos Aires",
  postalCode: "C1193",
  country: "AR",
  geo: { lat: -34.6037, lng: -58.4108 },

  hours: "Lun a Vie de 10 a 19 h · Sáb de 10 a 14 h",

  // Redes (placeholders)
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  tiktok: "https://tiktok.com/",

  // SEO
  url: "https://vortex.ideawebx.com",
  locale: "es_AR",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const telLink = `tel:${site.phoneRaw}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.addressStreet}, ${site.addressLocality}`
)}`;

export const WA_DEFAULT_MSG =
  "Hola Vórtex 👋 Quiero hacer una consulta.";

export const WA_ARMA_PC_MSG =
  "Hola Vórtex 👋 Quiero armar una PC a medida y necesito asesoramiento.";

// Formateo de precios en pesos argentinos.
export const fmt = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
