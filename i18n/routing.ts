import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/contact': {
      es: '/contacto'
    },
    // '/web-development': {
    //   es: '/desarrollo-web-merida'
    // },
    // '/mobile-apps': {
    //   es: '/apps-moviles'
    // },
    // '/ux-design': {
    //   es: '/diseno-ux'
    // },
    // '/branding': '/branding',
    '/referrals': {
      es: '/referidos'
    },
    '/referrals/terms': {
      es: '/referidos/terminos'
    }
  }
});