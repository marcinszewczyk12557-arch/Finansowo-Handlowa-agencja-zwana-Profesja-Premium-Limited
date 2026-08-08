export type StrictHvacOffer = {
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

const supplier = 'Henan Shangfeng Hvac Engineering Co., Ltd.';
const supplierEvidenceUrl = 'https://hnshangfeng.en.alibaba.com/index.html?from=detail&productId=1601724422013';
const tradeAssuranceEvidenceUrl = 'https://www.alibaba.com/search/page?SearchScene=imageTextSearch&productId=1600828473192';

export const strictHvacOffers: StrictHvacOffer[] = [
  {
    id: 'shangfeng-mini-vrf-vrv-system',
    category: 'Klimatyzacja i HVAC',
    title: 'System klimatyzacji Mini VRF / VRV do obiektów komercyjnych',
    use: 'biura, apartamenty, sklepy, wille, sale konferencyjne i inne obiekty wielostrefowe',
    purpose: 'centralne chłodzenie i ogrzewanie wielu stref przy indywidualnym sterowaniu jednostkami wewnętrznymi',
    function: 'moduluje wydajność układu chłodniczego i rozdziela energię do wielu stref zgodnie z konfiguracją instalacji',
    supplier,
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl,
    tradeAssuranceEvidenceUrl
  },
  {
    id: 'shangfeng-commercial-chiller',
    category: 'Klimatyzacja i HVAC',
    title: 'Agregat wody lodowej klasy komercyjnej',
    use: 'budynki usługowe, hotele, obiekty przemysłowe i instalacje technologiczne',
    purpose: 'wytwarzanie wody lodowej dla instalacji klimatyzacyjnych lub procesowych',
    function: 'odbiera ciepło z obiegu wodnego i przekazuje je do otoczenia poprzez układ chłodniczy',
    supplier,
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl,
    tradeAssuranceEvidenceUrl
  },
  {
    id: 'shangfeng-rooftop-package-unit',
    category: 'Klimatyzacja i HVAC',
    title: 'Dachowa kompaktowa centrala klimatyzacyjna Rooftop',
    use: 'hale, sklepy wielkopowierzchniowe, restauracje, obiekty usługowe i magazynowe',
    purpose: 'kompaktowe chłodzenie, ogrzewanie i obróbka powietrza w jednym urządzeniu dachowym',
    function: 'realizuje obieg chłodniczy i nawiew powietrza do instalacji kanałowej zgodnie z parametrami konkretnego modelu',
    supplier,
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl,
    tradeAssuranceEvidenceUrl
  },
  {
    id: 'shangfeng-fan-coil-unit',
    category: 'Klimatyzacja i HVAC',
    title: 'Klimakonwektor Fan Coil do instalacji wodnych',
    use: 'biura, hotele, apartamenty, lokale handlowe i budynki użyteczności publicznej',
    purpose: 'lokalne chłodzenie lub ogrzewanie pomieszczeń z wykorzystaniem obiegu wody lodowej lub grzewczej',
    function: 'wymusza przepływ powietrza przez wymiennik ciepła i przekazuje energię pomiędzy wodą a powietrzem w pomieszczeniu',
    supplier,
    supplierYears: 4,
    verifiedSupplier: true,
    tradeAssuranceRequired: true,
    supplierEvidenceUrl,
    tradeAssuranceEvidenceUrl
  }
];

export function strictPublicHvacOffers(){
  const ids = new Set<string>();
  const titles = new Set<string>();
  return strictHvacOffers.filter((offer)=>{
    const eligible = offer.supplierYears >= 3 && offer.verifiedSupplier === true && offer.tradeAssuranceRequired === true;
    const titleKey = offer.title.trim().toLowerCase();
    const unique = !ids.has(offer.id) && !titles.has(titleKey);
    ids.add(offer.id);
    titles.add(titleKey);
    return eligible && unique;
  });
}
