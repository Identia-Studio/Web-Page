"use client"

import { useState } from "react"
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/shadcn-io/animated-modal"
import { useLanguage } from "@/contexts/language-context"

export function QuoteModal() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { isSpanish } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnimating(true)
    
    setTimeout(() => {
      setIsSubmitted(true)
      setIsAnimating(false)
    }, 1800)
  }

  const text = {
    spanish: {
      trigger: "Obtener Cotización",
      contactUs: "Contáctanos",
      greeting: "HOLA.",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      details: "Detalles",
      budget: "Presupuesto",
      notRobot: "No soy un robot",
      submit: "enviar solicitud",
      transmission: "TRANSMISIÓN RECIBIDA",
      response:
        "Un socio de Identia Studio se pondrá en contacto contigo de inmediato.",
    },
    english: {
      trigger: "Get A Quote",
      contactUs: "Contact Us",
      greeting: "HOWDY.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      details: "Details",
      budget: "Budget",
      notRobot: "I'm not a robot",
      submit: "submit request",
      transmission: "TRANSMISSION RECEIVED",
      response: "A partner at Identia Studio will reach out right away.",
    },
  }

  const currentText = isSpanish ? text.spanish : text.english

  return (
    <Modal>
      <ModalTrigger className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors font-text">
        {currentText.trigger}
      </ModalTrigger>

      <ModalBody className="max-w-lg fixed right-0 top-0">
        <ModalContent className="p-0 bg-white rounded-lg relative overflow-visible">
          {!isSubmitted && (
            <div
              className={`transition-all duration-700 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="p-6 border-b border-gray-100 relative">
                <div className="flex items-center justify-between absolute transform -rotate-2">
                  <div className="bg-yellow-400 text-black px-3 py-1 text-sm font-medium">
                    {currentText.contactUs}
                  </div>
                </div>
                <h2 className="text-6xl font-bold text-black mt-4">
                  {currentText.greeting}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                  placeholder={currentText.name}
                />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                  placeholder={currentText.email}
                />
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                  placeholder={currentText.phone}
                />
                <textarea
                  name="details"
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-black focus:outline-none resize-none"
                  placeholder={currentText.details}
                />
                <input
                  type="text"
                  name="budget"
                  className="w-full bg-transparent border-0 border-b border-gray-300 pb-2 text-black placeholder-gray-500 focus:border-black focus:outline-none"
                  placeholder={currentText.budget}
                />

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    name="recaptcha"
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="recaptcha"
                    className="text-sm text-gray-600 select-none"
                  >
                    {currentText.notRobot}
                  </label>
                  <span className="ml-2 text-xs text-gray-400">reCAPTCHA</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  {currentText.submit}
                </button>
              </form>

              {isAnimating && (
                <div className="absolute inset-0 z-50 overflow-hidden pointer-events-none">
                   <div 
                     className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 animate-yellow-rise"
                     style={{
                       width: '100px',
                       height: '100px',
                     }}
                   ></div>
                </div>
              )}
            </div>
          )}

          {isSubmitted && !isAnimating && (
            <div className="p-6 text-center relative z-10 bg-yellow-400 transition-all duration-500 min-h-[687px] flex flex-col justify-center animate-fade-in">
              <h2 className="text-3xl font-bold text-black mb-4">
                {currentText.transmission}
              </h2>
              <p className="text-black text-lg">{currentText.response}</p>
            </div>
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
