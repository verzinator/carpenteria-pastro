'use client'

import { useEffect, useState } from 'react'

interface IubendaEmbedProps {
  policyUrl: string
}

export default function IubendaEmbed({ policyUrl }: IubendaEmbedProps) {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(policyUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.content) {
          setHtml(data.content)
        }
      })
      .catch(() => {
        setHtml('<p>Impossibile caricare il documento. Riprova più tardi.</p>')
      })
      .finally(() => setLoading(false))
  }, [policyUrl])

  if (loading) {
    return (
      <div style={{ color: 'var(--color-text-muted)', fontSize: '14px', padding: 'var(--space-8) 0' }}>
        Caricamento...
      </div>
    )
  }

  return (
    <div
      className="iubenda-embed-content font-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
