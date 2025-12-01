"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { Language } from "@/lib/i18n"

type LanguageContextValue = {
  language: Language
  changeLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved === "en" || saved === "ar") {
      setLanguage(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("language", language)
    document.documentElement.setAttribute("lang", language)
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
  }, [language, mounted])

  const changeLanguage = (lang: Language) => setLanguage(lang)

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      mounted,
    }),
    [language, mounted]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
