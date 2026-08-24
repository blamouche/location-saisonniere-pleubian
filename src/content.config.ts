import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    auteur: z.string().default('Ben Lamouche'),
    pilier: z.enum(['Sport', 'Bien-être', 'Déconnexion', 'Air pur', 'Culture']),
    pilierPage: z.string(),
  }),
});

export const collections = { journal };
