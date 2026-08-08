import type { MetadataRoute } from 'next';
import products from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://profesja-premium-limited.vercel.app';
  const now = new Date();
  const publicPages = ['', '/catalog', '/offers/new', '/dashboard', '/about', '/contact', '/terms', '/privacy'];

  return [
    ...publicPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path === '/catalog' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path === '/catalog' ? 0.9 : 0.6,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
  ];
}
