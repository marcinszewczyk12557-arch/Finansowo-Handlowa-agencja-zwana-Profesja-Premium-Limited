import type {StoreSpec} from './stores02to06';

export const STORE_18: StoreSpec = {
  id:'SKLEP-018',
  slug:'18-ladowanie-pojazdow-elektrycznych',
  name:'Ładowanie pojazdów elektrycznych',
  tree:[
    {group:'Stacje ładowania AC',types:['wallboxy dla flot i przedsiębiorstw','stacje słupkowe AC','wielopunktowe systemy parkingowe','urządzenia dobierane po weryfikacji mocy przyłączeniowej i projektu','konfiguracje z autoryzacją użytkowników']},
    {group:'Szybkie ładowanie DC',types:['stacje DC dla flot','ładowarki wysokiej mocy','systemy modułowe','rozwiązania dla hubów ładowania','dobór po analizie pojazdów, mocy, przyłącza i dokumentacji konkretnego modelu']},
    {group:'Zarządzanie energią i mocą',types:['dynamic load balancing','systemy zarządzania mocą','integracja z fotowoltaiką i magazynem energii','harmonogramowanie ładowania','integracja EMS/BMS po weryfikacji protokołów i projektu']},
    {group:'Backend i eksploatacja',types:['platformy zarządzania stacjami','monitoring i diagnostyka','autoryzacja użytkowników','raportowanie sesji','integracje wymagające potwierdzenia kompatybilności i warunków usługodawcy']},
    {group:'Infrastruktura instalacyjna',types:['rozdzielnice i zabezpieczenia','okablowanie i trasy kablowe','fundamenty i słupki','ochrona mechaniczna stanowisk','elementy dobierane na podstawie projektu elektrycznego i warunków lokalnych']},
    {group:'Zastosowania B2B',types:['floty przedsiębiorstw','biurowce i zakłady pracy','hotele i obiekty handlowe','parkingi i centra logistyczne','projekty wymagające audytu lokalizacji, analizy przyłącza, zgodności i dokumentacji przed wiążącą ofertą']}
  ]
};
