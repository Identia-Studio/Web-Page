'use client'
import { motion } from "motion/react"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

interface Props {
  children: string;
  className?: string;
}

const textVariants = cva(
  "text-lg md:text-xltext-gray-300 leading-relaxed font-text",
  {
    variants: {
      variant: {
        default: "text-gray-300 leading-relaxed font-text",
      },
      size: {
        default: "text-lg md:text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const AnimatedText = ({ className, children }: Props) => (
  <motion.p
    className={cn(textVariants({ className }))}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.p>
);

export default AnimatedText;