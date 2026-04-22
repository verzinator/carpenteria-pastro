import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import LavorazioniHero from '@/components/lavorazioni/LavorazioniHero'
import IntroSection from '@/components/lavorazioni/IntroSection'
import ServiziSection from '@/components/lavorazioni/ServiziSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lavorazioni — Carpenteria Pastro',
  description:
    'Taglio laser, piegatura CNC, saldatura certificata e lavorazioni meccaniche di precisione. Carpenteria Pastro: il partner tecnico per la lavorazione dell\'acciaio.',
}

export default function LavorazioniPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <LavorazioniHero />
        <IntroSection />
        <ServiziSection />
      </main>
      <Footer />
    </>
  )
}
