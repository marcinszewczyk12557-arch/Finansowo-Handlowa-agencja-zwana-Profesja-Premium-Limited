export type AlibabaBenchmark = {
  category: string;
  reference: string;
  alibabaUsd: [number, number];
  moq: string;
  landedPln: [number, number];
  salePln: [number, number];
  note: string;
  checkedAt: string;
};

// Benchmark pomocniczy PROFESJA PREMIUM LIMITED™.
// Kurs roboczy: 1 USD ≈ 3,80 PLN (cross-rate na bazie referencyjnych kursów ECB z 23.07.2026).
// Cena sprzedażowa = benchmark kosztu landed × 1,72–1,84.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału dystrybucji ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB',
    alibabaUsd: [49, 92],
    moq: 'najczęściej 1 szt.; część ofert 10–200+ szt.',
    landedPln: [320, 650],
    salePln: [550, 1196],
    note: 'Używać wyłącznie dla Private Label / bez marki. Nie stosować do oryginalnych Nubia/REDMAGIC; te wyceniać z autoryzowanego rynku UE.',
    checkedAt: '2026-08-09'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1 t / 2 t / 2,5 t / 3,5 t, silnik EPA/Kubota zależnie od wersji',
    alibabaUsd: [1500, 3500],
    moq: '1 zestaw',
    landedPln: [18000, 28000],
    salePln: [30960, 51520],
    note: 'Istotnie poniżej starego benchmarku kosztowego 35 000 zł dla wersji Compact Pro; nowy zakres uwzględnia transport, odprawę i rezerwę na zgodność UE.',
    checkedAt: '2026-08-09'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: '4D, SL-track, zero gravity, heating/AI voice zależnie od wariantu',
    alibabaUsd: [529, 739],
    moq: '1 szt. dla wielu ofert; tańsze warianty 5–10+ szt.',
    landedPln: [4500, 7500],
    salePln: [7740, 13800],
    note: 'Obniżony względem starego benchmarku kosztowego 16 000 zł. Górny zakres zostawiony dla modeli premium, ciężkiego transportu i pełnej zgodności UE.',
    checkedAt: '2026-08-09'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [989, 2100],
    moq: '1 zestaw / 1 jednostka; część ofert 2 szt.',
    landedPln: [8000, 18000],
    salePln: [13760, 33120],
    note: 'Benchmark niższy od starego kosztowego 26 000 zł dla prostych systemów; dla kompletnych realizacji wielostrefowych i montażu pozostawić indywidualną wycenę.',
    checkedAt: '2026-08-09'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [500, 1503],
    moq: '1–2 zestawy typowo; wybrane serie 5–30 szt.',
    landedPln: [4000, 10000],
    salePln: [6880, 18400],
    note: 'Stary benchmark kosztowy 25 000 zł dla Gabinet Executive Premium jest za wysoki dla standardowych zestawów importowych; pozostawić wyższy poziom tylko dla pełnego bespoke i montażu w UE.',
    checkedAt: '2026-08-09'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kW hybrid/off-grid complete solar kit; publiczne listingi często nie potwierdzają magazynu 20 kWh w cenie bazowej',
    alibabaUsd: [1099, 2899],
    moq: '1 zestaw / od 3 kW zależnie od dostawcy',
    landedPln: [45000, 55000],
    salePln: [77400, 101200],
    note: 'Benchmark pozostawiony blisko dotychczasowego 55 000 zł, ponieważ najtańsze listingi nie są porównywalne 1:1 z pełnym zestawem 20 kWp + 20 kWh, dokumentacją i wymaganiami rynku UE.',
    checkedAt: '2026-08-09'
  }
];

export const pricingMarkup = {
  min: 0.72,
  max: 0.84,
  formula: 'sale = landedCost × (1 + markup)'
};
