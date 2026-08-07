import type { Metadata } from 'next';
import './globals.css';
import './featured-offers.css';

export const metadata: Metadata = {
  title: 'profesja/premium/limited',
  description: 'Finansowo-Handlowa Agencja — globalna współpraca i oferta B2B',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
