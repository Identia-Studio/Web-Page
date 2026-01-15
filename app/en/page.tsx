'use client';

import { useRouter } from "next/navigation"
import { useEffect } from "react"
// import { Testimonials } from "@/components/sections/home/testimonials"


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])
  return null
}
