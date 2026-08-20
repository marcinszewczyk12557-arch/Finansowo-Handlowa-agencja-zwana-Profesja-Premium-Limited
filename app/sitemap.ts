import type { MetadataRoute } from 'next';
import products from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';
  const now = new Date();
  const publicPages = [
    '',
    '/catalog',
    '/catalog/fotowoltaika',
    '/catalog/smartfony-premium',
    '/sklepy/02-laptopy-komputery-mobilne',
    '/sklepy/03-komputery-stacjonarne-mini-pc',
    '/sklepy/04-monitory-wyswietlacze',
    '/sklepy/05-serwery-infrastruktura-it',
    '/sklepy/06-sieci-telekomunikacja',
    '/enterprise-equipment',
    '/biov-era',
    '/heavy-equipment',
    '/offers/new',
    '/about',
    '/contact',
    '/terms',
    '/privacy',
  ];
  const priorityPages = new Set([
    '', '/catalog', '/catalog/fotowoltaika',
    '/sklepy/02-laptopy-komputery-mobilne',
    '/sklepy/03-komputery-stacjonarne-mini-pc',
    '/sklepy/04-monitory-wyswietlacze',
    '/sklepy/05-serwery-infrastruktura-it',
    '/sklepy/06-sieci-telekomunikacja',
    '/enterprise-equipment', '/biov-era', '/heavy-equipment'
  ]);

  return [
    ...publicPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: priorityPages.has(path) ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : priorityPages.has(path) ? 0.9 : 0.6,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
  ];
}