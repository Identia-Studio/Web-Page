import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicePage } from '@/components/sections/services/service-page'
import serviceImage from '@/assets/images/services/desarrollo-web.png'

const BASE_URL = 'https://www.identiastudio.com'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'
  return {
    title: isEs
      ? 'Desarrollo Web en Mérida, Yucatán | Identia Studio'
      : 'Web Development in Mérida, Mexico | Identia Studio',
    description: isEs
      ? 'Construimos sitios web y plataformas digitales para empresas en Mérida, Yucatán y México. Landing pages, e-commerce, sistemas a medida con Next.js, React y TypeScript.'
      : 'We build websites and digital platforms for businesses in Mérida, Yucatán, and Mexico. Landing pages, e-commerce, custom systems with Next.js, React, and TypeScript.',
    alternates: {
      canonical: isEs
        ? `${BASE_URL}/es/desarrollo-web-merida`
        : `${BASE_URL}/en/web-development`,
      languages: {
        es: `${BASE_URL}/es/desarrollo-web-merida`,
        en: `${BASE_URL}/en/web-development`,
        'x-default': `${BASE_URL}/en/web-development`,
      },
    },
  }
}

export default async function WebDevelopmentPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services_pages' })

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('web.hero_title') + ' ' + t('web.hero_title2'),
    description: t('web.hero_description'),
    provider: {
      '@type': 'Organization',
      name: 'Identia Studio',
      url: BASE_URL,
    },
    areaServed: { '@type': 'City', name: 'Mérida' },
    serviceType: 'Web Development',
    url: locale === 'es'
      ? `${BASE_URL}/es/desarrollo-web-merida`
      : `${BASE_URL}/en/web-development`,
  }

  const included = t.raw('web.included') as { title: string; description: string }[]
  const whyUs = t.raw('web.why_us') as { title: string; description: string }[]
  const faq = t.raw('web.faq') as { q: string; a: string }[]

  const content = {
    heroTitle: t('web.hero_title'),
    heroTitle2: t('web.hero_title2'),
    heroDescription: t('web.hero_description'),
    heroLong: t('web.hero_long'),
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
      { href: '/mobile-apps' as const, label: t('nav_labels.mobile') },
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
