import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="produzione"
      className="relative flex items-center"
      style={{ minHeight: '100svh' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgs4UwDtWi9n7V2vYOxLJ7p-V5yRM1BzGSEBJ_kqOmzAE2jZm6yYCfwcxqfcRQd1b9xXIFYsIR56c68OSAb29ZVHpjf7nBzA_jnRUfVFPhxMyh58Mqsx70lPCJiMkRwZbbX1x1VisibMD4eD6RWWGo-SlMolX8LlzWNIb3vvvg3HEb8AMd59W2yZNToP75kph9spc32mgYvh-M8nKWaqack0hvA2zA19CcPIzx1uqyy3A_-NSCvDGls2BYtWkzpvgvUXVb7Xk6KQ"
          alt="Taglio laser su lamiera industriale ad alta precisione"
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.45) contrast(1.1)' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, var(--color-bg) 0%, rgba(10,11,13,0.75) 55%, rgba(10,11,13,0.1) 100%)',
          }}
        />
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid opacity-25" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-12 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-8">
          {/* Tag */}
          <div
            className="inline-flex items-center px-3 py-1 font-body text-[10px] font-medium uppercase"
            style={{
              backgroundColor: 'rgba(27,79,138,0.2)',
              color: 'var(--color-primary-light)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(77,143,212,0.2)',
              letterSpacing: '0.2em',
            }}
          >
            Carpenteria Industriale dal 1994
          </div>

          {/* H1 */}
          <h1
            className="font-display leading-[1.0] tracking-tight"
            style={{
              fontSize: 'clamp(48px, 7vw, 108px)',
              fontWeight: 900,
              color: 'var(--color-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Lavorazioni metalliche
            <br />
            <span style={{ color: 'var(--color-primary-light)' }}>di grandi dimensioni.</span>
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-row flex-wrap justify-center gap-4 pt-4">
            <a
              href="/contatti#form"
              className="inline-flex items-center justify-center font-display text-xs font-semibold uppercase px-10 py-4 transition-all duration-200 hover:opacity-90 w-fit"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary-hover) 100%)',
                color: '#fff',
                borderRadius: 'var(--radius-sm)',
                letterSpacing: '0.08em',
                boxShadow: '0 8px 32px rgba(27,79,138,0.35)',
              }}
            >
              Invia Progetto
            </a>
            <a
              href="#servizi"
              className="inline-flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase px-10 py-4 group transition-all duration-200 w-fit"
              style={{
                backgroundColor: 'rgba(31,34,43,0.8)',
                color: 'var(--color-primary-light)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(77,143,212,0.15)',
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.08em',
              }}
            >
              Le nostre lavorazioni
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
