"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { isSpanish, setIsSpanish } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={() => setIsSpanish(true)}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
          isSpanish 
            ? 'bg-yellow-400 text-black' 
            : 'border border-white text-white hover:bg-white hover:text-black'
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setIsSpanish(false)}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
          !isSpanish 
            ? 'bg-yellow-400 text-black' 
            : 'border border-white text-white hover:bg-white hover:text-black'
        }`}
      >
        EN
      </button>
    </div>
  )
}
