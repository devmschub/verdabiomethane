"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Calendar, FileText, Mail, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")

  return (
    <section id="contato" className="py-24 lg:py-32 bg-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Próximos Passos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-card mt-4">
            Transforme a Agroindústria Brasileira em Energia Limpa
          </h2>
          <p className="text-lg text-card/70 mt-6">
            Agende uma reunião com nossa equipe de relações com investidores para receber o Investment Memorandum completo e discutir os termos de participação.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: Calendar,
              title: "Agendar Reunião",
              description: "Converse com nossa equipe de relações com investidores",
              action: "Agendar agora",
              primary: true
            },
            {
              icon: FileText,
              title: "Investment Memorandum",
              description: "Solicite o documento completo de 34 páginas sob NDA",
              action: "Solicitar documento",
              primary: false
            },
            {
              icon: Mail,
              title: "Contato Direto",
              description: "Entre em contato com nossa equipe por e-mail",
              action: "Enviar mensagem",
              primary: false
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border transition-colors ${
                card.primary 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : 'bg-card/5 border-card/20 hover:border-card/40'
              }`}
            >
              <card.icon className={`w-8 h-8 mb-6 ${card.primary ? 'text-primary-foreground' : 'text-primary'}`} />
              <h3 className={`text-xl font-semibold mb-2 ${card.primary ? 'text-primary-foreground' : 'text-card'}`}>
                {card.title}
              </h3>
              <p className={`text-sm mb-6 ${card.primary ? 'text-primary-foreground/80' : 'text-card/70'}`}>
                {card.description}
              </p>
              <Button
                variant="secondary"
                className={
                  card.primary
                    ? undefined
                    : 'bg-white text-neutral-950 hover:bg-neutral-100 border border-white/25 shadow-xs'
                }
              >
                {card.action}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </motion.div>

        {/* Newsletter / Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 md:p-12 bg-card/5 rounded-2xl border border-card/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-card">Receba Atualizações do Projeto</h3>
              <p className="text-card/70 mt-2">
                Cadastre-se para receber novidades sobre o andamento do VERDA BIOMETHANE.
              </p>
            </div>
            <div className="flex gap-3 flex-1 max-w-md">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card/10 border-card/20 text-card placeholder:text-card/50 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0">
                <Send className="w-4 h-4 mr-2" />
                Inscrever
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">Invest Mato Grosso</h3>
            <p className="text-card/70">
              Agência de Promoção de Investimentos do Estado de Mato Grosso — Facilitadora institucional do projeto VERDA BIOMETHANE.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-card mb-6">Equipe de Relações com Investidores</h3>
            <div className="space-y-4">
              {[
                { name: "Diretor de Investimentos", role: "Lead Contact" },
                { name: "Coordenador de Projetos", role: "Technical Due Diligence" },
                { name: "Assessor Jurídico", role: "Legal & Compliance" },
              ].map((person, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-card/5 rounded-lg border border-card/10">
                  <div>
                    <div className="font-medium text-card">{person.name}</div>
                    <div className="text-sm text-card/60">{person.role}</div>
                  </div>
                  <Button size="sm" variant="ghost" className="text-card/70 hover:text-card hover:bg-card/10">
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
  return (
    <footer className="py-12 bg-foreground border-t border-card/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-fjscPXRjdwjssya31kGsYZaIqNYdZU.png"
              alt="VERDA BIOMETHANE"
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
              Resumo Executivo 1
            </a>
            <a
              href="/docs/verda-biomethane-investment-memorandum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/90 transition-colors"
            >
              <FileText className="w-4 h-4 shrink-0" aria-hidden />
              Memorandum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
