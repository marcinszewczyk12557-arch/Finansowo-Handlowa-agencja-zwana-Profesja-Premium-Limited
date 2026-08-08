# PROFESJA PREMIUM LIMITED™ — Polityka kwalifikacji dostawców i ochrony transakcji

## Reguła bezwzględna
Każdy rodzaj towaru publikowany jako aktywna oferta zakupowa musi pochodzić od dostawcy, dla którego przed zakupem potwierdzono łącznie:

1. status **Verified Supplier** na Alibaba.com,
2. co najmniej **3 lata stażu** na Alibaba.com,
3. możliwość zawarcia konkretnego zamówienia przez **Trade Assurance**,
4. płatność przez kanał wymagany przez Alibaba.com dla ochrony zamówienia,
5. aktualną dostępność, specyfikację, gwarancję i wymagane dokumenty zgodności.

Brak któregokolwiek warunku blokuje wykonanie zakupu i wymaga zmiany dostawcy albo ponownej kwalifikacji.

## Standard dowodowy — obowiązkowy
Samo ustawienie pól `verifiedSupplier: true` albo `tradeAssuranceRequired: true` w kodzie nie jest dowodem kwalifikacji. Dla każdego dostawcy trzeba przechowywać wewnętrznie:

- źródło Alibaba.com identyfikujące konkretnego dostawcę i pokazujące status Verified Supplier,
- źródło Alibaba.com pokazujące jego staż wynoszący co najmniej 3 lata,
- źródło powiązane z tym dostawcą lub konkretną ofertą wskazujące możliwość realizacji zamówienia z Trade Assurance,
- datę ostatniej kontroli źródeł,
- przy zamówieniu: ponowne potwierdzenie Trade Assurance dla konkretnej transakcji przed płatnością.

Ogólna strona informacyjna Trade Assurance nie może sama w sobie stanowić dowodu, że konkretny dostawca lub konkretne zamówienie jest objęte ochroną.

## Świeżość weryfikacji
Status dostawcy jest dynamiczny. Źródła kwalifikacyjne powinny być sprawdzane ponownie przed publikacją nowej oferty oraz zawsze bezpośrednio przed zakupem. Jeżeli nie można ponownie potwierdzić któregoś warunku, oferta pozostaje informacyjna albo jest wycofywana z aktywnej sprzedaży do czasu ponownej kwalifikacji.

## Ważne rozróżnienie
Trade Assurance jest programem ochrony zamówienia / kupującego, a nie polisą ubezpieczeniową. Dlatego projekt nie opisuje go jako klasycznego „ubezpieczenia producenta”. Ochrona ma dotyczyć każdej realnej transakcji PROFESJA realizowanej przez to źródło, a warunek jest sprawdzany ponownie przed płatnością.

## Poufność
Nazwa dostawcy, jego karta źródłowa i link dowodowy są danymi operacyjnymi PROFESJA. Publiczny katalog może prezentować status kwalifikacji, ale nie musi ujawniać danych dostawcy.

## Antyduplikacja
Jedna oferta publiczna = jeden unikalny identyfikator i jeden unikalny tytuł produktu. Powtarzające się warianty marketingowe nie są traktowane jako osobne oferty.

## Bramka wykonawcza
Do zakupu można przejść wyłącznie, gdy `supplierOrderGate()` zwraca `true`: staż >= 3 lata, Verified Supplier = true, Trade Assurance dla konkretnego zamówienia = true oraz płatność przez wymagany kanał Alibaba.com = true.

Dodatkowo operator musi posiadać aktualny dowód źródłowy przypisany do konkretnego dostawcy. Brak dowodu = brak zgody na zakup.

© PROFESJA PREMIUM LIMITED™ — Wszelkie prawa zastrzeżone.
