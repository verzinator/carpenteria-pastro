'use client'

import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from '@/lib/sanity'

export type ProgettoItem = {
  _id: string
  titolo: string
  slug?: string
  lavorazione?: string[]
  materialeLavorato?: string
  immagineCopertina?: { asset: { _ref: string } }
}

export default function ProgettiGrid({ progetti }: { progetti: ProgettoItem[] }) {
  const [activeFilter, setActiveFilter] = useState('Tutti')

  const categorie = [
    'Macchinari industriali per sollevamento',
    'Macchine movimento terra',
    'Macchine lavorazioni pietra',
    'Linee di automazione industriale',
  ]
  const filtri = ['Tutti', ...categorie]

  const filtered = activeFilter === 'Tutti'
    ? progetti
    : progetti.filter((p) => p.lavorazione && p.lavorazione.includes(activeFilter))

  return (
    <section style={{ backgroundColor: 'var(--color-bg)', paddingBottom: 'var(--space-24)' }}>
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: '24px 0',
          marginBottom: 'var(--space-16)',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-wrap gap-2 justify-center">
          {filtri.map((f) => {
            const active = activeFilter === f
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="font-body font-medium uppercase transition-all duration-200"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: active ? '1px solid var(--color-primary-light)' : '1px solid var(--color-border)',
                  backgroundColor: active ? 'rgba(77,143,212,0.1)' : 'transparent',
                  color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                }}
              >
                {f}
              </button>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {filtered.length === 0 ? (
          <p className="font-body text-center" style={{ color: 'var(--color-text-muted)', fontSize: '14px', padding: 'var(--space-16) 0' }}>
            Nessun progetto trovato.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const imgUrl = p.immagineCopertina
                ? urlFor(p.immagineCopertina).width(800).height(600).url()
                : null

              const card = (
                <div
                  className="group flex flex-col overflow-hidden transition-all duration-300 h-full"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translate(-3px, -3px)'
                    el.style.boxShadow = '3px 3px 0 0 var(--color-primary-light)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translate(0, 0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={p.titolo}
                        fill
                        className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full" style={{ backgroundColor: 'var(--color-surface-3)' }} />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-grow">
                    <div className="flex gap-2 flex-wrap">
                      {p.lavorazione && p.lavorazione.map((tag) => (
                        <span key={tag} className="font-body font-medium uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--color-primary-light)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                      {p.titolo}
                    </h3>
                  </div>
                </div>
              )

              return p.slug ? (
                <a key={p._id} href={`/progetti/${p.slug}`} style={{ display: 'block', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
                  {card}
                </a>
              ) : (
                <div key={p._id}>{card}</div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
