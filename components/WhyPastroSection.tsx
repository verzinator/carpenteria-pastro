'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    n: '01',
    title: 'Lavorazioni di Grandi Dimensioni',
    body: 'Macchine piegatrici e per il taglio per lamiere, fino a 13 metri di lunghezza lineare.',
    img: '/immagini-pastro/Pastro_tecnologia.png',
    alt: 'Lavorazioni metalliche grandi dimensioni Pastro carpenteria',
  },
  {
    n: '02',
    title: 'Flessibilità Produttiva',
    body: 'Capacità dello staff organizzativo di fornire risposte in tempi estremamente rapidi, 48 ore dall\'ordine.',
    img: '/immagini-pastro/Pastro_lavorazione grandi dimensioni e pagina settori.png',
    alt: 'Produzione flessibile carpenteria metallica',
  },
  {
    n: '03',
    title: 'Rispetto Tempistiche e Scadenze',
    body: 'Pianificazione produttiva avanzata e sistema di priorità per garantire la puntualità delle consegne.',
    img: '/immagini-pastro/Pastro_dettagli lavoro.png',
    alt: 'Consegne puntuali carpenteria',
  },
  {
    n: '04',
    title: 'Consulenza Tecnica',
    body: 'Il nostro ufficio tecnico analizza i tuoi disegni e propone ottimizzazioni per ridurre costi e tempi.',
    img: '/immagini-pastro/Pastro_progetto.png',
    alt: 'Consulenza tecnica Pastro carpenteria metallica',
  },
  {
    n: '05',
    title: 'Esperienza',
    body: 'Consolidata in oltre 30 anni di attività tramandata in ogni singolo settore di lavorazione.',
    img: '/immagini-pastro/Pastro_tecnologia.png',
    alt: 'Esperienza storica carpenteria metallica',
  },
]

export default function WhyPastroSection() {
  const [open, setOpen] = useState('01')

  const active = reasons.find((r) => r.n === open) ?? reasons[0]

  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display mb-12"
          style={{
            fontSize: 'clamp(32px, 4vw, 51px)',
            fontWeight: 800,
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
          }}
        >
          Perché scegliere Pastro
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image — crossfades on open change */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '4/3',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              {reasons.map((r) => (
                <Image
                  key={r.n}
                  src={r.img}
                  alt={r.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  style={{ opacity: r.n === open ? 1 : 0 }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}
              {/* subtle blue tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(27,79,138,0.06)', mixBlendMode: 'multiply' }}
              />
            </div>
            {/* Offset border decoration */}
            <div
              className="absolute -z-10 -top-3 -left-3 w-full h-full"
              style={{ border: '1px solid rgba(77,143,212,0.12)' }}
            />
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3 order-1 lg:order-2">
            {reasons.map((r) => {
              const isOpen = open === r.n
              return (
                <button
                  key={r.n}
                  onClick={() => setOpen(r.n)}
                  className="text-left w-full p-6 transition-all duration-200"
                  style={{
                    backgroundColor: isOpen
                      ? 'var(--color-surface-2)'
                      : 'var(--color-surface)',
                    borderRadius: 'var(--radius-sm)',
                    border: isOpen
                      ? '1px solid rgba(77,143,212,0.4)'
                      : '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className="font-display font-bold tracking-tighter"
                        style={{
                          fontSize: 'clamp(17px, 1.5vw, 20px)',
                          color: isOpen
                            ? 'var(--color-primary-light)'
                            : 'rgba(77,143,212,0.35)',
                          transition: 'color 0.2s',
                        }}
                      >
                        {r.n}
                      </span>
                      <h4
                        className="font-display font-bold uppercase tracking-tight"
                        style={{
                          fontSize: 'clamp(13px, 1.2vw, 16px)',
                          color: isOpen ? 'var(--color-text)' : 'rgba(226,230,237,0.6)',
                          transition: 'color 0.2s',
                        }}
                      >
                        {r.title}
                      </h4>
                    </div>
                    <ChevronDown
                      size={15}
                      style={{
                        color: isOpen
                          ? 'var(--color-primary-light)'
                          : 'var(--color-text-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s, color 0.2s',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p
                      className="font-body leading-relaxed mt-4"
                      style={{
                        paddingLeft: '3.5rem',
                        fontSize: 'clamp(14px, 1vw, 16px)',
                        color: 'var(--color-text-muted)',
                        fontWeight: 300,
                      }}
                    >
                      {r.body}
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
