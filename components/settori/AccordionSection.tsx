'use client'

import Image from 'next/image'
import { useState } from 'react'

const settori = [
  {
    num: '01',
    title: 'Macchinari industriali per sollevamento',
    description:
      'Carpenteria di precisione per sistemi di sollevamento e movimentazione industriale.',
    img: '/immagini-pastro/Macchinari industriali per sollevamento.jpg',
    alt: 'Macchinari industriali sollevamento Pastro carpenteria',
    topics: [
      { label: 'Gru e sistemi di movimentazione', body: '' },
      { label: 'Strutture di supporto per paranchi', body: '' },
      { label: 'Telai e travature metalliche', body: '' },
    ],
  },
  {
    num: '02',
    title: 'Macchine movimento terra',
    description:
      'Soluzioni strutturali robuste per escavatori, bulldozer e macchine da cantiere.',
    img: '/immagini-pastro/macchine-movimento-terra.jpg',
    alt: 'Macchine movimento terra Pastro carpenteria metallica',
    topics: [
      { label: 'Benne e accessori per escavatori', body: '' },
      { label: 'Strutture per macchine movimento terra', body: '' },
      { label: 'Rinforzi e componenti strutturali', body: '' },
    ],
  },
  {
    num: '03',
    title: 'Macchine lavorazioni pietra',
    description:
      'Carpenteria specializzata per macchine e attrezzature di estrazione e lavorazione pietre.',
    img: '/immagini-pastro/macchine-lavorazioni-pietra.jpg',
    alt: 'Macchine lavorazioni pietra Pastro carpenteria',
    topics: [
      { label: 'Telai per perforatrici e seghe', body: '' },
      { label: 'Strutture di carico e pressione', body: '' },
      { label: 'Componenti per laminatoi e magli', body: '' },
    ],
  },
  {
    num: '04',
    title: 'Linee di automazione industriale',
    description:
      'Impianti e strutture per catene di montaggio, robot industriali e automazione.',
    img: '/immagini-pastro/linee-di-automazione-industriale.jpg',
    alt: 'Linee automazione industriale Pastro carpenteria',
    topics: [
      { label: 'Telai strutturali per robot industriali', body: '' },
      { label: 'Passerelle e piattaforme di produzione', body: '' },
      { label: 'Componenti di interfaccia e supporto', body: '' },
    ],
  },
]

function AccordionItem({ s, isOpen, onToggle }: {
  s: typeof settori[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        border: isOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease',
      }}
    >
      {/* Header — single flex row, padding-based height */}
      <div
        onClick={onToggle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '28px 24px',
          cursor: 'pointer',
        }}
      >
        <span
          className="font-body font-medium"
          style={{
            fontSize: '13px',
            letterSpacing: '0.1em',
            lineHeight: 1,
            color: isOpen ? 'var(--color-primary-light)' : 'var(--color-text-faint)',
            width: '40px',
            flexShrink: 0,
            alignSelf: 'flex-start',
            paddingTop: '5px',
          }}
        >
          {s.num}
        </span>

        <div style={{ flex: 1 }}>
          <span
            className="font-display"
            style={{
              display: 'block',
              fontSize: 'clamp(18px, 2.5vw, 28px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: isOpen ? 'var(--color-text)' : 'var(--color-accent-silver-bright)',
              letterSpacing: '-0.01em',
              transition: 'color 0.2s ease',
            }}
          >
            {s.title}
          </span>
          {isOpen && (
            <p
              className="font-body leading-relaxed"
              style={{
                fontSize: '14px',
                color: 'var(--color-accent-silver)',
                fontWeight: 300,
                marginTop: '8px',
                marginBottom: 0,
              }}
            >
              {s.description}
            </p>
          )}
        </div>

        <span
          className="font-body"
          style={{
            fontSize: '20px',
            lineHeight: 1,
            flexShrink: 0,
            alignSelf: 'flex-start',
            paddingTop: '3px',
            color: isOpen ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease, color 0.2s ease',
          }}
        >
          →
        </span>
      </div>

      {/* Expanded content */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '700px' : '0',
          transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          style={{ padding: '32px 40px 32px 40px' }}
        >
          {/* Left column — image only */}
          <div>
            {/* Image */}
            <div
              className="relative overflow-hidden group"
              style={{
                height: 'clamp(240px, 30vw, 380px)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              {/* Accent overlay at 24% opacity */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: 'var(--color-accent-silver)',
                  opacity: 0.24,
                }}
              />
            </div>
          </div>

          {/* Right column — sub-topics */}
          <div className="space-y-0">
            {s.topics.map((t, ti) => (
              <div
                key={t.label}
                style={{
                  paddingTop: ti === 0 ? '0' : '32px',
                  paddingBottom: ti === s.topics.length - 1 ? '0' : '32px',
                  borderBottom: ti < s.topics.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <span
                  className="font-body font-medium block mb-2"
                  style={{
                    fontSize: '15px',
                    color: '#ffffff',
                  }}
                >
                  {t.label}
                </span>
                {t.body && (
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      fontSize: '15px',
                      color: '#e2e6ed',
                      fontWeight: 300,
                    }}
                  >
                    {t.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  return (
    <section
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingBottom: 'var(--space-24)',
      }}
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl flex flex-col gap-2">
        {settori.map((s, i) => (
          <AccordionItem
            key={s.num}
            s={s}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
