'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    n: '01',
    quote:
      '"Pastro è diventato un partner strategico. La precisione dei loro tagli laser ci ha permesso di ridurre i tempi di montaggio del 15% garantendo standard eccellenti."',
    author: 'Ing. Marco Riva',
    role: 'Production Manager',
  },
  {
    n: '02',
    quote:
      '"La flessibilità produttiva di Pastro è eccezionale. In tre settimane ci hanno consegnato 200 incastellature pesanti rispettando ogni tolleranza progettuale."',
    author: 'Dott.ssa Laura Bianchi',
    role: 'Head of Procurement',
  },
  {
    n: '03',
    quote:
      '"Collaboriamo con Pastro da 8 anni. La loro consulenza tecnica preventiva ha ottimizzato il design di componenti chiave riducendo gli scarti del 22%."',
    author: 'Arch. Simone De Luca',
    role: 'Technical Director',
  },
]

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)' }}
      className="py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24">
          {/* Large number */}
          <div className="w-full md:w-1/4 select-none">
            <span
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(80px, 12vw, 180px)',
                fontWeight: 900,
                color: 'rgba(226,230,237,0.04)',
              }}
            >
              {t.n}
            </span>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4 space-y-10">
            <div>
              <div
                className="font-body font-medium uppercase mb-4"
                style={{ fontSize: '12px', letterSpacing: '0.3em', color: 'var(--color-primary-light)' }}
              >
                Dicono di noi
              </div>
              <p
                className="font-display font-medium leading-snug"
                style={{
                  fontSize: 'clamp(20px, 3vw, 34px)',
                  color: 'var(--color-text)',
                  maxWidth: '60ch',
                }}
              >
                {t.quote}
              </p>
            </div>

            {/* Author */}
            <div>
              <h4
                className="font-display font-bold uppercase tracking-wider"
                style={{ fontSize: '14px', color: 'var(--color-text)' }}
              >
                {t.author}
              </h4>
              <p
                className="font-body font-medium uppercase mt-1"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-muted)',
                }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="flex items-center justify-between mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-6">
            {/* Progress bar */}
            <div
              className="relative h-px w-48"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div
                className="absolute inset-y-0 left-0 transition-all duration-300"
                style={{
                  width: `${((idx + 1) / testimonials.length) * 100}%`,
                  backgroundColor: 'var(--color-primary-light)',
                }}
              />
            </div>
            <span
              className="font-body font-medium uppercase select-none"
              style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--color-text-muted)' }}
            >
              {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex gap-4">
            {[
              { dir: -1, Icon: ChevronLeft },
              { dir: 1, Icon: ChevronRight },
            ].map(({ dir, Icon }) => (
              <button
                key={dir}
                onClick={() =>
                  setIdx((prev) => (prev + dir + testimonials.length) % testimonials.length)
                }
                className="w-12 h-12 flex items-center justify-center transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    'var(--color-primary-light)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(255,255,255,0.1)')
                }
              >
                <Icon size={16} style={{ color: 'var(--color-text-muted)' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
