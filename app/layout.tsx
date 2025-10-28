import type { Metadata } from "next";
import "./globals.css"
import BaseLayout from "@/components/layout/base_layout";

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
      </head>
      <body className="antialiased bg-black text-white">
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
