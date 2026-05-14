"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ArrowUpRight, TrendingUp, DollarSign, Clock, BarChart3 } from "lucide-react"

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    let start = 0
    const end = value
    const increment = end / (duration * 60)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{typeof count === 'number' && count % 1 !== 0 ? count.toFixed(1) : count}{suffix}
    </span>
  )
}

const scenarios = [
  {
    name: "Conservador",
    color: "bg-muted",
    textColor: "text-muted-foreground",
    metrics: {
      receita: "US$ 27M",
      ebitda: "US$ 8M",
      margin: "30.4%",
      tir: "11.5%",
      payback: "11.5 anos",
      vpl: "-US$ 45M",
    }
  },
  {
    name: "Realista",
    color: "bg-primary",
    textColor: "text-primary-foreground",
    highlight: true,
    metrics: {
      receita: "US$ 41M",
      ebitda: "US$ 21M",
      margin: "50.7%",
      tir: "20.5%",
      payback: "7.2 anos",
      vpl: "+US$ 78M",
    }
  },
  {
    name: "Otimista",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    metrics: {
      receita: "US$ 53M",
      ebitda: "US$ 32M",
      margin: "59.8%",
      tir: "28.3%",
      payback: "5.1 anos",
      vpl: "+US$ 215M",
    }
  },
]

const capitalStructure = [
  { label: "Equity Lead Investor", percent: 20, value: "US$ 52M", source: "Mitsui / Marubeni / COFCO" },
  { label: "Equity Co-Investor", percent: 15, value: "US$ 39M", source: "Brookfield / CIP / Patria" },
  { label: "Dívida Sênior Concessional", percent: 35, value: "US$ 91M", source: "BNDES Fundo Clima" },
  { label: "Dívida Sênior Multilateral", percent: 20, value: "US$ 52M", source: "IFC + IDB Invest" },
  { label: "Subvenção / Capital Híbrido", percent: 5, value: "US$ 13M", source: "Fundo Clima" },
]

export function FinancialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="financeiro" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Modelagem Financeira</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Retornos Atrativos com Risco Mitigado
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Estrutura de Blended Finance 65/35 com capital concessional e institucional, entregando WACC de 11,5% e DSCR mínimo de 1,30x.
          </p>
        </motion.div>

        {/* Key Financial Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: DollarSign, value: 260, suffix: "M", prefix: "US$ ", label: "CAPEX Total" },
            { icon: TrendingUp, value: 20.5, suffix: "%", label: "TIR Equity" },
            { icon: Clock, value: 7.2, suffix: " anos", label: "Payback" },
            { icon: BarChart3, value: 78, suffix: "M", prefix: "+US$ ", label: "VPL @12%" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-6 bg-card rounded-xl border border-border"
            >
              <item.icon className="w-5 h-5 text-primary mb-4" />
              <div className="text-3xl md:text-4xl font-semibold text-foreground">
                <AnimatedCounter value={item.value} suffix={item.suffix} prefix={item.prefix} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scenario Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Análise de Cenários</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {scenarios.map((scenario, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  scenario.highlight 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'border border-border'
                }`}
              >
                {scenario.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center text-xs py-1 font-medium">
                    CENÁRIO RECOMENDADO
                  </div>
                )}
                
                <div className={`p-6 ${scenario.highlight ? 'pt-10' : ''}`}>
                  <h4 className="text-lg font-semibold text-foreground mb-6">
                    Cenário {scenario.name}
                  </h4>
                  
                  <div className="space-y-4">
                    {Object.entries(scenario.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key === 'tir' ? 'TIR Equity' : key === 'vpl' ? 'VPL @12%' : key}
                        </span>
                        <span className={`text-sm font-semibold ${
                          key === 'tir' && scenario.highlight ? 'text-primary' : 'text-foreground'
                        }`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capital Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 bg-card rounded-2xl border border-border"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Estrutura de Capital</h3>
              <p className="text-muted-foreground mt-1">Blended Finance 65/35</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-primary" /> Equity 35%
              <span className="w-3 h-3 rounded-full bg-muted ml-4" /> Dívida 65%
            </div>
          </div>

          {/* Visual Bar */}
          <div className="h-4 rounded-full overflow-hidden flex mb-8">
            {capitalStructure.map((item, i) => (
              <div
                key={i}
                className={`h-full ${
                  i < 2 ? 'bg-primary' : i === 4 ? 'bg-accent' : 'bg-muted'
                } ${i < 2 ? (i === 0 ? 'opacity-100' : 'opacity-70') : ''}`}
                style={{ width: `${item.percent}%` }}
              />
            ))}
          </div>

          {/* Details Table */}
          <div className="space-y-4">
            {capitalStructure.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    i < 2 ? 'bg-primary' : i === 4 ? 'bg-accent' : 'bg-muted'
                  } ${i === 1 ? 'opacity-70' : ''}`} />
                  <div>
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="text-muted-foreground ml-2">({item.percent}%)</span>
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-2 md:mt-0 pl-7 md:pl-0">
                  <span className="font-semibold text-foreground">{item.value}</span>
                  <span className="text-sm text-muted-foreground">{item.source}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Target Investors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">Investidores-Alvo Prioritários</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Anchors Estratégicos",
                investors: ["Mitsui & Co. (Japão)", "Marubeni Corporation", "COFCO International"]
              },
              {
                category: "Fundos de Infraestrutura",
                investors: ["Brookfield Renewable", "Copenhagen Infrastructure Partners", "Patria (BlackRock)"]
              },
              {
                category: "Estratégicos Europeus",
                investors: ["Engie SA", "TotalEnergies", "Iberdrola"]
              }
            ].map((group, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border">
                <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  {group.category}
                </h4>
                <ul className="space-y-3">
                  {group.investors.map((investor, j) => (
                    <li key={j} className="flex items-center gap-2 text-foreground">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                      {investor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
