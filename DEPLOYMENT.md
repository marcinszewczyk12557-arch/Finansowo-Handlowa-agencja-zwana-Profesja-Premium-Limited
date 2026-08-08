# PROFESJA PREMIUM LIMITED™ — wdrożenie produkcyjne

## Zweryfikowany build

Repozytorium przechodzi pełny build na Node.js 20:

- `npm install`
- `npx prisma generate`
- `npm run build`

GitHub Actions `Build Check` jest źródłem prawdy dla kompilowalności kodu.

## Vercel — wymagane ustawienia projektu

Dla docelowego projektu produkcyjnego ustaw:

- Framework Preset: `Next.js`
- Root Directory: katalog główny repozytorium (`./`)
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: pozostaw puste / domyślne dla Next.js
- Node.js: `20.x`
- Production Branch: `main`

Nie ustawiaj katalogu `app`, `public`, `src` ani innego podkatalogu jako Root Directory — `package.json`, `vercel.json`, `prisma` i `app` znajdują się w katalogu głównym repozytorium.

## Zmienne środowiskowe

Sam build działa bez sekretów, ale funkcje produkcyjne wymagają:

- `DATABASE_URL` — połączenie PostgreSQL
- `OWNER_EMAIL`
- `OWNER_PASSWORD_SALT`
- `OWNER_PASSWORD_HASH`
- `OWNER_SESSION_SECRET`

Wartości OWNER należy ustawić wyłącznie w bezpiecznych zmiennych środowiskowych hostingu. Nie commitować sekretów do repozytorium.

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

## Test końcowy

Po udanym deploymentcie sprawdź kolejno:

1. Strona główna i katalog.
2. Katalog → formularz zapytania z automatycznie przeniesioną nazwą produktu.
3. Zapis zapytania do PostgreSQL i numer `PPL-...`.
4. Panel OWNER i zmiana statusu oferty.
5. Utworzenie zamówienia `ORD-...` po akceptacji oferty.
6. Edycja danych dostawy i trackingu.
7. Dokumenty: potwierdzenie zamówienia, oferta handlowa, dokument realizacji.
8. Panel klienta — lookup po numerze sprawy/zamówienia i e-mailu.
9. Status wysyłki i dane dokumentów widoczne klientowi.

## Uwaga o projektach Vercela

Repozytorium było równocześnie podłączone do kilku projektów Vercela. Dla produkcji należy wybrać jeden docelowy projekt, ustawić powyższe parametry i używać go jako jedynego źródła domeny produkcyjnej.
