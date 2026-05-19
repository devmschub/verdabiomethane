"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { useLocale } from "@/i18n/locale-context"
import { readNavTheme, type NavSurface } from "@/lib/read-nav-theme"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "./language-switcher"

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-fjscPXRjdwjssya31kGsYZaIqNYdZU.png"

const HEADER_SURFACE: Record<
  NavSurface,
  {
    header: string
    brandTitle: string
    brandSubtitle: string
    link: string
    linkHover: string
    logoSize: string
    padding: string
  }
> = {
  transparent: {
    header: "bg-transparent border-b border-transparent shadow-none",
    brandTitle: "text-xl text-card",
    brandSubtitle: "text-[10px]",
    link: "text-card/80",
    linkHover: "hover:text-card",
    logoSize: "w-12 h-12",
    padding: "py-6",
  },
  light: {
    header: "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm",
    brandTitle: "text-base md:text-lg text-[#0F5832]",
    brandSubtitle: "text-[9px]",
    link: "text-muted-foreground",
    linkHover: "hover:text-foreground",
    logoSize: "w-9 h-9 md:w-10 md:h-10",
    padding: "py-3",
  },
  dark: {
    header: "bg-foreground/95 backdrop-blur-md border-b border-card/10 shadow-sm",
    brandTitle: "text-base md:text-lg text-card",
    brandSubtitle: "text-[9px]",
    link: "text-card/70",
    linkHover: "hover:text-card",
    logoSize: "w-9 h-9 md:w-10 md:h-10",
    padding: "py-3",
  },
}

const NAV_LINKS = [
  { href: "#oportunidade", key: "opportunity" as const },
  { href: "#financeiro", key: "financial" as const },
  { href: "#tecnologia", key: "technology" as const },
  { href: "#impacto", key: "impact" as const },
  { href: "#contato", key: "contact" as const },
]

export function LandingNavbar() {
  const { t } = useLocale()
  const [surface, setSurface] = useState<NavSurface>("transparent")
  const styles = HEADER_SURFACE[surface]

  useEffect(() => {
    const update = () => setSurface(readNavTheme())
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-colors duration-500",
        styles.header,
        styles.padding,
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 shrink-0"
        >
          <img
            src={LOGO_URL}
            alt={t.nav.logoAlt}
            className={cn("object-contain transition-[width,height] duration-300", styles.logoSize)}
          />
          <motion.div className="flex flex-col">
            <span
              className={cn(
                "font-bold tracking-tight leading-none transition-[color,font-size]",
                styles.brandTitle,
              )}
            >
              VERDA
            </span>
            <span
              className={cn(
                "font-medium tracking-widest text-[#018CEB] transition-[font-size]",
                styles.brandSubtitle,
              )}
            >
              BIOMETHANE
            </span>
          </motion.div>
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "hidden md:flex items-center gap-6 lg:gap-8 text-sm transition-colors",
            styles.link,
          )}
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={cn("transition-colors", styles.linkHover)}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 shrink-0"
        >
          <LanguageSwitcher surface={surface} />
          <Button
            asChild
            size={surface === "transparent" ? "default" : "sm"}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-[height,padding,font-size] duration-300"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {t.nav.scheduleMeeting}
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  )
}
