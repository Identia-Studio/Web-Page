'use client'
import WhatsappIcon from "@/components/icons/whatsapp_icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HaveQuestions() {
  return (
    <section
      className="rounded-lg p-6 relative mb-6 bg-[#171717] bg-cover bg-center"
      style={{backgroundImage: 'url(/images/dark-hole.png)'}}
    >
      <div className="flex-1 flex flex-col items-center py-10 text-center">
        <h3 className="text-yellow-400 font-semibold text-xl mb-4 font-titles">
          ¿No estás seguro de cómo funciona?
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed font-text font-medium mb-4 ">
          Escríbenos por WhatsApp y te explicamos paso a paso cómo puedes ganar con nuestro programa.
        </p>

        <Button asChild>
          <Link href="https://api.whatsapp.com/send?phone=529995446000&text=Hola%2C+quiero+informacion+del+programa+de+referidos." target="_blank">
            Escríbenos por WhatsApp
            <WhatsappIcon />
          </Link>
        </Button>
      </div>
    </section>
  )
}
