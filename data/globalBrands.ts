import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf = (...names: string[]): TaxonomyBranch[] => names.map((name) => ({ name }));

export const globalBrandsBranch: TaxonomyBranch = {
  name: 'Globalne produkty czołowych producentów',
  children: [
    { name: 'Yamaha', children: [
      { name: 'Instrumenty klawiszowe', children: leaf('Fortepiany cyfrowe', 'Stage pianos', 'Syntezatory', 'Keyboardy profesjonalne', 'Workstations') },
      { name: 'Pro Audio', children: leaf('Miksery cyfrowe', 'Kolumny aktywne', 'Wzmacniacze mocy', 'Procesory audio', 'Systemy konferencyjne') },
      { name: 'Instrumenty sceniczne', children: leaf('Gitary i basy', 'Perkusje akustyczne', 'Instrumenty dęte', 'Instrumenty smyczkowe', 'Akcesoria sceniczne') },
    ]},
    { name: 'Roland', children: [
      { name: 'Klawisze i syntezatory', children: leaf('Stage keyboards', 'Syntezatory', 'Pianina cyfrowe', 'Workstations', 'Boutique / kompaktowe') },
      { name: 'V-Drums', children: leaf('Zestawy elektroniczne', 'Moduły brzmieniowe', 'Pady i talerze', 'Trigger systems', 'Akcesoria perkusyjne') },
      { name: 'Pro A/V i studio', children: leaf('Miksery i interfejsy', 'Streaming i video', 'Rejestratory', 'Monitory i odsłuch', 'Kontrolery produkcyjne') },
    ]},
    { name: 'JBL Professional', children: [
      { name: 'Live sound', children: leaf('PRX Series', 'SRX Series', 'EON Series', 'Subwoofery aktywne', 'Monitory sceniczne') },
      { name: 'Installed audio', children: leaf('Control Series', 'Column speakers', 'Point source', 'Line array', 'Ceiling speakers') },
      { name: 'Studio i broadcast', children: leaf('Monitory studyjne', 'Systemy referencyjne', 'Subwoofery studyjne', 'Akcesoria instalacyjne', 'Systemy immersyjne') },
    ]},
    { name: 'Tascam', children: [
      { name: 'Nagrywanie', children: leaf('Rejestratory przenośne', 'Rejestratory wielośladowe', 'Field recorders', 'Broadcast recorders', 'Rejestratory rack') },
      { name: 'Studio i instalacje', children: leaf('Interfejsy audio', 'Miksery', 'Odtwarzacze instalacyjne', 'Kontrolery', 'Network audio') },
      { name: 'Akcesoria', children: leaf('Mikrofony', 'Słuchawki', 'Zasilanie', 'Nośniki i storage', 'Akcesoria rack') },
    ]},
    { name: 'Pioneer DJ / AlphaTheta', children: [
      { name: 'DJ performance', children: leaf('Players', 'DJ mixers', 'Controllers', 'All-in-one systems', 'Samplers / effects') },
      { name: 'Monitoring i akcesoria', children: leaf('Monitory DJ', 'Słuchawki DJ', 'Efekty', 'Akcesoria booth', 'Cases i transport') },
    ]},
    { name: 'Technics', children: [
      { name: 'Hi-Fi', children: leaf('Gramofony', 'Wzmacniacze', 'Odtwarzacze sieciowe', 'Kolumny', 'Systemy all-in-one') },
      { name: 'Audio premium', children: leaf('Słuchawki', 'True Wireless', 'Systemy stereo', 'Akcesoria audio', 'Komponenty referencyjne') },
    ]},
    { name: 'Shure', children: [
      { name: 'Mikrofony', children: leaf('Wokalne', 'Instrumentalne', 'Broadcast', 'Lavalier', 'Shotgun') },
      { name: 'Wireless', children: leaf('Systemy cyfrowe', 'Systemy rack', 'In-ear monitoring', 'Bodypack', 'Akcesoria RF') },
      { name: 'Konferencje', children: leaf('Microflex', 'Procesory DSP', 'Mikrofony sufitowe', 'Systemy dyskusyjne', 'Sieciowe audio') },
    ]},
    { name: 'Sennheiser', children: [
      { name: 'Professional audio', children: leaf('Mikrofony', 'Wireless', 'Broadcast', 'Touring', 'In-ear monitoring') },
      { name: 'Business communication', children: leaf('TeamConnect', 'Mikrofony sufitowe', 'Conference audio', 'Słuchawki biznesowe', 'Akcesoria UC') },
    ]},
    { name: 'Audio-Technica', children: [
      { name: 'Studio i live', children: leaf('Mikrofony studyjne', 'Mikrofony dynamiczne', 'Słuchawki monitorowe', 'Wireless', 'Akcesoria') },
      { name: 'Turntables', children: leaf('Gramofony Hi-Fi', 'Gramofony DJ', 'Wkładki', 'Headshelle', 'Akcesoria winylowe') },
    ]},
    { name: 'QSC', children: [
      { name: 'Live sound', children: leaf('K Series', 'CP Series', 'Subwoofery', 'Miksery TouchMix', 'Wzmacniacze') },
      { name: 'Q-SYS', children: leaf('Core processors', 'Sieciowe audio', 'Video collaboration', 'Sterowanie', 'Głośniki instalacyjne') },
    ]},
    { name: 'RCF', children: [
      { name: 'Touring', children: leaf('Line array', 'Kolumny aktywne', 'Subwoofery', 'Monitory', 'Wzmacniacze') },
      { name: 'Installed sound', children: leaf('Kolumny instalacyjne', 'Ceiling speakers', 'DSP', 'Matryce', 'Akcesoria montażowe') },
    ]},
    { name: 'Pro Audio — rozwiązania wielomarkowe', children: [
      { name: 'Nagłośnienie', children: leaf('Line array', 'Kolumny aktywne', 'Subwoofery', 'Monitory sceniczne', 'Systemy przenośne') },
      { name: 'Studio', children: leaf('Interfejsy audio', 'Miksery', 'Monitory studyjne', 'Procesory sygnałowe', 'Kontrolery') },
      { name: 'Instalacje', children: leaf('DSP', 'Matryce audio', 'Systemy konferencyjne', 'Audio sieciowe', 'Sterowanie AV') },
      { name: 'Broadcast i streaming', children: leaf('Rejestratory', 'Miksery streamingowe', 'Mikrofony broadcast', 'Video switchery', 'Streaming encoders') },
    ]},
    { name: 'MSI', children: [
      { name: 'Laptopy', children: leaf('Business & Productivity', 'Creator', 'Gaming', 'Workstation', 'AI PC') },
      { name: 'Komputery i komponenty', children: leaf('Desktopy', 'Płyty główne', 'Karty graficzne', 'Mini PC', 'Zasilacze / chłodzenie') },
      { name: 'Monitory i peryferia', children: leaf('Monitory gaming', 'Monitory biznesowe', 'Klawiatury', 'Myszy', 'Akcesoria') },
    ]},
    { name: 'Lenovo', children: [
      { name: 'ThinkPad', children: leaf('ThinkPad X', 'ThinkPad T', 'ThinkPad P', 'ThinkPad E', 'ThinkPad L') },
      { name: 'Yoga i Legion', children: leaf('Yoga', 'Legion', 'LOQ', 'IdeaPad', 'Chromebook') },
      { name: 'Business IT', children: leaf('ThinkCentre', 'ThinkStation', 'ThinkVision', 'Tablety', 'Stacje dokujące i akcesoria') },
    ]},
    { name: 'Apple', children: [
      { name: 'Mac', children: leaf('MacBook Air', 'MacBook Pro', 'Mac mini', 'Mac Studio', 'iMac') },
      { name: 'Mobile', children: leaf('iPhone', 'iPad Pro', 'iPad Air', 'iPad mini', 'Apple Watch') },
      { name: 'Akcesoria i display', children: leaf('Studio Display', 'Klawiatury', 'Pencil', 'AirPods', 'Akcesoria firmowe') },
    ]},
    { name: 'ASUS', children: [
      { name: 'Business i mobility', children: leaf('ExpertBook', 'Zenbook', 'Vivobook', 'Chromebook', 'ExpertCenter') },
      { name: 'Gaming i creator', children: leaf('ROG', 'TUF Gaming', 'ProArt', 'Zenbook Duo', 'ROG Ally') },
      { name: 'Komputery i monitory', children: leaf('Desktopy', 'Mini PC', 'Monitory ProArt', 'Monitory ROG', 'Płyty i komponenty') },
    ]},
    { name: 'Acer', children: [
      { name: 'Business i consumer', children: leaf('TravelMate', 'Swift', 'Aspire', 'Chromebook', 'Extensa') },
      { name: 'Gaming', children: leaf('Predator', 'Nitro', 'Monitory gaming', 'Akcesoria gaming', 'Desktop gaming') },
      { name: 'Desktop i display', children: leaf('Desktopy', 'All-in-One', 'Monitory', 'Projektory', 'Mini PC') },
    ]},
    { name: 'HP', children: [
      { name: 'Business', children: leaf('EliteBook', 'ProBook', 'EliteDesk', 'ProDesk', 'Elite Mini') },
      { name: 'Workstation i gaming', children: leaf('ZBook', 'Z Workstation', 'OMEN', 'Victus', 'Thin clients') },
      { name: 'Display i druk', children: leaf('Monitory', 'Drukarki biurowe', 'Urządzenia wielofunkcyjne', 'Plotery', 'Akcesoria IT') },
    ]},
    { name: 'Dell', children: [
      { name: 'Business', children: leaf('Latitude', 'Precision', 'OptiPlex', 'UltraSharp', 'Docking') },
      { name: 'Performance', children: leaf('XPS', 'Alienware', 'Workstations', 'Gaming monitors', 'Akcesoria') },
      { name: 'Infrastructure', children: leaf('PowerEdge', 'Storage', 'Networking', 'UPS', 'Enterprise accessories') },
    ]},
    { name: 'Samsung', children: [
      { name: 'Mobile', children: leaf('Galaxy S', 'Galaxy Z', 'Galaxy Tab', 'Galaxy Book', 'Galaxy Watch') },
      { name: 'Display', children: leaf('Monitory biznesowe', 'Monitory gaming', 'Commercial displays', 'Telewizory premium', 'LED signage') },
      { name: 'IT i storage', children: leaf('SSD', 'Pamięci', 'Akcesoria', 'Digital signage', 'Portable storage') },
    ]},
    { name: 'LG', children: [
      { name: 'Display', children: leaf('UltraGear', 'UltraFine', 'Monitory biznesowe', 'Digital signage', 'OLED monitors') },
      { name: 'TV i AV', children: leaf('OLED evo', 'QNED', 'Soundbary', 'Commercial TV', 'Projektory') },
      { name: 'Business solutions', children: leaf('Displays hotelowe', 'Videowall', 'Monitory medyczne', 'Rozwiązania B2B', 'Interactive displays') },
    ]},
    { name: 'Sony', children: [
      { name: 'Professional display', children: leaf('BRAVIA Professional', 'Monitory referencyjne', 'Projektory laserowe', 'Digital signage', 'Crystal LED') },
      { name: 'Audio i video', children: leaf('Słuchawki', 'Soundbary', 'Kamery', 'Aparaty', 'Akcesoria AV') },
      { name: 'Broadcast', children: leaf('Kamery studyjne', 'PTZ', 'Monitory broadcast', 'Switchery', 'Storage / media') },
    ]},
    { name: 'Bose Professional', children: [
      { name: 'Installed audio', children: leaf('DesignMax', 'FreeSpace', 'ArenaMatch', 'Subwoofery', 'Wzmacniacze') },
      { name: 'Business audio', children: leaf('Systemy konferencyjne', 'Głośniki sufitowe', 'Kolumny', 'DSP', 'Akcesoria montażowe') },
    ]},
    { name: 'Martin Professional', children: [
      { name: 'Lighting', children: leaf('Moving heads', 'Wash', 'Profile', 'Beam', 'Hybrid') },
      { name: 'Stage & architectural', children: leaf('LED fixtures', 'Strobes', 'Kontrola DMX', 'Oświetlenie instalacyjne', 'Atmospherics') },
    ]},
    { name: 'Epson', children: [
      { name: 'Projection', children: leaf('Projektory biznesowe', 'Projektory instalacyjne', 'Laser 4K', 'Short throw', 'Interactive projection') },
      { name: 'Business print', children: leaf('Drukarki biurowe', 'EcoTank Business', 'WorkForce', 'Skanery', 'Druk wielkoformatowy') },
    ]},
    { name: 'Canon', children: [
      { name: 'Imaging', children: leaf('EOS R', 'Cinema EOS', 'Obiektywy RF', 'Kamery PTZ', 'Akcesoria produkcyjne') },
      { name: 'Business print', children: leaf('imageRUNNER', 'imagePRESS', 'Plotery', 'Skanery', 'Urządzenia wielofunkcyjne') },
    ]},
  ],
};
