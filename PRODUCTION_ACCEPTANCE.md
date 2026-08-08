# PROFESJA PREMIUM LIMITED™ — Final Production Acceptance

## A. Marka i strona główna

- [x] Logo PROFESJA używane jako główny znak.
- [x] Nazwa PROFESJA PREMIUM LIMITED™ eksponowana w hero.
- [x] Sekcja „DNI OTWARCIA”.
- [x] Model komunikacji B2B oparty o indywidualną wycenę.
- [x] Oferta Nubia / REDMAGIC bez sugerowania nieistniejącego partnerstwa.
- [x] OEM / ODM / Private Label.
- [x] © Wszelkie prawa zastrzeżone.
- [x] Brak agresywnych animacji / 3D.

## B. Katalog

- [x] 18 kategorii.
- [x] 72 karty produktowe.
- [x] Karty produktu prowadzą do zapytania B2B.
- [x] Produkt jest przekazywany automatycznie do formularza.
- [x] Dokumentacja, gwarancja i materiały są oznaczane jako wymagające potwierdzenia dla konkretnego wariantu.

## C. Proces klienta

- [x] Formularz zapytania zapisuje dane w PostgreSQL.
- [x] Numer sprawy `PPL-...`.
- [x] Panel klienta.
- [x] Status zapytania przed utworzeniem zamówienia.
- [x] Bezpieczny lookup po numerze + e-mailu.
- [x] Numer zamówienia `ORD-...`.
- [x] Tracking, przewoźnik i termin dostawy.
- [x] Numery dokumentów handlowych.

## D. OWNER / Admin

- [x] Logowanie OWNER.
- [x] Podpisana sesja i bezpieczne cookie.
- [x] Rate limit logowania.
- [x] Ochrona `/admin`, `/admin/automation`, `/admin/products`, `/admin/offers`, `/admin/orders`.
- [x] Workflow statusów ofert.
- [x] Tworzenie zamówienia po akceptacji oferty.
- [x] Workflow realizacji zamówienia.
- [x] Edycja danych logistycznych i dokumentowych.
- [x] Dokumenty do druku/PDF.
- [x] Ręczna pełna synchronizacja Automatyzacji Finansowo‑Sprzedażowej.

## E. Automatyzacja Finansowo‑Sprzedażowa i poufność

- [x] Automatyczne utworzenie sprawy po zapytaniu B2B.
- [x] Synchronizacja etapu po zmianie statusu oferty.
- [x] Synchronizacja etapu po utworzeniu/zmianie zamówienia.
- [x] Wyznaczanie następnej czynności operacyjnej.
- [x] Obsługa ścieżki finansowania bez autonomicznej decyzji kredytowej.
- [x] Rejestracja decyzji przekazanej przez uprawnionego partnera finansującego.
- [x] Domyślne `confidentialityLevel = STRICT`.
- [x] Domyślne `externalDisclosureAllowed = false`.
- [x] Klasyfikacja treści dotyczących konkurencji, miejsca pracy, danych osobowych, tajemnicy handlowej i wewnętrznych danych handlowych.
- [x] Audyt bez kopiowania chronionej treści.
- [x] Zminimalizowany payload przyszłych integracji zewnętrznych.
- [x] Zabezpieczony endpoint `/api/cron/sales-automation`.
- [x] Dzienny reconciliation cron w `vercel.json`.
- [x] `SALES_AUTOMATION_POLICY.md`.

## F. Dane i bezpieczeństwo

- [x] Prisma + PostgreSQL.
- [x] Migracje dla ofert.
- [x] Migracje dla zamówień.
- [x] Migracje dla logistyki/dokumentów.
- [x] Migracja rate-limit OWNER.
- [x] Migracja Automatyzacji Finansowo‑Sprzedażowej.
- [x] Fresh PostgreSQL migration check.
- [x] Walidacja publicznego endpointu ofert.
- [x] Kryptograficzne numery referencyjne.
- [x] `/api/health`.

## G. SEO i publikacja

- [x] Global metadata.
- [x] Canonical URL.
- [x] Open Graph.
- [x] `sitemap.xml`.
- [x] `robots.txt` z blokadą admin/API.
- [x] `NEXT_PUBLIC_SITE_URL` w `.env.example`.

## H. Dokumentacja

- [x] README.
- [x] DEPLOYMENT.md.
- [x] BRAND_GUIDELINES.md.
- [x] B2B_AGREEMENT_TEMPLATE.md.
- [x] SALES_AUTOMATION_POLICY.md.
- [x] Regulamin serwisu.
- [x] Polityka prywatności opisująca faktyczne przepływy danych.

## I. Automatyczne testy

- [x] Build Check — Node 24.
- [x] Migration Check — świeży PostgreSQL 16.
- [x] Production Smoke Test przygotowany.

## J. Elementy wymagające środowiska produkcyjnego / danych właściciela

Poniższe elementy nie mogą być zakończone samym kodem repozytorium:

- [ ] jeden kanoniczny Vercel deployment ma status `success`,
- [ ] Vercel Root Directory = `./`,
- [ ] projekt Vercel używa Node 24,
- [ ] ustawiony produkcyjny `DATABASE_URL`,
- [ ] ustawione rzeczywiste sekrety OWNER,
- [ ] ustawiony osobny `CRON_SECRET`,
- [ ] wykonane `prisma migrate deploy` na produkcyjnej bazie,
- [ ] `/api/health` zwraca gotowość aplikacji i bazy,
- [ ] `/api/cron/sales-automation` działa wyłącznie z prawidłowym `CRON_SECRET`,
- [ ] Production Smoke Test przechodzi na finalnym URL,
- [ ] wzór umowy B2B uzupełniony o prawdziwe dane rejestrowe i zatwierdzony prawnie,
- [ ] regulamin i polityka prywatności uzupełnione o prawdziwe dane administratora/podmiotu i zatwierdzone przed uruchomieniem sprzedaży.

## Warunek końcowego odbioru LIVE

Projekt otrzymuje status **LIVE / PRODUCTION ACCEPTED** po zaznaczeniu wszystkich pozycji w sekcji J.
