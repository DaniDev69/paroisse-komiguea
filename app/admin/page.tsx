'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

const sections = [
  { titre: 'Baptêmes', icon: '💧', desc: 'Gérer les baptisés — ajouter, modifier, supprimer', href: '/admin/baptemes', bg: 'linear-gradient(135deg, #0D3B55 0%, #1A6080 100%)' },
  { titre: 'Communions', icon: '🍞', desc: 'Gérer les communiants et leurs photos', href: '/admin/communions', bg: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)' },
  { titre: 'Confirmations', icon: '🔥', desc: 'Gérer les confirmés et leurs informations', href: '/admin/confirmations', bg: 'linear-gradient(135deg, #7A1A1A 0%, #C9401A 100%)' },
  { titre: 'Mariages', icon: '💍', desc: 'Gérer les couples mariés et leurs photos', href: '/admin/mariages', bg: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)' },
  { titre: 'Messages', icon: '✉', desc: 'Consulter les messages de contact reçus', href: '/admin/messages', bg: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)' },
]

export default function AdminPage() {
  const { isConnected, logout, token } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) router.push('/admin/login')
  }, [isConnected, router])

  if (!isConnected) return null

  return (
    <main style={{ background: '#FAF8F3', minHeight: '100vh', padding: '60px 40px' }}>
      <style>{`
        .admin-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
        .admin-card { border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); display: flex; flex-direction: column; transition: transform 0.3s, box-shadow 0.3s; text-decoration: none; }
        .admin-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(13,43,85,0.15); }
        .admin-card-top { height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
        .admin-card-body { background: #FFFFFF; padding: 22px; border: 1px solid rgba(201,168,76,0.2); border-top: none; border-radius: 0 0 12px 12px; flex: 1; }
        @media (max-width: 900px) { .admin-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .admin-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px' }}>Administration</p>
            <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55' }}>Tableau de Bord</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#6B7A8D', fontStyle: 'italic', marginTop: '4px' }}>
              Paroisse Notre-Dame d&apos;Assomption de Komiguéa
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/" style={{ display: 'inline-block', background: '#EAF2FF', color: '#0D2B55', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '10px 20px', textDecoration: 'none', borderRadius: '6px', border: '1px solid rgba(13,43,85,0.15)' }}>
              🌐 Voir le Site
            </Link>
            <button onClick={() => { logout(); router.push('/admin/login') }} style={{ background: '#FFF0F0', color: '#C9401A', border: '1px solid rgba(201,64,26,0.3)', padding: '10px 20px', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
              🚪 Déconnexion
            </button>
          </div>
        </div>

        {/* GRILLE */}
        <div className="admin-grid">
          {sections.map((s) => (
            <Link key={s.titre} href={s.href} className="admin-card">
              <div className="admin-card-top" style={{ background: s.bg }}>
                <span style={{ fontSize: '40px' }}>{s.icon}</span>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>{s.titre}</span>
              </div>
              <div className="admin-card-body">
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}