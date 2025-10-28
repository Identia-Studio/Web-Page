'use client'
import { motion } from "motion/react"
import {  ReactNode } from 'react';
import AnimatedFallingText from "./animated-falling-text";

interface Props {
  children: ReactNode | string;
  delay?: number;
}

const AnimatedBadge = ({ children, delay = 0}: Props) => {

  return (
    <div className="relative overflow-hidden px-4 py-2 text-sm font-medium transform -rotate-2 inline-block font-text">
      {/* Div animado que se “llena” */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: .5, ease: "easeInOut", delay }}
        className="absolute top-0 left-0 h-full bg-yellow-400 border-black border"
        viewport={{ once: true }}
      />
      {/* Contenido sobre la animación */}
      <div className="relative z-10 flex items-center justify-center text-black">
        <AnimatedFallingText>
          {children as string}
        </AnimatedFallingText>
      </div>
    </div>
  )
};

export default AnimatedBadge;