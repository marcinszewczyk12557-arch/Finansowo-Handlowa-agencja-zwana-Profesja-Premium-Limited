import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf=(...names:string[]):TaxonomyBranch[]=>names.map(name=>({name}));
const node=(name:string,...children:TaxonomyBranch[]):TaxonomyBranch=>({name,children});
const family=(name:string,...items:string[]):TaxonomyBranch=>node(name,...leaf(...items));

// Rozszerzenie wielopoziomowe. Zawiera własne polskie nazewnictwo produktowe
// i służy do pogłębiania drzewa sourcingowego PROFESJA, bez kopiowania opisów ofert.
export const catalogTaxonomyExpansion:TaxonomyBranch[]=[
  node('Elektronika użytkowa',
    node('Telefony i akcesoria',
      family('Smartfony według zastosowania','Smartfony biznesowe','Smartfony fotograficzne','Smartfony gamingowe','Smartfony rugged','Smartfony składane','Smartfony 5G'),
      family('Akcesoria zasilania','Ładowarki GaN','Ładowarki bezprzewodowe','Powerbanki','Stacje ładowania wieloportowe','Kable USB-C','Adaptery podróżne'),
      family('Ochrona i montaż','Etui ochronne','Etui biznesowe','Szkła hartowane','Folie ochronne','Uchwyty samochodowe','Uchwyty biurkowe'),
      family('Części i serwis','Wyświetlacze','Baterie','Moduły kamer','Gniazda ładowania','Taśmy i flexy','Narzędzia serwisowe')
    ),
    node('Komputery i laptopy',
      family('Komputery mobilne','Ultrabooki','Laptopy biznesowe','Laptopy gamingowe','Laptopy rugged','Mobilne stacje robocze','Chromebooki'),
      family('Komputery stacjonarne','Mini PC','Komputery SFF','All-in-One','Stacje robocze','Komputery przemysłowe','Thin client'),
      family('Monitory i obraz','Monitory biurowe','Monitory ultrawide','Monitory gamingowe','Monitory dotykowe','Monitory przemysłowe','Monitory portable'),
      family('Pamięć i storage','Dyski SSD','Dyski NVMe','Dyski HDD','Pamięci RAM','NAS','Obudowy dysków'),
      family('Sieci komputerowe','Routery','Switche','Access pointy','Mesh Wi-Fi','Firewalle sprzętowe','Karty sieciowe')
    ),
    node('Audio i słuchawki',
      family('Audio osobiste','Słuchawki TWS','Słuchawki ANC','Słuchawki studyjne','Słuchawki konferencyjne','Zestawy call-center'),
      family('Audio profesjonalne','Miksery audio','Interfejsy audio','Mikrofony bezprzewodowe','Mikrofony konferencyjne','Monitory studyjne'),
      family('Nagłośnienie','Kolumny aktywne','Systemy PA','Wzmacniacze','Głośniki instalacyjne','Systemy konferencyjne')
    ),
    node('Kamery i fotografia',
      family('Aparaty i kamery','Aparaty bezlusterkowe','Kamery wideo','Kamery sportowe','Kamery 360','Kamery PTZ','Kamery streamingowe'),
      family('Stabilizacja i montaż','Gimbale','Statywy foto','Statywy video','Slider video','Rig kamerowy','Uchwyty samochodowe'),
      family('Oświetlenie foto-video','Lampy LED','Panele LED','Lampy COB','Softboxy','Lampy pierścieniowe','Systemy sterowania światłem')
    )
  ),

  node('Maszyny przemysłowe',
    node('Obróbka metalu',
      family('CNC skrawające','Centra obróbcze pionowe','Centra obróbcze poziome','Tokarki CNC','Tokarko-frezarki','Frezarki bramowe'),
      family('Cięcie metalu','Lasery fiber 2D','Lasery do rur','Plazmy CNC','Waterjet','Piły taśmowe','Nożyce gilotynowe'),
      family('Formowanie blach','Prasy krawędziowe','Prasy hydrauliczne','Wykrawarki','Zaginarki','Walce do blach','Prostowarki'),
      family('Spawanie i łączenie','Spawarki laserowe','Spawarki MIG/MAG','Spawarki TIG','Roboty spawalnicze','Zgrzewarki punktowe','Pozycjonery spawalnicze')
    ),
    node('Automatyka przemysłowa',
      family('Sterowanie','Sterowniki PLC','Panele HMI','Komputery przemysłowe','Sterowniki ruchu','Moduły I/O'),
      family('Napędy','Falowniki','Serwonapędy','Softstarty','Silniki serwo','Silniki krokowe'),
      family('Robotyka','Roboty 6-osiowe','Cobots','Roboty SCARA','Roboty delta','Roboty paletyzujące','Roboty mobilne AMR'),
      family('Wizja i sensoryka','Kamery przemysłowe','Systemy wizyjne','Czujniki laserowe','Enkodery','Kurtyny bezpieczeństwa','Czytniki kodów')
    ),
    node('Maszyny spożywcze',
      family('Przygotowanie produktu','Mieszalniki przemysłowe','Homogenizatory','Krajalnice','Młyny','Emulgatory'),
      family('Obróbka termiczna','Piece tunelowe','Kotły warzelne','Pasteryzatory','Sterylizatory','Frytownice przemysłowe'),
      family('Napełnianie i dozowanie','Napełniarki cieczy','Dozowniki proszków','Napełniarki tłokowe','Monobloki rozlewnicze','Zakrywarki'),
      family('Kontrola jakości żywności','Detektory metalu','Checkweighery','Systemy X-ray','Sortery optyczne','Inspekcja wizyjna')
    ),
    node('Maszyny do tworzyw',
      family('Wtrysk','Wtryskarki hydrauliczne','Wtryskarki elektryczne','Wtryskarki dwukomponentowe','Roboty odbierające','Suszarki tworzywa'),
      family('Wytłaczanie','Wytłaczarki jednoślimakowe','Wytłaczarki dwuślimakowe','Linie do rur','Linie do profili','Linie do folii'),
      family('Recykling tworzyw','Rozdrabniacze','Młyny','Myjki frakcyjne','Granulatory','Linie pelletujące')
    )
  ),

  node('Budownictwo i nieruchomości',
    node('Materiały budowlane',
      family('Izolacje','Wełna mineralna','PIR/PUR','XPS','EPS','Izolacje akustyczne','Membrany dachowe'),
      family('Płyty i systemy suche','Płyty g-k','Płyty cementowe','Płyty OSB','Profile stalowe','Systemy sufitowe'),
      family('Elewacje','Panele elewacyjne','Aluminium kompozytowe','Płyty włóknocementowe','Okładziny kamienne','Systemy fasadowe'),
      family('Chemia budowlana','Zaprawy','Kleje','Hydroizolacje','Grunty','Masy samopoziomujące','Uszczelniacze')
    ),
    node('Drzwi i okna',
      family('Okna','Okna PVC','Okna aluminiowe','Okna drewniane','Okna energooszczędne','Okna przesuwne','Okna przeciwpożarowe'),
      family('Drzwi','Drzwi wejściowe','Drzwi wewnętrzne','Drzwi stalowe','Drzwi aluminiowe','Drzwi przeciwpożarowe','Drzwi automatyczne'),
      family('Bramy','Bramy segmentowe','Bramy rolowane','Bramy przesuwne','Bramy przemysłowe','Napędy do bram')
    ),
    node('Domy prefabrykowane',
      family('Budynki modułowe','Moduły mieszkalne','Moduły biurowe','Moduły hotelowe','Moduły sanitarne','Moduły medyczne'),
      family('Konstrukcje lekkie','Domy szkieletowe','Domy stalowe','Domy kontenerowe','Tiny house','Pawilony handlowe')
    )
  ),

  node('Energia odnawialna',
    node('Panele fotowoltaiczne',
      family('Moduły krzemowe','N-type TOPCon','HJT','PERC','Bifacial glass-glass','Full black'),
      family('Moduły specjalne','BIPV','Panele elastyczne','Panele przenośne','Panele balkonowe','Panele marine')
    ),
    node('Falowniki',
      family('Falowniki sieciowe','Jednofazowe on-grid','Trójfazowe on-grid','Falowniki komercyjne','Falowniki utility-scale'),
      family('Falowniki hybrydowe','Hybrydowe jednofazowe','Hybrydowe trójfazowe','Hybrydowe wysokonapięciowe','Hybrydowe off-grid'),
      family('Mikrofalowniki','Mikrofalowniki 1-panelowe','2-panelowe','4-panelowe','Bramki komunikacyjne')
    ),
    node('Magazyny energii',
      family('Magazyny domowe','Baterie ścienne','Baterie rack','ESS all-in-one','Baterie HV','Baterie LV'),
      family('Magazyny C&I','Szafy ESS','Racki bateryjne','PCS','EMS','Systemy ppoż. BESS'),
      family('BESS kontenerowe','Kontenery 20 ft','Kontenery 40 ft','Kontenery chłodzone cieczą','Kontenery chłodzone powietrzem')
    ),
    node('Ładowanie EV',
      family('AC charging','Wallbox 7 kW','Wallbox 11 kW','Wallbox 22 kW','Słupki AC','Ładowarki fleet'),
      family('DC charging','Ładowarki 30-60 kW','Ładowarki 120-180 kW','Ładowarki 240-360 kW','Ładowarki megawatt','Dyspensery satelitarne'),
      family('Akcesoria EVSE','Kable Type 2','Złącza CCS2','Adaptery','Load balancing','Systemy płatności')
    )
  ),

  node('Sprzęt i materiały elektryczne',
    node('Rozdzielnice',
      family('Rozdzielnice nN','Rozdzielnice główne','Rozdzielnice piętrowe','Rozdzielnice modułowe','Rozdzielnice przemysłowe'),
      family('Automatyka szafowa','Szafy sterownicze','Szafy PLC','Szafy falownikowe','Pulpity operatorskie','Obudowy outdoor')
    ),
    node('Zasilacze',
      family('UPS','UPS online','UPS modularne','UPS data center','UPS przemysłowe','UPS rack'),
      family('Zasilanie DC','Zasilacze DIN','Zasilacze LED','Zasilacze laboratoryjne','Rectifiery telekomunikacyjne','Przetwornice DC/DC')
    ),
    node('Kable i przewody',
      family('Energetyczne','Kable nn','Kable SN','Kable bezhalogenowe','Kable ognioodporne','Kable solarne'),
      family('Sterowanie i dane','Kable sterownicze','Kable ekranowane','Ethernet przemysłowy','Światłowody','Kable sensorowe')
    )
  ),

  node('Transport wewnętrzny',
    node('Wózki widłowe',
      family('Elektryczne','Wózki 3-kołowe','Wózki 4-kołowe','Wózki lithium-ion','Wózki do chłodni'),
      family('Magazynowe','Reach truck','VNA','Order picker','Stacker','Wózki platformowe')
    ),
    node('Systemy magazynowe',
      family('Składowanie','Regały paletowe','Drive-in','Regały przepływowe','Regały wspornikowe','Antresole'),
      family('Automatyzacja magazynu','AS/RS','Shuttle','Miniload','Sortery','AMR','AGV'),
      family('Dokowanie','Rampy przeładunkowe','Uszczelnienia dokowe','Naprowadzacze','Bramy szybkobieżne','Podnośniki dokowe')
    ),
    node('Przenośniki',
      family('Transport jednostkowy','Przenośniki rolkowe','Taśmowe','Łańcuchowe','Modułowe','Spiralne'),
      family('Transport materiałów sypkich','Przenośniki ślimakowe','Kubełkowe','Taśmowe ciężkie','Podajniki wibracyjne')
    )
  ),

  node('Środowisko',
    node('Uzdatnianie wody',
      family('Filtracja','Filtry piaskowe','Filtry węglowe','UF','MF','Filtry workowe','Filtry cartridge'),
      family('Odwrócona osmoza','RO domowe','RO komercyjne','RO przemysłowe','RO dla wody morskiej','RO kontenerowe'),
      family('Dezynfekcja','UV','Ozonatory','Dozowanie chloru','Elektroliza','Systemy CIP')
    ),
    node('Oczyszczanie powietrza',
      family('Filtracja przemysłowa','Odpylacze','Filtry patronowe','Filtry workowe','Cyklony','Scrubbery'),
      family('Jakość powietrza','Oczyszczacze HEPA','Filtry węglowe','UV-C','Systemy wentylacji filtracyjnej','Monitoring IAQ')
    ),
    node('Gospodarka odpadami',
      family('Sortowanie','Sortery optyczne','Separatory metali','Separatory balistyczne','Przesiewacze','Taśmy sortownicze'),
      family('Przetwarzanie','Prasy belujące','Kompaktory','Rozdrabniacze','Granulatory','Kruszarki'),
      family('Recykling','Linie PET','Linie folii','Recykling metali','Recykling elektroniki','Recykling opon')
    )
  ),

  node('Urządzenia i maszyny komercyjne',
    node('Wyposażenie gastronomii',
      family('Obróbka termiczna','Piece konwekcyjno-parowe','Piece do pizzy','Grille','Frytownice','Płyty grillowe'),
      family('Chłodnictwo gastronomiczne','Stoły chłodnicze','Szafy chłodnicze','Szafy mroźnicze','Witryny','Kostkarki'),
      family('Zmywalnia','Zmywarki kapturowe','Zmywarki tunelowe','Zmywarki podblatowe','Wyparzarki','Stacje uzdatniania')
    ),
    node('Automaty vendingowe',
      family('Vending spożywczy','Automaty snack','Automaty napojowe','Automaty świeżej żywności','Automaty lodowe','Automaty mikromarket'),
      family('Vending specjalistyczny','Automaty PPE','Automaty elektroniki','Automaty kosmetyczne','Automaty kwiatowe','Smart lockers')
    )
  ),

  node('Komponenty elektroniczne i telekomunikacja',
    node('Półprzewodniki',
      family('Układy cyfrowe','Mikrokontrolery','Mikroprocesory','FPGA','Pamięci Flash','Pamięci DRAM'),
      family('Układy analogowe','Wzmacniacze operacyjne','ADC/DAC','PMIC','Sterowniki LED','Układy audio'),
      family('Elementy mocy','MOSFET','IGBT','SiC MOSFET','GaN','Diody mocy','Moduły mocy')
    ),
    node('PCB',
      family('Płytki drukowane','PCB 1-2 warstwowe','PCB wielowarstwowe','HDI','Flex PCB','Rigid-flex','Metal core PCB'),
      family('Montaż elektroniki','SMT','THT','BGA','Montaż mieszany','Box build','Test ICT/FCT')
    ),
    node('Moduły komunikacyjne',
      family('Cellular','LTE Cat 1','LTE Cat 4','5G','NB-IoT','LTE-M'),
      family('IoT lokalne','Wi-Fi','Bluetooth','Zigbee','Thread','LoRa'),
      family('Pozycjonowanie','GNSS GPS','GNSS multi-band','RTK','Moduły antenowe','Antenny aktywne')
    )
  ),

  node('Usługi produkcyjne',
    node('CNC',
      family('Obróbka skrawaniem','Frezowanie 3-osiowe','Frezowanie 5-osiowe','Toczenie CNC','Swiss turning','Szlifowanie precyzyjne'),
      family('Materiały CNC','Aluminium','Stal nierdzewna','Stal narzędziowa','Mosiądz','Tytan','Tworzywa konstrukcyjne')
    ),
    node('Obróbka blach',
      family('Cięcie i gięcie','Cięcie laserowe','Cięcie wodą','Gięcie CNC','Walcowanie','Wykrawanie'),
      family('Łączenie i wykończenie','Spawanie MIG/TIG','Spawanie laserowe','Nitowanie','Malowanie proszkowe','Anodowanie','Cynkowanie')
    ),
    node('Formowanie wtryskowe',
      family('Produkcja form','Formy prototypowe','Formy seryjne','Formy wielogniazdowe','Formy hot-runner','Formy 2K'),
      family('Produkcja detali','ABS','PC','PP','PA','POM','TPU')
    ),
    node('Druk 3D',
      family('Technologie polimerowe','FDM','SLA','SLS','MJF','PolyJet'),
      family('Druk metalu','SLM','DMLS','Binder jetting','Post-processing metalu')
    )
  ),

  node('Usługi biznesowe',
    node('Logistyka',
      family('Transport','Transport drogowy','Transport morski','Transport lotniczy','Transport kolejowy','Transport multimodalny'),
      family('Magazynowanie','Fulfillment','Cross-docking','Magazyn celny','Magazynowanie kontraktowe','Pick & pack'),
      family('Obsługa importu','Konsolidacja','Kontrola dokumentów','Koordynacja odprawy','Ubezpieczenie cargo na życzenie','Last mile')
    ),
    node('Kontrola, testy i certyfikacja',
      family('Inspekcje','Pre-production inspection','During production inspection','Pre-shipment inspection','Container loading check'),
      family('Badania laboratoryjne','EMC','LVD','RoHS','REACH','Testy materiałowe','Testy bezpieczeństwa'),
      family('Audyt dostawcy','Audyt fabryki','Audyt jakości','Audyt procesu','Weryfikacja dokumentów')
    ),
    node('Projektowanie',
      family('Projekt produktu','Industrial design','CAD 3D','DFM','Prototypowanie','Dokumentacja techniczna'),
      family('Branding i opakowanie','Projekt opakowań','Private label','Materiały POS','Instrukcje użytkownika','Karty produktowe')
    )
  )
];

export default catalogTaxonomyExpansion;
