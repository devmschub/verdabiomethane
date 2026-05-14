import { ArrowUpRight } from "lucide-react"

const marketData = [
  { label: "Consumo total gás BR (2025)", value: "19,9 bi m³/ano", source: "ABEGÁS" },
  { label: "Projeção EPE 2034", value: "80,7 bi m³/ano", source: "EPE/MME" },
  { label: "Crescimento projetado", value: "+69%", source: "EPE" },
  { label: "Produção biometano BR (2024)", value: "82 mi Nm³/ano", source: "ANP" },
  { label: "Potencial técnico brasileiro", value: "43,8 bi Nm³/ano", source: "ABiogás" },
]

const mandateTimeline = [
  { year: "2026", percentage: "1%", demand: "197 mi Nm³/ano" },
  { year: "2027", percentage: "2%", demand: "391 mi Nm³/ano" },
  { year: "2028", percentage: "3%", demand: "595 mi Nm³/ano", highlight: true },
  { year: "2030", percentage: "5%", demand: "993 mi Nm³/ano" },
  { year: "2034", percentage: "9%", demand: "7,27 bi Nm³/ano" },
]

export function MarketSection() {
  return (
    <section id="mercado" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Análise de Mercado
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Demanda compulsória pela Lei 14.993/2024
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A Lei do Combustível do Futuro estabelece substituição obrigatória anual de gás natural 
              fóssil por gás renovável. Em 2028, a lei cria demanda compulsória de 595 milhões Nm³/ano 
              — volume 20x maior que a produção do VERDA.
            </p>

            {/* Market Data Cards */}
            <div className="space-y-3">
              {marketData.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-lg bg-card border border-border"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {item.source}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">
              Mandato de Mistura — Lei do Combustível do Futuro
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {mandateTimeline.map((item) => (
                  <div key={item.year} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-2 top-2 w-4 h-4 rounded-full border-2 ${
                        item.highlight
                          ? "bg-primary border-primary"
                          : "bg-background border-border"
                      }`}
                    />

                    <div
                      className={`p-4 rounded-lg ${
                        item.highlight
                          ? "bg-primary/10 border border-primary/30"
                          : "bg-secondary/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg">{item.year}</span>
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full ${
                            item.highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.percentage}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Demanda compulsória: <span className="font-medium text-foreground">{item.demand}</span>
                      </p>
                      {item.highlight && (
                        <p className="text-xs text-primary mt-2 flex items-center gap-1">
                          <ArrowUpRight className="w-3 h-3" />
                          Operação plena do VERDA
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insight */}
            <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm font-medium text-primary mb-1">Decisão Estratégica</p>
              <p className="text-sm text-muted-foreground">
                100% do volume do VERDA será destinado ao mercado interno brasileiro. A demanda cativa 
                apenas em Mato Grosso supera em 3 a 30 vezes a produção do projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
