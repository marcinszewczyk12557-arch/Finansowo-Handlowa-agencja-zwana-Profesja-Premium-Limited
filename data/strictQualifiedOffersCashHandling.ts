export type StrictCashHandlingOffer = {
  id: string;
  category: string;
  title: string;
  use: string;
  purpose: string;
  function: string;
  supplier: string;
  supplierYears: number;
  verifiedSupplier: true;
  tradeAssuranceRequired: true;
  supplierEvidenceUrl: string;
  tradeAssuranceEvidenceUrl: string;
};

// Źródło Alibaba wskazuje Zhejiang Chuanwei Electronic Technology Co., Ltd.
// jako Verified Supplier z 11-letnim stażem. Każde rzeczywiste zamówienie
// pozostaje objęte bramką transakcyjną: Trade Assurance musi być aktywne dla
// konkretnego zamówienia i płatność musi zostać wykonana właściwym kanałem.
export const strictCashHandlingOffers: StrictCashHandlingOffer[] = [
  {
    id: 'chuanwei-banknote-counter-professional',
    category: 'Urządzenia do obsługi gotówki',
    title: 'Profesjonalny licznik banknotów z detekcją autentyczności',
    use: 'kasy, punkty handlowe, zaplecza finansowe, kantory i działy rozliczeń',
    purpose: 'automatyczne liczenie banknotów i wspomaganie kontroli autentyczności',
    function: 'zlicza banknoty i sygnalizuje wykryte nieprawidłowości zgodnie z funkcjami konkretnego modelu',
    supplier: 'Zhejiang Chuanwei Electronic Technology Co., Ltd.',
    supplierYears: 11,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/trade-assurance-in-alibaba.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'chuanwei-currency-detector',
    category: 'Urządzenia do obsługi gotówki',
    title: 'Detektor autentyczności banknotów do stanowisk kasowych',
    use: 'handel detaliczny, recepcje, kantory i stanowiska przyjmujące płatności gotówkowe',
    purpose: 'wspomaganie kontroli autentyczności banknotów podczas przyjmowania gotówki',
    function: 'analizuje cechy zabezpieczające banknotów zgodnie z technologią zastosowaną w danym modelu',
    supplier: 'Zhejiang Chuanwei Electronic Technology Co., Ltd.',
    supplierYears: 11,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/trade-assurance-in-alibaba.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'chuanwei-coin-counter-sorter',
    category: 'Urządzenia do obsługi gotówki',
    title: 'Licznik i sorter monet do rozliczeń kasowych',
    use: 'punkty sprzedaży, zaplecza kasowe, automaty vendingowe i działy rozliczeń',
    purpose: 'przyspieszenie liczenia i segregowania monet',
    function: 'zlicza oraz rozdziela monety według obsługiwanych nominałów i konfiguracji urządzenia',
    supplier: 'Zhejiang Chuanwei Electronic Technology Co., Ltd.',
    supplierYears: 11,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/trade-assurance-in-alibaba.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'chuanwei-business-safe',
    category: 'Urządzenia do obsługi gotówki',
    title: 'Sejf elektroniczny do zabezpieczania gotówki i dokumentów',
    use: 'biura, sklepy, recepcje, zaplecza administracyjne i punkty usługowe',
    purpose: 'ograniczenie dostępu do gotówki, dokumentów i niewielkich przedmiotów wartościowych',
    function: 'zapewnia zamykaną przestrzeń zabezpieczającą zgodnie z klasą i parametrami konkretnego modelu',
    supplier: 'Zhejiang Chuanwei Electronic Technology Co., Ltd.',
    supplierYears: 11,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/trade-assurance-in-alibaba.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  }
];

export function strictPublicCashHandlingOffers(){
  const ids = new Set<string>();
  const titles = new Set<string>();
  return strictCashHandlingOffers.filter((offer)=>{
    const eligible = offer.supplierYears >= 3 && offer.verifiedSupplier === true && offer.tradeAssuranceRequired === true;
    const titleKey = offer.title.trim().toLowerCase();
    const unique = !ids.has(offer.id) && !titles.has(titleKey);
    ids.add(offer.id);
    titles.add(titleKey);
    return eligible && unique;
  });
}
