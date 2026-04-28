'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelinePhase {
  phase: string
  items: TimelineItem[]
}

const timelineData: TimelinePhase[] = [
  {
    phase: 'Le Origini e i Primi Passi',
    items: [
      { year: '1987', title: 'Fondazione', description: 'L\'azienda nasce ad Albaredo di Vedelago grazie alla visione e al solido bagaglio tecnico del fondatore Luigi Pastro, che trae le proprie radici ed esperienza professionale dal settore dei carriponte e degli impianti di sollevamento.' },
      { year: '1994', title: 'Il primo salto tecnologico', description: 'La capacità produttiva compie un passo in avanti con l\'investimento nella prima pressa piegatrice, una Gasparini PSG da 120 tonnellate, segnando l\'inizio di una specializzazione sempre più precisa nella deformazione della lamiera.' },
    ],
  },
  {
    phase: 'Il Consolidamento e l\'Innovazione',
    items: [
      { year: '1998', title: 'Espansione strutturale', description: 'L\'azienda inaugura la propria sede operativa in via del Lavoro n. 8 a Vedelago, garantendo spazi più ampi e funzionali per far fronte alla crescente domanda.' },
      { year: '2000', title: 'Il cambio generazionale e la digitalizzazione', description: 'Entra in azienda Manuel Pastro, figlio del fondatore. Il suo ingresso imprime una svolta decisiva: porta in officina nuove visioni e spinge con forza sull\'innovazione tecnologica. In questo stesso anno, l\'acquisto del primo impianto di taglio plasma (CR 4000x1500) segna l\'avvio della transizione verso processi automatizzati.' },
    ],
  },
  {
    phase: 'L\'Ascesa Industriale e lo Sviluppo Sostenibile',
    items: [
      { year: '2004', title: 'Incremento della capacità', description: 'Si realizza un importante ampliamento della sede produttiva e un significativo potenziamento del parco macchine, consolidando la posizione dell\'azienda sul mercato.' },
      { year: '2010', title: 'L\'impegno verso il Green', description: 'La lungimiranza della dirigenza si riflette nell\'attenzione all\'ambiente con l\'installazione del primo impianto fotovoltaico, integrando la sostenibilità nel ciclo produttivo.' },
      { year: '2011', title: 'L\'era del Laser', description: 'La tecnologia di taglio compie un salto di qualità con l\'acquisto del primo impianto di taglio laser per lamiera, garantendo standard di precisione e flessibilità superiori.' },
      { year: '2013', title: 'Raggiungimento della maturità', description: 'La sede produttiva viene ulteriormente ampliata, raggiungendo una superficie complessiva di 3.300 mq, ottimizzando i flussi di lavoro e lo stoccaggio.' },
    ],
  },
  {
    phase: 'L\'Eccellenza Tecnologica Contemporanea',
    items: [
      { year: '2016', title: 'Grande formato', description: 'Viene acquistato un performante impianto di taglio laser da 12.000x2.500 mm, permettendo alla carpenteria di gestire lavorazioni su dimensioni fuori standard.' },
      { year: '2017', title: 'Potenziamento della piegatura', description: 'Prosegue l\'aggiornamento tecnologico con l\'ingresso di una pressa da 600 tonnellate, capace di affrontare spessori e geometrie complesse.' },
      { year: '2018', title: 'Rinnovo funzionale', description: 'Completata la realizzazione dei nuovi uffici, pensati per accogliere al meglio il personale amministrativo e tecnico in un ambiente moderno.' },
      { year: '2019', title: 'Efficienza energetica raddoppiata', description: 'Viene installato il secondo impianto fotovoltaico, confermando l\'impegno costante dell\'azienda verso l\'autosufficienza energetica e la riduzione dell\'impronta carbonica.' },
    ],
  },
]

