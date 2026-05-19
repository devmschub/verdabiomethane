import { HERO_SECTION_ID } from "@/i18n/types"

export const NAV_PROBE_PX = 76
const SCROLL_TRANSPARENT_THRESHOLD = 48

export type NavSurface = "transparent" | "light" | "dark"

export function readNavTheme(): NavSurface {
  if (typeof document === "undefined") return "dark"

  const sections = document.querySelectorAll("[data-nav-theme]")
  if (sections.length === 0) return "dark"

  let active: Element = sections[0]

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top
    if (top <= NAV_PROBE_PX) {
      active = section
    }
  })

  const scrollBottom = window.scrollY + window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  if (scrollBottom >= docHeight - 2) {
    active = sections[sections.length - 1]
  }

  const theme = active.getAttribute("data-nav-theme")
  const isLight = theme === "light"
  const onHero = active.id === HERO_SECTION_ID

  if (isLight) return "light"
  if (onHero && window.scrollY <= SCROLL_TRANSPARENT_THRESHOLD) return "transparent"
  return "dark"
}
