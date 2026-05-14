import Link from "next/link"

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "A Oportunidade", href: "#oportunidade" },
      { label: "Mercado", href: "#mercado" },
      { label: "Financeiro", href: "#financeiro" },
      { label: "Impacto ESG", href: "#impacto" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Invest Mato Grosso", href: "#" },
      { label: "Governo de MT", href: "#" },
      { label: "SEDEC-MT", href: "#" },
      { label: "SEMA-MT", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso Legal", href: "#" },
      { label: "Confidencialidade", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                VERDA BIOMETHANE
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              Maior plataforma de biometano de origem agropecuária da América Latina. 
              Projeto greenfield em Nova Mutum, Mato Grosso.
            </p>
            <div className="flex items-center gap-4 text-background/50 text-sm">
              <span>Version 1.0</span>
              <span>•</span>
              <span>Maio 2026</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-semibold mb-4">{group.title}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-xs text-background/50 leading-relaxed max-w-4xl">
            <strong>Aviso Legal:</strong> Este documento contém informações confidenciais e proprietárias. 
            Projeções financeiras representam cenários estimativos e não constituem garantia de retorno. 
            Investidores devem realizar sua própria due diligence independente antes de qualquer decisão 
            de aporte de capital. Este documento não constitui oferta pública de valores mobiliários.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2026 VERDA BIOMETHANE. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50">
            Facilitado por <span className="text-background/80">Invest Mato Grosso</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
