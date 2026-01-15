'use client'

import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className=" px-8 container mx-auto max-w-screen-2xl">
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
        <motion.div
          className="w-full md:w-1/2"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl mx-auto font-titles uppercase font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            De idea a producto: <span className="text-yellow-400">lanza rápido</span>, crece con calidad.
          </motion.h1>
          
          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-titles mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Diseño + desarrollo + IA para construir productos digitales claros, rápidos y escalables.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <Link href="/schedule">
                Agendar llamada
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="#portfolio">
                Nuestro portafolio
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center relative"
        >
          <motion.div className="">
            <Image
              src="/images/vector-2.png"
              alt="vector-2"
              width={640}
              height={640}
              sizes="(max-width: 768px) 320px"
            />
          </motion.div>
          <motion.div
            
          >
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="/images/Icosahedron.png"
              alt="Icosahedron"
              width={500}
              height={500}
              sizes="(max-width: 768px) 300px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
