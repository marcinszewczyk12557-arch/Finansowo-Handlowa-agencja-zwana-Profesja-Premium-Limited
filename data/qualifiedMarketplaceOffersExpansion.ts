export type QualifiedOfferExpansion = {
  id: string;
  category: string;
  title: string;
  use: string;
  purpose: string;
  function: string;
  supplier: string;
  supplierYears: number;
  verifiedSupplier: true;
  transactionProtection: true;
  evidenceUrl: string;
  evidenceNote: string;
};

// Dodatkowy, selektywny katalog. Każda pozycja ma odrębny tytuł i źródło.
// Warunek wykonawczy pozostaje bez zmian: przed konkretnym zamówieniem ponownie
// sprawdzamy status Verified Supplier, staż >= 3 lata i dostępność Trade Assurance.
export const qualifiedOffersExpansion: QualifiedOfferExpansion[] = [
  {
    id:'lab-labtex-autoclave-24l', category:'Sprzęt laboratoryjny',
    title:'Autoklaw laboratoryjny 24 l do sterylizacji wsadowej',
    use:'laboratoria, pracownie badawcze i zaplecza techniczne',
    purpose:'sterylizacja wyposażenia i materiałów zgodnie z instrukcją konkretnego modelu',
    function:'prowadzi kontrolowany cykl sterylizacji termicznej pod ciśnieniem',
    supplier:'Labtex Biotech China Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/autoclave-24l.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; Trade Assurance wymagane dla konkretnego zamówienia.'
  },
  {
    id:'lab-labtex-conductivity-meter', category:'Sprzęt laboratoryjny',
    title:'Stołowy miernik przewodności do kontroli parametrów roztworów',
    use:'laboratoria kontroli jakości, edukacja, badania i procesy technologiczne',
    purpose:'pomiar przewodności elektrycznej próbek ciekłych',
    function:'mierzy i prezentuje parametr przewodności zgodnie z zakresem urządzenia',
    supplier:'Labtex Biotech China Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/benchtop-conductivity-meter.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; ochrona zamówienia ponownie potwierdzana przed zakupem.'
  },
  {
    id:'lab-labtex-roller-mixer', category:'Sprzęt laboratoryjny',
    title:'Laboratoryjny mieszalnik rolkowy do probówek z regulacją pracy',
    use:'laboratoria diagnostyczne, badawcze i przygotowanie próbek',
    purpose:'łagodne i powtarzalne mieszanie próbek w probówkach',
    function:'obraca probówki w kontrolowany sposób w celu homogenizacji zawartości',
    supplier:'Labtex Biotech China Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/roller-mixer-for-laboratory.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; Trade Assurance wymagana transakcyjnie.'
  },
  {
    id:'lab-labtex-medical-refrigeration', category:'Sprzęt laboratoryjny',
    title:'Chłodziarka laboratoryjna do kontrolowanego przechowywania próbek',
    use:'laboratoria, zaplecza badawcze i magazynowanie materiałów wymagających kontroli temperatury',
    purpose:'utrzymanie stabilnych warunków chłodniczych w granicach specyfikacji modelu',
    function:'chłodzi i monitoruje przestrzeń roboczą urządzenia',
    supplier:'Labtex Biotech China Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/medical-refrigeration-equipment-factories.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; status zamówienia chronionego sprawdzany przed płatnością.'
  },
  {
    id:'tool-pineng-impact-drill', category:'Narzędzia profesjonalne',
    title:'Akumulatorowa wiertarka udarowa 21 V z silnikiem bezszczotkowym',
    use:'montaż, serwis, prace instalacyjne i remontowe',
    purpose:'mobilne wiercenie i prace udarowe bez zasilania przewodowego',
    function:'wierci, wkręca i realizuje pracę udarową zgodnie z konfiguracją zestawu',
    supplier:'Jiangsu Pineng Electric Tools Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/product-detail/Cordless-Charging-Electric-Impact-Drill-Brushless_1601425809093.html',
    evidenceNote:'Alibaba product/supplier page: Verified Supplier, 3 yrs; Trade Assurance dostępne na platformie i wymagane dla zamówienia.'
  },
  {
    id:'tool-pineng-impact-wrench', category:'Narzędzia profesjonalne',
    title:'Bezszczotkowy akumulatorowy klucz udarowy wysokiego momentu',
    use:'warsztaty, serwis pojazdów, montaż konstrukcji i utrzymanie ruchu',
    purpose:'szybkie dokręcanie i odkręcanie połączeń gwintowanych',
    function:'generuje wysoki moment obrotowy z mechanizmem udarowym',
    supplier:'Jiangsu Pineng Electric Tools Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/cordless-impact-wrench.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; ochrona zamówienia potwierdzana przy finalizacji.'
  },
  {
    id:'tool-pineng-angle-grinder', category:'Narzędzia profesjonalne',
    title:'Akumulatorowa szlifierka kątowa klasy warsztatowej',
    use:'cięcie, szlifowanie i obróbka metalu oraz materiałów zgodnych z tarczą',
    purpose:'mobilna obróbka warsztatowa i montażowa',
    function:'napędza tarczę roboczą z prędkością właściwą dla wybranego modelu',
    supplier:'Jiangsu Pineng Electric Tools Co., Ltd.', supplierYears:3, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/grinder-gun.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 3 yrs; Trade Assurance wymagane dla konkretnej transakcji.'
  },
  {
    id:'steel-hengshuntai-stainless-tube', category:'Stal i instalacje przemysłowe',
    title:'Rura ze stali nierdzewnej 304/316 do zastosowań przemysłowych',
    use:'instalacje procesowe, konstrukcje, przemysł spożywczy i techniczny zależnie od dokumentacji partii',
    purpose:'transport medium lub zabudowa konstrukcyjna zgodnie z gatunkiem i normą',
    function:'tworzy odporny korozyjnie element rurowy',
    supplier:'Jiangsu Hengshuntai Steel Co., Ltd.', supplierYears:4, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/steel-pipe-and-tube-supplier.html',
    evidenceNote:'Alibaba supplier page: Verified Supplier, 4 yrs; widoczne CE/ISO; ochrona transakcji weryfikowana przed zamówieniem.'
  },
  {
    id:'steel-hengshuntai-seamless-pipe', category:'Stal i instalacje przemysłowe',
    title:'Bezszwowa rura stalowa ASTM do instalacji i konstrukcji',
    use:'rurociągi, konstrukcje, układy mechaniczne i zastosowania przemysłowe',
    purpose:'zastosowania wymagające rury bezszwowej o parametrach partii zgodnych z zamówieniem',
    function:'przenosi medium lub obciążenia zgodnie ze specyfikacją techniczną',
    supplier:'Jiangsu Hengshuntai Steel Co., Ltd.', supplierYears:4, verifiedSupplier:true, transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/supplier/astm-pipe-price.html',
    evidenceNote:'Alibaba supplier page: Verified/audited supplier data, 4 yrs; Trade Assurance wymagane w finalnym zamówieniu.'
  }
];
