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
// Alibaba/MOQ służy do oceny kosztu sourcingu i dostępności wariantów.
// Cena sprzedażowa jest liczona jako koszt landed +72% do +84% narzutu.
// Następnie wynik należy porównać z rynkiem UE; konfiguracji, której cena przy wymaganym narzucie
// przekracza sensowny poziom europejski, nie należy automatycznie publikować — wymaga renegocjacji sourcingu/BOM.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB; OEM/ODM i Private Label',
    alibabaUsd: [49, 116],
    moq: 'Private Label/OEM typowo 100–5000 szt.; pojedyncze próbki/stock od 1–2 szt. są dostępne, ale nie są równoważne seryjnemu Private Label',
    landedPln: [320, 650],
    targetSalePln: [550, 1196],
    note: 'Istotna korekta MOQ: bieżące oferty Private Label pokazują zwykle MOQ 100–5000 szt.; 1–2 szt. dotyczy raczej próbek/stock. Nie stosować do oryginalnych nubia/REDMAGIC.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1–3,5 t; CE/EPA/Euro 5 i Kubota zależnie od wersji',
    alibabaUsd: [1500, 4000],
    moq: '1 zestaw / 1 szt. dla wielu ofert; wybrane serie 5–16 szt.',
    landedPln: [18000, 28000],
    targetSalePln: [30960, 51520],
    note: 'Dolny poziom pozostaje ok. 1500 USD; 3,5 t/Kubota i lepsze konfiguracje często dochodzą do ok. 4000 USD lub więcej. Transport, odprawa, zgodność UE i silnik potwierdzane przed ofertą.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [430, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.',
    landedPln: [4500, 10000],
    comparableEuMarketPln: [12000, 51000],
    targetSalePln: [7740, 18400],
    note: 'Alibaba pokazuje obecnie pełne 4D od ok. 430–579 USD przy MOQ 1; wyższe konfiguracje pozostają znacznie droższe. Rynek UE ma bardzo szeroki rozrzut: ok. 2999 EUR dla 4D NAIPO do ok. 5570–11970 EUR dla iRest premium.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; cena zależna od mocy i liczby jednostek',
    alibabaUsd: [599, 2100],
    moq: '1 zestaw / 1 jednostka dla wielu ofert; część konfiguracji 2 zestawy',
    landedPln: [8000, 18000],
    targetSalePln: [13760, 33120],
    note: 'Zakres rozszerzony dla porównywalnych wariantów: Gree 33,5 kW od ok. 599–999 USD, popularny Gree 10–33,5 kW 989–1769 USD, Midea 40 kW ok. 1950–2100 USD. Pełny BOM i liczba jednostek wewnętrznych muszą być porównywane 1:1.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [428, 1913],
    moq: '1 zestaw dla części pełnych konfiguracji; typowo 1–2, wybrane serie 5–30 szt.',
    landedPln: [4000, 12000],
    comparableEuMarketPln: [5000, 70000],
    targetSalePln: [6880, 22080],
    note: 'Alibaba premium pozostaje ok. 428–1913 USD dla porównywalnych zestawów. Rynek europejski jest szeroki: pojedyncze executive desks ok. 1000–3500 EUR, kompletne gabinety prezesa w Polsce często ok. 15–70 tys. zł netto, premium 80–150 tys. zł+.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kWp PV + magazyn ok. 20 kWh, falownik hybrydowy, komplet komponentów i dokumentacja do rynku UE; benchmark sprzętowy bez montażu turnkey',
    alibabaUsd: [4500, 10950],
    moq: '1 zestaw dla części kompletnych systemów; inne oferty MOQ 2–10 lub ceny za W — wymagają weryfikacji pełnego BOM',
    landedPln: [30000, 52000],
    comparableEuMarketPln: [41000, 64000],
    targetSalePln: [51600, 95680],
    note: 'Alibaba pokazuje kompletne systemy z baterią w bardzo szerokim zakresie, m.in. ok. 4500–10950 USD przy MOQ 1; część tanich listingów nie gwarantuje 20 kWp + 20 kWh 1:1. W UE porównywalne zestawy sprzętowe są obecnie ok. 9745–14990 EUR. Przy wysokim landed koszt +72–84% przekracza rynek UE, więc taki wariant wymaga renegocjacji sourcingu/BOM zamiast automatycznej publikacji.',
    checkedAt: '2026-08-16'
  }
];

export const pricingPolicy = {
  markupMin: 0.72,
  markupMax: 0.84,
  defaultMarkup: 0.78,
  formula: 'targetSale = landedCost × (1 + markup)',
  euGuardrail: 'porównaj wynik z ceną porównywalnej konfiguracji UE; jeśli wymagany narzut daje cenę niekonkurencyjną, renegocjuj landed/BOM zamiast obniżać marżę bez decyzji handlowej',
  note: 'MOQ, dostępność, Incoterms, transport, cło/VAT, gwarancja, zgodność UE i wariant produktu muszą być potwierdzone przed publikacją oferty.'
};
