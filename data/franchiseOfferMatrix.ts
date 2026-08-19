export type OfferTier = 'Value' | 'Standard' | 'Professional' | 'Premium' | 'Luxury / Industrial';
export type VerificationState = 'unverified' | 'verified';

export type FranchiseOfferMatrixItem = {
  id: string;
  category: string;
  tier: OfferTier;
  titleEn: string;
  titlePl: string;
  roleEn: string;
  rolePl: string;
  sourcingQuery: string;
  alibabaSearchUrl: string;
  sourceStatus: 'search-link' | 'verified-listing';
  priceStatus: VerificationState;
  moqStatus: VerificationState;
  availabilityStatus: VerificationState;
  complianceStatus: VerificationState;
  logistics: {
    doorToDoor: boolean;
    tracking: 'planned' | 'confirmed';
    insurance: 'optional-until-confirmed' | 'confirmed';
    incoterms: 'confirmed-per-transaction';
  };
  warrantyPolicy: string;
  servicePolicy: string;
  consumablesPolicy: string;
  compliancePolicy: string;
};

export const franchiseStoreCategories = [
  'Smartfony i urządzenia mobilne','Laptopy i komputery mobilne','Komputery stacjonarne i mini PC','Monitory i wyświetlacze','Serwery i infrastruktura IT','Sieci i telekomunikacja','Cyberbezpieczeństwo sprzętowe','Drukarki i urządzenia biurowe','Meble biurowe premium','Wyposażenie recepcji i lobby','Oświetlenie profesjonalne','Smart Home i automatyka budynkowa','Kontrola dostępu i bezpieczeństwo','Monitoring wizyjny','Systemy alarmowe i przeciwpożarowe','Fotowoltaika','Magazyny energii','Ładowanie pojazdów elektrycznych','HVAC i klimatyzacja','Pompy ciepła','Uzdatnianie i filtracja wody','Maszyny pakujące','Maszyny CNC','Obróbka metalu','Spawalnictwo','Narzędzia profesjonalne','Sprężarki i pneumatyka','Pompy przemysłowe','Generatory i zasilanie awaryjne','Wózki widłowe i logistyka magazynowa','Regały i magazynowanie','Transport wewnętrzny i przenośniki','Maszyny budowlane','Sprzęt komunalny','Rolnictwo i agro','Sprzęt laboratoryjny','Aparatura pomiarowa','Wyposażenie medyczne nieinwazyjne','Wyposażenie stomatologiczne','Fitness i wellness','SPA i hospitality','Wyposażenie hoteli','Gastronomia profesjonalna','Chłodnictwo komercyjne','Automaty vendingowe','Obsługa gotówki i płatności','Audio Video i konferencje','Digital signage i reklama','Drzwi, bramy i automatyka wejść','Outdoor i architektura zewnętrzna',
] as const;

const tiers: Array<{ tier: OfferTier; en: string; pl: string; suffix: string }> = [
  { tier: 'Value', en: 'Value Market Option', pl: 'Wariant ekonomiczny', suffix: 'budget business wholesale' },
  { tier: 'Standard', en: 'Balanced Business Option', pl: 'Wariant standardowy', suffix: 'standard business commercial' },
  { tier: 'Professional', en: 'Professional Duty Option', pl: 'Wariant profesjonalny', suffix: 'professional industrial commercial' },
  { tier: 'Premium', en: 'Premium Performance Option', pl: 'Wariant premium', suffix: 'premium high performance' },
  { tier: 'Luxury / Industrial', en: 'Luxury / Industrial Flagship', pl: 'Wariant luksusowy / przemysłowy', suffix: 'luxury flagship heavy duty industrial' },
];

const toAlibabaSearch = (query: string) => `https://www.alibaba.com/trade/search?SearchText=${encodeURIComponent(query)}`;

export const catalogueScaleTarget = {
  stores: 50,
  targetItems: 200000,
  targetItemsPerStore: 4000,
  defaultPageSize: 24,
  allowedPageSizes: [24, 48, 96] as const,
  filters: ['store', 'query', 'role', 'tier', 'verification'] as const,
  sourceRefreshPolicy: 'Price, MOQ and availability may be refreshed only through lawful API access or another verified source.',
};

export const franchiseOfferMatrix: FranchiseOfferMatrixItem[] = franchiseStoreCategories.flatMap((category, categoryIndex) =>
  tiers.map((tier, tierIndex) => {
    const sourcingQuery = `${category} ${tier.suffix}`;
    return {
      id: `store-${String(categoryIndex + 1).padStart(2, '0')}-${String(tierIndex + 1).padStart(2, '0')}`,
      category,
      tier: tier.tier,
      titleEn: `${tier.en} — ${category}`,
      titlePl: `${tier.pl} — ${category}`,
      roleEn: `Business sourcing profile for ${category}; exact product, specification and commercial terms are confirmed before a binding offer.`,
      rolePl: `Profil sourcingowy dla kategorii ${category}; konkretny produkt, specyfikacja i warunki handlowe są potwierdzane przed ofertą wiążącą.`,
      sourcingQuery,
      alibabaSearchUrl: toAlibabaSearch(sourcingQuery),
      sourceStatus: 'search-link',
      priceStatus: 'unverified',
      moqStatus: 'unverified',
      availabilityStatus: 'unverified',
      complianceStatus: 'unverified',
      logistics: { doorToDoor: true, tracking: 'planned', insurance: 'optional-until-confirmed', incoterms: 'confirmed-per-transaction' },
      warrantyPolicy: 'Warranty duration and scope are displayed only when confirmed in writing for the selected model and market. / Okres i zakres gwarancji są prezentowane wyłącznie po pisemnym potwierdzeniu dla wybranego modelu i rynku.',
      servicePolicy: 'Paid post-warranty service, spare parts and repair availability are confirmed before a binding offer. / Odpłatny serwis pogwarancyjny, części zamienne i możliwość naprawy są potwierdzane przed ofertą wiążącą.',
      consumablesPolicy: 'Consumables, wear parts, accessories and replenishment options are mapped to the selected model before order acceptance. / Materiały eksploatacyjne, części zużywalne, akcesoria i opcje uzupełniania są przypisywane do wybranego modelu przed przyjęciem zamówienia.',
      compliancePolicy: 'No CE/ISO/MDR/EN/IEC or other compliance claim is verified without authentic documentation applicable to the exact product and target market. / Żadne CE/ISO/MDR/EN/IEC ani inne twierdzenie o zgodności nie jest zweryfikowane bez autentycznej dokumentacji dla konkretnego produktu i rynku docelowego.',
    };
  })
);

export const franchiseOfferMatrixSummary = {
  stores: franchiseStoreCategories.length,
  architectureTarget: catalogueScaleTarget.targetItems,
  seedProfilesPerStore: tiers.length,
  seedProfiles: franchiseStoreCategories.length * tiers.length,
};
