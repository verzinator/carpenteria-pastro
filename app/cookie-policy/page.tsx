import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Carpenteria Pastro',
  description: 'Informativa sull\'utilizzo dei cookie e delle tecnologie di tracciamento sul sito di Carpenteria Pastro.',
}

const sections = [
  {
    title: '1. Cosa sono i cookie',
    content: `I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al dispositivo (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi allo stesso sito alla successiva visita. Grazie ai cookie il sito ricorda le azioni e le preferenze dell'utente, evitando di doverle reinserire ogni volta.`,
  },
  {
    title: '2. Tipologie di cookie utilizzati',
    content: `Il presente sito utilizza le seguenti categorie di cookie:

Cookie tecnici (necessari)
Sono indispensabili per il corretto funzionamento del sito e non richiedono il consenso dell'utente. Consentono la navigazione e l'utilizzo delle funzionalità di base (es. memorizzazione della sessione, preferenze di lingua). Senza questi cookie alcune funzioni del sito non sarebbero disponibili.

Cookie analitici (statistici)
Raccolgono informazioni aggregate e anonimizzate sulle modalità di utilizzo del sito (es. pagine visitate, tempo di permanenza, errori). Vengono utilizzati esclusivamente per migliorare le prestazioni e l'esperienza di navigazione. Non sono utilizzati per profilare l'utente.

Cookie di terze parti
Il sito potrebbe integrare contenuti o servizi di terze parti (es. mappe, video, strumenti di analisi) che possono installare cookie propri. Per questi cookie si rimanda alle rispettive informative della privacy delle terze parti.`,
  },
  {
    title: '3. Cookie di terze parti presenti',
    content: `Attualmente il sito non utilizza cookie di profilazione o di marketing di terze parti. In caso di futura integrazione di tali strumenti, la presente informativa verrà aggiornata con l'indicazione delle terze parti coinvolte e i link alle rispettive policy.`,
  },
  {
    title: '4. Durata dei cookie',
    content: `Cookie di sessione: vengono cancellati automaticamente alla chiusura del browser.

Cookie persistenti: rimangono sul dispositivo per un periodo di tempo definito (indicato nella tabella cookie, se presente) o fino alla cancellazione manuale da parte dell'utente.`,
  },
  {
    title: '5. Come gestire o disabilitare i cookie',
    content: `L'utente può gestire, bloccare o eliminare i cookie attraverso le impostazioni del proprio browser. Di seguito i link alle istruzioni per i browser più diffusi:

• Google Chrome: Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti
• Mozilla Firefox: Opzioni > Privacy e sicurezza > Cookie e dati dei siti
• Safari: Preferenze > Privacy > Gestisci dati siti web
• Microsoft Edge: Impostazioni > Cookie e autorizzazioni sito

Si ricorda che la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito o di alcune sue funzionalità.`,
  },
  {
    title: '6. Base giuridica',
    content: `Il trattamento dei dati tramite cookie tecnici avviene ai sensi dell'art. 6, par. 1, lett. b del GDPR (esecuzione di un contratto o misure precontrattuali) e dell'art. 122 del D.Lgs. 196/2003 (Codice Privacy).

Per i cookie analitici con dati aggregati e anonimizzati non è richiesto il consenso ai sensi delle Linee guida del Garante per la protezione dei dati personali.`,
  },
  {
    title: '7. Titolare del trattamento',
    content: `Carpenteria Pastro S.r.l.
Via Esempio 1, Campodarsego (PD)
Email: info@carpenteriapastro.it

Per qualsiasi richiesta relativa all'utilizzo dei cookie e al trattamento dei dati personali è possibile contattare il Titolare all'indirizzo sopra indicato.`,
  },
  {
    title: '8. Modifiche alla Cookie Policy',
    content: `Il Titolare si riserva il diritto di modificare la presente Cookie Policy in qualsiasi momento, in particolare a seguito di variazioni normative o di aggiornamenti del sito. Le modifiche entreranno in vigore dalla data di pubblicazione su questa pagina.`,
  },
]

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="font-body mb-12" style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              Informativa ai sensi dell'art. 122 D.Lgs. 196/2003 e del Reg. (UE) 2016/679 — Ultimo aggiornamento: gennaio 2025
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
