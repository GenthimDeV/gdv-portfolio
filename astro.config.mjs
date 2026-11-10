import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` y `base` dependen del hosting (tarea 1.2):
// - Cloudflare Pages / dominio propio: sin variables → base '/'.
// - GitHub Pages (repo de proyecto): el workflow define BASE_PATH=/gdv-portfolio/.
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
