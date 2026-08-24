import type { APIRoute } from 'astro';
import { fichesLieux } from '@/data/decouvrir';
import { experiences } from '@/data/experiences';
import { decouvrirMarkdown } from '@/lib/markdown-content';

export function getStaticPaths() {
  return fichesLieux.map((f) => ({ params: { lieu: f.slug } }));
}

export const GET: APIRoute = ({ params, site }) => {
  const fiche = fichesLieux.find((f) => f.slug === params.lieu)!;
  const liens = fiche.aCombinerAvec.map((slug) => fichesLieux.find((f) => f.slug === slug)).filter(Boolean) as typeof fichesLieux;
  const experienceLiee = experiences.find((e) => e.slug === fiche.experienceLiee);
  const url = new URL(`/decouvrir/${fiche.slug}/`, site).toString();

  return new Response(decouvrirMarkdown(fiche, liens, experienceLiee, url), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
