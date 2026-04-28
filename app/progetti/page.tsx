import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProgettiHero from '@/components/progetti/ProgettiHero'
import ProgettiGrid from '@/components/progetti/ProgettiGrid'
import NumeriStrip from '@/components/progetti/NumeriStrip'
import CTASection from '@/components/CTASection'
import PageRefresher from '@/components/PageRefresher'
import type { ProgettoItem } from '@/components/progetti/ProgettiGrid'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Progetti — Carpenteria Pastro',
  description: 'Portfolio di commesse realizzate: telai saldati, strutture metalliche, componenti per automazione, energia, agricoltura e logistica.',
}

const GROQ = encodeURIComponent(`*[_type == "progetto"] | order(_createdAt desc) {
  _id,
  titolo,
  "slug": slug.current,
  lavorazione,
  materialeLavorato,
  immagineCopertina
}`)

export default async function ProgettiPage() {
  let progetti: ProgettoItem[] = []
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    const res = await fetch(
      `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${GROQ}&returnQuery=false`,
      { cache: 'no-store' }
    )
    const data = await res.json()
    progetti = data.result ?? []
  } catch (e) {
    console.error('[ProgettiPage] fetch error:', e)
  }

  return (
    <>
      <PageRefresher />
      <NavBar />
      <main className="pt-16">
        <ProgettiHero />
        <ProgettiGrid progetti={progetti} />
        <NumeriStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
