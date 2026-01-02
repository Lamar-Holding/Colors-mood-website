"use client"

import type { ComponentType } from "react"

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>

interface ValueItem {
  icon: IconType
  label: string
}

interface ValuesStripProps {
  title: string
  items: ValueItem[]
}

export default function ValuesStrip({ title, items }: ValuesStripProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#141414] to-[#1f1f1f] p-8 text-white">
      <h2 className="text-2xl font-bold text-[#e6ff01] mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6ff01]/20 text-[#e6ff01]">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm text-gray-200">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
