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
          <h2>Rozbudowany katalog B2B — sourcing, prezentacje i indywidualne wyceny</h2>
          <p>
            Katalog działa wielopoziomowo: kategoria główna → podkategoria → element szczegółowy → pięć wariantów handlowych.
            Każda pozycja otrzymuje profesjonalny opis, zastosowanie, zakres prezentacji i dokumentacji oraz benchmark ceny bazowej
            na podstawie aktualnych ofert Alibaba. Ceny PROFESJA są prezentowane z narzutem od +72% do +84% względem benchmarku.
            Finalny model, MOQ, kurs walut, transport, podatki, certyfikacja i dostępność są zawsze potwierdzane przed zawarciem transakcji.
          </p>
        </section>

        <RedmagicSourceGallery />
        <HierarchicalCatalog />
      </main>
      <Footer />
    </>
  );
}
