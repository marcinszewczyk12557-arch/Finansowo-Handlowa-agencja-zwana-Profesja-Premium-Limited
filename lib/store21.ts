import type {StoreSpec} from './stores02to06';

export const STORE_21: StoreSpec = {
  id:'SKLEP-021',
  slug:'21-uzdatnianie-filtracja-wody',
  name:'Uzdatnianie i filtracja wody',
  tree:[
    {group:'Filtracja mechaniczna i procesowa',types:['filtry wstępne i dokładne','filtracja workowa i świecowa','systemy samoczyszczące','układy dla instalacji procesowych','dobór po analizie medium, przepływu, ciśnienia i wymaganej dokładności filtracji']},
    {group:'Zmiękczanie i kondycjonowanie',types:['zmiękczacze przemysłowe','układy wielokolumnowe','dozowanie i kondycjonowanie wody','ochrona instalacji i wymienników','konfiguracja po badaniu parametrów wody i profilu zużycia']},
    {group:'Odwrócona osmoza i demineralizacja',types:['systemy RO dla przedsiębiorstw','układy wielostopniowe','demineralizacja i polerowanie wody','odzysk i recyrkulacja','wydajność oraz jakość permeatu wymagają potwierdzenia dla konkretnej konfiguracji']},
    {group:'Dezynfekcja i bezpieczeństwo mikrobiologiczne',types:['systemy UV','dozowanie środków dezynfekcyjnych','monitoring parametrów procesu','rozwiązania dla obiegów technologicznych','dobór i deklaracje skuteczności wyłącznie po weryfikacji dokumentacji i warunków zastosowania']},
    {group:'Monitoring, automatyka i integracja',types:['czujniki jakości wody','pomiary przewodności, pH i przepływu','sterowniki procesowe','zdalny monitoring','integracja BMS/SCADA po potwierdzeniu kompatybilności']},
    {group:'Zastosowania B2B',types:['zakłady produkcyjne','hotele i obiekty usługowe','budynki biurowe i komercyjne','instalacje technologiczne i obiegi zamknięte','projekty wymagające analizy wody, wymagań procesu, zgodności, dokumentacji, ceny i dostępności przed wiążącą ofertą']}
  ]
};
