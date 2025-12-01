"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

interface PricingItem {
  service: string
  material: string
  warranty: string
  price: string
}

export default function PricingSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const pricingData: PricingItem[] = [
    {
      service: t("pricingSmallWrap"),
      material: t("pricingEconomic"),
      warranty: t("pricingLessThanYear"),
      price: "160 SAR",
    },
    {
      service: t("pricingSmallWrap"),
      material: t("pricingAmerican"),
      warranty: t("pricingThreeYears"),
      price: "200 SAR",
    },
    {
      service: t("pricingBus"),
      material: t("pricingSticker"),
      warranty: "-",
      price: "140 SAR",
    },
  ]

  return (
    <section
      id="pricing"
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("pricingTitle")}</h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("pricingNote")}</p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto animate-fade-in-up">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a1a1a] dark:bg-black">
                <th className="px-6 py-4 text-left text-white font-bold">{t("pricingService")}</th>
                <th className="px-6 py-4 text-left text-white font-bold">{t("pricingMaterial")}</th>
                <th className="px-6 py-4 text-left text-white font-bold">{t("pricingWarranty")}</th>
                <th className="px-6 py-4 text-left text-[#d4af37] font-bold">{t("pricingPrice")}</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.service}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.material}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.warranty}</td>
                  <td className="px-6 py-4 font-bold text-[#d4af37]">{row.price} / sqm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <span className="font-bold">ℹ️ {t("privacyNote")}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
