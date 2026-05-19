"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Shield, TrendingUp, Globe, Zap } from "lucide-react"
import { useLocale } from "@/i18n/locale-context"

const VECTOR_ICONS = [Target, Shield, TrendingUp, Globe, Zap]

export function OpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLocale()
  const o = t.opportunity

  return (
    <section
      id="oportunidade"
      data-nav-theme="light"
      className="py-24 lg:py-32 bg-card"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{o.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 leading-tight">
            {o.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">{o.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {o.vectors.map((vector, i) => {
            const Icon = VECTOR_ICONS[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {vector.highlight}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{vector.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{vector.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
              alt={o.locationImageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {o.locationEyebrow}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-card mt-4">{o.locationTitle}</h3>
              <p className="text-card/80 mt-4 leading-relaxed">{o.locationDescription}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {o.locationStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-semibold text-card">{stat.value}</div>
                    <div className="text-sm text-card/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
