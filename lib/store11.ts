import type {StoreSpec} from './stores02to06';

export const STORE_11: StoreSpec = {
  id:'SKLEP-011',
  slug:'11-oswietlenie-profesjonalne',
  name:'Oświetlenie profesjonalne',
  tree:[
    {group:'Biura i obiekty komercyjne',types:['oprawy liniowe LED','oprawy panelowe','downlighty profesjonalne','systemy szynowe','oświetlenie stanowisk pracy']},
    {group:'Przemysł i magazyny',types:['oprawy high-bay','oprawy low-bay','oświetlenie hal produkcyjnych','oprawy do chłodni','oświetlenie stref załadunku']},
    {group:'Architektura i elewacje',types:['naświetlacze architektoniczne','oprawy fasadowe','systemy liniowe elewacyjne','oświetlenie wejść i podcieni','oświetlenie krajobrazowe']},
    {group:'Drogi, parkingi i infrastruktura',types:['oprawy uliczne','oprawy parkingowe','oświetlenie tunelowe','oświetlenie placów','systemy solarne off-grid']},
    {group:'Sterowanie i automatyka',types:['sterowniki DALI','czujniki obecności i światła','systemy KNX dla oświetlenia','centralne sterowanie scenami','monitoring zużycia energii']},
    {group:'Zastosowania specjalistyczne',types:['oświetlenie awaryjne','oświetlenie ewakuacyjne','oprawy o podwyższonej szczelności','oświetlenie clean-room','oprawy do środowisk wymagających indywidualnej kwalifikacji']}
  ]
};
