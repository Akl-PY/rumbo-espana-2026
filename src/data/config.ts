// ============================================================
// CONFIGURACIÓN CENTRAL DE LA CAMPAÑA
// Editá estos valores para actualizar toda la web.
// ============================================================

// --- OBJETIVO ECONÓMICO ---
// Monto objetivo total de la campaña (en pesos argentinos).
export const GOAL = 4_000_000;

// Monto recaudado hasta el momento. Actualizalo a mano mientras
// no haya backend/API conectado. Cuando conectes una base de
// datos, reemplazá este valor por el fetch correspondiente.
export const RAISED = 0;

// --- DATOS DE DONACIÓN ---
export const ALIAS = "RUMBOESP26";

// Rutas de imágenes de QR (colocá los archivos reales en /public/images)
export const QR_MERCADOPAGO = "/images/qr-donacion.png";

// --- FECHA DEL VIAJE / COUNTDOWN ---
// Formato ISO con offset de Argentina (UTC-3) para que el
// countdown sea correcto sin importar la zona horaria del usuario.
export const EVENT_DATE_ISO = "2026-09-25T00:00:00-03:00";
export const EVENT_DATE_LABEL = "25 de septiembre de 2026";

// --- METADATA / SEO ---
export const SITE = {
  title: "Rumbo a España 2026 🇦🇷 | Copa del Mundo de Taekwondo",
  description:
    "Somos una delegación argentina de Taekwondo rumbo a Benidorm, España. Ayudanos a cumplir este sueño.",
  url: "https://rumbo-espana-2026.vercel.app",
  ogImage: "/images/hero.jpg",
  locale: "es_AR",
};

// --- REDES SOCIALES (dejá vacío "" para ocultar el ícono) ---
export const SOCIAL = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  whatsapp: "https://wa.me/",
};

// --- DELEGACIÓN ---
export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  { name: "Daniel Galetto", role: "Competidor", image: "/images/daniel.jpg" },
  { name: "Constanza Murua", role: "Competidora", image: "/images/constanza.jpg" },
  { name: "Joaquín Galetto", role: "Competidor", image: "/images/joaquin.jpg" },
  { name: "Hernán Daniel Galetto", role: "Coach", image: "/images/hernan.jpg" },
  { name: "Fabiana Ledesma", role: "Coach", image: "/images/fabiana.jpg" },
];

// --- GALERÍA ---
// El componente Gallery intenta cargar automáticamente
// gallery-1.jpg ... gallery-N.jpg desde /public/images/gallery/
// Si no existen, no se muestran (sin errores visibles).
export const GALLERY_MAX_ITEMS = 6;
export const GALLERY_PATH = "/images/gallery";

// --- TEXTOS ---
export const COPY = {
  heroTitle: "RUMBO A ESPAÑA 2026",
  heroSubtitle: "Representamos a Argentina en Benidorm",
  heroText:
    "Somos una delegación argentina de Taekwondo y necesitamos tu ayuda para poder viajar y competir en la Copa del Mundo.",
  storyText:
    "Detrás de este viaje hay años de entrenamiento, sacrificio y preparación. Llegar a una Copa del Mundo representa una oportunidad enorme para nosotros y para nuestra escuela.",
};
