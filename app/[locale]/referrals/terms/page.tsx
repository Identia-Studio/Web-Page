
import { Hero } from "@/components/sections/referrals/terms/hero";

const baseUrl = 'https://www.identiastudio.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Términos del Programa de Referidos | Identia Studio'
      : 'Referral Program Terms | Identia Studio',
    description: isEs
      ? 'Términos y políticas de uso del programa de referidos de Identia Studio. Condiciones de participación, pagos y elegibilidad.'
      : 'Terms and conditions for the Identia Studio referral program. Participation rules, payment conditions, and eligibility.',
    alternates: {
      canonical: isEs ? `${baseUrl}/es/referidos/terminos` : `${baseUrl}/en/referrals/terms`,
      languages: {
        es: `${baseUrl}/es/referidos/terminos`,
        en: `${baseUrl}/en/referrals/terms`,
        'x-default': `${baseUrl}/en/referrals/terms`,
      },
    },
  };
}

export default function Terms() {
  return (
    <>
      <Hero />
    </>
  )
}
