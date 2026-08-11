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
const minimumBusinessOrder = 'Minimalna łączna wartość zamówienia B2B: 95 000 zł. Ilość minimalna zależy od kategorii i konfiguracji.';
const phoneMinimum = 'Minimalne zamówienie: 14 sztuk oraz minimalna łączna wartość zamówienia 95 000 zł.';
// base = benchmark rynkowy porównywalnego produktu/konfiguracji, nie koszt dostawcy.
// Docelowo katalog pokazuje ok. 80% rynku; finalna oferta mieści się zwykle w polityce 72–84% po weryfikacji kosztu landed, MOQ i warunków transakcji.
const sale = (base: number) => Math.round(base * 0.80);
const money = (value: number) => `${value.toLocaleString('pl-PL')} zł`;
const price = (base: number) => `Cena katalogowa: ${money(sale(base))}`;

const products: CatalogProduct[] = [
  {
    id: 1,
    name: 'Nubia REDMAGIC — smartfon gamingowy premium',
    description: 'Flagowy smartfon gamingowy klasy premium w konfiguracjach od wysokiej do najwyższej, przeznaczony do wymagających zastosowań mobilnych.',
    category: 'Smartfony Premium',
    priceLabel: `Cena katalogowa: ${money(sale(4250))}–${money(sale(8225))} za sztukę`,
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: commonMedia,
    minimumOrder: phoneMinimum,
    tiers: [
      { label: 'Średni', ram: '12 GB RAM', storage: '256 GB', display: 'AMOLED 120 Hz+', processor: 'Procesor klasy flagowej', battery: 'min. 5 000 mAh', charging: '65 W+', camera: '50 MP+', connectivity: '5G, Wi‑Fi 6E, NFC' },
      { label: 'Wysoki', ram: '16 GB RAM', storage: '512 GB', display: 'AMOLED 144–165 Hz', processor: 'Procesor top-flagowy', battery: '5 500–6 500 mAh', charging: '80–120 W', camera: '50 MP + moduły dodatkowe', connectivity: '5G, Wi‑Fi 7, NFC' },
      { label: 'Najwyższy', ram: '24 GB RAM', storage: '1 TB', display: 'AMOLED premium 165 Hz HDR', processor: 'Najwyższa dostępna konfiguracja gamingowa', battery: 'do ok. 7 000 mAh', charging: 'do ok. 120 W', camera: 'zaawansowany zestaw aparatów', connectivity: '5G, Wi‑Fi 7, NFC, USB‑C high speed' }
    ]
  },
  {
    id: 2,
    name: 'Lenovo Legion — laptop klasy premium',
    description: 'Wydajny laptop do biznesu, AI, grafiki 3D, CAD/CAM, programowania i zastosowań gamingowych.',
    category: 'Laptopy Premium',
    priceLabel: price(7140),
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: commonMedia,
    minimumOrder: minimumBusinessOrder,
    rating: '4,8 / 5',
    tiers: [
      { label: 'Wysoki', specs: ['Intel Core Ultra 7 / AMD Ryzen 7', '32 GB RAM DDR5', 'SSD 1 TB NVMe', 'RTX klasy 50xx', 'Ekran 16 cali 165 Hz+'] },
      { label: 'Bardzo wysoki', specs: ['Intel Core Ultra 9 / AMD Ryzen 9', '64 GB RAM DDR5', 'SSD 2 TB NVMe', 'RTX klasy 5080', 'Ekran 240 Hz HDR'] },
      { label: 'Najwyższy', specs: ['Najwyższa dostępna jednostka CPU', 'Do 96 GB RAM', 'SSD do 4 TB', 'Najwyższa dostępna mobilna GPU', 'Windows 11 Pro'] }
    ]
  },

  ...[
    ['Nubia REDMAGIC Performance', 'Smartfony Premium', 5500, 'Smartfon gamingowy z naciskiem na wydajność, chłodzenie i ekran o wysokim odświeżaniu.'],
    ['Nubia REDMAGIC Pro+', 'Smartfony Premium', 6800, 'Rozszerzona konfiguracja premium z większą pamięcią, szybkim ładowaniem i zaawansowanym chłodzeniem.'],
    ['Nubia REDMAGIC Ultimate', 'Smartfony Premium', 9200, 'Najwyższa konfiguracja katalogowa dla klientów oczekujących maksymalnych parametrów i wyposażenia.'],
    ['Lenovo Legion Business AI', 'Laptopy Premium', 8200, 'Laptop premium do pracy z AI, projektowania i zastosowań biznesowych.'],
    ['Lenovo Legion Creator', 'Laptopy Premium', 9800, 'Konfiguracja dla grafiki, wideo, CAD i pracy kreatywnej.'],
    ['Lenovo Legion Ultimate', 'Laptopy Premium', 12500, 'Najwyższa konfiguracja mobilnej stacji roboczej i gaming premium.'],

    ['Fotowoltaika 20 kWp + magazyn 20 kWh', 'Energia i Fotowoltaika', 144000, 'Kompletny zestaw PV dla firmy z magazynem energii, falownikiem hybrydowym i monitoringiem.'],
    ['Fotowoltaika 50 kWp + magazyn 50 kWh', 'Energia i Fotowoltaika', 78000, 'Rozbudowana instalacja dla obiektów komercyjnych i średnich przedsiębiorstw.'],
    ['Fotowoltaika 100 kWp + magazyn 100 kWh', 'Energia i Fotowoltaika', 120000, 'System energetyczny klasy biznesowej z możliwością rozbudowy EMS.'],
    ['Fotowoltaika przemysłowa + magazyn skalowalny', 'Energia i Fotowoltaika', 185000, 'Indywidualnie projektowane rozwiązanie przemysłowe z magazynem energii i zarządzaniem obciążeniem.'],

    ['Klimatyzacja Multi-Split Premium', 'HVAC', 18000, 'Wielostrefowy system klimatyzacji do biur, lokali i obiektów usługowych.'],
    ['System VRF/VRV Business', 'HVAC', 26000, 'Zaawansowany system wielostrefowy do większych obiektów komercyjnych.'],
    ['Centrala wentylacyjna z odzyskiem ciepła', 'HVAC', 42000, 'Profesjonalna centrala wentylacyjna z rekuperacją i automatyką.'],
    ['HVAC Industrial Smart BMS', 'HVAC', 75000, 'Kompleksowe rozwiązanie HVAC z integracją BMS i monitoringiem parametrów.'],

    ['Gabinet Executive Premium', 'Meble Premium', 25000, 'Luksusowy zestaw mebli gabinetowych dla kadry zarządzającej.'],
    ['Sala konferencyjna Prestige', 'Meble Premium', 42000, 'Kompletne wyposażenie reprezentacyjnej sali konferencyjnej.'],
    ['Recepcja Bespoke Collection', 'Meble Premium', 68000, 'Projekt i wyposażenie recepcji klasy premium z personalizacją.'],
    ['Komplet wnętrz Executive Bespoke', 'Meble Premium', 95000, 'Indywidualnie projektowane wyposażenie wnętrza firmowego klasy premium.'],

    ['Drzwi wejściowe Premium Security', 'Drzwi i Bramy Premium', 12000, 'Luksusowe drzwi zewnętrzne z opcjonalną kontrolą dostępu.'],
    ['Brama garażowa Smart Premium', 'Drzwi i Bramy Premium', 18500, 'Automatyczna brama garażowa premium ze sterowaniem zdalnym.'],
    ['Brama przemysłowa Business Pro', 'Drzwi i Bramy Premium', 28000, 'System bramowy do magazynów, hal i obiektów gospodarczych.'],
    ['System wjazdowy Prestige Access', 'Drzwi i Bramy Premium', 45000, 'Kompletny system bramy, automatyki i kontroli dostępu.'],

    ['Minikoparka Compact Pro', 'Maszyny i Sprzęt Ciężki', 35000, 'Kompaktowa maszyna robocza do prac budowlanych i inżynierskich.'],
    ['Ładowarka kołowa Business', 'Maszyny i Sprzęt Ciężki', 65000, 'Uniwersalna ładowarka do zastosowań budowlanych, komunalnych i magazynowych.'],
    ['Koparka pełnowymiarowa Industrial', 'Maszyny i Sprzęt Ciężki', 120000, 'Ciężka maszyna inżynierska do intensywnych prac ziemnych.'],
    ['Pakiet maszyn flotowych Enterprise', 'Maszyny i Sprzęt Ciężki', 250000, 'Indywidualnie konfigurowany zestaw maszyn i osprzętu dla przedsiębiorstwa.'],

    ['Zestaw elektronarzędzi Professional', 'Wyposażenie Przedsiębiorstw', 4500, 'Kompletny zestaw profesjonalnych elektronarzędzi akumulatorowych.'],
    ['Stanowisko warsztatowe Pro', 'Wyposażenie Przedsiębiorstw', 8500, 'Meble warsztatowe, elektronarzędzia, pomiary i wyposażenie BHP.'],
    ['Pakiet wyposażenia magazynu', 'Wyposażenie Przedsiębiorstw', 14500, 'Wyposażenie stanowisk magazynowych, składowania i obsługi technicznej.'],
    ['Kompletne stanowisko pracy Enterprise', 'Wyposażenie Przedsiębiorstw', 28000, 'Indywidualny pakiet wyposażenia stanowiska pracy dla dowolnej branży.'],

    ['Fotel masażujący 4D Zero Gravity', 'Wellness Premium', 13000, 'Fotel premium z masażem wielostrefowym, ogrzewaniem i funkcją zero gravity.'],
    ['Kabina infrared Home Spa', 'Wellness Premium', 22000, 'Kabina infrared do stref wellness, hoteli i gabinetów premium.'],
    ['Strefa relaksu Executive', 'Wellness Premium', 32000, 'Kompletny zestaw wyposażenia strefy relaksu dla firmy lub hotelu.'],
    ['Wellness Suite Signature', 'Wellness Premium', 55000, 'Rozbudowany pakiet urządzeń wellness klasy premium.'],

    ['Inteligentne lustro LED Smart Luxury', 'Smart Home Premium', 6000, 'Lustro premium z LED, funkcjami smart i systemem przeciwparowym.'],
    ['Panel Smart Building Pro', 'Smart Home Premium', 12000, 'Centralny panel sterowania automatyką budynku.'],
    ['System Smart Office Premium', 'Smart Home Premium', 22000, 'Automatyka oświetlenia, klimatu, dostępu i urządzeń biurowych.'],
    ['Smart Building Enterprise', 'Smart Home Premium', 48000, 'Kompletny system automatyki budynkowej z integracją wielu instalacji.'],

    ['Kominek elektryczny 3D Panorama', 'Luxury Interior', 9000, 'Dekoracyjny kominek elektryczny premium z panoramicznym efektem płomienia.'],
    ['Ściana medialna Luxury', 'Luxury Interior', 18000, 'Reprezentacyjna zabudowa multimedialna klasy premium.'],
    ['Zabudowa wnętrza Signature', 'Luxury Interior', 35000, 'Indywidualne elementy wykończenia i zabudowy reprezentacyjnego wnętrza.'],
    ['Projekt Luxury Interior Complete', 'Luxury Interior', 70000, 'Kompleksowy pakiet wyposażenia wnętrza klasy premium.'],

    ['Zestaw wypoczynkowy Outdoor Resort', 'Outdoor Luxury', 14000, 'Modułowy zestaw premium do ogrodów, hoteli i tarasów.'],
    ['Pergola bioklimatyczna Smart Terrace', 'Outdoor Luxury', 28000, 'Pergola z automatyką, oświetleniem i opcjonalnymi przeszkleniami.'],
    ['Strefa tarasowa Executive', 'Outdoor Luxury', 42000, 'Kompletne wyposażenie tarasu premium.'],
    ['Outdoor Resort Complete', 'Outdoor Luxury', 75000, 'Pełna aranżacja zewnętrznej strefy premium dla hotelu lub firmy.'],

    ['Żyrandol Architectural Gold', 'Premium Lighting', 7000, 'Oświetlenie dekoracyjne klasy premium do wnętrz reprezentacyjnych.'],
    ['System oświetlenia Executive', 'Premium Lighting', 15000, 'Pakiet oświetlenia dla gabinetów, recepcji i sal konferencyjnych.'],
    ['Lighting Smart Control', 'Premium Lighting', 25000, 'System oświetlenia premium ze sterowaniem scenami i automatyką.'],
    ['Architectural Lighting Bespoke', 'Premium Lighting', 45000, 'Indywidualny projekt i komplet oświetlenia reprezentacyjnego.'],

    ['Stół konferencyjny Executive', 'Executive Office', 12000, 'Reprezentacyjny stół konferencyjny z integracją zasilania i multimediów.'],
    ['Fotel Executive Ergonomic Pro', 'Executive Office', 6500, 'Ergonomiczny fotel klasy executive do gabinetów zarządczych.'],
    ['Gabinet zarządu Signature', 'Executive Office', 26000, 'Kompletny pakiet mebli i wyposażenia gabinetu zarządu.'],
    ['Executive Office Complete', 'Executive Office', 52000, 'Pełne wyposażenie biura zarządczego klasy premium.'],

    ['Ekspres Coffee Bar Prestige', 'Hospitality Premium', 9000, 'Profesjonalny automat kawowy do hoteli, biur i stref premium.'],
    ['Lodówka do win Dual Zone', 'Hospitality Premium', 6500, 'Witryna chłodnicza do win z dwiema strefami temperatury.'],
    ['Wyposażenie minibar Premium', 'Hospitality Premium', 15000, 'Kompletny pakiet minibarów i wyposażenia hotelowego.'],
    ['Hospitality Suite Complete', 'Hospitality Premium', 35000, 'Pakiet wyposażenia stref hotelowych i gastronomicznych klasy premium.'],

    ['Projektor Cinema 4K Pro', 'Audio Video Premium', 11000, 'Projektor premium do sal konferencyjnych i prywatnych kin.'],
    ['System audio Executive', 'Audio Video Premium', 18000, 'Profesjonalny system nagłośnienia do reprezentacyjnych pomieszczeń.'],
    ['Cinema Lounge 4K', 'Audio Video Premium', 32000, 'Kompletny zestaw kina domowego i biznesowego.'],
    ['AV Room Enterprise', 'Audio Video Premium', 65000, 'Pełne wyposażenie sali audiowizualnej z systemem sterowania.'],

    ['Stacja ładowania EV Business', 'E-Mobility', 14000, 'Stacja ładowania EV do firm, hoteli i parkingów prywatnych.'],
    ['Skuter elektryczny Urban Elite', 'E-Mobility', 12000, 'Miejski pojazd elektryczny do mobilności firmowej.'],
    ['Podwójna stacja EV Smart', 'E-Mobility', 26000, 'Rozwiązanie ładowania dla kilku pojazdów z monitoringiem.'],
    ['Hub ładowania EV Enterprise', 'E-Mobility', 65000, 'Rozbudowany system ładowania flotowego z zarządzaniem energią.'],

    ['Stół bilardowy Designer', 'Leisure Premium', 16000, 'Stół bilardowy klasy premium do hoteli, klubów i rezydencji.'],
    ['Stół gamingowy Executive', 'Leisure Premium', 9000, 'Stanowisko gamingowe klasy premium do stref firmowych i klubowych.'],
    ['Strefa rozrywki Premium', 'Leisure Premium', 28000, 'Kompletny zestaw wyposażenia strefy rekreacyjnej.'],
    ['Leisure Lounge Signature', 'Leisure Premium', 52000, 'Pełna aranżacja luksusowej strefy rozrywki i wypoczynku.']
  ].map(([name, category, base, description], index) => ({
    id: index + 3,
    name: String(name),
    description: String(description),
    category: String(category),
    priceLabel: price(Number(base)),
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: commonMedia,
    minimumOrder: category === 'Smartfony Premium' ? phoneMinimum : minimumBusinessOrder
  }))
];

export default products;
