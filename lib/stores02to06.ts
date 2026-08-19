export type StoreSpec = { id:string; slug:string; name:string; tree:{group:string; types:string[]}[] };

export const STORES_02_06: StoreSpec[] = [
{id:'SKLEP-002',slug:'02-laptopy-komputery-mobilne',name:'Laptopy i komputery mobilne',tree:[
{group:'Laptopy biznesowe',types:['ultrabooki biznesowe','mobilne stacje robocze','laptopy konwertowalne 2-in-1','laptopy rugged do pracy terenowej']},
{group:'Komputery mobilne',types:['tablety biznesowe','tablety rugged','terminale mobilne','komputery przenośne do zastosowań przemysłowych']},
{group:'Akcesoria i infrastruktura',types:['stacje dokujące','zasilacze i ładowarki','torby i obudowy ochronne','rozwiązania zarządzania flotą urządzeń']}]},
{id:'SKLEP-003',slug:'03-komputery-stacjonarne-mini-pc',name:'Komputery stacjonarne i mini PC',tree:[
{group:'Komputery profesjonalne',types:['stacje robocze','komputery biznesowe tower','komputery small form factor','komputery all-in-one']},
{group:'Mini PC',types:['mini PC biznesowe','mini PC przemysłowe','fanless PC','edge computing PC']},
{group:'Rozbudowa',types:['pamięć operacyjna','pamięć masowa','karty rozszerzeń','zasilanie awaryjne dla stanowisk']}]},
{id:'SKLEP-004',slug:'04-monitory-wyswietlacze',name:'Monitory i wyświetlacze',tree:[
{group:'Monitory profesjonalne',types:['monitory biurowe','monitory ultrawide','monitory do grafiki i projektowania','monitory medyczne do weryfikacji']},
{group:'Wyświetlacze komercyjne',types:['digital signage','ekrany interaktywne','ściany wideo','wyświetlacze przemysłowe']},
{group:'Infrastruktura obrazu',types:['uchwyty i ramiona','matryce i kontrolery wideo','systemy prezentacyjne','akcesoria sygnałowe']}]},
{id:'SKLEP-005',slug:'05-serwery-infrastruktura-it',name:'Serwery i infrastruktura IT',tree:[
{group:'Serwery',types:['serwery rack','serwery tower','serwery blade','serwery GPU i obliczeniowe']},
{group:'Pamięć i storage',types:['macierze SAN','systemy NAS','biblioteki backup','systemy pamięci obiektowej']},
{group:'Centrum danych',types:['szafy rack','PDU','UPS dla serwerowni','KVM i konsole zarządzające']}]},
{id:'SKLEP-006',slug:'06-sieci-telekomunikacja',name:'Sieci i telekomunikacja',tree:[
{group:'Sieci LAN/WAN',types:['przełączniki zarządzalne','routery biznesowe','bramy SD-WAN','kontrolery sieciowe']},
{group:'Sieci bezprzewodowe',types:['punkty dostępowe Wi-Fi','kontrolery WLAN','mosty bezprzewodowe','anteny i akcesoria RF']},
{group:'Telekomunikacja',types:['systemy VoIP','centrale IP','telefony konferencyjne','urządzenia transmisyjne i światłowodowe']}]}
];

export const MIN_ORDER_PLN = 110000;
