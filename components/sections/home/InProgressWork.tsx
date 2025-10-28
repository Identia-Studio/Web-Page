'use client'
import { motion } from "motion/react"
import Image from "next/image"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export function InProgressWork() {
  return (
    <ParallaxBanner  style={{ aspectRatio: '16 / 9' }}>
      <ParallaxBannerLayer speed={-20}>
        <Image
          src="/images/banner-background.jpg" // Replace with your image path
          alt="Parallax Background"
          layout="fill"
          objectFit="cover"
          priority // Ensures the image loads quickly
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer speed={-15}>
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-xl bg-black/60"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-white text-4xl md:text-8xl font-bold mb-8 leading font-titles"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >Lo que viene</motion.h3>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-text text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Estamos preparando nuestros primeros casos de estudio y testimonios.
            <br />
            Muy pronto podrás conocer el detrás de cada marca con la que colaboramos.
          </motion.p>
        </motion.div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}
