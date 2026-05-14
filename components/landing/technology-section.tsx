"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Thermometer, Wind, Zap, Settings, Shield } from "lucide-react"

const techStack = [
  {
    system: "Biodigestores CSTR",
    supplier: "Wärtsilä Biogas / Krieg & Fischer",
    trl: 9,
    specs: "6 × 12.000 m³"
  },
  {
    system: "Upgrading por Membrana",
    supplier: "Evonik SEPURAN Green / Air Liquide",
    trl: 9,
    specs: "≥97% CH₄"
  },
  {
    system: "Compressão GNC",
    supplier: "Atlas Copco / Galileo",
    trl: 9,
    specs: "250 bar"
  },
  {
    system: "Motogerador Biogás",
    supplier: "INNIO Jenbacher J620",
    trl: 9,
    specs: "10 MW"
  },
  {
    system: "SCADA + IA Preditiva",
    supplier: "Siemens MindSphere / GE Predix",
    trl: 8,
    specs: "Automação completa"
  },
  {
    system: "Higienização Térmica",
    supplier: "DMT Environmental",
    trl: 9,
    specs: "70°C/1h"
  },
]

const processSteps = [
  {
    step: 1,
    title: "Coleta de Resíduos",
    description: "Resíduos de frigoríficos, etanol de milho e esmagamento de soja em raio de 200km"
  },
  {
    step: 2,
    title: "Pré-tratamento",
    description: "Higienização térmica a 70°C por 1 hora para eliminação de patógenos"
  },
  {
    step: 3,
    title: "Biodigestão",
    description: "Digestão anaeróbica mesofílica a 38°C com tempo de retenção de 28-30 dias"
  },
  {
    step: 4,
    title: "Upgrading",
    description: "Purificação por membrana em 3 estágios atingindo ≥97% de metano"
  },
  {
    step: 5,
    title: "Compressão",
    description: "Compressão a 250 bar para distribuição como GNC"
  },
  {
    step: 6,
    title: "Distribuição",
    description: "Entrega para off-takers industriais, transporte pesado e rede de gás"
  },
]

export function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tecnologia" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Tecnologia</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Stack Tecnológico de Classe Mundial
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Configuração selecionada com base em benchmarks globais (Korskro/Dinamarca, Gás Verde/RJ), priorizando soluções com Technology Readiness Level ≥8.
          </p>
        </motion.div>

        {/* Video/Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative rounded-2xl overflow-hidden aspect-video"
        >
          <img
            src="/images/plant.jpg"
            alt="Planta de biometano VERDA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Overlay Stats */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Thermometer, value: "38°C", label: "Temperatura Mesofílica" },
                { icon: Wind, value: "97%", label: "Pureza CH₄" },
                { icon: Zap, value: "80 GWh", label: "Energia Elétrica/ano" },
                { icon: Shield, value: "92%", label: "Disponibilidade Técnica" },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-card/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-card" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-card">{stat.value}</div>
                    <div className="text-sm text-card/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Fluxo do Processo</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="relative p-6 bg-background rounded-xl border border-border group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Fornecedores Globais</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    TRL {tech.trl}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{tech.system}</h4>
                <p className="text-sm text-muted-foreground mb-2">{tech.supplier}</p>
                <p className="text-xs text-primary font-medium">{tech.specs}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 md:p-12 bg-background rounded-2xl border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Cronograma Master (27 meses)</h3>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute top-4 left-0 right-0 h-1 bg-border rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full" />
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 pt-10">
              {[
                { month: "M0", label: "Financial Close" },
                { month: "M3", label: "EPC Awarded" },
                { month: "M6", label: "LI Emitida" },
                { month: "M24", label: "LO Aprovada" },
                { month: "M27", label: "COD Reached" },
              ].map((milestone, i) => (
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
          
          <p className="text-sm text-muted-foreground mt-8 text-center">
            Operação plena prevista para 2028 • Modelo de execução EPC Híbrido
          </p>
        </motion.div>
      </div>
    </section>
  )
}
