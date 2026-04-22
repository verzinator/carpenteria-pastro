'use client'

import { Cpu, Ruler, Zap, Puzzle } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Taglio Laser',
    description:
      'Soluzioni di taglio laser ad alta precisione su lamiere e profili metallici fino a 40mm di spessore, con tolleranze di ±0,1mm.',
  },
  {
    icon: Ruler,
    title: 'Piegatura',
    description:
      'Piegatura a freddo su presse piegatrici CNC fino a 13 metri di lunghezza utile.',
  },
  {
    icon: Zap,
    title: 'Saldatura',
    description:
      '5 postazioni di saldatura a filo, …. (testo completo da aggiornare)',
  },
  {
    icon: Puzzle,
    title: 'Assemblaggio',
    description:
      'Ampi spazi dedicati all\'assemblaggio di lavorazioni complesse e di grandi dimensioni, per garantire una consegna puntale con la massima qualità.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="servizi"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
      }}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <div
            className="font-body font-medium uppercase mb-4"
            style={{
              fontSize: '12px',
              letterSpacing: '0.15em',
              color: 'var(--color-primary-light)',
            }}
          >
            Workflow
          </div>
          <h2
            className="font-display mb-3"
            style={{
              fontSize: 'clamp(32px, 4vw, 51px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            I Nostri Servizi
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: 'clamp(15px, 1vw, 17px)',
              color: 'var(--color-text-muted)',
              maxWidth: '60ch',
              fontWeight: 300,
            }}
          >
            Integrazione verticale completa per garantire qualità e tempi certi in ogni
            fase produttiva.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{
            borderLeft: '1px solid var(--color-border)',
            borderRight: '1px solid var(--color-border)',
          }}
        >
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isLast = i === services.length - 1
            return (
              <div
                key={svc.title}
                className="p-10 transition-colors duration-200 group"
                style={{
                  borderBottom: 'none',
                  borderRight: isLast
                    ? 'none'
                    : '1px dashed rgba(37,40,48,0.8)',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    'var(--color-surface-2)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = '')
                }
              >
                <Icon
                  size={28}
                  style={{ color: 'var(--color-primary-light)', marginBottom: '48px' }}
                />
                <div className="space-y-4">
                  <h3
                    className="font-display uppercase leading-tight"
                    style={{
                      fontSize: 'clamp(19px, 2vw, 26px)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: 'clamp(15px, 1vw, 17px)',
                      color: 'var(--color-text-muted)',
                      fontWeight: 300,
                    }}
                  >
                    {svc.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
