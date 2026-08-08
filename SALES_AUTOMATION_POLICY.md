# Automatyzacja Finansowo‑Sprzedażowa — polityka operacyjna

## Cel

Moduł automatyzuje obsługę procesu B2B od przyjęcia zapytania do zakończenia realizacji. Automatyzacja ma usprawniać pracę, pilnować kolejności etapów i spójności danych, ale nie zastępuje wymaganych decyzji człowieka ani uprawnionych instytucji.

## Automatyzowane czynności

- utworzenie sprawy automatyzacji po zapytaniu B2B,
- synchronizacja etapu z aktualnym statusem oferty i zamówienia,
- wyznaczanie następnej czynności operacyjnej,
- kontrola przygotowania oferty, akceptacji, zamówienia, realizacji, dokumentów i logistyki,
- rejestracja faktu wystąpienia ścieżki finansowania,
- rejestracja decyzji przekazanej przez uprawnionego partnera finansującego,
- dzienna kontrola spójności wszystkich spraw oraz ręczna synchronizacja z panelu OWNER,
- audyt zmian bez kopiowania treści oznaczonych jako chronione.

## Czynności wymagające człowieka lub podmiotu uprawnionego

- akceptacja warunków handlowych przez klienta,
- decyzja kredytowa, leasingowa lub inna decyzja o finansowaniu,
- ostateczne zatwierdzenie wiążącej oferty i umowy,
- decyzja o przekazaniu danych do konkretnego zewnętrznego odbiorcy,
- ocena podstawy prawnej i zakresu danych przed każdą nową integracją zewnętrzną.

System nie podejmuje autonomicznej decyzji kredytowej i nie przedstawia klientowi finansowania jako gwarantowanego.

## Poufność STRICT

Domyślne ustawienie każdej sprawy:

- `confidentialityLevel = STRICT`,
- `externalDisclosureAllowed = false`.

Automatyczny eksport danych jest zablokowany. W szczególności poza uprawnionym procesem nie wolno ujawniać ani przekazywać:

- informacji o konkurencji,
- informacji o zawodowych kontaktach lub relacjach z konkurencją,
- informacji z miejsca pracy i wewnętrznych informacji organizacyjnych,
- danych osobowych i danych objętych wymaganiami ochrony prywatności,
- tajemnic handlowych,
- źródeł dostaw, danych dostawców i hurtowników,
- marż, cen zakupowych, wewnętrznych kalkulacji i niepublicznych warunków handlowych.

## Minimalizacja danych

Ewentualny przyszły payload do integracji zewnętrznej nie powinien zawierać danych kontaktowych, nazwy firmy klienta, swobodnego opisu sprawy, nazwy produktu/marki, rynku docelowego ani źródeł handlowych, o ile nie są one bezwzględnie potrzebne dla wcześniej określonego i uprawnionego celu.

Każde rozszerzenie zakresu wymaga osobnej implementacji i kontroli odbiorcy, celu oraz podstawy przetwarzania.

## Audyt

Log automatyzacji zapisuje typ zdarzenia, etap i kategorię ograniczenia, ale nie kopiuje treści oznaczonej jako poufna. Dzięki temu można sprawdzić działanie automatu bez tworzenia dodatkowej kopii informacji chronionych.

## Harmonogram

Kluczowe zdarzenia synchronizują się od razu przy zmianie statusu oferty lub zamówienia. Dodatkowo endpoint `/api/cron/sales-automation` wykonuje kontrolę zbiorczą. Wywołanie wymaga sekretu `CRON_SECRET`.

Konfiguracja `vercel.json` uruchamia kontrolę raz dziennie, co jest zgodne także z ograniczeniami planu Hobby. Na planie umożliwiającym częstsze cron jobs harmonogram można zwiększyć bez zmiany logiki biznesowej.

## Zasada końcowa

Automatyzacja ma wykonywać czynności techniczne i organizacyjne, ale nie może omijać zgód, uprawnień, obowiązków prawnych ani zasad poufności. Jeżeli proces wymaga ujawnienia danych, którego system nie ma jawnie dozwolonego, operacja ma pozostać zablokowana.
