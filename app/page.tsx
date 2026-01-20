"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import VehicleSection from "@/components/vehicle-section"
import CapabilitiesSection from "@/components/capabilities-section"
// import PricingSection from "@/components/pricing-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import { useLanguage } from "@/hooks/use-language"
import { useEffect } from "react"

export default function Home() {
  const { language, mounted } = useLanguage()

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("lang", language)
      document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr")
    }
  }, [language, mounted])

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-[#0f0f0f]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#e6ff01] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main id="main-content">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VehicleSection />
      <CapabilitiesSection />
      {/* <PricingSection /> */}
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
