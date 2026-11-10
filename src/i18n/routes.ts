import { defaultLocale, locales, type Locale } from './config';

/**
 * Única fuente de verdad de las rutas. Cada página tiene una clave y su
 * segmento en cada idioma ('' = raíz del idioma).
 */
export const routes = {
  home: { es: '', en: '' },
  projects: { es: 'proyectos', en: 'projects' },
  lab: { es: 'laboratorio', en: 'lab' },
  about: { es: 'sobre-mi', en: 'about' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;
export const routeKeys = Object.keys(routes) as RouteKey[];

/** Ruta absoluta (con `base`) de una página en un idioma: `/en/projects/`. */
export function getRoutePath(key: RouteKey, locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const segment = routes[key][locale];
  const path = `${prefix}${segment ? `/${segment}` : ''}`;
  return `${base}${path}/`;
}

/** Ruta absoluta (con `base`) de un caso de estudio: `/en/projects/intranet/`. */
export function getProjectPath(slug: string, locale: Locale): string {
  return `${getRoutePath('projects', locale)}${slug}/`;
}

/** Ruta del CV en PDF (con `base`) en un idioma: `/cv/GenthimDeV-CV-en.pdf`. */
export function getCvPath(locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/cv/GenthimDeV-CV-${locale}.pdf`;
}

/** Segmento (`slug`) de una ruta para `getStaticPaths`; `undefined` en la raíz. */
export function getSlug(key: RouteKey, locale: Locale): string | undefined {
  return routes[key][locale] || undefined;
}

/** Clave de ruta a partir del `slug` recibido en la página de un idioma. */
export function getRouteKey(slug: string | undefined, locale: Locale): RouteKey | undefined {
  return routeKeys.find((key) => routes[key][locale] === (slug ?? ''));
}

/**
 * Rutas equivalentes de una página en todos los idiomas (selector y `hreflang`).
 * Con `projectSlug`, las del caso de estudio equivalente.
 */
export function getAlternates(key: RouteKey, projectSlug?: string): { locale: Locale; path: string }[] {
  return locales.map((locale) => ({
    locale,
    path: projectSlug ? getProjectPath(projectSlug, locale) : getRoutePath(key, locale),
  }));
}
