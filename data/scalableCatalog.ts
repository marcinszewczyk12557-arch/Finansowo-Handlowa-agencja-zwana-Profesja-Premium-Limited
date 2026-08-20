export type CatalogTier = 'Value' | 'Standard' | 'Professional' | 'Premium' | 'Luxury / Industrial';

export const scalableCatalogCategories = [
  'Smartfony i urządzenia mobilne','Laptopy i komputery mobilne','Komputery stacjonarne i mini PC','Monitory i wyświetlacze','Serwery i infrastruktura IT','Sieci i telekomunikacja','Cyberbezpieczeństwo sprzętowe','Drukarki i urządzenia biurowe','Meble biurowe premium','Wyposażenie recepcji i lobby','Oświetlenie profesjonalne','Smart Home i automatyka budynkowa','Kontrola dostępu i bezpieczeństwo','Monitoring wizyjny','Systemy alarmowe i przeciwpożarowe','Fotowoltaika','Magazyny energii','Ładowanie pojazdów elektrycznych','HVAC i klimatyzacja','Pompy ciepła','Uzdatnianie i filtracja wody','Maszyny pakujące','Maszyny CNC','Obróbka metalu','Spawalnictwo','Narzędzia profesjonalne','Sprężarki i pneumatyka','Pompy przemysłowe','Generatory i zasilanie awaryjne','Wózki widłowe i logistyka magazynowa','Regały i magazynowanie','Transport wewnętrzny i przenośniki','Maszyny budowlane','Sprzęt komunalny','Rolnictwo i agro','Sprzęt laboratoryjny','Aparatura pomiarowa','Wyposażenie medyczne nieinwazyjne','Wyposażenie stomatologiczne','Fitness i wellness','SPA i hospitality','Wyposażenie hoteli','Gastronomia profesjonalna','Chłodnictwo komercyjne','Automaty vendingowe','Obsługa gotówki i płatności','Audio Video i konferencje','Digital signage i reklama','Drzwi, bramy i automatyka wejść','Outdoor i architektura zewnętrzna'
] as const;

export const storeDepartments: Partial<Record<(typeof scalableCatalogCategories)[number], readonly string[]>> = {
  'Smartfony i urządzenia mobilne': [
    'Smartfony flagowe','Smartfony biznesowe','Smartfony rugged i przemysłowe','Smartfony składane','Telefony klasyczne i senioralne','Tablety','Tablety rugged','Czytniki e-book','Smartwatche','Opaski sportowe','Modemy 4G/5G','Routery mobilne','Telefony satelitarne','Terminale mobilne i PDA','Skanery kodów mobilne','Akcesoria ochronne','Etui i obudowy','Szkła i folie ochronne','Ładowarki sieciowe','Ładowarki samochodowe','Ładowarki bezprzewodowe','Powerbanki','Kable i adaptery','Stacje dokujące','Uchwyty samochodowe','Uchwyty przemysłowe','Słuchawki przewodowe','Słuchawki TWS','Zestawy głośnomówiące','Części serwisowe i baterie'
  ],
  'Laptopy i komputery mobilne': [
    'Ultrabooki','Laptopy biznesowe','Laptopy premium','Laptopy gamingowe','Mobilne stacje robocze','Laptopy rugged','Chromebooki','Laptopy 2w1','Konwertowalne komputery dotykowe','Notebooki edukacyjne','Laptopy przemysłowe','Stacje dokujące','Replikatory portów','Zasilacze i ładowarki USB-C','Baterie','Pamięci RAM SO-DIMM','Dyski SSD M.2','Dyski SSD 2.5','Torby','Plecaki','Etui','Podstawki chłodzące','Filtry prywatności','Linki zabezpieczające','Huby USB-C/Thunderbolt','Adaptery wideo','Klawiatury mobilne','Myszy mobilne','Modemy i karty WWAN','Części serwisowe'
  ],
  'Komputery stacjonarne i mini PC': [
    'Komputery biznesowe','Stacje robocze','Komputery gamingowe','Mini PC','Thin client','Komputery all-in-one','Komputery przemysłowe','Komputery fanless','Komputery embedded','Barebone','Płyty główne','Procesory','Pamięci RAM','Karty graficzne','Dyski SSD','Dyski HDD','Obudowy','Zasilacze ATX','Chłodzenie CPU','Chłodzenie cieczą','Karty sieciowe','Karty rozszerzeń','Kontrolery RAID','Napędy optyczne','Czytniki kart','Klawiatury','Myszy','Zestawy klawiatura+mysz','UPS dla stanowisk','Części serwisowe'
  ],
  'Monitory i wyświetlacze': [
    'Monitory biurowe','Monitory biznesowe','Monitory 4K','Monitory 5K/6K','Monitory ultrawide','Monitory gamingowe','Monitory graficzne','Monitory medyczne','Monitory przemysłowe','Monitory dotykowe','Monitory przenośne','Monitory wielkoformatowe','Wyświetlacze LED','Wyświetlacze OLED','Wyświetlacze e-paper','Panele operatorskie HMI','Ekrany informacyjne','Ekrany do digital signage','Ściany wideo','Kontrolery ścian wideo','Ramiona monitorowe','Uchwyty ścienne','Stojaki podłogowe','Kable DisplayPort','Kable HDMI','Adaptery wideo','Extender HDMI/DP','Kalibratory obrazu','Filtry prywatności','Części i moduły serwisowe'
  ],
  'Serwery i infrastruktura IT': [
    'Serwery rack','Serwery tower','Serwery blade','Serwery GPU/AI','Serwery edge','Serwery storage','Macierze SAN','Macierze NAS','Obudowy JBOD','Kontrolery RAID/HBA','Procesory serwerowe','Pamięci ECC','Dyski SAS','Dyski SATA enterprise','Dyski NVMe enterprise','Karty sieciowe 10/25/40/100GbE','Karty Fibre Channel','Switching SAN','Biblioteki taśmowe','Napędy LTO','Szafy rack 19 cali','PDU rack','UPS online','KVM','Konsole rack','Chłodzenie szaf','Systemy monitoringu środowiska','Okablowanie strukturalne','Organizacja kabli','Części hot-swap i serwisowe'
  ],
  'Sieci i telekomunikacja': [
    'Routery biznesowe','Routery operatorskie','Routery SD-WAN','Routery 4G/5G','Switche niezarządzalne','Switche zarządzalne','Switche PoE','Switche L2/L3','Switche data center','Access pointy Wi-Fi','Kontrolery WLAN','Systemy mesh','Firewalle UTM','Bramy VPN','Modemy','Media konwertery','Transceivery SFP/SFP+/QSFP','Patch panele','Szafy teleinformatyczne','Okablowanie miedziane','Okablowanie światłowodowe','Patchcordy','Keystony i gniazda','Testery sieci','Analizatory Wi-Fi','Anteny','Wzmacniacze sygnału','Centrale telefoniczne IP','Telefony VoIP','Bramki VoIP'
  ]
};

