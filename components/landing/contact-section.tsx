"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Calendar, FileText, Mail, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/i18n/locale-context"

const CARD_ICONS = [Calendar, FileText, Mail] as const

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const { t } = useLocale()
  const contact = t.contact

  return (
    <section
      id="contato"
      data-nav-theme="dark"
      className="py-24 lg:py-32 bg-foreground"
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
            {contact.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-card mt-4">
            {contact.title}
          </h2>
          <p className="text-lg text-card/70 mt-6">{contact.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {contact.cards.map((card, i) => {
            const Icon = CARD_ICONS[i]
            return (
              <div
                key={i}
                className={`p-8 rounded-xl border transition-colors ${
                  card.primary
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card/5 border-card/20 hover:border-card/40"
                }`}
              >
                <Icon
                  className={`w-8 h-8 mb-6 ${card.primary ? "text-primary-foreground" : "text-primary"}`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${card.primary ? "text-primary-foreground" : "text-card"}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm mb-6 ${card.primary ? "text-primary-foreground/80" : "text-card/70"}`}
                >
                  {card.description}
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className={
                    card.primary
                      ? undefined
                      : "bg-white text-neutral-950 hover:bg-neutral-100 border border-white/25 shadow-xs"
                  }
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {card.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 md:p-12 bg-card/5 rounded-2xl border border-card/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-card">{contact.newsletterTitle}</h3>
              <p className="text-card/70 mt-2">{contact.newsletterDescription}</p>
            </div>
            <div className="flex gap-3 flex-1 max-w-md">
              <Input
                type="email"
                placeholder={contact.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card/10 border-card/20 text-card placeholder:text-card/50 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0">
                <Send className="w-4 h-4 mr-2" />
                {contact.subscribe}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">{contact.investMtTitle}</h3>
            <p className="text-card/70">{contact.investMtDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card mb-6">{contact.teamTitle}</h3>
            <div className="space-y-4">
              {contact.team.map((person, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-card/5 rounded-lg border border-card/10"
                >
                  <div>
                    <div className="font-medium text-card">{person.name}</div>
                    <div className="text-sm text-card/60">{person.role}</div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-card/70 hover:text-card hover:bg-card/10"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLocale()
  const footer = t.footer

  return (
    <footer data-nav-theme="dark" className="py-12 bg-foreground border-t border-card/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-fjscPXRjdwjssya31kGsYZaIqNYdZU.png"
              alt={footer.logoAlt}
              className="w-12 h-12 object-contain shrink-0"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-card tracking-tight leading-none">VERDA</span>
              <span className="text-[10px] font-medium text-sky-400 tracking-widest">BIOMETHANE</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a
              href="/docs/resumo-executivo-1-investe-mais-estados-verda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/90 transition-colors"
            >
              <FileText className="w-4 h-4 shrink-0" aria-hidden />
              {footer.executiveSummary}
            </a>
            <a
              href="/docs/verda-biomethane-investment-memorandum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/90 transition-colors"
            >
              <FileText className="w-4 h-4 shrink-0" aria-hidden />
              {footer.memorandum}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
