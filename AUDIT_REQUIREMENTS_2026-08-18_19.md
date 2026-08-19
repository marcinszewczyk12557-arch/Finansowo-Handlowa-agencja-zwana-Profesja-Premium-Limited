# PROFESJA PREMIUM LIMITED — przekrojowy audyt wymagań 18–19.08.2026

Gałąź kontrolowana: `preview/professional-catalog-225-logo`

Zasada statusów:
- **WYKONANE** — potwierdzone kodem oraz co najmniej jednym wdrożeniem Preview `READY`.
- **CZĘŚCIOWE** — istnieje bezpieczna implementacja lub struktura, ale brakuje pełnego zakresu, danych źródłowych albo testu funkcjonalnego.
- **BRAK** — brak potwierdzonej implementacji odpowiadającej wymaganiu.
- **WYMAGA DECYZJI / DANYCH WŁAŚCICIELA** — bezpieczne wykonanie wymaga literalnych danych lub akceptacji właściciela.

## Checklista

- [x] **WYKONANE — 50 kategorii/sklepów jako architektura katalogowa.** `data/franchiseCatalog.ts` zawiera 50 kategorii i 3 propozycje na kategorię; `data/franchiseOfferMatrix.ts` utrzymuje 50 kategorii oraz 5 profili sourcingowych na kategorię. Dodano także odrębne identyfikacje sklepów tematycznych (`b3b042e7…`), a Preview po zmianie ma status READY.
- [ ] **CZĘŚCIOWE — każdy sklep jako osobna szeroka specjalizacja z wyłącznie właściwym asortymentem.** Granice kategorii istnieją, ale potrzebna jest dalsza kontrola mapowania każdej marki, produktu, wariantu, materiału eksploatacyjnego i akcesorium do dokładnie jednego właściwego sklepu.
- [ ] **CZĘŚCIOWE — deduplikacja ofert.** Bazowy katalog nie generuje sztucznych wariantów tego samego rekordu, ale brak pełnego testu 50 sklepów pod kątem duplikatów SKU/model/brand+model.
- [ ] **BRAK — pełne karty SKU z aktualnymi zdjęciami, multimediami, parametrami, ceną, MOQ, dostępnością, źródłem i datą weryfikacji dla wszystkich sklepów.** Obecne dane są głównie profilami RFQ/sourcingowymi; nie wolno traktować ich jako pełnych ofert SKU.
- [ ] **CZĘŚCIOWE — panel marek marka→produkty.** `BrandProductExplorer` istnieje, ma filtr marka→produkty i monochromatyczne logotypy. Aktualnie lista obejmuje dziesiątki, a nie setki marek; część zdjęć jest poglądowa i nie jest przypisana do konkretnego SKU.
- [ ] **CZĘŚCIOWE — produkty, warianty i materiały eksploatacyjne.** Dodano dane merchandisingowe dla marek i materiałów eksploatacyjnych (`7d1e85d2…`), ale brak pełnego przypisania do konkretnych zweryfikowanych modeli/SKU.
- [ ] **CZĘŚCIOWE — Fotowoltaika jako pierwszy katalog.** Dodano evidence-first shortlist `3 rodziny × 3 kandydatów` (`7d977013…`) i Preview jest READY. Kandydaci mają bezpieczny status `SOURCE_CANDIDATE`; przed ofertą nadal trzeba potwierdzić dokładny model, aktualną cenę, MOQ, lead time, Incoterms, zakres certyfikatów i rynek PL/UE.
- [ ] **BRAK — Fotowoltaika zakończona jako pełny katalog publiczny SKU.** Nie ma jeszcze 9 kompletnych kart porównywalnych modeli z aktualną ceną/MOQ/dostępnością/legalnym zdjęciem i datowanym źródłem.
- [ ] **BRAK — Ogrzewanie jako drugi ukończony katalog.** W architekturze są HVAC i pompy ciepła, ale brak osobnego ukończonego katalogu „Ogrzewanie” z sekwencyjnie zweryfikowanymi SKU.
- [ ] **CZĘŚCIOWE — ciemny granat/czerń + jasna typografia + złote akcenty.** Część UI nadal używa białych kart i jasnych paneli; wymagany pełny audyt spójności motywu przed akceptacją wizualną.
- [ ] **CZĘŚCIOWE — mobile 9:16 / responsywność.** Layout korzysta z responsywnych gridów, ale brak potwierdzonego końcowego testu wszystkich kluczowych stron w widoku 9:16.
- [ ] **CZĘŚCIOWE — RFQ, zamówienia, dokumenty i logistyka.** Ścieżki RFQ i moduły B2B istnieją; pełny smoke test zależny od środowiska, bazy i sekretów nie jest jeszcze zaliczony dla całego przepływu.
- [ ] **CZĘŚCIOWE — SEO/AEO i dane strukturalne.** Istnieją sitemap/robots, strony tematyczne, dane strukturalne i własny panel „Przegląd AI”; nie oznacza to możliwości wymuszenia Google AI Overview.
- [ ] **CZĘŚCIOWE — kontekstowe finansowanie inwestycyjne na każdy sklep.** Istnieje warunkowa strona finansowania i odnośniki z kart, ale nie ma jeszcze odrębnego kontekstowego modułu dla każdego z 50 sklepów. Nie wolno gwarantować 100% finansowania, finansowania bez wkładu własnego ani „na oświadczenie” bez potwierdzonego produktu uprawnionego finansującego.
- [ ] **WYMAGA DANYCH WŁAŚCICIELA — 18 MEGA CENTRÓW.** `data/megaCentres.ts` tworzy 18 niepublikowalnych placeholderów z `officialName/fullAddress = null`, `publishable=false` i wyłączonym structured data (`baa4cb7b…`). Nazwy i adresy mają zostać wpisane wyłącznie literalnie z danych właściciela.
- [ ] **CZĘŚCIOWE — BIOVERA.** Dodano redefinicję SEO jako szeroki dział maszyn, urządzeń i aparatury specjalistycznej (`78fc80a7…`) oraz sitemap (`a3264379…`), oba Preview READY. Należy jeszcze doprowadzić zawartość widocznej strony i asortyment do tej samej definicji oraz usunąć/odseparować stare ograniczenie do zdrowia/farmacji tam, gdzie nadal występuje.
- [ ] **CZĘŚCIOWE — Sprzęt Ciężki.** Dodano dedykowaną stronę B2B oraz sitemap (`17a53c90…`, `4df39671…`), oba Preview READY. Brak jeszcze pełnych SKU dla grup: wydobywcze, rolnicze, budowlane, drogowe, leśne, komunalne, magazynowe, transportowe i przemysłowe.
- [ ] **CZĘŚCIOWE — REDMAGIC/Nubia.** Marka występuje w eksploratorze i ścieżce RFQ; konkretne modele, legalne materiały producenta, ceny i dostępność nadal wymagają potwierdzenia. Brak nieudokumentowanego twierdzenia o partnerstwie.
- [ ] **CZĘŚCIOWE — KYC/KYB, OWNER, bezpieczeństwo i Product Compliance.** Repozytorium zawiera odpowiednie warstwy i polityki, lecz końcowy test dostępu, sekretów, bazy, migracji, `/api/health`, crona i smoke test nie jest jeszcze podstawą do oznaczenia LIVE.
- [ ] **CZĘŚCIOWE — panel finansowy.** Elementy kalkulacyjne/finansowania istnieją, ale żadna prezentacja raty, kosztu lub finansowania nie może być wiążąca bez konkretnej kalkulacji, okresu, kosztu finansowania i decyzji finansującego.
- [ ] **CZĘŚCIOWE — szara karta „Przegląd AI”.** Moduł strony głównej został dodany (`c6649ff8…`). To własna karta PROFESJA; Google sam decyduje o treści prawdziwego AI Overview w wynikach wyszukiwania.

## Kolejność dalszej pracy

1. Fotowoltaika — zakończyć SKU-level verification, deduplikację, ceny/MOQ/dostępność/źródła, multimedia, build i Preview.
2. Ogrzewanie — identyczny proces od zera.
3. Następne sklepy — po jednym, bez przenoszenia asortymentu między specjalizacjami i bez duplikowania SKU.
4. Równolegle: spójny ciemny UI, mobile 9:16, SEO/AEO, finansowanie kontekstowe i testy RFQ.
5. 18 MEGA CENTRÓW pozostają niepublikowalne do czasu otrzymania literalnych nazw i adresów właściciela.
6. Bez merge do `main` i bez publikacji produkcyjnej bez akceptacji właściciela.
