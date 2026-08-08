export const marketBenchmarkSnapshot = {
  updatedAt: '2026-08-08',
  usdToPln: 3.8,
  markupRange: { min: 1.72, max: 1.84 },
  categories: {
    'Smartfony Premium': { low: 50, high: 585, moq: 'najczęściej 1 szt.; część ofert 2–10 szt.', note: '5G/OEM/rugged; pominięto skrajnie tanie, niezweryfikowane oferty poniżej ok. 35 USD' },
    'Laptopy Premium': { low: 125, high: 955, moq: 'najczęściej 1–20 szt.; część konfiguracji 50–100+', note: 'nowe/OEM i biznesowe; używane/refurbished nie wyznaczają benchmarku premium' },
    'Energia i Fotowoltaika': { low: 310, high: 5599, moq: 'zwykle 1–5 zestawów; wybrane systemy 15+', note: 'domowe i małe komercyjne systemy magazynowania/solar; duże kontenerowe BESS wyceniane osobno' },
    HVAC: { low: 100, high: 500, moq: '1–50 zestawów zależnie od typu', note: 'urządzenia i systemy HVAC; drobne akcesoria pominięte jako niereprezentatywne' },
    'Meble Premium': { low: 30, high: 1888, moq: '1–20 szt.; stanowiska/cubicle zwykle 20+', note: 'fotele, biurka, stanowiska i boksy akustyczne' },
    'Drzwi i Bramy Premium': { low: 100, high: 1500, moq: 'najczęściej 1–2 zestawy', note: 'automatyka drzwiowa, drzwi wejściowe i systemy przesuwne; duże drzwi obrotowe projektowo' },
    'Maszyny i Sprzęt Ciężki': { low: 900, high: 13500, moq: 'zwykle 1 szt.', note: 'minikoparki i popularne maszyny; ciężkie koparki 50 t i większe wyceniane indywidualnie' },
    'Wellness Premium': { low: 104, high: 4000, moq: 'najczęściej 1–5 szt.; wybrane modele 10+', note: 'łóżka SPA, sauna/red-light i urządzenia profesjonalne; wysokospecjalistyczne systemy osobno' },
    'Smart Home Premium': { low: 18, high: 245, moq: '1–20 szt.; proste akcesoria mogą wymagać 100+', note: 'przełączniki, panele sterujące, alarmy i zamki smart' },
  },
} as const;
