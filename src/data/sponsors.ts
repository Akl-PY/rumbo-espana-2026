export interface Sponsor {
  name: string;
  level: "oro" | "plata" | "bronce";
  amount: number;
  logo?: string;
  url?: string;
  description?: string;
}

export interface SponsorTier {
  id: "oro" | "plata" | "bronce";
  name: string;
  price: number;
  badge: string;
  color: string;
  features: string[];
}

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: "bronce",
    name: "Bronce",
    price: 50000,
    badge: "🥉",
    color: "#cd7f32",
    features: [
      "Logo en la web oficial de la campaña",
      "Presencia destacada en la sección de sponsors",
      "Historia de agradecimiento en redes sociales",
      "Mención en publicaciones oficiales de la campaña"
    ]
  },
  {
    id: "plata",
    name: "Plata",
    price: 100000,
    badge: "🥈",
    color: "#c0c0c0",
    features: [
      "Todo lo incluido en el nivel Bronce",
      "Logo con mayor tamaño y visibilidad prioritaria",
      "Publicación dedicada en nuestro feed",
      "Historias adicionales de difusión durante la preparación",
      "Mayor exposición en la plataforma web"
    ]
  },
  {
    id: "oro",
    name: "Oro",
    price: 150000,
    badge: "🥇",
    color: "#ffd700",
    features: [
      "Todo lo incluido en Plata y Bronce",
      "Sponsor principal destacado en cabecera de marcas",
      "Publicación exclusiva y fija en redes sociales",
      "Presencia de marca documentada durante el viaje en España",
      "Contenido y cobertura audiovisual especial con tu logo",
      "Agradecimiento institucional final al culminar el Mundial"
    ]
  }
];

export const SPONSORS: Sponsor[] = [
  {
    name: "Canelo",
    level: "plata",
    amount: 0,
    logo: "/images/sponsors/canelo.png",
    url: "#"
  },
  {
    name: "Esencia Arati",
    level: "plata",
    amount: 0,
    logo: "/images/sponsors/esencia-arati.png",
    url: "#"
  },
  {
    name: "Nelio's",
    level: "bronce",
    amount: 0,
    logo: "/images/sponsors/nelios.png",
    url: "#"
  },
  {
    name: "Laporta",
    level: "bronce",
    amount: 0,
    logo: "/images/sponsors/laporta.png",
    url: "#"
  },
  {
    name: "Disfit",
    level: "bronce",
    amount: 0,
    logo: "/images/sponsors/disfit.png",
    url: "#"
  }
];
