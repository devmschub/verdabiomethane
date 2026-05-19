import type { Messages } from "./types"

export const enUS: Messages = {
  meta: {
    title: "VERDA BIOMETHANE | Latin America's Largest Biomethane Platform",
    description:
      "US$ 260 million renewable energy investment opportunity. 20.5% IRR, 30 million Nm³/year biomethane production in Mato Grosso, Brazil.",
  },
  nav: {
    opportunity: "Opportunity",
    financial: "Financial",
    technology: "Technology",
    impact: "ESG Impact",
    contact: "Contact",
    scheduleMeeting: "Schedule Meeting",
    logoAlt: "VERDA BIOMETHANE Logo",
  },
  languageSwitcher: {
    ariaLabel: "Select language",
    listboxLabel: "Available languages",
  },
  hero: {
    badge: "Investment Opportunity • May 2026",
    titleLine1: "Largest Biomethane Platform",
    titleHighlight: "Latin America's",
    subtitle:
      "Transforming Brazilian agribusiness waste into clean energy. A unique opportunity in the world's largest animal protein producer.",
    metrics: [
      { value: "US$ 260M", label: "Total CAPEX" },
      { value: "20.5%", label: "Equity IRR" },
      { value: "30M", label: "Nm³/year" },
      { value: "278K", label: "tCO₂eq/year avoided" },
    ],
    cta: "Request Investment Memorandum",
    trustBankable: "Bankable by IFC + BNDES",
    trustLaw: "Future Fuel Law (14.993/2024)",
    trustSdgs: "12 SDGs Addressed",
    scroll: "Scroll",
    locationImageAlt: "Agricultural fields in Mato Grosso",
  },
  opportunity: {
    eyebrow: "The Opportunity",
    title: "Five converging vectors validated by official sources",
    description:
      "VERDA BIOMETHANE is a greenfield large-scale biomethane production project from slaughterhouse and agribusiness waste, positioned as Latin America's largest livestock-origin plant.",
    vectors: [
      {
        title: "Guaranteed Feedstock",
        description:
          "Technical inventory of 55–75 million Nm³/year within a 200 km radius. The project uses 50% of potential, preserving a safety margin.",
        highlight: "50% headroom",
      },
      {
        title: "Favorable Regulatory Framework",
        description:
          "Future Fuel Law (14.993/2024) establishes a growing mandate from 1% in 2026 to 10% in 2034. PRODEIC grants up to 90% ICMS credit for 15 years.",
        highlight: "90% ICMS credit",
      },
      {
        title: "World-Class Off-takers",
        description:
          "Inpasa, JBS, Bunge, Cargill and Amaggi already operate heavy fleets on the BR-163 corridor. Diesel substitution reduces operating costs by 18–25%.",
        highlight: "18–25% savings",
      },
      {
        title: "Exponential Global Demand",
        description:
          "IEA projects 10.4% CAGR through 2040. The European Union committed to importing 35 billion m³ of biomethane by 2030 under REPowerEU.",
        highlight: "10.4% global CAGR",
      },
      {
        title: "Proven Model",
        description:
          "UISA Geo Biogás (Nova Olímpia/MT, BNDES R$ 80 million) has operated successfully since 2024. VERDA replicates the technology at 3x scale.",
        highlight: "3x scale",
      },
    ],
    locationEyebrow: "Strategic Location",
    locationTitle: "Nova Mutum, Mato Grosso",
    locationDescription:
      "BR-163 corridor, in the JBS/Inpasa/Bunge agroindustrial cluster. Mato Grosso produces 53% of Brazil's second-crop corn, 28% of soybeans, and has the country's largest cattle herd at 32.9 million head.",
    locationStats: [
      { value: "242 km", label: "from Cuiabá" },
      { value: "GDP/cap", label: "R$ 136,949" },
      { value: "HDI", label: "0.758 (High)" },
      { value: "80-100 ha", label: "Project area" },
    ],
    locationImageAlt: "Agricultural fields in Mato Grosso",
  },
  partners: {
    videoTitle: "Mato Grosso: The World's Breadbasket",
    videoDescription:
      "Brazil's largest animal protein and grain producer — 18.1% of national cattle slaughter, 28% of soybeans and 53% of second-crop corn.",
    cattleImageAlt: "Cattle in Mato Grosso",
    eyebrow: "Ecosystem",
    title: "Pre-Mapped Strategic Partners",
    feedstockEyebrow: "Feedstock",
    feedstockTitle: "Feedstock Inventory (200 km Radius)",
    feedstockSubtitle: "Total: ~530 thousand tons/year of available organic waste",
    marketTitle: "Structural Supply Deficit",
    marketDescription:
      "In 2028, federal mandatory demand will be 595 million Nm³/year of biomethane. VERDA, with 30 million Nm³/year, individually covers 19% of that national deficit.",
    marketStats: [
      { value: "595M", label: "Nm³/year demand 2028" },
      { value: "19%", label: "of national deficit" },
      { value: "3-30x", label: "demand vs MT capacity" },
    ],
    industrialImageAlt: "Industrial facility",
    partners: [
      { name: "JBS", type: "Off-taker" },
      { name: "Inpasa", type: "Off-taker" },
      { name: "Bunge", type: "Off-taker" },
      { name: "Cargill", type: "Off-taker" },
      { name: "Amaggi", type: "Off-taker" },
      { name: "BNDES", type: "Financier" },
      { name: "IFC", type: "Financier" },
      { name: "IDB Invest", type: "Financier" },
    ],
    feedstock: [
      {
        name: "JBS Nova Mutum",
        type: "Cattle slaughterhouse",
        volume: "120k t/year",
        distance: "0 km (on-site)",
        isSlaughterhouse: true,
      },
      {
        name: "Inpasa Nova Mutum",
        type: "Corn ethanol",
        volume: "80k t/year",
        distance: "5 km",
        isSlaughterhouse: false,
      },
      {
        name: "Bunge Nova Mutum",
        type: "Soy crushing",
        volume: "50k t/year",
        distance: "8 km",
        isSlaughterhouse: false,
      },
      {
        name: "Tauá Nova Mutum",
        type: "Soy crushing",
        volume: "50k t/year",
        distance: "10-15 km",
        isSlaughterhouse: false,
      },
      {
        name: "JBS/Seara Lucas do Rio Verde",
        type: "Poultry/swine",
        volume: "80k t/year",
        distance: "60 km",
        isSlaughterhouse: false,
      },
    ],
  },
  financial: {
    eyebrow: "Financial Modeling",
    title: "Attractive Returns with Mitigated Risk",
    description:
      "65/35 Blended Finance structure with concessional and institutional capital, delivering 11.5% WACC and minimum 1.30x DSCR.",
    highlights: [
      { value: 260, suffix: "M", prefix: "US$ ", label: "Total CAPEX" },
      { value: 20.5, suffix: "%", label: "Equity IRR" },
      { value: 7.2, suffix: " years", label: "Payback" },
      { value: 78, suffix: "M", prefix: "+US$ ", label: "NPV @12%" },
    ],
    scenarioTitle: "Scenario Analysis",
    scenarioRecommended: "RECOMMENDED SCENARIO",
    scenarioPrefix: "Scenario",
    metricLabels: {
      receita: "Revenue",
      ebitda: "EBITDA",
      margin: "Margin",
      tir: "Equity IRR",
      payback: "Payback",
      vpl: "NPV @12%",
    },
    scenarios: [
      {
        name: "Conservative",
        metrics: {
          receita: "US$ 27M",
          ebitda: "US$ 8M",
          margin: "30.4%",
          tir: "11.5%",
          payback: "11.5 years",
          vpl: "-US$ 45M",
        },
      },
      {
        name: "Base Case",
        highlight: true,
        metrics: {
          receita: "US$ 41M",
          ebitda: "US$ 21M",
          margin: "50.7%",
          tir: "20.5%",
          payback: "7.2 years",
          vpl: "+US$ 78M",
        },
      },
      {
        name: "Optimistic",
        metrics: {
          receita: "US$ 53M",
          ebitda: "US$ 32M",
          margin: "59.8%",
          tir: "28.3%",
          payback: "5.1 years",
          vpl: "+US$ 215M",
        },
      },
    ],
    capitalTitle: "Capital Structure",
    capitalSubtitle: "Blended Finance 65/35",
    equityLegend: "Equity 35%",
    debtLegend: "Debt 65%",
    capitalStructure: [
      {
        label: "Lead Equity Investor",
        percent: 20,
        value: "US$ 52M",
        source: "Mitsui / Marubeni / COFCO",
      },
      {
        label: "Co-Investor Equity",
        percent: 15,
        value: "US$ 39M",
        source: "Brookfield / CIP / Patria",
      },
      {
        label: "Concessional Senior Debt",
        percent: 35,
        value: "US$ 91M",
        source: "BNDES Fundo Clima",
      },
      {
        label: "Multilateral Senior Debt",
        percent: 20,
        value: "US$ 52M",
        source: "IFC + IDB Invest",
      },
      {
        label: "Grant / Hybrid Capital",
        percent: 5,
        value: "US$ 13M",
        source: "Fundo Clima",
      },
    ],
    investorsTitle: "Priority Target Investors",
    investorGroups: [
      {
        category: "Strategic Anchors",
        investors: ["Mitsui & Co. (Japan)", "Marubeni Corporation", "COFCO International"],
      },
      {
        category: "Infrastructure Funds",
        investors: [
          "Brookfield Renewable",
          "Copenhagen Infrastructure Partners",
          "Patria (BlackRock)",
        ],
      },
      {
        category: "European Strategics",
        investors: ["Engie SA", "TotalEnergies", "Iberdrola"],
      },
    ],
  },
  technology: {
    eyebrow: "Technology",
    title: "World-Class Technology Stack",
    description:
      "Configuration selected based on global benchmarks (Korskro/Denmark, Gás Verde/RJ), prioritizing solutions with Technology Readiness Level ≥8.",
    plantImageAlt: "VERDA biomethane plant",
    overlayStats: [
      { value: "38°C", label: "Mesophilic Temperature" },
      { value: "97%", label: "CH₄ Purity" },
      { value: "80 GWh", label: "Electricity/year" },
      { value: "92%", label: "Technical Availability" },
    ],
    processTitle: "Process Flow",
    processSteps: [
      {
        step: 1,
        title: "Waste Collection",
        description:
          "Slaughterhouse, corn ethanol and soy crushing waste within a 200 km radius",
      },
      {
        step: 2,
        title: "Pre-treatment",
        description: "Thermal hygienization at 70°C for 1 hour to eliminate pathogens",
      },
      {
        step: 3,
        title: "Anaerobic Digestion",
        description: "Mesophilic anaerobic digestion at 38°C with 28-30 day retention time",
      },
      {
        step: 4,
        title: "Upgrading",
        description: "3-stage membrane purification achieving ≥97% methane",
      },
      {
        step: 5,
        title: "Compression",
        description: "Compression to 250 bar for distribution as CNG",
      },
      {
        step: 6,
        title: "Distribution",
        description: "Delivery to industrial off-takers, heavy transport and gas grid",
      },
    ],
    suppliersTitle: "Global Suppliers",
    techStack: [
      {
        system: "CSTR Digesters",
        supplier: "Wärtsilä Biogas / Krieg & Fischer",
        trl: 9,
        specs: "6 × 12,000 m³",
      },
      {
        system: "Membrane Upgrading",
        supplier: "Evonik SEPURAN Green / Air Liquide",
        trl: 9,
        specs: "≥97% CH₄",
      },
      {
        system: "CNG Compression",
        supplier: "Atlas Copco / Galileo",
        trl: 9,
        specs: "250 bar",
      },
      {
        system: "Biogas Generator Set",
        supplier: "INNIO Jenbacher J620",
        trl: 9,
        specs: "10 MW",
      },
      {
        system: "SCADA + Predictive AI",
        supplier: "Siemens MindSphere / GE Predix",
        trl: 8,
        specs: "Full automation",
      },
      {
        system: "Thermal Hygienization",
        supplier: "DMT Environmental",
        trl: 9,
        specs: "70°C/1h",
      },
    ],
    timelineTitle: "Master Schedule (27 months)",
    milestones: [
      { month: "M0", label: "Financial Close" },
      { month: "M3", label: "EPC Awarded" },
      { month: "M6", label: "LI Issued" },
      { month: "M24", label: "LO Approved" },
      { month: "M27", label: "COD Reached" },
    ],
    timelineFooter: "Full operation expected by 2028 • Hybrid EPC execution model",
    trlPrefix: "TRL",
  },
  impact: {
    eyebrow: "ESG Impact",
    title: "Sustainability as a Value Strategy",
    description:
      "ESG triple narrative calibrated for international investors, with a specific certification timeline over the first 5 years.",
    emissionsSources: [
      { source: "Methane capture from animal waste", value: 158000, percent: 56 },
      { source: "Fossil diesel substitution", value: 67000, percent: 24 },
      { source: "Nitrogen fertilizer substitution", value: 30000, percent: 11 },
      { source: "Fossil electricity substitution", value: 13500, percent: 5 },
      { source: "Fossil natural gas substitution", value: 12100, percent: 4 },
    ],
    esgMetrics: [
      {
        value: "278K",
        unit: "tCO₂eq/year",
        label: "Emissions Avoided",
        description: "Equivalent to removing 60,500 cars from circulation",
      },
      {
        value: "1,080",
        unit: "jobs",
        label: "Job Creation",
        description: "180 direct + 900 indirect/induced",
      },
      {
        value: "US$ 60M",
        unit: "/year",
        label: "Import Substitution",
        description: "Savings on diesel, urea and fossil CO₂",
      },
      {
        value: "12",
        unit: "SDGs",
        label: "Development Goals",
        description: "Alignment with global ESG agenda",
      },
    ],
    emissionsTitle: "Emission Reduction Sources",
    emissionsUnit: "tCO₂eq",
    emissionsTotalLabel: "Annual Net Total",
    emissionsTotalValue: "~278,300 tCO₂eq",
    equivalenceTitle: "Environmental Equivalence",
    equivalenceSubtitle: "Annual impact of VERDA BIOMETHANE",
    forestImageAlt: "Forest",
    equivalences: [
      { value: "60,500", label: "cars removed from circulation" },
      { value: "1.9M", label: "trees planted equivalent" },
      { value: "34,800", label: "Brazilians neutralized" },
    ],
    certificationsTitle: "Planned ESG Certifications",
    certifications: [
      { name: "IFC Performance Standards", status: "Pre-Financial Close" },
      { name: "CBIO (RenovaBio)", status: "Pre-COD" },
      { name: "ISCC EU", status: "Post-COD Year 1" },
      { name: "CDP Climate A-list", status: "Post-COD Year 1" },
      { name: "GRI Standards", status: "Annual" },
      { name: "SASB / ISSB", status: "Annual" },
      { name: "SBTi", status: "Post-COD Year 2" },
      { name: "B Corp Certification", status: "Post-COD Year 3" },
    ],
    socialTitle: "Social Programs",
    socialPrograms: [
      {
        title: "Verda Academy",
        description: "255 annual slots in partnership with SENAI and IFMT",
        highlight: "70% female quotas",
      },
      {
        title: "Community Committee",
        description: "8 community representatives + 2 from the company",
        highlight: "Quarterly meetings",
      },
      {
        title: "Verda Neighbor",
        description: "Social investments in local infrastructure",
        highlight: "US$ 200k/year",
      },
    ],
    odsTitle: "Sustainable Development Goals Addressed",
    ods: [
      { num: 7, name: "Affordable Clean Energy" },
      { num: 8, name: "Decent Work" },
      { num: 9, name: "Industry & Innovation" },
      { num: 11, name: "Sustainable Cities" },
      { num: 12, name: "Responsible Consumption" },
      { num: 13, name: "Climate Action" },
      { num: 15, name: "Life on Land" },
      { num: 17, name: "Partnerships" },
    ],
  },
  contact: {
    eyebrow: "Next Steps",
    title: "Transform Brazilian Agribusiness into Clean Energy",
    description:
      "Schedule a meeting with our investor relations team to receive the full Investment Memorandum and discuss participation terms.",
    cards: [
      {
        title: "Schedule Meeting",
        description: "Speak with our investor relations team",
        action: "Schedule now",
        primary: true,
      },
      {
        title: "Investment Memorandum",
        description: "Request the full 34-page document under NDA",
        action: "Request document",
        primary: false,
      },
      {
        title: "Direct Contact",
        description: "Contact our team by email",
        action: "Send message",
        primary: false,
      },
    ],
    newsletterTitle: "Receive Project Updates",
    newsletterDescription: "Sign up for news on VERDA BIOMETHANE progress.",
    emailPlaceholder: "you@email.com",
    subscribe: "Subscribe",
    investMtTitle: "Invest Mato Grosso",
    investMtDescription:
      "Mato Grosso State Investment Promotion Agency — Institutional facilitator of the VERDA BIOMETHANE project.",
    teamTitle: "Investor Relations Team",
    team: [
      { name: "Director of Investments", role: "Lead Contact" },
      { name: "Project Coordinator", role: "Technical Due Diligence" },
      { name: "Legal Advisor", role: "Legal & Compliance" },
    ],
  },
  footer: {
    logoAlt: "VERDA BIOMETHANE",
    executiveSummary: "Executive Summary 1",
    memorandum: "Memorandum",
  },
}
