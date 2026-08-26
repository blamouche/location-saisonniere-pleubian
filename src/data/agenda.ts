/**
 * Agenda des événements du territoire (nouvelle section). Contenu ancré dans des
 * sources vérifiées (mairies, offices de tourisme, plateformes d'inscription
 * officielles) — jamais de date ou de programme inventé. Le Festival du Chant de
 * Marin a déjà sa propre page complète sous `/experiences/festival-chant-de-marin/`
 * (lienInterne) : pas de doublon de contenu ici, seulement un renvoi.
 */
export interface EvenementAgenda {
  slug: string;
  titre: string;
  lieu: string;
  categorie: 'Festival' | 'Sport' | 'Marché' | 'Concert' | 'Fest-noz';
  /** Événement récurrent (marché hebdomadaire…) plutôt que daté une fois. */
  recurrence?: string;
  /** Date ISO, uniquement pour les événements à date fixe (pas les récurrents). */
  date?: string;
  essentiel: string;
  description: string;
  gratuit: boolean;
  prix?: string;
  /** Page interne existante déjà complète (évite le contenu dupliqué). */
  lienInterne?: string;
  lienOfficiel?: string;
  source: string;
}

export const agenda: EvenementAgenda[] = [
  {
    slug: 'festival-chant-de-marin',
    titre: 'Festival du Chant de Marin',
    lieu: 'Paimpol',
    categorie: 'Festival',
    date: '2027-08-06',
    essentiel:
      "L'un des plus grands rassemblements de musiques marines d'Europe (jusqu'à 170 000 festivaliers en 2025), à Paimpol, à quelques minutes de la maison. 17ᵉ édition les 6, 7 et 8 août 2027.",
    description: 'Voir la page dédiée pour le programme complet, les astuces pratiques et toutes les dates.',
    gratuit: false,
    lienInterne: '/experiences/festival-chant-de-marin/',
    source: 'https://www.paimpol-festival.bzh/',
  },
  {
    slug: 'sloug-run',
    titre: 'Sloug Run',
    lieu: 'Pleubian',
    categorie: 'Sport',
    date: '2026-07-04',
    essentiel: "Course/marche solidaire de 8 km à travers la Presqu'île sauvage, avec une pause « sloug » (bière) à mi-parcours, au profit de la station SNSM de Pleubian.",
    description:
      "8 km de course ou de marche à travers les paysages de la Presqu'île, avec une pause conviviale à mi-parcours. Les bénéfices sont reversés à la SNSM de Pleubian (sauvetage en mer). Arrivée animée : concerts, food-trucks, buvette.",
    gratuit: false,
    prix: 'Voir tarifs d’inscription',
    lienOfficiel: 'https://www.presquile-de-lezardrieux.com/agenda',
    source: 'https://www.presquile-de-lezardrieux.com/agenda',
  },
  {
    slug: 'trail-de-lalgue',
    titre: "Trail de l'Algue",
    lieu: 'Pleubian',
    categorie: 'Sport',
    date: '2026-08-26',
    essentiel: "Trail à Pleubian avec un départ 28 km (dont une première partie de 14 km en direction de Kerbors) — gratuit pour les spectateurs.",
    description: "Course de trail au départ de Pleubian, parcours de 28 km (première partie de 14 km vers Kerbors). Renseignements et inscriptions sur l'agenda officiel du territoire.",
    gratuit: true,
    lienOfficiel: 'https://www.presquile-de-lezardrieux.com/agenda',
    source: 'https://www.presquile-de-lezardrieux.com/agenda',
  },
  {
    slug: 'marche-de-pleubian',
    titre: 'Marché de Pleubian',
    lieu: 'Pleubian, centre-bourg',
    categorie: 'Marché',
    recurrence: 'Tous les samedis, 8h-13h, toute l’année',
    essentiel: 'Marché hebdomadaire sur les places du centre-bourg de Pleubian, à quelques minutes de la maison : fruits et légumes, fleurs et plantes, viande, vêtements, poissons et coquillages. Animations musicales en été.',
    description: 'Le marché se tient tous les samedis de 8h à 13h sur les places du centre-bourg. Producteurs et commerçants locaux ; animations musicales pendant l’été.',
    gratuit: true,
    lienOfficiel: 'https://www.mairie-pleubian.fr/decouvrir/marche-de-pleubian',
    source: 'https://www.mairie-pleubian.fr/decouvrir/marche-de-pleubian',
  },
  {
    slug: 'marche-de-treguier',
    titre: 'Marché de Tréguier',
    lieu: 'Tréguier',
    categorie: 'Marché',
    recurrence: 'Tous les mercredis matin (après-midi et 5 mercredis nocturnes en été)',
    essentiel: "Marché hebdomadaire du mercredi matin à Tréguier (place des Halles, rue Renan, quais) : textile, décoration, produits alimentaires. Prolongé l'après-midi et jusqu'à 22h pour 5 mercredis en juillet-août.",
    description: "Le marché de Tréguier se tient le mercredi matin, place des Halles, rue Renan et sur les quais. En été, il s'étend l'après-midi, et 5 mercredis de juillet-août deviennent des marchés nocturnes (8h-22h).",
    gratuit: true,
    lienOfficiel: 'https://www.cotesdarmor.com/fr/fiche/degustation/marche-hebdomadaire-de-treguier-treguier_TFODEGBRE022FS0000D/',
    source: 'https://www.cotesdarmor.com/fr/fiche/degustation/marche-hebdomadaire-de-treguier-treguier_TFODEGBRE022FS0000D/',
  },
  {
    slug: 'jeudis-de-kermouster',
    titre: 'Les Jeudis de Kermouster',
    lieu: 'Kermouster, Lézardrieux',
    categorie: 'Concert',
    date: '2026-08-27',
    essentiel: "Concerts en plein air à Kermouster (Lézardrieux), avec restauration sur place (pizzas, burgers, crêpes) — gratuit.",
    description: 'Soirée concert en plein air à Kermouster, sur la commune de Lézardrieux, à quelques minutes de la maison. Restauration sur place. Gratuit.',
    gratuit: true,
    lienOfficiel: 'https://www.presquile-de-lezardrieux.com/agenda',
    source: 'https://www.presquile-de-lezardrieux.com/agenda',
  },
  {
    slug: 'fest-noz-lanmodez',
    titre: 'Fest Noz de Lanmodez',
    lieu: 'Lanmodez',
    categorie: 'Fest-noz',
    date: '2026-08-28',
    essentiel: 'Fest-noz de clôture de la programmation d’été à Lanmodez, à quelques minutes de la maison.',
    description: 'Fest-noz (bal traditionnel breton) à Lanmodez, qui clôture la programmation estivale du secteur.',
    gratuit: false,
    prix: '8 € (gratuit moins de 18 ans)',
    lienOfficiel: 'https://www.presquile-de-lezardrieux.com/agenda',
    source: 'https://www.presquile-de-lezardrieux.com/agenda',
  },
];
