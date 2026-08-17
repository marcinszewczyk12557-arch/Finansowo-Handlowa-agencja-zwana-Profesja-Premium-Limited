# PROFESJA PREMIUM LIMITED™ — AI Transaction Completion & Archive

## Cel
Warstwa AI ma kompletować i kontrolować dokumentację sprawy od oferty do zamknięcia, bez zastępowania wymaganych decyzji człowieka, księgowego, prawnika, dostawcy usług KYC ani finansującego.

## Bramka zakończenia
Status `COMPLETED` wolno nadać wyłącznie, gdy wszystkie obowiązkowe bramki dla danej transakcji mają `APPROVED` albo udokumentowane `NOT_APPLICABLE`.

## Struktura eksportu właściciela
Każda transakcja eksportowana jest jako osobny katalog/paczka:

`PROFESJA PREMIUM LIMITED/INFORMACJE TRANSAKCYJNE/{TRANSACTION_ID}_{CLIENT_SAFE_NAME}/`

Podkatalogi:
1. `01_OFERTA`
2. `02_AKCEPTACJE`
3. `03_KYC_KYB`
4. `04_UMOWY`
5. `05_ZGODNOSC_PRODUKTU`
6. `06_ZAMOWIENIE`
7. `07_PLATNOSCI`
8. `08_LOGISTYKA_TRACKING`
9. `09_FAKTURY`
10. `10_REKLAMACJE_RMA`
11. `11_AUDYT_ZAMKNIECIA`

Aplikacja webowa nie uzyskuje nieograniczonego dostępu do pamięci Androida. Generuje zaszyfrowaną paczkę eksportową, którą OWNER zapisuje do wybranego katalogu. Dedykowana aplikacja Android może później użyć systemowego wyboru katalogu i uprawnienia ograniczonego do wskazanego drzewa.

## AI completeness engine
AI może:
- klasyfikować dokumenty do etapów;
- wykrywać braki i niespójności;
- porównywać kwoty, waluty, kontrahentów, numery ofert/zamówień/faktur i daty;
- generować checklistę braków;
- przygotowywać projekt danych faktury i paczki faktoringowej;
- tworzyć manifest plików z hashami;
- przygotowywać raport zamknięcia.

AI nie może:
- samodzielnie zatwierdzać KYC/AML tam, gdzie wymagany jest uprawniony podmiot/człowiek;
- tworzyć fikcyjnej wierzytelności;
- zmieniać beneficjenta płatności bez niezależnego potwierdzenia;
- deklarować zgodności produktu bez właściwych dowodów;
- nadawać 0% VAT bez przejścia reguł podatkowych i wymaganych dowodów.

## Generator faktur
Generator zapisuje fakturę w `09_FAKTURY` oraz manifest transakcji. Dane obejmują co najmniej: numer, daty, prawidłowego sprzedawcę/wystawcę i nabywcę, identyfikatory podatkowe, pozycje, ilości, ceny, walutę, podstawę opodatkowania, stawkę VAT, kwotę VAT, kwotę należną, termin i sposób płatności oraz wymagane adnotacje.

### VAT 0%
`VAT_RATE=0` jest dozwolone tylko po `VAT_ELIGIBILITY=APPROVED` na podstawie typu transakcji i wymaganej dokumentacji. Brak dowodu powoduje `TAX_REVIEW_REQUIRED`; system nie zgaduje stawki.

## Paczka faktoringowa
Eksport może zawierać dane wymagane przez konkretnego faktora: dane stron, fakturę, zamówienie/umowę, dowód wykonania/dostawy, termin płatności, walutę, status sporu/reklamacji, cesję/zgody jeśli wymagane oraz identyfikatory transakcji. Zakres jest konfigurowany per faktor i nie może zawierać zbędnych danych.

## Linki etapów
Dopuszczone zastosowanie: jawne linki statusowe/akceptacyjne i analityka, np. `/t/{id}/offer-accepted`, `/t/{id}/kyb-complete`, `/t/{id}/order-confirmed`, `/t/{id}/delivery-confirmed`.

Integracje link-management mogą używać Bitly, Rebrandly, Short.io lub Dub po stronie serwera. Sekrety API wyłącznie w zmiennych środowiskowych. Każdy link ma `transactionId`, `stage`, cel, datę utworzenia/wygaśnięcia i log audytowy.

Kliknięcie samo w sobie nie może tworzyć długu, obciążać klienta, generować instrumentu/aktywa finansowego ani stanowić ukrytej zgody. Jeżeli kliknięcie prowadzi do akceptacji, ekran docelowy musi jasno pokazać treść, skutki, kwotę/warunki (jeżeli dotyczy) i wymagać świadomego potwierdzenia.

## Bezpieczeństwo
- RBAC: OWNER / STAFF / FRANCHISEE / CLIENT / AUDITOR.
- MFA dla OWNER i kont uprzywilejowanych.
- szyfrowanie danych w tranzycie i spoczynku;
- sekrety wyłącznie po stronie serwera;
- log audytowy append-only dla zdarzeń krytycznych;
- potwierdzenie zmian rachunku, beneficjenta, ceny i specyfikacji;
- retencja i usuwanie wg kategorii dokumentu i podstawy prawnej;
- zakaz przechowywania KYC i paczek transakcyjnych w publicznym repozytorium.

## Integracja z istniejącym workflow
`INTAKE → QUALIFIED → QUOTE_PREPARATION → CUSTOMER_DECISION → FINANCING_PREPARATION → ORDER_CREATION → FULFILLMENT → COMPLETED`

Warstwa AI działa jako kontroler kompletności. Nie omija `externalDisclosureAllowed=false` i nie publikuje tajemnicy handlowej.

## Kryteria odbioru
1. Jedna transakcja = jeden ID i jedna paczka archiwalna.
2. Brak wymaganej bramki blokuje `COMPLETED`.
3. Faktura i paczka faktoringowa powstają z zatwierdzonych danych źródłowych.
4. 0% VAT wymaga pozytywnego checku podatkowego.
5. Linki są jawne co do celu i audytowalne.
6. Eksport Android wymaga świadomego wyboru katalogu przez OWNER.
7. Wszystkie działania krytyczne mają timestamp, actor i audit event.
