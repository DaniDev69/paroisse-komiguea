'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [erreur, setErreur] = useState('')
  const [chargement, setChargement] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async () => {
    if (!username || !password) return setErreur('Veuillez remplir tous les champs')
    setChargement(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (res.ok) {
        login(data.token)
        router.push('/admin')
      } else {
        setErreur(data.message || 'Identifiants incorrects')
      }
    } catch {
      setErreur('Erreur de connexion au serveur')
    }
    setChargement(false)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FAF8F3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <div style={{ maxWidth: '460px', width: '100%' }}>

        {/* LOGO */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '36px', boxShadow: '0 8px 32px rgba(13,43,85,0.2)' }}>
            🔐
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '22px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>
            Espace Administrateur
          </h1>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#6B7A8D', fontStyle: 'italic' }}>
            Paroisse Notre-Dame d&apos;Assomption de Komiguéa
          </p>
        </div>

        {/* FORMULAIRE */}
        <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '40px', boxShadow: '0 8px 40px rgba(13,43,85,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
          <style>{`
            .admin-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; transition: border-color 0.2s; box-sizing: border-box; margin-top: 8px; }
            .admin-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
            .admin-label { font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; font-weight: 600; }
            .login-btn { width: 100%; padding: 15px; background: #0D2B55; color: #FBF4E0; border: none; border-radius: 6px; font-family: Lato, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s; margin-top: 24px; }
            .login-btn:hover { background: #1A4480; }
            .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
          `}</style>

          <div style={{ marginBottom: '20px' }}>
            <label className="admin-label">Nom d&apos;utilisateur</label>
            <input className="admin-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin"/>
          </div>

          <div style={{ marginBottom: '8px' }}>
            <label className="admin-label">Mot de Passe</label>
            <input className="admin-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} placeholder="••••••••"/>
          </div>

          {erreur && (
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#C9401A', marginTop: '8px' }}>⚠ {erreur}</p>
          )}

          <button className="login-btn" onClick={handleLogin} disabled={chargement}>
            {chargement ? '⏳ Connexion...' : '🔑 Se Connecter'}
          </button>
        </div>

      </div>
    </main>
  )
}