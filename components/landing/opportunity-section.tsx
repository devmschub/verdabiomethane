"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Shield, TrendingUp, Globe, Zap } from "lucide-react"

const vectors = [
  {
    icon: Target,
    title: "Matéria-prima Garantida",
    description: "Inventário técnico de 55–75 milhões Nm³/ano em raio de 200 km. Projeto utiliza 50% do potencial, preservando margem de segurança.",
    highlight: "50% de folga"
  },
  {
    icon: Shield,
    title: "Marco Regulatório Favorável",
    description: "Lei do Combustível do Futuro (14.993/2024) estabelece mandato crescente de 1% em 2026 até 10% em 2034. PRODEIC concede crédito outorgado de até 90% sobre ICMS por 15 anos.",
    highlight: "90% crédito ICMS"
  },
  {
    icon: TrendingUp,
    title: "Off-takers de Classe Mundial",
    description: "Inpasa, JBS, Bunge, Cargill e Amaggi já operam frotas pesadas no eixo BR-163. Substituição de diesel reduz custo operacional em 18–25%.",
    highlight: "18–25% economia"
  },
  {
    icon: Globe,
    title: "Demanda Global Exponencial",
    description: "IEA projeta CAGR de 10,4% até 2040. União Europeia comprometeu-se a importar 35 bilhões m³ de biometano até 2030 sob o REPowerEU.",
    highlight: "10.4% CAGR global"
  },
  {
    icon: Zap,
    title: "Modelo Comprovado",
    description: "UISA Geo Biogás (Nova Olímpia/MT, BNDES R$ 80 milhões) opera com sucesso desde 2024. VERDA replica a tecnologia em escala 3x maior.",
    highlight: "3x escala"
  }
]

export function OpportunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="oportunidade" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">A Oportunidade</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 leading-tight">
            Cinco vetores convergentes validados por fontes oficiais
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            O VERDA BIOMETHANE é um projeto greenfield de produção de biometano em larga escala a partir de resíduos de frigoríficos e agroindústria, posicionado como a maior planta de origem agropecuária da América Latina.
          </p>
        </motion.div>

        {/* Vectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {vectors.map((vector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <vector.icon className="w-6 h-6 text-primary" />
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                {vector.highlight}
              </span>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {vector.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {vector.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
              alt="Mato Grosso Agricultural Fields"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Localização Estratégica</span>
              <h3 className="text-2xl md:text-3xl font-medium text-card mt-4">
                Nova Mutum, Mato Grosso
              </h3>
              <p className="text-card/80 mt-4 leading-relaxed">
                Eixo BR-163, no cluster agroindustrial JBS/Inpasa/Bunge. Mato Grosso produz 53% do milho safrinha, 28% da soja do Brasil e possui o maior rebanho bovino do país com 32,9 milhões de cabeças.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { value: "242 km", label: "de Cuiabá" },
                  { value: "PIB/cap", label: "R$ 136.949" },
                  { value: "IDH", label: "0.758 (Alto)" },
                  { value: "80-100 ha", label: "Área do projeto" },
                ].map((stat, i) => (
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
