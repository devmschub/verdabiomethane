import { Leaf, Users, Building2, Globe, Award } from "lucide-react"

const impactMetrics = [
  {
    icon: Leaf,
    value: "278.000",
    unit: "tCO₂eq/ano",
    label: "Redução de Emissões",
    detail: "Equivalente a retirar 60.500 carros de circulação",
  },
  {
    icon: Users,
    value: "1.080",
    unit: "empregos",
    label: "Geração de Empregos",
    detail: "180 diretos + 900 indiretos/induzidos",
  },
  {
    icon: Building2,
    value: "US$ 60 mi",
    unit: "/ano",
    label: "Substituição de Importação",
    detail: "Em diesel, ureia e CO₂ fóssil",
  },
  {
    icon: Globe,
    value: "12",
    unit: "ODS",
    label: "ODS Endereçados",
    detail: "7, 8, 9, 11, 12, 13, 15, 17 + 4 transversais",
  },
]

const certifications = [
  "IFC Performance Standards",
  "CBIO",
  "ISCC EU",
  "CDP",
  "GRI",
  "SASB/ISSB",
  "SBTi",
  "B Corp",
]

export function ESGSection() {
  return (
    <section id="impacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Impacto ESG
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Sustentabilidade como pilar estratégico do investimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Classificado como EU Taxonomy — Atividade 4.13 (contribuição substancial para 
            mitigação de mudanças climáticas)
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                <span className="text-sm text-muted-foreground ml-1">{metric.unit}</span>
              </div>
              <p className="font-medium mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <p className="font-semibold">Selos e Certificações Planejados</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Conformidade com os mais rigorosos padrões internacionais de ESG
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
            <p className="text-5xl font-bold text-primary mb-2">E</p>
            <p className="font-semibold mb-2">Ambiental</p>
            <p className="text-sm text-muted-foreground">
              Valorização de resíduos, redução de emissões de metano e CO₂, economia circular
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
            <p className="text-5xl font-bold text-accent mb-2">S</p>
            <p className="font-semibold mb-2">Social</p>
            <p className="text-sm text-muted-foreground">
              Geração de empregos qualificados, capacitação via SENAI/IFMT, desenvolvimento regional
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5 border border-muted-foreground/20">
            <p className="text-5xl font-bold text-muted-foreground mb-2">G</p>
            <p className="font-semibold mb-2">Governança</p>
            <p className="text-sm text-muted-foreground">
              Conselho de Administração independente, comitês estatutários, padrões IFC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
