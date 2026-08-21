import type { Metadata } from 'next';
import './globals.css';
import './featured-offers.css';
import './professional.css';
import './mobile-luxury.css';
import './preview-review.css';
import { buildOrganizationJsonLd, publicPositioning } from '@/lib/publicPositioning';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';
const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';

export const metadata: Metadata = maintenanceMode
  ? {
      metadataBase: new URL(siteUrl),
      title: 'PROFESJA PREMIUM LIMITED™ — tryb serwisowy',
      description: 'Serwis i wszystkie funkcje publiczne są tymczasowo wyłączone.',
      applicationName: 'PROFESJA PREMIUM LIMITED™',
      robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    }
  : {
      metadataBase: new URL(siteUrl),
      title: `${publicPositioning.name} — ${publicPositioning.pl.headline}`,
      description: publicPositioning.pl.description,
      applicationName: publicPositioning.name,
      robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = buildOrganizationJsonLd(siteUrl);

  return (
    <html lang="pl">
      <body style={{ margin: 0 }}>
        {!maintenanceMode && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
        )}
        {maintenanceMode ? (
          <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, boxSizing: 'border-box', background: '#0b1220', color: '#f8fafc' }}>
            <section style={{ width: 'min(760px, 100%)', textAlign: 'center', border: '1px solid #334155', borderRadius: 24, padding: 40, background: '#111827' }}>
              <h1 style={{ marginTop: 0 }}>PROFESJA PREMIUM LIMITED™</h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: '#cbd5e1' }}>
                Strona oraz wszystkie funkcje dostępne dla użytkowników są tymczasowo wyłączone. Trwa pełny tryb serwisowy.
              </p>
            </section>
          </main>
        ) : children}
      </body>
    </html>
  );
}
