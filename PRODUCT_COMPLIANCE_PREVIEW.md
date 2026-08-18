# PROFESJA PREMIUM LIMITED™ — Product Compliance (PREVIEW)

Status: bezpieczna specyfikacja operacyjna do wdrożenia na gałęzi preview. Dokument nie jest poradą prawną, certyfikatem ani potwierdzeniem zgodności konkretnego produktu.

## Cel

Moduł Product Compliance ma uniemożliwiać publiczne oznaczenie produktu jako „zweryfikowany”, „CE potwierdzone”, „ISO potwierdzone” lub równoważne bez powiązanego, sprawdzonego dowodu odnoszącego się do właściwego produktu, wariantu, producenta i rynku docelowego.

## Zasada nadrzędna

Brak dowodu = brak pozytywnego statusu. Dane handlowe dostawcy, zdjęcie logo, opis aukcji, deklaracja w komunikatorze, screen lub sam numer certyfikatu nie są samodzielnie wystarczającym dowodem zgodności.

## Statusy rekordu zgodności

Każdy produkt powinien posiadać jeden z jednoznacznych statusów:

- `DRAFT` — produkt roboczy, bez publicznych twierdzeń o zgodności.
- `EVIDENCE_REQUIRED` — brakuje co najmniej jednego wymaganego dowodu.
- `UNDER_REVIEW` — dokumenty zostały dostarczone i oczekują na kontrolę.
- `VERIFIED_FOR_SCOPE` — dowody zostały sprawdzone wyłącznie w określonym zakresie.
- `REJECTED` — dokument lub twierdzenie nie przeszedł kontroli.
- `EXPIRED` — dokument utracił ważność albo wymaga ponownego potwierdzenia.

Publiczny interfejs może prezentować status pozytywny wyłącznie dla `VERIFIED_FOR_SCOPE` i zawsze wraz z zakresem weryfikacji.

## Minimalny rekord produktu

Dla każdego produktu należy przechowywać co najmniej:

- wewnętrzny identyfikator produktu,
- pełną nazwę handlową i model,
- wariant/konfigurację,
- kategorię produktu,
- producenta i jego pełną nazwę prawną,
- kraj producenta,
- podmiot odpowiedzialny/importera, jeśli ma zastosowanie,
- rynek docelowy,
- źródło oferty handlowej,
- datę ostatniej kontroli,
- osobę/rolę wykonującą kontrolę,
- wynik kontroli i uzasadnienie,
- odnośniki do dowodów przechowywanych prywatnie.

## Bramka dowodowa CE / zgodności produktu

Jeżeli dla danego produktu wymagane jest oznakowanie CE lub dokumentacja zgodności, rekord powinien umożliwiać przypięcie odpowiednich dokumentów, zależnie od kategorii produktu, m.in.:

- deklaracji zgodności producenta,
- identyfikacji producenta i produktu zgodnej z dokumentem,
- numeru i danych jednostki notyfikowanej — jeżeli ma zastosowanie,
- certyfikatu jednostki notyfikowanej — jeżeli ma zastosowanie,
- zakresu norm/specyfikacji wskazanych w dokumentacji,
- dat wydania i ważności dokumentów,
- dokumentów dotyczących konkretnego wariantu/modelu.

System nie może automatycznie zakładać, że certyfikat dotyczący jednego modelu obejmuje całą rodzinę produktów.

## Bramka ISO

ISO należy traktować jako informację o certyfikowanym systemie/zakresie podmiotu, a nie jako automatyczny certyfikat konkretnego produktu. Rekord ISO powinien zawierać:

- nazwę certyfikowanego podmiotu,
- numer certyfikatu,
- normę,
- zakres certyfikacji,
- jednostkę certyfikującą,
- datę wydania i ważności,
- status weryfikacji źródła.

Publiczny opis nie może sugerować, że „produkt ma ISO”, jeżeli dokument dotyczy wyłącznie systemu zarządzania producenta.

