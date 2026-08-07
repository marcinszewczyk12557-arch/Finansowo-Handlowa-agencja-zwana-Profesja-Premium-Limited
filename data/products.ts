export type ProductTier = {
  label: string;
  ram?: string;
  storage?: string;
  display?: string;
  processor?: string;
  battery?: string;
  charging?: string;
  camera?: string;
  connectivity?: string;
  specs?: string[];
};

export type CatalogProduct = {
  id: number;
  name: string;
  description: string;
  category: string;
  priceLabel: string;
  certificates: string[];
  warranty: string;
  mediaStatus: string;
  minimumOrder?: string;
  rating?: string;
  tiers?: ProductTier[];
};

const commonDocs = ['Dokumentacja, deklaracje zgodności i certyfikaty są potwierdzane dla konkretnego modelu przed przedstawieniem oferty'];
const commonWarranty = 'Warunki gwarancji są potwierdzane indywidualnie dla zatwierdzonego wariantu i rynku docelowego';
const commonMedia = 'Dedykowana prezentacja PL/EN oraz materiały wizualne — przygotowywane dla zatwierdzonego wariantu';
const commonPrice = 'Cena ofertowa — zapytaj o indywidualną wycenę';
const minimumBusinessOrder = 'Minimalna łączna wartość zamówienia B2B: 95 000 zł. Ilość minimalna zależy od kategorii i konfiguracji.';

