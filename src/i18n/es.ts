/** Diccionario base: define las claves que el resto de idiomas debe cubrir. */
export const es = {
  'site.name': 'GenthimDeV',
  'site.description': 'Portfolio de GenthimDeV: desarrollo full-stack.',
  'nav.projects': 'Proyectos',
  'nav.lab': 'Laboratorio',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.label': 'Principal',
  'lang.switch': 'Cambiar de idioma',
  'page.home.title': 'Inicio',
  'page.projects.title': 'Proyectos',
  'page.lab.title': 'Laboratorio',
  'page.about.title': 'Sobre mí',
  'page.placeholder': '[...] Contenido pendiente.',
} as const;

export type DictionaryKey = keyof typeof es;
