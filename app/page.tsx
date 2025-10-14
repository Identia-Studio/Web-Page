import { Hero } from "@/components/sections/hero"
import { FeaturedWork } from "@/components/sections/featured-work"
import { CTASection } from "@/components/sections/cta-section"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <Hero />
        <FeaturedWork />
        <CTASection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
