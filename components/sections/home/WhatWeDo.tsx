'use client'
import { motion } from "motion/react"
import { ReactElement } from 'react';
import { AppWindow, BrushIcon, CodeIcon } from 'lucide-react';
import AnimatedSection from "@/components/ui/animated-section";
import { Separator } from "@/components/ui/separator"


interface Service {
  title: string;
  description: string;
  icon?: ReactElement<SVGSVGElement>
}


export function WhatWeDo() {
  const SERVICES: Service[] = [
    {
      title: "UI/UX Design",
      description: "Diseñamos experiencias y una identidad visual consistente. Flujos, interfaces y sistema de diseño para web, app y marketing. Listo para construir y escalar.",
      icon: <AppWindow size={34} />
    },
    {
      title: "Software Development",
      description: "Webs, plataformas y apps móviles listas para producción. Integraciones (auth, pagos, APIs) + performance y estabilidad. Base escalable para evolucionar sin rehacer.",
      icon: <CodeIcon size={34} />
    },
    {
      title: "Inteligencia Artificial",
      description: "IA aplicada para automatizar y mejorar tu producto. Asistentes, búsqueda inteligente, clasificación y extracción de datos. Impacto real, con privacidad y control humano.",
      icon: <BrushIcon size={34} />
    },
  ]

  return (
    <section className="text-white py-16 px-8 bg-[#101010]">
      <div className="">
        <div >
          <motion.h2
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold w-1/2 md:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nuestros <span className="text-yellow-400">servicios</span>
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-text mb-8  w-full md:w-2/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Diseñamos experiencias simples y construimos producto real para mejorar conversión y retención.
          </motion.p>
        </div>
        <div >
          <AnimatedSection>
            {SERVICES.map((service: Service) => (
              <div key={service.title} className="rounded-lg p-6 relative shadow mb-6">
                <div className=" w-12 h-12 bg-[#181818] rounded-full flex items-center justify-center mb-14">
                  <motion.span
                    className="text-yellow-400 font-bold"
                    whileInView={{ scale: 1 }}
                    initial={{ scale: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    viewport={{once: true}}
                  >
                    {service.icon}
                  </motion.span>
                </div>
                
                <div className="">
                  <h4 className="text-yellow-400 font-semibold text-xl mb-1 font-titles">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-text">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
