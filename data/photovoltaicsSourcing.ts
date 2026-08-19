export type PvSupplierCandidate = {
  family: 'PV modules' | 'Energy storage' | 'Inverters / integrated systems';
  supplier: string;
  established: string;
  exportExperienceYears?: number;
  verification: string;
  evidence: string[];
  commercialStatus: 'SOURCE_CANDIDATE';
  priceStatus: 'REQUEST_CURRENT_QUOTE';
  complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER';
};

// Evidence-first sourcing shortlist. This is NOT a public claim of partnership,
// authorization, best price, or compliance of every product sold by the supplier.
// Exact model, certificate scope, MOQ, price, lead time, Incoterms and EU-market
// suitability must be re-verified immediately before a customer offer.
export const photovoltaicsSourcing: PvSupplierCandidate[] = [
  {
    family: 'PV modules',
    supplier: 'DAH Solar Co., Ltd.',
    established: '2009-04-07',
    exportExperienceYears: 17,
    verification: 'Alibaba Verified Manufacturer; TUV Rheinland verification data shown in supplier profile',
    evidence: [
      'PV Module TUV mark PV 50593532, profile validity shown through 2028-07-19',
      'MCS PV0309 for Solar Photovoltaic Modules, profile validity shown through 2027-11-11',
      'Supplier profile also lists EN 50549 evidence for a PV inverter; exact inverter model must be matched before use',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'PV modules',
    supplier: 'Foshan Tanfon Energy Technology Co., Ltd.',
    established: 'not recorded in this shortlist',
    verification: 'Alibaba Verified Manufacturer; on-site verification shown as SGS Group, report available 2026-02-07',
    evidence: [
      'TUV mark ZERTIFIKAT NR.PVC221244 for crystalline silicon PV modules, profile validity shown through 2027-11-25',
      'Supplier profile reports 3 production lines and third-party testing (partial)',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'PV modules',
    supplier: 'Sail Solar Energy Co., Ltd.',
    established: 'not recorded in this shortlist',
    verification: 'Alibaba Verified Manufacturer; TUV Rheinland verification data shown in supplier profile',
    evidence: [
      'TUV SUD mark Z2 129454 0002 Rev.00 for crystalline silicon terrestrial PV modules, profile validity shown through 2029-12-18',
      'CE 6142392.01AOC shown for Photovoltaic (PV) Module(s)',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Energy storage',
    supplier: 'Xiamen Eco-Sources Technology Co., Ltd.',
    established: '2007-09-06',
    exportExperienceYears: 18,
    verification: 'Alibaba Verified Manufacturer; Intertek verification data shown in supplier profile',
    evidence: [
      'Multiple CE entries shown for LiFePO4 Battery',
      'ETL entries shown for LiFePO4 Battery',
      'CE WUX202210114188EC shown for Solar Module',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Energy storage',
    supplier: 'Shenzhen Delong Energy Technology Co., Ltd.',
    established: '2012-12-18',
    exportExperienceYears: 13,
    verification: 'Alibaba Verified Manufacturer; on-site verification shown as SGS Group',
    evidence: [
      'CE entries shown for LiFePO4 Battery',
      'ETL 250226091GZC-001 shown for Lithium ion Battery',
      'Verification report 484357029_T shown with expiry 2026-12-19',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Energy storage',
    supplier: 'Shenzhen Basen Technology Co., Ltd.',
    established: '2013-03-06',
    exportExperienceYears: 12,
    verification: 'Alibaba Verified Manufacturer; SGS Group verification data shown in supplier profile',
    evidence: [
      'CE AT18270EC300063 shown for 51.2V100Ah',
      'CB JPTUV-166723 shown for Rechargeable LiFePO4 Battery',
      'Additional CE / UKCA entries shown for LiFePO4 products',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Inverters / integrated systems',
    supplier: 'Eitai (Xiamen) New Energy Technology Co., Ltd.',
    established: '2016-11-02',
    exportExperienceYears: 9,
    verification: 'Alibaba Verified Manufacturer; TUV Rheinland verification data shown in supplier profile',
    evidence: [
      'CE entries shown for PV Off-grid inverter',
      'EMC SZNTC2301090EV01 shown for PV off-grid inverter',
      'Multiple CE entries shown for lithium-ion / LiFePO4 battery packs',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Inverters / integrated systems',
    supplier: 'DAH Solar Co., Ltd.',
    established: '2009-04-07',
    exportExperienceYears: 17,
    verification: 'Alibaba Verified Manufacturer; TUV Rheinland verification data shown in supplier profile',
    evidence: [
      'EN 50549 230612BWA116-EG-EU-C001 shown for PV inverter, profile validity through 2028-07-22',
      'Exact inverter model and EU grid-country requirements still require transaction-level verification',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
  {
    family: 'Inverters / integrated systems',
    supplier: 'Sail Solar Energy Co., Ltd.',
    established: 'not recorded in this shortlist',
    verification: 'Alibaba Verified Manufacturer; TUV Rheinland verification data shown in supplier profile',
    evidence: [
      'CE ENS2210110028P002 shown for all-in-one solar charge inverter',
      'CE ENS2312010085P002 and ENS2410170105P002C shown for all-in-one solar charge inverter',
      'Exact model, grid mode and EU-country compliance require verification before offer',
    ],
    commercialStatus: 'SOURCE_CANDIDATE',
    priceStatus: 'REQUEST_CURRENT_QUOTE',
    complianceStatus: 'VERIFY_EXACT_MODEL_BEFORE_OFFER',
  },
];

export const photovoltaicsSourcingPolicy = {
  structure: '3 families × 3 comparable supplier candidates',
  bestPriceClaim: false,
  partnershipClaim: false,
  publicVerifiedClaim: false,
  requiredBeforeOffer: [
    'exact model and configuration',
    'current quotation and MOQ',
    'lead time and Incoterms',
    'certificate/document scope matched to exact model',
    'EU/Poland market and grid requirements where applicable',
    'transaction protection / payment terms',
  ],
} as const;
