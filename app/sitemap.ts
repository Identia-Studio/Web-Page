import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.identiastudio.com';
  const routes = [
    '',
    '/en',
    '/es',
    '/en/referrals',
    '/en/referrals/terms',
    '/es/referidos',
    '/es/referidos/terminos',
  ];

  return routes.flatMap(route =>({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8
    })
  );
}