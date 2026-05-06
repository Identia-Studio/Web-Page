import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.identiastudio.com';
  const routes = [
    '',
    'en',
    'es',
    'en/contact',
    'es/contacto',
    'en/web-development',
    'es/desarrollo-web-merida',
    'en/mobile-apps',
    'es/apps-moviles',
    'en/ux-design',
    'es/diseno-ux',
    'en/branding',
    'es/branding',
    'en/referrals',
    'en/referrals/terms',
    'es/referidos',
    'es/referidos/terminos',
  ];

  return routes.map(route => ({
    url: route === '' ? baseUrl : `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}