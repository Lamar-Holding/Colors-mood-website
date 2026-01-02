"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"
import { useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const { language, mounted } = useLanguage()
  const { t } = useTranslation(language)

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
      <section className="py-14 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white">
              {t("profileHighlightsTitle")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{t("profileHighlightsSubtitle")}</p>
            <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[t("highlightExperience"), t("highlightCoverage"), t("highlightWarranty"), t("highlightTurnaround")].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-5 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3">{t("navAbout")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("aboutCompany")}</p>
              <Link href="/company" className="text-[#e6ff01] font-semibold">
                {t("learnMore")}
              </Link>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3">{t("navServices")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("homeServicesPreview")}</p>
              <Link href="/services" className="text-[#e6ff01] font-semibold">
                {t("learnMore")}
              </Link>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3">{t("navCapabilities")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("homeCapabilitiesPreview")}</p>
              <Link href="/capabilities" className="text-[#e6ff01] font-semibold">
                {t("learnMore")}
              </Link>
            </div>
            <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3">{t("navPricing")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("homePricingPreview")}</p>
              <Link href="/pricing" className="text-[#e6ff01] font-semibold">
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] dark:text-white">{t("navPortfolio")}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{t("homePortfolioPreview")}</p>
            <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: language === "ar" ? "الهيئة الملكية للعلا" : "Royal Commission for AlUla", image: "/Artboard 2.png" },
              { title: language === "ar" ? "إيكوموس السعودية" : "ICOMOS Saudi Arabia", image: "/Artboard 4.png" },
              { title: language === "ar" ? "مركبات أرنوي" : "Arnoui Vehicles", image: "/Artboard 5.png" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img src={item.image} alt={item.title} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-4 bg-white dark:bg-[#1a1a1a]">
                  <p className="text-sm font-semibold text-[#1a1a1a] dark:text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="inline-flex items-center rounded-lg bg-[#e6ff01] px-6 py-3 font-bold text-[#0f0f0f]">
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-3">{t("navVehicle")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {language === "ar"
                ? "تغليف احترافي للمركبات ولوحات إعلانية متوافقة مع الهوية البصرية."
                : "Professional vehicle wrapping and signage aligned with brand identity."}
            </p>
            <Link href="/vehicle" className="text-[#e6ff01] font-semibold">
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
