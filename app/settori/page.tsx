import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SettoriHero from '@/components/settori/SettoriHero'
import AccordionSection from '@/components/settori/AccordionSection'
import SettoriCTA from '@/components/settori/SettoriCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settori — Carpenteria Pastro',
  description:
    'Carpenteria metallica industriale per macchine e impianti, strutture metalliche, automazione, energia, agricoltura e logistica. Partner tecnico specializzato.',
}

export default function SettoriPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <SettoriHero />
        <AccordionSection />
        <SettoriCTA />
      </main>
      <Footer />
    </>
  )
}
