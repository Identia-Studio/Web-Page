'use client'
import { InlineWidget } from "react-calendly";
import AnimatedTitle from "@/components/ui/animated-title"
import AnimatedBadge from "@/components/ui/animated-badge";
// import { Testimonials } from "@/components/sections/home/testimonials"


export default function Home() {
  return (
    <>
      <div className="py-12 px-8 container mx-auto max-w-4xl">
        <div className="flex justify-center">
          <AnimatedBadge>
            Schedule a call
          </AnimatedBadge>
        </div>
        <AnimatedTitle>
          Habla con un experto
        </AnimatedTitle>
      </div>

      <InlineWidget
        url="https://calendly.com/identiastudio25/30min"
        styles={{
          height: '1000px',
          width: 500,
        }}
        className="rounded mx-auto"
      />
    </>
  )
}
