export type StrictQualifiedOffer = {
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

// Public catalog source of truth. Every listed supplier must have a source showing
// Verified Supplier status and at least 3 years on Alibaba.com. Every real purchase
// must be executed as a Trade Assurance order and paid through Alibaba.com so the
// order protection can apply. Trade Assurance is buyer/order protection, not an
// insurance policy, therefore we do not describe it publicly as "insurance".
export const strictQualifiedOffers: StrictQualifiedOffer[] = [
  {
    id: 'pineng-cordless-drill-21v',
    category: 'Narzędzia profesjonalne',
    title: 'Wiertarko-wkrętarka akumulatorowa 21V klasy profesjonalnej',
    use: 'montaż, serwis, instalacje i prace warsztatowe',
    purpose: 'mobilne wiercenie i wkręcanie bez stałego zasilania sieciowego',
    function: 'wierci otwory i realizuje prace wkrętarskie w zastosowaniach zawodowych',
    supplier: 'Jiangsu Pineng Electric Tools Co., Ltd.',
    supplierYears: 3,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/power-portable-tools.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'pineng-angle-grinder',
    category: 'Narzędzia profesjonalne',
    title: 'Akumulatorowa szlifierka kątowa do prac montażowych i serwisowych',
    use: 'cięcie, szlifowanie i obróbka elementów metalowych zgodnie z osprzętem',
    purpose: 'mobilna obróbka materiału podczas prac instalacyjnych i warsztatowych',
    function: 'napędza tarczę roboczą do cięcia lub szlifowania',
    supplier: 'Jiangsu Pineng Electric Tools Co., Ltd.',
    supplierYears: 3,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/grinder-gun.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'pineng-rotary-hammer',
    category: 'Narzędzia profesjonalne',
    title: 'Akumulatorowy młot udarowo-obrotowy z silnikiem bezszczotkowym',
    use: 'wiercenie udarowe, prace montażowe i instalacyjne',
    purpose: 'prace wymagające udaru i wiercenia w materiałach budowlanych zgodnie ze specyfikacją osprzętu',
    function: 'łączy ruch obrotowy z mechanizmem udarowym',
    supplier: 'Jiangsu Pineng Electric Tools Co., Ltd.',
    supplierYears: 3,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/product-detail/Cordless-Charging-Electric-Impact-Drill-Brushless_1601425809093.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'hengshuntai-stainless-pipe-316',
    category: 'Stal i instalacje przemysłowe',
    title: 'Rura ze stali nierdzewnej 316 do zastosowań przemysłowych',
    use: 'instalacje, konstrukcje i przemysłowe systemy rurowe zgodnie z dokumentacją partii',
    purpose: 'zastosowania wymagające odpornej korozyjnie rury ze stali nierdzewnej',
    function: 'stanowi element rurowy do transportu medium lub zabudowy konstrukcyjnej zależnie od specyfikacji',
    supplier: 'Jiangsu Hengshuntai Steel Co., Ltd.',
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/316-stainless-steel-tube.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'hengshuntai-seamless-pipe',
    category: 'Stal i instalacje przemysłowe',
    title: 'Rura stalowa bezszwowa do zastosowań technicznych',
    use: 'przemysł maszynowy, instalacje techniczne i konstrukcje',
    purpose: 'zastosowania wymagające rury bezszwowej o parametrach potwierdzonych dokumentacją partii',
    function: 'przenosi medium lub obciążenia zgodnie z klasą materiału i projektem',
    supplier: 'Jiangsu Hengshuntai Steel Co., Ltd.',
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/astm-pipe-price.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  },
  {
    id: 'hengshuntai-steel-rod-1045',
    category: 'Stal i instalacje przemysłowe',
    title: 'Pręt stalowy 1045 / S45C do obróbki i elementów maszyn',
    use: 'produkcja części, obróbka mechaniczna i elementy hydrauliki',
    purpose: 'półprodukt stalowy do dalszej obróbki zgodnie z wymaganiami projektu',
    function: 'dostarcza materiał bazowy do wykonania wałów, sworzni i innych elementów technicznych',
    supplier: 'Jiangsu Hengshuntai Steel Co., Ltd.',
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl: 'https://www.alibaba.com/supplier/1045-cd-steel-bar-supplier.html',
    tradeAssuranceEvidenceUrl: 'https://tradeassurance.alibaba.com/'
  }
];

export function strictPublicOffers(){
  const ids = new Set<string>();
  const titles = new Set<string>();
  return strictQualifiedOffers.filter((offer) => {
    const eligible = offer.supplierYears >= 3 && offer.verifiedSupplier === true && offer.tradeAssuranceRequired === true;
    const titleKey = offer.title.trim().toLowerCase();
    const unique = !ids.has(offer.id) && !titles.has(titleKey);
    ids.add(offer.id);
    titles.add(titleKey);
    return eligible && unique;
  });
}

export function supplierOrderGate(input:{supplierYears:number;verifiedSupplier:boolean;tradeAssuranceOrder:boolean;paidThroughAlibaba:boolean}){
  return input.supplierYears >= 3 && input.verifiedSupplier && input.tradeAssuranceOrder && input.paidThroughAlibaba;
}
