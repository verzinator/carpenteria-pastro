import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContattiHero from '@/components/contatti/ContattiHero'
import ContattiContent from '@/components/contatti/ContattiContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti — Carpenteria Pastro',
  description: 'Contattaci per un preventivo o per inviare i tuoi disegni tecnici. Rispondiamo entro 48 ore lavorative.',
}

export default function ContattiPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <ContattiHero />
        <ContattiContent />
      </main>
      <Footer />
    </>
  )
}
