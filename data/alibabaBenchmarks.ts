export type AlibabaBenchmark = {
  category: string;
  reference: string;
  alibabaUsd: [number, number];
  moq: string;
  landedPln: [number, number];
  comparableEuMarketPln?: [number, number];
  targetSalePln?: [number, number];
  note: string;
  checkedAt: string;
};

// Benchmark pomocniczy PROFESJA PREMIUM LIMITED™.
// Kursy walut są robocze i przed ofertą muszą zostać odświeżone.
// Alibaba/MOQ służy do oceny kosztu sourcingu i dostępności wariantów.
// Docelowa cena sprzedażowa PROFESJA jest ustalana względem porównywalnej ceny rynkowej UE,
// zwykle na poziomie ok. 72–84% rynku dla tej samej lub możliwie najbliższej konfiguracji.
// Koszt landed, MOQ dostawcy i rentowność są kontrolowane osobno i nie są utożsamiane z rabatem PROFESJA.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału dystrybucji ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB',
    alibabaUsd: [49, 92],
    moq: 'najczęściej 1 szt.; część ofert 10–200+ szt.',
    landedPln: [320, 650],
    note: 'Benchmark sourcingowy bez istotnej zmiany. Wyłącznie Private Label / bez marki. Nie stosować do oryginalnych nubia/REDMAGIC; markowe smartfony wyceniać względem oficjalnego rynku UE.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1 t / 2 t / 2,5 t / 3,5 t, silnik EPA/Kubota zależnie od wersji',
    alibabaUsd: [1500, 3500],
    moq: '1 zestaw',
    landedPln: [18000, 28000],
    note: 'Benchmark sourcingowy bez istotnej zmiany. Publiczne listingi nadal pokazują ok. 1 500 USD dla podstawowych konfiguracji i ok. 2 000 USD dla wybranych 3,5 t przy MOQ 1. Do oferty doliczać transport, odprawę, zgodność UE i specyfikację silnika.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [529, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.',
    landedPln: [4500, 10000],
    comparableEuMarketPln: [4300, 13000],
    targetSalePln: [3096, 10920],
    note: 'Zakres Alibaba pozostaje aktualny. Nie używać najtańszych, nieporównywalnych listingów jako benchmarku premium. Docelowy zakres PROFESJA wynika z 72–84% porównywalnego rynku UE i musi jednocześnie przejść kontrolę kosztu landed oraz gwarancji.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [989, 2100],
    moq: '1 zestaw / 1 jednostka; część ofert 2 szt.',
    landedPln: [8000, 18000],
    note: 'Brak istotnej zmiany benchmarku sourcingowego. Aktualne oferty Gree/Midea i systemy multi-zone nadal mieszczą się w zbliżonym przedziale; pełne realizacje z montażem i uruchomieniem wyceniać projektowo. Cenę PROFESJA liczyć dopiero po ustaleniu porównywalnego kompletnego zakresu UE.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [500, 1960],
    moq: '1–2 zestawy typowo; wybrane serie 5–30 szt.',
    landedPln: [4000, 12000],
    comparableEuMarketPln: [4900, 29400],
    targetSalePln: [3528, 24696],
    note: 'Górny benchmark sourcingowy ok. 1 960 USD pozostaje zasadny dla luksusowych zestawów executive. Docelowy przedział PROFESJA jest liczony jako 72–84% porównywalnego rynku UE, przy osobnej kontroli kosztu landed i zakresu zestawu.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kW hybrid/off-grid complete solar kit; publiczne listingi często nie potwierdzają magazynu 20 kWh w cenie bazowej',
    alibabaUsd: [750, 2899],
    moq: '1 zestaw / od 5 000 W zależnie od dostawcy',
    landedPln: [45000, 55000],
    note: 'Benchmark sourcingowy bez istotnej zmiany. Najtańsze listingi 20 kW często nie obejmują pełnego magazynu 20 kWh; przed ofertą potwierdzić baterię, falownik, panele, dokumentację, Incoterms i zgodność UE. Nie wyznaczać ceny sprzedażowej z samego kosztu Alibaba bez porównywalnej pełnej instalacji UE.',
    checkedAt: '2026-08-10'
  }
];

export const pricingPolicy = {
  marketShareMin: 0.72,
  marketShareMax: 0.84,
  defaultMarketShare: 0.80,
  formula: 'targetSale = comparableEuMarketPrice × marketShare',
  note: 'MOQ dostawcy, koszt landed, dostępność, gwarancja i polityka rabatowa PROFESJA są kontrolowane oddzielnie.'
};
