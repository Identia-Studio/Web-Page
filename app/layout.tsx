import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar10 } from "@/components/ui/navbar-10";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Identia Studio - Modern Web Development",
  description: "We create beautiful, modern web experiences that help your business grow. From design to development, we bring your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar10 
          userName="Identia Studio"
          userEmail="hello@identiastudio.com"
          upgradeText="Get Started"
        />
        {children}
      </body>
    </html>
  );
}
