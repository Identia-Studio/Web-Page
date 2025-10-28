'use client'
import AnimatedBadge from "@/components/ui/animated-badge"
import AnimatedTitle from "@/components/ui/animated-title"
import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="py-20 px-8 container mx-auto max-w-screen-2xl">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <AnimatedBadge
          >
            We&apos;re Identia Studio
          </AnimatedBadge>
        </div>

        <AnimatedTitle>
          Diseñamos marcas que conectan con su propósito.
        </AnimatedTitle>
        
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          En Identia Studio creamos identidades visuales modernas, estratégicas y memorables para impulsar tu presencia digital.
        </motion.p>
      </motion.div>
    </section>
  )
}
