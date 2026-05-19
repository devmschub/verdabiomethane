export const LOCALES = ["pt-BR", "en-US"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "pt-BR"

export const LOCALE_STORAGE_KEY = "verda-locale"

export const LOCALE_OPTIONS = [
  {
    locale: "pt-BR" as const,
    code: "PT",
    title: "Português",
    region: "Brasil",
    flag: "/flags/br.svg",
  },
  {
    locale: "en-US" as const,
    code: "EN",
    title: "English",
    region: "United States",
    flag: "/flags/us.svg",
  },
] as const

export const HERO_SECTION_ID = "hero"
