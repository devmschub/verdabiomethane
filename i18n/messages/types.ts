export interface VectorItem {
  title: string
  description: string
  highlight: string
}

export interface MetricItem {
  value: string
  label: string
}

export interface AnimatedHighlight {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface ScenarioMetrics {
  receita: string
  ebitda: string
  margin: string
  tir: string
  payback: string
  vpl: string
}

export interface ScenarioItem {
  name: string
  metrics: ScenarioMetrics
  highlight?: boolean
}

export interface CapitalItem {
  label: string
  percent: number
  value: string
  source: string
}

export interface InvestorGroup {
  category: string
  investors: string[]
}

export interface TechStackItem {
  system: string
  supplier: string
  trl: number
  specs: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface MilestoneItem {
  month: string
  label: string
}

export interface EsgMetric {
  value: string
  unit: string
  label: string
  description: string
}

export interface Certification {
  name: string
  status: string
}

export interface EmissionSource {
  source: string
  value: number
  percent: number
}

export interface SocialProgram {
  title: string
  description: string
  highlight: string
}

export interface OdsItem {
  num: number
  name: string
}

export interface Partner {
  name: string
  type: string
}

export interface FeedstockSource {
  name: string
  type: string
  volume: string
  distance: string
  isSlaughterhouse: boolean
}

export interface ContactCard {
  title: string
  description: string
  action: string
  primary: boolean
}

export interface TeamMember {
  name: string
  role: string
}

export interface Messages {
  meta: {
    title: string
    description: string
  }
  nav: {
    opportunity: string
    financial: string
    technology: string
    impact: string
    contact: string
    scheduleMeeting: string
    logoAlt: string
  }
  languageSwitcher: {
    ariaLabel: string
    listboxLabel: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleHighlight: string
    subtitle: string
    metrics: MetricItem[]
    cta: string
    trustBankable: string
    trustLaw: string
    trustSdgs: string
    scroll: string
    locationImageAlt: string
  }
  opportunity: {
    eyebrow: string
    title: string
    description: string
    vectors: VectorItem[]
    locationEyebrow: string
    locationTitle: string
    locationDescription: string
    locationStats: MetricItem[]
    locationImageAlt: string
  }
  partners: {
    videoTitle: string
    videoDescription: string
    cattleImageAlt: string
    eyebrow: string
    title: string
    feedstockEyebrow: string
    feedstockTitle: string
    feedstockSubtitle: string
    marketTitle: string
    marketDescription: string
    marketStats: MetricItem[]
    industrialImageAlt: string
    partners: Partner[]
    feedstock: FeedstockSource[]
  }
  financial: {
    eyebrow: string
    title: string
    description: string
    highlights: AnimatedHighlight[]
    scenarioTitle: string
    scenarioRecommended: string
    scenarioPrefix: string
    metricLabels: {
      receita: string
      ebitda: string
      margin: string
      tir: string
      payback: string
      vpl: string
    }
    scenarios: ScenarioItem[]
    capitalTitle: string
    capitalSubtitle: string
    equityLegend: string
    debtLegend: string
    capitalStructure: CapitalItem[]
    investorsTitle: string
    investorGroups: InvestorGroup[]
  }
  technology: {
    eyebrow: string
    title: string
    description: string
    plantImageAlt: string
    overlayStats: MetricItem[]
    processTitle: string
    processSteps: ProcessStep[]
    suppliersTitle: string
    techStack: TechStackItem[]
    timelineTitle: string
    milestones: MilestoneItem[]
    timelineFooter: string
    trlPrefix: string
  }
  impact: {
    eyebrow: string
    title: string
    description: string
    esgMetrics: EsgMetric[]
    emissionsSources: EmissionSource[]
    emissionsTitle: string
    emissionsUnit: string
    emissionsTotalLabel: string
    emissionsTotalValue: string
    equivalenceTitle: string
    equivalenceSubtitle: string
    forestImageAlt: string
    equivalences: MetricItem[]
    certificationsTitle: string
    certifications: Certification[]
    socialTitle: string
    socialPrograms: SocialProgram[]
    odsTitle: string
    ods: OdsItem[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    cards: ContactCard[]
    newsletterTitle: string
    newsletterDescription: string
    emailPlaceholder: string
    subscribe: string
    investMtTitle: string
    investMtDescription: string
    teamTitle: string
    team: TeamMember[]
  }
  footer: {
    logoAlt: string
    executiveSummary: string
    memorandum: string
  }
}
