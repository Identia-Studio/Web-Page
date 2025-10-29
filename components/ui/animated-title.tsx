'use client'
import {  memo } from 'react';
import { motion, Variants } from "motion/react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

interface Props {
  children: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const titleVariants = cva(
  "text-4xl md:text-7xl font-bold mb-8 leading font-titles uppercase flex justify-center flex-wrap gap-x-4",
  {
    variants: {
      variant: {
        default: "font-bold mb-8 leading font-titles",
      },
      size: {
        default: "text-4xl md:text-7xl",
        h1: "text-4xl md:text-7xl ",
        h2: "text-3xl md:text-6xl",
        h3: "text-2xl md:text-5xl",
        h4: "text-xl md:text-4xl",
        h5: "text-md md:text-3xl",
        h6: "text-xs md:text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 1,
      ease: "easeOut"
    },
  },
};

const letterVariants: Variants = {
  hidden: { y: 10, opacity: 0 }, // Comienza arriba y transparente
  visible: { y: 0, opacity: 1 },
};

const AnimatedTitle = ({
    className,
    children,
    type = 'h1'
  }: Props) => {
  const Comp = motion.create(type)
  const words = children.split(" ");

  return (
    <Comp
      className={cn(titleVariants({ size: type, className }))}
    >
      {words.map((word) => (
        <motion.div
          key={word}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          style={{ display: "flex", justifyContent: "center"}}
          viewport={{ once: true }}
        >
          {word.split("").map((letter, index) => (
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
      ))}
    </Comp>
  )
};

export default memo(AnimatedTitle);