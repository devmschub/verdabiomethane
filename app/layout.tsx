import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'VERDA BIOMETHANE | Maior Plataforma de Biometano do Brasil',
  description: 'Projeto greenfield de produção de biometano em larga escala a partir de resíduos de frigoríficos. CAPEX US$ 260 milhões | Capacidade 30 milhões Nm³/ano | TIR 20.5%',
  keywords: ['biometano', 'energia renovável', 'investimento', 'Mato Grosso', 'ESG', 'sustentabilidade', 'biocombustível'],
  authors: [{ name: 'Invest Mato Grosso' }],
  openGraph: {
    title: 'VERDA BIOMETHANE | Maior Plataforma de Biometano do Brasil',
    description: 'A maior plataforma de biometano de origem agropecuária da América Latina',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d7a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
