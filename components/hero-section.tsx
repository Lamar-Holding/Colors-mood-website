"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function HeroSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black"
    >
      {/* Background Video/Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/printing-workshop.png')] bg-cover bg-center mix-blend-overlay" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-5 -top-48 -right-48" />
        <div className="absolute w-96 h-96 bg-[#d4af37] rounded-full blur-3xl opacity-5 -bottom-48 -left-48" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className={`space-y-6 animate-fade-in-up ${isRTL ? "rtl" : "ltr"}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="text-[#d4af37]">{t("heroTitle")}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in pb-20">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-[#d4af37] text-[#0f0f0f] font-bold rounded-lg hover:bg-[#b8941f] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/50 transform hover:scale-105"
              aria-label="Request a quote for our services"
            >
              {t("ctaQuote")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#0f0f0f] transition-all duration-300"
              aria-label="View our portfolio and past projects"
            >
              {t("ctaWork")}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce pt-8">
            <svg
              className="w-6 h-6 text-[#d4af37] mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
