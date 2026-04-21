import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AziendaHero from '@/components/azienda/AziendaHero'
import StoriaSection from '@/components/azienda/StoriaSection'
import VisioneSection from '@/components/azienda/VisioneSection'
import EvoluzioneProduttivaSection from '@/components/azienda/EvoluzioneProduttivaSection'
import PersoneSection from '@/components/azienda/PersoneSection'
import CertificazioniSection from '@/components/azienda/CertificazioniSection'
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
        <StoriaSection />
        <VisioneSection />
        <EvoluzioneProduttivaSection />
        <PersoneSection />
        <CertificazioniSection />
      </main>
      <Footer />
    </>
  )
}
