import en from "@/locales/en.json"
import ar from "@/locales/ar.json"

export type Language = "en" | "ar"

const translations = {
  en,
  ar,
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value[k]
    if (value === undefined) return key
  }

  return value
}

export function useTranslation(lang: Language) {
  return {
    t: (key: string) => getTranslation(lang, key),
    lang,
  }
}
