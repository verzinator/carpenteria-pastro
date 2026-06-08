import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface SanityImage {
  asset: { _ref: string }
}

interface Progetto {
  _id: string
  titolo: string
  slug: { current: string }
  immagineCopertina?: SanityImage
  descrizioneProgetto?: string
  anno?: number
  cliente?: string
  lavorazione?: string
  materialeLavorato?: string
  settore?: string
  immaginiProgetto?: SanityImage[]
}

async function getProgetto(slug: string): Promise<Progetto | null> {
  const query = `*[_type == "progetto" && slug.current == $slug][0] {
    _id, titolo, slug, immagineCopertina, descrizioneProgetto,
    anno, cliente, lavorazione, materialeLavorato, settore, immaginiProgetto
  }`
  return sanityFetch({ query, params: { slug }, tags: ['progetti'] })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const progetto = await getProgetto(slug)
  if (!progetto) return {}
  return {
    title: `${progetto.titolo} — Carpenteria Pastro`,
    description: progetto.descrizioneProgetto,
  }
}

export default async function ProgettoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const progetto = await getProgetto(slug)
  if (!progetto) notFound()

  const meta = [
    progetto.anno && { label: 'Anno', value: String(progetto.anno) },
    progetto.cliente && { label: 'Cliente', value: progetto.cliente },
    progetto.settore && { label: 'Settore', value: progetto.settore },
    progetto.lavorazione && { label: 'Lavorazione', value: progetto.lavorazione },
    progetto.materialeLavorato && { label: 'Materiale', value: progetto.materialeLavorato },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <NavBar />
      <main>
        {/* Hero immagine copertina full width */}
        {progetto.immagineCopertina && (
          <div className="relative w-full" style={{ height: 'clamp(320px, 55vw, 700px)', marginTop: '64px' }}>
            <Image
              src={urlFor(progetto.immagineCopertina).url()}
              alt={progetto.titolo}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(10,11,13,0.35)' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,11,13,0.9) 100%)' }}
            />
          </div>
        )}

        {/* Titolo + back */}
        <div className="px-6 md:px-12 pt-12 pb-0 max-w-[1440px] mx-auto">
          <a
            href="/progetti"
            className="inline-flex items-center gap-2 mb-8 font-body text-xs font-medium uppercase tracking-widest transition-colors"
            style={{ color: 'var(--color-text-faint)', letterSpacing: '0.15em' }}
          >
            ← Tutti i progetti
          </a>
          <h1
            className="font-display font-black mb-0"
            style={{
              fontSize: 'clamp(36px, 5vw, 80px)',
              lineHeight: '1.05',
              color: 'var(--color-text)',
            }}
          >
            {progetto.titolo}
          </h1>
        </div>

        {/* Contenuto */}
        <div className="px-6 md:px-12 py-16 max-w-[1440px] mx-auto">

          {/* Metadata in riga */}
          {meta.length > 0 && (
            <div
              className="flex flex-wrap gap-x-12 gap-y-6 mb-12 pb-12"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              {meta.map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="font-body text-xs font-medium uppercase tracking-widest mb-1"
                    style={{ color: 'var(--color-text-faint)', letterSpacing: '0.15em' }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-body text-sm"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Descrizione */}
          {progetto.descrizioneProgetto && (
            <p
              className="font-body font-light leading-relaxed mb-20"
              style={{
                fontSize: 'clamp(15px, 1vw, 17px)',
                color: 'var(--color-text-muted)',
                maxWidth: '65ch',
              }}
            >
              {progetto.descrizioneProgetto}
            </p>
          )}

          {/* Galleria immagini */}
          {progetto.immaginiProgetto && progetto.immaginiProgetto.length > 0 && (
            <div>
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-8"
                style={{ color: 'var(--color-text-faint)', letterSpacing: '0.15em' }}
              >
                Galleria
              </p>
              <div className="flex flex-col gap-4">
                {progetto.immaginiProgetto.map((img, i) => (
                  <Image
                    key={i}
                    src={urlFor(img).url()}
                    alt={`${progetto.titolo} — foto ${i + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
