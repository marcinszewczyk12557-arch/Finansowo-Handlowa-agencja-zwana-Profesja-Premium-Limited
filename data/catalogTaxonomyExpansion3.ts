import type { TaxonomyBranch } from './catalogTaxonomy';

const leaf=(...names:string[]):TaxonomyBranch[]=>names.map(name=>({name}));
const node=(name:string,...children:TaxonomyBranch[]):TaxonomyBranch=>({name,children});
const family=(name:string,...items:string[]):TaxonomyBranch=>node(name,...leaf(...items));

export const catalogTaxonomyExpansion3:TaxonomyBranch[]=[
  node('Biżuteria, okulary i zegarki',
    node('Biżuteria',
      family('Biżuteria modowa','Pierścionki modowe','Naszyjniki modowe','Bransoletki modowe','Kolczyki modowe','Komplety biżuterii'),
      family('Biżuteria premium','Biżuteria srebrna','Biżuteria pozłacana','Biżuteria ze stali szlachetnej','Biżuteria z kamieniami','Biżuteria personalizowana'),
      family('Akcesoria jubilerskie','Zapięcia','Łańcuszki','Elementy montażowe','Ekspozytory','Narzędzia jubilerskie')
    ),
    node('Zegarki',
      family('Zegarki użytkowe','Zegarki kwarcowe','Zegarki mechaniczne','Zegarki automatyczne','Zegarki sportowe','Zegarki biznesowe'),
      family('Akcesoria zegarkowe','Paski skórzane','Bransolety stalowe','Paski silikonowe','Etui i rotomaty','Narzędzia serwisowe')
    ),
    node('Okulary',
      family('Oprawki','Oprawki metalowe','Oprawki acetatowe','Oprawki TR90','Oprawki dziecięce','Oprawki premium'),
      family('Okulary przeciwsłoneczne','Polaryzacyjne','Sportowe','Lifestyle','Fotochromowe','Okulary driving'),
      family('Akcesoria optyczne','Etui','Ściereczki','Łańcuszki','Ekspozytory','Narzędzia optyczne')
    )
  ),

  node('Rodzice, dzieci i zabawki',
    node('Zabawki',
      family('Zabawki konstrukcyjne','Klocki konstrukcyjne','Klocki magnetyczne','Modele DIY','Zestawy STEM','Roboty edukacyjne'),
      family('Zabawki elektroniczne','Pojazdy RC','Drony zabawkowe','Konsole dziecięce','Interaktywne zwierzątka','Zabawki muzyczne'),
      family('Zabawki outdoor','Hulajnogi dziecięce','Jeździki','Place zabaw','Baseny dziecięce','Domki ogrodowe')
    ),
    node('Artykuły dla niemowląt',
      family('Karmienie','Butelki','Sterylizatory','Podgrzewacze','Laktatory','Krzesełka do karmienia'),
      family('Sen i monitoring','Elektroniczne nianie','Monitory oddechu','Lampki nocne','Łóżeczka turystyczne','Materace dziecięce'),
      family('Pielęgnacja','Wanienki','Termometry kąpielowe','Podgrzewacze chusteczek','Organizery niemowlęce','Kosze na pieluchy')
    )
  ),

  node('Bagaż, torby i walizki',
    node('Walizki',
      family('Walizki podróżne','Walizki kabinowe','Walizki średnie','Walizki duże','Zestawy walizek','Walizki biznesowe'),
      family('Walizki specjalistyczne','Walizki narzędziowe','Walizki sprzętowe','Flight case','Walizki medyczne','Walizki wodoodporne')
    ),
    node('Plecaki',
      family('Plecaki użytkowe','Plecaki miejskie','Plecaki laptopowe','Plecaki szkolne','Plecaki biznesowe','Plecaki podróżne'),
      family('Plecaki techniczne','Plecaki trekkingowe','Plecaki rowerowe','Plecaki hydracyjne','Plecaki fotograficzne','Plecaki narzędziowe')
    ),
    node('Torby biznesowe',
      family('Torby profesjonalne','Aktówki','Torby laptopowe','Torby konferencyjne','Teczki dokumentowe','Torby sales rep'),
      family('Torby transportowe','Torby kurierskie','Torby termoizolacyjne','Torby medyczne','Torby serwisowe','Torby na próbki')
    )
  ),

  node('Higiena osobista i domowa',
    node('Pielęgnacja osobista',
      family('Urządzenia osobiste','Golarki elektryczne','Trymery','Depilatory','Suszarki','Prostownice','Lokówki'),
      family('Dozowanie i wyposażenie','Dozowniki mydła','Dozowniki dezynfekcji','Suszarki do rąk','Podajniki ręczników','Podajniki papieru')
    ),
    node('Środki czystości',
      family('Chemia profesjonalna','Środki do podłóg','Środki do sanitariatów','Odtłuszczacze','Środki do szkła','Środki dezynfekujące'),
      family('Chemia pralnicza','Detergenty','Odplamiacze','Płyny zmiękczające','Środki do pralni przemysłowych','Dozowanie chemii')
    ),
    node('Narzędzia do sprzątania',
      family('Sprzątanie ręczne','Mopy profesjonalne','Wózki serwisowe','Szczotki','Ściągaczki','Wiadra systemowe'),
      family('Sprzątanie mechaniczne','Szorowarki','Zamiatarki','Odkurzacze przemysłowe','Ekstraktory','Polerki podłogowe')
    )
  ),

  node('Prezenty i rękodzieło',
    node('Prezenty biznesowe',
      family('Gadżety firmowe','Długopisy reklamowe','Kubki reklamowe','Powerbanki reklamowe','Notatniki premium','Zestawy onboardingowe'),
      family('Prezenty premium','Zestawy executive','Pióra premium','Akcesoria skórzane','Zestawy whisky bez alkoholu','Opakowania prezentowe')
    ),
    node('Rękodzieło',
      family('Wyroby dekoracyjne','Ceramika dekoracyjna','Drewno dekoracyjne','Wyroby metalowe','Szkło dekoracyjne','Tekstylia handmade'),
      family('Materiały DIY','Zestawy kreatywne','Półprodukty drewniane','Półprodukty metalowe','Elementy biżuteryjne','Materiały scrapbook')
    )
  ),

  node('Artykuły dla zwierząt',
    node('Dla psów',
      family('Akcesoria spacerowe','Smycze','Obroże','Szelki','Kagańce','Adresówki'),
      family('Legowiska i transport','Legowiska','Transportery','Klatki','Maty samochodowe','Rampy'),
      family('Pielęgnacja','Maszynki groomerskie','Szczotki','Suszarki groomerskie','Stoły groomerskie','Wanny groomerskie')
    ),
    node('Dla kotów',
      family('Wyposażenie','Drapaki','Kuwety automatyczne','Transportery','Legowiska','Fontanny'),
      family('Akcesoria','Zabawki interaktywne','Szczotki','Obroże','Maty','Karmniki automatyczne')
    ),
    node('Akwarystyka',
      family('Systemy akwariowe','Akwaria','Zestawy reef','Szafki','Pokrywy','Systemy sump'),
      family('Technika akwariowa','Filtry','Pompy','Odpieniacze','Oświetlenie LED','Sterowniki','Grzałki')
    )
  ),

  node('Usługi biznesowe',
    node('Logistyka',
      family('Transport drogowy','FTL','LTL','Door-to-door','Transport ekspresowy','Transport paletowy'),
      family('Transport kurierski i pocztowy','Kurier krajowy','Kurier międzynarodowy','Przesyłki dokumentowe','Przesyłki paczkowe','Obsługa zwrotów'),
      family('Obsługa importu','Konsolidacja','Odprawa celna','Magazynowanie','Cross-dock','Final mile')
    ),
    node('Kontrola, testy i certyfikacja',
      family('Inspekcje','Pre-shipment inspection','Factory audit','Container loading check','Quality inspection','Supplier verification'),
      family('Testy i dokumentacja','Testy laboratoryjne','Raporty zgodności','Dokumentacja CE','Dokumentacja techniczna','Kontrola etykietowania')
    )
  )
];

export default catalogTaxonomyExpansion3;
