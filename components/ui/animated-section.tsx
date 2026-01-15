'use client'
import { motion, Variants } from "motion/react"
import { Children, ReactNode } from 'react';

interface Props {
  children: ReactNode[];
  hideSeparators?: boolean;
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

const AnimatedSection = ({ children, hideSeparators }: Props) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col md:grid md:grid-cols-3 gap-4"
  >
    {Children.map(children, (child, index) => (
      <motion.div
        variants={item}
        className={`flex-1  ${ hideSeparators ? 'border-0': 'border-b-2 border-b-gray-[#999999]' } md:border-0 ${children.length > index + 1  && !hideSeparators ? 'md:border-r-2 md:border-r-gray-[#999999]' : ''}`}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

export default AnimatedSection;