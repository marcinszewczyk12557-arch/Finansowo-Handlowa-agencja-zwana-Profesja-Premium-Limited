import Link from 'next/link';
import { redirect } from 'next/navigation';
import products from '../../../data/products';
import { isOwnerSession } from '../../../lib/ownerAuth';

export const dynamic = 'force-dynamic';

const evidenceRequired = [
  'Dokładny producent i model / wariant produktu',
  'Dokument zgodności odnoszący się do właściwego modelu',
  'Możliwość powiązania deklaracji lub certyfikatu z produktem',
  'Zakres i aktualność dokumentu zweryfikowane przed publikacją',
  'Dane dostawcy i KYC/KYB przechowywane wyłącznie w warstwie prywatnej',
];

export default async function CompliancePanel() {
  if (!(await isOwnerSession())) redirect('/owner/login');

  const categories = new Set(products.map((product) => product.category)).size;
  const pending = products.filter((product) =>
    product.certificates.some((entry) =>
      entry.toLowerCase().includes('potwierdzane') || entry.toLowerCase().includes('przed przedstawieniem oferty'),
    ),
  ).length;

  return (
    <main className="section">
      <p className="eyebrow">Panel OWNER • Product Compliance</p>
      <h1>Weryfikacja zgodności produktów</h1>
      <p>
        Ten moduł służy do kontroli dowodowej. Nie nadaje automatycznie statusu CE, ISO ani statusu
        zweryfikowanego producenta. Zasada operacyjna: brak właściwego dowodu dla konkretnego modelu = brak
        statusu zweryfikowanego.
      </p>

      <section className="admin-stats" aria-label="Podsumowanie zgodności">
        <article className="card"><strong>{products.length}</strong><span>pozycji katalogowych</span></article>
        <article className="card"><strong>{categories}</strong><span>kategorii</span></article>
        <article className="card"><strong>{pending}</strong><span>pozycji wymagających potwierdzenia dokumentów</span></article>
      </section>

      <section className="grid" aria-label="Reguły Product Compliance">
        <article className="card">
          <h2>Minimalny pakiet dowodowy</h2>
          <ul>
            {evidenceRequired.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="card">
          <h2>Dozwolone statusy</h2>
          <p><strong>Oczekuje na dokumenty</strong> — brak kompletnego dowodu dla konkretnego wariantu.</p>
          <p><strong>W trakcie weryfikacji</strong> — dokumenty są dostępne, ale nie zakończono kontroli zakresu i powiązania.</p>
          <p><strong>Zweryfikowano dowodowo</strong> — wyłącznie po sprawdzeniu dokumentów odnoszących się do konkretnego produktu.</p>
        </article>

        <article className="card">
          <h2>Separacja danych</h2>
          <p>
            Publiczny katalog nie powinien ujawniać prywatnych danych sourcingowych, kontaktów dostawców,
            dokumentów KYC/KYB ani wewnętrznych kalkulacji handlowych.
          </p>
        </article>

        <article className="card">
          <h2>Kontrola przed publikacją</h2>
          <p>
            Statusy CE/ISO, gwarancja, parametry modelu, MOQ i materiały produktowe muszą być zgodne z
            zatwierdzonym wariantem i źródłem dowodowym użytym do oferty.
          </p>
        </article>
      </section>

      <section className="section admin-note">
        <h2>Zasada BIOVERA i ofert medycznych</h2>
        <p>
          Nazwy marketingowe i opisy nie stanowią dowodu zgodności. Dla urządzeń medycznych publikacja
          twierdzeń o CE/ISO lub producencie wymaga uprzedniego potwierdzenia dokumentów właściwych dla
          dokładnego modelu, wariantu i rynku docelowego.
        </p>
      </section>

      <p>
        <Link href="/admin/products">Przejdź do katalogu produktów</Link> ·{' '}
        <Link href="/admin">Wróć do panelu OWNER</Link>
      </p>
    </main>
  );
}
