import type {StoreSpec} from './stores02to06';

export const STORE_25: StoreSpec = {
  id:'SKLEP-025',
  slug:'25-wyposazenie-laboratoryjne',
  name:'Wyposażenie laboratoryjne',
  tree:[
    {group:'Aparatura analityczna',types:['spektrometry i analizatory','chromatografia i przygotowanie próbek','fotometry i czytniki','analizatory parametrów procesowych','metoda, zakres i parametry muszą zostać potwierdzone dla konkretnego zastosowania']},
    {group:'Przygotowanie i obróbka próbek',types:['wirówki laboratoryjne','homogenizatory i mieszadła','młyny i rozdrabniacze','systemy ekstrakcji i mineralizacji','materiał próbki, wydajność i kompatybilność wymagają weryfikacji']},
    {group:'Kontrola środowiska laboratoryjnego',types:['komory klimatyczne i temperaturowe','inkubatory i suszarki','chłodziarki i zamrażarki laboratoryjne','systemy monitoringu warunków','zakres temperatur, stabilność i wymagania procesu muszą być potwierdzone']},
    {group:'Bezpieczeństwo i stanowiska pracy',types:['dygestoria i komory robocze','szafy bezpieczeństwa','stoły i zabudowy laboratoryjne','systemy lokalnej wentylacji','dobór wymaga oceny ryzyka, substancji i warunków użytkowania']},
    {group:'Pomiary i kontrola jakości',types:['wagi laboratoryjne','mierniki pH i przewodności','systemy dokumentacji wyników','wyposażenie kontroli jakości','dokładność, kalibracja i dokumentacja wymagają potwierdzenia']},
    {group:'Zastosowania B2B',types:['laboratoria przemysłowe i R&D','kontrola jakości i produkcja','laboratoria środowiskowe i materiałowe','jednostki badawcze i edukacyjne','konkretna marka, model, właściwości, dokumentacja, cena i dostępność są publikowane dopiero po weryfikacji źródłowej']}
  ]
};
