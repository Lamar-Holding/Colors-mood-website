"use client"

import type { ComponentType, SVGProps } from "react"
import { BadgeCheck, Eye, Layers, Map, Search, Settings, Tag, Target, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function CapabilitiesSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const capabilities: { icon: ComponentType<SVGProps<SVGSVGElement>>; key: string }[] = [
    { icon: Settings, key: "capabilityAdvanced" },
    { icon: Users, key: "capabilityTeam" },
    { icon: Map, key: "capabilityNational" },
    { icon: Tag, key: "capabilityFlexible" },
    { icon: Layers, key: "capabilityMultiple" },
  ]

  const qualityPoints: { icon: ComponentType<SVGProps<SVGSVGElement>>; key: string }[] = [
    { icon: Target, key: "qualityMaterial" },
    { icon: Eye, key: "qualityPrint" },
    { icon: BadgeCheck, key: "qualityWarranty" },
    { icon: Search, key: "qualityInspection" },
  ]

  return (
    <section
      id="capabilities"
      className={`py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("capabilitiesTitle")}</h2>
          <div className="relative w-40 sm:w-60 md:w-60 lg:w-120 mx-auto mb-6">
          <div className="h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent blur-sm opacity-80"></div>
          <div className="absolute inset-0 h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{t("capabilitiesSubtitle")}</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg hover:border-[#e6ff01] border border-transparent transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6ff01]/25 text-[#444638] dark:bg-[#e6ff01]/15 dark:text-[#e6ff01]">
                <cap.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{t(cap.key)}</p>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-8 text-[#e6ff01]">{t("qualityTitle")}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {qualityPoints.map((point, idx) => (
              <div key={idx} className={`flex items-center gap-3 ${isRTL ? "text-right" : "text-left"}`}>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#e6ff01]/20 text-[#e6ff01]">
                  <point.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-gray-200">{t(point.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
