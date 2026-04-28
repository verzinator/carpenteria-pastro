import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import BackButton from '@/components/BackButton'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Progetto = {
  _id: string
  titolo: string
  slug: string
  lavorazione?: string | string[]
  materialeLavorato?: string
  anno?: number
  cliente?: string
  descrizioneProgetto?: string
  immagineCopertina?: { asset: { _ref: string } }
  immaginiProgetto?: { asset: { _ref: string } }[]
}

const query = `*[_type == "progetto" && slug.current == $slug][0] {
  _id,
  titolo,
  "slug": slug.current,
  lavorazione,
  materialeLavorato,
  anno,
  cliente,
  descrizioneProgetto,
  immagineCopertina,
  immaginiProgetto
}`

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p: Progetto | null = await client.fetch(query, { slug })
  if (!p) return { title: 'Progetto — Carpenteria Pastro' }
  return {
    title: `${p.titolo} — Carpenteria Pastro`,
    description: p.descrizioneProgetto,
  }
}

export default async function ProgettoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p: Progetto | null = await client.fetch(query, { slug })
  if (!p) notFound()

  const coverUrl = p.immagineCopertina
    ? urlFor(p.immagineCopertina).width(1600).height(900).url()
    : null

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Hero image */}
        {coverUrl && (
          <div className="relative w-full" style={{ height: 'clamp(300px, 50vw, 560px)' }}>
            <Image
              src={coverUrl}
              alt={p.titolo}
              fill
              className="object-cover brightness-75"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 60%)',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div
          className="container mx-auto px-6 md:px-12 max-w-5xl"
          style={{ paddingTop: coverUrl ? 'var(--space-12)' : '120px', paddingBottom: 'var(--space-24)' }}
        >
          {/* Back link */}
          <BackButton href="/progetti" label="Tutti i progetti" />

          {/* Lavorazione tags */}
          {p.lavorazione && (Array.isArray(p.lavorazione) ? p.lavorazione.length > 0 : true) && (
            <div className="mb-4 flex flex-wrap gap-2">
              {(Array.isArray(p.lavorazione) ? p.lavorazione : [p.lavorazione]).map((tag) => (
                <span
                  key={tag}
                  className="font-body font-medium uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: 'var(--color-primary-light)',
                    padding: '4px 10px',
                    border: '1px solid var(--color-primary-light)',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(77,143,212,0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 900,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 'var(--space-8)',
            }}
          >
            {p.titolo}
          </h1>

          {/* Specs row */}
          {(p.lavorazione || p.materialeLavorato || p.anno || p.cliente) && (
            <div
              className="flex flex-wrap gap-8 mb-10 pt-6"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              {p.lavorazione && (Array.isArray(p.lavorazione) ? p.lavorazione.length > 0 : true) && (
                <div className="flex flex-col gap-1">
                  <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}>
                    Lavorazione
                  </span>
                  <span className="font-body" style={{ fontSize: '13px', color: 'var(--color-text)', fontFamily: 'monospace' }}>
                    {Array.isArray(p.lavorazione) ? p.lavorazione.join(', ') : p.lavorazione}
                  </span>
                </div>
              )}
              {p.materialeLavorato && (
                <div className="flex flex-col gap-1">
                  <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}>
                    Materiale
                  </span>
                  <span className="font-body" style={{ fontSize: '13px', color: 'var(--color-text)', fontFamily: 'monospace' }}>
                    {p.materialeLavorato}
                  </span>
                </div>
              )}
              {p.anno && (
                <div className="flex flex-col gap-1">
                  <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}>
                    Anno
                  </span>
                  <span className="font-body" style={{ fontSize: '13px', color: 'var(--color-text)', fontFamily: 'monospace' }}>
                    {p.anno}
                  </span>
                </div>
              )}
              {p.cliente && (
                <div className="flex flex-col gap-1">
                  <span className="font-body uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--color-text-muted)' }}>
                    Cliente
                  </span>
                  <span className="font-body" style={{ fontSize: '13px', color: 'var(--color-text)', fontFamily: 'monospace' }}>
                    {p.cliente}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {p.descrizioneProgetto && (
            <p
              className="font-body leading-relaxed mb-12"
              style={{
                fontSize: 'clamp(15px, 1vw, 17px)',
                color: 'var(--color-accent-silver)',
                maxWidth: '65ch',
                fontWeight: 300,
              }}
            >
              {p.descrizioneProgetto}
            </p>
          )}

          {/* Additional images */}
          {p.immaginiProgetto && p.immaginiProgetto.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.immaginiProgetto.map((img, i) => (
                <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-md)' }}>
                  <Image
                    src={urlFor(img).width(800).height(600).url()}
                    alt={`${p.titolo} — immagine ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
