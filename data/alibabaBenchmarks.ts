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
    checkedAt: '2026-08-12'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1 t / 2 t / 2,5 t / 3,5 t, silnik EPA/Kubota zależnie od wersji',
    alibabaUsd: [1500, 3500],
    moq: '1 zestaw',
    landedPln: [18000, 28000],
    note: 'Benchmark sourcingowy bez istotnej zmiany. Publiczne listingi nadal pokazują ok. 1 500–3 500 USD dla nowych konfiguracji 3–3,5 t przy MOQ 1. Do oferty doliczać transport, odprawę, zgodność UE i specyfikację silnika.',
    checkedAt: '2026-08-12'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [529, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.',
    landedPln: [4500, 10000],
    comparableEuMarketPln: [4300, 13000],
    targetSalePln: [3096, 10920],
    note: 'Zakres Alibaba pozostaje aktualny. Pełniejsze modele 4D nadal występują ok. 529–1 800+ USD przy MOQ 1. Nie używać najtańszych, nieporównywalnych listingów jako benchmarku premium; koszt landed i warunki gwarancji kontrolować osobno.',
    checkedAt: '2026-08-12'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [899, 1769],
    moq: '1 zestaw / 1 jednostka; część ofert 2 szt.',
    landedPln: [8000, 18000],
    note: 'Benchmark pozostaje aktualny. Publiczny Gree 10–33,5 kW jest ok. 989–1 769 USD przy MOQ 1; niższe oferty mini-VRF nie są automatycznie porównywalne z pełnym systemem Business. Montaż i uruchomienie wyceniać projektowo.',
    checkedAt: '2026-08-12'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [428, 1913],
    moq: '1–2 zestawy typowo; wybrane serie 5–30 szt.',
    landedPln: [4000, 12000],
    comparableEuMarketPln: [4900, 29400],
    targetSalePln: [3528, 24696],
    note: 'Bez istotnej zmiany; niższe biurka/workstation nie są traktowane jako porównywalny luksusowy komplet.',
    checkedAt: '2026-08-12'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kWp PV + magazyn ok. 20 kWh, falownik hybrydowy, komplet komponentów i dokumentacja do rynku UE; benchmark sprzętowy bez montażu turnkey',
    alibabaUsd: [5200, 8500],
    moq: '1 zestaw dla porównywalnych kompletnych systemów; oferty liczone za W/kW nie są MOQ kompletnego zestawu',
    landedPln: [30000, 52000],
    comparableEuMarketPln: [42000, 56000],
    targetSalePln: [30240, 47040],
    note: 'Istotna korekta benchmarku UE: porównywalne europejskie zestawy sprzętowe 20 kWp + ok. 20 kWh są dostępne w okolicach 9,8–13 tys. EUR, a nie 25–47 tys. EUR. Alibaba pozostaje benchmarkiem sourcingowym, nie ceną detaliczną. Przed ofertą potwierdzić BOM, rzeczywistą pojemność baterii, falownik, panele, gwarancję, Incoterms, transport i zgodność UE. Jeżeli koszt landed przekracza docelowe 72–84% rynku UE, wariant nie powinien być oferowany po cenie docelowej.',
    checkedAt: '2026-08-12'
  }
];

export const pricingPolicy = {
  marketShareMin: 0.72,
  marketShareMax: 0.84,
  defaultMarketShare: 0.80,
  formula: 'targetSale = comparableEuMarketPrice × marketShare',
  note: 'MOQ dostawcy, koszt landed, dostępność, gwarancja i polityka rabatowa PROFESJA są kontrolowane oddzielnie.'
};
