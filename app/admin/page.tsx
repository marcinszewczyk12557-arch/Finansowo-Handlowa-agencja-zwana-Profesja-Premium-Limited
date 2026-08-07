import Link from 'next/link';
import products from '../../data/products';

export default function AdminPanel() {
  const categories = new Set(products.map((product) => product.category)).size;

  return (
    <main className="section">
      <p className="eyebrow">Panel administratora</p>
      <h1>profesja/premium/limited</h1>
      <p>Centrum zarządzania katalogiem, zapytaniami B2B, materiałami i publikacją treści.</p>

      <section className="admin-stats" aria-label="Statystyki panelu">
        <article className="card"><strong>{products.length}</strong><span>produktów</span></article>
        <article className="card"><strong>{categories}</strong><span>kategorii</span></article>
        <article className="card"><strong>PL / EN</strong><span>materiały</span></article>
      </section>

      <section className="grid" aria-label="Moduły administracyjne">
        <article className="card">
          <h2>Katalog produktów</h2>
          <p>Przeglądaj aktualne pozycje katalogowe, opisy, gwarancje i materiały ofertowe.</p>
          <Link href="/admin/products"><button>Zarządzaj produktami</button></Link>
        </article>

        <article className="card">
          <h2>Zapytania ofertowe</h2>
          <p>Przejdź do sekcji obsługi zapytań klientów i przygotowania ofert B2B.</p>
          <Link href="/admin/offers"><button>Zarządzaj zapytaniami</button></Link>
        </article>

        <article className="card">
          <h2>Widok publiczny</h2>
          <p>Sprawdź opublikowany katalog i aktualny wygląd strony z perspektywy klienta.</p>
          <Link href="/catalog"><button>Otwórz katalog</button></Link>
        </article>

        <article className="card">
          <h2>Kalkulator ratalny</h2>
          <p>Przejdź do symulatora rat dostępnego na stronie głównej.</p>
          <Link href="/#raty"><button>Otwórz kalkulator</button></Link>
        </article>
      </section>

      <section className="section admin-note">
        <h2>Bezpieczeństwo publikacji</h2>
        <p>
          Publiczne karty nie ujawniają danych dostawców ani wewnętrznych parametrów kalkulacji handlowej.
          Dokumentacja, gwarancje i certyfikaty powinny być potwierdzane przed przedstawieniem konkretnej oferty klientowi.
        </p>
      </section>
    </main>
  );
}
