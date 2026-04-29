'use client'

import Image from 'next/image'
import { Hammer, SlidersHorizontal, Bot, Cpu } from 'lucide-react'

const quadrants = [
  { icon: Hammer, label: 'Lorem', sub: 'Lorem Ipsum' },
  { icon: SlidersHorizontal, label: 'Ipsum', sub: 'Dolor Sit Amet' },
  { icon: Bot, label: 'Dolor', sub: 'Consectetur Adipiscing' },
  { icon: Cpu, label: 'Sit', sub: 'Elit Sed Do' },
]

export default function EvoluzioneProduttivaSection() {
  return (
    <section
      className="blueprint-grid"
      style={{ backgroundColor: 'var(--color-surface)', paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-32)' }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* 2×2 grid */}
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            {quadrants.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="aspect-square flex flex-col items-center justify-center text-center group transition-colors duration-300"
                style={{ backgroundColor: 'var(--color-surface-3)', padding: 'var(--space-8)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface-2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface-3)'
                }}
              >
                <Icon
                  size={36}
                  className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--color-primary-light)' }}
                />
                <span
                  className="font-display font-bold block mb-1"
                  style={{ fontSize: '22px', color: 'var(--color-text)', letterSpacing: '-0.01em' }}
                >
                  {label}
                </span>
                <span
                  className="font-body uppercase"
                  style={{ fontSize: '10px', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
                >
                  {sub}
                </span>
              </div>
            ))}
          </div>

          {/* Text + Image */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span
                className="font-body font-medium uppercase block mb-4"
                style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
              >
                Tecnologia
              </span>
              <h2
                className="font-display mb-3"
                style={{ fontSize: 'clamp(32px, 4vw, 51px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}
              >
                Evoluzione Produttiva
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(15px, 1vw, 17px)', color: 'var(--color-accent-silver)', fontWeight: 300 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor,
                incididunt ut labore et dolore magna aliqua,
                ut enim ad minim veniam quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className="relative group overflow-hidden" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '4/3' }}>
              <Image
                src="/immagini-pastro/Pastro_tecnologia.png"
                alt="Evoluzione tecnologia produttiva Pastro carpenteria"
                fill
                className="object-cover transition-all duration-1000 grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(27,79,138,0.08)', mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
