import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale } from '../i18n';

export type Experiment = CollectionEntry<'experiments'>;

/** El id de cada entrada es `<locale>/<slug>`. */
function splitId(id: string): { locale: string; slug: string } {
  const [locale = '', ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

/** Slug del experimento: igual en todos los idiomas. */
export function experimentSlug(entry: Experiment): string {
  return splitId(entry.id).slug;
}

let checked = false;

/** Falla el build si un experimento no existe en todos los idiomas o no comparte `order`. */
function assertConsistent(all: Experiment[]): void {
  if (checked) return;
  const bySlug = new Map<string, Map<string, Experiment>>();
  for (const entry of all) {
    const { locale, slug } = splitId(entry.id);
    if (!(locales as readonly string[]).includes(locale) || !slug) {
      throw new Error(`Experimento "${entry.id}": debe estar en src/content/experiments/<${locales.join('|')}>/<slug>.md`);
    }
    if (!bySlug.has(slug)) bySlug.set(slug, new Map());
    bySlug.get(slug)!.set(locale, entry);
  }
  for (const [slug, byLocale] of bySlug) {
    const missing = locales.filter((l) => !byLocale.has(l));
    if (missing.length) throw new Error(`Experimento "${slug}": falta la versión en ${missing.join(', ')}`);
    const [first, ...others] = [...byLocale.values()];
    if (others.some((other) => other.data.order !== first!.data.order)) {
      throw new Error(`Experimento "${slug}": "order" debe coincidir en todos los idiomas`);
    }
  }
  checked = true;
}

/** Experimentos de un idioma, ordenados por `order`. */
export async function getExperiments(locale: Locale): Promise<Experiment[]> {
  const all = await getCollection('experiments');
  assertConsistent(all);
  return all
    .filter((entry) => splitId(entry.id).locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}
