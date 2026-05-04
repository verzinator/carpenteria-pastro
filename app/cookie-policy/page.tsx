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
    content: `I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano al dispositivo (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi allo stesso sito alla successiva visita. Grazie ai cookie il sito ricorda le azioni e le preferenze dell'utente, evitando di doverle reinserire ogni volta.

I cookie possono durare una singola sessione (cookie di sessione) oppure periodi più lunghi (cookie persistenti), e possono essere installati direttamente dal sito o da terze parti.`,
  },
  {
    title: '2. Tipologie di cookie utilizzati su questo sito',
    content: `Il presente sito www.carpenteriapastro.it utilizza le seguenti categorie di cookie:

A) Cookie Tecnici (Necessari)
Sono indispensabili per il corretto funzionamento del sito e non richiedono il consenso dell'utente ai sensi dell'art. 122 D.Lgs. 196/2003. Consentono:
• La navigazione e l'utilizzo delle funzionalità di base del sito
• La memorizzazione della sessione utente
• L'autenticazione nei form di contatto
• La sicurezza durante le transazioni (CSRF protection)
• La gestione delle preferenze (es. lingua)

Senza questi cookie alcune funzioni del sito non sarebbero disponibili.

B) Cookie Analitici (Statistici)
Raccolgono informazioni aggregate e anonimizzate sulle modalità di utilizzo del sito (es. pagine visitate, tempo di permanenza, fonte di provenienza, errori 404). Vengono utilizzati esclusivamente per:
• Migliorare le prestazioni e l'esperienza di navigazione
• Comprendere il comportamento degli utenti
• Identificare le sezioni del sito con migliore engagement

Non sono utilizzati per profilare l'utente o per collegare i dati a identità specifiche. Tutti i dati sono anonimizzati e aggregati.

C) Cookie di Terze Parti
Il sito non integra attualmente servizi di terze parti che installano cookie (es. mappe di Google, video YouTube). In caso di futura integrazione, la presente informativa verrà aggiornata.`,
  },
  {
    title: '3. Strumenti di tracciamento utilizzati',
    content: `Attualmente il sito utilizza esclusivamente Google Analytics 4 per l'analisi anonimizzata del traffico.

Google Analytics:
• Non raccoglie dati identificativi personali (non traccia indirizzi email, nomi, ID cliente)
• Anonimizza gli indirizzi IP
• Consente a Carpenteria Pastro di analizzare il comportamento aggregato dei visitatori
• Rispetta gli standard GDPR per l'anonimizzazione dei dati

Non sono utilizzati cookie di retargeting, pixel di tracciamento di terze parti, o strumenti di profilazione comportamentale.`,
  },
  {
    title: '4. Durata e scadenza dei cookie',
    content: `Cookie di sessione (tecnici):
• Scadono automaticamente alla chiusura del browser
• Esempi: cookie di autenticazione, token CSRF

Cookie persistenti (analitici):
• Google Analytics: 2 anni dalla data di installazione
• Preferenze del sito (lingua, tema): 1 anno

Cookie di tracciamento (non presenti):
• N/A — il sito non utilizza cookie di marketing o profilazione a lungo termine`,
  },
  {
    title: '5. Come gestire, bloccare o disabilitare i cookie',
    content: `L'utente può gestire, bloccare o eliminare i cookie attraverso le impostazioni del proprio browser in qualsiasi momento. Di seguito i link alle istruzioni per i browser più diffusi:

Browser Desktop:
• Google Chrome: Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti
• Mozilla Firefox: Opzioni > Privacy e sicurezza > Cookie e dati dei siti
• Safari: Preferenze > Privacy > Gestisci dati siti web
• Microsoft Edge: Impostazioni > Cookie e autorizzazioni sito
• Opera: Impostazioni > Privacy e sicurezza > Cookie

Browser Mobili:
• iOS Safari: Impostazioni > Safari > Privacy > Blocca tutti i cookie
• Android Chrome: Impostazioni > Sito web > Cookie

Disabilitare Google Analytics:
L'utente può inoltre scaricare il "Google Analytics Opt-out Browser Add-on" dal sito di Google per disabilitare Google Analytics su tutti i siti web.

Avvertenza importante: La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito o di alcune sue funzionalità (es. il form di contatto potrebbe non funzionare correttamente). I cookie analitici possono essere disabilitati senza conseguenze sul funzionamento del sito.`,
  },
  {
    title: '6. Base giuridica del trattamento',
    content: `Cookie tecnici (necessari):
Art. 6, par. 1, lett. b GDPR (esecuzione di un contratto o misure precontrattuali)
Art. 122 D.Lgs. 196/2003 (Codice Privacy italiano)

Cookie analitici (anonimizzati):
Art. 6, par. 1, lett. f GDPR (interesse legittimo del Titolare a comprendere le prestazioni del sito)
Art. 122 D.Lgs. 196/2003
Linee guida del Garante per la protezione dei dati personali: i cookie analitici con dati aggregati e anonimizzati non richiedono consenso preventivo

Non è richiesto il consenso esplicito per i cookie tecnici, in quanto indispensabili al funzionamento del servizio richiesto.`,
  },
  {
    title: '7. Titolare del trattamento dei dati',
    content: `Carpenteria Pastro S.r.l.
Via del Lavoro, 8
31050 Vedelago (TV) — Italia

Contatti per richieste sulla privacy e i cookie:
• Email: ordini@carpenteriapastro.it
• Telefono: 0423-401219
• Fax: 0423-709147

Per qualsiasi domanda, reclamo o richiesta relativa all'utilizzo dei cookie e al trattamento dei dati personali è possibile contattare il Titolare agli indirizzi sopra indicati. L'interessato ha inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).`,
  },
  {
    title: '8. Modifiche alla Cookie Policy',
    content: `Il Titolare si riserva il diritto di modificare la presente Cookie Policy in qualsiasi momento, in particolare a seguito di:
• Variazioni normative (es. aggiornamenti GDPR o Codice Privacy)
• Aggiornamenti tecnici del sito
• Integrazione di nuovi strumenti di tracciamento
• Modifiche della struttura aziendale

Le modifiche entreranno in vigore dalla data di pubblicazione su questa pagina. Si consiglia agli utenti di consultare periodicamente questa informativa per verificare eventuali aggiornamenti.

Data di ultimo aggiornamento: aprile 2026`,
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
              Informativa ai sensi dell'art. 122 D.Lgs. 196/2003 e del Reg. (UE) 2016/679 — Ultimo aggiornamento: aprile 2026
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
