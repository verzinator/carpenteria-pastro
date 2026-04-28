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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqBxiSgStyztx9cfVGphQZ2RVol_WT2ObK8nE4nJrJDenPq604EMEuWzJh2xDqLU0WzKQ_E7OjoWn1wY9AvahQG-o-ocNE0cJtuFOaOO4Kf6Mm0A_Ji9YTCNfBUkM8cu0ys9APymDisaY4k3iwRPzP5lugT7a2DMMlIk0Y9UIAL-aR__PJYwXC9fnAD90pwDkAt2-uA34XPa83RDO51iN66lKd4Sg_M5QHLlY3d6psXNt8OWTYFOMGRag8Cu2-IKsngANXwqpQw',
    alt: 'Taglio laser acciaio e punzonatura',
    reverse: false,
    highlight: false,
  },
  {
    num: '02',
    slug: 'PIEGATURA',
    title: 'Piegatura',
    body: 'Piegatura su 5 presso-piegatrici fino a 600 tonnellate di potenza. Riusciamo ad eseguire piegati fino a 13 metri di lunghezza. Capacità di piegare lamiera 15 mm per lunghezze fino a 5,3 metri con precisione assoluta.',
    specs: 'Presso-piegatrici: 5 unità, Potenza max: 600 ton, Lunghezza max pieghe: 13 m, Spessore max: 15 mm',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaDfsL-3KGfeKgj8Qo7K9uKIwYQCBWEw4wQAT305WrULYXytdNToL9EoSq1UfQbpo8cMy_hSk-b9gMKTgJn85Wlh8ZmLQpCauDYOVKJhUd-1KN9i921KqSJQWnTwmXNEFAgAibTrRYrIbPg5wZp9uLsd8dvWhAWUHB-9YWXh98ykOnzFLH9Gxby8dPamTE3099UUYaBIy8xIrtuqLHLg_wdL2w-UOxr5xnuhNHcssQH0BDY_PbWOtcmiKPbhPVeCMccmzMyAT-wg',
    alt: 'Pressa piegatrice',
    reverse: true,
    highlight: true,
  },
  {
    num: '03',
    slug: 'CALANDRATURA',
    title: 'Calandratura',
    body: 'Calandratura a 4 rulli fino a 2 metri di larghezza. Lavorazione per curve e bombature su componenti di grande formato con omogeneità di forma e finitura superficiale controllata.',
    specs: 'Calandratura: 4 rulli, Larghezza max: 2 m, Materiali: Acciaio al carbonio, Inox, Alluminio',
    img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=900&fit=crop',
    alt: 'Calandratura a rulli',
    reverse: false,
    highlight: false,
  },
  {
    num: '04',
    slug: 'SALDATURA',
    title: 'Saldatura',
    body: 'Saldatura su saldatrici Migatronic e OTC di nuova generazione con banchi da saldature Siegmund. Giunzioni strutturali certificate per assemblaggi di precisione su acciaio al carbonio, inox e alluminio.',
    specs: 'Saldatrici: Migatronic, OTC, Banchi: Siegmund, Certificazioni: ISO 3834, EN 1090',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDBd8t-OMrrcbVbyc6pRvQKjoBrCas2-sQR2dD3JNAVBuNPJlrX_9NDGlrvMLL22YGHxSatXc3FfPtD0sRq7Zr_WnhvfkvpbbUTO0sL_8Azqsc7_T-VwZ893U3BZeCRyxCCXMqOP4XS7j67h4JxfhZARp_wCcfkGDl18fPH73zJ65YKr7IxVbxvZREmE0A-zjxDE7y3_E8C4r74e-0fpmkp7l_0CqB3j5CHyATOHRrul5JLKswLQmwemIz_AeOxY6Ej-dHZAS-sw',
    alt: 'Saldatura industriale',
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
