"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function CapabilitiesSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const capabilities = [
    { icon: "⚙️", key: "capabilityAdvanced" },
    { icon: "👥", key: "capabilityTeam" },
    { icon: "🗺️", key: "capabilityNational" },
    { icon: "📋", key: "capabilityFlexible" },
    { icon: "✨", key: "capabilityMultiple" },
  ]

  const qualityPoints = [
    { icon: "🏆", key: "qualityMaterial" },
    { icon: "🎨", key: "qualityPrint" },
    { icon: "✅", key: "qualityWarranty" },
    { icon: "🔍", key: "qualityInspection" },
  ]

  return (
    <section
      id="capabilities"
      className={`py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">
            {t("capabilitiesTitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{t("capabilitiesSubtitle")}</p>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mt-4" />
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg hover:border-[#d4af37] border border-transparent transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="text-4xl block mb-3">{cap.icon}</span>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{t(cap.key)}</p>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-8 text-[#d4af37]">{t("qualityTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {qualityPoints.map((point, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{point.icon}</span>
                <p className="text-gray-200">{t(point.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
