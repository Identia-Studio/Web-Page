import { Hero } from "@/components/sections/home/hero"
// import { FeaturedWork } from "@/components/sections/home/featured-work"
// import { AboutUs } from "@/components/sections/home/AboutUs"
import { Portfolio } from "@/components/sections/home/Portfolio"
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
      <HowWeWork />
      <Portfolio />
      {/* TODO unhyde when the section is ready */}
      {/* <Testimonials /> */}
    </>
  )
}
