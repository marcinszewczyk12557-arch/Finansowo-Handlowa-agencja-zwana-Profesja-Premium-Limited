import type {StoreSpec} from './stores02to06';

export const STORE_12: StoreSpec = {
  id:'SKLEP-012',
  slug:'12-smart-home-automatyka-budynkowa',
  name:'Smart Home i automatyka budynkowa',
  tree:[
    {group:'Sterowanie budynkiem',types:['kontrolery automatyki budynkowej','panele operatorskie','bramki integracyjne','moduły wejść i wyjść','serwery zarządzania budynkiem']},
    {group:'Oświetlenie i energia',types:['sterowniki oświetlenia','ściemniacze i aktory','czujniki obecności i natężenia światła','liczniki i analizatory energii','systemy zarządzania obciążeniem']},
    {group:'HVAC i komfort',types:['termostaty strefowe','sterowniki HVAC','siłowniki zaworów i przepustnic','czujniki temperatury wilgotności i jakości powietrza','integracja pomp ciepła i klimatyzacji']},
    {group:'Rolety, osłony i napędy',types:['sterowniki rolet i żaluzji','napędy osłon','moduły pogodowe','automatyka fasadowa','sceny i harmonogramy']},
    {group:'Integracja i protokoły',types:['KNX','BACnet','Modbus','DALI','Matter i Thread dla kwalifikowanych zastosowań']},
    {group:'Monitoring i zarządzanie',types:['dashboardy BMS','rejestratory danych','zdalny monitoring instalacji','alarmy techniczne','systemy optymalizacji zużycia energii']}
  ]
};
