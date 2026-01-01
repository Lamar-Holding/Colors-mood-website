"use client"

import { Mail, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function Footer() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  return (
    <footer className={`bg-[#1a1a1a] text-white py-12 transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/Dark Mood Logo.png"
              alt="Colors Mood"
              className="h-15 w-auto mb-2"
              loading="lazy"
            />
            <a
              href={language === "ar" ? "/Colors Mood - Profile Arabic.pdf" : "/Colors Mood - Profile English.pdf"}
              download
              className="text-gray-400 text-sm font-semibold hover:text-[#e6ff01] transition inline-block"
            >
              {t("footerSourceNote")}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">{t("navServices")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#services" className="hover:text-[#e6ff01] transition">
                  {t("serviceVehicleWraps")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e6ff01] transition">
                  {t("serviceBanners")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e6ff01] transition">
                  {t("serviceSignage")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">{t("aboutTitle")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-[#e6ff01] transition">
                  {t("aboutTitle")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#e6ff01] transition">
                  {t("portfolioTitle")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e6ff01] transition">
                  {t("contactTitle")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">{t("contactTitle")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse justify-end text-right" : ""}`}>
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#e6ff01]/25 text-[#e6ff01]">
                  <Phone className="h-8 w-8" aria-hidden="true" />
                </span>
                <a href="tel:+966544927409" className="hover:text-[#e6ff01] transition">
                  <span dir="ltr" className="inline-block">
                    {t("contactPhone")}
                  </span>
                </a>
              </li>
              <li className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse justify-end text-right" : ""}`}>
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#e6ff01]/25 text-[#e6ff01]">
                  <Mail className="h-8 w-8" aria-hidden="true" />
                </span>
                <a href="mailto:Sales.dept@colorsmood.com.sa" className="hover:text-[#e6ff01] transition">
                  {t("contactEmail")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>{t("footerText")}</p>
        </div>
      </div>
    </footer>
  )
}
