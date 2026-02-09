'use client'
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Link from "next/link"

export function ScheduleCtaSection() {
  return (
    <section
      className="rounded-lg p-6 relative mb-6 bg-[#171717] bg-cover bg-center"
      style={{backgroundImage: 'url(/images/services/dark-hole.png)'}}
    >
      <div className="flex-1 flex flex-col items-center py-10 text-center">
        <h3 className="text-yellow-400 font-semibold text-xl mb-4 font-titles">
          ¿No sabes qué necesitas?
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed font-text font-medium mb-4 ">
          Agenda una llamada de 15 min y te propones la ruta más corta.
        </p>

        <Button asChild>
          <Link href="#contact">
            Agendar llamada
          </Link>
        </Button>
      </div>
    </section>
  )
}
