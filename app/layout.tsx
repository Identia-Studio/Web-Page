import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css"
import BaseLayout from "@/components/layout/base_layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Identia Studio - Más que desarrollo: identidad digital.",
  description: "We create beautiful, modern web experiences that help your business grow. From design to development, we bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* <!-- Meta Pixel Code --> */}
        <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '816576931331776');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image alt="facebook pixel" height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=816576931331776&ev=PageView&noscript=1" />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className="antialiased bg-black text-white">
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
