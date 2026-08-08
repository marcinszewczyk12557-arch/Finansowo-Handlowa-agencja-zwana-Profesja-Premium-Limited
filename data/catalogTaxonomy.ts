export type TaxonomyBranch = { name: string; children?: TaxonomyBranch[] };
const leaf = (...names: string[]): TaxonomyBranch[] => names.map((name) => ({ name }));
const branch = (name: string, ...children: string[]): TaxonomyBranch => ({ name, children: leaf(...children) });

// Pełna nawigacja głównych działów globalnego marketplace B2B. Nazewnictwo jest
// prezentowane po polsku i bez zewnętrznego brandingu. Każdy najniższy element
// otrzymuje w interfejsie dokładnie 10 kwalifikowanych wariantów ofertowych.
const catalogTaxonomy: TaxonomyBranch[] = [
  branch('Odzież i akcesoria','Odzież damska','Odzież męska','Bielizna i odzież domowa','Akcesoria odzieżowe','Odzież dziecięca','Odzież robocza i mundury'),
  branch('Elektronika użytkowa','Telefony i akcesoria','Komputery i laptopy','Tablety','Audio i słuchawki','Kamery i fotografia','Smart wearables','Gaming','Akcesoria elektroniczne'),
  branch('Sport i rozrywka','Fitness i kulturystyka','Sporty outdoor','Sporty zespołowe','Sporty wodne','Golf','Rekreacja i gry','Sprzęt sportowy'),
  branch('Biżuteria, okulary i zegarki','Biżuteria','Zegarki','Okulary','Akcesoria jubilerskie','Opakowania jubilerskie'),
  branch('Rodzice, dzieci i zabawki','Zabawki','Artykuły dla niemowląt','Wózki i foteliki','Meble dziecięce','Artykuły edukacyjne','Opieka nad dzieckiem'),
  branch('Dom i ogród','Wyposażenie domu','Kuchnia i jadalnia','Dekoracje','Ogród i patio','Przechowywanie i organizacja','Tekstylia domowe','Łazienka'),
  branch('Odzież sportowa i outdoorowa','Odzież fitness','Odzież outdoor','Odzież rowerowa','Odzież do sportów wodnych','Odzież drużynowa'),
  branch('Uroda','Makijaż','Pielęgnacja skóry','Pielęgnacja włosów','Paznokcie','Perfumy i zapachy','Sprzęt kosmetyczny'),
  branch('Obuwie i akcesoria','Obuwie damskie','Obuwie męskie','Obuwie sportowe','Obuwie dziecięce','Materiały i akcesoria obuwnicze'),
  branch('Bagaż, torby i walizki','Walizki','Plecaki','Torby biznesowe','Torby podróżne','Torebki','Akcesoria bagażowe'),
  branch('Opakowania i druk','Opakowania papierowe','Opakowania plastikowe','Butelki i pojemniki','Etykiety','Materiały drukarskie','Maszyny pakujące'),
  branch('Higiena osobista i domowa','Pielęgnacja osobista','Higiena jamy ustnej','Artykuły higieniczne','Środki czystości','Pranie','Narzędzia do sprzątania'),
  branch('Zdrowie i medycyna','Urządzenia medyczne','Materiały medyczne','Sprzęt rehabilitacyjny','Diagnostyka i monitoring','Wyposażenie placówek','Ochrona medyczna'),
  branch('Prezenty i rękodzieło','Prezenty biznesowe','Rękodzieło','Dekoracje sezonowe','Pamiątki','Świece i zapachy','Artykuły artystyczne'),
  branch('Artykuły dla zwierząt','Dla psów','Dla kotów','Akwaryści','Ptaki','Małe zwierzęta','Pielęgnacja zwierząt'),
  branch('Szkoła i biuro','Materiały biurowe','Papier i zeszyty','Przybory do pisania','Organizacja biura','Sprzęt prezentacyjny','Materiały szkolne'),
  branch('Maszyny przemysłowe','Maszyny produkcyjne','Maszyny do obróbki metalu','Maszyny do tworzyw','Maszyny tekstylne','Maszyny spożywcze','Maszyny do drewna','Automatyka przemysłowa'),
  branch('Urządzenia i maszyny komercyjne','Wyposażenie gastronomii','Automaty vendingowe','Wyposażenie sklepów','Sprzęt pralniczy','Wyposażenie hotelowe','Sprzęt reklamowy'),
  branch('Maszyny budowlane','Koparki','Ładowarki','Dźwigi','Maszyny drogowe','Maszyny betonowe','Maszyny wiertnicze'),
  branch('Budownictwo i nieruchomości','Materiały budowlane','Drzwi i okna','Podłogi','Łazienki','Kuchnie','Domy prefabrykowane','Systemy budowlane'),
  branch('Meble','Meble domowe','Meble biurowe','Meble hotelowe','Meble restauracyjne','Meble ogrodowe','Meble dziecięce','Meble na wymiar'),
  branch('Oświetlenie','Oświetlenie wnętrz','Oświetlenie zewnętrzne','Oświetlenie komercyjne','Oświetlenie przemysłowe','LED','Sterowanie oświetleniem'),
  branch('AGD','Urządzenia kuchenne','Pranie i suszenie','Chłodnictwo','Klimatyzacja domowa','Małe AGD','Uzdatnianie wody'),
  branch('Akcesoria i narzędzia motoryzacyjne','Elektronika samochodowa','Narzędzia serwisowe','Pielęgnacja auta','Wyposażenie wnętrza','Wyposażenie zewnętrzne'),
  branch('Części i akcesoria pojazdów','Części silnika','Układ hamulcowy','Zawieszenie','Układ kierowniczy','Nadwozie','Oświetlenie pojazdu','Części EV'),
  branch('Narzędzia i hardware','Elektronarzędzia','Narzędzia ręczne','Elementy złączne','Zamki','Materiały ścierne','Narzędzia pomiarowe'),
  branch('Energia odnawialna','Panele fotowoltaiczne','Falowniki','Magazyny energii','Energia wiatrowa','Ładowanie EV','Systemy hybrydowe'),
  branch('Sprzęt i materiały elektryczne','Kable i przewody','Rozdzielnice','Transformatory','Wyłączniki','Zasilacze','Silniki elektryczne'),
  branch('Bezpieczeństwo i ochrona','Monitoring CCTV','Kontrola dostępu','Alarmy','Ochrona przeciwpożarowa','Środki ochrony indywidualnej','Bezpieczeństwo przemysłowe'),
  branch('Transport wewnętrzny','Wózki widłowe','Wózki paletowe','Podnośniki','Przenośniki','Wciągniki','Systemy magazynowe'),
  branch('Aparatura badawcza i pomiarowa','Przyrządy elektryczne','Przyrządy optyczne','Aparatura laboratoryjna','Pomiary środowiskowe','Kontrola jakości','Wagi i mierniki'),
  branch('Przeniesienie napędu','Łożyska','Przekładnie','Pasy i koła pasowe','Łańcuchy','Sprzęgła','Hydraulika i pneumatyka'),
  branch('Komponenty elektroniczne i telekomunikacja','Półprzewodniki','PCB','Czujniki','Złącza','Moduły komunikacyjne','Zasilanie','Komponenty pasywne'),
  branch('Pojazdy i transport','Samochody','Pojazdy elektryczne','Motocykle','Skutery','Rowery elektryczne','Pojazdy użytkowe','Przyczepy'),
  branch('Rolnictwo','Maszyny rolnicze','Nawadnianie','Szklarnie','Narzędzia rolnicze','Hodowla','Leśnictwo'),
  branch('Żywność i napoje','Napoje','Kawa i herbata','Przekąski','Produkty zbożowe','Owoce i warzywa','Produkty spożywcze premium'),
  branch('Surowce tekstylne','Tkaniny','Dzianiny','Włókna','Przędza','Skóra i materiały skóropodobne','Dodatki tekstylne'),
  branch('Metale i stopy','Stal','Aluminium','Miedź','Metale nieżelazne','Profile i blachy','Odlewy'),
  branch('Guma i tworzywa sztuczne','Tworzywa surowe','Wyroby plastikowe','Wyroby gumowe','Folie','Profile i rury','Kompozyty'),
  branch('Chemia','Chemia przemysłowa','Kleje i uszczelniacze','Farby i powłoki','Chemia budowlana','Dodatki i pigmenty','Chemia laboratoryjna'),
  branch('Środowisko','Uzdatnianie wody','Oczyszczanie powietrza','Gospodarka odpadami','Recykling','Monitoring środowiskowy'),
  branch('Usługi produkcyjne','CNC','Odlewanie','Formowanie wtryskowe','Obróbka blach','Druk 3D','Montaż kontraktowy'),
  branch('Usługi biznesowe','Projektowanie','Programowanie i technologia','Logistyka','Kontrola, testy i certyfikacja','Agent zakupowy','Pozostałe usługi B2B'),
];

export default catalogTaxonomy;
