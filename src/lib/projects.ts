import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale } from '../i18n';

export type Project = CollectionEntry<'projects'>;

/** El id de cada entrada es `<locale>/<slug>`. */
function splitId(id: string): { locale: string; slug: string } {
  const [locale = '', ...rest] = id.split('/');
  return { locale, slug: rest.join('/') };
}

/** Slug del proyecto: igual en todos los idiomas. */
export function projectSlug(entry: Project): string {
  return splitId(entry.id).slug;
}

let checked = false;

/**
 * Falla el build si un proyecto no existe en todos los idiomas, está en una
 * carpeta de idioma desconocida o no comparte `order`/`featured` entre idiomas.
 */
function assertConsistent(all: Project[]): void {
  if (checked) return;
  const bySlug = new Map<string, Map<string, Project>>();
  for (const entry of all) {
    const { locale, slug } = splitId(entry.id);
    if (!(locales as readonly string[]).includes(locale) || !slug) {
      throw new Error(`Proyecto "${entry.id}": debe estar en src/content/projects/<${locales.join('|')}>/<slug>.md`);
    }
    if (!bySlug.has(slug)) bySlug.set(slug, new Map());
    bySlug.get(slug)!.set(locale, entry);
  }
  for (const [slug, byLocale] of bySlug) {
    const missing = locales.filter((l) => !byLocale.has(l));
    if (missing.length) throw new Error(`Proyecto "${slug}": falta la versión en ${missing.join(', ')}`);
    const [first, ...others] = [...byLocale.values()];
    for (const other of others) {
      if (other.data.order !== first!.data.order || other.data.featured !== first!.data.featured) {
        throw new Error(`Proyecto "${slug}": "order" y "featured" deben coincidir en todos los idiomas`);
      }
    }
  }
  checked = true;
}

/** Proyectos de un idioma, ordenados por `order`. */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection('projects');
  assertConsistent(all);
  return all
    .filter((entry) => splitId(entry.id).locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

/** Proyectos destacados de un idioma (Inicio), ordenados por `order`. */
export async function getFeaturedProjects(locale: Locale): Promise<Project[]> {
  return (await getProjects(locale)).filter((entry) => entry.data.featured);
}
