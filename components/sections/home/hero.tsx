'use client'

import WhatsappIcon from "@/components/icons/whatsapp_icon"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import Vector2 from '@/assets/images/vector-2.png'
import Icosahedron from '@/assets/images/Icosahedron.png'


export function Hero() {
  return (
    <section className="pb-16 px-8 container mx-auto max-w-screen-2xl">
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
        <motion.div
          className="w-full md:w-1/2"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl text-gray-300 max-w-2xl font-titles uppercase font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            De idea a producto: <span className="text-yellow-400">lanza rápido</span>, crece con calidad.
          </motion.h1>
          
          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-titles mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Diseño + desarrollo + IA para construir productos digitales claros, rápidos y escalables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4">
            <Button asChild>
              <Link href="#contact">
                Agendar llamada
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="https://api.whatsapp.com/send?phone=529995446000&text=Hola%2C+me+gustar%C3%ADa+cotizar+un+servicio." target="_blank">
                Escríbenos por WhatsApp
                <WhatsappIcon />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={Vector2}
              alt="vector-2"
              width={640}
              height={640}
              sizes="(max-width: 768px) 320px"
            />
          </motion.div>
          <motion.div
             initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={Icosahedron}
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
