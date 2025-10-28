'use client'
import { motion } from "motion/react"
import AnimatedBadge from '@/components/ui/animated-badge';
import AnimatedText from '@/components/ui/animated-text';
import AnimatedTitle from '@/components/ui/animated-title';
import { Parallax } from 'react-scroll-parallax';
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Parallax speed={10}>
      <section className="bg-black text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="relative">
            <div className="absolute -top-16 left-0 right-0 flex justify-center space-x-8 flex-wrap">
              <AnimatedBadge>
                Seasoned pros in building big ideas
              </AnimatedBadge>
               <AnimatedBadge delay={.3}>
                A full service studio
              </AnimatedBadge>
            </div>
            <div className="absolute -top-8 left-0 right-0 flex justify-center space-x-8 flex-wrap">
              <AnimatedBadge delay={.6}>
                Partners, not just vendors
              </AnimatedBadge>
               <AnimatedBadge delay={.9}>
                Clients love passionate pros
              </AnimatedBadge>
            </div>
            
            <AnimatedTitle type="h2">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </AnimatedTitle>


            <AnimatedText>
              Agenda una llamada gratuita.
            </AnimatedText>

            <div className="mt-8">
              <Button variant="outline">
                Agendar llamada
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  )
}
