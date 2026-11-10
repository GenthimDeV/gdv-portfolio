import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Proyectos: un archivo por proyecto e idioma en `src/content/projects/<locale>/<slug>.md`.
 * El idioma sale de la carpeta y el slug del nombre de archivo (igual en ES y EN).
 * El cuerpo Markdown es el caso de estudio.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Descripción breve del Inicio y del listado. */
    summary: z.string(),
    /** Línea meta: tipo de pieza ("Dashboard", "Landing page"…). */
    kind: z.string(),
    role: z.string(),
    status: z.enum(['planned', 'in-progress', 'live']),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    stack: z.array(z.string()).min(1),
    demoUrl: z.url().optional(),
    codeUrl: z.url().optional(),
    /** Texto del enlace a la demo: "Demo en vivo" o "Ver en vivo". */
    liveLabel: z.enum(['demo', 'view']).default('demo'),
    /** Marcador de la captura mientras no exista; luego, alt de la imagen. */
    screenshotAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int(),
  }),
});

export const collections = { projects };
