'use client'
import { motion } from "motion/react"
import {  ReactNode } from 'react';
import { twJoin } from "tailwind-merge";

interface Props {
  children: ReactNode | string;
  active?: boolean;
  onClick?: () => void
}

const AnimatedButton = ({ children, active, onClick }: Props) => (
  <motion.button
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.6 }}
    transition={{ type: "spring", stiffness: 300 }}
    viewport={{once: true}}
    className={twJoin(
      ' px-4 py-2 rounded text-sm font-medium inline-block font-text cursor-pointer hover:bg-yellow-400 hover:text-black',
      active ? 'bg-yellow-400 text-black' : 'text-white bg-[#181818]'
    )}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default AnimatedButton;