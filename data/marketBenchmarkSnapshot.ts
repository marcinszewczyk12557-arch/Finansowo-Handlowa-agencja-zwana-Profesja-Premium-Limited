export const marketBenchmarkSnapshot = {
  updatedAt: '2026-08-10',
  eurToPlnReference: 4.327,
  usdToPlnWorking: 3.8,
  marketPriceShare: { min: 0.72, target: 0.80, max: 0.84 },
  categories: {
    'Smartfony Premium': {
      low: 699,
      high: 799,
      currency: 'EUR',
      moq: 'oficjalny detal UE: 1 szt.; polityka B2B PROFESJA jest niezależna od MOQ dostawcy',
      note: 'REDMAGIC 11 Pro 12/256: 699 EUR, dostępność ograniczona/wyprzedana w części wersji językowych sklepu UE; nubia Z80 Ultra 16/512: 799 EUR, in stock, wysyłka 3–5 dni.'
    },
    'Laptopy Premium': { low: 125, high: 955, currency: 'USD', moq: 'najczęściej 1–20 szt.; część konfiguracji 50–100+', note: 'nowe/OEM i biznesowe; używane/refurbished nie wyznaczają benchmarku premium' },
    'Energia i Fotowoltaika': { low: 750, high: 2899, currency: 'USD', moq: '1 zestaw / od 5 000 W zależnie od dostawcy', note: 'najtańsze systemy 20 kW nie potwierdzają pełnego magazynu 20 kWh; komplet 20 kWp + 20 kWh wymaga osobnej weryfikacji BOM, zgodności i logistyki' },
    HVAC: { low: 989, high: 2100, currency: 'USD', moq: '1–2 jednostki/zestawy typowo', note: 'VRF/VRV 10–40 kW; kompletna realizacja wielostrefowa i montaż wyceniane projektowo' },
    'Meble Premium': { low: 500, high: 1503, currency: 'USD', moq: '1–2 zestawy typowo; wybrane serie 5–30+', note: 'rynek UE: od ok. 1 125 EUR za zestaw showroom/business do ponad 6 700 EUR za luksusowe zestawy markowe' },
    'Drzwi i Bramy Premium': { low: 100, high: 1500, currency: 'USD', moq: 'najczęściej 1–2 zestawy', note: 'automatyka drzwiowa, drzwi wejściowe i systemy przesuwne; duże drzwi obrotowe projektowo' },
    'Maszyny i Sprzęt Ciężki': { low: 1500, high: 3500, currency: 'USD', moq: 'zwykle 1 szt./zestaw', note: 'minikoparki 1–3,5 t; publiczne oferty Alibaba nadal pokazują ok. 1 500–2 000 USD dla popularnych wariantów, ale koszt landed UE jest znacząco wyższy' },
    'Wellness Premium': { low: 529, high: 1800, currency: 'USD', moq: 'najczęściej 1 szt.; wybrane serie 2–10+', note: 'pełne modele 4D/5D, zero gravity i SL-track; porównywalny detal UE ok. 999–2 999 EUR' },
    'Smart Home Premium': { low: 18, high: 245, currency: 'USD', moq: '1–20 szt.; proste akcesoria mogą wymagać 100+', note: 'przełączniki, panele sterujące, alarmy i zamki smart' },
  },
} as const;
