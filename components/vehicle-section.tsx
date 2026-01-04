"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function VehicleSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const vehicleTypes = [
    {
      titleKey: "vehicleSchoolBuses",
      desc: {
        en: "Professional bus wrap design with school branding and logos",
        ar: "تصميم تغليف حافلات احترافي بهوية المدارس والشعارات",
      },
      image: "/Artboard 11.png",
    },
    {
      titleKey: "vehicleTransport",
      desc: {
        en: "Commercial fleet branding for transport and logistics companies",
        ar: "تغليف أساطيل النقل بهوية شركات النقل والخدمات اللوجستية",
      },
      image: "/Artboard 8.png",
    },
    {
      titleKey: "vehicleFleets",
      desc: {
        en: "Corporate vehicle wrapping with custom branding",
        ar: "تغليف مركبات الشركات بهوية مخصصة",
      },
      image: "/Artboard 10.png",
    },
  ]

  const signageItems =
    language === "ar"
      ? ["لوحات مضيئة", "لوحات ألمنيوم", "لوحات أكريليك", "استيكرات النوافذ"]
      : ["Light box signs", "Aluminum signs", "Acrylic signs", "Window stickers"]

  return (
    <section
      id="vehicle"
      className={`py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
         <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("vehicleTitle")}</h2>
          <div className="relative w-40 sm:w-60 md:w-80 lg:w-160 mx-auto mb-6">
          <div className="h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent blur-sm opacity-80"></div>
          <div className="absolute inset-0 h-1 rounded-full bg-gradient-to-r from-[#e6ff01] via-[#f4ff4d] to-transparent"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{t("vehicleSubtitle")}</p>
        </div>

        {/* Vehicle Types Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {vehicleTypes.map((vehicle, idx) => (
            <div key={idx} className="animate-fade-in-up group" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-lg h-80 mb-4">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={t(vehicle.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-2">{t(vehicle.titleKey)}</h3>
              <p className="text-gray-600 dark:text-gray-400">{vehicle.desc[language]}</p>
            </div>
          ))}
        </div>

        {/* Signage Services */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-[#e6ff01]">{t("vehicleSignage")}</h3>
          <p className="text-lg text-gray-200 mb-6">{t("vehicleSignageDesc")}</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {signageItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-[#e6ff01] rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
