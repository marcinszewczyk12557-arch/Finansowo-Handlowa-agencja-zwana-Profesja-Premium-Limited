import Link from 'next/link';
import { redirect } from 'next/navigation';
import OwnerWorkspace from '../../components/OwnerWorkspace';
import { isOwnerSession, ownerAuthConfigured } from '../../lib/ownerAuth';

export default async function OwnerPage() {
  if (!ownerAuthConfigured()) redirect('/owner/login?error=config');
  if (!(await isOwnerSession())) redirect('/owner/login');

  return (
    <main className="section" style={{ maxWidth: 1500, paddingTop: 50 }}>
      <div style={{ display:'flex', justifyContent:'space-between', gap:16, alignItems:'flex-start', flexWrap:'wrap' }}>
        <div>
          <p className="eyebrow">OWNER ONLY</p>
          <h1>Panel zarządczo-wykonawczy</h1>
          <p>Praca operacyjna nad katalogiem, ofertami, zamówieniami, SKU, cenami bazowymi, gwarancją i prywatnymi źródłami. Te dane nie są częścią publicznego katalogu.</p>
        </div>
        <form method="post" action="/api/owner/logout"><button type="submit" className="cta-secondary">Wyloguj</button></form>
      </div>

      <section className="grid" style={{ marginTop: 28, marginBottom: 28 }}>
        <article className="card"><h2>Zapytania i oferty</h2><p>Obsługa nowych spraw, wycen, akceptacji i tworzenia zamówień.</p><Link href="/admin/offers"><button>Otwórz oferty</button></Link></article>
        <article className="card"><h2>Zamówienia B2B</h2><p>Status realizacji, przygotowanie wysyłki, dostawa i zakończenie.</p><Link href="/admin/orders"><button>Otwórz zamówienia</button></Link></article>
        <article className="card"><h2>Widok klienta</h2><p>Sprawdź publiczny panel i mechanizm weryfikacji statusu.</p><Link href="/dashboard"><button>Panel klienta</button></Link></article>
      </section>

      <OwnerWorkspace />
    </main>
  );
}
