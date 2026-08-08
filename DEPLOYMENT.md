# PROFESJA PREMIUM LIMITED™ — wdrożenie produkcyjne

## Zweryfikowany build

Repozytorium jest budowane i testowane na Node.js 24:

- `npm install`
- `npx prisma generate`
- `npm run build`

GitHub Actions `Build Check` jest źródłem prawdy dla kompilowalności kodu, a `Migration Check` weryfikuje świeży PostgreSQL i pełną historię migracji.

## Vercel — wymagane ustawienia projektu

Dla docelowego projektu produkcyjnego ustaw:

- Framework Preset: `Next.js`
- Root Directory: katalog główny repozytorium (`./`)
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: pozostaw puste / domyślne dla Next.js
- Node.js: `24.x`
- Production Branch: `main`

Nie ustawiaj katalogu `app`, `public`, `src` ani innego podkatalogu jako Root Directory — `package.json`, `vercel.json`, `prisma` i `app` znajdują się w katalogu głównym repozytorium.

## Zmienne środowiskowe

Sam build działa bez sekretów, ale pełne funkcje produkcyjne wymagają:

- `NEXT_PUBLIC_SITE_URL` — finalny publiczny adres strony,
- `DATABASE_URL` — połączenie PostgreSQL,
- `OWNER_EMAIL`,
- `OWNER_PASSWORD_SALT`,
- `OWNER_PASSWORD_HASH`,
- `OWNER_SESSION_SECRET`,
- `CRON_SECRET` — osobny losowy sekret zabezpieczający `/api/cron/sales-automation`.

Wartości OWNER i `CRON_SECRET` należy ustawić wyłącznie w bezpiecznych zmiennych środowiskowych hostingu. Nie commitować realnych sekretów do repozytorium.

## Baza danych

Po skonfigurowaniu `DATABASE_URL` uruchom:

```bash
npm run db:deploy
```

Dostępne są też:

```bash
npm run db:generate
npm run db:status
```

Migracje obejmują oferty, zamówienia, logistykę/dokumenty, ochronę logowania OWNER oraz Automatyzację Finansowo‑Sprzedażową.

## Automatyzacja Finansowo‑Sprzedażowa

Kluczowe zdarzenia synchronizują proces natychmiast przy nowych zapytaniach i zmianach statusów. Dodatkowo `vercel.json` definiuje dzienny cron:

- endpoint: `/api/cron/sales-automation`,
- harmonogram: `15 5 * * *` (UTC),
- autoryzacja: nagłówek `Authorization: Bearer <CRON_SECRET>`.

Endpoint nie powinien być udostępniany bez poprawnie ustawionego `CRON_SECRET`.

Panel OWNER `/admin/automation` umożliwia również ręczne uruchomienie pełnej synchronizacji spraw.

Zasady poufności i ograniczenia automatu opisuje `SALES_AUTOMATION_POLICY.md`.

## Test końcowy

Po udanym deploymentcie sprawdź kolejno:

1. Strona główna i katalog.
2. Katalog → formularz zapytania z automatycznie przeniesioną nazwą produktu.
3. Zapis zapytania do PostgreSQL i numer `PPL-...`.
4. Utworzenie sprawy w `/admin/automation` i domyślne `STRICT` / zablokowany eksport zewnętrzny.
5. Panel OWNER i zmiana statusu oferty.
6. Jeżeli występuje finansowanie — rejestrację ścieżki bez autonomicznej decyzji finansowej.
7. Utworzenie zamówienia `ORD-...` po potwierdzonej akceptacji oferty.
8. Edycja danych dostawy i trackingu.
9. Dokumenty: potwierdzenie zamówienia, oferta handlowa, dokument realizacji.
10. Panel klienta — lookup po numerze sprawy/zamówienia i e-mailu.
11. Status wysyłki i dane dokumentów widoczne klientowi.
12. Ręczne uruchomienie pełnej synchronizacji w `/admin/automation`.
13. `/api/health` zwraca gotowość aplikacji i bazy.
14. `Production Smoke Test` przechodzi w całości.

## Uwaga o projektach Vercela

Repozytorium było równocześnie podłączone do kilku projektów Vercela. Dla produkcji należy używać jednego docelowego projektu `profesja-premium-limited` jako jedynego źródła domeny produkcyjnej.
