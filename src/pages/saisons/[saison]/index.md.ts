import type { APIRoute } from 'astro';
import { saisons, getSaison, type SaisonId } from '@/data/saisons';
import { saisonMarkdown } from '@/lib/markdown-content';

export function getStaticPaths() {
  return saisons.map((s) => ({ params: { saison: s.id } }));
}

export const GET: APIRoute = ({ params, site }) => {
  const saison = getSaison(params.saison as SaisonId);
  const url = new URL(`/saisons/${saison.id}/`, site).toString();

  return new Response(saisonMarkdown(saison, url), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
