"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Users, Globe, Award, TreePine, Car, Factory, GraduationCap } from "lucide-react"
import { useLocale } from "@/i18n/locale-context"

const ESG_ICONS = [Leaf, Users, Globe, Award] as const
const EQUIVALENCE_ICONS = [Car, TreePine, Users] as const
const SOCIAL_ICONS = [GraduationCap, Users, Factory] as const

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLocale()
  const impact = t.impact

  return (
    <section
      id="impacto"
      data-nav-theme="light"
      className="py-24 lg:py-32 bg-background"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {impact.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            {impact.title}
          </h2>
          <p className="text-lg text-muted-foreground mt-6">{impact.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {impact.esgMetrics.map((metric, i) => {
            const Icon = ESG_ICONS[i]
            return (
              <div
                key={i}
                className="relative p-8 bg-card rounded-xl border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground">{metric.value}</span>
                  <span className="text-lg text-muted-foreground">{metric.unit}</span>
                </div>

                <h3 className="text-lg font-medium text-foreground mt-2">{metric.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">{metric.description}</p>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid lg:grid-cols-2 gap-8"
        >
          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">{impact.emissionsTitle}</h3>

            <div className="space-y-4">
              {impact.emissionsSources.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground">{item.source}</span>
                    <span className="text-sm font-medium text-primary">
                      {item.value.toLocaleString()} {impact.emissionsUnit}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percent}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{impact.emissionsTotalLabel}</span>
                <span className="text-xl font-semibold text-primary">{impact.emissionsTotalValue}</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
              alt={impact.forestImageAlt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/50" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-card mb-2">{impact.equivalenceTitle}</h3>
                <p className="text-card/70">{impact.equivalenceSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8">
                {impact.equivalences.map((item, i) => {
                  const Icon = EQUIVALENCE_ICONS[i]
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-card/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-card" />
                      </div>
                      <div>
                        <div className="text-2xl font-semibold text-card">{item.value}</div>
                        <div className="text-sm text-card/70">{item.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">{impact.certificationsTitle}</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impact.certifications.map((cert, i) => (
              <div
                key={i}
                className="p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <Award className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.status}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">{impact.socialTitle}</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {impact.socialPrograms.map((program, i) => {
              const Icon = SOCIAL_ICONS[i]
              return (
                <div
                  key={i}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{program.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {program.highlight}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-card rounded-xl border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">{impact.odsTitle}</h3>

          <div className="flex flex-wrap gap-3">
            {impact.ods.map((ods, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
              >
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {ods.num}
                </span>
                <span className="text-sm font-medium text-foreground">{ods.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
