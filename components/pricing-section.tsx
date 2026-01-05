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
          <div className="mx-auto inline-flex max-w-full flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white">{t("pricingTitle")}</h2>
            <div className="relative mt-3 h-1 w-full max-w-full mb-6">
              <div
                className={`h-1 rounded-full ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#444638] via-[#444638] to-transparent opacity-60 blur-[2px] dark:from-[#e6ff01] dark:via-[#f4ff4d] dark:opacity-80 dark:blur-sm`}
              ></div>
              <div
                className={`absolute inset-0 h-1 rounded-full ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#444638] via-[#444638] to-transparent dark:from-[#e6ff01] dark:via-[#f4ff4d]`}
              ></div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("pricingNote")}</p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto animate-fade-in-up">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1a1a1a] dark:bg-black">
                <th className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-white font-bold`}>
                  {t("pricingService")}
                </th>
                <th className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-white font-bold`}>
                  {t("pricingMaterial")}
                </th>
                <th className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-white font-bold`}>
                  {t("pricingWarranty")}
                </th>
                <th className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-[#e6ff01] font-bold`}>
                  {t("pricingPrice")}
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-gray-700 dark:text-gray-300`}>
                    {row.service}
                  </td>
                  <td className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-gray-700 dark:text-gray-300`}>
                    {row.material}
                  </td>
                  <td className={`px-6 py-4 ${isRTL ? "text-right" : "text-left"} text-gray-700 dark:text-gray-300`}>
                    {row.warranty}
                  </td>
                  <td className={`px-6 py-4 font-bold ${isRTL ? "text-right" : "text-left"}`}>
                    <span className="inline-flex items-center rounded-md bg-[#e6ff01] px-2 py-1 text-[#0f0f0f]">
                      {row.price} / sqm
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
