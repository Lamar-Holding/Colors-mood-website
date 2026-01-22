"use client"

import { useEffect, useMemo, useState } from "react"
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
  images?: string[]
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
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [gridImageIndexById, setGridImageIndexById] = useState<Record<number, number>>({})

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
      images: ["/Artboard 2.png", "/Artboard 2 - 2.png", "/Artboard 2 - 3.png", "/Artboard 2 - 4.png"],
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
      images: ["/Artboard 4.png", "/Artboard 4 - 2.png"],
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
      tags: {
        en: ["Fleet Branding", "Transport"],
        ar: ["هوية الأسطول", "نقل"],
      },
    },
    {
      id: 4,
      title: {
        en: "Lamar Company",
        ar: "شركة لمار",
      },
      description: {
        en: "Custom die-cut stickers for corporate vehicle fleet",
        ar: "استيكرات مقصوصة مخصصة لأسطول سيارات الشركات",
      },
      image: "/Artboard 3 - 2.png",
      images: [ "/Artboard 3 - 2.png", "/Artboard 3 - 3.png", "/Artboard 3 - 4.png"],
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
      images: ["/Artboard 6.png", "/Artboard 6 - 2.png"],
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
      tags: {
        en: ["Interior", "Signage", "Restaurant"],
        ar: ["داخلي", "لافتات", "مطعم"],
      },
    },
    {
      id: 7,
      title: {
        en: "Dar Tantora – The House Hotel",
        ar: "فندق دار طنطورة",
      },
      description: {
        en: "Design and application of die-cut stickers on SUVs with high quality.",
        ar: "تصميم وتطبيق استيكرات مقصوصة على مركبات دفع رباعي بجودة عالية.",
      },
      image: "/Artboard 12.png",
      images: ["/Artboard 12.png", "/Artboard 12 - 2.png", "/Artboard 12 - 3.png"],
      tags: {
        en: ["Die-cut Stickers", "Golf Carts", "Bronco", "SUV"],
        ar: ["استيكرات مقصوصة", "عربات جولف", "برونكو", "دفع رباعي"],
      },
    },
    {
      id: 8,
      title: {
        en: "Ethraa Al Uloom.co",
        ar: "شركة اثراء العلوم للتجارة",
      },
      description: {
        en: "High-quality sticker application on Bronco vehicles, including design, printing and installation.",
        ar: "تطبيق استيكرات عالية الجودة على مركبات برونكو، بما في ذلك التصميم والطباعة والتركيب.",
      },
      image: "/Artboard 14.png",
      tags: {
        en: ["Bronco", "Stickers", "Installation"],
        ar: ["برونكو", "استيكر", "تركيب"],
      },
    },
    {
      id: 9,
      title: {
        en: "The AIMES Al Arabia",
        ar: "شركة ايمز العربية",
      },
      description: {
        en: "Custom vehicle branding with cohesive design, printing, and installation aligned to the brand identity.",
        ar: "تنفيذ هوية مركبات متكاملة تشمل التصميم والطباعة والتركيب بما يتماشى مع الهوية البصرية.",
      },
      image: "/Artboard 13.png",
      images: ["/Artboard 13.png", "/Artboard 13 - 2.png", "/Artboard 13 - 3.png"],
      tags: {
        en: ["Vehicle Branding", "Design", "Printing"],
        ar: ["هوية مركبات", "تصميم", "طباعة"],
      },
    },
    {
      id: 10,
      title: {
        en: "The Summit Journey Company",
        ar: "شركة قمة الرحلة لتنظيم الرحلات",
      },
      description: {
        en: "Printing and installation of custom stickers for Buggy vehicles Custom Stickers - Printing -Installation",
        ar: "قمة الرحلة طباعة وتركيب استيكر مخصص لمركبات الـبجي استيكر مخصص -  طباعة - تركيب",
      },
      image: "/Buggy2.png",
      images: ["/Buggy2.png", "/Buggy1.png", "/Buggy3.png"],
      tags: {
        en: ["Event Vehicles", "Die-cut Stickers"],
        ar: ["عربات الفعاليات", "استيكرات مقصوصة"],
      },
    },
  ]

  const projectImageCounts = useMemo(() => {
    const counts: Record<number, number> = {}
    projects.forEach((project) => {
      counts[project.id] = project.images?.length ? project.images.length : 1
    })
    return counts
  }, [projects])

  useEffect(() => {
    const interval = setInterval(() => {
      setGridImageIndexById((prev) => {
        const next: Record<number, number> = { ...prev }
        Object.keys(projectImageCounts).forEach((id) => {
          const numericId = Number(id)
          const count = projectImageCounts[numericId] || 1
          if (count > 1) {
            const current = prev[numericId] || 0
            next[numericId] = (current + 1) % count
          }
        })
        return next
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [projectImageCounts])

  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0)
    }
  }, [selectedProject])

  useEffect(() => {
    if (!selectedProject) return
    const images = selectedProject.images?.length ? selectedProject.images : [selectedProject.image]
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setActiveImageIndex((idx) => (idx + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedProject])

  return (
    <section
      id="portfolio"
      className={`py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mx-auto inline-flex max-w-full flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white">{t("portfolioTitle")}</h2>
            <div className="relative mt-3 h-1 w-full max-w-full mb-6">
              <div
                className={`h-1 rounded-full ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#444638] via-[#444638] to-transparent opacity-60 blur-[2px] dark:from-[#e6ff01] dark:via-[#f4ff4d] dark:opacity-80 dark:blur-sm`}
              ></div>
              <div
                className={`absolute inset-0 h-1 rounded-full ${isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#444638] via-[#444638] to-transparent dark:from-[#e6ff01] dark:via-[#f4ff4d]`}
              ></div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("portfolioSubtitle")}</p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch animate-fade-in-up">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col h-full"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg h-64 mb-4">
                <img
                  src={
                    (project.images?.length
                      ? project.images[gridImageIndexById[project.id] || 0]
                      : project.image) || "/placeholder.svg"
                  }
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
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">{project.description[language]}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
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
            {(() => {
              const images = selectedProject.images?.length ? selectedProject.images : [selectedProject.image]
              const safeIndex = Math.min(activeImageIndex, images.length - 1)
              return (
                <>
                  <div className="relative">
                    <img
                      key={images[safeIndex]}
                      src={images[safeIndex] || "/placeholder.svg"}
                      alt={selectedProject.title[language]}
                      className="w-full max-h-[60vh] object-contain rounded-t-lg bg-black/5 transition-opacity duration-300"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImageIndex((idx) => (idx - 1 + images.length) % images.length)
                          }
                          className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-3" : "left-3"} rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80 transition`}
                          aria-label="Previous image"
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveImageIndex((idx) => (idx + 1) % images.length)}
                          className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left-3" : "right-3"} rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80 transition`}
                          aria-label="Next image"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                  {images.length > 1 && (
                    <div className="flex items-center justify-center gap-2 py-3">
                      {images.map((_, i) => (
                        <button
                          key={`${selectedProject.id}-dot-${i}`}
                          type="button"
                          onClick={() => setActiveImageIndex(i)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            i === safeIndex ? "bg-[#e6ff01]" : "bg-gray-300 dark:bg-gray-700"
                          }`}
                          aria-label={`Show image ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )
            })()}
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right p-2 hover:text-[#e6ff01] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <h2 id="modal-title" className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2">
                {selectedProject.title[language]}
              </h2>
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
