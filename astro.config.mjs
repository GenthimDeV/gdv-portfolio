import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `site` y `base` dependen del hosting. Cloudflare Pages (hosting definitivo)
// sirve en la raíz: sin variables, base '/'. Si se publicara bajo una subruta,
// definir BASE_PATH (y SITE_URL) en el entorno de compilación.
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
