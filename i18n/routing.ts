import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/referrals': {
      es: '/referidos'
    },
    '/referrals/terms': {
      es: '/referidos/terminos'
    }
  }
});