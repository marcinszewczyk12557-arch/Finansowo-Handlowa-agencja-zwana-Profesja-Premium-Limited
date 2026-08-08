# PROFESJA PREMIUM LIMITED™ — Procedura zarządczo-wykonawcza zakupów i transakcji

Status: procedura operacyjna projektu.  
Dokument źródłowy klienta: `formalności projektu Profesja Premium Limited.pdf`  
Wersja źródła: `FORMALNOSCI-PPL-2026-08-08`.

## 1. Cel

Procedura porządkuje przejście od zapytania zakupowego przez negocjacje, ofertę, ewentualne finansowanie, formalności, zamówienie, wysyłkę i rozliczenie. System może sam uzupełniać wyłącznie dane faktyczne wynikające z czynności negocjacyjno-transakcyjnych. Nie może samodzielnie składać oświadczeń woli, zaznaczać zgód, podpisywać dokumentów ani zastępować klienta lub OWNERA w czynnościach wymagających świadomej akceptacji.

## 2. Zasada dokumentu źródłowego

Oryginalny PDF pozostaje dokumentem źródłowym do zachowania i uzupełnienia podpisami. System prowadzi równoległy rekord `TransactionFormalities`, dzięki któremu dane transakcyjne mogą być nanoszone do pakietu dokumentów bez przepisywania ich ręcznie.

Treść dokumentu źródłowego nie jest automatycznie uznawana za zaakceptowaną przez sam fakt utworzenia sprawy, negocjacji, wysłania oferty, kliknięcia zapytania ani utworzenia zamówienia.

## 3. Etapy zarządczo-wykonawcze

1. **INTAKE / zapytanie** — nadanie numeru sprawy `PPL-...`, identyfikacja klienta, produktu, ilości, rynku i budżetu.
2. **QUALIFIED / kwalifikacja** — sprawdzenie kompletności potrzeb zakupowych, MOQ, dostępności i warunków realizacji.
3. **QUOTE_PREPARATION / negocjacje i oferta** — ustalenie wariantu, ceny, dostawy, terminu, dokumentacji, gwarancji i ewentualnego finansowania.
4. **CUSTOMER_DECISION / decyzja klienta** — zapisanie wersji oferty oraz uwag. Zmiany negocjacyjne aktualizują rekord faktów transakcyjnych.
5. **FORMALITIES / formalności** — przedstawienie klientowi właściwych oświadczeń, zgód i dokumentów. Wszystkie wymagane pozycje pozostają `PENDING` do czasu odrębnej czynności klienta.
6. **FINANCING_PREPARATION / finansowanie** — jeśli dotyczy, przekazanie minimalnego pakietu danych uprawnionemu partnerowi finansującemu. Aplikacja nie podejmuje autonomicznej decyzji kredytowej.
7. **ORDER_CREATION / utworzenie zamówienia** — dopiero po potwierdzeniu akceptacji warunków i wymaganych formalności.
8. **FULFILLMENT / realizacja** — zakup, dokumenty, kontrola logistyczna, wysyłka, tracking i aktualizacja przewidywanego terminu dostawy.
9. **COMPLETED / zakończenie** — potwierdzenie realizacji, rozliczenie i retencja wyłącznie danych wymaganych operacyjnie lub prawnie.

## 4. Dane uzupełniane automatycznie

System może samodzielnie synchronizować:

- numer sprawy i numer zamówienia,
- produkt / wariant / opis przedmiotu,
- ilość i MOQ,
- rynek docelowy,
- uzgodnioną lub orientacyjną wartość,
- informację, czy klient wnosi o organizację finansowania,
- orientacyjną kwotę finansowania,
- sposób dostawy,
- adres dostawy,
- przewidywany termin dostawy,
- etap negocjacji i realizacji,
- datę ostatniej synchronizacji.

Dane te pochodzą z bieżących rekordów `Offer`, `Order` oraz `SalesAutomationCase`.

## 5. Dane, których automatyzacja nie może zaakceptować

Poniższe statusy powstają jako `PENDING` i wymagają wyraźnej czynności człowieka albo oznaczenia `NOT_APPLICABLE` po ocenie, że dana klauzula nie dotyczy konkretnej transakcji:

- oświadczenie klienta,
- zgoda dotycząca ubezpieczenia,
- zgoda dotycząca sposobu nadania / wysyłki,
- oświadczenie dotyczące przeznaczenia towaru,
- zgoda dotycząca oprocentowania lub innych kosztów finansowych,
- zgoda dotycząca pośrednictwa lub reprezentacji,
- zgoda dotycząca okresowego rozliczania,
- zgoda dotycząca wcześniejszego zakończenia i związanych z nim kosztów,
- podpis końcowy.

Dozwolone statusy operacyjne: `PENDING`, `ACCEPTED`, `DECLINED`, `NOT_APPLICABLE`.

## 6. Podpis

System może przygotować dokument do podpisu i wypełnić pola faktyczne, ale podpis wymaga działania osoby podpisującej. Rekord przechowuje `finalSignatureStatus`, `signatureMethod` i `signedAt`. Dla czynności wymagających formy równoważnej pisemnej należy użyć właściwej metody podpisu; sposób podpisania powinien być dobrany do wymagań konkretnego dokumentu i transakcji.

## 7. Reguła bramki wykonawczej

Towar nie powinien być zamawiany tylko dlatego, że system zsynchronizował dane. Przed wykonaniem zamówienia operator sprawdza:

- finalną ofertę i cenę,
- dostępność i MOQ,
- komplet dokumentów produktu i warunki przewozu,
- wymagane zgody dla danej transakcji,
- podpis lub inne wymagane potwierdzenie,
- status finansowania, jeśli występuje,
- zgodność danych odbiorcy i dostawy.

Funkcja `formalitiesReadyForExecution()` zwraca gotowość dopiero wtedy, gdy wszystkie wymagane statusy mają wartość `ACCEPTED` albo `NOT_APPLICABLE`.

## 8. Audyt zmian

Każda automatyczna synchronizacja powinna wynikać z istniejącej czynności biznesowej: nowego zapytania, zmiany statusu oferty, decyzji finansującego partnera, utworzenia lub aktualizacji zamówienia. Automatyzacja nie rekonstruuje podpisu ani nie generuje zgody z braku odpowiedzi klienta.

## 9. Walidacja prawna

Dokument źródłowy zawiera postanowienia dotyczące m.in. płatności, ubezpieczenia, oprocentowania, pośrednictwa, sposobu wysyłki oraz opłat związanych z wcześniejszym zakończeniem. Przed użyciem takich klauzul jako wiążącego wzorca dla konkretnego typu klienta i finansowania należy zweryfikować ich zgodność z aktualnymi przepisami, charakterem transakcji B2B/B2C oraz zakresem posiadanych uprawnień.

## 10. Zasada bezpieczeństwa projektu

Automatyzacja wspomaga zarządzanie i wykonanie transakcji, lecz nie przejmuje tożsamości ani woli stron. Dane transakcyjne mogą uzupełniać się automatycznie; zgoda, podpis i decyzje wymagające uprawnionej instytucji pozostają human-in-the-loop.

© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.
