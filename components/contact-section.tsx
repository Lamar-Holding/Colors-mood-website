"use client"

import { useState, type FormEvent } from "react"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/lib/i18n"

export default function ContactSection() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const isRTL = language === "ar"

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const validateForm = () => {
    if (!formData.name || formData.name.trim().length < 2) {
      setMessage({ type: "error", text: t("contactValidationName") })
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: t("contactValidationEmail") })
      return false
    }
    if (formData.message && formData.message.length > 2000) {
      setMessage({ type: "error", text: t("contactValidationMessage") })
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, lang: language }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: t("contactSuccessMessage") })
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setMessage(null), 5000)
      } else {
        setMessage({ type: "error", text: t("contactErrorMessage") })
      }
    } catch (error) {
      setMessage({ type: "error", text: t("contactErrorMessage") })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className={`py-20 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{t("contactTitle")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("contactNote")}</p>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-1">{t("contactTitle")}</h3>
                  <a href="tel:+966544927409" className="text-[#d4af37] hover:text-[#b8941f] transition">
                    {t("contactPhone")}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">✉️</span>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-1">Email</h3>
                  <a
                    href="mailto:Sales.dept@colorsmood.com.sa"
                    className="text-[#d4af37] hover:text-[#b8941f] transition"
                  >
                    {t("contactEmail")}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-1">{t("aboutTitle")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{t("contactLocation")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in-right">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("contactFormName")}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("contactFormEmail")}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("contactFormMessage")}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-[#d4af37] transition resize-none"
                placeholder="Your message..."
              />
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-200"
                    : "bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-[#d4af37] text-[#0f0f0f] font-bold rounded-lg hover:bg-[#b8941f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t("formSending") : t("contactFormSubmit")}
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{t("privacyNote")}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
