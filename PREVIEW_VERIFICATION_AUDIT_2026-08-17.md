# PROFESJA PREMIUM LIMITED™ — audyt preview 2026-08-17

Zakres: wyłącznie gałąź `preview/professional-catalog-225-logo`. Dokument nie zatwierdza publikacji produkcyjnej ani merge do `main`.

## Stan potwierdzony

- Publiczny katalog pokazuje 5 pozycji z ceną katalogową PROFESJA oraz 45 rodzin produktów w kolejce do weryfikacji, czyli docelowo około 50 pozycji.
- Pozycje z kolejki są oznaczone jako wymagające weryfikacji przed publikacją; sam wpis w kolejce nie oznacza potwierdzonej dostępności, certyfikacji ani gotowości do sprzedaży.
- Nagłówek korzysta z `/profesja-logo.svg`.
- Polityka cenowa preview w `data/pricing.ts` ma mnożnik sprzedażowy `3.25` liczony od zweryfikowanej ceny producenta/dostawcy; podatki, cło, transport i inne koszty transakcyjne są rozliczane osobno w ofercie końcowej.
- Publiczny katalog zawiera zastrzeżenie, że CE/ISO ani deklaracja zgodności nie są prezentowane jako potwierdzone bez dokumentu odnoszącego się do konkretnego produktu, wariantu i rynku docelowego.
- `BUSINESS_MODULES_PREVIEW.md` stosuje zasadę: brak dokumentu = brak statusu „zweryfikowano”.

## Problem wymagający dalszej weryfikacji

Aktualne źródła dowodowe dostawców nie są jeszcze wystarczająco jednolite, aby automatycznie traktować wszystkie rekordy jako pełny dowód statusu dostawcy i ochrony zamówienia:

1. W `data/supplierEvidenceRegistry.ts` część odnośników ma charakter ogólnych stron Alibaba.com zamiast jednoznacznego, dostawca-/oferta-specyficznego dowodu.
2. W `data/strictQualifiedOffers.ts` część `supplierEvidenceUrl` prowadzi do stron kategorii/wyszukiwania, a `tradeAssuranceEvidenceUrl` bywa ogólną stroną programu Trade Assurance. Sama ogólna strona programu nie dowodzi, że konkretna oferta lub konkretny dostawca jest objęty ochroną zamówienia.
3. Z tego powodu przed publicznym użyciem sformułowań „Verified Supplier”, „Trade Assurance potwierdzone”, „CE/ISO zweryfikowane” lub podobnych dla konkretnej oferty należy zachować dowód odnoszący się do konkretnego dostawcy, produktu/wariantu i aktualnego stanu oferty.

## Bramka publikacyjna dla pojedynczej oferty

Pozycja może otrzymać status „zweryfikowana” dopiero po potwierdzeniu i archiwizacji co najmniej:

- tożsamości prawnej dostawcy i jego zgodności z podmiotem widocznym na platformie;
- aktualnego statusu Verified Supplier oraz wymaganego stażu, jeżeli status ten jest komunikowany publicznie;
- możliwości realizacji konkretnego zamówienia jako Trade Assurance order, jeżeli jest to warunek sprzedaży;
- ceny producenta/dostawcy dla konkretnego wariantu, ilości i warunków handlowych;
- wymaganych dokumentów zgodności dla konkretnego produktu i rynku docelowego, w tym CE/DoC/certyfikatu jednostki notyfikowanej tylko wtedy, gdy mają zastosowanie;
- zakresu i ważności dokumentów ISO — wyłącznie dla właściwego podmiotu i zakresu;
- podstawowych warunków dostawy, ubezpieczenia, odprawy, gwarancji i reklamacji.

## Następny bezpieczny etap

- Ujednolicić rejestr dowodów tak, aby publiczny status „zweryfikowana” był nadawany wyłącznie rekordom z dowodami dostawca-/oferta-specyficznymi.
- Nie dodawać kolejnych pozycji do części cenowej wyłącznie na podstawie stron kategorii, wyników wyszukiwania lub deklaracji handlowych.
- Nie ujawniać publicznie kosztów źródłowych, danych dostawców ani wewnętrznego mnożnika cenowego.
- Zachować `main` bez zmian do czasu wyraźnej akceptacji właściciela projektu.
