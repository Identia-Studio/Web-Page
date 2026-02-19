
import AnimatedTitle from "@/components/ui/animated-title"
import AnimatedBadge from "@/components/ui/animated-badge";
import AnimatedText from "@/components/ui/animated-text";
import Calendly from "@/components/calendly";
import { Hero } from "@/components/sections/referrals/hero";
import { HowItWorks } from "@/components/sections/referrals/how-it-works";
import { Benefits } from "@/components/sections/referrals/benefits";
import { HaveQuestions } from "@/components/sections/referrals/have-questions";
// import { Testimonials } from "@/components/sections/home/testimonials"

export const metadata = {
  title: 'Programa de Referidos | Identia Studio',
  description:
    'Gana hasta 15% de comisión recomendando clientes a Identia Studio. Sin vender ni gestionar proyectos. Programa oficial de referidos.',
  alternates: {
    canonical: '/referrals',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
