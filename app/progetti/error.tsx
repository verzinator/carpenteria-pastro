'use client'

export default function ProgettiError({ error }: { error: Error }) {
  return (
    <div style={{ padding: '80px 24px', color: '#f87171', fontFamily: 'monospace', fontSize: '13px' }}>
      <strong>Errore pagina Progetti:</strong> {error.message}
    </div>
  )
}
