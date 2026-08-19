export type MegaCentre = {
  id: string;
  officialName: string | null;
  fullAddress: string | null;
  region: string | null;
  specialty: string | null;
  assortment: string[];
  warehouseRole: string | null;
  salesChannels: Array<'RETAIL' | 'SHIPPING'>;
  availability: 'AWAITING_OWNER_DATA';
  logistics: string | null;
  catalogCategories: string[];
  media: string[];
  publishable: false;
  structuredDataEnabled: false;
};

/**
 * Safe placeholder registry for the second catalogue: MEGA CENTRUM USŁUGOWO-HANDLOWE.
 * Location facts are deliberately null until the owner supplies exact official data.
 * Do not generate LocalBusiness/Store JSON-LD from an entry while publishable=false.
 */
export const megaCentres: MegaCentre[] = Array.from({ length: 18 }, (_, index) => ({
  id: `mega-centre-${String(index + 1).padStart(2, '0')}`,
  officialName: null,
  fullAddress: null,
  region: null,
  specialty: null,
  assortment: [],
  warehouseRole: null,
  salesChannels: ['RETAIL', 'SHIPPING'],
  availability: 'AWAITING_OWNER_DATA',
  logistics: null,
  catalogCategories: [],
  media: [],
  publishable: false,
  structuredDataEnabled: false,
}));

export const megaCentreConceptName = 'MEGA CENTRUM USŁUGOWO-HANDLOWE';
