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
  'a11y.skip': 'Skip to content',
  'footer.label': 'Contact',
  'footer.text': "Let's talk? Write to me or browse my code.",
  'footer.email': 'Email',
  'footer.github': 'GitHub',
  'footer.rights': 'All rights reserved.',
  'page.home.title': 'Home',
  'page.projects.title': 'Projects',
  'page.lab.title': 'Lab',
  'page.about.title': 'About',
  'page.placeholder': '[...] Content pending.',
};
