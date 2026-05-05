
import { Hero } from "@/components/sections/referrals/hero";
import { HowItWorks } from "@/components/sections/referrals/how-it-works";
import { Benefits } from "@/components/sections/referrals/benefits";
import { HaveQuestions } from "@/components/sections/referrals/have-questions";
// import { Testimonials } from "@/components/sections/home/testimonials"

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
      ? 'Programa de Referidos | Identia Studio'
      : 'Referral Program | Identia Studio',
    description: isEs
      ? 'Gana hasta 15% de comisión recomendando clientes a Identia Studio. Sin vender ni gestionar proyectos. Programa oficial de referidos.'
      : 'Earn up to 15% commission by referring clients to Identia Studio. No selling or project management required.',
    alternates: {
      canonical: isEs ? `${baseUrl}/es/referidos` : `${baseUrl}/en/referrals`,
      languages: {
        es: `${baseUrl}/es/referidos`,
        en: `${baseUrl}/en/referrals`,
        'x-default': `${baseUrl}/en/referrals`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default function Referrals() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <section className="text-white py-16 px-8 container mx-auto max-w-screen-2xl">
        <HaveQuestions />
      </section>
    </>
  )
}
