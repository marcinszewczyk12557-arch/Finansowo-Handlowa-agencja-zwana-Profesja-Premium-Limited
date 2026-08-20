import type {StoreSpec} from './stores02to06';

export const STORE_13: StoreSpec = {
  id:'SKLEP-013',
  slug:'13-kontrola-dostepu-bezpieczenstwo',
  name:'Kontrola dostępu i bezpieczeństwo',
  tree:[
    {group:'Kontrola przejść',types:['kontrolery przejść','czytniki kart i identyfikatorów','terminale dostępu','elektrozaczepy i zwory','moduły wejść i wyjść']},
    {group:'Identyfikacja i poświadczenia',types:['karty i breloki dostępu','mobilne poświadczenia dostępu','czytniki kodów i identyfikatorów','terminale PIN','systemy zarządzania identyfikatorami']},
    {group:'Zarządzanie ruchem osób',types:['bramki obrotowe','tripody','bramki uchylne','śluzy osobowe','systemy kontroli wejść i wyjść']},
    {group:'Bezpieczeństwo drzwi i stref',types:['zamki elektroniczne','kontakty i czujniki drzwi','przyciski wyjścia','awaryjne zwalnianie przejść','interfejsy integracyjne drzwi']},
    {group:'Zarządzanie i integracja',types:['serwery kontroli dostępu','oprogramowanie zarządzające','rejestracja zdarzeń','integracja z systemami HR i BMS','interfejsy API i bramki systemowe']},
    {group:'Zastosowania specjalistyczne',types:['kontrola dostępu dla centrów danych','systemy dla obiektów przemysłowych','rozwiązania dla magazynów i logistyki','systemy dla biur i obiektów komercyjnych','kontrola dostępu dla infrastruktury krytycznej po kwalifikacji wymagań']}
  ]
};
