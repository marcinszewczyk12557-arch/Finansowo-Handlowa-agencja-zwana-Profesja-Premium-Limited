import type { MetadataRoute } from 'next';
import products from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';
  const now = new Date();
  const publicPages = [
    '',
    '/catalog',
    '/finansowanie/kredyt-inwestycyjny-bez-wkladu-wlasnego',
    '/offers/new',
    '/dashboard',
    '/about',
    '/contact',
    '/terms',
    '/privacy',
  ];

  return [
    ...publicPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path === '/catalog' || path.startsWith('/finansowanie/') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path === '/catalog' ? 0.9 : path.startsWith('/finansowanie/') ? 0.85 : 0.6,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
  ];
}
