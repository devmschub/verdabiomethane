"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Building2, MapPin, Factory, Truck } from "lucide-react"

const partners = [
  { name: "JBS", type: "Off-taker" },
  { name: "Inpasa", type: "Off-taker" },
  { name: "Bunge", type: "Off-taker" },
  { name: "Cargill", type: "Off-taker" },
  { name: "Amaggi", type: "Off-taker" },
  { name: "BNDES", type: "Financiador" },
  { name: "IFC", type: "Financiador" },
  { name: "IDB Invest", type: "Financiador" },
]

const feedstockSources = [
  {
    name: "JBS Nova Mutum",
    type: "Frigorífico bovinos",
    volume: "120 mil t/ano",
    distance: "0 km (in loco)"
  },
  {
    name: "Inpasa Nova Mutum",
    type: "Etanol de milho",
    volume: "80 mil t/ano",
    distance: "5 km"
  },
  {
    name: "Bunge Nova Mutum",
    type: "Esmagamento de soja",
    volume: "50 mil t/ano",
    distance: "8 km"
  },
  {
    name: "Tauá Nova Mutum",
    type: "Esmagamento de soja",
    volume: "50 mil t/ano",
    distance: "10-15 km"
  },
  {
    name: "JBS/Seara Lucas do Rio Verde",
    type: "Aves/suínos",
    volume: "80 mil t/ano",
    distance: "60 km"
  },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Video Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden aspect-video mb-24"
        >
          <img
            src="/images/cattle.jpg"
            alt="Gado em Mato Grosso"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-card/20 backdrop-blur-sm border border-card/30 flex items-center justify-center hover:bg-card/30 transition-colors group">
              <Play className="w-8 h-8 text-card fill-card ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/80 to-transparent">
            <h3 className="text-2xl font-semibold text-card">
              Mato Grosso: O Celeiro do Mundo
            </h3>
            <p className="text-card/80 mt-2 max-w-2xl">
              O maior produtor de proteína animal e grãos do Brasil — 18,1% do abate bovino nacional, 28% da soja e 53% do milho safrinha.
            </p>
          </div>
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Ecossistema</span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mt-4">
            Parceiros Estratégicos Pré-Mapeados
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {partners.map((partner, i) => (
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

        {/* Feedstock Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Matéria-Prima</span>
            <h3 className="text-2xl md:text-3xl font-medium text-foreground mt-4">
              Inventário de Feedstock (Raio 200 km)
            </h3>
            <p className="text-muted-foreground mt-2">
              Total: ~530 mil toneladas/ano de resíduos orgânicos disponíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {feedstockSources.map((source, i) => (
              <div
                key={i}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {source.type.includes("Frigorífico") ? (
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

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
              alt="Industrial Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          </div>
          
          <div className="relative z-10 p-8 md:p-16">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-medium text-primary-foreground">
                Déficit Estrutural de Oferta
              </h3>
              <p className="text-primary-foreground/80 mt-4 text-lg">
                Em 2028, a demanda compulsória federal será de 595 milhões Nm³/ano de biometano.
                O VERDA, com 30 milhões Nm³/ano, ocupa 19% desse déficit nacional individualmente.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                {[
                  { value: "595M", label: "Nm³/ano demanda 2028" },
                  { value: "19%", label: "do déficit nacional" },
                  { value: "3-30x", label: "demanda vs capacidade MT" },
                ].map((stat, i) => (
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
