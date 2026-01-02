"use client"

import { BadgeCheck, Lightbulb, ShieldCheck, Sparkles } from "lucide-react"
import Header from "@/components/header"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"
import PageIntro from "@/components/page-intro"
import ValuesStrip from "@/components/values-strip"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function ServicesPage() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)

  const values = [
    { icon: Sparkles, label: t("valueInnovation") },
    { icon: ShieldCheck, label: t("valueQuality") },
    { icon: BadgeCheck, label: t("valueReliability") },
    { icon: Lightbulb, label: t("valuePartnership") },
  ]

  const detailedServices = [
    {
      title: language === "ar" ? "خدمات الأعمال والشركات" : "Business and Corporate Services",
      bullets: [
        language === "ar"
          ? "عقود سنوية للطباعة بحزم ثابتة."
          : "Annual printing service contracts with fixed packages.",
        language === "ar"
          ? "نماذج الموارد البشرية والملفات الداخلية."
          : "HR-related materials and internal documents.",
        language === "ar"
          ? "لوحات المكاتب والإرشادات والسلامة."
          : "Office signage (departments, directions, safety).",
        language === "ar"
          ? "التخزين والتسليم المجدول للمواد المطبوعة."
          : "Storage and scheduled delivery of pre-printed materials.",
        language === "ar"
          ? "طباعة سرية وتسليم آمن للتقارير الرسمية."
          : "Confidential printing and secure delivery of official reports.",
      ],
    },
    {
      title: language === "ar" ? "خدمات الفعاليات" : "Event Services",
      bullets: [
        language === "ar"
          ? "مواد دعائية (رول أب، بانرات، ملصقات أرضية ولوحات ترحيب)."
          : "Promotional materials (roll-ups, banners, floor stickers, welcome boards).",
        language === "ar"
          ? "طباعة الملاعب والفعاليات الرياضية."
          : "Stadium and sports event printing.",
        language === "ar" ? "بطاقات تعريف للحضور والطاقم." : "Attendee and staff ID cards.",
        language === "ar" ? "هوية بصرية للفعاليات." : "Event visual identity design and printing.",
        language === "ar" ? "طباعة ميدانية في موقع الحدث." : "On-site printing booth for live events.",
      ],
    },
    {
      title: language === "ar" ? "المنتجات والهدايا المخصصة" : "Customized Printed Products & Gifts",
      bullets: [
        language === "ar" ? "دروع وتذكارات محفورة بالليزر." : "Laser-engraved commemorative plaques and shields.",
        language === "ar" ? "علب هدايا مخصصة بالشعار." : "Custom gift boxes with logos.",
        language === "ar" ? "بطاقات دعوة وتهاني رسمية." : "Official invitation and greeting cards.",
        language === "ar" ? "أكياس قماش وتغليف هدايا مطبوع." : "Printed tote bags and gift packaging.",
        language === "ar" ? "أكواب وتيشيرتات دعائية." : "Branded mugs and T-shirts.",
      ],
    },
    {
      title: language === "ar" ? "الخدمات الإبداعية والفنية" : "Creative and Technical Services",
      bullets: [
        language === "ar" ? "قص ونقش الأكريليك والخشب والجلد بالليزر." : "Laser cutting/engraving for acrylic, wood, and leather.",
        language === "ar" ? "لوحات ديكورية للمكاتب والمساحات." : "Decorative signage for offices or event spaces.",
        language === "ar" ? "تصميم وتعديل الملفات الجاهزة." : "Design and modification for clients without artwork.",
        language === "ar" ? "طباعة بروشورات وكاتالوجات." : "Brochures, catalogs, and marketing materials.",
      ],
    },
    {
      title: language === "ar" ? "قطاع الرعاية الصحية" : "Healthcare Sector",
      bullets: [
        language === "ar" ? "لوحات داخلية متينة للمرافق الصحية." : "Durable indoor signage for healthcare spaces.",
        language === "ar" ? "مواد التوعية الصحية." : "Health awareness materials.",
        language === "ar" ? "بطاقات موظفين مع باركود/QR." : "Staff ID cards with barcodes/QR codes.",
        language === "ar" ? "ملفات المرضى والنماذج الطبية." : "Customized patient files and medical forms.",
      ],
    },
    {
      title: language === "ar" ? "التوسع والخدمات الخارجية" : "Geographic & Outdoor Expansion",
      bullets: [
        language === "ar" ? "لوحات طرق وإرشاد كبيرة الحجم." : "Large-format printing for road signs and public boards.",
        language === "ar" ? "توصيل وتركيب خارج العلا." : "Full-service delivery and installation beyond AlUla.",
        language === "ar" ? "تجهيزات ميدانية للفعاليات الخارجية." : "Remote setup for events and external contracts.",
      ],
    },
    {
      title: language === "ar" ? "هوية المركبات لقطاع التعليم والنقل" : "Vehicle Branding for Education & Transport",
      bullets: [
        language === "ar" ? "تغليف وحلول استيكر للحافلات المدرسية." : "Branded wraps for school buses.",
        language === "ar" ? "هوية أساطيل شركات النقل الخاصة." : "Fleet branding for private transport companies.",
        language === "ar" ? "خدمات نقل الموظفين والأساطيل." : "Employee shuttle services and corporate fleets.",
      ],
    },
    {
      title: language === "ar" ? "واجهات المحلات والهوية التجارية" : "Storefront Signage & Commercial Branding",
      bullets: [
        language === "ar" ? "تصميم وإنتاج واجهات للمحلات والمطاعم." : "Storefront signage for shops and restaurants.",
        language === "ar" ? "لوحات مضيئة وأكريليك وألومنيوم." : "Lightbox signs, acrylic and aluminum signage.",
        language === "ar" ? "ملصقات زجاج وفينيل." : "Window stickers and vinyl graphics.",
        language === "ar" ? "يشمل التصميم والطباعة والتركيب والصيانة." : "Includes design, printing, installation, maintenance.",
      ],
    },
  ]

  return (
    <main id="main-content">
      <Header />
      <PageIntro
        title={language === "ar" ? "خدماتنا" : "Our Services"}
        subtitle={language === "ar" ? "نحوّل الأفكار إلى منتجات ملموسة." : "Turning designs into tangible masterpieces."}
        description={language === "ar" ? "حلول شاملة للطباعة والإعلان للجهات الحكومية والخاصة." : "Comprehensive printing and branding solutions for public and private sectors."}
      >
        <ValuesStrip title={language === "ar" ? "قيمنا في تقديم الخدمة" : "Our Service Values"} items={values} />
      </PageIntro>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {detailedServices.map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white dark:bg-[#1a1a1a] p-6 border border-gray-200 dark:border-gray-800 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-white mb-3">{service.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {service.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
