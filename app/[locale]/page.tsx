import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero"
// import { FeaturedWork } from "@/components/sections/home/featured-work"
// import { AboutUs } from "@/components/sections/home/AboutUs"
import { Portfolio } from "@/components/sections/home/Portfolio"
import { WhatWeDo } from "@/components/sections/home/WhatWeDo"
import { HowWeWork } from "@/components/sections/home/HowWeWork"
// import { Testimonials } from "@/components/sections/home/testimonials"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Identia Studio | Agencia Digital en Mérida, Yucatán'
      : 'Identia Studio | Web Development Agency in Mérida, Mexico',
    description: isEs
      ? 'Agencia de desarrollo web, apps móviles y diseño UI/UX en Mérida, Yucatán. Construimos productos digitales con IA, rápidos y escalables.'
      : 'Web development, mobile apps & UI/UX design agency in Mérida, Yucatán, Mexico. We build digital products with AI — fast and scalable.',
  };
}

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
