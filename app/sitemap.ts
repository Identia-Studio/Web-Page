import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.identiastudio.com';
  const locales = ['en', 'es'];
  const routes = ['', '/referrals', '/referrals/terms'];

  return routes.flatMap(route =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8
    }))
  );
}