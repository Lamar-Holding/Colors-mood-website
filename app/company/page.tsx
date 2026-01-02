"use client"

import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import AccessibilityWidget from "@/components/accessibility-widget"

export default function CompanyPage() {
  return (
    <main id="main-content">
      <Header />
      <AboutSection />
      <Footer />
      <AccessibilityWidget />
    </main>
  )
}
