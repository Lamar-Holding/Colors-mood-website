"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

interface PortfolioItem {
  id: number
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  image: string
  page: string
  tags: {
    en: string[]
    ar: string[]
  }
}

export default function PortfolioSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const projects: PortfolioItem[] = [
    {
      id: 1,
      title: {
        en: "Royal Commission for AlUla",
        ar: "الهيئة الملكية للعلا",
      },
      description: {
        en: "High-quality vehicle wrap design and installation for government events",
        ar: "تصميم وتطبيق تغليف مركبات عالي الجودة للفعاليات الحكومية",
      },
      image: "/Artboard 2.png",
      page: "18-19",
      tags: {
        en: ["Vehicle Wrap", "Government", "Events"],
        ar: ["تغليف مركبات", "حكومي", "فعاليات"],
      },
    },
    {
      id: 2,
      title: {
        en: "ICOMOS Saudi Arabia",
        ar: "إيكوموس السعودية",
      },
      description: {
        en: "Professional bus branding with cultural heritage messaging",
        ar: "تغليف حافلة برسائل تراثية وثقافية احترافية",
      },
      image: "/Artboard 4.png",
      page: "20",
      tags: {
        en: ["Bus Wrap", "Cultural", "Professional"],
        ar: ["تغليف حافلات", "تراثي", "احترافي"],
      },
    },
    {
      id: 3,
      title: {
        en: "Arnoui Vehicles",
        ar: "مركبات أرنوي",
      },
      description: {
        en: "Full vehicle wrap implementation for transport fleet",
        ar: "تنفيذ تغليف كامل لأسطول نقل",
      },
      image: "/Artboard 5.png",
      page: "21",
      tags: {
        en: ["Fleet Branding", "Transport"],
        ar: ["هوية الأسطول", "نقل"],
      },
    },
    {
      id: 4,
      title: {
        en: "Lamar Company",
        ar: "شركة لامار",
      },
      description: {
        en: "Custom die-cut stickers for corporate vehicle fleet",
        ar: "استيكرات مقصوصة مخصصة لأسطول سيارات الشركات",
      },
      image: "/Artboard 3.png",
      page: "22",
      tags: {
        en: ["Die-cut Stickers", "Corporate"],
        ar: ["استيكرات مقصوصة", "شركات"],
      },
    },
    {
      id: 5,
      title: {
        en: "Golf Cart Branding",
        ar: "تغليف عربات الجولف",
      },
      description: {
        en: "Professional sticker design and application for recreational vehicles",
        ar: "تصميم وتطبيق استيكرات احترافية للمركبات الترفيهية",
      },
      image: "/Artboard 6.png",
      page: "23",
      tags: {
        en: ["Golf Cart", "Recreational"],
        ar: ["عربة جولف", "ترفيهي"],
      },
    },
    {
      id: 6,
      title: {
        en: "Restaurant Interior Printing",
        ar: "طباعة داخلية للمطاعم",
      },
      description: {
        en: "Custom interior signage and logo printing for restaurant",
        ar: "لافتات داخلية وطباعة شعارات مخصصة للمطاعم",
      },
      image: "/Artboard 7.png",
      page: "24",
      tags: {
        en: ["Interior", "Signage", "Restaurant"],
        ar: ["داخلي", "لافتات", "مطعم"],
      },
    },
  ]

  return (
    <section
      id="portfolio"
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("portfolioTitle")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("portfolioSubtitle")}</p>
          <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg h-64 mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="px-6 py-2 bg-[#e6ff01] text-[#0f0f0f] font-bold rounded hover:bg-[#e6ff01] transition-colors"
                    aria-label={`View ${project.title} project details`}
                  >
                    {t("portfolioViewMore")}
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-white mb-2">{project.title[language]}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.description[language]}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags[language].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block rounded bg-[#e6ff01] px-2 py-1 text-xs font-semibold text-[#0f0f0f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white dark:bg-[#1a1a1a] rounded-lg max-w-2xl w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right p-2 hover:text-[#e6ff01] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title[language]}
              className="w-full max-h-[60vh] object-contain rounded-t-lg bg-black/5"
            />

            <div className="p-6">
              <h2 id="modal-title" className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2">
                {selectedProject.title[language]}
              </h2>
              <p className="mb-4 text-sm">
                <span className="inline-flex items-center rounded-md bg-[#e6ff01] px-2 py-1 text-[#0f0f0f]">
                  {t("portfolioSourceNote")} — Page {selectedProject.page}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description[language]}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags[language].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full bg-[#e6ff01] px-3 py-1 text-sm font-semibold text-[#0f0f0f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
