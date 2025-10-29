'use client'

import { ParallaxProvider } from 'react-scroll-parallax';
import { CTASection } from "@/components/sections/home/cta-section"
import { Navbar10 } from "@/components/ui/navbar-10";
import { Footer } from "@/components/layout/footer"
import { useRouter } from 'next/navigation';

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar10
          onNavItemClick={(href) => {
            router.push(href)
          }}
        />
        <main>
          {children}
          <CTASection />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
