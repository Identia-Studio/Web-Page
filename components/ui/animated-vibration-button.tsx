'use client'
import { motion } from "motion/react"
import { ReactNode } from "react";


interface Props {
  type?: 'button' | 'a';
  children: ReactNode | string
}

// href="https://wa.me/529992755240?text=Hola!%20Me%20gustaría%20más%20información."
// target="_blank"
// rel="noopener noreferrer"
export function CTASection({ children, type = 'a', ...rest}: Props) {
  const Comp = motion.create(type);

  return (
    <Comp
      {...rest}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      animate={{
        rotate: [0, -5, 5, 0], // vibración suave
        transition: {
          repeat: Infinity,
          repeatDelay: 8, // cada 8 segundos
          duration: 0.4,
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M20.52 3.48A11.89 11.89 0 0012 0a11.89 11.89 0 00-8.52 3.48A11.89 11.89 0 000 12c0 2.1.55 4.12 1.6 5.92L0 24l6.2-1.6A11.88 11.88 0 0012 24a11.89 11.89 0 008.52-3.48A11.89 11.89 0 0024 12a11.89 11.89 0 00-3.48-8.52zM12 22a10.03 10.03 0 01-5.08-1.38l-.36-.2-3.68.94.98-3.6-.23-.37A10.03 10.03 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
      </svg> */}
      {children}
    </Comp>
  )
}
