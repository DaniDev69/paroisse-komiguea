'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

type Message = { id: number; nom: string; email: string; telephone: string; sujet: string; message: string; lu: boolean; createdAt: string }

export default function AdminMessages() {
  const { token, isConnected } = useAuth()
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [chargement, setChargement] = useState(true)
  const [actif, setActif] = useState<number | null>(null)

  useEffect(() => {
    if (!isConnected) router.push('/admin/login')
    else charger()
  }, [isConnected])

  const charger = async () => {
    setChargement(true)
    try {
      const res = await fetch('/api/contact', { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()
      setMessages(Array.isArray(data) ? data : [])
    } catch { }
    setChargement(false)
  }

  if (!isConnected) return null

  return (
    <main style={{ background: '#FAF8F3', minHeight: '100vh', padding: '60px 40px' }}>
      <style>{`
        .msg-card { background: #FFFFFF; border-radius: 10px; padding: 24px; border: 1px solid rgba(201,168,76,0.2); margin-bottom: 16px; cursor: pointer; transition: box-shadow 0.2s; }
        .msg-card:hover { box-shadow: 0 4px 20px rgba(13,43,85,0.1); }
        .msg-card.actif { border-color: #C9A84C; box-shadow: 0 4px 20px rgba(201,168,76,0.2); }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>Administration</p>
            <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Messages de Contact ({messages.length})</h1>
          </div>
          <Link href="/admin" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '10px 20px', textDecoration: 'none', borderRadius: '6px' }}>
            ← Tableau de Bord
          </Link>
        </div>

        {chargement ? (
          <div style={{ textAlign: 'center', padding: '40px' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>⏳ Chargement...</p></div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: '#FFFFFF', borderRadius: '12px' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun message reçu.</p></div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`msg-card ${actif === m.id ? 'actif' : ''}`} onClick={() => setActif(actif === m.id ? null : m.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', color: '#0D2B55', marginBottom: '4px' }}>{m.nom}</h3>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', color: '#6B7A8D' }}>
                    {m.email && `✉ ${m.email}`} {m.telephone && `· 📞 ${m.telephone}`}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '11px', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase' }}>{m.sujet || 'Sans sujet'}</p>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '11px', color: '#8A7D6A', marginTop: '4px' }}>{new Date(m.createdAt).toLocaleDateString('fr-FR')}</p>
                </div>
              </div>
              {actif === m.id && (
                <div style={{ marginTop: '16px', padding: '16px', background: '#FAF8F3', borderRadius: '8px', borderLeft: '3px solid #C9A84C' }}>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '17px', color: '#0D2B55', lineHeight: 1.75 }}>{m.message}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  )
}