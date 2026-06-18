import type { Metadata } from 'next'
import { Host_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
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
  metadataBase: new URL('https://carpenteriapastro.it'),
  openGraph: {
    title: 'Carpenteria Pastro — Lavorazioni metalliche di precisione',
    description:
      'Il partner tecnico per la carpenteria metallica su misura. Taglio laser, piegatura, saldatura e assemblaggio in Veneto.',
    url: 'https://carpenteriapastro.it',
    siteName: 'Carpenteria Pastro',
    images: [
      {
        url: '/pastro-logo.png',
        width: 1200,
        height: 630,
        alt: 'Carpenteria Pastro logo',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpenteria Pastro',
    description: 'Carpenteria metallica industriale di precisione',
    images: ['/pastro-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon-pastro.png" type="image/png" />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f3f06931-4fa0-4360-9d77-4e25655b982b"
          data-blockingmode="auto"
          data-culture="it"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://carpenteriapastro.it/#local-business',
                  name: 'Carpenteria Pastro SRL',
                  description:
                    'Carpenteria metallica industriale di precisione con oltre 30 anni di esperienza.',
                  url: 'https://carpenteriapastro.it',
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'Veneto',
                    addressCountry: 'IT',
                  },
                  areaServed: {
                    '@type': 'GeoShape',
                    box: '45.5 11.5 45.7 12.5',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://carpenteriapastro.it/#organization',
                  name: 'Carpenteria Pastro SRL',
                  url: 'https://carpenteriapastro.it',
                  logo: 'https://carpenteriapastro.it/pastro-logo.png',
                  founded: '1989',
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpenteriapastro.it' },
                    { '@type': 'ListItem', position: 2, name: 'Azienda', item: 'https://carpenteriapastro.it/azienda' },
                    { '@type': 'ListItem', position: 3, name: 'Lavorazioni', item: 'https://carpenteriapastro.it/lavorazioni' },
                    { '@type': 'ListItem', position: 4, name: 'Settori', item: 'https://carpenteriapastro.it/settori' },
                    { '@type': 'ListItem', position: 5, name: 'Progetti', item: 'https://carpenteriapastro.it/progetti' },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
