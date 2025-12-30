"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

interface Service {
  id: string
  titleKey: string
  descKey: string
  icon: string
}

export default function ServicesSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"
  const [expanded, setExpanded] = useState<string | null>(null)

  const services: Service[] = [
    {
      id: "business",
      titleKey: "servicesBusiness",
      descKey: "servicesBusinessDesc",
      icon: "🏢",
    },
    {
      id: "events",
      titleKey: "servicesEvents",
      descKey: "servicesEventsDesc",
      icon: "🎉",
    },
    {
      id: "products",
      titleKey: "servicesProducts",
      descKey: "servicesProductsDesc",
      icon: "🎁",
    },
    {
      id: "creative",
      titleKey: "servicesCreative",
      descKey: "servicesCreativeDesc",
      icon: "✨",
    },
    {
      id: "healthcare",
      titleKey: "servicesHealthcare",
      descKey: "servicesHealthcareDesc",
      icon: "🏥",
    },
    {
      id: "expansion",
      titleKey: "servicesExpansion",
      descKey: "servicesExpansionDesc",
      icon: "🚀",
    },
  ]

  return (
    <section
      id="services"
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("servicesTitle")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("servicesSubtitle")}</p>
          <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <button
                onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                className="w-full p-6 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#e6ff01] transition-all duration-300 text-left cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1a1a1a] dark:text-white group-hover:text-[#e6ff01] transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    {expanded === service.id && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t(service.descKey)}</p>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#e6ff01] transition-transform ${expanded === service.id ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
