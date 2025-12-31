import type React from "react"
import type { Metadata } from "next"
import { Cairo, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const cairoFont = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Colors Mood | Creative Printing & Vehicle Wrapping Solutions",
  description:
    "Professional printing solutions and vehicle wrapping services in Saudi Arabia. High-quality stickers, banners, signage, and more from Colors Mood.",
  metadataBase: new URL("https://colorsmood.com.sa"),
  keywords: ["printing", "vehicle wraps", "stickers", "signage", "Saudi Arabia", "AlUla"],
  openGraph: {
    title: "Colors Mood | Creative Printing & Vehicle Wrapping",
    description: "Professional printing and branding solutions for businesses across Saudi Arabia",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?key=colorsmood",
        width: 1200,
        height: 630,
        alt: "Colors Mood Printing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colors Mood | Creative Printing & Vehicle Wrapping",
    description: "Professional printing and branding solutions",
  },
  icons: {
    icon: [
      {
        url: "/placeholder.svg?key=favicon",
        type: "image/svg+xml",
      },
    ],
  },
  authors: [{ name: "Colors Mood" }],
  creator: "Colors Mood",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = theme || (prefersDark ? 'dark' : 'light');
                if (initialTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${poppinsFont.variable} ${cairoFont.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <LanguageProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
