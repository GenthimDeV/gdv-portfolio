import type { DictionaryKey } from './es';

/** Si falta una clave respecto a `es`, `astro check` falla. */
export const en: Record<DictionaryKey, string> = {
  'site.name': 'GenthimDeV',
  'site.description': 'GenthimDeV portfolio: full-stack development.',
  'nav.projects': 'Projects',
  'nav.lab': 'Lab',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.label': 'Main',
  'lang.switch': 'Change language',
  'page.home.title': 'Home',
  'page.projects.title': 'Projects',
  'page.lab.title': 'Lab',
  'page.about.title': 'About',
  'page.placeholder': '[...] Content pending.',
};
