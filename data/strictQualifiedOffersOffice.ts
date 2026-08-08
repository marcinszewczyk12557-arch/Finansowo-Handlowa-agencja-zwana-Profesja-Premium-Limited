export type StrictQualifiedOfficeOffer = {
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

// Guangzhou Huashi Furniture Manufacturing Co., Ltd.:
// Alibaba supplier pages show the Verified Supplier badge and 5 years on platform,
// while supplier/category results show Trade Assurance support for this supplier.
// Each real order must still be checked again before payment.
export const strictQualifiedOfficeOffers: StrictQualifiedOfficeOffer[] = [
  {
    id:'huashi-ergonomic-mesh-chair',
    category:'Meble biurowe premium',
    title:'Ergonomiczne krzesło biurowe z oparciem siatkowym i regulacją',
    use:'biura, stanowiska komputerowe, sale operacyjne i domowe stanowiska pracy',
    purpose:'długotrwała praca siedząca z możliwością dopasowania pozycji użytkownika',
    function:'zapewnia podparcie podczas pracy siedzącej i umożliwia regulację wybranych elementów ergonomicznych',
    supplier:'Guangzhou Huashi Furniture Manufacturing Co., Ltd.',
    supplierYears:5,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/office-furniture-manufacturer-and-supplier.html',
    tradeAssuranceEvidenceUrl:'https://www.alibaba.com/executive-office-chair-suppliers.html'
  },
  {
    id:'huashi-executive-chair',
    category:'Meble biurowe premium',
    title:'Fotel gabinetowy high-back do stanowisk kierowniczych',
    use:'gabinety, sale konferencyjne i stanowiska managerskie',
    purpose:'komfortowe wyposażenie stanowiska pracy o podwyższonym standardzie',
    function:'zapewnia podparcie pleców i pozycję siedzącą podczas wielogodzinnej pracy',
    supplier:'Guangzhou Huashi Furniture Manufacturing Co., Ltd.',
    supplierYears:5,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/armchair-swivel-chair.html',
    tradeAssuranceEvidenceUrl:'https://www.alibaba.com/executive-office-chair-suppliers.html'
  },
  {
    id:'huashi-training-chair-tablet',
    category:'Meble biurowe premium',
    title:'Krzesło szkoleniowo-konferencyjne z pulpitem do pisania',
    use:'sale szkoleniowe, konferencyjne, edukacyjne i centra treningowe',
    purpose:'mobilne miejsce siedzące z powierzchnią roboczą do notowania',
    function:'łączy siedzisko z pulpitem umożliwiającym pracę z dokumentami lub urządzeniem mobilnym',
    supplier:'Guangzhou Huashi Furniture Manufacturing Co., Ltd.',
    supplierYears:5,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/office-furniture-manufacturer-and-supplier.html',
    tradeAssuranceEvidenceUrl:'https://www.alibaba.com/tablet-arm-chair-suppliers.html'
  },
  {
    id:'huashi-visitor-chair',
    category:'Meble biurowe premium',
    title:'Krzesło dla gości i do sal spotkań z konstrukcją biurową',
    use:'recepcje, poczekalnie, sale spotkań, gabinety i przestrzenie obsługi klienta',
    purpose:'zapewnienie miejsca siedzącego dla klientów, gości i uczestników spotkań',
    function:'zapewnia stabilne siedzisko przeznaczone do krótszych i średnich okresów użytkowania',
    supplier:'Guangzhou Huashi Furniture Manufacturing Co., Ltd.',
    supplierYears:5,
    verifiedSupplier:true,
    tradeAssuranceRequired:true,
    supplierEvidenceUrl:'https://www.alibaba.com/supplier/chair-office-pink.html',
    tradeAssuranceEvidenceUrl:'https://www.alibaba.com/office-chair-visitor-suppliers.html'
  }
];

export function strictPublicOfficeOffers(){
  const ids=new Set<string>();
  const titles=new Set<string>();
  return strictQualifiedOfficeOffers.filter((offer)=>{
    const eligible=offer.supplierYears>=3 && offer.verifiedSupplier===true && offer.tradeAssuranceRequired===true;
    const key=offer.title.trim().toLowerCase();
    const unique=!ids.has(offer.id)&&!titles.has(key);
    ids.add(offer.id); titles.add(key);
    return eligible&&unique;
  });
}
