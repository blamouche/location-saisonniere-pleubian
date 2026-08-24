import { z } from 'zod';

/**
 * Schéma de validation de `maison.json` — source unique de vérité factuelle du bien
 * (convention CLAUDE.md du dépôt : ne jamais dupliquer une capacité, un équipement ou
 * une coordonnée en dur dans une page).
 *
 * L'import de `maison.ts` fait échouer le build si `maison.json` ne respecte pas ce
 * schéma (US-002 du backlog).
 */
export const maisonSchema = z.object({
  nom: z.string().min(1),
  slogan: z.string().min(1),
  hotes: z.array(z.object({ prenom: z.string(), statut: z.string() })).min(1),
  superhost: z.boolean(),
  adresse: z.object({
    lieuDit: z.string(),
    commune: z.string(),
    codePostal: z.string(),
    departement: z.string(),
    region: z.string(),
    pays: z.string(),
    territoire: z.string(),
    geo: z.object({
      latitude: z.number(),
      longitude: z.number(),
      verifie: z.boolean(),
      note: z.string().optional(),
    }),
  }),
  contact: z.object({
    email: z.email(),
    telephone: z.string().nullable(),
    noteTodo: z.string().optional(),
  }),
  capacite: z.object({
    voyageurs: z.number().int().positive(),
    chambres: z.number().int().positive(),
    couchages: z.number().int().positive(),
    sallesDeBain: z.number().int().positive(),
    wcSepare: z.boolean(),
  }),
  chambres: z
    .array(
      z.object({
        nom: z.string(),
        niveau: z.string(),
        configuration: z.string(),
      })
    )
    .min(1),
  sallesDeBain: z.array(z.object({ nom: z.string(), equipement: z.string() })).min(1),
  scenariosCouchage: z.array(z.string()).min(1),
  exterieur: z.object({
    jardinClos: z.boolean(),
    description: z.string(),
  }),
  stationnement: z.object({
    gratuit: z.boolean(),
    emplacements: z.array(z.string()),
  }),
  equipements: z.object({
    confort: z.array(z.string()),
    cuisine: z.array(z.string()),
    exterieur: z.array(z.string()),
    securite: z.array(z.string()),
    accessibilite: z.array(z.string()),
  }),
  acces: z.object({
    type: z.string(),
    modalite: z.string(),
  }),
  horaires: z.object({
    arriveeBasseSaison: z.string(),
    arriveeHauteSaison: z.string(),
    depart: z.string(),
    noteTodo: z.string().optional(),
  }),
  animaux: z.object({
    acceptes: z.boolean(),
  }),
  distances: z.object({
    mer: z.object({
      duree: z.string(),
      verifiePortePorte: z.boolean(),
    }),
  }),
  cePasCest: z.array(z.string()),
  reglementation: z.object({
    numeroEnregistrementMeubleTourisme: z.string().nullable(),
    noteTodo: z.string().optional(),
  }),
  tarifs: z.object({
    indicatifs: z.boolean(),
    noteTodo: z.string().optional(),
    parSaison: z.object({
      printemps: z.string().nullable(),
      ete: z.string().nullable(),
      automne: z.string().nullable(),
      hiver: z.string().nullable(),
    }),
  }),
  plateformes: z.object({
    airbnb: z.object({
      url: z.url(),
      utmSource: z.string(),
      utmMedium: z.string(),
    }),
    booking: z.object({
      url: z.url().nullable(),
      noteTodo: z.string().optional(),
    }),
  }),
});

export type Maison = z.infer<typeof maisonSchema>;
