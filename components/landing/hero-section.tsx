"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Globe, Leaf, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-fjscPXRjdwjssya31kGsYZaIqNYdZU.png" 
              alt="VERDA BIOMETHANE Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-card tracking-tight leading-none">VERDA</span>
              <span className="text-[10px] font-medium text-sky-400 tracking-widest">BIOMETHANE</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8 text-card/80"
          >
            <a href="#oportunidade" className="hover:text-card transition-colors text-sm">Oportunidade</a>
            <a href="#financeiro" className="hover:text-card transition-colors text-sm">Financeiro</a>
            <a href="#tecnologia" className="hover:text-card transition-colors text-sm">Tecnologia</a>
            <a href="#impacto" className="hover:text-card transition-colors text-sm">Impacto ESG</a>
            <a href="#contato" className="hover:text-card transition-colors text-sm">Contato</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar Reunião
              </a>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-card text-sm font-medium">Oportunidade de Investimento • Maio 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-card max-w-5xl leading-tight tracking-tight"
        >
          <span className="text-balance">A Maior Plataforma de Biometano da</span>{" "}
          <span className="text-card font-serif italic font-bold tracking-tight inline-block text-5xl md:text-7xl lg:text-8xl leading-[1.05] [text-shadow:0_1px_24px_rgba(0,0,0,0.35)]">
            América Latina
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-card/80 max-w-2xl mt-6 leading-relaxed"
        >
          Transformando resíduos da agroindústria brasileira em energia limpa.
          Uma oportunidade única no maior produtor de proteína animal do mundo.
        </motion.p>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "US$ 260M", label: "CAPEX Total" },
            { value: "20.5%", label: "TIR Equity" },
            { value: "30M", label: "Nm³/ano" },
            { value: "278K", label: "tCO₂eq/ano evitado" },
          ].map((metric, i) => (
            <div key={i} className="text-left">
              <div className="text-3xl md:text-4xl font-semibold text-card">{metric.value}</div>
              <div className="text-sm text-card/60 mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Investment Memorandum
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center gap-8 mt-16 text-card/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>Bancável por IFC + BNDES</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>Lei do Combustível do Futuro (14.993/2024)</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span>12 ODS Endereçados</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#oportunidade" className="flex flex-col items-center text-card/60 hover:text-card transition-colors">
          <span className="text-xs mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
