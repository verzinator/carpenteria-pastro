import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Carpenteria Pastro',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).',
}

const sections = [
  {
    title: '1. Titolare del trattamento',
    content: `Carpenteria Pastro S.r.l., con sede legale in Via Esempio 1, Campodarsego (PD), P.IVA [da completare], nella persona del legale rappresentante, è il Titolare del trattamento dei dati personali raccolti tramite il presente sito web.

Contatto: info@carpenteriapastro.it`,
  },
  {
    title: '2. Tipologie di dati raccolti',
    content: `Tramite il modulo di contatto raccogliamo i seguenti dati personali:
• Nome e cognome
• Indirizzo email
• Numero di telefono (facoltativo)
• Contenuto del messaggio liberamente inserito dall'utente

Il sito può inoltre raccogliere automaticamente dati tecnici di navigazione (indirizzo IP, tipo di browser, pagine visitate) tramite cookie tecnici e di analisi. Per maggiori dettagli si rimanda alla Cookie Policy.`,
  },
  {
    title: '3. Finalità e base giuridica del trattamento',
    content: `I dati personali sono trattati per le seguenti finalità:

a) Gestione delle richieste di contatto e preventivo
Base giuridica: esecuzione di misure precontrattuali su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR).

b) Comunicazioni commerciali, newsletter e aggiornamenti (solo con consenso esplicito)
Base giuridica: consenso dell'interessato (art. 6, par. 1, lett. a GDPR).

c) Adempimenti di legge
Base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).`,
  },
  {
    title: '4. Modalità di trattamento e conservazione',
    content: `I dati sono trattati con strumenti informatici e/o cartacei, adottando misure di sicurezza adeguate a prevenire accessi non autorizzati, perdita o diffusione illecita.

I dati raccolti tramite il modulo di contatto sono conservati per il tempo strettamente necessario a gestire la richiesta e, in caso di rapporto contrattuale, per 10 anni ai sensi degli obblighi di legge. I dati trattati sulla base del consenso sono conservati fino alla revoca dello stesso.`,
  },
  {
    title: '5. Comunicazione e diffusione dei dati',
    content: `I dati non vengono diffusi a terzi. Possono essere comunicati a:
• Fornitori di servizi tecnici e informatici (hosting, email) che agiscono come Responsabili del trattamento ai sensi dell'art. 28 GDPR
• Autorità competenti nei casi previsti dalla legge

I dati non sono trasferiti fuori dall'Unione Europea, salvo verso paesi che garantiscono un livello di protezione adeguato ai sensi del GDPR.`,
  },
  {
    title: '6. Diritti dell\'interessato',
    content: `L'interessato ha il diritto di:
• Accedere ai propri dati personali (art. 15 GDPR)
• Rettificare dati inesatti (art. 16 GDPR)
• Ottenere la cancellazione dei dati ("diritto all'oblio") (art. 17 GDPR)
• Limitare il trattamento (art. 18 GDPR)
• Ricevere i dati in formato strutturato (portabilità) (art. 20 GDPR)
• Opporsi al trattamento (art. 21 GDPR)
• Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente

Per esercitare i propri diritti è possibile contattare il Titolare all'indirizzo: info@carpenteriapastro.it

L'interessato ha inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: '7. Cookie e tecnologie di tracciamento',
    content: `Il sito utilizza cookie tecnici necessari al funzionamento e cookie analitici in forma anonimizzata. Per informazioni dettagliate si rimanda alla Cookie Policy.`,
  },
  {
    title: '8. Modifiche alla presente informativa',
    content: `Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.`,
  },
]

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
              Informativa ai sensi del Reg. (UE) 2016/679 (GDPR) — Ultimo aggiornamento: gennaio 2025
            </p>

            <div className="flex flex-col gap-10">
              {sections.map((s) => (
                <div key={s.title} style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-8)' }}>
                  <h2
                    className="font-display mb-4"
                    style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.01em' }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="font-body leading-relaxed whitespace-pre-line"
                    style={{ fontSize: '14px', color: 'var(--color-accent-silver)', fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {s.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
