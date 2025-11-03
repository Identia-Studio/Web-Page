'use client'
import { motion } from "motion/react"
import { usePathname, useRouter } from "next/navigation";
import { Parallax } from 'react-scroll-parallax';
import AnimatedBadge from '@/components/ui/animated-badge';
import AnimatedText from '@/components/ui/animated-text';
import AnimatedTitle from '@/components/ui/animated-title';
import { Button } from "@/components/ui/button";

export function CTASection() {
  const pathname = usePathname();
  const router = useRouter()

  return (
    <Parallax speed={10}>
      <section className="bg-black text-white relative overflow-hidden">
        {/* === Fondo animado (Ticker) === */}
        <div className="absolute overflow-hidden opacity-10 top-[-100px]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Texto repetido dos veces */}
            <p className="text-[250px] font-extrabold uppercase tracking-[1vw]">
              • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT •
            </p>
          </motion.div>
        </div>

        <div className="absolute overflow-hidden opacity-10 bottom-[-100px]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Texto repetido dos veces */}
            <p className="text-[250px] font-extrabold uppercase tracking-[1vw]">
              • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT •
            </p>
          </motion.div>
        </div>

        <div className="px-8 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <div className="relative">
              <div className="hidden md:inline absolute -top-16 left-0 right-0 flex justify-center space-x-8 flex-wrap">
                <AnimatedBadge>
                  Seasoned pros in building big ideas
                </AnimatedBadge>
                <AnimatedBadge delay={.3}>
                  A full service studio
                </AnimatedBadge>
              </div>
              <div className="hidden md:inline absolute -top-8 left-0 right-0 flex justify-center space-x-8 flex-wrap">
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
              {pathname != '/schedule' && (
                <div className="mt-8">
                  <Button variant="outline" onClick={() => {router.push('/schedule', {scroll: false})}}>
                    Agendar llamada
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </Parallax>
  )
}