export default function TimelineSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeItemId, setActiveItemId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      const timelineRect = timelineRef.current.getBoundingClientRect()
      const timelineHeight = timelineRect.height
      const viewportCenter = window.innerHeight / 2

      // Line progress: based on timeline container only (excludes header)
      const progress = Math.max(0, Math.min(1, (viewportCenter - timelineRect.top) / timelineHeight))
      setScrollProgress(progress)

      // Active item: the last item whose center is above (or at) viewport center
      // Uses live getBoundingClientRect() — always accurate, no stale measurements
      let bestId: string | null = null
      let bestDist = Infinity
      itemRefs.current.forEach((el, id) => {
        const rect = el.getBoundingClientRect()
        const itemCenter = rect.top + rect.height / 2
        if (itemCenter <= viewportCenter) {
          const dist = viewportCenter - itemCenter
          if (dist < bestDist) {
            bestDist = dist
            bestId = id
          }
        }
      })
      setActiveItemId(bestId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} style={{ backgroundColor: 'var(--color-bg)', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-32)' }}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-20">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            La nostra storia
          </span>
          <h2
            className="font-display mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 51px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            L'Evoluzione della Carpenteria Pastro
          </h2>
          <p
            className="font-body"
            style={{ fontSize: 'clamp(15px, 1vw, 17px)', color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.6, maxWidth: '65ch' }}
          >
            Il percorso della Carpenteria Pastro è una storia di crescita costante, guidata dall'esperienza, dall'innovazione tecnologica e dalla capacità di anticipare le esigenze del mercato della lavorazione della lamiera.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line — mobile: left-4 (16px), desktop: centered */}
          <div className="absolute md:left-1/2 left-4 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 z-0">
            <div className="absolute inset-0 w-full" style={{ backgroundColor: 'var(--color-border)' }} />
            <div
              className="absolute inset-x-0 top-0 w-full transition-all duration-150"
              style={{
                height: `${scrollProgress * 100}%`,
                backgroundColor: 'var(--color-primary-light)',
                boxShadow: '0 0 15px rgba(77, 143, 212, 0.6)',
              }}
            />
          </div>

          {/* Phases */}
          <div className="space-y-16 relative z-10">
            {timelineData.map((phase, phaseIdx) => (
              <div key={phaseIdx}>
                {/* Phase title */}
                <div className="relative mb-12 md:text-center">
                  <h3
                    className="font-display md:inline-block md:px-8 md:py-4 rounded-lg block pl-10 md:pl-0"
                    style={{
                      fontSize: 'clamp(24px, 5vw, 40px)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      letterSpacing: '-0.02em',
                      backgroundColor: 'var(--color-bg)',
                    }}
                  >
                    {phase.phase}
                  </h3>
                </div>

                <div className="space-y-8">
                  {phase.items.map((item, itemIdx) => {
                    const itemId = `${phaseIdx}-${itemIdx}`
                    const isDotActive = activeItemId === itemId
                    const isCardActive = activeItemId === itemId

                    return (
                      <div
                        key={itemId}
                        data-id={itemId}
                        ref={(el) => { if (el) itemRefs.current.set(itemId, el) }}
                        className="relative"
                      >
                        <div className="flex md:flex-row flex-row relative">
                          {/* Desktop left */}
                          <div className="hidden md:block md:w-1/2 md:pr-8 lg:pr-12">
                            {itemIdx % 2 === 0 && (
                              <div
                                className="p-6 rounded-lg transition-all duration-150 text-right"
                                style={{
                                  backgroundColor: isCardActive ? 'rgba(27, 79, 138, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                  border: isCardActive ? '1px solid rgba(77, 143, 212, 0.4)' : '1px solid var(--color-border)',
                                }}
                              >
                                <span className="font-body font-semibold uppercase block mb-2" style={{ fontSize: '13px', letterSpacing: '0.1em', color: 'var(--color-primary-light)' }}>
                                  {item.year}
                                </span>
                                <h4 className="font-display mb-2" style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'var(--color-text)' }}>
                                  {item.title}
                                </h4>
                                <p className="font-body" style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.5 }}>
                                  {item.description}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Spacer for line */}
                          <div className="hidden md:block md:w-0" />

                          {/* Right (desktop odd only) + Mobile (all) */}
                          <div className="md:w-1/2 md:pl-8 lg:pl-12 w-full pl-10">
                            {/* Desktop: odd items only */}
                            {itemIdx % 2 === 1 && (
                              <div className="hidden md:block">
                                <div
                                  className="p-6 rounded-lg transition-all duration-150"
                                  style={{
                                    backgroundColor: isCardActive ? 'rgba(27, 79, 138, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                    border: isCardActive ? '1px solid rgba(77, 143, 212, 0.4)' : '1px solid var(--color-border)',
                                  }}
                                >
                                  <span className="font-body font-semibold uppercase block mb-2" style={{ fontSize: '13px', letterSpacing: '0.1em', color: 'var(--color-primary-light)' }}>
                                    {item.year}
                                  </span>
                                  <h4 className="font-display mb-2" style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'var(--color-text)' }}>
                                    {item.title}
                                  </h4>
                                  <p className="font-body" style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.5 }}>
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Mobile: all items */}
                            <div className="md:hidden">
                              <div
                                className="p-6 rounded-lg transition-all duration-150"
                                style={{
                                  backgroundColor: isCardActive ? 'rgba(27, 79, 138, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                                  border: isCardActive ? '1px solid rgba(77, 143, 212, 0.4)' : '1px solid var(--color-border)',
                                }}
                              >
                                <span className="font-body font-semibold uppercase block mb-2" style={{ fontSize: '13px', letterSpacing: '0.1em', color: 'var(--color-primary-light)' }}>
                                  {item.year}
                                </span>
                                <h4 className="font-display mb-2" style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: 'var(--color-text)' }}>
                                  {item.title}
                                </h4>
                                <p className="font-body" style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 300, lineHeight: 1.5 }}>
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
