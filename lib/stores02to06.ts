export type StoreSpec = { id:string; slug:string; name:string; tree:{group:string; types:string[]}[] };

export const STORES_02_06: StoreSpec[] = [
{id:'SKLEP-002',slug:'02-laptopy-komputery-mobilne',name:'Laptopy i komputery mobilne',tree:[
{group:'Laptopy biznesowe',types:['ultrabooki biznesowe','laptopy klasy enterprise','laptopy konwertowalne 2-in-1','laptopy edukacyjne i flotowe','laptopy rugged do pracy terenowej']},
{group:'Mobilne stacje robocze',types:['mobilne stacje robocze CAD','mobilne stacje robocze 3D','mobilne stacje robocze do analizy danych','mobilne stacje robocze do produkcji multimediów','mobilne stacje robocze z profesjonalną grafiką']},
{group:'Tablety i komputery mobilne',types:['tablety biznesowe','tablety rugged','terminale mobilne','komputery przenośne do zastosowań przemysłowych','urządzenia 2-in-1 z odłączaną klawiaturą']},
{group:'Stacje dokujące i zasilanie',types:['stacje dokujące','replikatory portów','zasilacze i ładowarki','wielostanowiskowe systemy ładowania','mobilne źródła zasilania dla floty']},
{group:'Ochrona i zarządzanie flotą',types:['torby i walizki transportowe','obudowy ochronne','filtry prywatności','zabezpieczenia fizyczne urządzeń','rozwiązania zarządzania flotą urządzeń']}]},
{id:'SKLEP-003',slug:'03-komputery-stacjonarne-mini-pc',name:'Komputery stacjonarne i mini PC',tree:[
{group:'Komputery biznesowe',types:['komputery tower','komputery small form factor','komputery ultra small form factor','komputery all-in-one','terminale stanowiskowe']},
{group:'Stacje robocze',types:['stacje robocze CAD','stacje robocze 3D','stacje robocze do analizy danych','stacje robocze do produkcji multimediów','stacje robocze do obliczeń profesjonalnych']},
{group:'Mini PC i edge',types:['mini PC biznesowe','mini PC przemysłowe','fanless PC','edge computing PC','komputery do digital signage']},
{group:'Komputery przemysłowe',types:['komputery panelowe','komputery embedded','komputery do automatyki','komputery do szaf sterowniczych','komputery do pracy w warunkach podwyższonej odporności']},
{group:'Rozbudowa stanowisk',types:['pamięć operacyjna','pamięć masowa','karty rozszerzeń','profesjonalne układy graficzne','zasilanie awaryjne dla stanowisk']}]},
{id:'SKLEP-004',slug:'04-monitory-wyswietlacze',name:'Monitory i wyświetlacze',tree:[
{group:'Monitory biurowe i biznesowe',types:['monitory biurowe','monitory ultrawide','monitory wielkoformatowe desktop','monitory z funkcją dokowania','monitory do stanowisk wieloekranowych']},
{group:'Monitory profesjonalne',types:['monitory do grafiki i projektowania','monitory do postprodukcji','monitory referencyjne','monitory do zastosowań technicznych','monitory do zastosowań specjalistycznych wymagających odrębnej weryfikacji']},
{group:'Wyświetlacze komercyjne',types:['digital signage','ekrany interaktywne','ściany wideo','wyświetlacze przemysłowe','kioski i totemy informacyjne']},
{group:'Sale i prezentacja',types:['wyświetlacze konferencyjne','tablice interaktywne','systemy prezentacji bezprzewodowej','monitory podglądowe','ekrany do centrów operacyjnych']},
{group:'Infrastruktura obrazu',types:['uchwyty i ramiona','matryce i kontrolery wideo','procesory ścian wideo','ekstendery i konwertery sygnału','okablowanie i akcesoria sygnałowe']}]},
{id:'SKLEP-005',slug:'05-serwery-infrastruktura-it',name:'Serwery i infrastruktura IT',tree:[
{group:'Serwery',types:['serwery rack','serwery tower','serwery blade','serwery GPU i obliczeniowe','serwery edge']},
{group:'Pamięć masowa',types:['macierze SAN','systemy NAS','systemy pamięci obiektowej','macierze all-flash','systemy pamięci hybrydowej']},
{group:'Backup i archiwizacja',types:['biblioteki taśmowe','appliance backup','repozytoria backup','systemy deduplikacji','urządzenia archiwizacji danych']},
{group:'Centrum danych',types:['szafy rack','PDU','UPS dla serwerowni','KVM i konsole zarządzające','systemy monitoringu środowiska serwerowni']},
{group:'Infrastruktura obliczeniowa',types:['węzły klastrowe','infrastruktura HCI','akceleratory obliczeniowe','platformy wirtualizacyjne appliance','infrastruktura dla prywatnej chmury']}]},
{id:'SKLEP-006',slug:'06-sieci-telekomunikacja',name:'Sieci i telekomunikacja',tree:[
{group:'Sieci LAN',types:['przełączniki dostępowe','przełączniki dystrybucyjne','przełączniki rdzeniowe','przełączniki PoE','kontrolery i systemy zarządzania siecią']},
{group:'WAN i routing',types:['routery biznesowe','routery operatorskie','bramy SD-WAN','urządzenia równoważenia łączy','urządzenia CPE']},
{group:'Sieci bezprzewodowe',types:['punkty dostępowe Wi-Fi','kontrolery WLAN','mosty bezprzewodowe','anteny i akcesoria RF','systemy bezprzewodowe do obiektów przemysłowych']},
{group:'Telekomunikacja i UC',types:['systemy VoIP','centrale IP','telefony konferencyjne','bramy głosowe','terminale komunikacji zunifikowanej']},
{group:'Światłowody i transmisja',types:['przełączniki światłowodowe','multipleksery transmisyjne','konwertery mediów','moduły optyczne i transceivery','urządzenia transmisyjne dla sieci operatorskich']}]}
];

export const MIN_ORDER_PLN = 110000;
