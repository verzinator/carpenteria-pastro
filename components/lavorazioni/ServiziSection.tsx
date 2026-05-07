'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const servizi = [
  {
    num: '01',
    slug: 'TAGLIO LASER E PUNZONATURA',
    title: 'Taglio Laser e Punzonatura',
    body: 'Taglio laser su ferro fino a 15 mm di spessore con lunghezze fino a 12 metri. Taglio laser combinato con punzonatura per geometrie complesse. Taglio plasma fino a 60 mm di spessore per lunghezze fino a 8 metri.',
    specs: 'Taglio laser ferro 15 mm, Taglio laser + punzonatura, Taglio plasma 60 mm, Lunghezze max: 12–8 m',
    img: '/immagini-pastro/Pastro_taglio plasma.png',
    alt: 'Taglio laser acciaio punzonatura Pastro carpenteria',
    reverse: false,
    highlight: false,
  },
  {
    num: '02',
    slug: 'PIEGATURA',
    title: 'Piegatura',
    body: 'Piegatura su 5 presso-piegatrici fino a 600 tonnellate di potenza. Riusciamo ad eseguire piegati fino a 13 metri di lunghezza. Capacità di piegare lamiera 15 mm per lunghezze fino a 5,3 metri con precisione assoluta.',
    specs: 'Presso-piegatrici: 5 unità, Potenza max: 600 ton, Lunghezza max pieghe: 13 m, Spessore max: 15 mm',
    img: '/immagini-pastro/Pastro_piegatura grandi dimensioni.png',
    alt: 'Pressa piegatrice Pastro carpenteria metallica',
    reverse: true,
    highlight: true,
  },
  {
    num: '03',
    slug: 'CALANDRATURA',
    title: 'Calandratura',
    body: 'Calandratura a 4 rulli fino a 2 metri di larghezza. Lavorazione per curve e bombature su componenti di grande formato con omogeneità di forma e finitura superficiale controllata.',
    specs: 'Calandratura: 4 rulli, Larghezza max: 2 m, Materiali: Acciaio al carbonio, Inox, Alluminio',
    img: '/immagini-pastro/Calandratura.jpg',
    alt: 'Calandratura Pastro carpenteria acciaio',
    reverse: false,
    highlight: false,
  },
  {
    num: '04',
    slug: 'SALDATURA',
    title: 'Saldatura',
    body: 'Saldatura su saldatrici Migatronic e OTC di nuova generazione con banchi da saldature Siegmund. Giunzioni strutturali certificate per assemblaggi di precisione su acciaio al carbonio, inox e alluminio.',
    specs: 'Saldatrici: Migatronic, OTC, Banchi: Siegmund, Certificazioni: ISO 3834, EN 1090',
    img: '/immagini-pastro/Pastro_saldatura in azione.png',
    alt: 'Saldatura industriale Pastro carpenteria',
    reverse: true,
    highlight: false,
  },
]

export default function ServiziSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return
      const viewCenter = window.innerHeight / 2
      let closest = -1
      let minDist = Infinity
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const dist = Math.abs(cardCenter - viewCenter)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActiveIndex(closest)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section
      style={{ backgroundColor: 'var(--color-bg)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-12">
        {servizi.map((s, i) => (
          <div
            key={s.num}
            ref={(el) => { cardRefs.current[i] = el }}
            className={`group flex flex-col ${s.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start md:items-center transition-all duration-300 p-6 md:p-8 lg:p-10`}
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              border: isMobile && activeIndex === i
                ? '1px solid rgba(77,143,212,0.64)'
                : '1px solid var(--color-border)',
            }}
            onMouseEnter={(e) => {
              if (isMobile) return
              ;(e.currentTarget as HTMLElement).style.border = '1px solid rgba(77,143,212,0.64)'
            }}
            onMouseLeave={(e) => {
              if (isMobile) return
              ;(e.currentTarget as HTMLElement).style.border = '1px solid var(--color-border)'
            }}
          >
            {/* Text */}
            <div className="flex-1 space-y-5">
              <span
                className="font-body font-medium uppercase block"
                style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-primary-light)' }}
              >
                {s.num}
              </span>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 800,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {s.title}
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{
                  fontSize: '16px',
                  color: 'var(--color-accent-silver)',
                  fontWeight: 300,
                }}
              >
                {s.body}
              </p>
              <p
                className="font-body uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'monospace',
                  paddingTop: '8px',
                }}
              >
                {s.specs}
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:flex-1 relative overflow-hidden" style={{ height: 'clamp(240px, 55vw, 380px)', borderRadius: 'var(--radius-md)' }}>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
