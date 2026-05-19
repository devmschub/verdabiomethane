"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Thermometer, Wind, Zap, Settings, Shield } from "lucide-react"
import { useLocale } from "@/i18n/locale-context"

const OVERLAY_ICONS = [Thermometer, Wind, Zap, Shield] as const

export function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLocale()
  const tech = t.technology

  return (
    <section
      id="tecnologia"
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
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {tech.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            {tech.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-6">{tech.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative rounded-2xl overflow-hidden aspect-video"
        >
          <img
            src="/images/plant.jpg"
            alt={tech.plantImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tech.overlayStats.map((stat, i) => {
                const Icon = OVERLAY_ICONS[i]
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-card/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-card" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-card">{stat.value}</div>
                      <div className="text-sm text-card/70">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">{tech.processTitle}</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.processSteps.map((item, i) => (
              <div
                key={i}
                className="relative p-6 bg-background rounded-xl border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  {i < tech.processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">{tech.suppliersTitle}</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.techStack.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    {tech.trlPrefix} {item.trl}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.system}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.supplier}</p>
                <p className="text-xs text-primary font-medium">{item.specs}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 md:p-12 bg-background rounded-2xl border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">{tech.timelineTitle}</h3>

          <div className="relative">
            <div className="absolute top-4 left-0 right-0 h-1 bg-border rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full" />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 pt-10">
              {tech.milestones.map((milestone, i) => (
                <div key={i} className="text-center">
                  <div className="relative">
                    <div className="w-3 h-3 bg-primary rounded-full mx-auto -mt-6 mb-4" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{milestone.month}</div>
                  <div className="text-xs text-muted-foreground mt-1">{milestone.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 text-center">{tech.timelineFooter}</p>
        </motion.div>
      </div>
    </section>
  )
}
