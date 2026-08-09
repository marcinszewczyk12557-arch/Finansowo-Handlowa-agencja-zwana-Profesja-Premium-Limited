import type { Metadata } from 'next';
import './globals.css';
import './featured-offers.css';
import './professional.css';
import './phase-one.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PROFESJA PREMIUM LIMITED™ — Agencja Finansowo-Handlowa B2B',
    template: '%s | PROFESJA PREMIUM LIMITED™',
  },
  description: 'Import, sourcing, OEM/ODM, private label, organizacja finansowania i indywidualne oferty B2B dla przedsiębiorstw.',
  applicationName: 'PROFESJA PREMIUM LIMITED™',
  keywords: ['B2B', 'import', 'sourcing', 'OEM', 'ODM', 'private label', 'finansowanie B2B', 'wycena B2B', 'PROFESJA PREMIUM LIMITED'],
  authors: [{ name: 'PROFESJA PREMIUM LIMITED™' }],
  creator: 'PROFESJA PREMIUM LIMITED™',
  publisher: 'PROFESJA PREMIUM LIMITED™',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'PROFESJA PREMIUM LIMITED™',
    title: 'PROFESJA PREMIUM LIMITED™ — Agencja Finansowo-Handlowa B2B',
    description: 'Import, sourcing, OEM/ODM, private label i indywidualna obsługa handlowa przedsiębiorstw.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
