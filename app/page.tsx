import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero"
// import { FeaturedWork } from "@/components/sections/home/featured-work"
// import { AboutUs } from "@/components/sections/home/AboutUs"
import { Portfolio } from "@/components/sections/home/Portfolio"
import { WhatWeDo } from "@/components/sections/home/WhatWeDo"
import { HowWeWork } from "@/components/sections/home/HowWeWork"
// import { Testimonials } from "@/components/sections/home/testimonials"

export const metadata: Metadata = {
  title: 'Identia Studio | Desarrollo Web y Marketing Digital en Mérida',
  description:
    'Estudio digital especializado en desarrollo web, SEO y soluciones a la medida para negocios e inmobiliarias en Mérida y México.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      {/* <AboutUs /> */}
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <Portfolio />
    </>
  )
}
