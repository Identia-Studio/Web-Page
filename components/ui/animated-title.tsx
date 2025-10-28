'use client'
import {  memo, ReactNode } from 'react';
import { motion } from "motion/react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

interface Props {
  children: ReactNode | string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const titleVariants = cva(
  "text-4xl md:text-7xl font-bold mb-8 leading font-titles",
  {
    variants: {
      variant: {
        default: "font-bold mb-8 leading font-titles",
      },
      size: {
        default: "text-4xl md:text-7xl",
        h1: "text-4xl md:text-7xl",
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

const AnimatedTitle = ({
    className,
    children,
    type = 'h1'
  }: Props) => {
  const Comp = motion.create(type)

  return (
    <Comp
      className={cn(titleVariants({ size: type, className }))}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </Comp>
  )
};

export default memo(AnimatedTitle);