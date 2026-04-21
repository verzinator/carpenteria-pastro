import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendWithResend(to: string, subject: string, html: string) {
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      html,
    })
    return { success: true, provider: 'resend', result }
  } catch (error) {
    console.error('[Resend] Errore:', error)
    return { success: false, provider: 'resend', error }
  }
}

async function sendWithNodemailer(to: string, subject: string, html: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { success: false, provider: 'nodemailer', error: 'SMTP config mancante' }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    })
    return { success: true, provider: 'nodemailer', result }
  } catch (error) {
    console.error('[Nodemailer] Errore:', error)
    return { success: false, provider: 'nodemailer', error }
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, telefono, messaggio, privacyRequired, privacyMarketing } = body

    // Validazione
    if (!nome?.trim() || !email?.trim() || !messaggio?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    if (!privacyRequired || !privacyMarketing) {
      return NextResponse.json(
        { success: false, message: 'È necessario accettare entrambi i consensi privacy' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.CONTACT_EMAIL
    if (!contactEmail) {
      console.error('[Contact API] Email destinatario non configurata')
      return NextResponse.json(
        { success: false, message: 'Errore di configurazione server' },
        { status: 500 }
      )
    }

    // HTML email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1b4f8a;">Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
        <h3>Messaggio:</h3>
        <p style="white-space: pre-wrap;">${messaggio}</p>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">
          Consenso marketing: ${privacyMarketing ? 'Sì' : 'No'}
        </p>
      </div>
    `

    // Email 1: A te (admin)
    const resendResult = await sendWithResend(
      contactEmail,
      `Richiesta di contatto — ${nome}`,
      emailHtml
    )

    if (resendResult.success) {
      // Email 2: Al cliente (conferma)
      const clientConfirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1b4f8a;">Richiesta acquisita</h2>
          <p>Ciao ${nome},</p>
          <p>Abbiamo ricevuto la tua richiesta di contatto. Un nostro referente ti contatterà al più presto per discutere del tuo progetto.</p>
          <p>Se hai altre domande o necessiti urgenti, non esitare a contattarci direttamente.</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">
            <strong>Carpenteria Pastro S.r.l.</strong><br>
            Via Esempio 1, Campodarsego (PD)<br>
            Tel: +39 000 000 0000<br>
            Email: info@carpenteriapastro.it
          </p>
        </div>
      `

      await sendWithResend(
        email,
        'Richiesta di contatto ricevuta',
        clientConfirmationHtml
      )

      return NextResponse.json(
        { success: true, message: 'Richiesta inviata con successo' },
        { status: 200 }
      )
    }

    // Fallback Nodemailer
    console.warn('[API] Resend fallito, provo Nodemailer...')
    const nodemailerResult = await sendWithNodemailer(
      contactEmail,
      `Richiesta di contatto — ${nome}`,
      emailHtml
    )

    if (nodemailerResult.success) {
      return NextResponse.json(
        { success: true, message: 'Richiesta inviata con successo' },
        { status: 200 }
      )
    }

    // Entrambi falliti
    console.error('[API] Entrambi i provider falliti')
    return NextResponse.json(
      {
        success: false,
        message: 'Errore nell\'invio della richiesta. Contattaci direttamente: info@carpenteriapastro.it',
      },
      { status: 500 }
    )
  } catch (error) {
    console.error('[API/Contact]', error)
    return NextResponse.json(
      { success: false, message: 'Errore server interno' },
      { status: 500 }
    )
  }
}
