export const publicPositioning = {
  name: 'PROFESJA PREMIUM LIMITED™',
  pl: {
    headline: 'Prywatna działalność inwestycyjno-usługowa i agencja B2B',
    description:
      'Prywatna działalność inwestycyjno-usługowa i agencja B2B wspierająca przedsiębiorstwa w sourcingu, RFQ, organizacji transakcji, logistyce, compliance i dostępie do specjalistycznego katalogu. Finansowanie, jeżeli uczestniczy w procesie, jest zawsze przypisywane rzeczywistemu finansującemu.',
    investorActivity:
      'Działalność prywatnego inwestora i kapitał własny są prezentowane oddzielnie od usług agencyjnych oraz od finansowania świadczonego przez podmioty trzecie.',
    agencyServices:
      'Usługi agencyjne B2B obejmują w szczególności sourcing, RFQ, koordynację transakcji, logistykę, workflow dokumentów i zgodności oraz obsługę katalogu.',
    financing:
      'Jeżeli w procesie występuje finansowanie, publiczna treść wskazuje rzeczywistego finansującego i nie przypisuje PROFESJA PREMIUM LIMITED™ statusu regulowanej instytucji finansowej bez potwierdzonego zezwolenia lub wpisu.',
    legalReview:
      'LEGAL_REVIEW: przed publikacją produkcyjną należy potwierdzić rzeczywisty status prawny podmiotu, zakres wykonywanej działalności oraz wszystkie twierdzenia prawne i finansowe.',
  },
  en: {
    headline: 'Private investment and business-services activity and B2B agency',
    description:
      'A private investment and business-services activity and B2B agency supporting enterprises with sourcing, RFQs, transaction coordination, logistics, compliance and access to a specialist catalogue. Where financing participates in a transaction, it is always attributed to the actual financing provider.',
    investorActivity:
      'The private investor activity and own capital are presented separately from agency services and from financing provided by third parties.',
    agencyServices:
      'B2B agency services include sourcing, RFQs, transaction coordination, logistics, document and compliance workflows, and catalogue operations.',
    financing:
      'Where financing participates in a process, public content identifies the actual financing provider and does not attribute regulated financial-institution status to PROFESJA PREMIUM LIMITED™ without a verified licence or registration.',
    legalReview:
      'LEGAL_REVIEW: before production publication, verify the entity’s actual legal status, scope of activity and all legal or financial claims.',
  },
  boundaries: [
    'Nie przedstawiać PROFESJA PREMIUM LIMITED™ jako banku, instytucji kredytowej, firmy inwestycyjnej, funduszu inwestycyjnego, ubezpieczyciela, regulowanego pożyczkodawcy ani licencjonowanego pośrednika bez potwierdzonego zezwolenia lub wpisu do właściwego rejestru.',
    'Rozdzielać kapitał i działalność prywatnego inwestora od usług agencyjnych B2B oraz od finansowania świadczonego przez rzeczywistego finansującego.',
    'Nie ujawniać w publicznym interfejsie prywatnych danych właściciela ani danych sourcingowych oznaczonych jako niepubliczne.',
    'Twierdzenia prawne, finansowe, regulacyjne i dotyczące uprawnień oznaczać do LEGAL_REVIEW przed publikacją produkcyjną.',
  ],
} as const;

export type PublicPositioningLocale = 'pl' | 'en';

export function getPublicPositioning(locale: PublicPositioningLocale = 'pl') {
  return publicPositioning[locale];
}

export function buildOrganizationJsonLd(siteUrl: string, locale: PublicPositioningLocale = 'pl') {
  const copy = getPublicPositioning(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: publicPositioning.name,
    url: siteUrl,
    description: copy.description,
    knowsAbout: [
      'B2B sourcing',
      'Request for quotation (RFQ)',
      'Transaction coordination',
      'B2B logistics',
      'Product compliance workflows',
      'KYC and KYB workflows',
      'Document and transaction workflows',
    ],
  };
}
