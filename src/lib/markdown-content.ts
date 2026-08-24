/**
 * Génération du contenu markdown brut des pages (US-054/US-055, PRD §12.2.D).
 * Fonctions partagées entre les endpoints `.md` par page et `llms-full.txt`, pour
 * qu'aucune des deux sorties ne puisse dériver de l'autre — une seule fonction par
 * type de page, appelée des deux côtés.
 */
import type { fichesLieux } from '@/data/decouvrir';
import type { experiences } from '@/data/experiences';
import type { Saison } from '@/data/saisons';
import { dixChoses } from '@/data/dix-choses';
import { maison } from '@/data/maison';

type FicheLieu = (typeof fichesLieux)[number];
type Experience = (typeof experiences)[number];

export function decouvrirMarkdown(fiche: FicheLieu, liens: FicheLieu[], experienceLiee: Experience | undefined, url: string): string {
  return `# ${fiche.nom}

> Source : ${url}

## L'essentiel

${fiche.essentiel}

## Résumé factuel

- **Où** : ${fiche.resume.ou}
- **Durée de visite** : ${fiche.resume.dureeVisite}
- **Gratuit ou payant** : ${fiche.resume.gratuitPayant}
- **Meilleure saison** : ${fiche.resume.meilleureSaison}
- **Accessible poussette / PMR** : ${fiche.resume.accessiblePMR}
- Temps de trajet depuis la Maison Od Joge : à vérifier porte-à-porte (non publié tant que non mesuré).

## Présentation

${fiche.corps.join('\n\n')}

## Conseil pratique

${fiche.conseilPratique}

## À combiner avec

${[...liens.map((l) => `- [${l.nom}](/decouvrir/${l.slug}/)`), experienceLiee ? `- [${experienceLiee.titre}](/experiences/${experienceLiee.slug}/)` : null]
  .filter(Boolean)
  .join('\n')}
`;
}

export function experienceMarkdown(experience: Experience, decouvrirLies: FicheLieu[], url: string): string {
  const propositions = experience.propositions.map((p) => `| ${p.titre} | ${p.duree} | ${p.difficulte} | ${p.saisonIdeale} | ${p.cout} |`).join('\n');
  const faq = experience.faq.map((f) => `**${f.q}**\n${f.r}`).join('\n\n');

  return `# ${experience.titre}

> Source : ${url} — Pilier : ${experience.pilier}

## L'essentiel

${experience.essentiel}

## Promesse

${experience.promesse}

## Depuis la maison

${experience.depuisLaMaison}

## Propositions concrètes

| Proposition | Durée | Difficulté | Saison idéale | Coût |
|---|---|---|---|---|
${propositions}

## Encadré pratique

- **Matériel** : ${experience.encadrePratique.materiel.join(', ')}
- **Réservations** : ${experience.encadrePratique.reservations}
- **Prestataires** : ${experience.encadrePratique.prestataires}

## Questions fréquentes

${faq}

## À combiner avec

${decouvrirLies.map((l) => `- [${l.nom}](/decouvrir/${l.slug}/)`).join('\n')}
`;
}

export function saisonMarkdown(saison: Saison, url: string): string {
  const tarif = maison.tarifs.parSaison[saison.id];
  return `# La Presqu'île sauvage en ${saison.label.toLowerCase()}

> Source : ${url} — Période : ${saison.periode}

## L'essentiel

${saison.promesse} En ${saison.label.toLowerCase()} (${saison.periode}), la Presqu'île sauvage de Pleubian propose ${dixChoses[saison.id].length} activités principales autour du Sillon de Talbert et du GR34. La Maison Od Joge (${maison.capacite.voyageurs} personnes, poêle à bois, jardin clos) sert de camp de base à ${maison.distances.mer.duree} de la mer.

## 10 choses à faire

${dixChoses[saison.id].map((item, i) => `${i + 1}. ${item}`).join('\n')}

## Tarifs indicatifs

${tarif ?? maison.tarifs.noteTodo}

## Météo moyenne et horaires d'ouverture

Non publiés tant que non vérifiés (voir la charte de factualité du site) — pas de donnée inventée.
`;
}
