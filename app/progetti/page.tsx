import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProgettiHero from '@/components/progetti/ProgettiHero'
import ProgettiGrid from '@/components/progetti/ProgettiGrid'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Progetti — Carpenteria Pastro',
  description:
    'Progetti realizzati di carpenteria metallica industriale. Scopri le nostre realizzazioni in strutture metalliche, impianti e automazione.',
}

export default function ProgettiPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <ProgettiHero />
        <Suspense fallback={<div className="text-center py-20">Caricamento progetti...</div>}>
          <ProgettiGrid />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
