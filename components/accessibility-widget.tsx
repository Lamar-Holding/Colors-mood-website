"use client"

import { useState } from "react"

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const applyAccessibilitySettings = (size: number, contrast: boolean) => {
    const root = document.documentElement
    root.style.fontSize = `${14 * (size / 100)}px`

    if (contrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }
  }

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize)
    applyAccessibilitySettings(newSize, highContrast)
  }

  const handleContrastChange = () => {
    const newContrast = !highContrast
    setHighContrast(newContrast)
    applyAccessibilitySettings(fontSize, newContrast)
  }

  const resetSettings = () => {
    setFontSize(100)
    setHighContrast(false)
    applyAccessibilitySettings(100, false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-4 w-64 border border-gray-200 dark:border-gray-800 animate-fade-in-up">
          <h3 className="font-bold text-[#1a1a1a] dark:text-white mb-4">Accessibility</h3>

          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                Font Size: {fontSize}%
              </label>
              <input
                type="range"
                min="80"
                max="150"
                value={fontSize}
                onChange={(e) => handleFontSizeChange(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* High Contrast */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="contrast"
                checked={highContrast}
                onChange={handleContrastChange}
                className="w-4 h-4"
              />
              <label htmlFor="contrast" className="text-sm text-gray-700 dark:text-gray-300">
                High Contrast
              </label>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-[#e6ff01] rounded-full flex items-center justify-center hover:bg-[#e6ff01] transition-colors shadow-lg"
        aria-label="Open accessibility menu"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6 text-[#0f0f0f]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      </button>
    </div>
  )
}
