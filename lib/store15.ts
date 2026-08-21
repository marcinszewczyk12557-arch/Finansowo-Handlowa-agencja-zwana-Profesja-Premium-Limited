import type {StoreSpec} from './stores02to06';

export const STORE_15: StoreSpec = {
  id:'SKLEP-015',
  slug:'15-systemy-alarmowe-przeciwpozarowe',
  name:'Systemy alarmowe i przeciwpożarowe',
  tree:[
    {group:'Sygnalizacja włamania i napadu',types:['centrale alarmowe','czujki ruchu i obecności','kontaktrony i czujniki otwarcia','sygnalizatory optyczno-akustyczne','przyciski napadowe i moduły alarmowe']},
    {group:'Sygnalizacja pożaru',types:['centrale sygnalizacji pożarowej','czujki dymu','czujki temperatury','ręczne ostrzegacze pożarowe','sygnalizatory i moduły sterujące']},
    {group:'Detekcja zagrożeń',types:['detekcja gazów po kwalifikacji medium i środowiska','detekcja zalania','detekcja temperatury i warunków środowiskowych','monitoring techniczny pomieszczeń','integracja sygnałów awaryjnych']},
    {group:'Sterowanie i integracja',types:['moduły wejść i wyjść','integracja z BMS po weryfikacji protokołów','integracja z kontrolą dostępu','integracja z monitoringiem wizyjnym','systemy wizualizacji i obsługi zdarzeń']},
    {group:'Zasilanie i infrastruktura',types:['zasilacze buforowe','akumulatory i zasilanie rezerwowe','obudowy i szafy systemowe','okablowanie i osprzęt instalacyjny','moduły transmisji i komunikacji']},
    {group:'Zastosowania B2B',types:['biura i obiekty komercyjne','magazyny i centra logistyczne','obiekty przemysłowe','obiekty handlowe','systemy dla obiektów wymagających projektu, uzgodnień i kwalifikacji zgodności przed ofertą']}
  ]
};