const products: CatalogProduct[] = [
  {
    id: 1,
    name: 'Nubia REDMAGIC — smartfony gamingowe premium',
    description: 'Oferta Profesja Premium Limited obejmuje wybrane konfiguracje smartfonów gamingowych klasy premium. Parametry definiują standard ofertowy naszej agencji. Ostateczna specyfikacja konkretnej partii jest potwierdzana przed zawarciem transakcji.',
    category: 'Smartfony Premium',
    priceLabel: 'Cena sprzedaży: 4 250–8 225 zł za sztukę, zależnie od wariantu',
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: 'Galeria produktowa i prezentacja PL/EN przygotowywane dla wybranego wariantu oferty.',
    minimumOrder: 'Minimalne zamówienie: 14 sztuk oraz minimalna łączna wartość zamówienia 95 000 zł.',
    tiers: [
      { label: 'Średni', ram: '12 GB RAM', storage: '256 GB', display: 'AMOLED 120 Hz lub wyższy', processor: 'Procesor klasy flagowej', battery: 'min. 5 000 mAh', charging: 'min. 65 W', camera: 'aparat główny min. 50 MP', connectivity: '5G, Wi‑Fi 6/6E, Bluetooth, NFC' },
      { label: 'Wysoki', ram: '16 GB RAM', storage: '512 GB', display: 'AMOLED 144–165 Hz', processor: 'Procesor top-flagowy z rozbudowanym chłodzeniem', battery: '5 500–6 500 mAh', charging: '80–120 W', camera: '50 MP + dodatkowe moduły', connectivity: '5G, Wi‑Fi 7 lub równoważne, Bluetooth, NFC' },
      { label: 'Najwyższy', ram: '24 GB RAM', storage: '1 TB', display: 'AMOLED premium do 165 Hz, HDR', processor: 'Najwyższa dostępna konfiguracja układu mobilnego klasy gamingowej', battery: 'do ok. 7 000 mAh', charging: 'do ok. 120 W', camera: 'zaawansowany zestaw aparatów', connectivity: '5G, Wi‑Fi 7, Bluetooth nowej generacji, NFC, USB‑C wysokiej przepustowości' }
    ]
  },
  {
    id: 2,
    name: 'Lenovo Legion — laptop klasy premium',
    description: 'Laptop o wysokiej wydajności do zastosowań biznesowych, projektowych, AI, grafiki 3D, programowania i gier. Konfiguracja dobierana do zapotrzebowania przedsiębiorstwa.',
    category: 'Laptopy Premium',
    priceLabel: 'Cena ofertowa: 7 140 zł za sztukę dla prezentowanego wariantu',
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: 'Zdjęcie produktu dostarczone do katalogu; materiały techniczne i prezentacja PL/EN uzupełniane dla finalnej konfiguracji.',
    minimumOrder: minimumBusinessOrder,
    rating: '4,8 / 5',
    tiers: [
      { label: 'Wysoki', specs: ['Procesor Intel Core Ultra 7 / AMD Ryzen 7 klasy H/HX', '32 GB RAM DDR5', 'SSD 1 TB NVMe', 'Grafika NVIDIA GeForce RTX klasy 50xx lub równoważna', 'Ekran 16 cali WQXGA, 165 Hz lub wyższy', 'Wi‑Fi 6E/7, Bluetooth, USB‑C'] },
      { label: 'Bardzo wysoki', specs: ['Intel Core Ultra 9 / AMD Ryzen 9', '64 GB RAM DDR5', 'SSD 2 TB NVMe', 'Grafika NVIDIA GeForce RTX klasy 5080 lub równoważna', 'Ekran 16 cali, 240 Hz, HDR', 'Thunderbolt 4 / USB4, Wi‑Fi 7'] },
      { label: 'Najwyższy', specs: ['Najwyższa dostępna jednostka CPU dla danej serii', 'Do 96 GB RAM DDR5, zależnie od platformy', 'SSD do 4 TB NVMe', 'Najwyższa dostępna mobilna karta graficzna danej generacji', 'Ekran klasy premium 240 Hz HDR', 'Windows 11 Pro lub równoważny system zgodny z zamówieniem'] }
    ]
  },
  {
    id: 3,
    name: 'Zestawy fotowoltaiczne Premium + magazyny energii',
    description: 'Indywidualnie konfigurowane instalacje fotowoltaiczne dla firm, obiektów komercyjnych i przemysłowych, wraz z magazynami energii, falownikami, zabezpieczeniami i monitoringiem.',
    category: 'Energia i Fotowoltaika', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Średni', specs: ['Instalacje od ok. 20 kWp', 'Moduły klasy Tier 1 lub równoważnej jakości', 'Falownik hybrydowy', 'Magazyn energii od ok. 20 kWh', 'Monitoring online i zabezpieczenia AC/DC'] },
      { label: 'Wysoki', specs: ['Instalacje ok. 50–150 kWp', 'Wysokosprawne moduły mono N-type', 'Magazyny energii 50–200 kWh', 'EMS i zdalny monitoring', 'Możliwość integracji z ładowaniem EV'] },
      { label: 'Najwyższy', specs: ['Instalacje przemysłowe projektowane indywidualnie', 'Magazyny energii skalowalne do setek kWh lub MWh', 'Zaawansowany EMS', 'Rozwiązania peak-shaving / backup', 'Projekt dobierany do profilu zużycia przedsiębiorstwa'] }
    ]
  },
  {
    id: 4,
    name: 'Wentylacja, klimatyzacja i systemy HVAC',
    description: 'Urządzenia wentylacyjne i klimatyzacyjne każdego typu dla biur, lokali usługowych, magazynów, hal, hoteli i obiektów przemysłowych.',
    category: 'HVAC', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Średni', specs: ['Klimatyzacja split/multisplit', 'Rekuperacja', 'Sterowanie Wi‑Fi', 'Filtracja powietrza', 'Konfiguracja do małych i średnich obiektów'] },
      { label: 'Wysoki', specs: ['Systemy VRF/VRV', 'Centrale wentylacyjne', 'Odzysk ciepła', 'Sterowanie strefowe', 'Integracja z BMS'] },
      { label: 'Najwyższy', specs: ['Instalacje przemysłowe i wielostrefowe', 'Zaawansowana automatyka', 'Chillery / rooftop / centrale modułowe', 'Monitoring energii i parametrów powietrza', 'Projekt dobierany do obiektu'] }
    ]
  },
  {
    id: 5,
    name: 'Luksusowe meble i wyposażenie wnętrz',
    description: 'Meble premium do biur, hoteli, restauracji, apartamentów, gabinetów zarządczych oraz obiektów reprezentacyjnych, także w konfiguracjach na wymiar.',
    category: 'Meble Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Premium', specs: ['Meble biurowe i gabinetowe', 'Materiały klasy premium', 'Konfiguracje modułowe', 'Personalizacja kolorów i wymiarów'] },
      { label: 'Executive', specs: ['Naturalne drewno / kamień / metal', 'Integracja z zasilaniem i multimediami', 'Projekty recepcji, sal konferencyjnych i gabinetów'] },
      { label: 'Bespoke', specs: ['Produkcja na wymiar', 'Indywidualne wykończenia', 'Kompletne wyposażenie obiektu', 'Projektowanie pod identyfikację wizualną firmy'] }
    ]
  },
  {
    id: 6,
    name: 'Luksusowe drzwi, bramy garażowe i systemy wjazdowe',
    description: 'Drzwi wewnętrzne i zewnętrzne, bramy garażowe i przemysłowe, automatyka, systemy kontroli dostępu oraz rozwiązania dla obiektów reprezentacyjnych.',
    category: 'Drzwi i Bramy Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Premium', specs: ['Drzwi wejściowe i wewnętrzne premium', 'Bramy segmentowe / rolowane', 'Automatyka i sterowanie zdalne'] },
      { label: 'Wysoki', specs: ['Systemy antywłamaniowe', 'Kontrola dostępu', 'Bramy przemysłowe i przesuwne', 'Wykończenia indywidualne'] },
      { label: 'Najwyższy', specs: ['Kompletne systemy wjazdowe', 'Integracja z monitoringiem i smart building', 'Rozwiązania projektowe dla rezydencji i przedsiębiorstw'] }
    ]
  },
  {
    id: 7,
    name: 'Ciężki sprzęt i maszyny inżynierskie',
    description: 'Maszyny budowlane, inżynierskie, magazynowe i przemysłowe dla przedsiębiorstw: koparki, minikoparki, ładowarki, podnośniki, wózki widłowe, agregaty i urządzenia specjalistyczne.',
    category: 'Maszyny i Sprzęt Ciężki', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Średni', specs: ['Minikoparki i kompaktowe ładowarki', 'Wózki widłowe', 'Podnośniki', 'Agregaty i sprężarki'] },
      { label: 'Wysoki', specs: ['Koparki i ładowarki pełnowymiarowe', 'Maszyny drogowe', 'Urządzenia dźwigowe', 'Specjalistyczne osprzęty robocze'] },
      { label: 'Najwyższy', specs: ['Maszyny dobierane do procesu technologicznego', 'Wyposażenie przemysłowe i inżynierskie', 'Konfiguracje flotowe', 'Wsparcie w kompletacji stanowisk i linii roboczych'] }
    ]
  },
  {
    id: 8,
    name: 'Elektronarzędzia i wyposażenie stanowisk pracy',
    description: 'Kompletne wyposażenie dowolnego stanowiska pracy dla przedsiębiorców i innych podmiotów gospodarczych: elektronarzędzia, pomiary, BHP, meble warsztatowe, zasilanie i wyposażenie specjalistyczne.',
    category: 'Wyposażenie Przedsiębiorstw', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder,
    tiers: [
      { label: 'Standard profesjonalny', specs: ['Wiertarki, wkrętarki, młoty, szlifierki, piły', 'Systemy akumulatorowe', 'Odkurzacze przemysłowe', 'Narzędzia pomiarowe'] },
      { label: 'Wysoki', specs: ['Zestawy flotowe elektronarzędzi', 'Meble warsztatowe i magazynowe', 'Wyposażenie BHP', 'Urządzenia spawalnicze i obróbcze'] },
      { label: 'Najwyższy', specs: ['Kompletne wyposażenie stanowiska pracy', 'Dobór sprzętu do branży i procesu', 'Wyposażenie hal, warsztatów, biur i magazynów', 'Pakiety wielostanowiskowe dla firm'] }
    ]
  },
  { id: 9, name: 'Fotel masażujący 4D Zero Gravity Signature', description: 'Zaawansowany fotel relaksacyjny klasy premium z funkcją zero gravity, wielostrefowym masażem i ogrzewaniem.', category: 'Wellness Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 10, name: 'Inteligentne lustro LED Smart Luxury', description: 'Nowoczesne lustro premium z oświetleniem LED, funkcjami smart i rozwiązaniami przeciwparowymi.', category: 'Smart Home Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 11, name: 'Kominek elektryczny 3D Panorama', description: 'Dekoracyjny kominek elektryczny z panoramicznym efektem płomienia i sterowaniem dopasowanym do modelu.', category: 'Luxury Interior', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 12, name: 'Zestaw wypoczynkowy Outdoor Resort Collection', description: 'Ekskluzywny modułowy zestaw mebli zewnętrznych do tarasów, ogrodów, hoteli i stref resortowych.', category: 'Outdoor Luxury', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 13, name: 'Żyrandol Architectural Gold Edition', description: 'Dekoracyjne oświetlenie premium do reprezentacyjnych wnętrz, hoteli, restauracji i rezydencji.', category: 'Premium Lighting', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 14, name: 'Stół konferencyjny Executive Stone & Wood', description: 'Reprezentacyjny stół konferencyjny klasy executive z możliwością integracji z multimediami i zasilaniem.', category: 'Executive Office', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 15, name: 'Fotel biurowy Executive Ergonomic Pro', description: 'Ergonomiczny fotel gabinetowy klasy premium z wielopunktową regulacją.', category: 'Executive Office', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 16, name: 'Automatyczny ekspres Coffee Bar Prestige', description: 'Profesjonalny automat kawowy do biur, hoteli i stref premium.', category: 'Hospitality Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 17, name: 'Lodówka do win Dual Zone Signature', description: 'Witryna chłodnicza do win z dwiema strefami temperatury i oświetleniem ekspozycyjnym.', category: 'Hospitality Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 18, name: 'System kina domowego Cinema Lounge 4K', description: 'Kompletny zestaw do prywatnej sali kinowej obejmujący obraz, nagłośnienie i sterowanie.', category: 'Audio Video Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 19, name: 'Stacja ładowania EV Business Edition', description: 'Rozwiązanie ładowania pojazdów elektrycznych do obiektów firmowych, hotelowych i prywatnych.', category: 'E-Mobility', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder },
  { id: 20, name: 'Sauna infrared Home Spa Premium', description: 'Kabina infrared do prywatnych stref wellness i obiektów hotelowych.', category: 'Wellness Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia, minimumOrder: minimumBusinessOrder }
];

export default products;
