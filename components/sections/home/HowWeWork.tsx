'use client'
import { ReactNode } from 'react';
import { motion } from "framer-motion";
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
    description: "Nos alineamos en objetivo, alcance, tiempos y definición",
    subtext: "de éxito.",
    icon: <Handshake className="w-6 h-6 text-black" />
  },
  {
    title: "Discovery",
    description: "Entendemos usuario, negocio y mercado. Priorizamos lo",
    subtext: "que mueve el producto.",
    icon: <Search className="w-6 h-6 text-black" />
  },
  {
    title: "Moodboard",
    description: "Exploramos dirección visual + experiencia. Prototipo",
    subtext: "navegable para validar rápido.",
    icon: <Paintbrush className="w-6 h-6 text-black" />
  },
  {
    title: "Refining",
    description: "Iteramos con feedback, afinamos UX/UI y definimos el",
    subtext: "sistema de componentes.",
    icon: <Pencil className="w-6 h-6 text-black" />
  },
  {
    title: "Deliver",
    description: "Entregamos diseño + build, documentación y soporte de",
    subtext: "lanzamiento.",
    icon: <Rocket className="w-6 h-6 text-black" />
  }
]
export function HowWeWork() {
  return (
    <section className="bg-yellow-400 text-white py-16">
      <div className="px-8">
        <motion.h2
            className="text-4xl md:text-5xl text-white max-w-2xl font-titles uppercase font-bold w-1/2 md:w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nuestro <span className="text-gray-900">proceso</span>
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-gray-900 max-w-2xl leading-relaxed font-text mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Un proceso simple, con entregables claros en cada etapa.
          </motion.p>
      </div>
      <div>
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              whileHover={{opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center bg-yellow-400 border-y border-black flex-wrap py-4"
            >
              <h3 className="font-titles text-5xl md:text-6xl p-4 text-gray-900 ">
                0{i+1}
              </h3>

              <h4 className="flex-1 font-titles text-4xl md:text-6xl font-semibold uppercase p-4 text-left text-gray-900">
                {step.title}
              </h4>
              <p className="md:flex-1 text-gray-900 mb-2 p-4 text-left justify-self-end">
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
