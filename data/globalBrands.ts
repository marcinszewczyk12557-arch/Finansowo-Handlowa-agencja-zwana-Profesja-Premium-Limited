import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf = (...names: string[]): TaxonomyBranch[] => names.map((name) => ({ name }));

export const globalBrandsBranch: TaxonomyBranch = {
  name: 'Globalne produkty czołowych producentów',
  children: [
    { name: 'Yamaha', children: [
      { name: 'Instrumenty klawiszowe', children: leaf('Fortepiany cyfrowe', 'Stage pianos', 'Syntezatory', 'Keyboardy profesjonalne') },
      { name: 'Pro Audio', children: leaf('Miksery cyfrowe', 'Kolumny aktywne', 'Wzmacniacze', 'Procesory audio') },
      { name: 'Instrumenty', children: leaf('Gitary i basy', 'Perkusje', 'Instrumenty dęte', 'Akcesoria sceniczne') },
    ]},
    { name: 'Roland', children: [
      { name: 'Klawisze i syntezatory', children: leaf('Stage keyboards', 'Syntezatory', 'Pianina cyfrowe', 'Workstations') },
      { name: 'V-Drums', children: leaf('Zestawy elektroniczne', 'Moduły brzmieniowe', 'Pady i talerze', 'Akcesoria perkusyjne') },
      { name: 'Pro A/V i studio', children: leaf('Miksery i interfejsy', 'Streaming i video', 'Rejestratory', 'Monitory i odsłuch') },
    ]},
    { name: 'JBL Professional', children: [
      { name: 'Live sound', children: leaf('PRX Series', 'SRX Series', 'Subwoofery aktywne', 'Monitory sceniczne') },
      { name: 'Installed audio', children: leaf('Control Series', 'Column speakers', 'Point source', 'Line array') },
      { name: 'Studio i broadcast', children: leaf('Monitory studyjne', 'Systemy referencyjne', 'Subwoofery studyjne', 'Akcesoria instalacyjne') },
    ]},
    { name: 'Pro Audio — rozwiązania wielomarkowe', children: [
      { name: 'Nagłośnienie', children: leaf('Line array', 'Kolumny aktywne', 'Subwoofery', 'Monitory sceniczne') },
      { name: 'Studio', children: leaf('Interfejsy audio', 'Miksery', 'Monitory studyjne', 'Procesory sygnałowe') },
      { name: 'Instalacje', children: leaf('DSP', 'Matryce audio', 'Systemy konferencyjne', 'Audio sieciowe') },
    ]},
    { name: 'Tascam', children: [
      { name: 'Nagrywanie', children: leaf('Rejestratory przenośne', 'Rejestratory wielośladowe', 'Field recorders', 'Broadcast recorders') },
      { name: 'Studio i instalacje', children: leaf('Interfejsy audio', 'Miksery', 'Odtwarzacze instalacyjne', 'Kontrolery') },
      { name: 'Akcesoria', children: leaf('Mikrofony', 'Słuchawki', 'Zasilanie', 'Nośniki i storage') },
    ]},
    { name: 'MSI', children: [
      { name: 'Laptopy', children: leaf('Business & Productivity', 'Creator', 'Gaming', 'Workstation') },
      { name: 'Komputery i komponenty', children: leaf('Desktopy', 'Płyty główne', 'Karty graficzne', 'Mini PC') },
      { name: 'Monitory i peryferia', children: leaf('Monitory gaming', 'Monitory biznesowe', 'Klawiatury', 'Akcesoria') },
    ]},
    { name: 'Lenovo', children: [
      { name: 'ThinkPad', children: leaf('ThinkPad X', 'ThinkPad T', 'ThinkPad P', 'ThinkPad E') },
      { name: 'Yoga i Legion', children: leaf('Yoga', 'Legion', 'LOQ', 'IdeaPad') },
      { name: 'Business IT', children: leaf('ThinkCentre', 'ThinkStation', 'ThinkVision', 'Tablety i akcesoria') },
    ]},
    { name: 'Apple', children: [
      { name: 'Mac', children: leaf('MacBook Air', 'MacBook Pro', 'Mac mini', 'Mac Studio') },
      { name: 'Mobile', children: leaf('iPhone', 'iPad Pro', 'iPad Air', 'iPad mini') },
      { name: 'Akcesoria i display', children: leaf('Studio Display', 'Klawiatury', 'Pencil', 'Akcesoria firmowe') },
    ]},
    { name: 'ASUS', children: [
      { name: 'Business i mobility', children: leaf('ExpertBook', 'Zenbook', 'Vivobook', 'Chromebook') },
      { name: 'Gaming i creator', children: leaf('ROG', 'TUF Gaming', 'ProArt', 'Zenbook Duo') },
      { name: 'Komputery i monitory', children: leaf('Desktopy', 'Mini PC', 'Monitory ProArt', 'Monitory ROG') },
    ]},
    { name: 'Acer', children: [
      { name: 'Business i consumer', children: leaf('TravelMate', 'Swift', 'Aspire', 'Chromebook') },
      { name: 'Gaming', children: leaf('Predator', 'Nitro', 'Monitory gaming', 'Akcesoria gaming') },
      { name: 'Desktop i display', children: leaf('Desktopy', 'All-in-One', 'Monitory', 'Projektory') },
    ]},
    { name: 'HP', children: [
      { name: 'Business', children: leaf('EliteBook', 'ProBook', 'EliteDesk', 'ProDesk') },
      { name: 'Workstation i gaming', children: leaf('ZBook', 'Z Workstation', 'OMEN', 'Victus') },
      { name: 'Display i druk', children: leaf('Monitory', 'Drukarki biurowe', 'Urządzenia wielofunkcyjne', 'Akcesoria IT') },
    ]},
    { name: 'Samsung', children: [
      { name: 'Mobile', children: leaf('Galaxy S', 'Galaxy Z', 'Galaxy Tab', 'Galaxy Book') },
      { name: 'Display', children: leaf('Monitory biznesowe', 'Monitory gaming', 'Commercial displays', 'Telewizory premium') },
      { name: 'IT i storage', children: leaf('SSD', 'Pamięci', 'Akcesoria', 'Digital signage') },
    ]},
    { name: 'LG', children: [
      { name: 'Display', children: leaf('UltraGear', 'UltraFine', 'Monitory biznesowe', 'Digital signage') },
      { name: 'TV i AV', children: leaf('OLED evo', 'QNED', 'Soundbary', 'Commercial TV') },
      { name: 'Business solutions', children: leaf('Displays hotelowe', 'Videowall', 'Monitory medyczne', 'Rozwiązania B2B') },
    ]},
    { name: 'Technics', children: [
      { name: 'Hi-Fi', children: leaf('Gramofony', 'Wzmacniacze', 'Odtwarzacze sieciowe', 'Kolumny') },
      { name: 'Audio premium', children: leaf('Słuchawki', 'True Wireless', 'Systemy stereo', 'Akcesoria audio') },
    ]},
    { name: 'Martin Professional', children: [
      { name: 'Lighting', children: leaf('Moving heads', 'Wash', 'Profile', 'Beam') },
      { name: 'Stage & architectural', children: leaf('LED fixtures', 'Strobes', 'Kontrola DMX', 'Oświetlenie instalacyjne') },
    ]},
    { name: 'Pioneer DJ', children: [
      { name: 'DJ performance', children: leaf('Players', 'DJ mixers', 'Controllers', 'All-in-one systems') },
      { name: 'Monitoring i akcesoria', children: leaf('Monitory DJ', 'Słuchawki DJ', 'Efekty', 'Akcesoria booth') },
    ]},
  ],
};
