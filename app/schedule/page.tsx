
import AnimatedTitle from "@/components/ui/animated-title"
import AnimatedBadge from "@/components/ui/animated-badge";
import AnimatedText from "@/components/ui/animated-text";
import Calendly from "@/components/calendly";
// import { Testimonials } from "@/components/sections/home/testimonials"

export const metadata = {
  title: 'Agenda una asesoría digital | Identia Studio',
  description:
    'Agenda una asesoría gratuita para analizar tu sitio web, SEO o proyecto digital. Te ayudamos a definir la mejor estrategia.',
};

export default function Schedule() {
  return (
    <>
      <div className="py-12 px-8 container mx-auto max-w-4xl">
        <div className="flex justify-center">
          <AnimatedBadge>
            Schedule a call
          </AnimatedBadge>
        </div>
        <AnimatedTitle>
          Agenda una asesoría digital
        </AnimatedTitle>

        <AnimatedTitle type="h2" className="text-xl md:text-4xl">
          Analizamos tu proyecto y te damos una estrategia clara
        </AnimatedTitle>

        <AnimatedText>
          En esta sesión revisamos tu sitio web, presencia digital y oportunidades de mejora en SEO, diseño y conversión.
        </AnimatedText>
      </div>

      <Calendly />
    </>
  )
}
