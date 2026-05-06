import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicePage } from '@/components/sections/services/service-page'
import serviceImage from '@/assets/images/services/branding.png'

const BASE_URL = 'https://www.identiastudio.com'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'
  return {
    title: isEs
      ? 'Branding e Identidad Visual en Mérida, Yucatán | Identia Studio'
      : 'Branding & Visual Identity in Mérida, Mexico | Identia Studio',
    description: isEs
      ? 'Construimos identidades visuales completas para marcas en Mérida y México. Estrategia de marca, logotipo, sistema de color, tipografía y brand guidelines.'
      : 'We build complete visual identities for brands in Mérida and Mexico. Brand strategy, logo, color system, typography, and brand guidelines.',
    alternates: {
      canonical: isEs
        ? `${BASE_URL}/es/branding`
        : `${BASE_URL}/en/branding`,
      languages: {
        es: `${BASE_URL}/es/branding`,
        en: `${BASE_URL}/en/branding`,
        'x-default': `${BASE_URL}/en/branding`,
      },
    },
  }
}

export default async function BrandingPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services_pages' })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('branding.hero_title') + ' ' + t('branding.hero_title2'),
    description: t('branding.hero_description'),
    provider: {
      '@type': 'Organization',
      name: 'Identia Studio',
      url: BASE_URL,
    },
    areaServed: { '@type': 'City', name: 'Mérida' },
    serviceType: 'Branding',
    url: locale === 'es'
      ? `${BASE_URL}/es/branding`
      : `${BASE_URL}/en/branding`,
  }

  const included = t.raw('branding.included') as { title: string; description: string }[]
  const whyUs = t.raw('branding.why_us') as { title: string; description: string }[]
  const faq = t.raw('branding.faq') as { q: string; a: string }[]

  const content = {
    heroTitle: t('branding.hero_title'),
    heroTitle2: t('branding.hero_title2'),
    heroDescription: t('branding.hero_description'),
    heroLong: t('branding.hero_long'),
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
      { href: '/ux-design' as const, label: t('nav_labels.ux') },
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
