"use client"

import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from "lucide-react"
import Header from "@/components/header"
import PortfolioSection from "@/components/portfolio-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import PageIntro from "@/components/page-intro"
import ValuesStrip from "@/components/values-strip"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function PortfolioPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const values = [
    { icon: Sparkles, label: t("valueInnovation") },
    { icon: ShieldCheck, label: t("valueQuality") },
    { icon: BadgeCheck, label: t("valueReliability") },
    { icon: Lightbulb, label: t("valuePartnership") },
  ]

  return (
    <main id="main-content">
      <Header />
      <PageIntro
        title={language === "ar" ? "أعمالنا" : "Our Portfolio"}
        subtitle={
          language === "ar"
            ? "نفخر بتقديم مشاريع متنوعة لجهات رائدة."
            : "We proudly deliver diverse projects for top government and leading companies."
        }
        description={
          language === "ar"
            ? "مجموعة مختارة من أعمالنا التي تعكس جودة التنفيذ ووضوح الهوية."
            : "A curated selection that reflects quality execution and strong brand alignment."
        }
      >
        <ValuesStrip title={language === "ar" ? "قيمنا في التنفيذ" : "Execution Values"} items={values} />
      </PageIntro>

      <PortfolioSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
