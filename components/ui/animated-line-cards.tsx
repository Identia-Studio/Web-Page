'use client'
import { ReactNode } from 'react';
import { motion } from "framer-motion";
import { Rocket, Search, Handshake, Paintbrush, Pencil } from "lucide-react";

export interface Step {
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
    <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-6 text-center md:text-left">
      {/* Línea de conexión */}
      <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-neutral-800"></div>

      {STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: "#0f172a" }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center md:items-start bg-neutral-900 rounded-2xl p-6 border border-neutral-800 min-h-[300px] flex-1"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2"
          >
            {step.icon}
          </motion.div>

          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-neutral-400 mb-2">{step.description}</p>
          <p className="text-xs text-neutral-500">{step.subtext}</p>

          {/* Línea conectora en versión mobile */}
          {i < STEPS.length - 1 && (
            <div className="md:hidden w-[2px] h-8 bg-neutral-800 mt-4"></div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
