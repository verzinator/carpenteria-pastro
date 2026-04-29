'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useCallback } from 'react'

const people = [
  {
    name: 'Lorem A.',
    role: 'Lorem Ipsum',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9dtTP1GQ1rugWwY0B4s4c3v2Ghe6sawG7fCkSjuk_10kzxQ6o3Jbnfrnk-0Iq7gr0hmaWlp4L4WgXGpkp4hiB56HOuCp9i-aEcnkQFPrxwkmXvUo-QZC2tjGEAdQr62S_pF1VWMPfjczLPWH2L2KRMoCtzDOY_Mtu7j4KGhOIV0MvHOAcKODh8t50UB0Q09vHfhBR--PiKLa_HWFSBx20KEQ3-nj47BY8aFVRwyv6gQCvU2-Po3lTudvblnXt7M54vD3zYlYVyw',
    alt: 'Team Pastro carpenteria metallica',
  },
  {
    name: 'Ipsum B.',
    role: 'Dolor Sit',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGDgXGvYAFnzdW3q7dH_OTkOu86NBcSOs3bPGRxvttAImXAN1Cb9xTMjLlqhkwvadDXXSt-Im4P6y6YIcM1EAQWHq-RiExJiWu-cwmqiP5l8qUUt_3ItD1pLZAS6SMohmbhe23wK-4B6yIUOaHBnHwvgVQcHzCwB-Vc5QPWGDgaBUPEoCeFY3mgeRa00VnJCfQ0z8zFGwIF8n1X7hAhtduZD4NKa2SBLCX4vPcR7Ka8R1V6nrhL0ntLvsC9FSJ3hML4UNFFa0UvQ',
    alt: 'Team Pastro carpenteria',
  },
  {
    name: 'Dolor C.',
    role: 'Amet Consectetur',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5AQlhoTq8PmjHlIOIDGTWmD9ouPnBGDmXsktky5PNpJg-wZTMW44YbbZtzu1L4J2tVu0BQ7XIqE6DcmpGY5ILLagEjmxouD3KPhyM1Lv-1arxyCCZ1idvV7FXZ2jb-s-2PMAcQRQBah6rSjSHgov85rVcs-6beAwtGbHfLEHTyjbRoGSqGmWElXtfYajmnPfyTBglzkRAXpartc7rwNaTB-fx2RF7dR97KLmnPBPJSV3tmyUaUWMlxA3SrEl7AHU6sBhwMiRKKA',
    alt: 'Team Pastro industria metallica',
  },
  {
    name: 'Sit D.',
    role: 'Adipiscing Elit',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9dtTP1GQ1rugWwY0B4s4c3v2Ghe6sawG7fCkSjuk_10kzxQ6o3Jbnfrnk-0Iq7gr0hmaWlp4L4WgXGpkp4hiB56HOuCp9i-aEcnkQFPrxwkmXvUo-QZC2tjGEAdQr62S_pF1VWMPfjczLPWH2L2KRMoCtzDOY_Mtu7j4KGhOIV0MvHOAcKODh8t50UB0Q09vHfhBR--PiKLa_HWFSBx20KEQ3-nj47BY8aFVRwyv6gQCvU2-Po3lTudvblnXt7M54vD3zYlYVyw',
    alt: 'Team Pastro lavorazioni metalliche',
  },
  {
    name: 'Amet E.',
    role: 'Sed Do Eiusmod',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGDgXGvYAFnzdW3q7dH_OTkOu86NBcSOs3bPGRxvttAImXAN1Cb9xTMjLlqhkwvadDXXSt-Im4P6y6YIcM1EAQWHq-RiExJiWu-cwmqiP5l8qUUt_3ItD1pLZAS6SMohmbhe23wK-4B6yIUOaHBnHwvgVQcHzCwB-Vc5QPWGDgaBUPEoCeFY3mgeRa00VnJCfQ0z8zFGwIF8n1X7hAhtduZD4NKa2SBLCX4vPcR7Ka8R1V6nrhL0ntLvsC9FSJ3hML4UNFFa0UvQ',
    alt: 'Team Pastro carpenteria strutture',
  },
  {
    name: 'Consectetur F.',
    role: 'Tempor Incididunt',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5AQlhoTq8PmjHlIOIDGTWmD9ouPnBGDmXsktky5PNpJg-wZTMW44YbbZtzu1L4J2tVu0BQ7XIqE6DcmpGY5ILLagEjmxouD3KPhyM1Lv-1arxyCCZ1idvV7FXZ2jb-s-2PMAcQRQBah6rSjSHgov85rVcs-6beAwtGbHfLEHTyjbRoGSqGmWElXtfYajmnPfyTBglzkRAXpartc7rwNaTB-fx2RF7dR97KLmnPBPJSV3tmyUaUWMlxA3SrEl7AHU6sBhwMiRKKA',
    alt: 'Team Pastro specialisti carpenteria',
  },
  {
    name: 'Adipiscing G.',
    role: 'Ut Labore',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9dtTP1GQ1rugWwY0B4s4c3v2Ghe6sawG7fCkSjuk_10kzxQ6o3Jbnfrnk-0Iq7gr0hmaWlp4L4WgXGpkp4hiB56HOuCp9i-aEcnkQFPrxwkmXvUo-QZC2tjGEAdQr62S_pF1VWMPfjczLPWH2L2KRMoCtzDOY_Mtu7j4KGhOIV0MvHOAcKODh8t50UB0Q09vHfhBR--PiKLa_HWFSBx20KEQ3-nj47BY8aFVRwyv6gQCvU2-Po3lTudvblnXt7M54vD3zYlYVyw',
    alt: 'Team Pastro settore metallico',
  },
  {
    name: 'Elit H.',
    role: 'Dolore Magna',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5AQlhoTq8PmjHlIOIDGTWmD9ouPnBGDmXsktky5PNpJg-wZTMW44YbbZtzu1L4J2tVu0BQ7XIqE6DcmpGY5ILLagEjmxouD3KPhyM1Lv-1arxyCCZ1idvV7FXZ2jb-s-2PMAcQRQBah6rSjSHgov85rVcs-6beAwtGbHfLEHTyjbRoGSqGmWElXtfYajmnPfyTBglzkRAXpartc7rwNaTB-fx2RF7dR97KLmnPBPJSV3tmyUaUWMlxA3SrEl7AHU6sBhwMiRKKA',
    alt: 'Team Pastro professionisti carpenteria',
  },
]

