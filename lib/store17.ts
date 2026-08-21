import type {StoreSpec} from './stores02to06';

export const STORE_17: StoreSpec = {
  id:'SKLEP-017',
  slug:'17-magazyny-energii',
  name:'Magazyny energii',
  tree:[
    {group:'Systemy bateryjne B2B',types:['modułowe magazyny energii','szafy bateryjne','kontenerowe systemy BESS','systemy dla obiektów komercyjnych i przemysłowych','konfiguracje dobierane po analizie profilu obciążenia i projektu']},
    {group:'Konwersja i sterowanie',types:['PCS i przekształtniki dwukierunkowe','falowniki hybrydowe','systemy EMS','sterowniki mikrogrid','integracja po weryfikacji parametrów sieci i protokołów']},
    {group:'Bezpieczeństwo i infrastruktura',types:['BMS i monitoring ogniw','rozdzielnice i zabezpieczenia','systemy monitoringu temperatury','obudowy i infrastruktura instalacyjna','rozwiązania wymagające weryfikacji projektu ochrony i dokumentacji konkretnego modelu']},
    {group:'Integracja z OZE i siecią',types:['współpraca z fotowoltaiką','peak shaving','zwiększanie autokonsumpcji','zasilanie rezerwowe po kwalifikacji wymagań','integracja z instalacją przedsiębiorstwa i warunkami przyłączenia']},
    {group:'Monitoring i optymalizacja',types:['monitoring stanu energii','analityka profilu zużycia','zdalna diagnostyka','raportowanie pracy systemu','optymalizacja strategii ładowania i rozładowania po analizie danych']},
    {group:'Zastosowania B2B',types:['zakłady przemysłowe','hale i magazyny','obiekty handlowe i biurowe','mikrosieci i infrastruktura krytyczna po kwalifikacji','projekty wymagające audytu, projektu, analizy bezpieczeństwa i weryfikacji zgodności przed wiążącą ofertą']}
  ]
};
