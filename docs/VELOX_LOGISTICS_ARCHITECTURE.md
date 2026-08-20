# VELOX LOGISTICS — architektura integracji

Status: PREVIEW / DESIGN-ONLY. Bez publikacji produkcyjnej i bez automatycznego zawierania umów.

## Cel
VELOX LOGISTICS jest modułem logistycznym PROFESJA PREMIUM LIMITED powiązanym z RFQ, zamówieniami, KYC/KYB (gdy wymagane), Product Compliance, dokumentami, płatnościami/finansowaniem, kompletacją i akceptacjami klienta. Dostarczone przez OWNER logo VELOX ma być użyte jako identyfikacja wizualna sekcji po umieszczeniu zatwierdzonego assetu w repozytorium.

## Poziom 1 — portal klienta / odbiorcy
- podgląd zamówienia i przesyłki zgodnie z RBAC,
- zatwierdzanie wymaganych etapów procesu,
- status kompletacji i transportu,
- dane przesyłki w zakresie niezbędnym dla klienta,
- tracking wyłącznie po faktycznym otrzymaniu od zweryfikowanej integracji,
- dokumenty i komunikacja,
- historia zdarzeń przeznaczona dla klienta.

## Poziom 2 — panel OWNER / operacyjny
- intake zapytań transportowych,
- normalizacja parametrów: trasa, gabaryty, masa, terminy, Incoterms jeśli dotyczą, wymagania celne, ubezpieczenie i SLA,
- pobieranie rzeczywistych ofert od przewoźników/agentów przez API lub zatwierdzone integracje,
- porównanie ofert i przygotowanie negocjacji,
- rekomendacja na podstawie porównywalnego całkowitego kosztu i jakości, a nie deklaracji „najniższa cena na rynku”,
- OWNER-only: zatwierdzenie przewoźnika, negocjacji, umów i zobowiązań finansowych,
- dokumenty, zlecenie transportowe, statusy i pełny audit trail.

## Integracje
Każdy provider implementuje adapter o operacjach logicznych: requestQuote, refreshQuote, createShipmentDraft, submitShipmentAfterOwnerApproval, fetchTracking, normalizeWebhook, cancelIfSupported.

Zasady:
1. Brak fikcyjnych providerów, endpointów, trackingów i potwierdzeń.
2. Sekrety wyłącznie server-side; nigdy w URL, kliencie ani logach.
3. Webhook: weryfikacja podpisu/sekretu, timestamp/replay protection, schema validation, idempotency key i audit event.
4. Retry wyłącznie dla błędów przejściowych, exponential backoff + limit prób; operacje tworzące przesyłkę muszą być idempotentne.
5. Tracking zapisujemy dopiero po zweryfikowanej odpowiedzi API/webhooka. Powiązanie: providerShipmentId + orderId + tenant/customer scope. Dopiero wtedy numer jest ujawniany klientowi.
6. Statusy zewnętrzne są mapowane do kontrolowanego słownika wewnętrznego; nieznany status trafia do manual review zamiast automatycznej interpretacji.

## Bezpieczny model statusów
DRAFT -> DATA_REQUIRED -> READY_FOR_QUOTES -> QUOTES_RECEIVED -> OWNER_REVIEW -> OWNER_APPROVED -> BOOKING_PENDING -> BOOKED -> TRACKING_PENDING -> IN_TRANSIT -> DELIVERED.

Stany wyjątkowe: PROVIDER_ERROR, MANUAL_REVIEW, CUSTOMS_HOLD, CUSTOMER_ACTION_REQUIRED, CANCEL_REQUESTED, CANCELLED.

Przejścia OWNER_APPROVED i każde powodujące koszt/zobowiązanie wymagają jawnej autoryzacji OWNER. Status DELIVERED pochodzi z wiarygodnego zdarzenia providera lub ręcznie zweryfikowanego dowodu.

## Porównanie ofert
Porównujemy wyłącznie rzeczywiście otrzymane i możliwie porównywalne oferty. Model oceny uwzględnia: koszt bazowy, paliwo/dopłaty, ubezpieczenie, gabaryty/masę, trasę, czas dostawy, cła/opłaty, SLA/jakość, warunki odpowiedzialności i ważność oferty. System pokazuje braki i różnice zamiast fałszywej normalizacji.

## Renegocjacja co 10 dni roboczych
Workflow wyznacza kolejną datę na podstawie kalendarza dni roboczych. W terminie: odświeża możliwe do odświeżenia rzeczywiste quote'y, przygotowuje porównanie zmian, wskazuje wygasające warunki i generuje DRAFT rekomendacji/odnowienia. Nie akceptuje umowy ani ceny. Finalizacja pozostaje OWNER-only.

## Powiązania domenowe
LogisticsCase -> RFQ/Order -> Customer/Company -> KYC/KYB requirement -> ProductCompliance -> Fulfilment -> Shipment -> Documents -> Payment/Financing references -> Approvals -> AuditEvents.

Dane KYC/KYB nie są kopiowane do logistyki bez potrzeby; moduł otrzymuje minimalny status/identyfikator wymagany do decyzji.

## RBAC i bezpieczeństwo
Role: CUSTOMER, OPERATIONS, COMPLIANCE, OWNER. Negocjacje, wybór przewoźnika, umowy i finansowe zatwierdzenia: OWNER-only. Least privilege, server-side authorization na każdej operacji, szyfrowanie transport/storage zgodnie z użytym dostawcą, rotacja sekretów, redakcja PII w logach, retencja/minimalizacja danych, immutable-style audit events, correlationId i actorId.

## Warunki wdrożenia
PENDING_INTEGRATION do czasu dostarczenia i zweryfikowania dokumentacji/credentiali rzeczywistych przewoźników. PENDING_ASSET do czasu potwierdzenia ścieżki pliku logo VELOX w repozytorium. Żaden transport, tracking, webhook ani umowa nie może być oznaczony jako rzeczywisty na podstawie mocka/demo.
