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

---

## Dodatkowe moduły (wdrożone 2026-08-17)

### Bramy zakończenia sprawy (Completion Gates)

Moduł `lib/completionGate.ts` ocenia obowiązkowe warunki przed oznaczeniem sprawy jako `COMPLETED`:

1. `ORDER_FULFILLED` — zamówienie istnieje i zostało dostarczone.
2. `FINAL_SIGNATURE` — status podpisu finalnego to `SIGNED` lub `APPROVED` (nie `PENDING`).
3. `REQUIRED_CONSENTS` — kluczowe zgody klienta nie są w statusie `PENDING`.
4. `FINANCING_RESOLVED` — jeśli żądano finansowania, decyzja partnera jest zarejestrowana.
5. `INVOICE_ISSUED` — ostrzeżenie (nie blokada twarda): co najmniej jedna faktura w statusie `ISSUED`.

**AI** ocenia kompletność i generuje sugestię informacyjną. AI nigdy nie zastępuje wymaganego zatwierdzenia ludzkiego, prawnego ani finansowego.

Oznaczenie `COMPLETED` przez OWNER wymaga pozytywnego wyniku bram twardych (1–4).

API: `GET /api/owner/offers/[id]/completion-gates` (ocena), `POST` z `action: "MARK_COMPLETED"` (finalny zapis).

### Fakturowanie z bramą VAT

Moduł `lib/vatEligibility.ts` i `lib/invoiceGeneration.ts`:

- VAT 0% (`EXEMPT_0`) jest stosowany **wyłącznie** gdy spełnione są konkretne przesłanki faktyczne.
- Globalne ustawienie VAT 0% jest **zabronione**.
- Jeśli brakuje danych lub sytuacja jest niejednoznaczna, wynik to `MANUAL_REVIEW` — wymagany ręczny przegląd stawki.
- Wynik bramy VAT (`vatEligibility`, `vatEligibilityNote`, `vatRate`) jest zapisywany na fakturze.
- OWNER może stosować ręczne nadpisanie (`vatOverride`) z notatką uzasadnienia.

API: `POST /api/owner/invoices` (tworzenie faktury), `GET /api/owner/invoices/[id]`.

### Pakiet faktoringowy

Moduł `lib/factoringExport.ts` generuje eksport dla faktoringu krajowego/międzynarodowego:

Pola eksportu: numer/data/termin faktury, sprzedawca, nabywca, NIP, waluta, kwota netto/VAT/brutto, referencja PO/umowy, dowód dostawy, IBAN, status cesji/zgoda, referencja audytowa.

Cesja wierzytelności **nie jest automatyczna** — wymaga odrębnej, udokumentowanej zgody stron i decyzji uprawnionej instytucji finansującej.

API: `POST /api/owner/invoices/[id]` z `action: "FACTORING_EXPORT"` lub `action: "FACTORING_ASSIGNMENT"`.

### Linki etapów (Stage Links)

Moduł `lib/stageLinkService.ts`:

- Abstrakcja kompatybilna z Bitly, Rebrandly, Short.io, Dub.
- Link **wyłącznie rejestruje zdarzenie analityczne**. Kliknięcie nigdy nie tworzy długu, zobowiązania finansowego ani zgody prawnej.
- Sekrety API (tokeny dostawców) przechowywane wyłącznie po stronie serwera w zmiennych środowiskowych.
- Żadne wrażliwe dane nie pojawiają się w publicznym URL.
- Linki mogą być wygasające i dezaktywowane przez OWNER.

Zmienne środowiskowe (opcjonalne):
- `STAGELINK_BITLY_TOKEN`
- `STAGELINK_REBRANDLY_KEY`, `STAGELINK_REBRANDLY_DOMAIN`
- `STAGELINK_SHORTIO_KEY`, `STAGELINK_SHORTIO_DOMAIN`
- `STAGELINK_DUB_TOKEN`, `STAGELINK_DUB_DOMAIN`

API: `POST /api/owner/stage-links` (OWNER — tworzenie/dezaktywacja/lista zdarzeń), `POST /api/stage-link/[token]` (publiczny — rejestracja zdarzenia kliknięcia).

### Archiwum Android (eksport transakcji)

Moduł `lib/androidArchive.ts` generuje manifest JSON opisujący strukturę folderów eksportu:

```
PROFESJA PREMIUM LIMITED/INFORMACJE TRANSAKCYJNE/[TRANSACTION_ID_CLIENT]/
  ├── oferta/
  ├── akceptacje/
  ├── kyc-kyb/
  ├── umowy/
  ├── zgodnosc-produktu/
  ├── zamowienie/
  ├── platnosci/
  ├── logistyka-tracking/
  ├── faktury/
  ├── rma/
  └── audyt-zamkniecia/
```

**Ograniczenia Android:**
- Zapis plików na urządzeniu musi odbywać się przez Storage Access Framework (SAF, `ACTION_OPEN_DOCUMENT_TREE`).
- Aplikacja **NIE może** żądać nieograniczonego dostępu do pamięci (`MANAGE_EXTERNAL_STORAGE`, `READ/WRITE_EXTERNAL_STORAGE` dla API 29+).
- Manifest opisuje strukturę — faktyczny I/O plików wykonuje klient Android z użyciem URI wybranych przez użytkownika.

API: `GET /api/owner/offers/[id]/archive-manifest`.

### Bezpieczeństwo i poufność

Wszystkie nowe endpointy OWNER wymagają sesji OWNER (`isOwnerSession`). Publiczny endpoint `/api/stage-link/[token]` przyjmuje wyłącznie anonimowe zdarzenia analityczne — nie zwraca żadnych danych wewnętrznych. Linki stagingowe nie zawierają danych wrażliwych w URL.
