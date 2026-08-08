# PROFESJA PREMIUM LIMITED™

Kompletna aplikacja B2B dla Finansowo-Handlowej Agencji PROFESJA PREMIUM LIMITED™.

## Zakres systemu

- strona główna marki i oferta B2B,
- katalog 18 kategorii / 72 kart produktowych,
- indywidualne zapytania ofertowe B2B,
- panel klienta i bezpieczne sprawdzanie statusu sprawy/zamówienia,
- panel OWNER do obsługi ofert i zamówień,
- Automatyzacja Finansowo‑Sprzedażowa z polityką poufności STRICT,
- procedura zarządczo-wykonawcza z pakietem `TransactionFormalities`,
- automatyczne uzupełnianie faktów negocjacyjno-transakcyjnych bez automatycznego podpisywania zgód,
- workflow ofert i realizacji zamówień,
- logistyka, przewoźnik, tracking i terminy dostawy,
- VELOX LOGISTICS — moduł dyspozytorski transportu door-to-door,
- BIOVERA — sklep/moduł detaliczny w budowie, bez aktywnej sprzedaży produktów regulowanych,
- sklepy internetowe w budowie pod `/shops`,
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
- `CRON_SECRET` — oddzielny, losowy sekret zabezpieczający harmonogram automatyzacji

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
- `/shops`
- `/shops/velox-logistics`
- `/shops/biovera`
- `/about`
- `/contact`
- `/terms`
- `/privacy`
- `/api/health`

OWNER:
- `/owner/login`
- `/owner`
- `/admin`
- `/admin/automation`
- `/admin/products`
- `/admin/offers`
- `/admin/orders`
- `/admin/dispatch`
- `/admin/orders/[id]/document/[type]`

Systemowe:
- `/api/cron/sales-automation` — zabezpieczony `CRON_SECRET` endpoint kontroli automatyzacji

## Proces B2B

1. Klient wybiera produkt lub składa indywidualne zapytanie.
2. System tworzy numer sprawy `PPL-...`, sprawę automatyzacji i rekord `TransactionFormalities`.
3. Automatyzacja synchronizuje etap procesu i wskazuje następną czynność.
4. Dane wynikające z negocjacji i transakcji — produkt, ilość, rynek, wartość, finansowanie oraz dane logistyczne — aktualizują pakiet formalności.
5. Zgody i podpisy nigdy nie są ustawiane automatycznie przez sam przebieg negocjacji; pozostają `PENDING` do odrębnej czynności właściwej osoby.
6. OWNER prowadzi warunki handlowe i rejestruje akceptację klienta.
7. Jeżeli występuje finansowanie, system prowadzi ścieżkę operacyjną, ale decyzję podejmuje wyłącznie uprawniony partner finansujący.
8. Po potwierdzonej akceptacji i wymaganych formalnościach może zostać utworzone zamówienie `ORD-...`.
9. Zamówienie przechodzi statusy realizacji i logistyki, a fakty logistyczne są synchronizowane z pakietem formalności.
10. Dla VELOX operator może prowadzić osobny workflow dyspozytorski: przyjęcie → wybór przewoźnika → planowanie odbioru → odbiór → transport → doręczenie.
11. OWNER może przygotować potwierdzenie zamówienia, ofertę handlową i dokument realizacji.
12. Klient może sprawdzić etap sprawy/zamówienia po numerze i adresie e-mail, w tym bezpieczny status VELOX.
13. Dzienny reconciliation job kontroluje spójność wszystkich spraw; OWNER może uruchomić pełną synchronizację również ręcznie.

## Poufność automatyzacji

Każda sprawa ma domyślnie `STRICT` oraz `externalDisclosureAllowed = false`.

Automatyzacja nie ujawnia ani nie eksportuje automatycznie:
- informacji o konkurencji i relacjach zawodowych z konkurencją,
- informacji z miejsca pracy,
- danych osobowych,
- tajemnicy handlowej,
- źródeł dostaw, danych dostawców i hurtowników,
- marż, cen zakupowych i innych wewnętrznych danych handlowych.

Log audytowy zapisuje etap i kategorię ograniczenia, ale nie kopiuje treści chronionych. Szczegóły znajdują się w `SALES_AUTOMATION_POLICY.md`.

## Bezpieczeństwo

- sesja OWNER podpisana HMAC,
- cookie `httpOnly`, `secure`, `sameSite=strict`,
- blokada seryjnych prób logowania,
- brak indeksowania paneli administracyjnych,
- brak publikacji danych dostawców i wewnętrznych danych operacyjnych,
- publiczne endpointy ograniczają i walidują dane wejściowe,
- harmonogram automatyzacji wymaga `CRON_SECRET`,
- decyzje finansowe nie są podejmowane autonomicznie przez aplikację,
- zgody, podpisy i oświadczenia woli pozostają human-in-the-loop,
- BIOVERA nie uruchamia sprzedaży produktów regulowanych bez odrębnego potwierdzenia zgodności prawnej i operacyjnej.

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
- `CRON_SECRET` jest skonfigurowany,
- `/api/health` zwraca gotowość aplikacji i bazy,
- Production Smoke Test przechodzi w całości.

Aktualny stan zamknięcia projektu znajduje się w `PROJECT_COMPLETION.md`.

## Dokumentacja dodatkowa

- `BRAND_GUIDELINES.md` — podstawowe zasady identyfikacji wizualnej i komunikacji,
- `B2B_AGREEMENT_TEMPLATE.md` — roboczy wzór umowy handlowej B2B,
- `SALES_AUTOMATION_POLICY.md` — zasady automatyzacji, poufności i human-in-the-loop,
- `TRANSACTION_MANAGEMENT_PROCEDURE.md` — procedura zarządczo-wykonawcza i reguły automatycznego uzupełniania formalności,
- `docs/FORMALITIES_SOURCE_MANIFEST.md` — rejestr integralności dokumentu źródłowego formalności,
- `DEPLOYMENT.md` — procedura wdrożenia,
- `PROJECT_COMPLETION.md` — końcowy status projektu.

© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.
