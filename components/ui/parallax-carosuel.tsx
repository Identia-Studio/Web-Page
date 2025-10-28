'use client'

import React, { ReactNode } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

interface Props {
    children: ReactNode[]
}

const ParallaxCarousel = ({ children = [] }: Props) => {
  return (
    <ParallaxProvider>
      <div className="flex gap-4 p-4 snap-x snap-mandatory">
        {children.map((child, index) => (
          <Parallax
            key={index}
            translateX={[-50, 50]} // Adjust parallax effect
            className="flex-none snap-center w-[300px] flex justify-center items-center rounded-[10px] shadow-md"
          >
            {child}
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxCarousel;
