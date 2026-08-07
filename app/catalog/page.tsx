import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HierarchicalCatalog from '../../components/HierarchicalCatalog';
import RedmagicSourceGallery from '../../components/RedmagicSourceGallery';
import './catalog-enhancements.css';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero compact-hero">
          <p className="eyebrow">Katalog Profesja Premium Limited</p>
          <h2>Pełny katalog B2B — sourcing oraz globalne marki premium</h2>
          <p>
            Katalog działa wielopoziomowo: kategoria główna → podkategoria / marka → rodzina produktów → element szczegółowy → pięć wariantów handlowych.
            Wszystkie karty otrzymują czytelne prezentacje wysokiej rozdzielczości, profesjonalne opisy, zastosowanie i zakres dokumentacji.
            Kategorie sourcingowe korzystają z benchmarków Alibaba i narzutu PROFESJA od +72% do +84% względem ceny bazowej.
            Nowa gałąź „Globalne produkty czołowych producentów” obejmuje m.in. Yamaha, Roland, JBL Professional, Tascam, MSI, Lenovo,
            Apple, ASUS, Acer, HP, Samsung, LG, Technics, Martin Professional i Pioneer DJ. Dla produktów markowych dokładny model,
            autentyczność, kanał dystrybucji, gwarancja i cena są potwierdzane indywidualnie przed przedstawieniem finalnej oferty.
          </p>
        </section>

        <RedmagicSourceGallery />
        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}
