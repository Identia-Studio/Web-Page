'use client'
import { motion, Variants } from "motion/react"
import Image, { StaticImageData } from "next/image";
import desarrolloapis from '@/assets/images/services/desarrollo-apis.png'
import integraciones from '@/assets/images/services/integraciones.png'
import securityscan from '@/assets/images/services/security-scan.png'
import automatizaciones from '@/assets/images/services/automatizaciones.png'
import inteligenciaartificial from '@/assets/images/services/inteligencia-artificial.png'
import diagnosticoseo from '@/assets/images/services/diagnostico-seo.png'
import capacidades from '@/assets/images/services/capacidades-tecnicas.png'


interface Capability {
  title: string;
  icon: StaticImageData,
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


export function Capabilities() {
  const capabilities: Capability[] = [
    {
      title: "Desarrollo de APIs",
      icon: desarrolloapis
    },
    {
      title: "Integraciones",
      icon: integraciones
    },
    {
      title: "Security Scan",
      icon: securityscan
    },
    {
      title: "Automatizaciones",
      icon: automatizaciones
    },
    {
      title: "Inteligencia Artificial",
      icon: inteligenciaartificial
    },
    {
      title: "Diagnóstico SEO",
      icon: diagnosticoseo
    },
  ]

  return (
    <section
      className="rounded-lg p-6 relative mb-14 bg-[#171717] bg-cover"
      style={{backgroundImage: 'url(/images/waves.png)'}}
    >
      <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={capacidades}
            alt="Capacidades técnicas"
            className="object-cover"
            width={70}
            height={70}
          />

        </motion.div>
        <div className="flex-1">
          <motion.h3
            className="text-yellow-400 font-semibold text-xl mb-1 font-titles"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Capacidades técnicas
          </motion.h3>
          <motion.p
            className="text-gray-300 text-xs leading-relaxed font-text font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Se integran según el alcance. Te recomendamos lo necesario para tu etapa (MVP, crecimiento o rediseño).
          </motion.p>
        </div>
      </div>
      
      <motion.ul
        className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5 mb-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {capabilities.map((capability) => (
          <motion.li
            variants={item}
            key={capability.title}
            className="lg:flex-1 text-gray-300 text-base lg:text-xs font-text leading-relaxed shadow rounded-lg border p-2 font-medium flex items-center justify-center gap-2">
              <Image
                src={capability.icon}
                alt="Capacidades técnicas"
                className="object-cover"
                width={25}
                height={25}
              />
              {capability.title}
            </motion.li>
        ))}
      </motion.ul>
      
    </section>
  )
}
