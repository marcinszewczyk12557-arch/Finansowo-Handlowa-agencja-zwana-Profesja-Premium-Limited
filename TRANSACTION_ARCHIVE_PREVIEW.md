# PROFESJA PREMIUM LIMITED™ — standard archiwizacji transakcji (preview)

Dokument określa bezpieczny, odwracalny standard archiwizacji dokumentacji transakcyjnej. Nie tworzy samodzielnie zobowiązań prawnych, podatkowych ani finansowych.

## 1. Identyfikator transakcji

Każda sprawa otrzymuje jeden niezmienny identyfikator w formacie `PPL-YYYYMM-XXXXXX`. Identyfikator jest używany we wszystkich dokumentach, logach audytowych i katalogach eksportu.

## 2. Zalecana struktura katalogów

```text
PROFESJA PREMIUM LIMITED/
└── INFORMACJE TRANSAKCYJNE/
    └── [TRANSACTION_ID]/
        ├── 01-oferta/
        ├── 02-akceptacje/
        ├── 03-kyc-kyb/
        ├── 04-umowy-i-zgody/
        ├── 05-zgodnosc-produktu/
        ├── 06-zamowienie/
        ├── 07-platnosci/
        ├── 08-logistyka-tracking/
        ├── 09-faktury/
        ├── 10-rma-reklamacje/
        └── 11-audyt-zamkniecia/
```

## 3. Zasada dowodowa dla zgodności produktu

Status `ZWERYFIKOWANO` może zostać nadany wyłącznie wtedy, gdy istnieje dowód odnoszący się do konkretnego producenta, produktu, wariantu i rynku docelowego. Logo, opis marketplace, wiadomość z komunikatora ani ogólny certyfikat firmy nie są wystarczającym dowodem zgodności konkretnego produktu.

Dla CE/UE należy przechowywać co najmniej dokument źródłowy lub jego kontrolowaną kopię, datę weryfikacji, zakres produktu/wariantu, rynek docelowy oraz osobę/rolę dokonującą weryfikacji. Dla ISO należy rozdzielać certyfikację systemu zarządzania organizacji od zgodności samego produktu.

## 4. KYC/KYB i dane wrażliwe

Dokumenty KYC/KYB, dane identyfikacyjne osób fizycznych, prywatne dane rozliczeniowe, ceny źródłowe, marże oraz dane dostawców nie mogą trafiać do publicznych assetów, repozytorium frontendowego ani publicznych URL-i.

W publicznej warstwie można eksponować wyłącznie status procesu, np. `weryfikacja w toku`, `zweryfikowano dokumentacyjnie`, `wymaga uzupełnienia`, bez ujawniania dokumentów źródłowych.

## 5. Płatności i rozliczenia

Dokumentacja archiwalna może przechowywać potwierdzenia płatności, harmonogramy i faktury, ale sam zapis w archiwum nie tworzy długu, cesji, faktoringu ani prawa do zastosowania określonej stawki VAT. Takie skutki wymagają odrębnej podstawy prawnej i właściwej decyzji uprawnionej osoby.

## 6. Logistyka i tracking

Dla każdej przesyłki należy przechowywać numer trackingowy, przewoźnika, datę nadania, potwierdzenie doręczenia i — jeżeli występuje — udokumentowaną dyspozycję przekierowania. Dane odbiorcy należy ograniczać do minimum niezbędnego do realizacji dostawy.

## 7. Android i eksport lokalny

Jeżeli powstanie aplikacja Android, zapis archiwum na urządzeniu powinien korzystać z systemowego Storage Access Framework (`ACTION_OPEN_DOCUMENT_TREE`) i folderu wybranego przez użytkownika. Nie należy żądać nieograniczonego dostępu do całej pamięci urządzenia, jeżeli nie jest to bezwzględnie wymagane przez funkcję aplikacji.

## 8. Audyt zamknięcia

Zamknięcie sprawy powinno zapisywać co najmniej: identyfikator transakcji, stan zamówienia, stan dostawy, listę podpisanych dokumentów, stan wymaganych zgód, stan rozliczenia oraz listę braków lub wyjątków. System AI może wskazywać braki, ale nie może sam zastępować decyzji prawnej, finansowej, podatkowej ani właścicielskiej.

## 9. Zasada preview

Ten standard jest wdrażany wyłącznie w środowisku preview. Nie oznacza zatwierdzenia produkcyjnego ani zgody na automatyczne scalanie do `main`.
