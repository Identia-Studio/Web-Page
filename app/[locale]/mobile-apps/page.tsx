import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicePage } from '@/components/sections/services/service-page'
import serviceImage from '@/assets/images/services/apps-moviles.png'

const BASE_URL = 'https://www.identiastudio.com'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'
  return {
    title: isEs
      ? 'Apps Móviles en Mérida, Yucatán | Identia Studio'
      : 'Mobile App Development in Mérida, Mexico | Identia Studio',
    description: isEs
      ? 'Desarrollamos apps iOS y Android para empresas en Mérida y México. MVPs, React Native, integraciones y publicación en App Store y Play Store.'
      : 'We develop iOS and Android apps for businesses in Mérida and Mexico. MVPs, React Native, integrations, and App Store / Play Store publishing.',
    alternates: {
      canonical: isEs
        ? `${BASE_URL}/es/apps-moviles`
        : `${BASE_URL}/en/mobile-apps`,
      languages: {
        es: `${BASE_URL}/es/apps-moviles`,
        en: `${BASE_URL}/en/mobile-apps`,
        'x-default': `${BASE_URL}/en/mobile-apps`,
      },
    },
  }
}

export default async function MobileAppsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services_pages' })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('mobile.hero_title') + ' ' + t('mobile.hero_title2'),
    description: t('mobile.hero_description'),
    provider: {
      '@type': 'Organization',
      name: 'Identia Studio',
      url: BASE_URL,
    },
    areaServed: { '@type': 'City', name: 'Mérida' },
    serviceType: 'Mobile App Development',
    url: locale === 'es'
      ? `${BASE_URL}/es/apps-moviles`
      : `${BASE_URL}/en/mobile-apps`,
  }

  const included = t.raw('mobile.included') as { title: string; description: string }[]
  const whyUs = t.raw('mobile.why_us') as { title: string; description: string }[]
  const faq = t.raw('mobile.faq') as { q: string; a: string }[]

  const content = {
    heroTitle: t('mobile.hero_title'),
    heroTitle2: t('mobile.hero_title2'),
    heroDescription: t('mobile.hero_description'),
    heroLong: t('mobile.hero_long'),
    includedTitle: t('included_title'),
    includedTitle2: t('included_title2'),
    included,
    whyUsTitle: t('why_us_title'),
    whyUsTitle2: t('why_us_title2'),
    whyUs,
    faqTitle: t('faq_title'),
    faq,
    relatedLabel: t('related_label'),
    relatedServices: [
      { href: '/web-development' as const, label: t('nav_labels.web') },
      { href: '/ux-design' as const, label: t('nav_labels.ux') },
      { href: '/branding' as const, label: t('nav_labels.branding') },
    ],
    image: serviceImage,
    ctaLabel: locale === 'es' ? 'Solicitar cotización' : 'Get a free quote',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePage content={content} />
    </>
  )
}
