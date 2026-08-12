export const marketBenchmarkSnapshot = {
  updatedAt: '2026-08-12',
  eurToPlnReference: 4.327,
  usdToPlnWorking: 3.8,
  marketPriceShare: { min: 0.72, target: 0.80, max: 0.84 },
  categories: {
    'Smartfony Premium': {
      low: 699,
      high: 799,
      currency: 'EUR',
      moq: 'oficjalny detal UE: 1 szt.; polityka B2B PROFESJA jest niezależna od MOQ dostawcy',
      note: 'REDMAGIC 11 Pro 12/256: 699 EUR, obecnie wyprzedany w oficjalnym sklepie UE; nubia Z80 Ultra: od 799 EUR, in stock, wysyłka 3–5 dni. Warianty pamięci/koloru potwierdzane przed ofertą.'
    },
    'Laptopy Premium': { low: 125, high: 955, currency: 'USD', moq: 'najczęściej 1–20 szt.; część konfiguracji 50–100+', note: 'nowe/OEM i biznesowe; używane/refurbished nie wyznaczają benchmarku premium' },
    'Energia i Fotowoltaika': { low: 5200, high: 8500, currency: 'USD', moq: '1 kompletny zestaw dla porównywalnych konfiguracji; listingi za W/kW nie są traktowane jako MOQ kompletnego systemu', note: '20 kWp + magazyn ok. 20 kWh: sourcing Alibaba 5,2–8,5 tys. USD pozostaje konserwatywnym benchmarkiem pełniejszego zestawu. Skorygowano benchmark UE do ok. 9,8–13 tys. EUR (sprzęt/kit, zależnie od baterii, falownika i VAT); nie utożsamiać z instalacją turnkey z montażem.' },
    HVAC: { low: 899, high: 1769, currency: 'USD', moq: '1–2 jednostki/zestawy typowo', note: 'VRF/VRV 8–33,5 kW; publiczne Gree 10–33,5 kW ok. 989–1 769 USD przy MOQ 1; kompletna realizacja wielostrefowa i montaż wyceniane projektowo' },
    'Meble Premium': { low: 428, high: 1913, currency: 'USD', moq: '1–2 zestawy typowo; wybrane serie 5–30+', note: 'pełniejsze zestawy executive przy MOQ 1; proste biurka/workstation nie wyznaczają benchmarku luksusowego kompletu' },
    'Drzwi i Bramy Premium': { low: 100, high: 1500, currency: 'USD', moq: 'najczęściej 1–2 zestawy', note: 'automatyka drzwiowa, drzwi wejściowe i systemy przesuwne; duże drzwi obrotowe projektowo' },
    'Maszyny i Sprzęt Ciężki': { low: 1500, high: 3500, currency: 'USD', moq: 'zwykle 1 szt./zestaw', note: 'minikoparki 1–3,5 t; nowe konfiguracje 3–3,5 t nadal występują ok. 1,5–3,5 tys. USD przy MOQ 1, ale koszt landed UE jest znacząco wyższy' },
    'Wellness Premium': { low: 529, high: 1800, currency: 'USD', moq: 'najczęściej 1 szt.; wybrane serie 2–10+', note: 'pełne modele 4D/5D, zero gravity i SL-track; aktualne pełniejsze listingi Alibaba nadal ok. 529–1 800+ USD przy MOQ 1; skrajnie tanie listingi bez porównywalnych funkcji nie są benchmarkiem premium' },
    'Smart Home Premium': { low: 18, high: 245, currency: 'USD', moq: '1–20 szt.; proste akcesoria mogą wymagać 100+', note: 'przełączniki, panele sterujące, alarmy i zamki smart' },
  },
} as const;
