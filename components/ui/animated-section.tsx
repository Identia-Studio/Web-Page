'use client'
import { motion, Variants } from "motion/react"
import { Children, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }: Props) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {Children.map(children, (child) => (
      <motion.div
        variants={item}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

export default AnimatedSection;