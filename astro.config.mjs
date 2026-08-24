// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Contrainte non négociable (voir docs/PRD.md §14.1) : sortie 100 % statique.
// Aucun adaptateur SSR/serverless ne doit être ajouté ici.
export default defineConfig({
  // TODO (PRD §19, Q1) : remplacer par le nom de domaine définitif une fois tranché.
  site: 'https://maison-odjoge.example',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
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
