import { Factory, Droplets, Zap, Recycle } from "lucide-react"

const specs = [
  {
    icon: Factory,
    label: "Capacidade Nominal",
    value: "30 milhões Nm³/ano",
    detail: "+ 80 GWh/ano elétrica + 300 mil t/ano biofertilizante",
  },
  {
    icon: Droplets,
    label: "Tecnologia",
    value: "Biodigestão Anaeróbica",
    detail: "Mesofílica + upgrading por membrana (97% CH₄)",
  },
  {
    icon: Recycle,
    label: "Matéria-prima",
    value: "Resíduos Agroindustriais",
    detail: "Frigoríficos bovinos, esmagamento de soja, etanol de milho",
  },
  {
    icon: Zap,
    label: "Cronograma",
    value: "27 meses",
    detail: "24 obras + 3 comissionamento — Operação plena: 2028",
  },
]

export function SpecsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Especificações do Projeto
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Tecnologia de ponta com escala industrial comprovada
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O VERDA é a primeira plataforma multi-resíduo do agronegócio brasileiro, 
              utilizando tecnologia com Technology Readiness Level (TRL) 9 e fornecedores 
              globais reconhecidos por fundos de infraestrutura.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <spec.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="font-semibold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
              <div className="w-full h-full rounded-xl bg-card border border-border p-8 flex flex-col justify-between">
                {/* Stack Tecnológico */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
                    Stack Tecnológico
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: "Biodigestores CSTR", provider: "Wärtsilä / Krieg & Fischer" },
                      { name: "Upgrading Membrana", provider: "Evonik SEPURAN Green" },
                      { name: "Compressão GNC", provider: "Atlas Copco / Galileo" },
                      { name: "Motogerador", provider: "INNIO Jenbacher J620" },
                      { name: "SCADA + IA", provider: "Siemens MindSphere" },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                      >
                        <span className="text-sm font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">{tech.provider}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Guarantees */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                    Garantias de Performance
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">92%</p>
                      <p className="text-xs text-muted-foreground">Disponibilidade</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">97%</p>
                      <p className="text-xs text-muted-foreground">Pureza CH₄</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">5 anos</p>
                      <p className="text-xs text-muted-foreground">Garantia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
