const scenarios = [
  {
    name: "Conservador",
    description: "Utilização 75%, preço R$ 3,40–3,70/Nm³",
    metrics: {
      receita: "US$ 27 mi",
      ebitda: "US$ 8 mi",
      margin: "30,4%",
      tirEquity: "11,5%",
      payback: "11,5 anos",
      vpl: "-US$ 45 mi",
    },
    highlight: false,
  },
  {
    name: "Realista",
    description: "Utilização 90%, preço R$ 4,00–4,20/Nm³",
    metrics: {
      receita: "US$ 41 mi",
      ebitda: "US$ 21 mi",
      margin: "50,7%",
      tirEquity: "20,5%",
      payback: "7,2 anos",
      vpl: "+US$ 78 mi",
    },
    highlight: true,
  },
  {
    name: "Otimista",
    description: "Utilização 95% + CO₂ verde, preço R$ 4,30–4,60/Nm³",
    metrics: {
      receita: "US$ 53 mi",
      ebitda: "US$ 32 mi",
      margin: "59,8%",
      tirEquity: "28,3%",
      payback: "5,1 anos",
      vpl: "+US$ 215 mi",
    },
    highlight: false,
  },
]

const capitalStructure = [
  { source: "Equity Lead Investor", percentage: "20%", value: "US$ 52 mi", entity: "Mitsui / Marubeni / COFCO" },
  { source: "Equity Co-Investor", percentage: "15%", value: "US$ 39 mi", entity: "Brookfield / CIP / Patria" },
  { source: "Dívida Sênior Concessional", percentage: "35%", value: "US$ 91 mi", entity: "BNDES Fundo Clima" },
  { source: "Dívida Multilateral", percentage: "20%", value: "US$ 52 mi", entity: "IFC + IDB Invest" },
  { source: "Subvenção / Capital Híbrido", percentage: "5%", value: "US$ 13 mi", entity: "Fundo Clima + Climate Investor One" },
]

export function FinancialSection() {
  return (
    <section id="financeiro" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Modelagem Financeira
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Três cenários estruturados para análise de investimento
          </h2>
          <p className="text-lg text-muted-foreground">
            Horizonte de 15 anos (2028–2042) com WACC de 11,5% e taxa de desconto VPL de 12% a.a.
          </p>
        </div>

        {/* Scenarios */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {scenarios.map((scenario) => (
            <div
              key={scenario.name}
              className={`relative p-6 md:p-8 rounded-2xl border ${
                scenario.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border"
              }`}
            >
              {scenario.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  Base Case
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{scenario.name}</h3>
                <p className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                  {scenario.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-current/10">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    Receita Anual
                  </span>
                  <span className="font-semibold">{scenario.metrics.receita}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-current/10">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    EBITDA
                  </span>
                  <span className="font-semibold">{scenario.metrics.ebitda}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-current/10">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    EBITDA Margin
                  </span>
                  <span className="font-semibold">{scenario.metrics.margin}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-current/10">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    TIR Equity
                  </span>
                  <span className="font-bold text-lg">{scenario.metrics.tirEquity}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-current/10">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    Payback
                  </span>
                  <span className="font-semibold">{scenario.metrics.payback}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${scenario.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                    VPL @12%
                  </span>
                  <span className={`font-bold ${scenario.metrics.vpl.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                    {scenario.metrics.vpl}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capital Structure */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Estrutura de Capital Recomendada <span className="text-primary">(Blended Finance 65/35)</span>
          </h3>

          <div className="bg-background rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-secondary/50 text-sm font-medium text-muted-foreground">
              <span>Fonte</span>
              <span className="text-center">%</span>
              <span className="text-center">Valor</span>
              <span className="text-right">Entidade</span>
            </div>

            {capitalStructure.map((item, index) => (
              <div
                key={item.source}
                className={`grid grid-cols-4 gap-4 p-4 items-center ${
                  index !== capitalStructure.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-medium text-sm">{item.source}</span>
                <span className="text-center font-semibold text-primary">{item.percentage}</span>
                <span className="text-center font-semibold">{item.value}</span>
                <span className="text-right text-sm text-muted-foreground">{item.entity}</span>
              </div>
            ))}

            <div className="grid grid-cols-4 gap-4 p-4 bg-primary/5 border-t border-primary/20">
              <span className="font-bold">TOTAL</span>
              <span className="text-center font-bold text-primary">100%</span>
              <span className="text-center font-bold">US$ 260 mi</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
