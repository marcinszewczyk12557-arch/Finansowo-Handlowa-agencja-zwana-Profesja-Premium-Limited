import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf=(...names:string[]):TaxonomyBranch[]=>names.map(name=>({name}));
const node=(name:string,...children:TaxonomyBranch[]):TaxonomyBranch=>({name,children});
const family=(name:string,...items:string[]):TaxonomyBranch=>node(name,...leaf(...items));

// Ostatni pakiet pogłębiający szerokie działy konsumenckie, techniczne i surowcowe.
// Nazewnictwo pozostaje własne dla PROFESJA i służy jako indeks sourcingowy B2B.
export const catalogTaxonomyExpansion4:TaxonomyBranch[]=[
  node('Dom i ogród',
    node('Kuchnia i jadalnia',
      family('Gotowanie','Garnki ze stali nierdzewnej','Garnki aluminiowe','Patelnie non-stick','Patelnie żeliwne','Woki','Brytfanny'),
      family('Przygotowanie żywności','Noże szefa kuchni','Zestawy noży','Deski do krojenia','Tarki','Mandoliny','Akcesoria piekarnicze'),
      family('Serwowanie','Zastawa porcelanowa','Zastawa ceramiczna','Sztućce premium','Szkło stołowe','Naczynia bufetowe','Tace gastronomiczne')
    ),
    node('Ogród i patio',
      family('Meble ogrodowe','Zestawy wypoczynkowe','Stoły tarasowe','Krzesła ogrodowe','Leżaki','Sofy modułowe','Huśtawki'),
      family('Architektura ogrodowa','Pergole aluminiowe','Pergole bioklimatyczne','Altany','Pawilony','Carporty','Zadaszenia tarasowe'),
      family('Nawadnianie ogrodu','Linie kroplujące','Zraszacze wynurzalne','Sterowniki nawadniania','Elektrozawory','Filtry','Pompy ogrodowe'),
      family('Grill i outdoor cooking','Grille gazowe','Grille węglowe','Grille pelletowe','Kuchnie ogrodowe','Piece do pizzy outdoor','Palniki')
    ),
    node('Tekstylia domowe',
      family('Sypialnia','Pościel hotelowa','Pościel bawełniana','Kołdry','Poduszki','Narzuty','Ochraniacze materacy'),
      family('Łazienka','Ręczniki hotelowe','Ręczniki premium','Szlafroki','Dywaniki łazienkowe','Zasłony prysznicowe'),
      family('Dekoracja okien','Zasłony blackout','Firany','Rolety rzymskie','Rolety dzień-noc','Tkaniny dekoracyjne')
    )
  ),

  node('Sport i rozrywka',
    node('Fitness i kulturystyka',
      family('Cardio','Bieżnie komercyjne','Bieżnie domowe','Rowery pionowe','Rowery poziome','Orbitreki','Wioślarze'),
      family('Siłownia','Atlasy wielostanowiskowe','Suwnice Smitha','Ławki regulowane','Stojaki pod sztangę','Wyciągi','Maszyny plate-loaded'),
      family('Wolne ciężary','Hantle stałe','Hantle regulowane','Kettlebells','Sztangi olimpijskie','Obciążenia bumper','Stojaki na ciężary')
    ),
    node('Sporty outdoor',
      family('Camping','Namioty rodzinne','Namioty ekspedycyjne','Śpiwory zimowe','Maty samopompujące','Łóżka turystyczne','Kuchenki campingowe'),
      family('Trekking','Plecaki trekkingowe','Kijki trekkingowe','Raki','Czekany','Stuptuty','Filtry turystyczne'),
      family('Wspinaczka','Uprzęże','Kaski wspinaczkowe','Karabinki','Liny dynamiczne','Przyrządy asekuracyjne','Chwyty wspinaczkowe')
    ),
    node('Sporty wodne',
      family('SUP i surfing','Deski SUP touring','Deski SUP race','Deski SUP all-round','Deski surfingowe','Pompki elektryczne','Wiosła karbonowe'),
      family('Kajaki i łodzie','Kajaki pneumatyczne','Kajaki turystyczne','Kajaki fishing','Pontony','Łodzie RIB','Silniki elektryczne'),
      family('Nurkowanie','Maski','Fajki','Płetwy','Jackets BCD','Automaty oddechowe','Komputery nurkowe')
    )
  ),

  node('Meble',
    node('Meble domowe',
      family('Salon','Sofy modułowe','Sofy narożne','Fotele lounge','Stoliki kawowe','Komody RTV','Regały'),
      family('Sypialnia','Łóżka tapicerowane','Łóżka kontynentalne','Szafki nocne','Komody','Szafy przesuwne','Toaletki'),
      family('Jadalnia','Stoły rozkładane','Stoły kamienne','Krzesła tapicerowane','Krzesła drewniane','Kredensy','Witryny')
    ),
    node('Meble biurowe',
      family('Stanowiska pracy','Biurka elektryczne','Biurka executive','Biurka bench','Kontenery mobilne','Szafy aktowe','Panele akustyczne'),
      family('Siedziska','Fotele ergonomiczne','Fotele executive','Krzesła konferencyjne','Krzesła szkoleniowe','Sofy biurowe','Hokery'),
      family('Sale konferencyjne','Stoły konferencyjne','Stoły modułowe','Media tables','Szafki AV','Mównice','Ściany mobilne')
    ),
    node('Meble hotelowe',
      family('Pokoje hotelowe','Łóżka hotelowe','Zagłówki','Szafki nocne','Biurka hotelowe','Szafy hotelowe','Bagażniki'),
      family('Lobby i lounge','Sofy lobby','Fotele lounge','Stoliki hotelowe','Recepcje','Konsole','Ławki')
    )
  ),

  node('Oświetlenie',
    node('Oświetlenie wnętrz',
      family('Sufitowe','Lampy wiszące','Żyrandole','Plafony','Downlighty','Spoty','Systemy szynowe'),
      family('Dekoracyjne','Kinkiety','Lampy stołowe','Lampy podłogowe','Lampy obrazowe','Neony LED','Taśmy dekoracyjne')
    ),
    node('Oświetlenie komercyjne',
      family('Retail','Track light','Downlight sklepowy','Wall washer','Oświetlenie gablot','Systemy DALI','Sterowanie scenami'),
      family('Hotel i gastronomia','Lampy hotelowe','Kinkiety bedside','Oświetlenie restauracyjne','Lampy dekoracyjne','Oświetlenie awaryjne')
    ),
    node('Oświetlenie przemysłowe',
      family('Magazyn i produkcja','High bay LED','Low bay LED','Linear high bay','Oświetlenie regałowe','Lampy inspekcyjne'),
      family('Warunki specjalne','Oświetlenie przeciwwybuchowe','Lampy IP69K','Lampy chłodnicze','Oświetlenie cleanroom','Lampy awaryjne przemysłowe')
    )
  ),

  node('AGD',
    node('Urządzenia kuchenne',
      family('Zabudowa','Piekarniki elektryczne','Piekarniki parowe','Płyty indukcyjne','Płyty gazowe','Okapy wyspowe','Okapy teleskopowe'),
      family('Wolnostojące','Kuchenki wolnostojące','Zmywarki','Kuchenki mikrofalowe','Kuchenki kompaktowe','Mini piekarniki')
    ),
    node('Chłodnictwo',
      family('Domowe','Lodówki side-by-side','Lodówki french door','Lodówki combi','Zamrażarki skrzyniowe','Zamrażarki szufladowe','Winiarki'),
      family('Specjalistyczne','Kostkarki','Chłodziarki napojowe','Chłodziarki ekspozycyjne','Minibary','Chłodziarki kosmetyczne')
    ),
    node('Małe AGD',
      family('Kawa','Ekspresy automatyczne','Ekspresy kolbowe','Młynki','Spieniacze','Dripy automatyczne'),
      family('Przygotowanie żywności','Blendery kielichowe','Blendery ręczne','Roboty planetarne','Wyciskarki wolnoobrotowe','Frytkownice air fryer'),
      family('Sprzątanie','Odkurzacze pionowe','Roboty odkurzające','Odkurzacze piorące','Mopy parowe','Odkurzacze przemysłowe kompaktowe')
    )
  ),

  node('Narzędzia i hardware',
    node('Elektronarzędzia',
      family('Wiercenie i wkręcanie','Wiertarko-wkrętarki','Wkrętarki udarowe','Wiertarki udarowe','Młotowiertarki SDS+','Młoty SDS Max','Wiertnice magnetyczne'),
      family('Cięcie','Pilarki tarczowe','Pilarki zagłębiarki','Pilarki szablaste','Wyrzynarki','Przecinarki do metalu','Piły ukośne'),
      family('Szlifowanie','Szlifierki kątowe','Szlifierki proste','Szlifierki mimośrodowe','Szlifierki taśmowe','Polerki','Bruzdownice'),
      family('Systemy akumulatorowe','Akumulatory 18V','Akumulatory 40V','Ładowarki szybkie','Ładowarki wielogniazdowe','Adaptery baterii')
    ),
    node('Narzędzia ręczne',
      family('Mechanika','Zestawy nasadowe','Klucze płasko-oczkowe','Klucze dynamometryczne','Szczypce','Ściągacze','Prasy ręczne'),
      family('Elektryka','Śrubokręty izolowane','Szczypce VDE','Zaciskarki','Ściągacze izolacji','Próbniki','Zestawy monterskie')
    )
  ),

  node('Aparatura badawcza i pomiarowa',
    node('Aparatura laboratoryjna',
      family('Przygotowanie próbek','Homogenizatory','Młyny laboratoryjne','Wytrząsarki','Mieszadła magnetyczne','Mieszadła mechaniczne','Sonikatory'),
      family('Separacja','Wirówki stołowe','Wirówki chłodzone','Wirówki wysokoobrotowe','Systemy filtracji próżniowej','Ekstraktory'),
      family('Termika','Inkubatory','Cieplarki','Piece muflowe','Łaźnie wodne','Bloki grzejne','Chłodziarki laboratoryjne')
    ),
    node('Przyrządy elektryczne',
      family('Diagnostyka elektryczna','Multimetry TRMS','Mierniki cęgowe','Mierniki izolacji','Mierniki uziemienia','Testery instalacji','Kamery termowizyjne'),
      family('Analiza sygnałów','Oscyloskopy','Generatory funkcyjne','Analizatory widma','Analizatory logiczne','Liczniki częstotliwości')
    )
  ),

  node('Pojazdy i transport',
    node('Pojazdy użytkowe',
      family('Transport ciężki','Ciągniki siodłowe','Samochody ciężarowe 4x2','Samochody ciężarowe 6x2','Samochody ciężarowe 6x4','Wywrotki','Betonomieszarki'),
      family('Dystrybucja','Vany dostawcze','Podwozia kabinowe','Furgony chłodnicze','Kontenery izotermiczne','Pojazdy kurierskie'),
      family('Specjalne','Śmieciarki','Zamiatarki','Podnośniki koszowe','Pojazdy asenizacyjne','Wozy serwisowe')
    ),
    node('Przyczepy',
      family('Naczepy','Naczepy firanki','Naczepy chłodnie','Naczepy wywrotki','Naczepy platformy','Naczepy cysterny'),
      family('Przyczepy lekkie','Przyczepy skrzyniowe','Przyczepy lawety','Przyczepy gastronomiczne','Przyczepy campingowe','Przyczepy cargo')
    )
  ),

  node('Rolnictwo',
    node('Maszyny rolnicze',
      family('Uprawa gleby','Pługi','Brony talerzowe','Kultywatory','Głębosze','Agregaty uprawowe'),
      family('Siew i nawożenie','Siewniki zbożowe','Siewniki punktowe','Rozsiewacze nawozów','Wozy paszowe','Aplikatory nawozów'),
      family('Zbiór','Kombajny zbożowe','Prasy rolujące','Prasy kostkujące','Sieczkarnie','Kosiarki dyskowe','Zgrabiarki')
    ),
    node('Hodowla',
      family('Bydło','Roboty udojowe','Hale udojowe','Schładzalniki mleka','Karmidła','Poidła','Wentylatory oborowe'),
      family('Drób','Klatki','Systemy pojenia','Systemy karmienia','Inkubatory','Systemy wentylacji','Systemy zbioru jaj')
    )
  ),

  node('Żywność i napoje',
    node('Kawa i herbata',
      family('Kawa','Arabica green bean','Robusta green bean','Kawa palona ziarnista','Kawa mielona','Kawa specialty','Kawa instant'),
      family('Herbata','Herbata czarna','Herbata zielona','Oolong','Herbata biała','Herbaty ziołowe','Matcha')
    ),
    node('Przekąski',
      family('Orzechy i owoce','Migdały','Orzechy nerkowca','Pistacje','Orzechy włoskie','Daktyle','Suszone mango'),
      family('Słodycze','Czekolada','Batony proteinowe','Batony zbożowe','Ciastka','Wafle','Żelki')
    )
  ),

  node('Surowce tekstylne',
    node('Tkaniny',
      family('Odzieżowe','Bawełna poplin','Bawełna twill','Poliester woven','Len','Wiskoza','Tkaniny stretch'),
      family('Techniczne','Cordura','Tkaniny ognioodporne','Tkaniny antystatyczne','Tkaniny wodoodporne','Tkaniny filtracyjne','Geotekstylia'),
      family('Tapicerskie','Welur','Chenille','Boucle','Tkaniny outdoor','Tkaniny automotive','Tkaniny hotelowe')
    ),
    node('Dzianiny',
      family('Odzieżowe','Single jersey','Interlock','Rib','French terry','Fleece','Pique'),
      family('Funkcyjne','Dzianiny sportowe','Dzianiny compression','Dzianiny termiczne','Dzianiny UV','Dzianiny recycled')
    )
  ),

  node('Metale i stopy',
    node('Stal',
      family('Wyroby płaskie','Blachy gorącowalcowane','Blachy zimnowalcowane','Blachy ocynkowane','Blachy nierdzewne','Kręgi stalowe','Blachy ryflowane'),
      family('Wyroby długie','Pręty okrągłe','Pręty zbrojeniowe','Kątowniki','Ceowniki','Dwuteowniki','Profile zamknięte'),
      family('Rury','Rury bezszwowe','Rury spawane','Rury nierdzewne','Rury konstrukcyjne','Rury precyzyjne','Rury kotłowe')
    ),
    node('Aluminium',
      family('Profile','Profile konstrukcyjne','Profile okienne','Profile solarne','Profile LED','Profile przemysłowe','Radiatory'),
      family('Blachy i taśmy','Blachy 1xxx','Blachy 5xxx','Blachy 6xxx','Taśmy','Folie aluminiowe','Płyty narzędziowe')
    )
  ),

  node('Guma i tworzywa sztuczne',
    node('Tworzywa surowe',
      family('Poliolefiny','PE-HD','PE-LD','LLDPE','PP homopolymer','PP copolymer'),
      family('Engineering plastics','ABS','PC','PA6','PA66','POM','PBT','PMMA'),
      family('Recycled polymers','rPET','rHDPE','rPP','rABS','Regranulat mieszany')
    ),
    node('Wyroby gumowe',
      family('Uszczelnienia','O-ringi','Uszczelki płaskie','Simmeringi','Uszczelnienia hydrauliczne','Uszczelnienia pneumatyczne'),
      family('Węże','Węże hydrauliczne','Węże paliwowe','Węże spożywcze','Węże chemiczne','Węże silikonowe')
    )
  ),

  node('Chemia',
    node('Kleje i uszczelniacze',
      family('Kleje konstrukcyjne','Epoksydowe 2K','Poliuretanowe','Metakrylowe','Cyjanoakrylowe','Kleje UV'),
      family('Uszczelniacze','Silikony neutralne','Silikony wysokotemperaturowe','PU sealants','MS polymer','Uszczelniacze butylowe')
    ),
    node('Farby i powłoki',
      family('Przemysłowe','Farby epoksydowe','Farby poliuretanowe','Podkłady antykorozyjne','Powłoki cynkowe','Powłoki ceramiczne'),
      family('Proszkowe','Powłoki poliestrowe','Epoksydowo-poliestrowe','Powłoki strukturalne','Powłoki outdoor','Powłoki niskotemperaturowe')
    )
  )
];

export default catalogTaxonomyExpansion4;
