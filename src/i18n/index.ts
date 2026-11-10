import type { Locale } from './config';
import { en } from './en';
import { es, type DictionaryKey } from './es';

const dictionaries: Record<Locale, Record<DictionaryKey, string>> = { es, en };

/** Traduce una clave del diccionario del idioma dado. */
export function t(locale: Locale, key: DictionaryKey): string {
  return dictionaries[locale][key];
}

/** `t` ya fijado a un idioma, para usar en plantillas. */
export function useTranslations(locale: Locale) {
  return (key: DictionaryKey) => t(locale, key);
}

export { defaultLocale, localeLabels, locales, type Locale } from './config';
export type { DictionaryKey } from './es';
export * from './routes';
