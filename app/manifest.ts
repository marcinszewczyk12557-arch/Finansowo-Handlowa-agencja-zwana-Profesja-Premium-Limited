import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PROFESJA PREMIUM LIMITED™',
    short_name: 'PROFESJA',
    description: 'Finansowo-Handlowa Agencja B2B — katalog, sourcing, import, logistyka i indywidualne oferty handlowe.',
    start_url: '/',
    display: 'standalone',
    background_color: '#081013',
    theme_color: '#081013',
    lang: 'pl',
    categories: ['business', 'shopping'],
  };
}
