import { maison } from '@/data/maison';

/** JSON-LD `LodgingBusiness` / `VacationRental` (US-023, PRD §11.4), alimenté par
 * `maison.json` — jamais de fait dupliqué en dur. */
export function lodgingBusinessJsonLd(canonicalUrl: string) {
  const amenityFeature = Object.values(maison.equipements)
    .flat()
    .map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    name: maison.nom,
    description: maison.slogan,
    url: canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: maison.adresse.lieuDit,
      addressLocality: maison.adresse.commune,
      postalCode: maison.adresse.codePostal,
      addressRegion: maison.adresse.departement,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: maison.adresse.geo.latitude,
      longitude: maison.adresse.geo.longitude,
    },
    checkinTime: maison.horaires.arriveeBasseSaison,
    checkoutTime: maison.horaires.depart,
    petsAllowed: maison.animaux.acceptes,
    numberOfRooms: maison.capacite.chambres,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: maison.capacite.voyageurs,
    },
    amenityFeature,
  };
}
