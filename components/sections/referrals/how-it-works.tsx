'use client'
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    title: "Formulario",
    description: "Envía los datos del cliente referido."
  },
  {
    title: "Contácto",
    description: "Nosotros contactamos, diagnosticamos y cotizamos."
  },
  {
    title: "Pago",
    description: "Si el proyecto se concreta y paga anticipo, tú recibes tu comisión.",
  },
]
export function HowItWorks() {
  return (
    <section className="bg-yellow-400 text-white py-16">
      <div className="px-8 container mx-auto max-w-screen-2xl">
        <motion.h2
          className="text-4xl md:text-5xl text-white max-w-2xl font-titles uppercase font-bold mb-8 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona <br /> <span className="text-gray-900">el programa?</span>
        </motion.h2>

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
              className="border-y border-black "
            >
              <div className="container mx-auto max-w-screen-2xl flex items-center bg-yellow-400  flex-wrap py-4">
                <h3 className="font-titles text-5xl md:text-6xl py-4 px-8 text-gray-900 ">
                  0{i+1}
                </h3>

                <h4 className="flex-1 font-titles text-4xl md:text-6xl font-semibold uppercase p-4 text-left text-gray-900">
                  {step.title}
                </h4>
                <p className="md:flex-1 text-gray-900 mb-2 py-4 px-8 text-left justify-self-end">
                  {step.description}
                  {"\n"}
                  {step.subtext}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
