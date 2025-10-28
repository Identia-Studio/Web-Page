import { Hero } from "@/components/sections/home/hero"
// import { FeaturedWork } from "@/components/sections/home/featured-work"
import { CTASection } from "@/components/sections/home/cta-section"
import { AboutUs } from "@/components/sections/home/AboutUs"
import { InProgressWork } from "@/components/sections/home/InProgressWork"
import { WhatWeDo } from "@/components/sections/home/WhatWeDo"
import { HowWeWork } from "@/components/sections/home/HowWeWork"
// import { Testimonials } from "@/components/sections/home/testimonials"


export default function Home() {
  return (
    <>
      {/* <AboutUs /> */}
      <Hero />
      {/* TODO unhyde when the section is ready */}
      {/* <FeaturedWork /> */}
      <WhatWeDo />
      <InProgressWork />
      <HowWeWork />
      <CTASection />
      {/* TODO unhyde when the section is ready */}
      {/* <Testimonials /> */}
    </>
  )
}
