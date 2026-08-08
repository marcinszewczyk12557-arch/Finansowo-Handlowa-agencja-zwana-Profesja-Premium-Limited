import fs from 'node:fs';

const path = 'components/HierarchicalCatalog.tsx';
let src = fs.readFileSync(path, 'utf8');

src = src.replace('const USD_TO_PLN = 4;', 'const USD_TO_PLN = 3.8;');

const replacements = {
  "'Smartfony Premium': { low: 233, high: 1310, note: 'smartfony 5G, flagowe i gamingowe' },": "'Smartfony Premium': { low: 50, high: 585, note: 'smartfony 5G, flagowe, rugged i gamingowe; MOQ zwykle 1 szt.' },",
  "'Laptopy Premium': { low: 180, high: 2090, note: 'laptopy biznesowe, gamingowe i stacje robocze' },": "'Laptopy Premium': { low: 125, high: 955, note: 'nowe laptopy biznesowe/OEM; MOQ zwykle 1–20 szt.' },",
  "'Energia i Fotowoltaika': { low: 342, high: 5599, note: 'systemy solarne, baterie i magazyny energii' },": "'Energia i Fotowoltaika': { low: 310, high: 5599, note: 'domowe i małe komercyjne systemy solarne/magazyny; duże BESS osobno' },",
  "HVAC: { low: 100, high: 260, note: 'klimatyzacja i rozwiązania HVAC' },": "HVAC: { low: 100, high: 500, note: 'urządzenia i systemy HVAC; MOQ zależnie od typu 1–50 zestawów' },",
  "'Meble Premium': { low: 60, high: 800, note: 'meble biurowe, hotelowe i outdoor' },": "'Meble Premium': { low: 30, high: 1888, note: 'fotele, biurka, stanowiska i boksy akustyczne; MOQ 1–20 szt.' },",
  "'Drzwi i Bramy Premium': { low: 120, high: 900, note: 'drzwi, bramy i systemy wejściowe' },": "'Drzwi i Bramy Premium': { low: 100, high: 1500, note: 'automatyka drzwiowa, drzwi wejściowe i systemy przesuwne; MOQ zwykle 1–2' },",
  "'Maszyny i Sprzęt Ciężki': { low: 1500, high: 22000, note: 'minikoparki, ładowarki i sprzęt budowlany' },": "'Maszyny i Sprzęt Ciężki': { low: 900, high: 13500, note: 'minikoparki i popularne maszyny; ciężkie jednostki wyceniane indywidualnie' },",
  "'Wellness Premium': { low: 180, high: 1800, note: 'wyposażenie wellness, spa i fitness' },": "'Wellness Premium': { low: 104, high: 4000, note: 'SPA, sauna/red-light i profesjonalne urządzenia; MOQ zwykle 1–5' },",
  "'Smart Home Premium': { low: 18, high: 280, note: 'automatyka, sterowanie i urządzenia smart' },": "'Smart Home Premium': { low: 18, high: 245, note: 'przełączniki, panele, alarmy i zamki smart; MOQ 1–20 szt.' },",
};

for (const [from, to] of Object.entries(replacements)) {
  if (!src.includes(from)) throw new Error(`Benchmark source fragment not found: ${from}`);
  src = src.replace(from, to);
}

fs.writeFileSync(path, src);
console.log('Applied 2026-08-08 market benchmarks and USD/PLN 3.80.');
