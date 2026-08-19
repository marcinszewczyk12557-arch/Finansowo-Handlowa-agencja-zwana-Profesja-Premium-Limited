export type Store01Product = {
  code: string;
  department: string;
  title: string;
  use: string;
};

type ProductSeed = [department: string, title: string, use: string];

const seeds: ProductSeed[] = [
  ['Smartfony premium i flagowe', 'Smartfon premium 5G klasy executive', 'Mobilne stanowisko pracy dla kadry zarządzającej, sprzedaży i klientów wymagających najwyższej klasy urządzenia.'],
  ['Smartfony premium i flagowe', 'Smartfon fotograficzny premium 5G', 'Dokumentacja foto-wideo, marketing mobilny, social commerce i praca kreatywna.'],
  ['Smartfony premium i flagowe', 'Smartfon premium z pamięcią masową klasy 512 GB+', 'Praca z dużą liczbą dokumentów, aplikacji, zdjęć, materiałów wideo i danych lokalnych.'],

  ['Smartfony biznesowe i flotowe', 'Smartfon biznesowy 5G do floty firmowej', 'Standaryzowane urządzenie dla zespołów sprzedaży, administracji, handlu i pracy hybrydowej.'],
  ['Smartfony biznesowe i flotowe', 'Smartfon biznesowy Dual SIM / eSIM', 'Obsługa numeru firmowego i prywatnego oraz mobilność międzynarodowa.'],
  ['Smartfony biznesowe i flotowe', 'Smartfon flotowy o wydłużonym czasie pracy', 'Długie zmiany robocze, teren, logistyka, serwis i praca mobilna.'],

  ['Smartfony rugged i przemysłowe', 'Smartfon rugged do pracy terenowej', 'Budownictwo, serwis terenowy, magazyny, przemysł i praca w wymagającym otoczeniu.'],
  ['Smartfony rugged i przemysłowe', 'Smartfon przemysłowy z programowalnym przyciskiem', 'Szybka obsługa aplikacji roboczych, PTT, skanowania i procedur terenowych.'],
  ['Smartfony rugged i przemysłowe', 'Smartfon rugged z baterią wysokiej pojemności', 'Wielogodzinna praca poza biurem oraz zastosowania bez stałego dostępu do zasilania.'],

  ['Telefony składane i urządzenia specjalistyczne', 'Składany smartfon biznesowy typu fold', 'Praca wielozadaniowa, prezentacje, dokumenty i komunikacja na dużym ekranie mobilnym.'],
  ['Telefony składane i urządzenia specjalistyczne', 'Kompaktowy smartfon składany typu flip', 'Mobilność kadry zarządzającej, przedstawicieli handlowych i zastosowania reprezentacyjne.'],
  ['Telefony składane i urządzenia specjalistyczne', 'Telefon specjalistyczny do komunikacji zadaniowej', 'Dedykowane zastosowania terenowe, techniczne i operacyjne wymagające prostego urządzenia komunikacyjnego.'],

  ['Tablety biznesowe, przemysłowe i rugged', 'Tablet biznesowy 5G', 'Mobilne prezentacje, CRM, dokumenty, sprzedaż terenowa i praca hybrydowa.'],
  ['Tablety biznesowe, przemysłowe i rugged', 'Tablet rugged do pracy przemysłowej', 'Produkcja, magazyn, budownictwo, inspekcje i serwis terenowy.'],
  ['Tablety biznesowe, przemysłowe i rugged', 'Tablet z klawiaturą do mobilnego stanowiska pracy', 'Zastępowanie lekkiego laptopa w sprzedaży, administracji i pracy w podróży.'],

  ['Smartwatche i urządzenia ubieralne', 'Smartwatch biznesowy LTE', 'Powiadomienia, komunikacja, harmonogram i podstawowa mobilność bez ciągłego korzystania ze smartfona.'],
  ['Smartwatche i urządzenia ubieralne', 'Zegarek rugged GPS do pracy terenowej', 'Nawigacja, lokalizacja i wsparcie pracowników terenowych.'],
  ['Smartwatche i urządzenia ubieralne', 'Opaska ubieralna do identyfikacji i powiadomień', 'Powiadomienia procesowe, identyfikacja użytkownika i zastosowania flotowe.'],

  ['Terminale mobilne, kolektory danych i skanery', 'Kolektor danych Android z czytnikiem kodów', 'Magazyn, kompletacja, inwentaryzacja, handel i logistyka.'],
  ['Terminale mobilne, kolektory danych i skanery', 'Terminal mobilny 5G z ekranem dotykowym', 'Operacje terenowe, kurierzy, serwis, dostawy i zarządzanie zadaniami.'],
  ['Terminale mobilne, kolektory danych i skanery', 'Ręczny skaner kodów 1D/2D z terminalem', 'Szybkie skanowanie produktów, etykiet, paczek i dokumentów.'],

  ['Mobilne POS i terminale sprzedażowe', 'Mobilny terminal POS Android', 'Sprzedaż mobilna, gastronomia, eventy, handel detaliczny i usługi.'],
  ['Mobilne POS i terminale sprzedażowe', 'Terminal sprzedażowy z drukarką paragonową', 'Obsługa sprzedaży, potwierdzeń i dokumentów w jednym urządzeniu.'],
  ['Mobilne POS i terminale sprzedażowe', 'Kompaktowy terminal płatniczo-sprzedażowy', 'Mobilna obsługa klienta i stanowiska sprzedaży o ograniczonej przestrzeni.'],

  ['Routery 4G/5G, hotspoty i modemy mobilne', 'Mobilny router 5G Wi-Fi', 'Łączność zespołów w podróży, tymczasowych biur i instalacji terenowych.'],
  ['Routery 4G/5G, hotspoty i modemy mobilne', 'Hotspot 5G z obsługą wielu urządzeń', 'Tymczasowy dostęp do Internetu dla zespołów, wydarzeń i prezentacji.'],
  ['Routery 4G/5G, hotspoty i modemy mobilne', 'Modem USB / mobilna brama 4G/5G', 'Łączność zapasowa dla laptopów, terminali i urządzeń przemysłowych.'],

  ['Stacje dokujące, huby i replikatory portów', 'Stacja dokująca USB-C do smartfona i tabletu', 'Rozszerzenie urządzenia mobilnego o monitor, sieć i peryferia.'],
  ['Stacje dokujące, huby i replikatory portów', 'Hub USB-C wieloportowy', 'Mobilne podłączanie pamięci, ekranów, sieci i akcesoriów.'],
  ['Stacje dokujące, huby i replikatory portów', 'Stacja dokująco-ładująca do floty terminali', 'Jednoczesne ładowanie i organizacja urządzeń w biurze, magazynie lub punkcie obsługi.'],

  ['Ładowarki, zasilacze, powerbanki i systemy ładowania', 'Ładowarka wieloportowa USB-C PD', 'Centralne zasilanie smartfonów, tabletów i akcesoriów pracowników.'],
  ['Ładowarki, zasilacze, powerbanki i systemy ładowania', 'Powerbank wysokiej pojemności z USB-C PD', 'Zasilanie mobilnych stanowisk pracy i urządzeń terenowych.'],
  ['Ładowarki, zasilacze, powerbanki i systemy ładowania', 'Szafa / stacja wielourządzeniowego ładowania', 'Bezpieczna organizacja i ładowanie floty urządzeń mobilnych.'],

  ['Etui, szkła, uchwyty i zabezpieczenia', 'Etui ochronne klasy biznesowej', 'Ochrona urządzeń flotowych przed codziennym zużyciem.'],
  ['Etui, szkła, uchwyty i zabezpieczenia', 'Wzmocnione etui rugged', 'Ochrona smartfonów i terminali w magazynie, przemyśle i terenie.'],
  ['Etui, szkła, uchwyty i zabezpieczenia', 'Szkło / folia ochronna do ekranów mobilnych', 'Ograniczenie uszkodzeń ekranu i kosztów serwisowych floty.'],

  ['Słuchawki, zestawy konferencyjne i audio mobilne', 'Słuchawki TWS klasy biznesowej', 'Rozmowy, wideokonferencje i praca hybrydowa.'],
  ['Słuchawki, zestawy konferencyjne i audio mobilne', 'Zestaw nagłowny Bluetooth z mikrofonem', 'Call center, mobilna sprzedaż, obsługa klienta i praca biurowa.'],
  ['Słuchawki, zestawy konferencyjne i audio mobilne', 'Mobilny zestaw głośnomówiący konferencyjny', 'Spotkania hybrydowe i konferencje w małych salach oraz w podróży.'],

  ['Kable, adaptery, pamięci i akcesoria USB-C', 'Kabel USB-C wysokiej mocy', 'Ładowanie i transmisja danych dla urządzeń mobilnych.'],
  ['Kable, adaptery, pamięci i akcesoria USB-C', 'Adapter USB-C do HDMI / Ethernet', 'Podłączanie urządzeń mobilnych do prezentacji i sieci przewodowej.'],
  ['Kable, adaptery, pamięci i akcesoria USB-C', 'Pamięć flash USB-C klasy biznesowej', 'Mobilne przenoszenie i archiwizacja danych z urządzeń.'],

  ['Mobilne drukarki i urządzenia peryferyjne', 'Mobilna drukarka termiczna Bluetooth', 'Wydruk etykiet, potwierdzeń, dokumentów transportowych i serwisowych.'],
  ['Mobilne drukarki i urządzenia peryferyjne', 'Przenośna drukarka dokumentowa', 'Wydruk umów, protokołów i dokumentów poza biurem.'],
  ['Mobilne drukarki i urządzenia peryferyjne', 'Mobilna drukarka etykiet', 'Logistyka, magazyn, serwis, oznakowanie i inwentaryzacja.'],

  ['Akcesoria samochodowe i flotowe', 'Uchwyt samochodowy do urządzeń mobilnych', 'Bezpieczne korzystanie z nawigacji i aplikacji flotowych.'],
  ['Akcesoria samochodowe i flotowe', 'Ładowarka samochodowa wieloportowa USB-C', 'Zasilanie kilku urządzeń pracowników mobilnych i ekip serwisowych.'],
  ['Akcesoria samochodowe i flotowe', 'Stacja samochodowa do terminala mobilnego', 'Mocowanie, ładowanie i obsługa terminala w pojeździe firmowym.'],

  ['Urządzenia satelitarne i komunikacja terenowa', 'Telefon satelitarny do komunikacji terenowej', 'Łączność awaryjna i operacyjna poza zasięgiem sieci komórkowej.'],
  ['Urządzenia satelitarne i komunikacja terenowa', 'Przenośny komunikator satelitarny', 'Wiadomości, pozycjonowanie i komunikacja ekip terenowych.'],
  ['Urządzenia satelitarne i komunikacja terenowa', 'Mobilny terminal łączności satelitarnej', 'Zapewnienie łączności zespołom i stanowiskom w lokalizacjach odległych.'],

  ['Części, komponenty, baterie i wyposażenie serwisowe', 'Bateria wymienna do urządzeń mobilnych', 'Serwis i przedłużanie cyklu życia smartfonów, terminali i tabletów.'],
  ['Części, komponenty, baterie i wyposażenie serwisowe', 'Moduł wyświetlacza / digitizera do serwisu', 'Naprawy flot urządzeń po potwierdzeniu kompatybilności konkretnego modelu.'],
  ['Części, komponenty, baterie i wyposażenie serwisowe', 'Zestaw narzędzi serwisowych do elektroniki mobilnej', 'Diagnostyka, demontaż i podstawowe czynności serwisowe.'],

  ['MDM / EMM i zarządzanie flotą urządzeń', 'Pakiet wdrożeniowy MDM dla floty mobilnej', 'Centralna konfiguracja, polityki bezpieczeństwa i zarządzanie urządzeniami.'],
  ['MDM / EMM i zarządzanie flotą urządzeń', 'Konfiguracja kiosk mode dla terminali', 'Ograniczenie urządzenia do określonych aplikacji i procesów roboczych.'],
  ['MDM / EMM i zarządzanie flotą urządzeń', 'Usługa przygotowania i rejestracji floty urządzeń', 'Provisioning, oznaczenie, konfiguracja i przygotowanie urządzeń do wydania użytkownikom.'],

  ['Konfiguracje niestandardowe i sourcing na zapytanie', 'Indywidualna konfiguracja smartfona lub tabletu B2B', 'Dobór urządzenia według parametrów, zastosowania, budżetu i warunków eksploatacji.'],
  ['Konfiguracje niestandardowe i sourcing na zapytanie', 'Sourcing nietypowego urządzenia mobilnego', 'Poszukiwanie urządzeń specjalistycznych niedostępnych w standardowym katalogu.'],
  ['Konfiguracje niestandardowe i sourcing na zapytanie', 'Kompletny zestaw mobilnego stanowiska pracy', 'Połączenie urządzenia, zasilania, ochrony, łączności, peryferiów i konfiguracji w jeden pakiet.']
];

export const store01MobileCatalog: Store01Product[] = seeds.map(([department, title, use], index) => ({
  code: `01-${String(index + 1).padStart(3, '0')}`,
  department,
  title,
  use,
}));
