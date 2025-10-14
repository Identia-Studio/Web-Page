"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  isSpanish: boolean
  setIsSpanish: (isSpanish: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isSpanish, setIsSpanish] = useState(true) // Default to Spanish

  return (
    <LanguageContext.Provider value={{ isSpanish, setIsSpanish }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
