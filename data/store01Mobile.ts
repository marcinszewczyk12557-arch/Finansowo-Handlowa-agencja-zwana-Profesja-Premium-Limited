export type Store01Product = {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  purpose: string;
  variants: string[];
  compliance: string;
};

const families: Array<{
  category: string;
  subcategory: string;
  products: Array<[string, string, string[]]>;
}> = [
  {
    category: 'Smartfony premium 5G',
    subcategory: 'Urządzenia mobilne',
    products: [
      ['Smartfon premium 5G — klasa flagship', 'Mobilna praca, komunikacja, fotografia i aplikacje biznesowe.', ['256 GB', '512 GB', '1 TB']],
      ['Smartfon biznesowy 5G — wysoka autonomia', 'Praca terenowa i firmowa z naciskiem na czas pracy i bezpieczeństwo.', ['12/256 GB', '16/512 GB', 'dual SIM/eSIM']],
      ['Smartfon gaming/performance 5G', 'Wysoka wydajność obliczeniowa, multimedia i zastosowania wymagające chłodzenia.', ['12/256 GB', '16/512 GB', '24 GB / 1 TB']],
    ],
  },
  {
    category: 'Smartfony wzmocnione i terenowe',
    subcategory: 'Urządzenia odporne',
    products: [
      ['Smartfon rugged 5G', 'Budownictwo, logistyka, serwis terenowy i przemysł.', ['standard', 'termowizja', 'duża bateria']],
      ['Smartfon ATEX-ready — konfiguracja do weryfikacji', 'Środowiska wymagające specjalnej kwalifikacji urządzenia.', ['strefa i certyfikacja dobierane do rynku', 'dual SIM', 'PTT']],
      ['Terminal mobilny rugged', 'Skanowanie, magazyn, dostawy i obsługa procesów terenowych.', ['1D/2D scanner', 'NFC', 'UHF RFID-ready']],
    ],
  },
  {
    category: 'Tablety i terminale mobilne',
    subcategory: 'Tablety biznesowe',
    products: [
      ['Tablet premium 5G', 'Prezentacje, praca mobilna, sprzedaż i zarządzanie.', ['11 cali', '13 cali', 'klawiatura + rysik']],
      ['Tablet rugged 5G', 'Praca terenowa, produkcja i logistyka.', ['8 cali', '10 cali', 'stacja dokująca']],
      ['Terminal POS mobilny', 'Sprzedaż, obsługa klienta i mobilne punkty transakcyjne.', ['drukarka', 'skaner', 'NFC/payment-ready']],
    ],
  },
  {
    category: 'Łączność komórkowa i routery',
    subcategory: '5G / LTE / WAN',
    products: [
      ['Router biznesowy 5G', 'Internet zapasowy i podstawowy dla biur, punktów sprzedaży i obiektów.', ['indoor', 'outdoor CPE', 'dual-WAN']],
      ['Mobilny hotspot 5G', 'Łączność dla zespołów mobilnych i podróży biznesowych.', ['standard', 'enterprise management', 'eSIM-ready']],
      ['Gateway przemysłowy 5G/LTE', 'M2M, IoT, automatyka i zdalne lokalizacje.', ['DIN rail', 'dual SIM', 'VPN/edge-ready']],
    ],
  },
  {
    category: 'Radiokomunikacja profesjonalna',
    subcategory: 'PTT / radio / dispatch',
    products: [
      ['Radiotelefon cyfrowy profesjonalny', 'Ochrona, logistyka, eventy i służby zakładowe.', ['VHF', 'UHF', 'GPS/Bluetooth']],
      ['Terminal PoC / PTT over cellular', 'Komunikacja grupowa przez sieci LTE/5G i Wi-Fi.', ['handheld', 'vehicle', 'dispatch-integrated']],
      ['Stacja bazowa / repeater — konfiguracja projektowa', 'Rozbudowa zasięgu systemów radiowych.', ['indoor', 'outdoor', 'redundant power']],
    ],
  },
  {
    category: 'Telefony IP i komunikacja biurowa',
    subcategory: 'VoIP / UC',
    products: [
      ['Telefon IP klasy executive', 'Stanowiska kierownicze i recepcje.', ['color display', 'video-ready', 'expansion module']],
      ['Telefon IP biznesowy', 'Standardowe stanowiska biurowe i call center.', ['PoE', 'Wi-Fi/Bluetooth', 'multi-line']],
      ['Wideotelefon / terminal UC', 'Recepcja, sale spotkań i komunikacja wideo.', ['Android-based', 'SIP', 'UC integration-ready']],
    ],
  },
  {
    category: 'Zestawy słuchawkowe i audio komunikacyjne',
    subcategory: 'Headsets / speakerphones',
    products: [
      ['Zestaw słuchawkowy ANC klasy biznesowej', 'Rozmowy, praca hybrydowa i call center.', ['USB-C', 'Bluetooth', 'Teams/UC-ready']],
      ['Monofoniczny headset call-center', 'Całodniowa obsługa telefoniczna.', ['USB', 'QD', 'DECT']],
      ['Mobilny speakerphone konferencyjny', 'Małe spotkania i praca mobilna.', ['USB/Bluetooth', '360° microphone', 'multi-device']],
    ],
  },
  {
    category: 'Akcesoria zasilające i ładowanie',
    subcategory: 'Power / charging',
    products: [
      ['Ładowarka wieloportowa USB-C PD', 'Floty urządzeń mobilnych, biura i stanowiska serwisowe.', ['100 W', '140 W', 'desktop multiport']],
      ['Stacja ładowania urządzeń mobilnych', 'Szkoły, magazyny, hotele i floty tabletów.', ['10 urządzeń', '20 urządzeń', 'zamykana szafa']],
      ['Powerbank klasy biznesowej', 'Mobilna rezerwa energii.', ['20 000 mAh', '27 000 mAh', 'USB-C PD high-output']],
    ],
  },
  {
    category: 'Ochrona, montaż i dokowanie',
    subcategory: 'Cases / docks / mounts',
    products: [
      ['Stacja dokująca do telefonu/tabletu', 'Stanowisko desktopowe dla urządzeń mobilnych.', ['USB-C', 'multi-display', 'charging dock']],
      ['Uchwyt samochodowy klasy flotowej', 'Logistyka, transport i serwis mobilny.', ['passive', 'powered', 'rugged locking']],
      ['Etui ochronne klasy enterprise', 'Ochrona urządzeń flotowych.', ['slim', 'rugged', 'antimicrobial-ready']],
    ],
  },
  {
    category: 'Zarządzanie flotą urządzeń',
    subcategory: 'MDM / deployment / lifecycle',
    products: [
      ['Pakiet wdrożeniowy urządzeń mobilnych', 'Konfiguracja, znakowanie i przygotowanie floty do wydania użytkownikom.', ['10–49 urządzeń', '50–199', '200+']],
      ['Usługa konfiguracji MDM — integracja', 'Centralne zarządzanie politykami, aplikacjami i bezpieczeństwem.', ['Android Enterprise', 'Apple ecosystem', 'mixed fleet']],
      ['Pakiet lifecycle / wymiana i serwis', 'Obsługa cyklu życia floty, wymian i urządzeń zapasowych.', ['standard SLA', 'priority SLA', 'custom SLA']],
    ],
  },
];

export const store01Products: Store01Product[] = families.flatMap((family, familyIndex) =>
  family.products.map(([title, purpose, variants], productIndex) => ({
    id: `01-${String(familyIndex * 3 + productIndex + 1).padStart(3, '0')}`,
    category: family.category,
    subcategory: family.subcategory,
    title,
    purpose,
    variants,
    compliance: 'Producent, model, parametry, dostępność, gwarancja i wymagane dokumenty zgodności są potwierdzane przed ofertą wiążącą.',
  })),
);

export const store01Categories = Array.from(new Set(store01Products.map((product) => product.category)));
export const STORE01_MIN_ORDER_PLN = 110_000;
