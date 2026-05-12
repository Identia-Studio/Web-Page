import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import "../globals.css"
import BaseLayout from "@/components/layout/base_layout";
import Image from "next/image";
import { GoogleAnalytics, GoogleTagManager  } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next';
import { Poppins, Montserrat } from 'next/font/google';
import MsClarity from "@/components/3rdparty/MsClarity";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

interface GenerateMetadataProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const baseUrl = 'https://www.identiastudio.com';

  return {
    title: isEs
      ? 'Identia Studio | Agencia Digital en Mérida, Yucatán'
      : 'Identia Studio | Web Development Agency in Mérida, Mexico',
    description: isEs
      ? 'Agencia de desarrollo web, apps móviles y diseño UI/UX en Mérida, Yucatán. Construimos productos digitales con IA, rápidos y escalables.'
      : 'Web development, mobile apps & UI/UX design agency in Mérida, Yucatán, Mexico. We build digital products with AI — fast and scalable.',
    openGraph: {
      title: 'Identia Studio',
      description: isEs ? 'Desarrollo web y soluciones digitales a la medida.' : 'Custom web development and digital solutions.',
      url: `${baseUrl}/${locale}`,
      siteName: 'Identia Studio',
      type: 'website',
      locale: isEs ? 'es_MX' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Identia Studio',
      description: isEs ? 'Desarrollo web y soluciones digitales a la medida.' : 'Custom web development and digital solutions.',
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
  };
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MarketingAgency', 'ProfessionalService'],
  name: 'Identia Studio',
  url: 'https://www.identiastudio.com',
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
  areaServed: { '@type': 'City', name: 'Mérida' },
  sameAs: [
    'https://www.linkedin.com/company/identia-studio-mid',
    'https://instagram.com/identia.studio.mid',
    'https://www.facebook.com/identia.studio',
  ],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`dark ${poppins.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-black text-white">
        <NextIntlClientProvider locale={locale}>
          <BaseLayout>
            {children}
          </BaseLayout>
        </NextIntlClientProvider>

        <Script id="facebook-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '816576931331776');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image alt="facebook pixel" height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=816576931331776&ev=PageView&noscript=1" />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GT_ID!} />
        <MsClarity />
        <Analytics />
      </body>
    </html>
  );
}
