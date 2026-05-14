import { TrendingUp, Shield, Users, Zap, Leaf } from "lucide-react"

const vectors = [
  {
    number: "01",
    title: "Matéria-prima Garantida",
    description: "Inventário técnico identifica 55–75 milhões Nm³/ano de potencial em raio de 200 km. O projeto utiliza ~50% desse potencial, preservando margem de segurança.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Marco Regulatório Favorável",
    description: "Lei do Combustível do Futuro estabelece mandato crescente de biometano (1% em 2026, escalando para 10% em 2034). PRODEIC oferece crédito outorgado de até 90% sobre ICMS por 15 anos.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Off-takers de Classe Mundial",
    description: "Inpasa, FS Bioenergia, JBS, Bunge, Cargill e Amaggi já operam frotas pesadas no eixo BR-163 e demandam alternativas ao diesel.",
    icon: Users,
  },
  {
    number: "04",
    title: "Demanda Global Exponencial",
    description: "IEA projeta CAGR de 10,4% ao ano até 2040. União Europeia comprometeu-se a importar 35 bilhões m³ de biometano até 2030 sob o REPowerEU.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Modelo Comprovado",
    description: "A planta UISA Geo Biogás (Nova Olímpia/MT, BNDES R$ 80 milhões) opera com sucesso desde 2024. O VERDA replica a tecnologia em escala 3x maior.",
    icon: Zap,
  },
]

export function OpportunitySection() {
  return (
    <section id="oportunidade" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            A Oportunidade
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Cinco vetores convergentes que validam a tese de investimento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mato Grosso é o maior produtor de proteína animal e grãos do Brasil, gerando volume crítico 
            de resíduos orgânicos hoje subaproveitados, enquanto é deficitário em gás natural fóssil.
          </p>
        </div>

        {/* Vectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vectors.map((vector) => (
            <div
              key={vector.number}
              className="group p-6 md:p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <vector.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                  {vector.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{vector.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{vector.description}</p>
            </div>
          ))}

          {/* Highlight Card */}
          <div className="p-6 md:p-8 bg-primary text-primary-foreground rounded-xl flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80 mb-4">
                Localização Estratégica
              </p>
              <h3 className="text-2xl font-bold mb-4">Nova Mutum, Mato Grosso</h3>
              <p className="opacity-90 leading-relaxed mb-6">
                Eixo BR-163, cluster agroindustrial com JBS, Inpasa, Bunge e Tauá. PIB per capita de R$ 136.949,61 
                — top 3 de MT.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary-foreground/20">242 km de Cuiabá</span>
              <span className="px-3 py-1 rounded-full bg-primary-foreground/20">63.455 hab.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
