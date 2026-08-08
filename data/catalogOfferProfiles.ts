export type OfferProfile = {
  brand: string;
  model: string;
  series: string;
  functions: string;
  intendedUse: string;
  safeUse: string;
  warrantyMonths: number;
  manualUrl: string;
  videoUrl: string;
};

export const smartphoneProfiles: OfferProfile[] = [
  {
    brand: 'nubia', model: 'Z80 Ultra', series: 'Flagship / foto / gaming',
    functions: '6,85\" OLED 144 Hz, Snapdragon 8 Elite Gen 5, aparat główny 35 mm, bateria 7200 mAh, 80 W, 5G, NFC, IP68/IP69.',
    intendedUse: 'fotografia mobilna, multimedia, praca mobilna, komunikacja 5G i wymagające aplikacje.',
    safeUse: 'używać zgodnie z instrukcją producenta; stosować zgodne ładowarki i przewody; nie ingerować w obudowę; chronić urządzenie przed temperaturami i warunkami przekraczającymi deklarowaną klasę ochrony.',
    warrantyMonths: 24, manualUrl: 'https://eu.nubia.com/pages/nubia-z80-ultra', videoUrl: 'https://www.nubia.com/en/products/smartphones/nubia/nubia-z80-ultra.html',
  },
  {
    brand: 'nubia', model: 'Z70 Ultra', series: 'Flagship / foto',
    functions: '6,85\" AMOLED 144 Hz, Snapdragon 8 Elite, 5G, NFC, aparat główny 50 MP z OIS i regulowaną przysłoną, bateria 6150 mAh, 80 W, IP68/IP69.',
    intendedUse: 'fotografia, praca mobilna, multimedia i komunikacja biznesowa.',
    safeUse: 'przestrzegać instrukcji producenta, używać kompatybilnego zasilania USB-C, nie narażać urządzenia na uszkodzenia mechaniczne i przekroczenie parametrów środowiskowych.',
    warrantyMonths: 24, manualUrl: 'https://eu.nubia.com/en-de/pages/nubia-z70-ultra', videoUrl: 'https://eu.nubia.com/en-de/pages/nubia-z70-ultra',
  },
  {
    brand: 'REDMAGIC', model: '11 Pro', series: 'Gaming',
    functions: 'Snapdragon 8 Elite Gen 5, chłodzenie AquaCore, AMOLED 2688×1216, 7500 mAh, 80 W, triggery 520 Hz, 5G, NFC.',
    intendedUse: 'gry mobilne, streaming, multimedia i zastosowania wymagające długotrwałej wysokiej wydajności.',
    safeUse: 'nie zasłaniać kanałów chłodzenia, stosować zgodne akcesoria i ładowarki, aktualizować oprogramowanie, unikać zawilgocenia poza deklarowaną odpornością.',
    warrantyMonths: 24, manualUrl: 'https://eu.redmagic.gg/products/redmagic-11-pro/', videoUrl: 'https://eu.redmagic.gg/products/redmagic-11-pro/',
  },
  {
    brand: 'REDMAGIC', model: '10 Pro', series: 'Gaming',
    functions: 'Snapdragon 8 Elite, ekran 1.5K, aktywne chłodzenie z ciekłym metalem, bateria 7050 mAh, 5G, Dual SIM, Google Pay.',
    intendedUse: 'gaming, streaming, multimedia, testy aplikacji i mobilna praca wymagająca wysokiej wydajności.',
    safeUse: 'zapewnić drożność układu chłodzenia, używać zgodnego zasilania, nie wykonywać nieautoryzowanych modyfikacji sprzętowych i przestrzegać instrukcji producenta.',
    warrantyMonths: 24, manualUrl: 'https://eu.redmagic.gg/products/redmagic-10-pro', videoUrl: 'https://eu.redmagic.gg/products/redmagic-10-pro',
  },
  {
    brand: 'REDMAGIC', model: '10 Air', series: 'Gaming / mobilny',
    functions: '6,8\" 120 Hz, ICE-X z ciekłym metalem, bateria 6000 mAh, 80 W, triggery 520 Hz, Dual SIM, 5G.',
    intendedUse: 'gaming mobilny, multimedia i codzienna komunikacja 5G.',
    safeUse: 'używać zgodnie z instrukcją, nie zasłaniać elementów chłodzenia, stosować akcesoria zgodne ze specyfikacją i regularnie instalować aktualizacje bezpieczeństwa.',
    warrantyMonths: 24, manualUrl: 'https://eu.redmagic.gg/products/redmagic-10-air', videoUrl: 'https://eu.redmagic.gg/products/redmagic-10-air',
  },
  {
    brand: 'Apple', model: 'iPhone 17 Pro', series: 'Pro',
    functions: 'smartfon klasy premium z iOS, ekosystemem Apple, funkcjami foto/wideo, łącznością mobilną i funkcjami bezpieczeństwa systemu.',
    intendedUse: 'komunikacja biznesowa, fotografia i wideo, aplikacje firmowe, praca mobilna i integracja z ekosystemem Apple.',
    safeUse: 'użytkować zgodnie z podręcznikiem iPhone, stosować certyfikowane akcesoria i aktualizować iOS; serwis wykonywać w uprawnionych punktach.',
    warrantyMonths: 12, manualUrl: 'https://support.apple.com/pl-pl/docs/iphone', videoUrl: 'https://www.apple.com/pl/iphone/',
  },
  {
    brand: 'Apple', model: 'iPhone 17', series: 'Standard',
    functions: 'iOS, łączność mobilna, aparat foto/wideo, funkcje prywatności i integracja z usługami Apple.',
    intendedUse: 'komunikacja, praca mobilna, multimedia i zastosowania biznesowe.',
    safeUse: 'korzystać zgodnie z instrukcją Apple, używać zgodnego zasilania, chronić przed uszkodzeniem i utrzymywać aktualne oprogramowanie.',
    warrantyMonths: 12, manualUrl: 'https://support.apple.com/pl-pl/docs/iphone', videoUrl: 'https://www.apple.com/pl/iphone/',
  },
  {
    brand: 'Samsung', model: 'Galaxy S26 Ultra', series: 'Galaxy S / Ultra',
    functions: 'flagowy smartfon Galaxy z funkcjami foto/wideo, ekranem klasy premium, 5G i rozbudowanymi funkcjami mobilnymi.',
    intendedUse: 'praca mobilna, fotografia, multimedia, komunikacja 5G i zastosowania profesjonalne.',
    safeUse: 'stosować się do instrukcji Samsung, używać kompatybilnych ładowarek i akcesoriów, instalować aktualizacje oraz chronić urządzenie przed uszkodzeniami mechanicznymi.',
    warrantyMonths: 12, manualUrl: 'https://www.samsung.com/pl/support/', videoUrl: 'https://www.samsung.com/pl/smartphones/',
  },
  {
    brand: 'Samsung', model: 'Galaxy Z Fold8', series: 'Galaxy Z / Fold',
    functions: 'składany smartfon premium z dużym ekranem roboczym, 5G, wielozadaniowością oraz funkcjami foto i produktywności.',
    intendedUse: 'mobilna praca wielozadaniowa, prezentacje, komunikacja i multimedia.',
    safeUse: 'nie stosować nadmiernego nacisku na ekran składany, używać zgodnych akcesoriów, utrzymywać urządzenie w czystości i przestrzegać instrukcji producenta.',
    warrantyMonths: 12, manualUrl: 'https://www.samsung.com/pl/support/', videoUrl: 'https://www.samsung.com/pl/smartphones/',
  },
  {
    brand: 'Samsung', model: 'Galaxy A57 5G', series: 'Galaxy A',
    functions: 'smartfon 5G klasy biznesowo-użytkowej z funkcjami komunikacyjnymi, aparatem i ekosystemem Samsung.',
    intendedUse: 'floty firmowe, komunikacja, aplikacje biznesowe i codzienna praca mobilna.',
    safeUse: 'stosować zgodne zasilanie i akcesoria, aktualizować oprogramowanie, chronić urządzenie i korzystać zgodnie z instrukcją Samsung.',
    warrantyMonths: 12, manualUrl: 'https://www.samsung.com/pl/support/', videoUrl: 'https://www.samsung.com/pl/smartphones/',
  },
];

export const defaultSafetyNotice = 'Produkt należy użytkować wyłącznie zgodnie z instrukcją producenta, przeznaczeniem, parametrami znamionowymi i wymaganiami bezpieczeństwa. Przed zakupem B2B potwierdzane są dokumentacja, zgodność, warunki transportu, zasilania, montażu i eksploatacji.';

export function variantsForCategory(category: string, path: string) {
  const text = `${category} ${path}`.toLowerCase();
  if (category === 'Globalne produkty czołowych producentów') return 12;
  if (/smartfon|audio|video|lighting|maszyn|energia|hospitality|meble/.test(text)) return 12;
  return 10;
}