## Weryfikacja producenta / dostawcy

Weryfikacja dostawcy powinna być oddzielona od weryfikacji produktu. Minimalnie należy sprawdzić:

- zgodność nazwy prawnej firmy,
- podstawowe dane rejestrowe,
- adres i dane kontaktowe,
- rolę podmiotu: producent / eksporter / trader / agent,
- zgodność danych z dokumentami produktowymi,
- historię zmian danych kluczowych,
- źródło pochodzenia oferty.

Status „zweryfikowany dostawca” nie może automatycznie nadawać produktowi statusu „zweryfikowany produkt”.

## KYC/KYB i prywatność

Dane KYC/KYB należy przechowywać poza publicznym frontendem i udostępniać wyłącznie uprawnionym rolom. Publiczne rekordy produktów nie mogą zawierać dokumentów tożsamości, prywatnych adresów, numerów identyfikacyjnych osób ani innych danych wrażliwych.

Każde odczytanie lub zmiana rekordu zgodności powinna być możliwa do zapisania w historii audytowej.

## Audyt i historia zmian

Dla każdego dowodu system powinien zapisywać:

- datę dodania,
- źródło,
- sumę kontrolną lub inny identyfikator integralności,
- datę weryfikacji,
- wynik,
- zakres, którego dotyczy,
- osobę/rolę zatwierdzającą,
- powód odrzucenia lub wygaśnięcia,
- wersję poprzednią po każdej zmianie.

Usunięcie dokumentu nie powinno usuwać informacji, że wcześniej istniał i został wykorzystany w procesie kontroli.

## Reguły publikacji na stronie

Publiczna karta produktu może pokazać:

- producenta — tylko gdy jego tożsamość została potwierdzona,
- status dokumentów — tylko jako wynik rzeczywistej kontroli,
- zakres weryfikacji,
- datę ostatniego sprawdzenia,
- neutralny komunikat „dokumentacja w trakcie weryfikacji”, gdy kontrola nie została zakończona.

Nie wolno publikować:

- fikcyjnych numerów certyfikatów,
- niezweryfikowanych logotypów certyfikacyjnych jako dowodu,
- statusu „CE verified” bez dokumentacji,
- statusu „ISO certified product”, jeśli ISO dotyczy wyłącznie organizacji,
- twierdzeń o autoryzowanym partnerstwie bez udokumentowanej podstawy.

## Zasada dla BIOVERA

Oferty BIOVERA mogą być przygotowywane redakcyjnie i technicznie przed zakończeniem kontroli, lecz do czasu przejścia bramki dowodowej powinny posiadać status `EVIDENCE_REQUIRED` albo `UNDER_REVIEW`. Dopiero po pozytywnej kontroli danego produktu i zakresu można zmienić status na `VERIFIED_FOR_SCOPE`.

## Integracja z archiwum transakcji

Po złożeniu zamówienia system powinien zapisać kopię wersji dowodów zgodności obowiązujących w chwili akceptacji oferty. Późniejsza aktualizacja dokumentacji produktu nie może nadpisywać historycznego zestawu dowodów przypisanego do konkretnego zamówienia.

## Kryterium gotowości modułu

Moduł Product Compliance można uznać za gotowy do testów funkcjonalnych dopiero wtedy, gdy:

1. brak dowodu blokuje pozytywny status publiczny,
2. status produktu i status dostawcy są rozdzielone,
3. dowody są prywatne i objęte kontrolą dostępu,
4. każda zmiana pozostawia ślad audytowy,
5. wygasłe dokumenty automatycznie tracą pozytywny status,
6. publiczny interfejs pokazuje zakres i datę weryfikacji,
7. nie istnieje ścieżka pozwalająca ręcznie oznaczyć produkt jako zweryfikowany bez przypisanego dowodu.

© PROFESJA PREMIUM LIMITED™ — dokument roboczy PREVIEW.
