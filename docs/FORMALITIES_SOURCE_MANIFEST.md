# Rejestr dokumentu źródłowego formalności

- Dokument: `formalności projektu Profesja Premium Limited.pdf`
- Wersja operacyjna: `FORMALNOSCI-PPL-2026-08-08`
- Liczba stron: 2
- SHA-256 oryginału dostarczonego do projektu: `81f658c89be38435ee0f9d620c1bb89d416d5ac5efa3fa429fd460cfeb67fff1`
- Status: dokument źródłowy zachowywany bez automatycznego nanoszenia podpisu.

## Zasada integralności

Jeżeli dokument PDF jest przechowywany lub przenoszony pomiędzy systemami, suma SHA-256 powinna być sprawdzona przed użyciem. Każda wersja zmieniona, wypełniona lub podpisana powinna otrzymać własną sumę kontrolną i identyfikator wersji; nie należy nadpisywać oryginału.

## Powiązanie systemowe

Model `TransactionFormalities` zapisuje nazwę i wersję dokumentu źródłowego oraz automatycznie synchronizowane fakty transakcyjne. Zgody i podpisy pozostają oddzielnymi stanami `PENDING`, `ACCEPTED`, `DECLINED` lub `NOT_APPLICABLE` i nie są ustawiane automatycznie przez negocjacje, ofertę ani utworzenie zamówienia.
