import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Profesja Premium Limited™',
  description: 'Finansowo-Handlowa Agencja Profesja Premium Limited™'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
