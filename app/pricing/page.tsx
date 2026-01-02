"use client"

import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from "lucide-react"
import Header from "@/components/header"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import PageIntro from "@/components/page-intro"
import ValuesStrip from "@/components/values-strip"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function PricingPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const values = [
    { icon: Sparkles, label: t("valueInnovation") },
    { icon: ShieldCheck, label: t("valueQuality") },
    { icon: BadgeCheck, label: t("valueReliability") },
    { icon: Lightbulb, label: t("valuePartnership") },
  ]

  const pricingDetails =
    language === "ar"
      ? [
          "تغليف كامل للسيارات الصغيرة بخامة اقتصادية وضمان أقل من سنة.",
          "تغليف كامل بخامة أمريكية وضمان 3 سنوات.",
          "طباعة وتركيب استيكر للمركبات الكبيرة والحافلات.",
        ]
      : [
          "Full curve wrap for small cars — economy material, under 1-year warranty.",
          "Full curve wrap — American material with 3-year warranty.",
          "Sticker printing and installation for large vehicles and buses.",
        ]

  return (
    <main id="main-content">
      <Header />
      <PageIntro
        title={language === "ar" ? "الأسعار" : "Pricing"}
        subtitle={
          language === "ar" ? "نموذج تسعير مرن يناسب كل عميل." : "Flexible pricing tailored to each client and project."
        }
        description={
          language === "ar"
            ? "نحدد الأسعار بناءً على احتياجات المشروع ونوع المواد والمواصفات."
            : "We tailor pricing based on project scope, materials, and specifications."
        }
      >
        <ValuesStrip title={language === "ar" ? "قيمنا في التسعير" : "Pricing Values"} items={values} />
      </PageIntro>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {language === "ar" ? "تفاصيل الأسعار للخدمات الأساسية" : "Pricing Details for Key Services"}
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {pricingDetails.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PricingSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
