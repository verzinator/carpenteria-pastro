'use client'

import { ShieldCheck, HardHat, Shield, Leaf } from 'lucide-react'

const certs = [
  {
    icon: ShieldCheck,
    code: 'ISO 9001',
    label: 'Sistemi di Gestione Qualità',
  },
  {
    icon: HardHat,
    code: 'EN 1090',
    label: 'Componenti Metallici Strutturali',
  },
  {
    icon: Shield,
    code: 'ISO 45001',
    label: 'Salute e Sicurezza sul Lavoro',
  },
  {
    icon: Leaf,
    code: 'ISO 14001',
    label: 'Gestione Ambientale',
  },
]

export default function CertificazioniSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-surface-2)', paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-24)' }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <span
            className="font-body font-medium uppercase block mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--color-primary-light)' }}
          >
            Standard di Qualità Inderogabili
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(32px, 4vw, 51px)', fontWeight: 800, color: 'var(--color-text)', letterSpacing: '-0.02em' }}
          >
            Certificazioni
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map(({ icon: Icon, code, label }) => (
            <div
              key={code}
              className="flex flex-col items-center justify-center text-center transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(10,11,13,0.4)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(37,40,48,0.5)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface-3)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(10,11,13,0.4)'
              }}
            >
              <Icon
                size={44}
                className="mb-6"
                style={{ color: 'var(--color-primary-light)' }}
              />
              <h5
                className="font-display font-bold mb-2"
                style={{ fontSize: '22px', color: 'var(--color-text)', letterSpacing: '-0.01em' }}
              >
                {code}
              </h5>
              <p
                className="font-body uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
