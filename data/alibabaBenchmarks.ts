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
// Alibaba/MOQ służy do oceny kosztu sourcingu; nie wyznacza automatycznie ceny sprzedaży.
// Cena PROFESJA ma docelowo wynosić ok. 72–84% aktualnej ceny rynkowej
// porównywalnego produktu/konfiguracji w UE, o ile koszt landed i warunki transakcji to umożliwiają.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału dystrybucji ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB',
    alibabaUsd: [49, 92],
    moq: 'najczęściej 1 szt.; część ofert 10–200+ szt.',
    landedPln: [320, 650],
    note: 'Wyłącznie Private Label / bez marki. Nie stosować do oryginalnych Nubia/REDMAGIC; markowe smartfony wyceniać względem oficjalnego rynku UE.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1 t / 2 t / 2,5 t / 3,5 t, silnik EPA/Kubota zależnie od wersji',
    alibabaUsd: [1500, 3500],
    moq: '1 zestaw',
    landedPln: [18000, 28000],
    note: 'Publiczne listingi Alibaba nadal pokazują ok. 1 500 USD dla 1–3,5 t i ok. 2 000 USD dla wybranych 3,5 t przy MOQ 1. Do realnej oferty doliczać transport, odprawę, zgodność UE i specyfikację silnika.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [529, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.',
    landedPln: [4500, 10000],
    comparableEuMarketPln: [4300, 13000],
    targetSalePln: [7200, 10900],
    note: 'Zakres rozszerzony w górę: wiarygodne pełne modele 4D/5D na Alibaba występują ok. 529–1 800 USD przy MOQ 1, natomiast porównywalne oferty UE obejmują ok. 999–2 999 EUR. Nie używać prostych foteli 3D/fixed-roller jako benchmarku premium 4D.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [989, 2100],
    moq: '1 zestaw / 1 jednostka; część ofert 2 szt.',
    landedPln: [8000, 18000],
    note: 'Brak istotnej zmiany benchmarku. Dla kompletnych realizacji wielostrefowych, sterowania, uruchomienia i montażu cena musi być kalkulowana projektowo.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [500, 1503],
    moq: '1–2 zestawy typowo; wybrane serie 5–30 szt.',
    landedPln: [4000, 10000],
    comparableEuMarketPln: [4900, 29400],
    note: 'Rynek UE jest bardzo szeroki: zestawy showroom/business od ok. 1 125 EUR, luksusowe zestawy markowe mogą przekraczać 6 700 EUR. Benchmarkować zawsze względem materiału, liczby elementów, dostawy i montażu.',
    checkedAt: '2026-08-10'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kW hybrid/off-grid complete solar kit; publiczne listingi często nie potwierdzają magazynu 20 kWh w cenie bazowej',
    alibabaUsd: [750, 2899],
    moq: '1 zestaw / od 5 000 W zależnie od dostawcy',
    landedPln: [45000, 55000],
    note: 'Najtańsze listingi ok. 750–1 050 USD nie są porównywalne 1:1 z pełnym 20 kWp + 20 kWh. Zachować konserwatywny koszt landed i wymagać potwierdzenia pojemności baterii, falownika, paneli, dokumentacji i warunków dostawy.',
    checkedAt: '2026-08-10'
  }
];

export const marketPriceShare = {
  min: 0.72,
  max: 0.84,
  target: 0.80,
  formula: 'sale = comparableMarketPrice × marketShare',
  note: 'MOQ dostawcy, koszt landed oraz rabat/udział ceny rynkowej PROFESJA są niezależnymi parametrami.'
};
