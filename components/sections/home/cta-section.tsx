'use client'
import { motion } from "motion/react"
import { Parallax } from 'react-scroll-parallax';


export function CTASection() {
  return (
    <Parallax speed={10}>
      <section className="bg-black text-white relative overflow-hidden py-16 min-h-[420px] md:min-h-[600px]">
        {/* === Fondo animado (Ticker) === */}
        <div className="absolute overflow-hidden opacity-10 md:top-[00px]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Texto repetido dos veces */}
            <p className="text-[150px] md:text-[250px] font-extrabold uppercase tracking-[1vw]">
              • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT •
            </p>
          </motion.div>
        </div>

        <div className="absolute overflow-hidden opacity-10 bottom-[000px]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Texto repetido dos veces */}
            <p className="text-[150px] md:text-[250px] font-extrabold uppercase tracking-[1vw]">
              • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT • LET’S CONNECT •
            </p>
          </motion.div>
        </div>
      </section>
    </Parallax>
  )
}
