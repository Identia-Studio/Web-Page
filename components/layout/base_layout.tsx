'use client'

import { ParallaxProvider } from 'react-scroll-parallax';
import { Navbar10 } from "@/components/ui/navbar-10";
import { Footer } from "@/components/layout/footer"

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar10 />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
