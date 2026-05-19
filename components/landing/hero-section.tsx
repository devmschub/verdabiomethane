"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Globe, Leaf, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { useLocale } from "@/i18n/locale-context"
import { HERO_SECTION_ID } from "@/i18n/types"

const TITLE_ACCENT_CLASS =
  "text-card font-serif italic font-bold tracking-tight inline-block text-5xl md:text-7xl lg:text-8xl leading-[1.05] [text-shadow:0_1px_24px_rgba(0,0,0,0.35)]"

export function HeroSection() {
  const { t, locale } = useLocale()

  return (
    <section
      id={HERO_SECTION_ID}
      data-nav-theme="dark"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-card text-sm font-medium">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-card max-w-5xl leading-tight tracking-tight"
        >
          {locale === "en-US" ? (
            <>
              <span className={TITLE_ACCENT_CLASS}>{t.hero.titleHighlight}</span>{" "}
              <span className="text-balance">{t.hero.titleLine1}</span>
            </>
          ) : (
            <>
              <span className="text-balance">{t.hero.titleLine1}</span>{" "}
              <span className={TITLE_ACCENT_CLASS}>{t.hero.titleHighlight}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-card/80 max-w-2xl mt-6 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {t.hero.metrics.map((metric, i) => (
            <div key={i} className="text-left">
              <div className="text-3xl md:text-4xl font-semibold text-card">{metric.value}</div>
              <div className="text-sm text-card/60 mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center gap-8 mt-16 text-card/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>{t.hero.trustBankable}</span>
          </div>
          <motion.div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{t.hero.trustLaw}</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span>{t.hero.trustSdgs}</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#oportunidade" className="flex flex-col items-center text-card/60 hover:text-card transition-colors">
          <span className="text-xs mb-2">{t.hero.scroll}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
