export type Store02Product = {
  code: string;
  department: string;
  title: string;
  use: string;
};

const departments: Array<{ department: string; products: Array<[string, string]> }> = [
  { department: 'Ultrabooki i laptopy executive', products: [
    ['Ultrabook executive 13–14 cali', 'Mobilna praca kadry zarządzającej i konsultantów'],
    ['Ultrabook executive z łącznością komórkową', 'Praca hybrydowa poza biurem'],
    ['Ultralekki notebook premium', 'Podróże służbowe i prezentacje']
  ]},
  { department: 'Laptopy biznesowe', products: [
    ['Laptop biznesowy 14 cali', 'Standardowe stanowiska pracy firmowej'],
    ['Laptop biznesowy 15–16 cali', 'Praca biurowa i wielozadaniowa'],
    ['Notebook flotowy z rozszerzoną obsługą', 'Standaryzowane wdrożenia dla zespołów']
  ]},
  { department: 'Mobilne stacje robocze', products: [
    ['Mobilna stacja robocza CAD', 'Projektowanie CAD/CAM i inżynieria'],
    ['Mobilna stacja robocza 3D', 'Rendering, wizualizacja i produkcja treści'],
    ['Mobilna stacja robocza data/AI', 'Analiza danych i obciążenia akcelerowane']
  ]},
  { department: 'Laptopy gaming/pro do obciążeń GPU', products: [
    ['Laptop GPU performance', 'Obciążenia graficzne i symulacyjne'],
    ['Laptop creator/pro GPU', 'Montaż wideo, grafika i postprodukcja'],
    ['Laptop high-performance desktop replacement', 'Mobilne stanowiska o wysokiej wydajności']
  ]},
  { department: 'Laptopy rugged i przemysłowe', products: [
    ['Laptop rugged terenowy', 'Praca terenowa i infrastrukturalna'],
    ['Notebook przemysłowy', 'Produkcja, utrzymanie ruchu i diagnostyka'],
    ['Laptop semi-rugged', 'Mobilne zespoły techniczne i serwisowe']
  ]},
  { department: 'Chromebooki i urządzenia cloud-first', products: [
    ['Chromebook biznesowy', 'Praca cloud-first i administracja'],
    ['Chromebook edukacyjny/flotowy', 'Duże wdrożenia zarządzanych urządzeń'],
    ['Cloud-first notebook', 'Dostęp do aplikacji SaaS i VDI']
  ]},
  { department: 'Laptopy 2-w-1 i konwertowalne', products: [
    ['Laptop konwertowalny 360°', 'Prezentacje i mobilna praca dotykowa'],
    ['Notebook 2-w-1 z rysikiem', 'Notatki, podpisy i praca kreatywna'],
    ['Konwertowalny komputer biznesowy', 'Elastyczne stanowisko hybrydowe']
  ]},
  { department: 'Tablety PC i detachable', products: [
    ['Tablet PC z klawiaturą', 'Mobilne stanowisko biurowe'],
    ['Detachable biznesowy', 'Sprzedaż, prezentacje i praca terenowa'],
    ['Tablet PC rugged', 'Logistyka, serwis i środowiska wymagające']
  ]},
  { department: 'Stacje dokujące i replikatory', products: [
    ['Stacja dokująca USB-C', 'Jednoprzewodowe stanowiska biurowe'],
    ['Stacja dokująca Thunderbolt-class', 'Wielomonitorowe stanowiska profesjonalne'],
    ['Uniwersalny replikator portów', 'Standaryzacja różnych flot notebooków']
  ]},
  { department: 'Monitory przenośne', products: [
    ['Monitor przenośny USB-C', 'Drugie stanowisko ekranowe w podróży'],
    ['Przenośny monitor dotykowy', 'Mobilne prezentacje i interakcja'],
    ['Monitor portable dla twórców', 'Podgląd materiału i praca kreatywna']
  ]},
  { department: 'Zasilacze i ładowarki', products: [
    ['Zasilacz USB-C PD do notebooków', 'Standardowe zasilanie mobilnych komputerów'],
    ['Wieloportowa ładowarka biurowa', 'Ładowanie notebooków i urządzeń peryferyjnych'],
    ['Zasilacz podróżny wysokiej mocy', 'Mobilne stanowiska i delegacje']
  ]},
  { department: 'Torby, plecaki i zabezpieczenia', products: [
    ['Torba biznesowa na notebook', 'Transport urządzenia i dokumentów'],
    ['Plecak flotowy na laptop', 'Codzienna mobilność pracowników'],
    ['Etui ochronne/rugged sleeve', 'Ochrona sprzętu w transporcie']
  ]},
  { department: 'Pamięci RAM i dyski SSD', products: [
    ['Moduł pamięci RAM notebook', 'Rozbudowa pamięci operacyjnej'],
    ['Dysk SSD NVMe do notebooków', 'Rozbudowa pamięci masowej i wydajności'],
    ['Zestaw modernizacyjny RAM + SSD', 'Standaryzowana modernizacja floty']
  ]},
  { department: 'Akcesoria klawiaturowe i wskazujące', products: [
    ['Klawiatura mobilna biznesowa', 'Ergonomiczne stanowisko hybrydowe'],
    ['Mysz biznesowa bezprzewodowa', 'Praca biurowa i mobilna'],
    ['Zestaw klawiatura + mysz', 'Standaryzowane wyposażenie stanowisk']
  ]},
  { department: 'Prywatność i zabezpieczenia sprzętowe', products: [
    ['Filtr prywatyzujący ekran', 'Ochrona danych podczas pracy mobilnej'],
    ['Linka zabezpieczająca notebook', 'Fizyczne zabezpieczenie urządzeń'],
    ['Sprzętowy klucz uwierzytelniający', 'Silne uwierzytelnianie użytkowników']
  ]},
  { department: 'Konfiguracje flotowe i obrazy systemowe', products: [
    ['Pakiet przygotowania urządzenia do floty', 'Standaryzacja konfiguracji przed wydaniem'],
    ['Usługa obrazu systemowego', 'Powtarzalne wdrożenia systemu i aplikacji'],
    ['Pakiet ewidencji i oznakowania urządzeń', 'Asset management i identyfikacja floty']
  ]},
  { department: 'Części zamienne i serwis', products: [
    ['Bateria zamienna do notebooka', 'Serwis i przedłużenie cyklu życia urządzeń'],
    ['Zestaw części eksploatacyjnych', 'Naprawy i utrzymanie floty'],
    ['Pakiet diagnostyki i obsługi serwisowej', 'Wsparcie lifecycle urządzeń']
  ]},
  { department: 'Konfiguracje niestandardowe i sourcing na zapytanie', products: [
    ['Notebook według specyfikacji klienta', 'Dobór konfiguracji do wymagań technicznych'],
    ['Sourcing konkretnego modelu lub wariantu', 'Pozyskanie wskazanego urządzenia po weryfikacji'],
    ['Projekt kompletnej floty mobile computing', 'Dobór sprzętu, akcesoriów i wdrożenia']
  ]}
];

export const store02MobileComputingCatalog: Store02Product[] = departments.flatMap((group) =>
  group.products.map(([title, use]) => ({ department: group.department, title, use, code: '' }))
).map((product, index) => ({ ...product, code: `02-${String(index + 1).padStart(3, '0')}` }));
