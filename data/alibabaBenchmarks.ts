export type AlibabaBenchmark = {
  category: string;
  reference: string;
  alibabaUsd: [number, number];
  moq: string;
  landedPln: [number, number];
  salePln: [number, number];
  comparableEuMarketPln?: [number, number];
  note: string;
  checkedAt: string;
};

// Benchmark pomocniczy PROFESJA PREMIUM LIMITED™.
// Kursy walut są robocze i przed ofertą muszą zostać odświeżone.
// Alibaba/MOQ służy do oceny kosztu sourcingu i dostępności wariantów.
// Cena sprzedażowa PROFESJA = koszt landed × 1,72–1,84 (+72% do +84%),
// z kontrolą, aby oferta pozostawała rozsądnie zbliżona do cen porównywalnych produktów w UE.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału dystrybucji ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB',
    alibabaUsd: [49, 92],
    moq: 'najczęściej 1 szt.; część ofert 10–200+ szt.',
    landedPln: [320, 650],
    salePln: [550, 1196],
    note: 'Benchmark bez istotnej zmiany. Wyłącznie Private Label / bez marki. Nie stosować do oryginalnych Nubia/REDMAGIC; markowe smartfony wyceniać względem oficjalnego rynku UE.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1 t / 2 t / 2,5 t / 3,5 t, silnik EPA/Kubota zależnie od wersji',
    alibabaUsd: [1500, 3500],
    moq: '1 zestaw',
    landedPln: [18000, 28000],
    salePln: [30960, 51520],
    note: 'Benchmark bez istotnej zmiany. Publiczne listingi nadal pokazują ok. 1 500 USD dla podstawowych konfiguracji i ok. 2 000 USD dla wybranych 3,5 t przy MOQ 1. Do oferty doliczać transport, odprawę, zgodność UE i specyfikację silnika.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [529, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.',
    landedPln: [4500, 10000],
    salePln: [7740, 18400],
    comparableEuMarketPln: [4300, 13000],
    note: 'Zakres Alibaba pozostaje aktualny. Dla konfiguracji premium cena wynikająca wyłącznie z narzutu może przekroczyć część rynku UE, dlatego finalną ofertę należy porównywać z konkretnym modelem europejskim i zakresem gwarancji.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [989, 2100],
    moq: '1 zestaw / 1 jednostka; część ofert 2 szt.',
    landedPln: [8000, 18000],
    salePln: [13760, 33120],
    note: 'Brak istotnej zmiany benchmarku. Aktualne oferty Gree/Haier i systemy multi-zone nadal mieszczą się w zbliżonym przedziale; pełne realizacje z montażem i uruchomieniem wyceniać projektowo.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [500, 1960],
    moq: '1–2 zestawy typowo; wybrane serie 5–30 szt.',
    landedPln: [4000, 12000],
    salePln: [6880, 22080],
    comparableEuMarketPln: [4900, 29400],
    note: 'Istotna korekta górnego benchmarku: aktualne luksusowe zestawy executive dochodzą do ok. 1 960 USD przy MOQ 1. Zakres sprzedażowy po narzucie nadal mieści się w szerokim przedziale porównywalnych ofert UE.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kW hybrid/off-grid complete solar kit; publiczne listingi często nie potwierdzają magazynu 20 kWh w cenie bazowej',
    alibabaUsd: [750, 2899],
    moq: '1 zestaw / od 5 000 W zależnie od dostawcy',
    landedPln: [45000, 55000],
    salePln: [77400, 101200],
    note: 'Benchmark bez istotnej zmiany. Najtańsze listingi 20 kW często nie obejmują pełnego magazynu 20 kWh; przed ofertą potwierdzić baterię, falownik, panele, dokumentację, Incoterms i zgodność UE.',
    checkedAt: '2026-08-10'
  }
];

export const pricingMarkup = {
  min: 0.72,
  max: 0.84,
  formula: 'sale = landedCost × (1 + markup)',
  note: 'MOQ, koszt landed, porównanie z rynkiem UE i narzut handlowy są kontrolowane oddzielnie.'
};
