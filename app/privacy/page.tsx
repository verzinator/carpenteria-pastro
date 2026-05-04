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
    content: `Carpenteria Pastro S.r.l., con sede legale in Via del Lavoro, 8 — 31050 Vedelago (TV), nella persona del legale rappresentante, è il Titolare del trattamento dei dati personali raccolti tramite il presente sito web.

Recapiti:
• Email: ordini@carpenteriapastro.it
• Telefono: 0423-401219
• Fax: 0423-709147`,
  },
  {
    title: '2. Tipologie di dati raccolti',
    content: `Tramite il modulo di contatto raccogliamo i seguenti dati personali:
• Nome e cognome
• Indirizzo email
• Numero di telefono (facoltativo)
• Descrizione del progetto e richiesta tecnica (facoltativo)
• Consensi espliciti alle finalità di trattamento

Il sito può inoltre raccogliere automaticamente dati tecnici di navigazione (indirizzo IP, tipo di browser, pagine visitate, durata della sessione) tramite cookie tecnici e di analisi. Per maggiori dettagli si rimanda alla Cookie Policy.

Specificamente per committenti e partner commerciali, i dati possono includere anche informazioni relative all'azienda (ragione sociale, settore, partita IVA) fornite volontariamente in fase di preventivo o negoziazione contrattuale.`,
  },
  {
    title: '3. Finalità e base giuridica del trattamento',
    content: `I dati personali sono trattati per le seguenti finalità:

a) Gestione delle richieste di contatto, preventivi e documentazione tecnica
Base giuridica: esecuzione di misure precontrattuali e contrattuali su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR) e interesse legittimo del Titolare (art. 6, par. 1, lett. f GDPR).

b) Comunicazioni commerciali, aggiornamenti su novità produttive e newsletter (solo con consenso esplicito)
Base giuridica: consenso dell'interessato (art. 6, par. 1, lett. a GDPR).

c) Adempimenti di legge, obblighi fiscali e amministrativi
Base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).

d) Gestione della relazione contrattuale e amministrazione ordini
Base giuridica: esecuzione del contratto (art. 6, par. 1, lett. b GDPR).`,
  },
  {
    title: '4. Modalità di trattamento e conservazione',
    content: `I dati sono trattati con strumenti informatici adeguati, presso la sede legale del Titolare e presso server certificati ubicati nell'Unione Europea, adottando misure di sicurezza tecniche e organizzative atte a prevenire accessi non autorizzati, perdita o diffusione illecita dei dati.

Conservazione:
• Dati da richieste di contatto senza seguito contrattuale: 2 anni dalla ricezione
• Dati da preventivi e negoziazioni: fino a 5 anni dopo la conclusione della pratica
• Dati da rapporti contrattuali: per la durata del contratto più 10 anni ai sensi degli obblighi di legge (conservazione contabile e fiscale)
• Dati forniti per finalità di marketing/newsletter: fino alla revoca del consenso
• Dati di navigazione (cookie): secondo il periodo specificato nella Cookie Policy`,
  },
  {
    title: '5. Comunicazione e diffusione dei dati',
    content: `I dati personali non vengono diffusi pubblicamente. Possono essere comunicati a:
• Fornitori di servizi tecnici e informatici (hosting, email, gestione form) che agiscono come Responsabili del trattamento
• Partner logistici e di spedizione (per consegne di ordini)
• Consulenti fiscali e legali incaricati dal Titolare per adempimenti obbligatori
• Autorità competenti nei casi previsti dalla legge (Agenzia delle Entrate, organi di controllo, forze di polizia)
• Clienti, ove necessario per l'esecuzione del contratto (es. dati del referente per coordinamento progettuale)

Trasferimenti internazionali:
I dati non sono trasferiti fuori dall'Unione Europea, salvo verso paesi che garantiscono un livello di protezione adeguato ai sensi del GDPR o in caso di trasferimento vincolato da clausole contrattuali standard approvate dalla Commissione Europea.`,
  },
  {
    title: '6. Diritti dell\'interessato',
    content: `L'interessato ha il diritto di:
• Accedere ai propri dati personali (art. 15 GDPR)
• Rettificare dati inesatti o incompleti (art. 16 GDPR)
• Ottenere la cancellazione dei dati ("diritto all'oblio") quando non più necessari (art. 17 GDPR)
• Limitare il trattamento dei propri dati (art. 18 GDPR)
• Ricevere i propri dati in formato strutturato, comunemente usato e leggibile da dispositivi automatici (portabilità) (art. 20 GDPR)
• Opporsi al trattamento per finalità di marketing diretto (art. 21 GDPR)
• Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente

Per esercitare i propri diritti è possibile contattare il Titolare tramite:
• Email: ordini@carpenteriapastro.it
• Posta: Via del Lavoro, 8 — 31050 Vedelago (TV)
• Telefono: 0423-401219

L'interessato ha inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) o al proprio Autorità di Protezione Dati nazionale.`,
  },
  {
    title: '7. Cookie e tecnologie di tracciamento',
    content: `Il sito utilizza cookie tecnici necessari al funzionamento (autenticazione, sicurezza, preferenze di navigazione) e cookie analitici in forma anonimizzata per migliorare l'esperienza utente e comprendere i comportamenti di utilizzo del sito.

Nessun dato personale è acquisito tramite cookie senza consenso esplicito. Per informazioni dettagliate su tipi di cookie, finalità e modalità di rifiuto si rimanda alla Cookie Policy.`,
  },
  {
    title: '8. Modifiche alla presente informativa',
    content: `Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento per adeguarla a eventuali modifiche della normativa vigente, a variazioni organizzative o a miglioramenti del servizio. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento. L'utilizzo continuato del sito comporta l'accettazione delle modifiche apportate.

Data di ultimo aggiornamento: aprile 2026`,
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
              Informativa ai sensi del Reg. (UE) 2016/679 (GDPR) — Ultimo aggiornamento: aprile 2026
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
