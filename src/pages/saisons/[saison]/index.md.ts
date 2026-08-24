import type { APIRoute } from 'astro';
import { saisons, getSaison, type SaisonId } from '@/data/saisons';
import { saisonMarkdown } from '@/lib/markdown-content';
import { withBase } from '@/lib/base-path';

export function getStaticPaths() {
  return saisons.map((s) => ({ params: { saison: s.id } }));
}

export const GET: APIRoute = ({ params, site }) => {
  const saison = getSaison(params.saison as SaisonId);
  const url = new URL(withBase(`/saisons/${saison.id}/`), site).toString();

  return new Response(saisonMarkdown(saison, url), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
