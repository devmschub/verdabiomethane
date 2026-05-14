import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OpportunitySection } from "@/components/opportunity-section"
import { SpecsSection } from "@/components/specs-section"
import { MarketSection } from "@/components/market-section"
import { FinancialSection } from "@/components/financial-section"
import { ESGSection } from "@/components/esg-section"
import { InvestorsSection } from "@/components/investors-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OpportunitySection />
      <SpecsSection />
      <MarketSection />
      <FinancialSection />
      <ESGSection />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
