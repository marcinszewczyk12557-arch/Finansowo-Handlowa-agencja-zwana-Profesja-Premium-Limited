import type {StoreSpec} from './stores02to06';

export const STORE_08: StoreSpec = {
  id:'SKLEP-008',
  slug:'08-drukarki-urzadzenia-biurowe',
  name:'Drukarki i urządzenia biurowe',
  tree:[
    {group:'Drukarki laserowe i biurowe',types:['drukarki laserowe monochromatyczne','drukarki laserowe kolorowe','drukarki sieciowe dla zespołów','drukarki dużej wydajności','drukarki z funkcjami bezpieczeństwa klasy biznesowej']},
    {group:'Urządzenia wielofunkcyjne',types:['urządzenia wielofunkcyjne A4','urządzenia wielofunkcyjne A3','kolorowe MFP dla grup roboczych','MFP z automatycznym dupleksem i podajnikiem dokumentów','urządzenia wielofunkcyjne do środowisk o wysokim wolumenie']},
    {group:'Skanery dokumentowe',types:['skanery dokumentowe biurkowe','skanery dokumentowe wysokiej wydajności','skanery sieciowe','skanery do dokumentów wielkoformatowych','skanery z automatycznym podajnikiem i obsługą OCR']},
    {group:'Druk specjalistyczny i etykietowanie',types:['drukarki etykiet termotransferowych','drukarki etykiet przemysłowych','drukarki kart i identyfikatorów','drukarki kodów kreskowych','drukarki mobilne do obsługi magazynu i sprzedaży']},
    {group:'Niszczenie i obieg dokumentów',types:['niszczarki dokumentów klasy biurowej','niszczarki wysokiego bezpieczeństwa','bindownice i systemy oprawy','laminatory profesjonalne','systemy sortowania i przygotowania korespondencji']},
    {group:'Wyposażenie stanowisk administracyjnych',types:['urządzenia do liczenia i sortowania dokumentów','elektroniczne tablice informacyjne','urządzenia do archiwizacji papierowej','stacje digitalizacji dokumentów','akcesoria do zarządzania obiegiem dokumentów']}
  ]
};
