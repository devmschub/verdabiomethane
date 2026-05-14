"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Users, Globe, Award, TreePine, Car, Factory, GraduationCap } from "lucide-react"

const esgMetrics = [
  {
    icon: Leaf,
    value: "278K",
    unit: "tCO₂eq/ano",
    label: "Emissões Evitadas",
    description: "Equivalente a retirar 60.500 carros de circulação"
  },
  {
    icon: Users,
    value: "1.080",
    unit: "empregos",
    label: "Geração de Empregos",
    description: "180 diretos + 900 indiretos/induzidos"
  },
  {
    icon: Globe,
    value: "US$ 60M",
    unit: "/ano",
    label: "Substituição de Importação",
    description: "Economia em diesel, ureia e CO₂ fóssil"
  },
  {
    icon: Award,
    value: "12",
    unit: "ODS",
    label: "Objetivos de Desenvolvimento",
    description: "Alinhamento com agenda ESG global"
  },
]

const certifications = [
  { name: "IFC Performance Standards", status: "Pré-Financial Close" },
  { name: "CBIO (RenovaBio)", status: "Pré-COD" },
  { name: "ISCC EU", status: "Pós-COD Ano 1" },
  { name: "CDP Climate A-list", status: "Pós-COD Ano 1" },
  { name: "GRI Standards", status: "Anual" },
  { name: "SASB / ISSB", status: "Anual" },
  { name: "SBTi", status: "Pós-COD Ano 2" },
  { name: "B Corp Certification", status: "Pós-COD Ano 3" },
]

const emissionsSources = [
  { source: "Captura de metano de resíduos animais", value: 158000, percent: 56 },
  { source: "Substituição de diesel fóssil", value: 67000, percent: 24 },
  { source: "Substituição de fertilizante nitrogenado", value: 30000, percent: 11 },
  { source: "Substituição de eletricidade fóssil", value: 13500, percent: 5 },
  { source: "Substituição de gás natural fóssil", value: 12100, percent: 4 },
]

const socialPrograms = [
  {
    icon: GraduationCap,
    title: "Verda Academy",
    description: "255 vagas anuais em parceria com SENAI e IFMT",
    highlight: "70% cotas femininas"
  },
  {
    icon: Users,
    title: "Comitê Comunitário",
    description: "8 representantes da comunidade + 2 da empresa",
    highlight: "Reuniões trimestrais"
  },
  {
    icon: Factory,
    title: "Verda Vizinho",
    description: "Investimentos sociais em infraestrutura local",
    highlight: "US$ 200 mil/ano"
  },
]

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="impacto" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Impacto ESG</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Sustentabilidade como Estratégia de Valor
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Tripla narrativa ESG calibrada para investidores internacionais, com cronograma específico de obtenção de selos ao longo dos primeiros 5 anos.
          </p>
        </motion.div>

        {/* Key ESG Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {esgMetrics.map((metric, i) => (
            <div
              key={i}
              className="relative p-8 bg-card rounded-xl border border-border group hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-foreground">{metric.value}</span>
                <span className="text-lg text-muted-foreground">{metric.unit}</span>
              </div>
              
              <h3 className="text-lg font-medium text-foreground mt-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground mt-2">{metric.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Environmental Impact Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid lg:grid-cols-2 gap-8"
        >
          {/* Emissions Breakdown */}
          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Fontes de Redução de Emissões
            </h3>
            
            <div className="space-y-4">
              {emissionsSources.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground">{item.source}</span>
                    <span className="text-sm font-medium text-primary">
                      {item.value.toLocaleString()} tCO₂eq
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
                <span className="font-medium text-foreground">Total Líquido Anual</span>
                <span className="text-xl font-semibold text-primary">~278.300 tCO₂eq</span>
              </div>
            </div>
          </div>

          {/* Equivalences */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
              alt="Forest"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/50" />
            
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-card mb-2">Equivalência Ambiental</h3>
                <p className="text-card/70">Impacto anual do VERDA BIOMETHANE</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mt-8">
                {[
                  { icon: Car, value: "60.500", label: "carros retirados de circulação" },
                  { icon: TreePine, value: "1.9M", label: "árvores plantadas equivalente" },
                  { icon: Users, value: "34.800", label: "brasileiros neutralizados" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-card/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-card" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-card">{item.value}</div>
                      <div className="text-sm text-card/70">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Selos ESG Planejados</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
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

        {/* Social Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Programas Sociais</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialPrograms.map((program, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{program.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {program.highlight}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ODS Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-card rounded-xl border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Objetivos de Desenvolvimento Sustentável Endereçados
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              { num: 7, name: "Energia Limpa" },
              { num: 8, name: "Trabalho Decente" },
              { num: 9, name: "Indústria e Inovação" },
              { num: 11, name: "Cidades Sustentáveis" },
              { num: 12, name: "Consumo Responsável" },
              { num: 13, name: "Ação Climática" },
              { num: 15, name: "Vida Terrestre" },
              { num: 17, name: "Parcerias" },
            ].map((ods, i) => (
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