const CARD_WIDTH = 240
const SCROLL_AMOUNT = CARD_WIDTH * 2 + 16

/*
  Padding formula for the scroll row (direct child of full-width section):
    calc(((100% - min(100%, 1280px)) / 2) + 48px)

  When viewport ≤ 1280px:  min(100%, 1280px) = 100%  → offset = 0  → padding = 48px
  When viewport > 1280px:  min(100%, 1280px) = 1280px → offset = (vw-1280)/2 → padding = offset + 48px

  This replicates exactly what `max-w-7xl mx-auto px-12` does for the header above.
  No JS, no 100vw, no CSS variables — pure calc() on 100% of the section width.
*/
const SCROLL_PADDING = 'calc(((100% - min(100%, 1280px)) / 2) + 48px)'

export default function PersoneSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateBounds = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 0)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: 'smooth' })
  }

  return (
    <section style={{ backgroundColor: 'var(--color-surface)', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-32)' }}>

      {/* Header — standard container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <span
              className="font-body font-medium uppercase block mb-4"
              style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
            >
              I Nostri Artigiani
            </span>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(32px, 4vw, 51px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}
            >
              Le Nostre Persone
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            {([['left', atStart], ['right', atEnd]] as const).map(([dir, disabled]) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                disabled={disabled}
                className="flex items-center justify-center w-10 h-10 transition-colors duration-200"
                style={{
                  backgroundColor: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: disabled ? 'var(--color-text-faint)' : 'var(--color-accent-silver)',
                  opacity: disabled ? 0.4 : 1,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.borderColor = 'var(--color-primary-light)' }}
                onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.borderColor = 'var(--color-border)' }}
              >
                {dir === 'left' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll row — direct child of section (full viewport width) */}
      <div
        ref={scrollRef}
        onScroll={updateBounds}
        className="overflow-x-auto pb-4"
        style={{
          paddingLeft: SCROLL_PADDING,
          scrollbarWidth: 'none',
        }}
      >
        <div
          className="flex gap-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {people.map((p) => (
            <div
              key={p.name}
              className="flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px`, scrollSnapAlign: 'start' }}
            >
              <div
                className="relative overflow-hidden mb-3"
                style={{ width: '100%', height: '280px', borderRadius: 'var(--radius-sm)' }}
              >
                <Image src={p.src} alt={p.alt} fill className="object-cover grayscale" />
              </div>
              <span
                className="font-body uppercase block mb-1"
                style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
              >
                {p.role}
              </span>
              <h4
                className="font-display"
                style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}
              >
                {p.name}
              </h4>
            </div>
          ))}
          {/* Trailing spacer — 48px so last card has breathing room */}
          <div aria-hidden className="flex-shrink-0 w-12" />
        </div>
      </div>

    </section>
  )
}
