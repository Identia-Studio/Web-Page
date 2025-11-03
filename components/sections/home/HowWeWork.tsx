'use client'
import { ReactNode } from 'react';
import { motion } from "framer-motion";
import AnimatedBadge from "@/components/ui/animated-badge";
import AnimatedTitle from "@/components/ui/animated-title";
import AnimatedText from "@/components/ui/animated-text";
import { Rocket, Search, Handshake, Paintbrush, Pencil } from "lucide-react";

interface Step {
  title: string;
  description: string;
  subtext: string;
  icon: ReactNode
}

const STEPS: Step[] = [
  {
    title: "Onboarding",
    description: "Nos reunimos contigo para conocer tu proyecto y entender tu visión.",
    subtext: "Definimos objetivos, estilo visual y alcances iniciales.",
    icon: <Handshake className="w-6 h-6 text-black" />
  },
  {
    title: "Discovery",
    description: "Investigamos y analizamos tu marca, tu mercado y tu competencia.",
    subtext: "Encontramos oportunidades visuales y de posicionamiento.",
    icon: <Search className="w-6 h-6 text-black" />
  },
  {
    title: "Moodboard",
    description: "Creamos conceptos visuales, tipografías y paletas de color.",
    subtext: "Damos forma al ADN visual de tu marca.",
    icon: <Paintbrush className="w-6 h-6 text-black" />
  },
  {
    title: "Refining",
    description: "Iteramos y refinamos los detalles contigo.",
    subtext: "Pequeños cambios, gran diferencia. La coherencia importa.",
    icon: <Pencil className="w-6 h-6 text-black" />
  },
  {
    title: "Deliver",
    description: "Te entregamos todo listo para brillar.",
    subtext: "Archivos finales, guías de uso y acompañamiento post-entrega.",
    icon: <Rocket className="w-6 h-6 text-black" />
  }
]
export function HowWeWork() {
  return (
    <section className="bg-black text-white py-16">
      <div className="p-12 text-center">
        <div className="mb-2">
          <AnimatedBadge>
            Cómo trabajamos
          </AnimatedBadge>
        </div>
        <AnimatedTitle type="h3">
          Nuestro proceso  
        </AnimatedTitle>

        <AnimatedText>
          Transformamos ideas en identidades sólidas a través de un proceso claro y colaborativo
        </AnimatedText>
      </div>
      <div>
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              whileHover={{opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex md:justify-between items-center bg-neutral-900 border-y border-neutral-800 flex-wrap py-4"
            >
              <h3 className="font-titles text-5xl md:text-7xl p-4 text-neutral-500 md:w-[200px]">
                0{i+1}
              </h3>

              <h2 className="font-titles text-4xl md:text-7xl font-semibold uppercase md:flex-1 p-4 text-left">
                {step.title}
              </h2>
              <p className=" text-neutral-400 mb-2 w-full md:w-1/3 p-4">
                {step.description}
                {"\n"}
                {step.subtext}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
