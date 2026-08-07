import type { Metadata } from 'next';
import './globals.css';
import './featured-offers.css';
import './professional.css';

export const metadata: Metadata = {
  title: 'PROFESJA PREMIUM LIMITED™ — Agencja Finansowo-Handlowa B2B',
  description: 'Finansowanie zakupów B2B, import, sourcing, OEM/ODM, private label i indywidualne oferty dla przedsiębiorstw.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
