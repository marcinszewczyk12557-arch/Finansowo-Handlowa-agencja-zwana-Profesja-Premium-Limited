import type {StoreSpec} from './stores02to06';

export const STORE_20: StoreSpec = {
  id:'SKLEP-020',
  slug:'20-pompy-ciepla',
  name:'Pompy ciepła',
  tree:[
    {group:'Pompy ciepła powietrze–woda',types:['systemy monoblok dla obiektów B2B','systemy split dla instalacji grzewczych','układy nisko- i średniotemperaturowe','przygotowanie ciepłej wody użytkowej','dobór po audycie zapotrzebowania cieplnego, instalacji i dokumentacji konkretnego modelu']},
    {group:'Pompy ciepła gruntowe i woda–woda',types:['systemy solanka–woda','systemy woda–woda','dolne źródła pionowe i poziome','układy dla większych obiektów komercyjnych','konfiguracje wymagające projektu źródła, badań warunków i potwierdzenia parametrów urządzenia']},
    {group:'Systemy hybrydowe i kaskadowe',types:['kaskady pomp ciepła','układy hybrydowe ze źródłem szczytowym','integracja z fotowoltaiką i magazynem energii','modernizacja istniejących instalacji','dobór po analizie hydraulicznej, energetycznej i sterowania']},
    {group:'Hydraulika i dystrybucja ciepła',types:['bufory i zasobniki','wymienniki i grupy pompowe','ogrzewanie i chłodzenie płaszczyznowe','fan-coile i odbiorniki niskotemperaturowe','elementy dobierane po potwierdzeniu kompatybilności i parametrów projektu']},
    {group:'Sterowanie, monitoring i BMS',types:['sterowniki systemowe','czujniki i liczniki energii','zdalny monitoring','integracja BMS/EMS','protokoły i integracje wyłącznie po potwierdzeniu kompatybilności konkretnego rozwiązania']},
    {group:'Zastosowania B2B',types:['biura i obiekty usługowe','hale i magazyny','hotele i obiekty wielofunkcyjne','modernizacje źródeł ciepła','projekty wymagające audytu energetycznego, obliczeń, warunków instalacyjnych, zgodności i dokumentacji przed wiążącą ofertą']}
  ]
};
