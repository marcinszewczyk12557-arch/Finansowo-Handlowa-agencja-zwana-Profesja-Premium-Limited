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
      <p>Centrum zarządzania katalogiem, zapytaniami B2B, automatyzacją finansowo‑sprzedażową, dyspozytornią VELOX, zamówieniami, materiałami i publikacją treści.</p>

      <section className="admin-stats" aria-label="Statystyki panelu">
        <article className="card"><strong>{products.length}</strong><span>produktów</span></article>
        <article className="card"><strong>{categories}</strong><span>kategorii</span></article>
        <article className="card"><strong>STRICT</strong><span>poufność automatyzacji</span></article>
      </section>

      <section className="grid" aria-label="Moduły administracyjne">
        <article className="card">
          <h2>Automatyzacja Finansowo‑Sprzedażowa</h2>
          <p>Obsługuj pełną ścieżkę zapytanie → oferta → opcjonalne finansowanie → zamówienie → realizacja, z domyślną blokadą zewnętrznego ujawniania danych.</p>
          <Link href="/admin/automation"><button>Otwórz automatyzację</button></Link>
        </article>

        <article className="card">
          <h2>VELOX • Dyspozytornia</h2>
          <p>Obsługuj transport door-to-door: wybór przewoźnika, odbiór, tracking, status w trasie, doręczenie i dokument transportowy.</p>
          <Link href="/admin/dispatch"><button>Otwórz dyspozytornię</button></Link>
        </article>

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
        <h2>Bezpieczeństwo publikacji i poufność</h2>
        <p>
          Publiczne karty nie ujawniają danych dostawców ani wewnętrznych parametrów kalkulacji handlowej.
          Automatyzacja nie eksportuje informacji o konkurencji, kontaktach zawodowych, danych z miejsca pracy,
          danych osobowych ani tajemnicy handlowej. Dokumentacja, gwarancje, certyfikaty i warunki finansowania
          powinny być potwierdzane przed przedstawieniem konkretnej oferty klientowi.
        </p>
      </section>
    </main>
  );
}
