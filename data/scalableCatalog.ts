export type CatalogTier = 'Value' | 'Standard' | 'Professional' | 'Premium' | 'Luxury / Industrial';

export const scalableCatalogCategories = [
  'Smartfony i urządzenia mobilne','Laptopy i komputery mobilne','Komputery stacjonarne i mini PC','Monitory i wyświetlacze','Serwery i infrastruktura IT','Sieci i telekomunikacja','Cyberbezpieczeństwo sprzętowe','Drukarki i urządzenia biurowe','Meble biurowe premium','Wyposażenie recepcji i lobby','Oświetlenie profesjonalne','Smart Home i automatyka budynkowa','Kontrola dostępu i bezpieczeństwo','Monitoring wizyjny','Systemy alarmowe i przeciwpożarowe','Fotowoltaika','Magazyny energii','Ładowanie pojazdów elektrycznych','HVAC i klimatyzacja','Pompy ciepła','Uzdatnianie i filtracja wody','Maszyny pakujące','Maszyny CNC','Obróbka metalu','Spawalnictwo','Narzędzia profesjonalne','Sprężarki i pneumatyka','Pompy przemysłowe','Generatory i zasilanie awaryjne','Wózki widłowe i logistyka magazynowa','Regały i magazynowanie','Transport wewnętrzny i przenośniki','Maszyny budowlane','Sprzęt komunalny','Rolnictwo i agro','Sprzęt laboratoryjny','Aparatura pomiarowa','Wyposażenie medyczne nieinwazyjne','Wyposażenie stomatologiczne','Fitness i wellness','SPA i hospitality','Wyposażenie hoteli','Gastronomia profesjonalna','Chłodnictwo komercyjne','Automaty vendingowe','Obsługa gotówki i płatności','Audio Video i konferencje','Digital signage i reklama','Drzwi, bramy i automatyka wejść','Outdoor i architektura zewnętrzna'
] as const;

const tiers: CatalogTier[] = ['Value','Standard','Professional','Premium','Luxury / Industrial'];
const roles = ['zakup detaliczny','zakup hurtowy','wyposażenie przedsiębiorstwa','projekt inwestycyjny','modernizacja','serwis i utrzymanie','zapas operacyjny','zastosowanie terenowe','zastosowanie przemysłowe','zastosowanie premium'];
const formFactors = ['compact','standard','extended','heavy-duty','executive','modular','mobile','fixed-installation'];

export const CATALOG_ITEMS_PER_STORE = 4000;
export const CATALOG_TOTAL_ITEMS = scalableCatalogCategories.length * CATALOG_ITEMS_PER_STORE;
export const CATALOG_PAGE_SIZE = 100;
export const CATALOG_TOTAL_PAGES = Math.ceil(CATALOG_TOTAL_ITEMS / CATALOG_PAGE_SIZE);

const toAlibabaSearch = (query: string) => `https://www.alibaba.com/trade/search?SearchText=${encodeURIComponent(query)}`;

export type ScalableCatalogItem = {
  id: string;
  globalIndex: number;
  storeNo: number;
  category: string;
  tier: CatalogTier;
  quantityPerCard: 1;
  titleEn: string;
  titlePl: string;
  role: string;
  formFactor: string;
  sourceUrl: string;
  sourceStatus: 'sourcing-candidate';
  syncStatus: 'awaiting-verified-source';
  delivery: string;
  warranty: string;
  service: string;
  consumables: string;
  documents: string;
  automation: string;
  compliance: string;
};

