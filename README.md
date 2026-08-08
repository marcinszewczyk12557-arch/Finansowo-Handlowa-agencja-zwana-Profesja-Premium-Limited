# PROFESJA PREMIUM LIMITED™

Kompletna aplikacja B2B dla Finansowo-Handlowej Agencji PROFESJA PREMIUM LIMITED™.

## Zakres systemu

- strona główna marki i oferta B2B,
- katalog 18 kategorii / 72 kart produktowych,
- indywidualne zapytania ofertowe B2B,
- panel klienta i bezpieczne sprawdzanie statusu sprawy/zamówienia,
- panel OWNER do obsługi ofert i zamówień,
- workflow ofert i realizacji zamówień,
- logistyka, przewoźnik, tracking i terminy dostawy,
- dokumenty handlowe przygotowane do druku / PDF,
- PostgreSQL + Prisma,
- migracje produkcyjne,
- ochrona logowania OWNER i rate limiting,
- health/readiness endpoint,
- GitHub Actions: build check, migration check i production smoke test,
- SEO: metadata, sitemap i robots.

## Stack

- Next.js / React / TypeScript
- Node.js 24
- PostgreSQL
- Prisma 6.19
- Vercel (docelowy hosting)
- GitHub Actions

## Uruchomienie lokalne

1. Skopiuj `.env.example` do `.env.local` i uzupełnij wartości.
2. Uruchom `npm install`.
3. Uruchom `npm run db:deploy` dla skonfigurowanej bazy.
4. Uruchom `npm run dev`.
5. Otwórz `http://localhost:3000`.

## Zmienne środowiskowe

Wymagane dla pełnej wersji produkcyjnej:

- `DATABASE_URL`
- `OWNER_EMAIL`
- `OWNER_PASSWORD_SALT`
- `OWNER_PASSWORD_HASH`
- `OWNER_SESSION_SECRET`
- `NEXT_PUBLIC_SITE_URL`

Sekretów i haseł nie należy commitować do repozytorium.

## Komendy

- `npm run dev` — środowisko developerskie
- `npm run build` — build produkcyjny
- `npm run start` — start builda
- `npm run db:generate` — generacja Prisma Client
- `npm run db:deploy` — wdrożenie migracji
- `npm run db:status` — status migracji

## Najważniejsze ścieżki

Publiczne:
- `/`
- `/catalog`
- `/products/[id]`
- `/offers/new`
- `/dashboard`
- `/about`
- `/contact`
- `/terms`
- `/privacy`
- `/api/health`

OWNER:
- `/owner/login`
- `/owner`
- `/admin`
- `/admin/products`
- `/admin/offers`
- `/admin/orders`
- `/admin/orders/[id]/document/[type]`

## Proces B2B

1. Klient wybiera produkt lub składa indywidualne zapytanie.
2. System tworzy numer sprawy `PPL-...`.
3. OWNER prowadzi sprawę przez statusy oferty.
4. Po akceptacji OWNER tworzy zamówienie `ORD-...`.
5. Zamówienie przechodzi statusy realizacji i logistyki.
6. OWNER może przygotować potwierdzenie zamówienia, ofertę handlową i dokument realizacji.
7. Klient może sprawdzić etap sprawy/zamówienia po numerze i adresie e-mail.

## Bezpieczeństwo

- sesja OWNER podpisana HMAC,
- cookie `httpOnly`, `secure`, `sameSite=strict`,
- blokada seryjnych prób logowania,
- brak indeksowania paneli administracyjnych,
- brak publikacji danych dostawców i wewnętrznych danych operacyjnych,
- publiczne endpointy ograniczają i walidują dane wejściowe.

## CI / QA

Repo zawiera workflowy:

- `Build Check` — pełny build aplikacji na Node 24,
- `Migration Check` — świeży PostgreSQL + `prisma migrate deploy`,
- `Production Smoke Test` — kontrola kluczowych publicznych ścieżek po wdrożeniu.

## Produkcja

Szczegóły wdrożenia znajdują się w `DEPLOYMENT.md`.

Docelowy projekt Vercel: `profesja-premium-limited`.

Warunek uznania produkcji za zakończoną:

- deployment Vercel = success,
- produkcyjny PostgreSQL działa,
- migracje są wdrożone,
- `/api/health` zwraca gotowość aplikacji i bazy,
- Production Smoke Test przechodzi w całości.

## Dokumentacja dodatkowa

- `BRAND_GUIDELINES.md` — podstawowe zasady identyfikacji wizualnej i komunikacji,
- `B2B_AGREEMENT_TEMPLATE.md` — roboczy wzór umowy handlowej B2B,
- `DEPLOYMENT.md` — procedura wdrożenia.

© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.
