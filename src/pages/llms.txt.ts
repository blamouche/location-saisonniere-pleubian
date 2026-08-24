import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { maison } from '@/data/maison';
import { fichesLieux } from '@/data/decouvrir';
import { experiences } from '@/data/experiences';
import { saisons } from '@/data/saisons';

/**
 * `/llms.txt` (US-053, PRD §12.2.D, convention llmstxt.org) : index du site pour
 * les agents IA, généré au build à partir des mêmes sources de données que les
 * pages elles-mêmes — jamais maintenu à la main, jamais en dérive.
 */
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).toString();
  const journal = (await getCollection('journal')).sort((a, b) => b.data.datePublished.valueOf() - a.data.datePublished.valueOf());

  const lignes: string[] = [];
  lignes.push(`# ${maison.nom}`);
  lignes.push('');
  lignes.push(`> ${maison.slogan} — maison familiale de ${maison.capacite.voyageurs} personnes à ${maison.adresse.commune} (${maison.adresse.codePostal}), Presqu'île sauvage, Côtes-d'Armor. Site vitrine SEO/GEO-first, ${maison.hotes.map((h) => h.prenom).join(' & ')}${maison.superhost ? ', Superhost' : ''}.`);
  lignes.push('');
  lignes.push('## Le bien');
  lignes.push(`- [Accueil](${url('/')}): présentation, chiffres clés, territoire.`);
  lignes.push(`- [La maison](${url('/la-maison/')}): visite pièce par pièce, équipements, couchages.`);
  lignes.push(`- [Galerie photo](${url('/la-maison/galerie/')}): toutes les photos, filtrables par pièce.`);
  lignes.push(`- [Infos pratiques](${url('/la-maison/pratique/')}): arrivée, règlement, FAQ séjour.`);
  lignes.push(`- [Réserver](${url('/reserver/')}): tarifs indicatifs, conditions, liens de réservation.`);
  lignes.push(`- [Avis voyageurs](${url('/avis/')}): avis réels uniquement.`);
  lignes.push(`- [Données structurées](${url('/donnees.json')}): faits du bien en JSON, licence ouverte.`);
  lignes.push('');

  lignes.push('## Saisons');
  for (const s of saisons) {
    lignes.push(`- [${s.label}](${url(`/saisons/${s.id}/`)}): ${s.promesse} (${s.periode}). Version texte : ${url(`/saisons/${s.id}/index.md`)}`);
  }
  lignes.push('');

  lignes.push('## Expériences');
  for (const e of experiences) {
    lignes.push(`- [${e.titre}](${url(`/experiences/${e.slug}/`)}) [${e.pilier}]: ${e.essentiel} Version texte : ${url(`/experiences/${e.slug}/index.md`)}`);
  }
  lignes.push('');

  lignes.push('## Découvrir le territoire');
  for (const f of fichesLieux) {
    lignes.push(`- [${f.nom}](${url(`/decouvrir/${f.slug}/`)}): ${f.essentiel} Version texte : ${url(`/decouvrir/${f.slug}/index.md`)}`);
  }
  lignes.push('');

  lignes.push('## Journal');
  for (const a of journal) {
    lignes.push(`- [${a.data.titre}](${url(`/journal/${a.id}/`)}) (${a.data.datePublished.toISOString().slice(0, 10)}): ${a.data.description} Version texte : ${url(`/journal/${a.id}/index.md`)}`);
  }
  lignes.push('');

  lignes.push('## Autres ressources');
  lignes.push(`- [llms-full.txt](${url('/llms-full.txt')}): contenu intégral du site en markdown.`);
  lignes.push(`- [Sitemap](${url('/sitemap-index.xml')})`);
  lignes.push(`- [Flux RSS du journal](${url('/journal/rss.xml')})`);

  return new Response(lignes.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
