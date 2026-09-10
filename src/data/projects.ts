export interface ProjectItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  collaborations: string[];
  logo?: string;
  url?: string;
  ctaText: string;
  whatsappMessage: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "taekwondo",
    name: "Escuela de Taekwondo",
    badge: "🥋",
    tagline: "Formación marcial, valores y alto rendimiento",
    description: "Nuestra escuela de Taekwondo donde formamos atletas desde las bases hasta la alta competencia internacional.",
    collaborations: [
      "Sponsors deportivos para atletas",
      "Organización de eventos y torneos",
      "Seminarios técnicos y masterclasses",
      "Actividades y exhibiciones marciales",
      "Equipamiento e indumentaria oficial",
      "Colaboraciones comerciales e institucionales"
    ],
    ctaText: "Consultar por la Escuela",
    whatsappMessage: "Hola, vi la campaña Rumbo a España 2026 y me interesa colaborar con la Escuela de Taekwondo."
  },
  {
    id: "hes1994",
    name: "HES1994",
    badge: "🏷️",
    tagline: "Stickers, personalización y merchandising",
    description: "Tienda especializada en stickers y productos personalizados para marcas, deportistas y eventos.",
    collaborations: [
      "Stickers personalizados en vinilo",
      "Merchandising y productos a medida",
      "Packs promocionales para eventos y torneos",
      "Artículos de branding para comercios",
      "Sorteos y activaciones conjuntas",
      "Regalos empresariales personalizados"
    ],
    ctaText: "Consultar en HES1994",
    whatsappMessage: "Hola, vi la campaña Rumbo a España 2026 y me interesa solicitar productos personalizados con HES1994."
  },
  {
    id: "aim",
    name: "AIM",
    badge: "📈",
    tagline: "Marketing, desarrollo web y presencia digital",
    description: "Estrategias de comunicación digital, crecimiento y presencia web integral para marcas y profesionales.",
    collaborations: [
      "Diseño y desarrollo de páginas web",
      "Landing pages optimizadas para conversión",
      "Campañas de marketing digital y pauta",
      "Gestión estratégica de redes sociales",
      "Construcción de identidad y presencia digital",
      "Automatización de procesos comerciales"
    ],
    ctaText: "Consultar servicios AIM",
    whatsappMessage: "Hola, vi la campaña Rumbo a España 2026 y me gustaría cotizar servicios digitales con AIM."
  },
  {
    id: "tech-services",
    name: "Servicios Profesionales de Tecnología",
    badge: "💻",
    tagline: "Desarrollo de software y arquitectura IT",
    description: "Soluciones de ingeniería de software a medida para empresas, startups y proyectos que necesitan escalar.",
    collaborations: [
      "Desarrollo web a medida y portales",
      "Aplicaciones web y móviles",
      "Construcción e integración de APIs",
      "Automatización de tareas y flujos de trabajo",
      "Modelado e integraciones de bases de datos",
      "Sistemas a medida, soporte y consultoría IT"
    ],
    ctaText: "Consultar por desarrollo",
    whatsappMessage: "Hola, vi la campaña Rumbo a España 2026 y me interesa contratar servicios de desarrollo y software."
  },
  {
    id: "scalinky",
    name: "Scalinky",
    badge: "🚀",
    tagline: "Plataforma independiente de crecimiento y escala",
    description: "Herramienta y producto digital enfocado en escalabilidad y soluciones tecnológicas directas.",
    collaborations: [
      "Acceso y pruebas de la plataforma",
      "Integraciones comerciales B2B",
      "Alianzas y partnerships estratégicos",
      "Soluciones personalizadas para organizaciones"
    ],
    ctaText: "Conocer Scalinky",
    whatsappMessage: "Hola, vi la campaña Rumbo a España 2026 y quiero conocer más sobre Scalinky."
  }
];
