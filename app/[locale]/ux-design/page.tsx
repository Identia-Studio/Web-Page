import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicePage } from '@/components/sections/services/service-page'
import serviceImage from '@/assets/images/services/ui-ux-design.png'

const BASE_URL = 'https://www.identiastudio.com'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'
  return {
    title: isEs
      ? 'Diseño UI/UX en Mérida, Yucatán | Identia Studio'
      : 'UI/UX Design in Mérida, Mexico | Identia Studio',
    description: isEs
      ? 'Diseñamos interfaces y experiencias digitales para empresas en Mérida y México. Research, wireframes, prototipos en Figma y entrega para desarrollo.'
      : 'We design digital interfaces and experiences for businesses in Mérida and Mexico. Research, wireframes, Figma prototypes, and developer handoff.',
    alternates: {
      canonical: isEs
        ? `${BASE_URL}/es/diseno-ux`
        : `${BASE_URL}/en/ux-design`,
      languages: {
        es: `${BASE_URL}/es/diseno-ux`,
        en: `${BASE_URL}/en/ux-design`,
        'x-default': `${BASE_URL}/en/ux-design`,
      },
    },
  }
}

export default async function UxDesignPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services_pages' })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('ux.hero_title') + ' ' + t('ux.hero_title2'),
    description: t('ux.hero_description'),
    provider: {
      '@type': 'Organization',
      name: 'Identia Studio',
      url: BASE_URL,
    },
    areaServed: { '@type': 'City', name: 'Mérida' },
    serviceType: 'UI/UX Design',
    url: locale === 'es'
      ? `${BASE_URL}/es/diseno-ux`
      : `${BASE_URL}/en/ux-design`,
  }

  const included = t.raw('ux.included') as { title: string; description: string }[]
  const whyUs = t.raw('ux.why_us') as { title: string; description: string }[]
  const faq = t.raw('ux.faq') as { q: string; a: string }[]

  const content = {
    heroTitle: t('ux.hero_title'),
    heroTitle2: t('ux.hero_title2'),
    heroDescription: t('ux.hero_description'),
    heroLong: t('ux.hero_long'),
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
      { href: '/mobile-apps' as const, label: t('nav_labels.mobile') },
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
