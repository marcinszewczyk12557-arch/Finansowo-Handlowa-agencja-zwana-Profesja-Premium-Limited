export type FranchiseProduct = {
  id: string;
  category: string;
  title: string;
  use: string;
  featured: boolean;
};

const catalogBlueprint: Array<[string, [string, string, string]]> = [
  ['Smartfony i urządzenia mobilne', ['Smartfon premium 5G', 'Smartfon biznesowy z dużą pamięcią', 'Wytrzymały smartfon terenowy']],
  ['Laptopy i komputery mobilne', ['Laptop biznesowy premium', 'Mobilna stacja robocza', 'Ultrabook klasy executive']],
  ['Komputery stacjonarne i mini PC', ['Mini PC biznesowy', 'Stacja robocza dla projektantów', 'Komputer all-in-one premium']],
  ['Monitory i wyświetlacze', ['Monitor 4K do biura', 'Monitor ultrapanoramiczny', 'Interaktywny ekran konferencyjny']],
  ['Serwery i infrastruktura IT', ['Serwer rack dla MŚP', 'Serwer plików NAS', 'Szafa rack z wyposażeniem']],
  ['Sieci i telekomunikacja', ['Router klasy biznesowej', 'Przełącznik zarządzalny PoE', 'System Wi-Fi mesh dla firmy']],
  ['Cyberbezpieczeństwo sprzętowe', ['Firewall sprzętowy UTM', 'Bezpieczna brama VPN', 'Sprzętowy moduł uwierzytelniania']],
  ['Drukarki i urządzenia biurowe', ['Drukarka laserowa biznesowa', 'Urządzenie wielofunkcyjne A3', 'Skaner dokumentowy wysokiej wydajności']],
  ['Meble biurowe premium', ['Biurko executive', 'Fotel ergonomiczny premium', 'Stół konferencyjny modułowy']],
  ['Wyposażenie recepcji i lobby', ['Lada recepcyjna premium', 'Zestaw mebli lobby', 'Cyfrowy kiosk informacyjny']],
  ['Oświetlenie profesjonalne', ['Oprawa liniowa LED premium', 'System oświetlenia biurowego DALI', 'Lampa dekoracyjna hospitality']],
  ['Smart Home i automatyka budynkowa', ['Centralny kontroler smart building', 'Panel dotykowy automatyki', 'Zestaw czujników budynkowych']],
  ['Kontrola dostępu i bezpieczeństwo', ['Terminal kontroli dostępu', 'Elektroniczny zamek hotelowy', 'System rejestracji wejść']],
  ['Monitoring wizyjny', ['Kamera IP 4K', 'Rejestrator NVR biznesowy', 'Zestaw monitoringu wielopunktowego']],
  ['Systemy alarmowe i przeciwpożarowe', ['Centrala alarmowa', 'System detekcji pożaru', 'Sygnalizator i moduł powiadamiania']],
  ['Fotowoltaika', ['Moduł fotowoltaiczny premium', 'Falownik hybrydowy', 'Zestaw montażowy PV']],
  ['Magazyny energii', ['Magazyn energii LFP', 'Szafa bateryjna komercyjna', 'System BMS dla magazynu energii']],
  ['Ładowanie pojazdów elektrycznych', ['Wallbox AC', 'Stacja ładowania DC', 'System zarządzania ładowaniem flotowym']],
  ['HVAC i klimatyzacja', ['Klimatyzator kasetonowy', 'System VRF dla obiektów komercyjnych', 'Centrala wentylacyjna z odzyskiem ciepła']],
  ['Pompy ciepła', ['Pompa ciepła powietrze-woda', 'Pompa ciepła do obiektu komercyjnego', 'Zasobnik i moduł hydrauliczny']],
  ['Uzdatnianie i filtracja wody', ['Stacja odwróconej osmozy', 'System filtracji przemysłowej', 'Zmiękczacz wody dla obiektu']],
  ['Maszyny pakujące', ['Automatyczna zgrzewarka', 'Maszyna pakująca flow-pack', 'Linia etykietująco-pakująca']],
  ['Maszyny CNC', ['Frezarka CNC', 'Tokarka CNC', 'Laserowa maszyna tnąca']],
  ['Obróbka metalu', ['Prasa hydrauliczna', 'Giętarka do blachy', 'Nożyce gilotynowe przemysłowe']],
  ['Spawalnictwo', ['Spawarka przemysłowa MIG/MAG', 'Spawarka TIG premium', 'Automat spawalniczy']],
  ['Narzędzia profesjonalne', ['Wiertarko-wkrętarka profesjonalna', 'Klucz udarowy przemysłowy', 'Szlifierka kątowa premium']],
  ['Sprężarki i pneumatyka', ['Sprężarka śrubowa', 'Osuszacz powietrza', 'Zestaw przygotowania sprężonego powietrza']],
  ['Pompy przemysłowe', ['Pompa odśrodkowa', 'Pompa membranowa', 'Pompa dozująca']],
  ['Generatory i zasilanie awaryjne', ['Generator diesla', 'UPS online klasy enterprise', 'Automatyczny przełącznik ATS']],
  ['Wózki widłowe i logistyka magazynowa', ['Elektryczny wózek widłowy', 'Wózek paletowy elektryczny', 'Wózek wysokiego składowania']],
  ['Regały i magazynowanie', ['Regał paletowy przemysłowy', 'System regałów półkowych', 'Automatyczny regał windowy']],
  ['Transport wewnętrzny i przenośniki', ['Przenośnik taśmowy', 'Przenośnik rolkowy', 'Modułowa linia transportowa']],
  ['Maszyny budowlane', ['Minikoparka', 'Ładowarka kołowa', 'Walec drogowy kompaktowy']],
  ['Sprzęt komunalny', ['Zamiatarka przemysłowa', 'Maszyna do czyszczenia posadzek', 'Pojazd użytkowy do utrzymania obiektów']],
  ['Rolnictwo i agro', ['Ciągnik kompaktowy', 'Automatyczny system nawadniania', 'Maszyna do sortowania plonów']],
  ['Sprzęt laboratoryjny', ['Autoklaw laboratoryjny', 'Wirówka laboratoryjna', 'Chłodziarka laboratoryjna']],
  ['Aparatura pomiarowa', ['Miernik wieloparametrowy', 'Kamera termowizyjna', 'Analizator jakości energii']],
  ['Wyposażenie medyczne nieinwazyjne', ['Łóżko medyczne elektryczne', 'Wózek zabiegowy', 'Monitor podstawowych parametrów']],
  ['Wyposażenie stomatologiczne', ['Fotel stomatologiczny', 'Kompresor stomatologiczny', 'Autoklaw stomatologiczny']],
  ['Fitness i wellness', ['Bieżnia komercyjna', 'Rower treningowy premium', 'Stacja wielofunkcyjna fitness']],
  ['SPA i hospitality', ['Wanna SPA premium', 'Leżanka wellness', 'System wyposażenia strefy relaksu']],
  ['Wyposażenie hoteli', ['Łóżko hotelowe premium', 'Minibar hotelowy', 'Sejf elektroniczny hotelowy']],
  ['Gastronomia profesjonalna', ['Piec konwekcyjno-parowy', 'Zmywarka gastronomiczna', 'Stół chłodniczy']],
  ['Chłodnictwo komercyjne', ['Szafa chłodnicza', 'Witryna chłodnicza', 'Agregat chłodniczy komercyjny']],
  ['Automaty vendingowe', ['Automat przekąskowy', 'Automat do napojów gorących', 'Inteligentny automat sprzedażowy']],
  ['Obsługa gotówki i płatności', ['Liczarka banknotów', 'Sorter monet', 'Sejf depozytowy']],
  ['Audio Video i konferencje', ['System wideokonferencyjny 4K', 'Procesor audio konferencyjny', 'Profesjonalny zestaw nagłośnienia']],
  ['Digital signage i reklama', ['Ekran digital signage', 'Totem reklamowy LCD', 'Ściana LED modułowa']],
  ['Drzwi, bramy i automatyka wejść', ['Brama segmentowa przemysłowa', 'Drzwi automatyczne przesuwne', 'Napęd bramowy premium']],
  ['Outdoor i architektura zewnętrzna', ['Pergola aluminiowa premium', 'Zadaszenie tarasowe', 'Meble outdoor hospitality']]
];

export const franchiseCatalog: FranchiseProduct[] = catalogBlueprint.flatMap(([category, products], categoryIndex) =>
  products.map((title, productIndex) => ({
    id: `fr-${String(categoryIndex + 1).padStart(2, '0')}-${productIndex + 1}`,
    category,
    title,
    use: `Indywidualnie konfigurowane zapytanie ofertowe dla firm w kategorii ${category.toLowerCase()}; parametry, cena, dostępność, zgodność i warunki dostawy są potwierdzane przed przedstawieniem wiążącej oferty.`,
    featured: productIndex === 0,
  }))
);

export const franchiseCategories = catalogBlueprint.map(([category]) => category);
export const featuredFranchiseProducts = franchiseCatalog.filter((product) => product.featured);
