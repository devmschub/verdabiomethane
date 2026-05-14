import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-secondary/30" />

      {/* Decorative Circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Investment Memorandum | Maio 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
            A Maior Plataforma de{" "}
            <span className="text-primary">Biometano</span> de Frigoríficos do Brasil
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Projeto greenfield de produção de biometano em larga escala a partir de resíduos de 
            frigoríficos e agroindústria em Nova Mutum, Mato Grosso.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <MetricCard label="CAPEX" value="US$ 260 mi" />
            <MetricCard label="Capacidade" value="30 mi Nm³/ano" />
            <MetricCard label="TIR Equity" value="20,5%" highlight />
            <MetricCard label="Payback" value="7,2 anos" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 gap-2 group">
              Solicitar Investment Memorandum
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Conhecer o Projeto
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">
              Facilitado por
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <span className="text-sm font-medium">Invest Mato Grosso</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">BNDES Fundo Clima</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm font-medium">IFC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function MetricCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-4 md:p-6 rounded-lg border ${highlight ? 'bg-primary/5 border-primary/20' : 'bg-card border-border'}`}>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-xl md:text-2xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</p>
    </div>
  )
}