const fallbackDepartments = ['oferta podstawowa','oferta profesjonalna','wyposażenie uzupełniające','akcesoria i części','serwis i utrzymanie'];
const tiers: CatalogTier[] = ['Value','Standard','Professional','Premium','Luxury / Industrial'];
const roles = ['zakup detaliczny','zakup hurtowy','wyposażenie przedsiębiorstwa','projekt inwestycyjny','modernizacja','serwis i utrzymanie','zapas operacyjny','zastosowanie terenowe','zastosowanie przemysłowe','zastosowanie premium'];
const formFactors = ['compact','standard','extended','heavy-duty','executive','modular','mobile','fixed-installation'];

export const CATALOG_ITEMS_PER_STORE = 4000;
export const CATALOG_TOTAL_ITEMS = scalableCatalogCategories.length * CATALOG_ITEMS_PER_STORE;
export const CATALOG_PAGE_SIZE = 100;
export const CATALOG_TOTAL_PAGES = Math.ceil(CATALOG_TOTAL_ITEMS / CATALOG_PAGE_SIZE);

const toSourceSearch = (query: string) => `/offers/new?product=${encodeURIComponent(query)}`;

export type ScalableCatalogItem = {
  id: string;
  globalIndex: number;
  storeNo: number;
  category: string;
  department: string;
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
  const departments = storeDepartments[category] ?? fallbackDepartments;
  const department = departments[withinStore % departments.length];
  const tier = tiers[Math.floor(withinStore / departments.length) % tiers.length];
  const role = roles[Math.floor(withinStore / (departments.length * tiers.length)) % roles.length];
  const formFactor = formFactors[Math.floor(withinStore / (departments.length * tiers.length * roles.length)) % formFactors.length];
  const sequence = String(withinStore + 1).padStart(4, '0');
  const titlePl = `${department} — ${tier} — ${role} — pozycja ${sequence}`;
  const titleEn = `${department} — ${tier} — ${formFactor} — item ${sequence}`;
  const query = `${category} ${department} ${tier} ${role} ${formFactor}`;
  return {
    id: `PPL-${String(storeNo).padStart(2,'0')}-${sequence}`,
    globalIndex: normalized,
    storeNo,
    category,
    department,
    tier,
    quantityPerCard: 1,
    titleEn,
    titlePl,
    role,
    formFactor,
    sourceUrl: toSourceSearch(query),
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
