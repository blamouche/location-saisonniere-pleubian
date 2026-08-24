import type { APIRoute } from 'astro';
import { maison } from '@/data/maison';
import { withBase } from '@/lib/base-path';

/**
 * `/donnees.json` (US-056, PRD §12.2.C/§14.3) : faits structurés du bien, générés
 * directement depuis `maison.json` (source unique de vérité, `CLAUDE.md`) — jamais
 * ressaisis. Licence ouverte explicite pour un usage par des agents/partenaires tiers.
 */
export const GET: APIRoute = ({ site }) => {
  const payload = {
    licence: 'CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/deed.fr (citer la source : ' + new URL(withBase('/'), site).toString() + ')',
    genereLe: new Date().toISOString(),
    source: new URL(withBase('/'), site).toString(),
    bien: maison,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
