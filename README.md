# Rumbo a España 2026 🇦🇷

Landing page de la campaña solidaria de la delegación argentina de Taekwondo
rumbo a la Copa del Mundo en Benidorm, España (25 de septiembre de 2026).

Hecho con **Astro + TypeScript**, sin backend, sin base de datos, pensado
para editarse fácilmente desde el celular (incluso desde GitHub Mobile) y
desplegarse en **Vercel**.

---

## 1. Requisitos

- Node.js 18.17 o superior
- npm (viene con Node)

## 2. Instalación y desarrollo local

```bash
npm install
npm run dev
```

Esto levanta el sitio en `http://localhost:4321`.

## 3. Build de producción

```bash
npm run build
npm run preview
```

`npm run build` genera el sitio estático en `dist/`. `npm run preview` te
deja verlo como quedaría en producción.

## 4. Desplegar en Vercel

**Opción A — desde la web de Vercel (recomendada):**

1. Subí este proyecto a un repositorio de GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New Project**.
3. Importá el repositorio.
4. Vercel detecta automáticamente que es un proyecto **Astro**. No hace
   falta tocar ninguna configuración de build ni variables de entorno.
5. Click en **Deploy**. Listo.

**Opción B — desde la terminal:**

```bash
npm i -g vercel
vercel
```

Seguí las instrucciones en pantalla (podés hacerlo también desde una app de
terminal en el celular, como Termux).

Cada vez que hagas `push` a la rama principal de GitHub, Vercel vuelve a
desplegar el sitio automáticamente.

---

## 5. Cómo editar todo desde el celular

Todo lo que necesitás cambiar día a día está separado en **dos archivos**
de configuración, para que no tengas que tocar el diseño ni el código de
las secciones.

### 5.1. `src/data/config.ts`

Ahí están, todos juntos:

| Qué querés cambiar | Variable |
|---|---|
| Objetivo económico | `GOAL` |
| Monto recaudado (mientras no haya backend) | `RAISED` |
| Alias para donar | `ALIAS` |
| Fecha del viaje / countdown | `EVENT_DATE_ISO` y `EVENT_DATE_LABEL` |
| Título, descripción y SEO | `SITE` |
| Redes sociales (Instagram, Facebook, WhatsApp) | `SOCIAL` |
| Nombres y roles de la delegación | `TEAM` |
| Textos del hero y de la historia | `COPY` |

Ejemplo — actualizar lo recaudado a mano:

```ts
export const RAISED = 350000;
```

Ejemplo — agregar una nueva red social o cambiar un link:

```ts
export const SOCIAL = {
  instagram: "https://instagram.com/tu_usuario",
  facebook: "https://facebook.com/tu_pagina",
  whatsapp: "https://wa.me/5490000000000",
};
```

### 5.2. `src/data/donations.ts`

Ahí se cargan las donaciones que aparecen en la sección "Quienes ya nos
ayudaron". Cada donación es un bloque como este:

```ts
{ name: "Juan Pérez", amount: 50000, message: "Mucha suerte" },
```

`message` es opcional, podés omitirlo:

```ts
{ name: "Carlos", amount: 10000 },
```

Para agregar una nueva donación, sumá una línea dentro del array
`donations`. El total recaudado, el porcentaje y la cantidad de
donaciones que se muestran en "Nuestro objetivo" se recalculan solos a
partir de `RAISED` (que seguís actualizando vos a mano) y de este
archivo.

> Ambos archivos se pueden editar directamente en GitHub Mobile: entrá al
> archivo en la app o en github.com desde el navegador del celular, tocá
> el ícono de lápiz (editar), hacé el cambio y confirmá el commit
> directamente sobre la rama principal. Vercel va a desplegar el cambio
> solo, en un minuto aproximadamente.

---

## 6. Cómo agregar las fotos

La web está preparada para que agregues las imágenes cuando las tengas,
sin romper nada mientras tanto (se muestra un placeholder elegante).

Subí los archivos con **estos nombres exactos** a `public/images/`:

```
public/images/hero.jpg              → imagen principal del Hero
public/images/team.jpg              → foto grupal (sección Nuestra historia)
public/images/qr-donacion.png       → QR de donación
public/images/daniel.jpg            → foto de Daniel Galetto
public/images/constanza.jpg         → foto de Constanza Murua
public/images/joaquin.jpg           → foto de Joaquín Galetto
public/images/hernan.jpg            → foto de Hernán Daniel Galetto
public/images/fabiana.jpg           → foto de Fabiana Ledesma
```

Para la galería, subí hasta 6 fotos a `public/images/gallery/` con estos
nombres:

```
public/images/gallery/gallery-1.jpg
public/images/gallery/gallery-2.jpg
public/images/gallery/gallery-3.jpg
public/images/gallery/gallery-4.jpg
public/images/gallery/gallery-5.jpg
public/images/gallery/gallery-6.jpg
```

No hace falta subirlas todas: la galería detecta automáticamente cuáles
existen y solo muestra esas. Podés subir estos archivos directamente
desde GitHub Mobile (botón "Add file" → "Upload files").

Recomendación de tamaño: fotos en formato horizontal o cuadrado, de no
más de 1–2 MB cada una, para que la página cargue rápido en 4G.

---

## 7. Cambiar nombres y roles de la delegación

Editá el array `TEAM` en `src/data/config.ts`:

```ts
export const TEAM: TeamMember[] = [
  { name: "Daniel Galetto", role: "Competidor", image: "/images/daniel.jpg" },
  { name: "Constanza Murua", role: "Competidora", image: "/images/constanza.jpg" },
  { name: "Joaquín Galetto", role: "Competidor", image: "/images/joaquin.jpg" },
  { name: "Hernán Daniel Galetto", role: "Coach", image: "/images/hernan.jpg" },
  { name: "Fabiana Ledesma", role: "Coach", image: "/images/fabiana.jpg" },
];
```

Podés agregar, quitar o reordenar personas; las tarjetas se generan
automáticamente a partir de esta lista.

---

## 8. Estructura del proyecto

```
rumbo-espana-2026/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── (hero.jpg, team.jpg, qr-donacion.png, fotos del equipo…)
│       └── gallery/
│           └── (gallery-1.jpg … gallery-6.jpg)
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Countdown.astro
│   │   ├── Goal.astro
│   │   ├── Donations.astro
│   │   ├── HowToDonate.astro
│   │   ├── Team.astro
│   │   ├── Story.astro
│   │   ├── Gallery.astro
│   │   ├── CTAFinal.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── config.ts       ← configuración general (editar acá)
│   │   └── donations.ts    ← lista de donaciones (editar acá)
│   ├── layouts/
│   │   └── Layout.astro    ← metadata, SEO, Open Graph
│   ├── pages/
│   │   └── index.astro     ← ensambla todas las secciones
│   └── styles/
│       └── global.css      ← todo el diseño de la página
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 9. Próximos pasos (opcional, a futuro)

- **Conectar un backend real:** hoy `RAISED` y `donations.ts` son
  estáticos. El día que quieras automatizar esto, alcanza con reemplazar
  la importación de `donations` en `Goal.astro` y `Donations.astro` por
  un `fetch` a tu API — el resto de los componentes no necesita cambios.
- **QR de pago:** subí la imagen a `public/images/qr-donacion.png` y va a
  aparecer sola en la sección "Cómo donar".
- **CBU / más medios de pago:** se pueden agregar como filas nuevas
  dentro de `HowToDonate.astro`, junto al alias.

---

¡Vamos Argentina! 🇦🇷🥋
