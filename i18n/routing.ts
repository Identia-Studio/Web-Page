import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/contact': {
      es: '/contacto'
    },
    '/referrals': {
      es: '/referidos'
    },
    '/referrals/terms': {
      es: '/referidos/terminos'
    }
  }
});