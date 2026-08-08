# Automatyzacja Finansowo‑Sprzedażowa

## Cel
Moduł porządkuje pełny proces B2B od zapytania do realizacji zamówienia. Automatyzacja organizuje czynności operacyjne, nie zastępuje decyzji człowieka tam, gdzie wymagana jest akceptacja handlowa, prawna, finansowa albo partnera zewnętrznego.

## Etapy
1. `INTAKE` — przyjęcie zapytania.
2. `QUALIFIED` — kwalifikacja sprawy.
3. `QUOTE_PREPARATION` — przygotowanie indywidualnej wyceny.
4. `CUSTOMER_DECISION` — oczekiwanie na decyzję klienta.
5. `FINANCING_PREPARATION` — opcjonalne przygotowanie ścieżki finansowania.
6. `ORDER_CREATION` — utworzenie zamówienia po akceptacji.
7. `FULFILLMENT` — realizacja, dokumenty, logistyka i tracking.
8. `COMPLETED` — zakończenie sprawy.
9. `CANCELLED` — anulowanie.

## Finansowanie
System może rejestrować potrzebę finansowania, kwotę/zakres oraz status procesu. Nie wykonuje scoringu, nie podejmuje decyzji kredytowej i nie deklaruje przyznania finansowania. Decyzja jest zapisywana wyłącznie jako decyzja uprawnionego partnera finansującego.

## Poufność
Każda sprawa ma domyślnie:
- `confidentialityLevel = STRICT`,
- `externalDisclosureAllowed = false`.

Zewnętrzny payload transakcyjny jest z założenia minimalny i nie zawiera danych kontaktowych klienta, danych firmy, swobodnych opisów, informacji o konkurencji, informacji z miejsca pracy ani tajemnicy handlowej.

## Zakazane kategorie ujawnień
- informacje dotyczące konkurencji i zawodowych kontaktów z konkurencją,
- informacje o tym, co dzieje się w pracy lub wewnątrz organizacji,
- dane osobowe i dane chronione zasadami RODO,
- informacje objęte tajemnicą przedsiębiorstwa / tajemnicą handlową,
- wewnętrzne warunki zakupowe, źródła dostaw, marże, negocjacje i dane kontrahentów, jeśli nie są konieczne do konkretnej uprawnionej czynności.

## Zasada integracji zewnętrznych
Każda przyszła integracja (finansowanie, płatności, kurier, e-mail, ERP) musi:
1. mieć konkretny, udokumentowany cel,
2. korzystać z minimalnego zakresu danych,
3. mieć kontrolę dostępu i sekrety wyłącznie po stronie serwera,
4. nie logować pełnych danych wrażliwych,
5. nie omijać `externalDisclosureAllowed = false`,
6. posiadać odrębny przegląd prawny i bezpieczeństwa przed uruchomieniem produkcyjnym.

## OWNER
Tylko uwierzytelniony OWNER może ręcznie uruchamiać/przeliczać automatyzację oraz rejestrować decyzję partnera finansującego. Publiczny klient nie otrzymuje dostępu do wewnętrznych zdarzeń automatyzacji ani danych innych podmiotów.

## Ograniczenia
Moduł nie jest systemem księgowym, bankowym ani automatycznym doradcą finansowym. Nie zastępuje umowy, decyzji kredytowej, obowiązków podatkowych, AML/KYC ani obowiązków wynikających z RODO.
