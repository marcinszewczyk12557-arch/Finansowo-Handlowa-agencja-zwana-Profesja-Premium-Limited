import Link from 'next/link';
import { redirect } from 'next/navigation';
import products from '../../data/products';
import { isOwnerSession } from '../../lib/ownerAuth';

export const dynamic = 'force-dynamic';

export default async function AdminPanel() {
  if (!(await isOwnerSession())) redirect('/owner/login');

  const categories = new Set(products.map((product) => product.category)).size;

  return (
    <main className="section">
      <p className="eyebrow">Panel OWNER</p>
      <h1>PROFESJA PREMIUM LIMITED™</h1>
      <p>Centrum zarządzania katalogiem, zapytaniami B2B, zamówieniami, materiałami i publikacją treści.</p>

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
          <h2>Zapytania i oferty</h2>
          <p>Obsługuj zapytania klientów, zmieniaj ich statusy i przygotowuj zamówienia B2B.</p>
          <Link href="/admin/offers"><button>Otwórz zapytania</button></Link>
        </article>

        <article className="card">
          <h2>Zamówienia B2B</h2>
          <p>Zarządzaj realizacją, dokumentami, dostawą, trackingiem i statusem zamówień.</p>
          <Link href="/admin/orders"><button>Otwórz zamówienia</button></Link>
        </article>

        <article className="card">
          <h2>Widok publiczny</h2>
          <p>Sprawdź opublikowany katalog i aktualny wygląd strony z perspektywy klienta.</p>
          <Link href="/catalog"><button>Otwórz katalog</button></Link>
        </article>
      </section>

      <section className="section admin-note">
        <h2>Bezpieczeństwo publikacji</h2>
        <p>
          Publiczne karty nie ujawniają danych dostawców ani wewnętrznych parametrów kalkulacji handlowej.
          Dokumentacja, gwarancje, certyfikaty i warunki finansowania powinny być potwierdzane przed przedstawieniem konkretnej oferty klientowi.
        </p>
      </section>
    </main>
  );
}
