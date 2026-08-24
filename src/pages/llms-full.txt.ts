import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { maison } from '@/data/maison';
import { fichesLieux } from '@/data/decouvrir';
import { experiences } from '@/data/experiences';
import { saisons } from '@/data/saisons';
import { decouvrirMarkdown, experienceMarkdown, saisonMarkdown } from '@/lib/markdown-content';
import { withBase } from '@/lib/base-path';

/**
 * `/llms-full.txt` (US-054, PRD §12.2.D) : contenu intégral du site en markdown,
 * réutilisant les mêmes fonctions de génération que les endpoints `.md` par page
 * (`src/lib/markdown-content.ts`) — aucune dérive possible entre les deux sorties.
 * FR uniquement (pas de multilingue actif — US-011), donc aucun doublon de langue.
 */
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(withBase(path), site).toString();
  const journal = (await getCollection('journal')).sort((a, b) => b.data.datePublished.valueOf() - a.data.datePublished.valueOf());

  const parts: string[] = [];

  parts.push(`# ${maison.nom} — contenu intégral\n\n> ${maison.slogan}\n> Généré au build depuis les mêmes données que le site. FR uniquement.\n`);

  parts.push(`## Le bien (source : ${url('/donnees.json')})\n\n${JSON.stringify(maison, null, 2)}\n`);

  for (const s of saisons) {
    parts.push(saisonMarkdown(s, url(`/saisons/${s.id}/`)));
  }

  for (const e of experiences) {
    const decouvrirLies = e.decouvrirLies.map((slug) => fichesLieux.find((f) => f.slug === slug)).filter(Boolean) as typeof fichesLieux;
    parts.push(experienceMarkdown(e, decouvrirLies, url(`/experiences/${e.slug}/`)));
  }

  for (const f of fichesLieux) {
    const liens = f.aCombinerAvec.map((slug) => fichesLieux.find((ff) => ff.slug === slug)).filter(Boolean) as typeof fichesLieux;
    const experienceLiee = experiences.find((e) => e.slug === f.experienceLiee);
    parts.push(decouvrirMarkdown(f, liens, experienceLiee, url(`/decouvrir/${f.slug}/`)));
  }

  for (const a of journal) {
    parts.push(`# ${a.data.titre}\n\n> Source : ${url(`/journal/${a.id}/`)} — ${a.data.datePublished.toISOString().slice(0, 10)}\n\n${a.body ?? ''}\n`);
  }

  const full = parts.join('\n---\n\n');

  return new Response(full, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
