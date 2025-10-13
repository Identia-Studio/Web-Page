<<<<<<< HEAD
import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { FeaturedWork } from "@/components/sections/featured-work"
import { CTASection } from "@/components/sections/cta-section"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <CTASection />
        <Testimonials />
      </main>
      <Footer />
    </div>
=======
import { Hero } from "@/components/sections/hero" 

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
    </main>
>>>>>>> 699073b7ba59fa2b248817dbeb70551148cffede
  )
}
