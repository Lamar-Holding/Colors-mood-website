"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import { useLanguage } from "@/hooks/use-language"

export default function ClientsPage() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const clients = [
    { en: "Royal Commission for AlUla", ar: "الهيئة الملكية للعلا" },
    { en: "The AIMES Al Arabia", ar: "شركة ايمز العربية" },
    { en: "Saudi ICOMOS", ar: "إيكوموس السعودية" },
    { en: "Ethraa Al Uloom.co", ar: "شركة إثراء العلوم للتجارة" },
    { en: "Arnawa Co.", ar: "شركة أرنوا" },
    { en: "HQ Worldwide Shows", ar: "عروض إتش كيو العالمية" },
    { en: "Dar Tantora – The House Hotel", ar: "فندق دار طنطورة" },
    { en: "Lamar Co. Ltd.", ar: "شركة لمار" },
    { en: "Banan United Factory", ar: "مصنع بنان المتحدة" },
    { en: "Reem Al Sharq Logistics", ar: "لوجستيات ريم الشرق" },
    { en: "Sedona Compound", ar: "مجمع سيدونا" },
    { en: "Al Robaiya Professionals", ar: "الربيعة للمحترفين لإدارة الفعاليات" },
  ]

  return (
    <main id="main-content">
      <Header />
      <section className={`py-20 bg-white dark:bg-[#0f0f0f] ${isRTL ? "rtl" : "ltr"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">
              {language === "ar" ? "عملاؤنا وشركاؤنا" : "Our Clients & Partners"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === "ar"
                ? "نفخر بالتعاون مع جهات حكومية وشركات رائدة في المملكة."
                : "We’re proud to partner with government entities and leading companies across the Kingdom."}
            </p>
            <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={client.en}
                className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="inline-flex items-center rounded-md bg-[#e6ff01]/20 px-2 py-1 text-xs font-semibold text-[#444638] dark:text-[#e6ff01]">
                  {language === "ar" ? client.ar : client.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
