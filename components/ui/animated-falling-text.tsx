'use client'
import { motion, Variants } from "motion/react"

interface Props {
  children: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: -30, opacity: 0 }, // Comienza arriba y transparente
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } },
  };


const AnimatedFallingText = ({ children }: Props) => {
  const letters = children.split("");

  return (
    <motion.div
      className="word-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      style={{ display: "flex", justifyContent: "center" }}
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ margin: "0" }}
          viewport={{ once: true }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
};

export default AnimatedFallingText;