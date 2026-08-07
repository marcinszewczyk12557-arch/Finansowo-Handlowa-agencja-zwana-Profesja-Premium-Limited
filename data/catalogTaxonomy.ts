export type TaxonomyBranch = {
  name: string;
  children?: TaxonomyBranch[];
};

const leaf = (...names: string[]): TaxonomyBranch[] => names.map((name) => ({ name }));

const catalogTaxonomy: TaxonomyBranch[] = [
  { name: 'Smartfony Premium', children: [
    { name: 'Gamingowe', children: leaf('Flagowe', 'Aktywne chłodzenie', 'AMOLED 144–165 Hz', 'Wysoka pamięć RAM') },
    { name: 'Biznesowe', children: leaf('Dual SIM / eSIM', 'Bezpieczne profile', 'Długi czas pracy', 'Łączność 5G') },
    { name: 'Fotograficzne', children: leaf('Aparaty premium', 'Stabilizacja optyczna', 'Zoom optyczny', 'Wideo 4K / 8K') },
    { name: 'Akcesoria', children: leaf('Ładowarki', 'Etui', 'Stacje dokujące', 'Słuchawki') },
  ]},
  { name: 'Laptopy Premium', children: [
    { name: 'Gaming', children: leaf('RTX klasy premium', 'Ekrany 165–240 Hz', '32–96 GB RAM', 'Chłodzenie wydajnościowe') },
    { name: 'AI / Workstation', children: leaf('GPU do AI', 'CAD / CAM', 'Render 3D', 'Obróbka wideo') },
    { name: 'Business', children: leaf('Ultrabooki', 'Mobilne stacje robocze', 'Bezpieczeństwo TPM', 'Windows Pro') },
    { name: 'Akcesoria IT', children: leaf('Monitory', 'Stacje dokujące', 'UPS', 'Peryferia') },
  ]},
  { name: 'Energia i Fotowoltaika', children: [
    { name: 'Fotowoltaika', children: leaf('Instalacje dachowe', 'Instalacje gruntowe', 'Instalacje przemysłowe', 'Carport PV') },
    { name: 'Magazyny energii', children: leaf('Domowe', 'Komercyjne', 'Przemysłowe', 'Kontenerowe BESS') },
    { name: 'Falowniki i EMS', children: leaf('Falowniki hybrydowe', 'Falowniki stringowe', 'Systemy EMS', 'Monitoring energii') },
    { name: 'E-Mobility energia', children: leaf('Wallbox AC', 'Ładowarki DC', 'Integracja PV+EV', 'Zarządzanie mocą') },
  ]},
  { name: 'HVAC', children: [
    { name: 'Klimatyzacja', children: leaf('Split', 'Multisplit', 'Kasetonowa', 'Kanałowa') },
    { name: 'Wentylacja', children: leaf('Centrale wentylacyjne', 'Rekuperatory', 'Wentylatory przemysłowe', 'Kurtyny powietrzne') },
    { name: 'Systemy VRF / VRV', children: leaf('Jednostki zewnętrzne', 'Jednostki wewnętrzne', 'Sterowanie strefowe', 'Integracja BMS') },
    { name: 'Pompy ciepła i chłodnictwo', children: leaf('Powietrze-woda', 'Powietrze-powietrze', 'Chillery', 'Rooftopy') },
  ]},
  { name: 'Meble Premium', children: [
    { name: 'Biuro i zarząd', children: leaf('Biurka executive', 'Fotele gabinetowe', 'Stoły konferencyjne', 'Recepcje') },
    { name: 'Hotel i restauracja', children: leaf('Meble hotelowe', 'Meble restauracyjne', 'Lobby', 'Bary i lady') },
    { name: 'Meble na wymiar', children: leaf('Zabudowy', 'Garderoby', 'Biblioteki', 'Systemy modułowe') },
    { name: 'Materiały premium', children: leaf('Drewno naturalne', 'Kamień', 'Metal', 'Skóra i tkaniny premium') },
  ]},
  { name: 'Drzwi i Bramy Premium', children: [
    { name: 'Drzwi', children: leaf('Zewnętrzne', 'Wewnętrzne', 'Antywłamaniowe', 'Przeciwpożarowe') },
    { name: 'Bramy garażowe', children: leaf('Segmentowe', 'Rolowane', 'Uchylne', 'Automatyczne') },
    { name: 'Bramy przemysłowe', children: leaf('Szybkobieżne', 'Przesuwne', 'Harmonijkowe', 'Dokowe') },
    { name: 'Kontrola dostępu', children: leaf('Automatyka', 'Czytniki', 'Wideodomofony', 'Smart building') },
  ]},
  { name: 'Maszyny i Sprzęt Ciężki', children: [
    { name: 'Maszyny budowlane', children: leaf('Koparki', 'Minikoparki', 'Ładowarki', 'Spycharki') },
    { name: 'Transport bliski', children: leaf('Wózki widłowe', 'Podnośniki', 'Żurawie', 'Wciągniki') },
    { name: 'Maszyny drogowe', children: leaf('Walce', 'Rozściełacze', 'Frezarki drogowe', 'Zagęszczarki') },
    { name: 'Zasilanie i sprężone powietrze', children: leaf('Agregaty', 'Sprężarki', 'Osuszacze', 'Zbiorniki') },
  ]},
  { name: 'Wyposażenie Przedsiębiorstw', children: [
    { name: 'Elektronarzędzia', children: leaf('Wiertarko-wkrętarki', 'Młoty', 'Szlifierki', 'Piły') },
    { name: 'Warsztat', children: leaf('Stoły warsztatowe', 'Wózki narzędziowe', 'Spawarki', 'Urządzenia pomiarowe') },
    { name: 'Magazyn', children: leaf('Regały', 'Wózki', 'Pakowanie', 'Etykietowanie') },
    { name: 'BHP i stanowisko pracy', children: leaf('Odzież ochronna', 'Ochrona głowy', 'Ochrona wzroku', 'Ergonomia') },
  ]},
  { name: 'Wellness Premium', children: [
    { name: 'Fotele masażujące', children: leaf('3D', '4D', 'Zero Gravity', 'Grzanie i kompresja') },
    { name: 'SPA', children: leaf('Jacuzzi', 'Sauny', 'Kabiny infrared', 'Strefy relaksu') },
    { name: 'Fitness', children: leaf('Bieżnie', 'Rowery', 'Orbitreki', 'Trening funkcjonalny') },
    { name: 'Regeneracja', children: leaf('Masażery', 'Kompresja', 'Krioterapia lokalna', 'Fotele relaksacyjne') },
  ]},
  { name: 'Smart Home Premium', children: [
    { name: 'Sterowanie', children: leaf('Panele centralne', 'Aplikacje', 'Sceny automatyczne', 'Asystenci głosowi') },
    { name: 'Bezpieczeństwo', children: leaf('Monitoring', 'Alarmy', 'Czujniki', 'Kontrola dostępu') },
    { name: 'Komfort', children: leaf('Rolety', 'Termostaty', 'Sterowanie HVAC', 'Inteligentne lustra') },
    { name: 'Energia', children: leaf('Pomiar zużycia', 'Smart gniazda', 'Sterowanie PV', 'Zarządzanie ładowaniem EV') },
  ]},
  { name: 'Luxury Interior', children: [
    { name: 'Kominki', children: leaf('Elektryczne 3D', 'Parowe', 'Gazowe', 'Zabudowy premium') },
    { name: 'Dekoracje', children: leaf('Panele ścienne', 'Kamień dekoracyjny', 'Metal dekoracyjny', 'Sztuka użytkowa') },
    { name: 'Łazienki premium', children: leaf('Wanny wolnostojące', 'Kabiny', 'Armatura', 'Ceramika') },
    { name: 'Kuchnie premium', children: leaf('Zabudowy', 'Wyspy', 'Blaty', 'AGD do zabudowy') },
  ]},
  { name: 'Outdoor Luxury', children: [
    { name: 'Meble ogrodowe', children: leaf('Sofy modułowe', 'Stoły', 'Leżaki', 'Daybed') },
    { name: 'Tarasy', children: leaf('Pergole', 'Markizy', 'Zadaszenia', 'Systemy przesuwne') },
    { name: 'Ogród', children: leaf('Kuchnie outdoor', 'Grille premium', 'Donice', 'Oświetlenie ogrodowe') },
    { name: 'Baseny i SPA outdoor', children: leaf('Baseny', 'Jacuzzi', 'Zadaszenia basenowe', 'Technika basenowa') },
  ]},
  { name: 'Premium Lighting', children: [
    { name: 'Wnętrza', children: leaf('Żyrandole', 'Lampy wiszące', 'Kinkiety', 'Lampy podłogowe') },
    { name: 'Architektoniczne', children: leaf('Szynoprzewody', 'Downlight', 'Profile LED', 'Oświetlenie liniowe') },
    { name: 'Przemysłowe', children: leaf('High-bay', 'Hale', 'Magazyny', 'Oświetlenie awaryjne') },
    { name: 'Sterowanie światłem', children: leaf('DALI', 'KNX', '0–10V', 'Smart lighting') },
  ]},
  { name: 'Executive Office', children: [
    { name: 'Gabinet zarządu', children: leaf('Biurka', 'Fotele', 'Biblioteki', 'Stoły spotkań') },
    { name: 'Sala konferencyjna', children: leaf('Stoły', 'Krzesła', 'Ekrany', 'Wideokonferencje') },
    { name: 'Recepcja', children: leaf('Lady recepcyjne', 'Siedziska', 'System kolejkowy', 'Digital signage') },
    { name: 'Akustyka', children: leaf('Panele', 'Budki telefoniczne', 'Ścianki', 'Kabiny spotkań') },
  ]},
  { name: 'Hospitality Premium', children: [
    { name: 'Hotel', children: leaf('Pokoje', 'Lobby', 'Recepcja', 'Housekeeping') },
    { name: 'Restauracja', children: leaf('Sala', 'Kuchnia', 'Bar', 'Catering') },
    { name: 'SPA hotelowe', children: leaf('Sauny', 'Masaż', 'Basen', 'Strefa wellness') },
    { name: 'Systemy hotelowe', children: leaf('Zamki', 'PMS', 'Minibary', 'Digital signage') },
  ]},
  { name: 'Audio Video Premium', children: [
    { name: 'Kino domowe', children: leaf('Projektory', 'Ekrany', 'Audio wielokanałowe', 'Fotele kinowe') },
    { name: 'Sale konferencyjne', children: leaf('Wideokonferencje', 'Mikrofony', 'Monitory', 'Sterowanie AV') },
    { name: 'Digital signage', children: leaf('Videowall', 'LED wall', 'Kioski', 'Monitory reklamowe') },
    { name: 'Audio profesjonalne', children: leaf('Nagłośnienie', 'Miksery', 'Kolumny', 'Systemy bezprzewodowe') },
  ]},
  { name: 'E-Mobility', children: [
    { name: 'Ładowanie AC', children: leaf('Wallbox 11 kW', 'Wallbox 22 kW', 'Słupki', 'Load balancing') },
    { name: 'Ładowanie DC', children: leaf('30–60 kW', '120–180 kW', '240–360 kW', 'HPC') },
    { name: 'Floty', children: leaf('Zarządzanie flotą', 'Rozliczanie energii', 'RFID', 'Backend OCPP') },
    { name: 'Infrastruktura', children: leaf('Rozdzielnie', 'Transformatory', 'Magazyny energii', 'PV carport') },
  ]},
  { name: 'Leisure Premium', children: [
    { name: 'Rekreacja', children: leaf('Stoły bilardowe', 'Piłkarzyki', 'Dart', 'Symulatory') },
    { name: 'Gaming room', children: leaf('Fotele gamingowe', 'Biurka', 'Monitory', 'Akcesoria') },
    { name: 'Strefa klubowa', children: leaf('Bary', 'Siedziska', 'Audio', 'Oświetlenie') },
    { name: 'Rozrywka komercyjna', children: leaf('Arcade', 'VR', 'Symulatory wyścigowe', 'Strefy interaktywne') },
  ]},
];

export default catalogTaxonomy;
