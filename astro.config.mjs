import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// `site` y `base` dependen del hosting. Cloudflare Pages (hosting definitivo)
// sirve en la raíz: sin variables, base '/'. Si se publicara bajo una subruta,
// definir BASE_PATH (y SITE_URL) en el entorno de compilación.
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

// Cloudflare Pages sirve el `404.html` más cercano a la ruta pedida, pero Astro emite
// `en/404/index.html`: se copia a `en/404.html` para la 404 en inglés.
const english404 = {
  name: 'english-404-file',
  hooks: {
    'astro:build:done': ({ dir }) => {
      copyFileSync(fileURLToPath(new URL('en/404/index.html', dir)), fileURLToPath(new URL('en/404.html', dir)));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  integrations: [english404],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
