import type { Metadata } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Store01Catalog from '../../../components/Store01Catalog';
import { STORE01_MIN_ORDER_PLN, store01Categories, store01Products } from '../../../data/store01Mobile';

export const metadata: Metadata = {
  title: 'Sklep 01 — Premium Mobile & Communication | PROFESJA PREMIUM LIMITED',
  description: 'Specjalistyczny sklep B2B z urządzeniami mobilnymi, łącznością 5G/LTE, radiokomunikacją, VoIP, akcesoriami i obsługą flot urządzeń.',
};

export default function Store01Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'PROFESJA 01 — Premium Mobile & Communication',
    description: 'Specjalistyczny katalog B2B urządzeń mobilnych i komunikacyjnych.',
    numberOfItems: store01Products.length,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: store01Products.length,
      itemListElement: store01Products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          sku: product.id,
          category: product.category,
          description: product.purpose,
        },
      })),
    },
  };

  return (
    <>
      <Header />
      <main style={{ background: '#f4f6f7', color: '#172126', minHeight: '100vh' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section style={{ background: '#101a20', color: '#fff', borderBottom: '1px solid #314047' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 44px' }}>
            <p className="eyebrow" style={{ color: '#e9d06f' }}>PROFESJA 01 • STORE TEMPLATE / SKLEP WZORCOWY</p>
            <h1 style={{ maxWidth: 900, marginBottom: 16 }}>Premium Mobile & Communication</h1>
            <p style={{ maxWidth: 880, lineHeight: 1.75, color: '#d4dde1' }}>
              Specjalistyczny sklep B2B dla smartfonów, tabletów, terminali mobilnych, łączności 5G/LTE, radiokomunikacji, VoIP, zestawów komunikacyjnych, zasilania, dokowania i zarządzania flotą urządzeń.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <span style={{ border: '1px solid #45545b', borderRadius: 999, padding: '9px 13px' }}>{store01Categories.length} kategorii</span>
              <span style={{ border: '1px solid #45545b', borderRadius: 999, padding: '9px 13px' }}>{store01Products.length} pozycji katalogowych</span>
              <span style={{ border: '1px solid #e9d06f', color: '#e9d06f', borderRadius: 999, padding: '9px 13px' }}>MIN. ZAMÓWIENIE {STORE01_MIN_ORDER_PLN.toLocaleString('pl-PL')} zł</span>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 8 }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14 }}>
            <article className="source-dossier"><p className="eyebrow">01 • ASORTYMENT</p><h3>Pełne drzewo specjalizacji</h3><p>Każda pozycja należy do konkretnej kategorii i podkategorii sklepu. Produkty spoza specjalizacji pozostają w ogólnym katalogu PROFESJA, nie w sklepie 01.</p></article>
            <article className="source-dossier"><p className="eyebrow">02 • RFQ</p><h3>Indywidualna oferta B2B</h3><p>Model, producent, ilość, wariant, cena, dostępność i termin są potwierdzane przed ofertą wiążącą. Zapytanie otrzymuje numer sprawy.</p></article>
            <article className="source-dossier"><p className="eyebrow">03 • COMPLIANCE</p><h3>Dowód przed deklaracją</h3><p>CE, RoHS, RED, normy, gwarancja i pozostałe wymagania są przypisywane dopiero po sprawdzeniu dokumentacji konkretnego urządzenia i rynku.</p></article>
            <article className="source-dossier"><p className="eyebrow">04 • LOGISTYKA</p><h3>Dostawa według transakcji</h3><p>Źródło realizacji, dostawa, ubezpieczenie, konfiguracja i ewentualny serwis są dobierane do zamówienia i potwierdzane przed finalizacją.</p></article>
          </div>
        </section>

        <Store01Catalog />
      </main>
      <Footer />
    </>
  );
}
