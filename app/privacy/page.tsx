import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import IubendaEmbed from '@/components/IubendaEmbed'

export const metadata: Metadata = {
  title: 'Privacy Policy — Carpenteria Pastro',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).',
}

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <section style={{ backgroundColor: 'var(--color-bg)', paddingTop: '80px', paddingBottom: 'var(--space-24)' }}>
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div
              className="inline-flex items-center px-4 py-1 mb-6 font-body text-[10px] font-medium uppercase"
              style={{
                backgroundColor: 'rgba(27,79,138,0.15)',
                color: 'var(--color-primary-light)',
                borderLeft: '2px solid var(--color-primary-light)',
                letterSpacing: '0.2em',
              }}
            >
              LEGAL
            </div>
            <h1
              className="font-display mb-2"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Privacy Policy
            </h1>
            <p className="font-body mb-12" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              Informativa ai sensi del Reg. (UE) 2016/679 (GDPR)
            </p>

            <IubendaEmbed policyUrl="https://www.iubenda.com/api/privacy-policy/44661863" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
