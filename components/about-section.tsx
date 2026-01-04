"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function AboutSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const whyChooseItems = [t("whyChooseItem1"), t("whyChooseItem2"), t("whyChooseItem3"), t("whyChooseItem4")]

  return (
    <section
      id="about"
      className={`py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("aboutTitle")}</h2>
          <div className="relative w-40  mx-auto">
          <div className="h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent blur-sm opacity-80"></div>
          <div className="absolute inset-0 h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent"></div>
          </div>
        </div>

        <div className="mb-12 text-center animate-fade-in-up">
          <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("aboutCompany")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission & Vision Cards */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-[#e6ff01]">
              <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-4.5">{t("missionTitle")}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{t("mission")}</p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-[#e6ff01]">
              <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-4.5">{t("visionTitle")}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{t("vision")}</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#e6ff01]">{t("whyChooseUs")}</h3>
              <ul className="space-y-4">
                {whyChooseItems.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#e6ff01] rounded-full flex items-center justify-center text-[#0f0f0f] font-bold text-sm">
                      ✓
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
