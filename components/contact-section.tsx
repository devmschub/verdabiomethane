"use client"

import { useState } from "react"
import { ArrowRight, Mail, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Próximos Passos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Solicite o Investment Memorandum completo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Documento confidencial de 34 páginas com detalhamento técnico, financeiro 
              e regulatório. Distribuição restrita a investidores institucionais qualificados.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Documento Completo</p>
                <p className="text-sm text-muted-foreground">34 páginas com projeções detalhadas</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">NDA Requerido</p>
                <p className="text-sm text-muted-foreground">Acordo de confidencialidade padrão</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Resposta em 48h</p>
                <p className="text-sm text-muted-foreground">Equipe dedicada de investor relations</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solicitação Enviada</h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe entrará em contato em até 48 horas úteis com o NDA 
                  e os próximos passos para acesso ao Investment Memorandum.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Enviar outra solicitação
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="João Silva"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail Corporativo
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="joao@empresa.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Empresa / Fundo
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da instituição"
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 group">
                  Solicitar Investment Memorandum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Ao enviar, você concorda com a política de privacidade e termos de uso.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
