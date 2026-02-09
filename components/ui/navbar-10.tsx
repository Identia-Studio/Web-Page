'use client';

import * as React from 'react';
import { useRef } from 'react';
import { motion } from "motion/react"
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import IdentiaLight from '@/assets/images/identia-studio-light.png'

export const Navbar10 = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (
    {
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLElement>(null);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            <Image
                src={IdentiaLight}
                alt="Identia Studio: Light logo"
                width={100} 
                height={50} />
          </div>

          {/* Right side: Actions */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <Button
              asChild
            >
              <Link href="/#contact">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, repeatDelay: 4, duration: .5, ease: "easeInOut"}}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Contáctanos
                </motion.span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

Navbar10.displayName = 'Navbar10';
