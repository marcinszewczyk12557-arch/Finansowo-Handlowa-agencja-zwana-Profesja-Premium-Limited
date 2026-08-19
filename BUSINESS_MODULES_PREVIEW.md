# PROFESJA PREMIUM LIMITED™ — moduły biznesowe (PREVIEW)

Status: projekt funkcjonalny do dalszej implementacji. Dokument nie jest certyfikowaną poradą prawną i nie stanowi oferty wiążącej.

## 1. BIOVERA — marka własna / sklep-hurtownia medyczna

BIOVERA jest przewidziana jako własna marka/sklep-hurtownia dla działu medycznego oraz wybranych produktów strony głównej.

### Bramka dowodowa produktu medycznego
Produkt premium może otrzymać publiczny status „zweryfikowany” dopiero po zgromadzeniu i sprawdzeniu dokumentów właściwych dla konkretnego produktu, wariantu i rynku docelowego. System ma przechowywać co najmniej: identyfikację producenta i podmiotu odpowiedzialnego, dokumenty CE wymagane dla danego wyrobu, deklarację zgodności, certyfikat jednostki notyfikowanej — jeśli ma zastosowanie — oraz dokumenty ISO wyłącznie wtedy, gdy dotyczą właściwego podmiotu i zakresu.

Brak dokumentu = brak statusu „zweryfikowano”. Samo logo, zdjęcie, opis dostawcy, komunikator lub deklaracja handlowa nie stanowią dowodu certyfikacji.

## 2. „Twój Biznes Twoja Sprzedaż” — projekt modelu B2B

### Wariant A — przedstawiciel marki
Model dla przedsiębiorcy obsługującego uzgodnioną markę lub linię produktową na podstawie indywidualnej umowy i zakresu uprawnień. Użycie cudzego znaku towarowego nie może sugerować autoryzacji, jeśli nie istnieje udokumentowana zgoda/licencja.

### Wariant B — przedstawiciel kategorii / podkategorii
Model dla przedsiębiorcy rozwijającego sprzedaż określonej kategorii lub podkategorii asortymentowej bez automatycznego przypisywania mu statusu oficjalnego przedstawiciela producenta.

### Zasady handlowe
- Cena hurtowa może być komunikowana jako docelowo ok. 84% porównywalnej krajowej ceny detalicznej tylko wtedy, gdy aktualny, udokumentowany benchmark dla porównywalnego produktu rzeczywiście to potwierdza.
- Konsolidowana dostawa raz w tygodniu jest założeniem operacyjnym, a nie gwarancją terminu dla każdej transakcji.
- 0% kredyt kupiecki może wystąpić wyłącznie jako indywidualnie zaakceptowany warunek umowny, zależny m.in. od oceny transakcji, limitu, terminowych płatności i spełnienia warunków umowy. Nie wolno przedstawiać go jako automatycznie dostępnego.
- Umowa wdrożeniowa wymaga odrębnego przeglądu prawnego i podatkowego dla konkretnej jurysdykcji i statusu stron.

## 3. VELOX LOGISTICS — koordynacja transportu

VELOX LOGISTICS jest projektowany jako system koordynacji transportu morskiego, kolejowego, drogowego, lotniczego i multimodalnego door-to-door.

### Warstwa publiczna
Klient może otrzymać status realizacji, uzgodniony wariant dostawy, przewoźnika po zatwierdzeniu, numer przesyłki / tracking, dokumenty przeznaczone dla klienta i informacje wymagane do odbioru.

### Prywatny panel właściciela
Panel prywatny ma wspierać porównanie ofert logistycznych i negocjacje. Dane wewnętrzne — w szczególności koszty zakupu, marża, polityka konsolidacji wysyłek, notatki negocjacyjne, dane alternatywnych ofert i wewnętrzne progi decyzyjne — nie mogą być ujawniane klientom.

## 4. Dane i Terminy Do Rozliczeń

Projekt zakładki powinien pokazywać klientowi wyłącznie dane rozliczeniowe zatwierdzone do publikacji. Tytułem wpłaty jest unikalny numer zamówienia. Termin płatności: do ostatniego dnia roboczego miesiąca, jeżeli taki termin wynika z zaakceptowanej oferty/umowy.

Dane EUR/IBAN/BIC należy pobierać z prywatnej konfiguracji administracyjnej lub bezpiecznych zmiennych środowiskowych. Nie należy commitować poufnych danych bankowych do publicznego repozytorium. Przed wyświetleniem rachunku klientowi system powinien wymagać potwierdzenia jego aktualności przez właściciela.

## 5. Unikalne numery zamówień i archiwizacja

Format referencyjny: `PPL-YYYYMM-XXXXXX`, gdzie końcowy segment jest generowany kryptograficznie lub przez bazę danych i posiada ograniczenie UNIQUE. Numer zamówienia pozostaje niezmienny przez cały cykl transakcji i jest używany jako referencja płatności.

Archiwum powinno wiązać z numerem zamówienia: wersję zaakceptowanej oferty, KYC/KYB, potwierdzenia uprawnień reprezentantów, dokumenty dostawcy, dowody zgodności/certyfikacji, dokumenty płatnicze, logistyczne, tracking, odbiór, reklamacje i historię zmian. Dostęp do danych wrażliwych musi być ograniczony rolami i rejestrowany w audycie.

## 6. Marki i materiały referencyjne

Logo BIOVERA i VELOX mogą być używane jako marki własne po potwierdzeniu praw właściciela do konkretnych plików. Pozostałe plansze i znaki marek są wyłącznie materiałem referencyjnym. Bez udokumentowanej zgody/licencji nie wolno przedstawiać ich jako „oficjalnych partnerów”, autoryzacji ani przedstawicielstwa.

Jeśli cudze marki są prezentowane jako odniesienie do asortymentu, interfejs powinien zawierać neutralne oznaczenie oraz informację, że znaki towarowe należą do odpowiednich właścicieli.

## 7. Ruchomy pasek i dostępność

Dolny pasek może poruszać się subtelnie w lewo. Przy `prefers-reduced-motion: reduce` animacja musi zostać wyłączona, a treść pozostać w pełni dostępna bez ruchu.

## 8. Pliki i prezentacje wideo

Interfejs może zawierać miejsca na pliki PDF do pobrania i prezentacje wideo. Status „certyfikat”, „zweryfikowany dokument producenta” lub „wideo producenta” może zostać pokazany dopiero po przypięciu źródła/dowodu i pozytywnej weryfikacji administracyjnej. System nie generuje fikcyjnych certyfikatów.

## 9. Prawa

© PROFESJA PREMIUM LIMITED™ — zastrzeżenie dotyczy własnych treści, układu i elementów projektu w zakresie przysługujących praw. Nazwy, logotypy i znaki towarowe podmiotów trzecich pozostają własnością odpowiednich uprawnionych i nie są objęte roszczeniem do praw PROFESJA.
