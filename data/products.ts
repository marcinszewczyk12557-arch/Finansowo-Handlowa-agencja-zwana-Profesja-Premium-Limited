export type ProductTier = {
  label: string;
  ram: string;
  storage: string;
  display: string;
  processor: string;
  battery: string;
  charging: string;
  camera: string;
  connectivity: string;
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
  tiers?: ProductTier[];
};

const commonDocs = ['Dokumentacja, deklaracje zgodności i certyfikaty są potwierdzane dla konkretnego modelu przed przedstawieniem oferty'];
const commonWarranty = 'Warunki gwarancji są potwierdzane indywidualnie dla zatwierdzonego wariantu i rynku docelowego';
const commonMedia = 'Dedykowana prezentacja PL/EN oraz materiały wizualne — przygotowywane dla zatwierdzonego wariantu';
const commonPrice = 'Cena ofertowa — zapytaj o indywidualną wycenę';

const products: CatalogProduct[] = [
  {
    id: 1,
    name: 'Nubia REDMAGIC — smartfony gamingowe premium',
    description: 'Oferta Profesja Premium Limited obejmuje wybrane konfiguracje smartfonów gamingowych klasy premium. Parametry poniżej definiują standardy ofertowe naszej agencji dla wariantów Średni, Wysoki i Najwyższy. Ostateczna specyfikacja konkretnej partii jest potwierdzana przed zawarciem transakcji.',
    category: 'Smartfony Premium',
    priceLabel: 'Cena sprzedaży: 4 250–8 225 zł za sztukę, zależnie od wariantu',
    certificates: commonDocs,
    warranty: commonWarranty,
    mediaStatus: 'Galeria produktowa i prezentacja PL/EN przygotowywane dla wybranego wariantu oferty.',
    minimumOrder: 'Minimalne zamówienie: 14 sztuk oraz minimalna łączna wartość zamówienia 110 000 zł.',
    tiers: [
      {
        label: 'Średni',
        ram: '12 GB RAM',
        storage: '256 GB pamięci',
        display: 'AMOLED 6,7–6,9 cala, odświeżanie min. 120 Hz',
        processor: 'Procesor klasy flagowej / gamingowej',
        battery: 'min. 5 000 mAh',
        charging: 'szybkie ładowanie min. 65 W',
        camera: 'aparat główny min. 50 MP',
        connectivity: '5G, Wi‑Fi 6/6E, Bluetooth, NFC'
      },
      {
        label: 'Wysoki',
        ram: '16 GB RAM',
        storage: '512 GB pamięci',
        display: 'AMOLED 6,7–6,9 cala, odświeżanie 144–165 Hz',
        processor: 'Procesor klasy top-flagowej z rozbudowanym chłodzeniem',
        battery: '5 500–6 500 mAh',
        charging: 'szybkie ładowanie 80–120 W',
        camera: 'aparat główny min. 50 MP + dodatkowe moduły',
        connectivity: '5G, Wi‑Fi 7 lub równoważne, Bluetooth, NFC'
      },
      {
        label: 'Najwyższy',
        ram: '24 GB RAM',
        storage: '1 TB pamięci',
        display: 'AMOLED klasy premium, odświeżanie do 165 Hz, wysoka jasność i HDR',
        processor: 'Najwyższa dostępna konfiguracja układu mobilnego klasy gamingowej',
        battery: 'do ok. 7 000 mAh, zależnie od wariantu',
        charging: 'szybkie ładowanie do ok. 120 W, zależnie od wariantu',
        camera: 'zaawansowany zestaw aparatów z głównym sensorem min. 50 MP',
        connectivity: '5G, Wi‑Fi 7, Bluetooth nowej generacji, NFC, USB‑C wysokiej przepustowości'
      }
    ]
  },
  {
    id: 2,
    name: 'Fotel masażujący 4D Zero Gravity Signature',
    description: 'Zaawansowany fotel relaksacyjny klasy premium z funkcją zero gravity, wielostrefowym masażem, ogrzewaniem i rozbudowanymi trybami pracy.',
    category: 'Wellness Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 3,
    name: 'Inteligentne lustro LED Smart Luxury',
    description: 'Nowoczesne lustro premium z oświetleniem LED, funkcjami smart, sterowaniem dotykowym i rozwiązaniami przeciwparowymi.',
    category: 'Smart Home Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 4,
    name: 'Kominek elektryczny 3D Panorama',
    description: 'Dekoracyjny kominek elektryczny z panoramicznym efektem płomienia, możliwością zabudowy i sterowaniem dopasowanym do wybranego modelu.',
    category: 'Luxury Interior', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 5,
    name: 'Zestaw wypoczynkowy Outdoor Resort Collection',
    description: 'Ekskluzywny modułowy zestaw mebli zewnętrznych do tarasów, ogrodów, hoteli i stref resortowych.',
    category: 'Outdoor Luxury', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 6,
    name: 'Żyrandol Architectural Gold Edition',
    description: 'Dekoracyjne oświetlenie premium do reprezentacyjnych wnętrz, hoteli, restauracji i rezydencji, z konfiguracją rozmiaru i wykończenia.',
    category: 'Premium Lighting', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 7,
    name: 'Stół konferencyjny Executive Stone & Wood',
    description: 'Reprezentacyjny stół konferencyjny klasy executive z możliwością integracji z mediami, zasilaniem i systemem prowadzenia przewodów.',
    category: 'Executive Office', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 8,
    name: 'Fotel biurowy Executive Ergonomic Pro',
    description: 'Ergonomiczny fotel gabinetowy klasy premium z wielopunktową regulacją i wykończeniem przeznaczonym do przestrzeni zarządczych.',
    category: 'Executive Office', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 9,
    name: 'Automatyczny ekspres Coffee Bar Prestige',
    description: 'Profesjonalny automat kawowy do biur, hoteli i stref premium, z konfiguracją napojów, systemem mlecznym i trybami automatycznego czyszczenia.',
    category: 'Hospitality Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 10,
    name: 'Lodówka do win Dual Zone Signature',
    description: 'Witryna chłodnicza do win z dwiema strefami temperatury, oświetleniem ekspozycyjnym i wykończeniem do wnętrz premium.',
    category: 'Hospitality Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 11,
    name: 'System kina domowego Cinema Lounge 4K',
    description: 'Kompletny zestaw do prywatnej sali kinowej obejmujący projektor, ekran, nagłośnienie i elementy sterowania dobrane do pomieszczenia.',
    category: 'Audio Video Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 12,
    name: 'Stacja ładowania EV Business Edition',
    description: 'Rozwiązanie ładowania pojazdów elektrycznych do obiektów firmowych, hotelowych i prywatnych, dobierane według parametrów instalacji.',
    category: 'E-Mobility', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 13,
    name: 'Elektryczny skuter miejski Urban Elite',
    description: 'Miejski pojazd elektryczny przeznaczony do mobilności codziennej, oferowany w wariantach wyposażenia dopasowanych do rynku docelowego.',
    category: 'E-Mobility', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 14,
    name: 'Sauna infrared Home Spa Premium',
    description: 'Kabina infrared do prywatnych stref wellness i obiektów hotelowych, dostępna w różnych wariantach wymiarowych i wyposażeniowych.',
    category: 'Wellness Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 15,
    name: 'Pergola bioklimatyczna Smart Terrace',
    description: 'Nowoczesna pergola z regulowanym zadaszeniem, opcjonalnym oświetleniem, przeszkleniami i automatyką sterującą.',
    category: 'Outdoor Luxury', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  },
  {
    id: 16,
    name: 'Stół bilardowy Designer Collection',
    description: 'Stół bilardowy klasy premium przeznaczony do rezydencji, klubów, hoteli i stref reprezentacyjnych, z możliwością personalizacji wykończenia.',
    category: 'Leisure Premium', priceLabel: commonPrice, certificates: commonDocs, warranty: commonWarranty, mediaStatus: commonMedia
  }
];

export default products;
