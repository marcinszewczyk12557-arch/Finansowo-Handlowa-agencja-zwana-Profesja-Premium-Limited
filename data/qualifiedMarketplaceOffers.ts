export type QualifiedOffer = {
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

// Rejestr ofert dopuszczonych do publicznego katalogu PROFESJA.
// Reguła publikacji: dostawca musi mieć min. 3 lata stażu na platformie,
// status zweryfikowanego / kwalifikowanego dostawcy oraz ochronę transakcji
// typu Trade Assurance lub równoważny, źródłowo potwierdzony program buyer protection.
// Nazwa dostawcy i źródło są danymi wewnętrznymi i nie są eksponowane klientowi.
export const qualifiedOffers: QualifiedOffer[] = [
  {
    id:'light-ogjg-suspended-tube',category:'Oświetlenie profesjonalne',
    title:'Oprawa liniowa LED 2–5 ft do montażu podwieszanego',
    use:'biura, szkoły, sklepy, hale usługowe i ciągi komunikacyjne',
    purpose:'energooszczędne oświetlenie liniowe wnętrz komercyjnych',
    function:'zapewnia równomierne światło robocze i możliwość montażu sufitowego lub podwieszanego',
    supplier:'Jiangmen OGJG Lighting And Electronic Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/led-lights-domestic-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; listing LED ceiling mounted tube light'
  },
  {
    id:'light-ogjg-dimming-batten',category:'Oświetlenie profesjonalne',
    title:'Długowieczna oprawa LED batten 3000–6500K z funkcją ściemniania',
    use:'klatki schodowe, korytarze, zaplecza, obiekty biurowe i edukacyjne',
    purpose:'modernizacja oświetlenia liniowego z regulacją natężenia i temperatury barwowej',
    function:'oświetla przestrzeń liniowo i umożliwia dobór parametrów światła',
    supplier:'Jiangmen OGJG Lighting And Electronic Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/led-lights-domestic-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; listing high lumens dimming linear batten light'
  },
  {
    id:'light-ogjg-office-pendant',category:'Oświetlenie profesjonalne',
    title:'Podwieszana oprawa biurowa LED 4–8 ft z 5-letnią gwarancją producenta',
    use:'sale lekcyjne, biura, sale konferencyjne i stanowiska pracy',
    purpose:'oświetlenie stanowiskowe i ogólne w obiektach komercyjnych',
    function:'tworzy wydajne liniowe światło robocze nad strefą użytkową',
    supplier:'Jiangmen OGJG Lighting And Electronic Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/led-lights-domestic-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; listing office pendant batten light'
  },
  {
    id:'light-unicorn-emergency-triproof',category:'Oświetlenie profesjonalne',
    title:'Wodoodporna oprawa awaryjna LED IP65 tri-proof',
    use:'parkingi, garaże, magazyny, zakłady i strefy techniczne',
    purpose:'oświetlenie w trudniejszych warunkach oraz podtrzymanie awaryjne',
    function:'zapewnia światło robocze przy podwyższonej odporności na wilgoć i pył',
    supplier:'Shenzhen Unicorn Lighting Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/c--tick-light-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; IP65 CE ROHS SAA C-tick listing'
  },
  {
    id:'light-unicorn-sensor-triproof',category:'Oświetlenie profesjonalne',
    title:'Oprawa LED tri-proof 60W z czujnikiem mikrofalowym',
    use:'magazyny, garaże, zaplecza i ciągi komunikacyjne',
    purpose:'automatyczne oświetlenie stref używanych okresowo',
    function:'włącza lub reguluje światło po wykryciu ruchu',
    supplier:'Shenzhen Unicorn Lighting Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/c--tick-light-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; TUV CE approved microwave sensor tri-proof light'
  },
  {
    id:'light-unicorn-emergency-sensor',category:'Oświetlenie profesjonalne',
    title:'Oprawa LED IP65 60W z czujnikiem i funkcją awaryjną',
    use:'obiekty przemysłowe, magazyny, parkingi i strefy komunikacyjne',
    purpose:'połączenie automatyzacji oświetlenia z funkcją awaryjną',
    function:'zapewnia światło sterowane ruchem oraz tryb awaryjny',
    supplier:'Shenzhen Unicorn Lighting Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/c--tick-light-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; 60W IP65 sensor/emergency listing'
  },
  {
    id:'light-gs-ugr16-linear',category:'Oświetlenie profesjonalne',
    title:'Liniowa oprawa LED UGR<16 do klas i biur',
    use:'biura, sale szkoleniowe, szkoły i pracownie',
    purpose:'komfortowe oświetlenie stanowisk pracy wymagających ograniczenia olśnienia',
    function:'zapewnia światło liniowe o obniżonym współczynniku olśnienia',
    supplier:'Shenzhen GS Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/linear-lighting-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; UGR<16 linear light listing'
  },
  {
    id:'light-gs-emergency-linear',category:'Oświetlenie profesjonalne',
    title:'Łączona liniowa oprawa LED 1,2 m 40W z funkcją awaryjną',
    use:'biura, ciągi komunikacyjne, obiekty publiczne i handlowe',
    purpose:'modułowe oświetlenie liniowe z awaryjnym podtrzymaniem',
    function:'łączy sekcje świetlne w ciągi i zapewnia tryb awaryjny',
    supplier:'Shenzhen GS Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/linear-lighting-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; linkable emergency linear pendant listing'
  },
  {
    id:'light-gs-recessed-linear',category:'Oświetlenie profesjonalne',
    title:'Ściemniana liniowa oprawa LED 40–60W do montażu wpuszczanego',
    use:'biura, recepcje, sale spotkań i lokale usługowe',
    purpose:'estetyczne oświetlenie liniowe z regulacją natężenia',
    function:'zapewnia liniowe światło zintegrowane z sufitem',
    supplier:'Shenzhen GS Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/linear-lighting-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 5 YRS; dimmable recessed linear light listing'
  },
  {
    id:'tool-ebic-cordless-drill',category:'Narzędzia profesjonalne',
    title:'Akumulatorowa wiertarko-wkrętarka OEM klasy profesjonalnej',
    use:'montaż, serwis, prace instalacyjne i warsztatowe',
    purpose:'mobilne wiercenie i wkręcanie bez zasilania sieciowego',
    function:'wierci otwory i realizuje prace wkrętarskie',
    supplier:'EBIC Tools Co., Ltd.',supplierYears:8,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/power-tools-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 8 YRS; cordless power tools drill listing'
  },
  {
    id:'tool-ronix-2121',category:'Narzędzia profesjonalne',
    title:'Elektronarzędzie Ronix 2121 z kontrolą przedwydaniową',
    use:'warsztat, serwis, utrzymanie ruchu i prace instalacyjne',
    purpose:'profesjonalne prace techniczne z elektronarzędziem sieciowym lub akumulatorowym zależnie od konfiguracji',
    function:'wykonuje typowe operacje robocze przewidziane dla modelu 2121',
    supplier:'Ronix (Zhangjiagang Bonded Area) Trading Co., Ltd.',supplierYears:4,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/power-tools-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 4 YRS; model 2121 listing'
  },
  {
    id:'tool-ronix-8612c',category:'Narzędzia profesjonalne',
    title:'Wiertarko-wkrętarka akumulatorowa Ronix 12V model 8612C',
    use:'montaż, instalacje, serwis i prace wykończeniowe',
    purpose:'mobilne wiercenie i wkręcanie',
    function:'wierci oraz wkręca z zasilaniem akumulatorowym 12V',
    supplier:'Ronix (Zhangjiagang Bonded Area) Trading Co., Ltd.',supplierYears:4,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/power-tools-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 4 YRS; model 8612C listing'
  },
  {
    id:'tool-ronix-8012',category:'Narzędzia profesjonalne',
    title:'Wiertarko-wkrętarka Li-ion Ronix 12V model 8012',
    use:'prace montażowe, serwisowe i instalacyjne',
    purpose:'kompaktowe narzędzie akumulatorowe do wiercenia i wkręcania',
    function:'realizuje wiercenie oraz dokręcanie elementów złącznych',
    supplier:'Ronix (Zhangjiagang Bonded Area) Trading Co., Ltd.',supplierYears:4,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/power-tools-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 4 YRS; model 8012 listing'
  },
  {
    id:'tool-jiande-22pc',category:'Narzędzia profesjonalne',
    title:'Zestaw 22 wielofunkcyjnych narzędzi domowo-serwisowych',
    use:'serwis mobilny, utrzymanie obiektów, pojazdy i wyposażenie techniczne',
    purpose:'podstawowy zestaw narzędzi do napraw i obsługi',
    function:'grupuje narzędzia ręczne potrzebne do typowych prac serwisowych',
    supplier:'Jiande City Yansheng Electrical Appliance Co., Ltd.',supplierYears:11,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/hardware-tools-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 11 YRS; 22-piece home hardware tools listing'
  },
  {
    id:'tool-jiande-20pc',category:'Narzędzia profesjonalne',
    title:'Zestaw 20 wielofunkcyjnych narzędzi serwisowych',
    use:'serwis, utrzymanie, awaryjne wyposażenie pojazdów i obiektów',
    purpose:'kompaktowy komplet narzędzi do podstawowych prac',
    function:'zapewnia zestaw ręcznych narzędzi do napraw i konserwacji',
    supplier:'Jiande City Yansheng Electrical Appliance Co., Ltd.',supplierYears:11,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/hardware-tools-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 11 YRS; 20-piece home hardware tools listing'
  },
  {
    id:'steel-kunda-bs1387',category:'Stal i instalacje przemysłowe',
    title:'Rura stalowa ocynkowana ogniowo BS1387 2 cale',
    use:'instalacje przemysłowe, konstrukcje, infrastruktura i systemy rurowe zgodnie ze specyfikacją projektu',
    purpose:'transport medium lub zastosowania konstrukcyjne zależnie od klasy i dokumentacji partii',
    function:'tworzy odporny na korozję element rurowy',
    supplier:'Shandong Kunda Steel Co., Ltd.',supplierYears:9,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/trade-assurance-supplier-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 9 YRS; BS1387 galvanized pipe listing'
  },
  {
    id:'steel-kunda-gi-pipe',category:'Stal i instalacje przemysłowe',
    title:'Ocynkowana rura GI do zastosowań konstrukcyjnych i instalacyjnych',
    use:'konstrukcje, instalacje techniczne i infrastruktura',
    purpose:'zastosowania wymagające stalowej rury z ochroną cynkową',
    function:'przenosi obciążenia lub medium zgodnie z parametrami konkretnej partii',
    supplier:'Shandong Kunda Steel Co., Ltd.',supplierYears:9,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/trade-assurance-supplier-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 9 YRS; hot dip GI pipe listing'
  },
  {
    id:'steel-yantai-ck45',category:'Stal i instalacje przemysłowe',
    title:'Rura bezszwowa ciągniona na zimno CK45 / SAE1045',
    use:'hydraulika, przemysł maszynowy, cylindry i elementy precyzyjne',
    purpose:'wykonywanie elementów rurowych wymagających kontrolowanych parametrów materiałowych',
    function:'stanowi precyzyjny półprodukt stalowy do obróbki lub zabudowy',
    supplier:'Yantai Xinpeng Steel Pipe Co., Ltd.',supplierYears:3,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/trade-assurance-supplier-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 3 YRS; CK45 SAE1045 seamless pipe listing'
  },
  {
    id:'steel-yantai-st52',category:'Stal i instalacje przemysłowe',
    title:'Honowana rura ST52 do zastosowań hydraulicznych',
    use:'siłowniki hydrauliczne, układy przemysłowe i budowa maszyn',
    purpose:'precyzyjne zastosowania hydrauliczne wymagające obrobionej powierzchni wewnętrznej',
    function:'tworzy korpus lub półprodukt do cylindrów i układów hydraulicznych',
    supplier:'Yantai Xinpeng Steel Pipe Co., Ltd.',supplierYears:3,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/trade-assurance-supplier-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 3 YRS; ST52 honed tube listing'
  },
  {
    id:'steel-yantai-s45c',category:'Stal i instalacje przemysłowe',
    title:'Rura stalowa S45C / CK45 / AISI1045 walcowana na zimno',
    use:'budowa maszyn, hydraulika, elementy konstrukcyjne i precyzyjne',
    purpose:'produkcja części i podzespołów wymagających stali średniowęglowej',
    function:'stanowi materiał rurowy do dalszej obróbki lub bezpośredniej zabudowy',
    supplier:'Yantai Xinpeng Steel Pipe Co., Ltd.',supplierYears:3,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/trade-assurance-supplier-suppliers.html',evidenceNote:'Gold Supplier / Trade Assurance / 3 YRS; S45C CK45 AISI1045 cold rolling seamless pipe listing'
  },
  {
    id:'power-will-5v12v',category:'Zasilanie i elektronika',
    title:'Zasilacz ścienny 5V/12V z wariantami CE/FCC/SAA',
    use:'elektronika użytkowa, urządzenia peryferyjne i integracje OEM',
    purpose:'stabilizowane zasilanie urządzeń niskonapięciowych',
    function:'konwertuje napięcie sieciowe na wymagane napięcie DC',
    supplier:'Dongguan Will Electronics Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/certified-supply-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 5 YRS; CE FCC SAA 5V/12V adapter listing'
  },
  {
    id:'power-will-ul',category:'Zasilanie i elektronika',
    title:'Zasilacz AC/DC 5V/12V z wariantami UL/CE/GS/BS/SAA',
    use:'projektory, elektronika OEM, urządzenia konsumenckie i komercyjne',
    purpose:'bezpieczne zasilanie zgodne z wymaganiami konkretnego rynku po potwierdzeniu wariantu',
    function:'dostarcza stabilizowane napięcie DC do urządzenia końcowego',
    supplier:'Dongguan Will Electronics Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/certified-supply-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 5 YRS; UL/CE/GS/BS/SAA power adapter listing'
  },
  {
    id:'power-will-eu5v',category:'Zasilanie i elektronika',
    title:'Zasilacz EU 5V 0,5A z wariantem CE/GS',
    use:'mała elektronika, czujniki, akcesoria i urządzenia OEM',
    purpose:'zasilanie urządzeń wymagających 5V DC o małym poborze',
    function:'zamienia napięcie sieciowe na stabilizowane 5V DC',
    supplier:'Dongguan Will Electronics Technology Co., Ltd.',supplierYears:5,verifiedSupplier:true,transactionProtection:true,
    evidenceUrl:'https://www.alibaba.com/certified-supply-suppliers.html',evidenceNote:'Supplier / Trade Assurance / 5 YRS; CE GS 5V 0.5A EU plug listing'
  }
];

export const qualifiedCategories = Array.from(new Set(qualifiedOffers.map((offer)=>offer.category)));

export function publicQualifiedOffers(){
  const ids = new Set<string>();
  const titles = new Set<string>();
  return qualifiedOffers.filter((offer)=>{
    const eligible = offer.supplierYears >= 3 && offer.verifiedSupplier && offer.transactionProtection;
    const unique = !ids.has(offer.id) && !titles.has(offer.title.toLowerCase());
    ids.add(offer.id); titles.add(offer.title.toLowerCase());
    return eligible && unique;
  });
}
