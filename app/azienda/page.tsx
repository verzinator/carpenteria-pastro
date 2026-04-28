import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AziendaHero from '@/components/azienda/AziendaHero'
import TimelineSection from '@/components/azienda/TimelineSection'
import VisioneSection from '@/components/azienda/VisioneSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azienda — Carpenteria Pastro',
  description:
    'Oltre 30 anni di precisione nella carpenteria metallica industriale. Storia, visione, tecnologia e le persone che rendono Pastro un partner tecnico d\'eccellenza.',
}

export default function AziendaPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <AziendaHero />
        <TimelineSection />
        <VisioneSection />
      </main>
      <Footer />
    </>
  )
}
