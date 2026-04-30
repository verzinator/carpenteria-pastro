import Image from 'next/image'
import { Lightbulb, Gauge, Handshake } from 'lucide-react'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovazione Continua',
    body: 'Investimento costante in tecnologie all\'avanguardia e processi produttivi avanzati per anticipare le esigenze del mercato e offrire soluzioni sempre più performanti.',
  },
  {
    icon: Gauge,
    title: 'Precisione Assoluta',
    body: 'Garanzia di massima qualità in ogni fase della lavorazione, grazie a macchinari a controllo numerico e competenze tecniche certificate che assicurano tolleranze millimetriche.',
  },
  {
    icon: Handshake,
    title: 'Attenzione al Cliente',
    body: 'Approccio personalizzato che accompagna il cliente dalla progettazione su misura alla consegna, con servizi di consulenza, rispetto dei tempi concordati e assistenza post-vendita.',
  },
]

export default function VisioneSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface-2)',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-32)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header — same pattern as homepage */}
        <div className="mb-16">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            Visione
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 4vw, 51px)',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Come lavoriamo, dove andiamo
          </h2>
        </div>

        {/* Split layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text + pillars */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10"
                    style={{
                      backgroundColor: 'rgba(27,79,138,0.15)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-primary-light)' }} />
                  </div>
                  <div>
                    <h4
                      className="font-display uppercase mb-1"
                      style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '0.08em' }}
                    >
                      {title}
                    </h4>
                    <p
                      className="font-body leading-relaxed"
                      style={{ fontSize: '14px', color: 'var(--color-accent-silver)', fontWeight: 300 }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative min-h-[440px] overflow-hidden" style={{ borderRadius: 'var(--radius-sm)' }}>
            <Image
              src="/immagini-pastro/Pastro_lamiere grandi dimensioni.png"
              alt="Lavorazioni lamiere grandi dimensioni Pastro carpenteria"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
