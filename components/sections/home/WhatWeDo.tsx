'use client'
import { motion, Variants } from "motion/react"
import AnimatedServices from "./services/animated-services";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsappIcon from "@/components/icons/whatsapp_icon";
import { Capabilities } from "./services/capabilities";
import { ScheduleCtaSection } from "../shared/schedule-cta-section";
import desarrollo from '@/assets/images/services/desarrollo-web.png'
import apps from '@/assets/images/services/apps-moviles.png'
import ui from '@/assets/images/services/ui-ux-design.png'
import branding from '@/assets/images/services/branding.png'


interface Service {
  title: string;
  description: string;
  image: StaticImageData,
  features: string[];
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};


export function WhatWeDo() {
  const SERVICES: Service[] = [
    {
      title: "Desarrollo Web",
      description: "Plataformas y sitios listos para producción.",
      image: desarrollo,
      features: [
        'Performance y escalabilidad',
        'Front + Back (según caso)',
        'Deploy + QA básico'
      ]
    },
    {
      title: "Apps Móviles",
      description: "Apps IOS/Android para usuarios reales.",
      image: apps,
      features: [
        'Auth, perfiles, notificaciones',
        'Integraciones (pagos/APIs)',
        'Publicación y soporte'
      ]
    },
    {
      title: "UI/UX Design",
      description: "Experiencias claras que se sienten premium.",
      image: ui,
      features: [
        'Flujos + prototipos',
        'UI final + componentes',
        'Handoff para desarrollo'
      ]
    },
    {
      title: "Branding",
      description: "Identidad visual consistente para producto y marketing.",
      image: branding,
      features: [
        'Sistema visual (no solo logotipo)',
        'Guía rápída + assets',
        'Consistencia web/app/redes'
      ]
    },
  ]

  return (
    <section className="text-white py-16 px-8 container mx-auto max-w-screen-2xl">
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
          <AnimatedServices>
            {SERVICES.map((service: Service) => (
              <div key={service.title} className="rounded-lg p-6 relative bg-[#171717] h-full">
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="object-cover "
                    width={70}
                    height={70}
                  />
                  <div className="flex-1">
                    <h3 className="text-yellow-400 font-semibold text-xl mb-1 font-titles">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed font-text font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="list-disc pl-5 marker:text-yellow-400 mb-4"
                >
                  {service.features.map((feature) => (
                    <motion.li
                      variants={item}
                      key={feature}
                      className="text-gray-300 text-sm font-text leading-relaxed">
                        {feature}
                      </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row gap-4">
                  <Button asChild>
                    <Link href="#contact">
                      Solicitar propuesta
                    </Link>
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href={`https://api.whatsapp.com/send?phone=529995446000&text=Hola%2C+me+gustar%C3%ADa+cotizar+un+servicio+de+${service.title.replace(/\s/, '+')}`} target="_blank">
                      Escríbenos por WhatsApp
                      <WhatsappIcon />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            ))}
          </AnimatedServices>

          <Capabilities />

          <ScheduleCtaSection />
        </div>
      </div>
    </section>
  )
}
