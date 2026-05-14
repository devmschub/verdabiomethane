const investors = [
  {
    category: "Anchors Estratégicos",
    entities: [
      { name: "Mitsui & Co.", country: "Japão" },
      { name: "Marubeni Corporation", country: "Japão" },
      { name: "COFCO International", country: "China" },
    ],
  },
  {
    category: "Fundos de Infraestrutura",
    entities: [
      { name: "Brookfield Renewable", country: "Canadá" },
      { name: "Copenhagen Infrastructure Partners", country: "Dinamarca" },
      { name: "Patria Infraestrutura", country: "Brasil/BlackRock" },
    ],
  },
  {
    category: "Estratégicos Europeus",
    entities: [
      { name: "Engie SA", country: "França" },
      { name: "TotalEnergies", country: "França" },
      { name: "Iberdrola", country: "Espanha" },
      { name: "BNP Paribas Asset Management", country: "França" },
    ],
  },
]

export function InvestorsSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Investidores-Alvo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Perfil de investidores prioritários mapeados
          </h2>
          <p className="text-lg text-muted-foreground">
            Seleção baseada em track record em bioenergia, presença no Brasil e apetite 
            para equity em infraestrutura verde
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {investors.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{group.category}</h3>
              <div className="space-y-3">
                {group.entities.map((entity) => (
                  <div
                    key={entity.name}
                    className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                  >
                    <p className="font-medium">{entity.name}</p>
                    <p className="text-sm text-muted-foreground">{entity.country}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
