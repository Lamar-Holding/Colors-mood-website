"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function HeroSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 opacity-25">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/colorsmoodbackground.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#e6ff01] rounded-full blur-3xl opacity-5 -top-48 -right-48" />
        <div className="absolute w-96 h-96 bg-[#e6ff01] rounded-full blur-3xl opacity-5 -bottom-48 -left-48" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className={`space-y-6 animate-fade-in-up ${isRTL ? "rtl" : "ltr"}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            <span className="text-[#e6ff01]">{t("heroTitle")}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t("heroSubtitle")}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in pb-20">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-1 bg-[#e6ff01] text-[#0f0f0f] font-bold rounded-lg hover:bg-[#e6ff01] transition-all duration-300 hover:shadow-lg hover:shadow-[#e6ff01]/50 transform hover:scale-105"
              aria-label="Request a quote for our services"
            >
              {t("ctaQuote")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-3 py-1 border-2 border-[#e6ff01] text-[#e6ff01] font-bold rounded-lg hover:bg-[#e6ff01] hover:text-[#0f0f0f] transition-all duration-300"
              aria-label="View our portfolio and past projects"
            >
              {t("ctaWork")}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="animate-bounce text-[#e6ff01]"
              aria-label="Scroll to contact section"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className={`fixed bottom-6 ${isRTL ? "right-6" : "left-6"} z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#e6ff01] text-[#0f0f0f] shadow-lg transition-transform hover:scale-105`}
          aria-label="Scroll to top"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </section>
  )
}
