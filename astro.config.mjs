// @ts-check
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fichesLieux } from './src/data/decouvrir.ts';
import { experiences } from './src/data/experiences.ts';
import { saisons } from './src/data/saisons.ts';

const SITE = 'https://maison-odjoge.example'; // TODO (PRD §19, Q1) : domaine définitif.

// Les endpoints `.md` (US-055) sont des routes de type "endpoint", pas "page" —
// @astrojs/sitemap ne les découvre pas automatiquement. On les déclare ici pour
// respecter le critère "déclarée dans le sitemap" sans dupliquer la liste des
// slugs (recalculée depuis les mêmes sources de données que les pages elles-mêmes).
const journalSlugs = readdirSync(fileURLToPath(new URL('./src/content/journal', import.meta.url)))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));

const markdownPages = [
  ...fichesLieux.map((f) => `${SITE}/decouvrir/${f.slug}/index.md`),
  ...experiences.map((e) => `${SITE}/experiences/${e.slug}/index.md`),
  ...saisons.map((s) => `${SITE}/saisons/${s.id}/index.md`),
  ...journalSlugs.map((slug) => `${SITE}/journal/${slug}/index.md`),
];

// Contrainte non négociable (voir docs/PRD.md §14.1) : sortie 100 % statique.
// Aucun adaptateur SSR/serverless ne doit être ajouté ici.
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      customPages: markdownPages,
      // `lastmod` réel = date du build (US-049) : reflète l'horodatage effectif de
      // génération de chaque page, cohérent avec le rebuild quotidien visé (US-032).
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
