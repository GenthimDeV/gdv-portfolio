export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Código para `hreflang` y nombre del idioma en su propio idioma. */
export const localeLabels: Record<Locale, { hreflang: string; name: string }> = {
  es: { hreflang: 'es', name: 'Español' },
  en: { hreflang: 'en', name: 'English' },
};
