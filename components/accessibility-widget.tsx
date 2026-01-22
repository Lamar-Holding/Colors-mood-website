"use client"

import { useLanguage } from "@/hooks/use-language"

export default function AccessibilityWidget() {
  const { language } = useLanguage()
  const isRTL = language === "ar"
  const whatsappLink = "https://wa.me/966566315522"

  return (
    <div className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-40`}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-[#e6ff01] rounded-full flex items-center justify-center hover:bg-[#e6ff01] transition-colors shadow-lg"
        aria-label="Open WhatsApp chat"
      >
        <svg className="w-6 h-6 text-[#0f0f0f]" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.19c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.71.9-.87 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.17.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.49-.86-2.05-.23-.55-.47-.47-.62-.48-.16-.01-.35-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.98.96-.98 2.34s1 2.72 1.14 2.91c.14.18 1.97 3.01 4.78 4.21.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33Zm-3.04 8.1c-5.05 0-9.16-4.1-9.16-9.16 0-5.05 4.1-9.16 9.16-9.16 5.05 0 9.16 4.1 9.16 9.16 0 5.05-4.1 9.16-9.16 9.16Zm0-20.29c-6.16 0-11.16 5-11.16 11.16 0 2.15.62 4.24 1.79 6.03L5.5 27l5.96-1.57a11.08 11.08 0 0 0 4.6 1.01c6.16 0 11.16-5 11.16-11.16 0-6.16-5-11.16-11.16-11.16Z" />
        </svg>
      </a>
    </div>
  )
}
