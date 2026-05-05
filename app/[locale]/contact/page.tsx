import type { Metadata } from "next";
import { ContactInfo } from "@/components/sections/contact/contact-info";

const BASE_URL = 'https://www.identiastudio.com';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MarketingAgency', 'ProfessionalService'],
  name: 'Identia Studio',
  image: `${BASE_URL}/favicon.png`,
  url: BASE_URL,
  telephone: '+52 999 544 6000',
  email: 'hola@identiastudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Los Héroes',
    addressLocality: 'Mérida',
    addressRegion: 'Yucatán',
    postalCode: '97306',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.9882745,
    longitude: -89.5316852,
  },
  hasMap: `https://maps.google.com/maps?q=20.9882745,-89.5316852`,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/identia-studio-mid',
    'https://instagram.com/identia.studio.mid',
    'https://www.facebook.com/identia.studio',
  ],
  areaServed: { '@type': 'City', name: 'Mérida' },
  priceRange: '$$',
};

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Contacto | Identia Studio — Agencia Digital en Mérida, Yucatán'
      : 'Contact | Identia Studio — Digital Agency in Mérida, Mexico',
    description: isEs
      ? 'Visítanos en Mérida, Yucatán o escríbenos por WhatsApp, teléfono o correo. Horario: Lunes–Viernes 9:00–18:00, Sábado 10:00–14:00.'
      : 'Visit us in Mérida, Yucatán or reach us via WhatsApp, phone, or email. Hours: Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–2:00 PM.',
    alternates: {
      canonical: isEs ? `${BASE_URL}/es/contacto` : `${BASE_URL}/en/contact`,
      languages: {
        es: `${BASE_URL}/es/contacto`,
        en: `${BASE_URL}/en/contact`,
        'x-default': `${BASE_URL}/en/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactInfo locale={locale} />
    </>
  );
}
