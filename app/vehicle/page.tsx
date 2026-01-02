"use client"

import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from "lucide-react"
import Header from "@/components/header"
import VehicleSection from "@/components/vehicle-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import PageIntro from "@/components/page-intro"
import ValuesStrip from "@/components/values-strip"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function VehiclePage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const values = [
    { icon: Sparkles, label: t("valueInnovation") },
    { icon: ShieldCheck, label: t("valueQuality") },
    { icon: BadgeCheck, label: t("valueReliability") },
    { icon: Lightbulb, label: t("valuePartnership") },
  ]

  const bullets =
    language === "ar"
      ? [
          "تغليف وتركيب استيكرات للمركبات التعليمية وحافلات المدارس.",
          "هوية أساطيل شركات النقل الخاصة والرسائل الإرشادية.",
          "خدمات نقل الموظفين والأساطيل الحكومية والشركات.",
        ]
      : [
          "Printing and installation of branded wraps for school buses.",
          "Fleet branding and route/safety messaging for transport companies.",
          "Employee shuttle services and corporate fleets.",
        ]

  return (
    <main id="main-content">
      <Header />
      <PageIntro
        title={language === "ar" ? "المركبات واللوحات" : "Vehicle & Signage"}
        subtitle={
          language === "ar" ? "هوية مركبات متكاملة بجودة عالية." : "Full vehicle branding with high-quality execution."
        }
        description={
          language === "ar"
            ? "ننفذ أعمال تغليف مركبات باحترافية، مع التزام كامل بالهوية البصرية للعميل."
            : "We deliver professional vehicle wrapping and signage aligned with each client’s visual identity."
        }
      >
        <ValuesStrip title={language === "ar" ? "قيمنا في تنفيذ المشاريع" : "Project Values"} items={values} />
      </PageIntro>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {language === "ar" ? "خدمات تغليف المركبات" : "Vehicle Branding Services"}
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <VehicleSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
