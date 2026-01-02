"use client"

import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from "lucide-react"
import Header from "@/components/header"
import CapabilitiesSection from "@/components/capabilities-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import PageIntro from "@/components/page-intro"
import ValuesStrip from "@/components/values-strip"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function CapabilitiesPage() {
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
          "تقنيات طباعة متقدمة تضمن جودة عالية وسرعة إنجاز.",
          "كوادر مؤهلة ومدربة على أحدث تقنيات الطباعة والتركيب.",
          "تنفيذ المشاريع على مستوى جميع مناطق ومدن المملكة.",
          "إدارة طلبات مرنة تضمن الالتزام بالجودة والوقت.",
          "القدرة على تنفيذ مشاريع متعددة في وقت واحد.",
        ]
      : [
          "State-of-the-art printing technology for quality and speed.",
          "Qualified workforce trained in the latest printing techniques.",
          "Project execution across all regions and cities in the Kingdom.",
          "Flexible order management to ensure on-time delivery.",
          "Ability to handle multiple projects simultaneously.",
        ]

  return (
    <main id="main-content">
      <Header />
      <PageIntro
        title={language === "ar" ? "القدرات الإنتاجية" : "Production Capabilities"}
        subtitle={language === "ar" ? "بنية إنتاجية متكاملة تدعم الجودة والسرعة." : "Integrated infrastructure for quality and speed."}
        description={
          language === "ar"
            ? "نمتلك منظومة إنتاج متكاملة تغطي المواد والتقنيات والفرق التنفيذية."
            : "We operate a fully integrated production system spanning materials, technology, and execution."
        }
      >
        <ValuesStrip title={language === "ar" ? "قيمنا في الإنتاج" : "Production Values"} items={values} />
      </PageIntro>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {language === "ar" ? "ملخص القدرات" : "Capabilities Summary"}
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CapabilitiesSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