export function getCatalogItem(globalIndex: number): ScalableCatalogItem {
  const normalized = Math.max(0, Math.min(CATALOG_TOTAL_ITEMS - 1, globalIndex));
  const storeNo = Math.floor(normalized / CATALOG_ITEMS_PER_STORE) + 1;
  const withinStore = normalized % CATALOG_ITEMS_PER_STORE;
  const category = scalableCatalogCategories[storeNo - 1];
  const tier = tiers[withinStore % tiers.length];
  const role = roles[Math.floor(withinStore / tiers.length) % roles.length];
  const formFactor = formFactors[Math.floor(withinStore / (tiers.length * roles.length)) % formFactors.length];
  const sequence = String(withinStore + 1).padStart(4, '0');
  const titlePl = `${category} — ${tier} — ${role} — pozycja ${sequence}`;
  const titleEn = `${category} — ${tier} — ${formFactor} — item ${sequence}`;
  const query = `${category} ${tier} ${role} ${formFactor}`;
  return {
    id: `PPL-${String(storeNo).padStart(2,'0')}-${sequence}`,
    globalIndex: normalized,
    storeNo,
    category,
    tier,
    quantityPerCard: 1,
    titleEn,
    titlePl,
    role,
    formFactor,
    sourceUrl: toAlibabaSearch(query),
    sourceStatus: 'sourcing-candidate',
    syncStatus: 'awaiting-verified-source',
    delivery: 'Door-to-door / od odbioru od dostawcy do doręczenia odbiorcy; przewoźnik, tracking, ubezpieczenie, Incoterms i moment przejścia ryzyka są potwierdzane w ofercie wiążącej.',
    warranty: 'Minimum 12 miesięcy wyłącznie po pisemnym potwierdzeniu producenta lub sprzedawcy dla konkretnego modelu i rynku.',
    service: 'Odpłatny serwis pogwarancyjny, naprawy i części zamienne są potwierdzane przed przyjęciem zamówienia.',
    consumables: 'Materiały eksploatacyjne, części zużywalne i akcesoria są mapowane do wybranego modelu przed akceptacją zamówienia.',
    documents: 'Dokumentacja produktu, instrukcje, deklaracje i pliki są przypisywane indywidualnie do dokładnego SKU/modelu po weryfikacji źródła.',
    automation: 'Rekord jest przygotowany do automatycznej synchronizacji ceny, MOQ, dostępności, dokumentów i statusu dostawy po podłączeniu autoryzowanego źródła danych.',
    compliance: 'CE/ISO/MDR/EN/IEC i inne oznaczenia otrzymują status zweryfikowany wyłącznie po sprawdzeniu autentycznej dokumentacji dla dokładnego produktu i rynku docelowego.'
  };
}

export function getCatalogPage(page: number, category?: string) {
  const safePage = Math.max(1, Math.min(CATALOG_TOTAL_PAGES, page));
  if (category && scalableCatalogCategories.includes(category as (typeof scalableCatalogCategories)[number])) {
    const storeNo = scalableCatalogCategories.indexOf(category as (typeof scalableCatalogCategories)[number]) + 1;
    const maxPages = Math.ceil(CATALOG_ITEMS_PER_STORE / CATALOG_PAGE_SIZE);
    const localPage = Math.max(1, Math.min(maxPages, safePage));
    const start = (storeNo - 1) * CATALOG_ITEMS_PER_STORE + (localPage - 1) * CATALOG_PAGE_SIZE;
    const count = Math.min(CATALOG_PAGE_SIZE, CATALOG_ITEMS_PER_STORE - (localPage - 1) * CATALOG_PAGE_SIZE);
    return { items: Array.from({length: count}, (_, i) => getCatalogItem(start + i)), page: localPage, totalPages: maxPages, totalItems: CATALOG_ITEMS_PER_STORE, category };
  }
  const start = (safePage - 1) * CATALOG_PAGE_SIZE;
  const count = Math.min(CATALOG_PAGE_SIZE, CATALOG_TOTAL_ITEMS - start);
  return { items: Array.from({length: count}, (_, i) => getCatalogItem(start + i)), page: safePage, totalPages: CATALOG_TOTAL_PAGES, totalItems: CATALOG_TOTAL_ITEMS, category: undefined };
}
