import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/home/hero"

const WhatWeDo = dynamic(() => import('@/components/sections/home/WhatWeDo').then(m => ({ default: m.WhatWeDo })))
const HowWeWork = dynamic(() => import('@/components/sections/home/HowWeWork').then(m => ({ default: m.HowWeWork })))
const Portfolio = dynamic(() => import('@/components/sections/home/Portfolio').then(m => ({ default: m.Portfolio })))

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
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <Portfolio />
    </>
  )
}
