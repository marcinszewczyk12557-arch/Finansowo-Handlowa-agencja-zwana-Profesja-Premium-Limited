import type {StoreSpec} from './stores02to06';

export const STORE_10: StoreSpec = {
  id:'SKLEP-010',
  slug:'10-wyposazenie-recepcji-lobby',
  name:'Wyposażenie recepcji i lobby',
  tree:[
    {group:'Recepcja i obsługa gości',types:['lady recepcyjne modułowe','stanowiska concierge','stanowiska recepcyjne dostępne','zaplecze recepcji','systemy organizacji kolejek']},
    {group:'Strefy oczekiwania',types:['zestawy lounge kontraktowe','fotele i sofy do lobby','ławki modułowe','stoliki recepcyjne','siedziska do stref intensywnego ruchu']},
    {group:'Informacja i wayfinding',types:['totemy informacyjne','tablice kierunkowe','kioski informacyjne','systemy oznakowania pięter','stojaki i ekspozytory informacyjne']},
    {group:'Obsługa cyfrowa',types:['kioski samoobsługowe','monitory informacyjne','systemy digital signage','terminalowe punkty meldunkowe','systemy przywoławcze']},
    {group:'Przechowywanie i bezpieczeństwo',types:['szafy depozytowe','skrytki elektroniczne','szafy na dokumenty','stacje wydawania identyfikatorów','zabudowy zaplecza recepcji']},
    {group:'Komfort i reprezentacja',types:['wieszaki i garderoby kontraktowe','stojaki bagażowe','donice i elementy aranżacji','systemy akustyczne lobby','wyposażenie stref VIP']}
  ]
};
