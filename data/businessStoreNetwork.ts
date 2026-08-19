export type BusinessStore = {
  number: number;
  slug: string;
  category: string;
  nameEn: string;
  namePl: string;
  description: string;
  departments: string[];
  services: string[];
};

export const businessStoreNetwork: BusinessStore[] = [
  {
    number: 1,
    slug: 'smartfony-i-urzadzenia-mobilne',
    category: 'Smartfony i urządzenia mobilne',
    nameEn: 'Premium Mobile & Communication',
    namePl: 'Smartfony i urządzenia mobilne',
    description: 'Kompletny sklep B2B dla mobilności przedsiębiorstw: od smartfonów i urządzeń rugged po akcesoria, zarządzanie flotą, łączność i wyposażenie mobilnych stanowisk pracy.',
    departments: [
      'Smartfony premium i flagowe',
      'Smartfony biznesowe i flotowe',
      'Smartfony rugged i przemysłowe',
      'Telefony składane i urządzenia specjalistyczne',
      'Tablety biznesowe, przemysłowe i rugged',
      'Smartwatche i urządzenia ubieralne',
      'Terminale mobilne, kolektory danych i skanery',
      'Mobilne POS i terminale sprzedażowe',
      'Routery 4G/5G, hotspoty i modemy mobilne',
      'Stacje dokujące, huby i replikatory portów',
      'Ładowarki, zasilacze, powerbanki i systemy ładowania',
      'Etui, szkła, uchwyty i zabezpieczenia',
      'Słuchawki, zestawy konferencyjne i audio mobilne',
      'Kable, adaptery, pamięci i akcesoria USB-C',
      'Mobilne drukarki i urządzenia peryferyjne',
      'Akcesoria samochodowe i flotowe',
      'Urządzenia satelitarne i komunikacja terenowa',
      'Części, komponenty, baterie i wyposażenie serwisowe',
      'MDM / EMM i zarządzanie flotą urządzeń',
      'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['RFQ i sourcing B2B', 'Konfiguracja flot urządzeń', 'Weryfikacja zgodności i dokumentacji', 'Logistyka i dostawa', 'Opcjonalne finansowanie lub najem', 'Obsługa posprzedażowa i serwisowa']
  },
  {
    number: 2,
    slug: 'laptopy-i-komputery-mobilne',
    category: 'Laptopy i komputery mobilne',
    nameEn: 'Business Mobile Computing',
    namePl: 'Laptopy i komputery mobilne',
    description: 'Pełne portfolio komputerów mobilnych dla firm, pracy hybrydowej, inżynierii, produkcji, terenu i zastosowań specjalistycznych.',
    departments: [
      'Ultrabooki i laptopy executive', 'Laptopy biznesowe', 'Mobilne stacje robocze', 'Laptopy gaming/pro do obciążeń GPU',
      'Laptopy rugged i przemysłowe', 'Chromebooki i urządzenia cloud-first', 'Laptopy 2-w-1 i konwertowalne', 'Tablety PC i detachable',
      'Stacje dokujące i replikatory', 'Monitory przenośne', 'Zasilacze i ładowarki', 'Torby, plecaki i zabezpieczenia',
      'Pamięci RAM i dyski SSD', 'Akcesoria klawiaturowe i wskazujące', 'Prywatność i zabezpieczenia sprzętowe', 'Konfiguracje flotowe i obrazy systemowe',
      'Części zamienne i serwis', 'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['RFQ i sourcing B2B', 'Konfiguracja urządzeń', 'Standaryzacja floty', 'Logistyka i wdrożenie', 'Opcjonalne finansowanie lub najem', 'Serwis i lifecycle management']
  },
  {
    number: 3,
    slug: 'komputery-stacjonarne-i-mini-pc',
    category: 'Komputery stacjonarne i mini PC',
    nameEn: 'Desktop & Mini PC Systems',
    namePl: 'Komputery stacjonarne i mini PC',
    description: 'Kompletne systemy stacjonarne od mini PC i komputerów biurowych po profesjonalne stacje robocze i rozwiązania embedded.',
    departments: [
      'Mini PC', 'Komputery SFF', 'Komputery tower', 'Komputery all-in-one', 'Stacje robocze CPU', 'Stacje robocze GPU/AI',
      'Komputery przemysłowe', 'Komputery fanless', 'Thin client i zero client', 'Systemy embedded', 'Barebone', 'Płyty główne i procesory',
      'Karty graficzne i akceleratory', 'RAM, SSD i pamięć masowa', 'Zasilacze i UPS desktop', 'Obudowy i chłodzenie',
      'Klawiatury, myszy i peryferia', 'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['Dobór konfiguracji', 'Montaż i integracja', 'Testy i dokumentacja', 'Wdrożenie flotowe', 'Opcjonalne finansowanie', 'Serwis i rozbudowa']
  },
  {
    number: 4,
    slug: 'monitory-i-wyswietlacze',
    category: 'Monitory i wyświetlacze',
    nameEn: 'Professional Displays',
    namePl: 'Monitory i wyświetlacze',
    description: 'Wyświetlacze dla biur, projektantów, centrów operacyjnych, handlu, edukacji i środowisk specjalistycznych.',
    departments: [
      'Monitory biurowe', 'Monitory 4K/5K/8K', 'Monitory ultrapanoramiczne', 'Monitory dla twórców i CAD', 'Monitory medyczne i specjalistyczne',
      'Monitory przemysłowe', 'Monitory dotykowe', 'Monitory portable', 'Ekrany konferencyjne', 'Interaktywne tablice', 'Wyświetlacze wielkoformatowe',
      'Video wall', 'Ekrany high-brightness', 'Wyświetlacze outdoor', 'Uchwyty i systemy montażowe', 'KVM, splittery i dystrybucja sygnału',
      'Kalibracja i akcesoria obrazu', 'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['Projekt stanowisk i ścian wizyjnych', 'Dobór parametrów obrazu', 'Montaż i integracja', 'Weryfikacja dokumentacji', 'Logistyka', 'Serwis']
  },
  {
    number: 5,
    slug: 'serwery-i-infrastruktura-it',
    category: 'Serwery i infrastruktura IT',
    nameEn: 'Servers & IT Infrastructure',
    namePl: 'Serwery i infrastruktura IT',
    description: 'Infrastruktura obliczeniowa i pamięciowa dla MŚP, enterprise, centrów danych, wirtualizacji, backupu i obciążeń AI.',
    departments: [
      'Serwery rack', 'Serwery tower', 'Serwery blade', 'Serwery edge', 'Serwery GPU/AI', 'Serwery wirtualizacji', 'NAS', 'SAN',
      'Macierze all-flash', 'JBOD i rozszerzenia storage', 'Kontrolery RAID/HBA', 'Dyski enterprise HDD/SSD/NVMe', 'Pamięć ECC', 'Procesory serwerowe',
      'Szafy rack', 'PDU i zasilanie rack', 'UPS dla infrastruktury IT', 'KVM i konsole rack', 'Chłodzenie rack/data center', 'Backup i archiwizacja',
      'Części hot-swap i spare', 'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['Architektura rozwiązania', 'Sizing i konfiguracja', 'Integracja i testy', 'Dokumentacja i zgodność', 'Logistyka data-center', 'Serwis i lifecycle']
  },
  {
    number: 6,
    slug: 'sieci-i-telekomunikacja',
    category: 'Sieci i telekomunikacja',
    nameEn: 'Networks & Telecommunications',
    namePl: 'Sieci i telekomunikacja',
    description: 'Kompletna infrastruktura LAN, WAN, Wi‑Fi, światłowodowa, operatorska i komunikacyjna dla przedsiębiorstw.',
    departments: [
      'Routery biznesowe i operatorskie', 'Switche L2/L3', 'Switche PoE', 'Switche data-center', 'Access pointy Wi-Fi', 'Kontrolery WLAN',
      'Systemy mesh', 'Modemy i bramy 4G/5G', 'SD-WAN', 'Load balancery', 'Bramki VoIP', 'Telefony IP', 'Centrale IP-PBX', 'Wideotelefony',
      'Radiolinie i mosty bezprzewodowe', 'Anteny i akcesoria RF', 'Transceivery SFP/QSFP', 'Światłowody i patchcordy', 'Okablowanie strukturalne',
      'Patch panele i organizacja kabli', 'Szafy teleinformatyczne', 'Testery sieci', 'Zasilanie PoE i awaryjne', 'Konfiguracje niestandardowe i sourcing na zapytanie'
    ],
    services: ['Projekt sieci', 'Dobór urządzeń', 'Integracja i konfiguracja', 'Pomiary i dokumentacja', 'Logistyka', 'Serwis i rozbudowa']
  }
];

export const getBusinessStoreBySlug = (slug: string) => businessStoreNetwork.find((store) => store.slug === slug);
