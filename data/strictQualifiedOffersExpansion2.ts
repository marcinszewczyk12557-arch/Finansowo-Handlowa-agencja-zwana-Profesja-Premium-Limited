export type StrictQualifiedOfferExpansion2 = {
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

// Kolejne pozycje dopuszczone do katalogu wyłącznie po potwierdzeniu:
// Verified Supplier, min. 3 lata obecności oraz możliwości realizacji zamówienia
// w Trade Assurance. Przed zakupem status jest sprawdzany ponownie dla konkretnej transakcji.
export const strictQualifiedOffersExpansion2: StrictQualifiedOfferExpansion2[] = [
  {
    id:'solar-suoer-hybrid-inverter',
    category:'Energetyka solarna i falowniki',
    title:'Hybrydowy falownik solarny do instalacji on-grid / off-grid',
    use:'instalacje fotowoltaiczne domowe, komercyjne i systemy z magazynem energii',
    purpose:'konwersja energii DC z instalacji PV lub akumulatorów na energię AC zgodnie z konfiguracją systemu',
    function:'zarządza konwersją energii i współpracą instalacji PV z siecią lub magazynem energii',
    supplier:'Foshan Suoer Electronic Industry Co., Ltd.',
    supplierYears:8,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/korea-solar-inverter.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  },
  {
    id:'solar-grandtech-18kw-hybrid',
    category:'Energetyka solarna i falowniki',
    title:'Falownik hybrydowy 18 kW do systemów fotowoltaicznych',
    use:'większe instalacje domowe, obiekty usługowe i małe systemy komercyjne',
    purpose:'obsługa konwersji energii i współpracy źródeł PV z magazynem energii',
    function:'przetwarza energię DC/AC oraz steruje przepływem energii zależnie od konfiguracji urządzenia',
    supplier:'Sichuan Grandtech New Energy Technology Co., Ltd.',
    supplierYears:3,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/18kw-inverter.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  },
  {
    id:'solar-thlinkpower-grid-inverter',
    category:'Energetyka solarna i falowniki',
    title:'Przemysłowy falownik sieciowy do instalacji fotowoltaicznych dużej mocy',
    use:'instalacje komercyjne, przemysłowe i projekty fotowoltaiczne o podwyższonej mocy',
    purpose:'konwersja energii z pola PV i przekazywanie jej do sieci zgodnie z projektem instalacji',
    function:'synchronizuje i przekształca energię DC z instalacji PV na energię AC',
    supplier:'Thlinkpower New Energy Technology Co., Ltd',
    supplierYears:3,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/1000kw-on-grid-inverter-for-solar.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  },
  {
    id:'pack-jieding-vffs',
    category:'Maszyny pakujące',
    title:'Automatyczna maszyna pakująca VFFS do saszetek i worków',
    use:'pakowanie produktów sypkich, granulowanych lub dozowanych zgodnie z wyposażeniem maszyny',
    purpose:'automatyzacja formowania, napełniania i zamykania opakowań',
    function:'tworzy opakowanie z folii, dozuje produkt i wykonuje zgrzew w jednym cyklu',
    supplier:'Xiamen Jie Ding Machinery Equipment Co., Ltd.',
    supplierYears:8,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/candy-stick-packaging-machine.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  },
  {
    id:'pack-jintian-stainless',
    category:'Maszyny pakujące',
    title:'Maszyna pakująca ze stali nierdzewnej do zastosowań przemysłowych',
    use:'branża spożywcza, chemiczna, kosmetyczna i produkcyjna zależnie od modułu dozującego',
    purpose:'higieniczne i powtarzalne pakowanie produktu w opakowania jednostkowe',
    function:'automatyzuje dozowanie, formowanie opakowania i zgrzewanie',
    supplier:'Foshan Jintian Packing Machinery Co., Ltd.',
    supplierYears:7,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/ss-packing-machine.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  },
  {
    id:'pack-sammi-paste',
    category:'Maszyny pakujące',
    title:'Automatyczna maszyna do pakowania sosów i produktów pastowatych',
    use:'pakowanie sosów, past i innych półpłynnych produktów zgodnych ze specyfikacją układu dozującego',
    purpose:'automatyczne porcjowanie i zamykanie produktów płynnych lub pastowatych',
    function:'dozuje produkt do opakowania i wykonuje kontrolowane zamknięcie opakowania',
    supplier:'Dongguan Sammi Packing Machine Co., Ltd.',
    supplierYears:13,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/tomato-paste-packaging-machine.html',
    tradeAssuranceEvidenceUrl:'https://tradeassurance.alibaba.com/'
  }
];

export function strictPublicOffersExpansion2(){
  return strictQualifiedOffersExpansion2.filter((offer)=>
    offer.supplierYears >= 3 && offer.verifiedSupplier === true && offer.tradeAssuranceRequired === true
  );
}
