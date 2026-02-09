'use client';

import { useRouter } from "next/navigation"
import { useEffect } from "react"
// import { Testimonials } from "@/components/sections/home/testimonials"

// export const metadata = {
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])
  return null
}
