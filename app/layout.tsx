import type { Metadata } from 'next'
import { Host_Grotesk, Inter } from 'next/font/google'
import ScrollReveal from '@/components/ScrollReveal'
import './globals.css'

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carpenteria Pastro — Lavorazioni metalliche di precisione',
  description:
    'Il partner tecnico per la carpenteria metallica su misura. Taglio laser, piegatura, saldatura e assemblaggio in Veneto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
