// @ts-check
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';
import { fichesLieux } from './src/data/decouvrir.ts';
import { experiences } from './src/data/experiences.ts';
import { saisons } from './src/data/saisons.ts';
import { SITE, BASE } from './site.config.mjs';

// Les endpoints `.md` (US-055) sont des routes de type "endpoint", pas "page" —
// @astrojs/sitemap ne les découvre pas automatiquement. On les déclare ici pour
// respecter le critère "déclarée dans le sitemap" sans dupliquer la liste des
// slugs (recalculée depuis les mêmes sources de données que les pages elles-mêmes).
const journalSlugs = readdirSync(fileURLToPath(new URL('./src/content/journal', import.meta.url)))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));

// Les liens internes écrits à la main dans les articles du journal (Markdown,
// `src/content/journal/*.md`, ex. `[Sillon de Talbert](/decouvrir/sillon-de-talbert/)`)
// ignorent `base` — contrairement aux pages `.astro`, qui passent toutes par le
// helper `withBase()` (`src/lib/base-path.ts`). Ce plugin rehype fait la même chose
// au rendu du Markdown, sans jamais toucher au contenu source (racine-relatif,
// portable si le site change un jour d'hébergement — PRD §19, Q1).
function rehypeBasePath() {
  /** @param {import('hast').Root} tree */
  return (tree) => {
    visit(tree, 'element', (node) => {
      for (const attr of ['href', 'src']) {
        const value = node.properties?.[attr];
        if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(BASE + '/')) {
          node.properties[attr] = `${BASE}${value}`;
        }
      }
    });
  };
}

const markdownPages = [
  ...fichesLieux.map((f) => `${SITE}${BASE}/decouvrir/${f.slug}/index.md`),
  ...experiences.map((e) => `${SITE}${BASE}/experiences/${e.slug}/index.md`),
  ...saisons.map((s) => `${SITE}${BASE}/saisons/${s.id}/index.md`),
  ...journalSlugs.map((slug) => `${SITE}${BASE}/journal/${slug}/index.md`),
];

// Contrainte non négociable (voir documentation/PRD.md §14.1) : sortie 100 % statique.
// Aucun adaptateur SSR/serverless ne doit être ajouté ici.
export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  // GitHub Pages sert directement le contenu commité de ce dossier (Settings →
  // Pages → Deploy from a branch → /docs), sans workflow de déploiement séparé.
  outDir: './docs',
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [rehypeBasePath],
  },
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
  // Lot 5 (US-061) : FR à la racine (langue par défaut, non préfixée), EN sous
  // `/en/`, DE sous `/de/`. Les slugs traduits par section/fiche vivent dans
  // `src/i18n/locales.ts`, pas dans ce routing natif (qui ne gère que le préfixe).
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
