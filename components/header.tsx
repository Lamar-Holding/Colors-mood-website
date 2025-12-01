"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { useTranslation } from "@/lib/i18n"

export default function Header() {
  const { language, changeLanguage, mounted } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation(language)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "vehicle", "capabilities", "pricing", "portfolio", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom > 120
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const isRTL = language === "ar"
  const navItems = [
    { id: "home", label: t("navHome") },
    { id: "about", label: t("navAbout") },
    { id: "services", label: t("navServices") },
    { id: "vehicle", label: t("navVehicle") },
    { id: "capabilities", label: t("navCapabilities") },
    { id: "pricing", label: t("navPricing") },
    { id: "portfolio", label: t("navPortfolio") },
    { id: "contact", label: t("navContact") },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Branding */}
          <button
            onClick={() => window.location.reload()}
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Refresh page"
          >
            <img
              src={theme === "light" ? "/White Mood Logo.png" : "/Dark Mood Logo.png"}
              alt="Colors Mood Logo"
              className="h-22 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex gap-1 ${isRTL ? "order-1" : ""}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#d4af37] bg-gray-100 dark:bg-gray-900"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#d4af37]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className={`flex items-center gap-4 ${isRTL ? "order-1" : "order-3"}`}>
            {/* Language Toggle */}
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en" ? "bg-[#d4af37] text-[#0f0f0f]" : "text-gray-600 dark:text-gray-400"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "ar" ? "bg-[#d4af37] text-[#0f0f0f]" : "text-gray-600 dark:text-gray-400"
                }`}
                aria-label="Switch to Arabic"
              >
                ع
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-[#d4af37] transition-colors"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM14 11a1 1 0 100-2h-1a1 1 0 100 2h1zm1.464 1.536a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM11 17a1 1 0 100 2h1a1 1 0 100-2h-1zm4.536-1.464a1 1 0 111.414-1.414 1 1 0 01-1.414 1.414zM17 11a1 1 0 100-2h1a1 1 0 100 2h-1zm0 8a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM3 17a1 1 0 100 2h1a1 1 0 100-2H3zm3-14.464a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zm7.07 4.464a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zM3 5a1 1 0 000 2h1a1 1 0 000-2H3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-left rounded transition-colors ${
                    activeSection === item.id
                      ? "text-[#d4af37] bg-gray-100 dark:bg-gray-900"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#d4af37]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
