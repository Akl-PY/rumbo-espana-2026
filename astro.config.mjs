import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rumbo-espana-2026.vercel.app",
  output: "static",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },
});