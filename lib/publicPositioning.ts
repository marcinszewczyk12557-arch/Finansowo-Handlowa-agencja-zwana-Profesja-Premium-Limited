export const publicPositioning = {
  name: 'PROFESJA PREMIUM LIMITED™',
  pl: {
    headline: 'Prywatna działalność inwestycyjno-usługowa i agencja B2B',
    description:
      'Prywatna działalność inwestycyjno-usługowa i agencja B2B wspierająca przedsiębiorstwa w sourcingu, RFQ, organizacji transakcji, logistyce i dostępie do specjalistycznego katalogu. Finansowanie, jeżeli uczestniczy w procesie, jest przypisywane rzeczywistemu finansującemu.',
    legalReview:
      'LEGAL_REVIEW: przed publikacją produkcyjną należy potwierdzić rzeczywisty status prawny podmiotu, zakres wykonywanej działalności oraz wszystkie twierdzenia prawne i finansowe.',
  },
  en: {
    headline: 'Private investment and business-services activity and B2B agency',
    description:
      'A private investment and business-services activity and B2B agency supporting enterprises with sourcing, RFQs, transaction coordination, logistics and access to a specialist catalogue. Where financing participates in a transaction, it is attributed to the actual financing provider.',
    legalReview:
      'LEGAL_REVIEW: before production publication, verify the entity’s actual legal status, scope of activity and all legal or financial claims.',
  },
  boundaries: [
    'Nie przedstawiać PROFESJA PREMIUM LIMITED™ jako banku, instytucji kredytowej, firmy inwestycyjnej, funduszu inwestycyjnego, ubezpieczyciela, regulowanego pożyczkodawcy ani licencjonowanego pośrednika bez potwierdzonego zezwolenia lub wpisu do właściwego rejestru.',
    'Rozdzielać kapitał i działalność prywatnego inwestora od usług agencyjnych B2B oraz od finansowania świadczonego przez rzeczywistego finansującego.',
    'Nie ujawniać w publicznym interfejsie prywatnych danych właściciela ani danych sourcingowych oznaczonych jako niepubliczne.',
  ],
} as const;

export function buildOrganizationJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: publicPositioning.name,
    url: siteUrl,
    description: publicPositioning.pl.description,
    knowsAbout: [
      'B2B sourcing',
      'Request for quotation (RFQ)',
      'Transaction coordination',
      'B2B logistics',
      'Product compliance workflows',
    ],
  };
}
