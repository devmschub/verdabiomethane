"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Building2, MapPin, Factory, Truck } from "lucide-react"
import { useLocale } from "@/i18n/locale-context"

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t } = useLocale()
  const p = t.partners

  return (
    <section data-nav-theme="light" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden aspect-video mb-24"
        >
          <img src="/images/cattle.jpg" alt={p.cattleImageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <button
              type="button"
              className="w-20 h-20 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 flex items-center justify-center hover:bg-card/30 transition-colors group"
              aria-label={p.videoTitle}
            >
              <Play className="w-8 h-8 text-card fill-card ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/80 to-transparent">
            <h3 className="text-2xl font-semibold text-card">{p.videoTitle}</h3>
            <p className="text-card/80 mt-2 max-w-2xl">{p.videoDescription}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{p.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mt-4">{p.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {p.partners.map((partner, i) => (
            <div
              key={i}
              className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center"
            >
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground">{partner.name}</h4>
              <span className="text-xs text-muted-foreground">{partner.type}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{p.feedstockEyebrow}</span>
            <h3 className="text-2xl md:text-3xl font-medium text-foreground mt-4">{p.feedstockTitle}</h3>
            <p className="text-muted-foreground mt-2">{p.feedstockSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.feedstock.map((source, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {source.isSlaughterhouse ? (
                      <Factory className="w-6 h-6 text-primary" />
                    ) : (
                      <Truck className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{source.name}</h4>
                    <p className="text-sm text-muted-foreground">{source.type}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="font-medium text-primary">{source.volume}</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {source.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
              alt={p.industrialImageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          </div>
          <div className="relative z-10 p-8 md:p-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-medium text-primary-foreground">{p.marketTitle}</h3>
              <p className="text-primary-foreground/80 mt-4 text-lg">{p.marketDescription}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                {p.marketStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-semibold text-primary-foreground">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
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
