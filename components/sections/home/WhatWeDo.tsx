'use client'
import { motion } from "motion/react"
import { ReactElement } from 'react';
import { AppWindow, BrushIcon, CodeIcon } from 'lucide-react';
import AnimatedSection from "@/components/ui/animated-section";
import AnimatedBadge from "@/components/ui/animated-badge";
import AnimatedTitle from "@/components/ui/animated-title";
import AnimatedText from "@/components/ui/animated-text";

interface Service {
  title: string;
  description: string;
  icon?: ReactElement<SVGSVGElement>
}


export function WhatWeDo() {
  const SERVICES: Service[] = [
    {
      title: "Branding",
      description: "Naming, logotipo, manual de marca.",
      icon: <BrushIcon size={34} />
    },
    {
      title: "Software Development",
      description: "Diseño web funcional,",
      icon: <CodeIcon size={34} />
    },
    {
      title: "UI/UX Design",
      description: "Diseño web funcional, adaptado a tu marca y optimizado para conversión.",
      icon: <AppWindow size={34} />
    }
  ]

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="flex flex-col md:flex-row">
        <div className="p-4">
          <div className="mb-2">
            <AnimatedBadge>
              Lo que hacemos
            </AnimatedBadge>
          </div>
          <AnimatedTitle type="h3">
            Nuestros clientes aman
          </AnimatedTitle>

          <AnimatedText>
            Soluciones creativas para marcas que quieren destacar
          </AnimatedText>
        </div>
        <div className="p-4">
          <AnimatedSection>
            {SERVICES.map((service: Service) => (
              <div key={service.title} className="bg-[#181818] rounded-lg p-6 relative shadow mb-6">
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <motion.span
                    className="text-black font-bold"
                    whileInView={{ scale: 1 }}
                    initial={{ scale: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    viewport={{once: true}}
                  >
                    {service.icon}
                  </motion.span>
                </div>
                
                <div className="pr-12">
                  <h4 className="text-white font-semibold text-lg mb-1 font-titles">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-text">
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
