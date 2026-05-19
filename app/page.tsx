import { LandingNavbar } from "@/components/landing/landing-navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { OpportunitySection } from "@/components/landing/opportunity-section"
import { FinancialSection } from "@/components/landing/financial-section"
import { TechnologySection } from "@/components/landing/technology-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { ImpactSection } from "@/components/landing/impact-section"
import { ContactSection, Footer } from "@/components/landing/contact-section"

export default function VerdaBiomethaneLanding() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <HeroSection />
      <OpportunitySection />
      <PartnersSection />
      <FinancialSection />
      <TechnologySection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
