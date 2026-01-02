"use client"

import type { ReactNode } from "react"

interface PageIntroProps {
  title: string
  subtitle: string
  description?: string
  children?: ReactNode
}

export default function PageIntro({ title, subtitle, description, children }: PageIntroProps) {
  return (
    <section className="py-16 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-4">{title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
          <div className="w-16 h-1 bg-[#e6ff01] mx-auto rounded-full mt-4" />
          {description && <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}
