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
// Alibaba/MOQ służy do oceny kosztu sourcingu, realności dostawy i dostępności wariantów.
// Docelowa cena sprzedażowa PROFESJA jest ustalana względem porównywalnej ceny rynkowej UE,
// zwykle na poziomie ok. 72–84% rynku dla tej samej lub możliwie najbliższej konfiguracji.
// Koszt landed, MOQ dostawcy, Incoterms, rentowność i polityka rabatowa PROFESJA są kontrolowane osobno
// i nie mogą być utożsamiane z zasadą 72–84% ceny rynkowej.
// Dla produktów markowych benchmark Alibaba nie zastępuje autoryzowanego kanału ani weryfikacji autentyczności.
export const alibabaBenchmarks: AlibabaBenchmark[] = [
  {
    category: 'Smartfony Private Label 5G',
    reference: 'funkcjonalne 5G Android / 8–12 GB RAM / 128–256 GB; OEM/ODM i Private Label',
    alibabaUsd: [100, 160],
    moq: 'Dla rzeczywistego OEM/Private Label typowo 100–3000+ szt.; 1–2 szt. dotyczy zwykle próbek, stocku lub ofert bez pełnego brandingu',
    landedPln: [520, 900],
    note: 'Dolne listingi 5G ok. 40–80 USD są często nieporównywalne lub mają słabą wiarygodność/specyfikację. Do benchmarku handlowego przyjmujemy wyższy, realistyczniejszy poziom dla funkcjonalnych urządzeń 8/256 GB; dokładne MOQ, pasma UE, CE/RED, GMS, aktualizacje, bateria i branding wymagają potwierdzenia przed ofertą.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Maszyny i Sprzęt Ciężki — minikoparka 1–3,5 t',
    reference: 'mini excavator, warianty 1–3,5 t; CE/EPA/Euro 5 i Kubota zależnie od wersji',
    alibabaUsd: [1800, 3500],
    moq: '1 zestaw / 1 szt. dla wielu ofert; branding lub konfiguracje seryjne mogą mieć wyższe MOQ',
    landedPln: [18000, 30000],
    comparableEuMarketPln: [42000, 108000],
    targetSalePln: [30240, 90720],
    note: 'Aktualne oferty Alibaba dla 1–3,5 t z deklarowanym Kubota/CE/EPA często pokazują ok. 1800–2765 USD przy MOQ 1; wyższe i lepiej wyposażone konfiguracje dochodzą powyżej 3000 USD. Nie utożsamiać chińskiej maszyny z silnikiem Kubota z oryginalną używaną/nową koparką Kubota. Transport morski/drogowy, odprawa, zgodność UE, części i serwis muszą być policzone oddzielnie.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Wellness Premium — fotel masażujący 4D Zero Gravity',
    reference: 'pełny fotel 4D/5D, SL-track, zero gravity, ogrzewanie, airbag, AI/voice zależnie od wariantu',
    alibabaUsd: [430, 1800],
    moq: '1 szt. dla wielu pełnowymiarowych modeli; wybrane serie 2–10+ szt.; personalizacja logo zwykle wymaga wyższego MOQ',
    landedPln: [4500, 10000],
    comparableEuMarketPln: [12900, 51600],
    targetSalePln: [9288, 43344],
    note: 'Pełne 4D na Alibaba występują obecnie m.in. ok. 430–480, 580–1350, 1050–1200 i 1290–1580 USD przy MOQ 1; skrajnie tanie listingi nie są używane jako benchmark premium. Europejskie 4D premium mieszczą się orientacyjnie od ok. 2999 EUR do ponad 11 tys. EUR zależnie od marki i mechanizmu.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'HVAC — VRF/VRV Business',
    reference: 'VRF/VRV 10–40 kW, multi-zone, DC inverter; benchmark jednostki zewnętrznej / systemu o jasno potwierdzonym BOM',
    alibabaUsd: [989, 2100],
    moq: '1 zestaw / 1 jednostka dla wielu ofert; część konfiguracji 2 zestawy',
    landedPln: [8000, 18000],
    comparableEuMarketPln: [29000, 55000],
    targetSalePln: [20880, 46200],
    note: 'Porównywalne Gree VRF 10–33,5 kW są obecnie ok. 989–1769 USD przy MOQ 1; wyższa moc/marka może przekraczać 2000 USD. W UE sama jednostka zewnętrzna Gree 33,5–40 kW jest znacznie droższa. Jednostki wewnętrzne, sterowanie, rurociągi, czynnik, montaż i uruchomienie nie mogą być domyślnie traktowane jako wliczone.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Meble Premium / Executive Office',
    reference: 'komplet gabinetowy executive: biurko + szafa/side cabinet + krzesło zależnie od oferty',
    alibabaUsd: [428, 1960],
    moq: '1 zestaw dla części pełnych konfiguracji; typowo 1–2, wybrane serie 5–30 szt.',
    landedPln: [4000, 12000],
    comparableEuMarketPln: [5000, 33000],
    targetSalePln: [3600, 27720],
    note: 'W Alibaba pełniejsze zestawy executive premium są widoczne m.in. ok. 1200–1960 USD przy MOQ 1; niższe poziomy dotyczą prostszych zakresów i nie powinny obniżać benchmarku pełnego gabinetu. W UE pojedyncze zestawy biurko+szafa/side cabinet mieszczą się od kilku do ponad 30 tys. zł, natomiast pełna aranżacja gabinetu jest osobnym, wyższym zakresem.',
    checkedAt: '2026-08-16'
  },
  {
    category: 'Energia i Fotowoltaika — 20 kWp + magazyn 20 kWh',
    reference: '20 kWp PV + magazyn ok. 20 kWh, falownik hybrydowy, komplet komponentów i dokumentacja do rynku UE; benchmark sprzętowy bez montażu turnkey',
    alibabaUsd: [4499, 6000],
    moq: '1 zestaw dla części kompletnych systemów; inne oferty MOQ 2–10 lub ceny za W — wymagają weryfikacji pełnego BOM',
    landedPln: [30000, 52000],
    comparableEuMarketPln: [42000, 56000],
    targetSalePln: [30240, 47040],
    note: 'Wiarygodniejsze kompletne systemy Alibaba 20 kW z magazynowaniem są obecnie około 4499–6000 USD przy MOQ 1; bardzo tanie listingi ok. 1900–2200 USD nie są przyjmowane jako benchmark 20 kWp + 20 kWh bez pełnego BOM. W UE porównywalny zestaw sprzętowy 20 kWp + 20 kWh jest około 9,8 tys. EUR plus warunki podatkowe/dostawa; montaż turnkey wycenia się oddzielnie.',
    checkedAt: '2026-08-16'
  }
];

export const pricingPolicy = {
  marketShareMin: 0.72,
  marketShareMax: 0.84,
  defaultMarketShare: 0.80,
  formula: 'targetSale = comparableEuMarketPrice × marketShare',
  landedGuardrail: 'koszt landed i minimalna rentowność są osobną kontrolą wykonalności; jeżeli nie pozwalają utrzymać ceny 72–84% rynku, oferta wymaga renegocjacji sourcingu/BOM lub indywidualnej decyzji handlowej',
  note: 'MOQ dostawcy, dostępność, Incoterms, transport, cło/VAT, gwarancja, zgodność UE, wariant produktu i polityka rabatowa PROFESJA są kontrolowane oddzielnie od poziomu 72–84% porównywalnej ceny rynkowej.'
};
