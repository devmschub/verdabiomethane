import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppProviders } from '@/components/providers/app-providers'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  title: 'VERDA BIOMETHANE | A Maior Plataforma de Biometano da América Latina',
  description: 'Oportunidade de investimento de US$ 260 milhões em energia renovável. TIR de 20.5%, produção de 30 milhões Nm³/ano de biometano em Mato Grosso, Brasil.',
  keywords: ['biometano', 'energia renovável', 'investimento', 'Brasil', 'ESG', 'bioenergia', 'Mato Grosso'],
  authors: [{ name: 'VERDA BIOMETHANE' }],
  openGraph: {
    title: 'VERDA BIOMETHANE | Investment Opportunity',
    description: 'Brazil\'s Largest Slaughterhouse-to-Biomethane Platform - US$ 260M CAPEX - 20.5% Target IRR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
