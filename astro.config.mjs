import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://rumbo-espana-2026.vercel.app',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), keystatic()],
});
