import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { client, urlFor } from '@/lib/sanity'

type ProgettoItem = {
  _id: string
  titolo: string
  slug?: string
  lavorazione?: string | string[]
  immagineCopertina?: { asset: { _ref: string } }
}

function ProjectCard({
  titulo,
  lavorazione,
  img,
  alt,
}: {
  titulo: string
  lavorazione?: string | string[]
  img: string | null
  alt: string
}) {
  const tags = Array.isArray(lavorazione) ? lavorazione : (lavorazione ? [lavorazione] : [])

  return (
    <div
      className="group relative overflow-hidden h-full"
      style={{ borderRadius: 'var(--radius-sm)', minHeight: '280px' }}
    >
      {img ? (
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <div className="w-full h-full" style={{ backgroundColor: 'var(--color-surface-3)' }} />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
        }}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        {tags.length > 0 && (
          <div
            className="font-body font-medium uppercase mb-2 flex flex-wrap gap-2"
            style={{
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--color-primary-light)',
            }}
          >
            {tags.slice(0, 1).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <h3
          className="font-display"
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 700,
            color: 'var(--color-text)',
          }}
        >
          {titulo}
        </h3>
      </div>
    </div>
  )
}

export default async function PortfolioSection() {
  let progetti: ProgettoItem[] = []

  try {
    const query = `*[_type == "progetto"] | order(_createdAt desc)[0..3] {
      _id,
      titolo,
      "slug": slug.current,
      lavorazione,
      immagineCopertina
    }`
    progetti = await client.fetch(query)
  } catch (err) {
    console.error('[PortfolioSection] Fetch error:', err)
  }
  return (
    <section
      id="portfolio"
      style={{ backgroundColor: 'var(--color-surface)' }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="text-center">
            <h2
              className="font-display mb-3"
              style={{
                fontSize: 'clamp(32px, 4vw, 51px)',
                fontWeight: 800,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              I nostri Progetti
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: 'clamp(15px, 1vw, 17px)',
                color: 'var(--color-accent-silver)',
                fontWeight: 300,
                maxWidth: '55ch',
              }}
            >
              Scopri i progetti realizzati per i nostri clienti. Dal design alla realizzazione, ogni commessa è una sfida che affrontiamo con dedizione.
            </p>
          </div>
          <a
            href="/progetti"
            className="inline-flex items-center gap-2 font-display font-semibold uppercase group transition-all duration-200"
            style={{
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: 'var(--color-primary-light)',
              padding: '10px 24px',
              border: '1px solid rgba(77,143,212,0.3)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            Scopri Tutti
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[360px]">
          {progetti.map((p) => {
            const imgUrl = p.immagineCopertina
              ? urlFor(p.immagineCopertina).width(600).height(360).url()
              : null

            return (
              <ProjectCard
                key={p._id}
                titulo={p.titolo}
                lavorazione={p.lavorazione}
                img={imgUrl}
                alt={p.titolo}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
