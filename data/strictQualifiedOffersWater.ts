export type StrictWaterOffer = {
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

// Shanghai Bluetech Co., Ltd. jest pokazywany przez aktualne strony Alibaba
// jako Verified Supplier z wieloletnim stażem (znacznie > 3 lat), a osobne
// strony ofertowe dostawcy wskazują Trade Assurance. Przed każdym zakupem
// status oraz objęcie konkretnego zamówienia ochroną są ponownie sprawdzane.
export const strictWaterOffers: StrictWaterOffer[] = [
  {
    id: 'bluetech-alkaline-water-pitcher',
    category: 'Filtracja i uzdatnianie wody',
    title: 'Dzbanek filtrujący do wody z wkładem wielostopniowym',
    use: 'biura, gastronomia, gospodarstwa domowe i zaplecza socjalne',
    purpose: 'poprawa jakości użytkowej wody zgodnie z parametrami konkretnego wkładu filtracyjnego',
    function: 'przepuszcza wodę przez wymienne medium filtracyjne w celu redukcji wybranych zanieczyszczeń i poprawy cech organoleptycznych',
    supplier: 'Shanghai Bluetech Co., Ltd.',
    supplierYears: 15,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/alkaline-water-purifier-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/water-filter-jug-suppliers.html'
  },
  {
    id: 'bluetech-portable-water-filter',
    category: 'Filtracja i uzdatnianie wody',
    title: 'Przenośny system filtracji wody do zastosowań mobilnych',
    use: 'wyjazdy, zaplecza terenowe, obiekty tymczasowe i zastosowania awaryjne',
    purpose: 'zapewnienie kompaktowej filtracji wody w miejscu użytkowania zgodnie ze specyfikacją danego modelu',
    function: 'prowadzi wodę przez układ filtracyjny o parametrach określonych dla konkretnej konfiguracji',
    supplier: 'Shanghai Bluetech Co., Ltd.',
    supplierYears: 15,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/alkaline-water-purifier-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/natural-solutions-water-filter-suppliers.html'
  },
  {
    id: 'bluetech-water-filter-cartridge',
    category: 'Filtracja i uzdatnianie wody',
    title: 'Wymienny wkład filtracyjny do systemów uzdatniania wody',
    use: 'serwis systemów filtrujących, dzbanków, dystrybutorów i urządzeń uzdatniających',
    purpose: 'okresowa wymiana elementu roboczego odpowiedzialnego za proces filtracji',
    function: 'stanowi medium filtracyjne zatrzymujące lub redukujące wybrane składniki zgodnie z dokumentacją wkładu',
    supplier: 'Shanghai Bluetech Co., Ltd.',
    supplierYears: 15,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/alkaline-water-purifier-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/water-filter-china-suppliers.html'
  },
  {
    id: 'bluetech-countertop-water-filtration',
    category: 'Filtracja i uzdatnianie wody',
    title: 'Nablatowy system filtracji wody do biur i punktów usługowych',
    use: 'biura, recepcje, punkty usługowe i zaplecza pracownicze',
    purpose: 'lokalne uzdatnianie wody użytkowej lub pitnej zgodnie z przeznaczeniem konkretnego modelu',
    function: 'filtruje wodę w kompaktowym urządzeniu instalowanym przy punkcie poboru',
    supplier: 'Shanghai Bluetech Co., Ltd.',
    supplierYears: 15,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/alkaline-water-purifier-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://www.alibaba.com/home-use-water-filter-pitcher-suppliers.html'
  }
];

export function strictPublicWaterOffers(){
  const ids = new Set<string>();
  const titles = new Set<string>();
  return strictWaterOffers.filter((offer)=>{
    const eligible = offer.supplierYears >= 3 && offer.verifiedSupplier === true && offer.tradeAssuranceRequired === true;
    const titleKey = offer.title.trim().toLowerCase();
    const unique = !ids.has(offer.id) && !titles.has(titleKey);
    ids.add(offer.id);
    titles.add(titleKey);
    return eligible && unique;
  });
}
