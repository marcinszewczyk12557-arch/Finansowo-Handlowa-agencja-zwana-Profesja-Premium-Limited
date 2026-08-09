import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf=(...names:string[]):TaxonomyBranch[]=>names.map(name=>({name}));
const node=(name:string,...children:TaxonomyBranch[]):TaxonomyBranch=>({name,children});
const family=(name:string,...items:string[]):TaxonomyBranch=>node(name,...leaf(...items));

export const catalogTaxonomyExpansion2:TaxonomyBranch[]=[
  node('Odzież i akcesoria',
    node('Odzież damska',family('Sukienki','Sukienki koktajlowe','Sukienki biznesowe','Sukienki maxi','Sukienki dzianinowe'),family('Odzież wierzchnia','Płaszcze wełniane','Trencze','Kurtki pikowane','Kurtki softshell'),family('Moda biznesowa','Marynarki','Spodnie garniturowe','Spódnice ołówkowe','Koszule formalne')),
    node('Odzież męska',family('Moda formalna','Garnitury','Marynarki','Koszule formalne','Spodnie wizytowe'),family('Odzież casual','Polo','T-shirty premium','Chinosy','Bluzy','Kurtki miejskie'),family('Odzież techniczna','Softshelle','Kurtki wodoodporne','Odzież termiczna','Odzież trudnopalna')),
    node('Odzież robocza i mundury',family('BHP i przemysł','Kombinezony','Spodnie robocze','Kurtki robocze','Odzież odblaskowa'),family('Medycyna i usługi','Scrubsy','Fartuchy medyczne','Odzież laboratoryjna','Uniformy hotelowe','Uniformy gastronomiczne'))
  ),
  node('Sport i rozrywka',
    node('Fitness i kulturystyka',family('Cardio','Bieżnie komercyjne','Orbitreki','Rowery pionowe','Rowery poziome','Wioślarze'),family('Siłownia','Maszyny stosowe','Brama funkcjonalna','Racki','Ławki','Platformy ciężarowe'),family('Akcesoria treningowe','Hantle','Kettlebells','Gumy oporowe','Maty','Rollery')),
    node('Sporty outdoor',family('Camping','Namioty rodzinne','Namioty ekspedycyjne','Śpiwory','Meble campingowe'),family('Trekking','Plecaki trekkingowe','Kijki','Raki','Czołówki','Filtry wody'),family('Wspinaczka','Uprzęże','Karabinki','Liny','Kaski','Przyrządy asekuracyjne')),
    node('Sporty wodne',family('Paddle i surfing','Deski SUP','Deski surfingowe','Paddleboardy touring','Wiosła carbon'),family('Kajaki i łodzie','Kajaki pneumatyczne','Kajaki sztywne','Pontony','Łodzie wiosłowe'),family('Nurkowanie','Maski','Płetwy','Automaty oddechowe','Pianki','Komputery nurkowe'))
  ),
  node('Uroda',
    node('Pielęgnacja skóry',family('Pielęgnacja twarzy','Serum','Kremy','Maski','Toniki','Oczyszczanie'),family('Kosmetyka profesjonalna','Peelingi','Ampułki','Preparaty gabinetowe','Kosmetyki po zabiegach')),
    node('Sprzęt kosmetyczny',family('Urządzenia facial','Hydrodermabrazja','RF kosmetyczny','Ultradźwięki','Mikroprądy','Analizatory skóry'),family('Wyposażenie salonu','Fotele kosmetyczne','Łóżka SPA','Taborety','Pomocniki','Lampy zabiegowe'),family('Pielęgnacja włosów','Suszarki profesjonalne','Prostownice','Lokówki','Infrazony','Myjnie fryzjerskie'))
  ),
  node('Obuwie i akcesoria',
    node('Obuwie sportowe',family('Bieganie','Buty asfaltowe','Buty trail','Buty startowe','Buty stability'),family('Outdoor','Buty trekkingowe','Buty podejściowe','Buty zimowe','Buty wodoodporne'),family('Sport zespołowy','Korki piłkarskie','Buty halowe','Buty koszykarskie','Buty tenisowe')),
    node('Materiały i akcesoria obuwnicze',family('Komponenty','Podeszwy EVA','Podeszwy gumowe','Wkładki','Zapiętki','Noski'),family('Materiały','Skóra naturalna','PU','Mesh techniczny','Materiały wodoodporne','Dzianiny 3D'))
  ),
  node('Opakowania i druk',
    node('Maszyny pakujące',family('Pakowanie pierwotne','Flow-pack','Doypack','VFFS','HFFS','Termoformierki'),family('Pakowanie wtórne','Kartoniarki','Case packery','Paletyzatory','Owijarki','Zaklejarki kartonów'),family('Znakowanie','Etykieciarki','Drukarki inkjet','Lasery znakujące','Termotransfer','Systemy track&trace')),
    node('Butelki i pojemniki',family('Kosmetyka','Butelki airless','Słoiki kosmetyczne','Pompki','Atomizery','Tubki'),family('Spożywcze','Butelki PET','Słoiki','Pojemniki PP','Pojemniki takeaway','Kanistry spożywcze'),family('Przemysł','Kanistry HDPE','Beczki','IBC','Pojemniki techniczne'))
  ),
  node('Zdrowie i medycyna',
    node('Urządzenia medyczne',family('Diagnostyka obrazowa','USG przenośne','USG stacjonarne','Aparaty RTG','Detektory DR'),family('Monitoring pacjenta','Monitory wieloparametrowe','EKG','Holtery','Pulsoksymetry','Kapnografy'),family('Terapia','Koncentratory tlenu','Pompy infuzyjne','Ssaki','Nebulizatory','Defibrylatory')),
    node('Wyposażenie placówek',family('Sale chorych','Łóżka elektryczne','Szafki przyłóżkowe','Stoliki','Wózki transportowe'),family('Gabinety i zabiegi','Stoły zabiegowe','Lampy operacyjne','Wózki anestezjologiczne','Parawany','Fotele zabiegowe'))
  ),
  node('Szkoła i biuro',
    node('Sprzęt prezentacyjny',family('Prezentacja cyfrowa','Monitory interaktywne','Projektory','Ekrany elektryczne','Systemy bezprzewodowej prezentacji'),family('Konferencje','Mikrofony konferencyjne','Kamery PTZ','Głośniki konferencyjne','Systemy rezerwacji sal')),
    node('Materiały biurowe',family('Archiwizacja','Segregatory','Teczki','Pudła archiwizacyjne','Systemy etykietowania'),family('Organizacja stanowiska','Organizery','Podstawki monitorowe','Ramiona monitorowe','Podnóżki','Maty biurkowe'))
  ),
  node('Maszyny budowlane',
    node('Koparki',family('Koparki kompaktowe','Minikoparki 1-2 t','Minikoparki 3-5 t','Koparki zero-tail'),family('Koparki produkcyjne','Koparki 20-30 t','Koparki 30-50 t','Koparki long reach'),family('Osprzęt','Łyżki','Młoty hydrauliczne','Chwytaki','Szybkozłącza','Wiertnice')),
    node('Ładowarki',family('Kołowe','Ładowarki kompaktowe','Ładowarki 3-5 t','Ładowarki 5-8 t'),family('Teleskopowe','Telehandlery budowlane','Telehandlery obrotowe','Osprzęt teleskopowy')),
    node('Maszyny drogowe',family('Nawierzchnie','Rozściełacze asfaltu','Walce tandemowe','Walce gruntowe','Frezarki'),family('Roboty ziemne','Równiarki','Spycharki','Stabilizatory gruntu','Recyklery'))
  ),
  node('Meble',
    node('Meble biurowe',family('Stanowiska pracy','Biurka elektryczne','Biurka bench','Biurka gabinetowe','Biurka narożne'),family('Siedzenie','Fotele ergonomiczne','Fotele executive','Krzesła konferencyjne','Krzesła task'),family('Przechowywanie','Szafy aktowe','Kontenery','Regały','Szafy zamykane')),
    node('Meble hotelowe',family('Pokoje hotelowe','Łóżka','Zagłówki','Szafy','Biurka hotelowe','Minibary meblowe'),family('Lobby i części wspólne','Sofy lobby','Fotele lounge','Stoliki','Recepcje','Meble restauracyjne')),
    node('Meble ogrodowe',family('Taras','Zestawy lounge','Stoły','Krzesła','Leżaki','Parasole'),family('HoReCa outdoor','Meble restauracyjne','Meble basenowe','Daybed','Pergole'))
  ),
  node('Oświetlenie',
    node('Oświetlenie przemysłowe',family('Hale i magazyny','High bay LED','Linear high bay','Oprawy hermetyczne','Oświetlenie regałowe'),family('Strefy specjalne','Oprawy Ex','Oświetlenie chłodni','Oświetlenie clean-room','Oświetlenie awaryjne')),
    node('Oświetlenie komercyjne',family('Retail','Track light','Downlight','Wall washer','Oświetlenie ekspozycji'),family('Biura','Panele LED','Liniowe systemy LED','Lampy UGR<19','Sterowanie DALI'),family('Hospitality','Lampy dekoracyjne','Kinkiety hotelowe','Oświetlenie restauracyjne','Systemy scen świetlnych'))
  ),
  node('AGD',
    node('Chłodnictwo',family('Domowe','Lodówki side-by-side','French door','Zamrażarki skrzyniowe','Winiarki'),family('Specjalistyczne','Lodówki hotelowe','Lodówki podblatowe','Kostkarki','Chłodziarki napojowe')),
    node('Małe AGD',family('Kawa','Ekspresy automatyczne','Ekspresy kolbowe','Młynki','Spieniacze'),family('Sprzątanie','Roboty sprzątające','Odkurzacze pionowe','Odkurzacze piorące','Odkurzacze przemysłowe'),family('Kuchnia','Blendery','Roboty kuchenne','Air fryer','Czajniki','Wyciskarki'))
  ),
  node('Akcesoria i narzędzia motoryzacyjne',
    node('Narzędzia serwisowe',family('Diagnostyka','Testery OBD','Diagnostyka ciężarowa','Oscyloskopy automotive','Programatory ECU'),family('Warsztat','Podnośniki 2-kolumnowe','Podnośniki nożycowe','Montażownice','Wyważarki','Prasy'),family('Obsługa EV','Testery izolacji HV','Stoły bateryjne','Narzędzia izolowane','Ładowarki serwisowe'))
  ),
  node('Narzędzia i hardware',
    node('Elektronarzędzia',family('Wiercenie i wkręcanie','Wiertarko-wkrętarki','Wkrętarki udarowe','Wiertarki magnetyczne','Młotowiertarki'),family('Cięcie','Pilarki tarczowe','Pilarki szablaste','Przecinarki','Piły stołowe'),family('Szlifowanie','Szlifierki kątowe','Szlifierki mimośrodowe','Szlifierki taśmowe','Polerki')),
    node('Narzędzia pomiarowe',family('Budownictwo','Lasery krzyżowe','Lasery rotacyjne','Dalmierze','Niwelatory'),family('Warsztat','Suwmiarki','Mikrometry','Czujniki zegarowe','Klucze dynamometryczne'))
  ),
  node('Bezpieczeństwo i ochrona',
    node('Monitoring CCTV',family('Kamery','Kamery turret','Bullet','Dome','PTZ','Termowizyjne'),family('Rejestracja','NVR 8-16 kanałów','NVR 32-64 kanały','Serwery VMS','Macierze storage'),family('Analityka','LPR','Detekcja PPE','Liczenie osób','Analityka perymetryczna')),
    node('Kontrola dostępu',family('Identyfikacja','RFID','Biometria twarzy','Odcisk palca','QR'),family('Przejścia','Bramki obrotowe','Tripody','Speed gate','Śluzy','Zamki elektromagnetyczne'))
  ),
  node('Aparatura badawcza i pomiarowa',
    node('Aparatura laboratoryjna',family('Przygotowanie próbek','Homogenizatory','Młyny laboratoryjne','Mieszadła','Wytrząsarki','Sonikatory'),family('Separacja','Wirówki stołowe','Wirówki chłodzone','Wirówki wysokobrotowe','Filtracja próżniowa'),family('Termika','Inkubatory','Suszarki','Piece muflowe','Łaźnie wodne','Chłodziarki laboratoryjne')),
    node('Kontrola jakości',family('Mechanika','Maszyny wytrzymałościowe','Twardościomierze','Młoty Charpy','Testery ścieralności'),family('Środowisko','Komory klimatyczne','Komory solne','Komory UV','Komory termiczne'))
  ),
  node('Przeniesienie napędu',
    node('Hydraulika i pneumatyka',family('Hydraulika','Pompy zębate','Pompy tłoczkowe','Rozdzielacze','Siłowniki','Agregaty'),family('Pneumatyka','Siłowniki pneumatyczne','Zawory','Wyspy zaworowe','FRL','Chwytaki'),family('Próżnia','Pompy próżniowe','Eżektory','Przyssawki','Generatory próżni'))
  ),
  node('Pojazdy i transport',
    node('Pojazdy elektryczne',family('Samochody osobowe EV','Sedany EV','SUV EV','Hatchback EV','Crossovery EV'),family('Pojazdy użytkowe EV','Vany EV','Pickup EV','Mikrobusy EV','Pojazdy komunalne EV'),family('Mikromobilność','Skutery elektryczne','E-bike cargo','E-bike miejskie','Hulajnogi flotowe')),
    node('Pojazdy użytkowe',family('Transport drogowy','Ciągniki siodłowe','Ciężarówki dystrybucyjne','Wywrotki','Chłodnie'),family('Autobusy','Autobusy miejskie','Autobusy elektryczne','Busy turystyczne','Minibusy'))
  ),
  node('Rolnictwo',
    node('Maszyny rolnicze',family('Uprawa','Ciągniki','Pługi','Agregaty','Brony','Głębosze'),family('Siew i nawożenie','Siewniki','Rozsiewacze','Sadzarki','Dozowniki'),family('Zbiór','Kombajny','Prasy','Sieczkarnie','Kosiarki dyskowe')),
    node('Nawadnianie',family('Kroplowe','Taśmy kroplujące','Linie kroplujące','Filtry','Fertygacja'),family('Deszczowanie','Zraszacze','Deszczownie szpulowe','Pivot','Pompy'))
  ),
  node('Żywność i napoje',
    node('Kawa i herbata',family('Kawa','Arabica','Robusta','Kawa speciality','Kawa private label'),family('Herbata','Czarna','Zielona','Biała','Oolong','Ziołowa')),
    node('Produkty premium',family('Produkty gourmet','Czekolada premium','Miody','Trufle i produkty truflowe','Przyprawy premium'),family('Private label','Przekąski private label','Napoje private label','Kawa private label','Sosy private label'))
  ),
  node('Surowce tekstylne',
    node('Tkaniny',family('Odzieżowe','Bawełna','Len','Wiskoza','Poliester','Tkaniny stretch'),family('Techniczne','Cordura','Aramid','Tkaniny trudnopalne','Tkaniny wodoodporne','Tkaniny filtracyjne'),family('Tapicerskie','Welur','Boucle','Tkaniny outdoor','Tkaniny kontraktowe'))
  ),
  node('Metale i stopy',
    node('Stal',family('Wyroby płaskie','Blachy gorącowalcowane','Blachy zimnowalcowane','Blachy ocynkowane','Kręgi'),family('Wyroby długie','Pręty','Profile','Dwuteowniki','Ceowniki','Kątowniki'),family('Rury','Rury bezszwowe','Rury spawane','Rury nierdzewne','Rury konstrukcyjne')),
    node('Aluminium',family('Profile','Profile standardowe','Profile konstrukcyjne','Profile solarne','Profile anodowane'),family('Blachy i płyty','Blachy 1xxx','Blachy 5xxx','Płyty 6xxx','Blachy ryflowane'))
  ),
  node('Guma i tworzywa sztuczne',
    node('Tworzywa surowe',family('Termoplasty','PP','PE-HD','PE-LD','ABS','PC','PA6/PA66'),family('Engineering plastics','POM','PBT','PEEK','PPS','PTFE')),
    node('Wyroby gumowe',family('Uszczelnienia','O-ringi','Uszczelki profilowe','Simmeringi','Membrany'),family('Przewody i maty','Węże EPDM','Węże silikonowe','Maty przemysłowe','Płyty gumowe'))
  ),
  node('Chemia',
    node('Kleje i uszczelniacze',family('Kleje przemysłowe','Epoksydowe','PU','Akrylowe','Cyjanoakrylowe','Hot-melt'),family('Uszczelniacze','Silikony','MS polymer','PU','Uszczelniacze wysokotemperaturowe')),
    node('Farby i powłoki',family('Przemysł','Epoksydowe','PU','Farby proszkowe','Powłoki antykorozyjne'),family('Specjalne','Powłoki ogniochronne','Powłoki chemoodporne','Powłoki marine','Powłoki food-grade'))
  )
];

export default catalogTaxonomyExpansion2;
