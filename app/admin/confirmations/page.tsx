'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

const categories = ['Enfant (10-17 ans)', 'Adulte (18 ans et plus)']
const annees = Array.from({ length: 30 }, (_, i) => (2024 - i).toString())

type Confirmation = { id: number; nom: string; prenom: string; categorie: string; annee: number; pereCelebrant: string; photo: string }

export default function AdminConfirmations() {
  const { token, isConnected } = useAuth()
  const router = useRouter()
  const [liste, setListe] = useState<Confirmation[]>([])
  const [chargement, setChargement] = useState(true)
  const [form, setForm] = useState({ nom: '', prenom: '', categorie: '', annee: '', pereCelebrant: '' })
  const [photo, setPhoto] = useState<File | null>(null)
  const [apercu, setApercu] = useState('')
  const [envoi, setEnvoi] = useState(false)

  useEffect(() => {
    if (!isConnected) router.push('/admin/login')
    else charger()
  }, [isConnected])

  const charger = async () => {
    setChargement(true)
    try {
      const res = await fetch('/api/listes/confirmations', { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()
      setListe(Array.isArray(data) ? data : [])
    } catch { }
    setChargement(false)
  }

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) { setPhoto(file); setApercu(URL.createObjectURL(file)) }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAjouter = async () => {
    if (!form.nom || !form.prenom || !form.categorie || !form.annee) return alert('Remplissez tous les champs obligatoires')
    setEnvoi(true)
    try {
      let photoUrl = ''
      if (photo) {
        const fd = new FormData()
        fd.append('file', photo)
        fd.append('dossier', 'sacrements/confirmations')
        const upRes = await fetch('/api/upload', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: fd })
        const upData = await upRes.json()
        photoUrl = upData.url || ''
      }
      const res = await fetch('/api/listes/confirmations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, photo: photoUrl }),
      })
      if (res.ok) {
        setForm({ nom: '', prenom: '', categorie: '', annee: '', pereCelebrant: '' })
        setPhoto(null); setApercu(''); charger()
      } else { alert('Erreur lors de l\'ajout') }
    } catch { alert('Erreur serveur') }
    setEnvoi(false)
  }

  const handleSupprimer = async (id: number) => {
    if (!confirm('Confirmer la suppression ?')) return
    try {
      await fetch('/api/listes/confirmations', { method: 'DELETE', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ id }) })
      charger()
    } catch { alert('Erreur') }
  }

  if (!isConnected) return null

  return (
    <main style={{ background: '#FAF8F3', minHeight: '100vh', padding: '60px 40px' }}>
      <style>{`
        .form-input { width: 100%; padding: 12px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; box-sizing: border-box; }
        .form-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
        .form-select { width: 100%; padding: 12px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; appearance: none; }
        .form-label { display: block; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 6px; font-weight: 600; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; background: #FFFFFF; }
        thead { background: linear-gradient(135deg, #7A1A1A 0%, #C9401A 100%); }
        thead th { padding: 12px 16px; text-align: left; font-family: Cinzel, serif; font-size: 11px; color: #FBF4E0; white-space: nowrap; }
        tbody tr { border-bottom: 1px solid rgba(201,168,76,0.1); }
        tbody tr:hover { background: #FFF5F0; }
        tbody td { padding: 10px 16px; font-family: Lato, sans-serif; font-size: 13px; color: #0D2B55; }
        .delete-btn { background: #FFF0F0; color: #C9401A; border: 1px solid rgba(201,64,26,0.3); padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; }
        .delete-btn:hover { background: #C9401A; color: #FFFFFF; }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>Administration</p>
            <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Gestion des Confirmations</h1>
          </div>
          <Link href="/admin" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '10px 20px', textDecoration: 'none', borderRadius: '6px' }}>
            ← Tableau de Bord
          </Link>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '36px', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 24px rgba(13,43,85,0.08)', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', fontWeight: 400, color: '#0D2B55', marginBottom: '24px' }}>➕ Ajouter un Confirmé</h2>

          <div className="form-grid">
            <div><label className="form-label">Nom *</label><input className="form-input" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Nom"/></div>
            <div><label className="form-label">Prénom *</label><input className="form-input" type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom"/></div>
          </div>

          <div className="form-grid">
            <div>
              <label className="form-label">Catégorie *</label>
              <select className="form-select" name="categorie" value={form.categorie} onChange={handleChange}>
                <option value="">-- Sélectionnez --</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">Année *</label>
              <select className="form-select" name="annee" value={form.annee} onChange={handleChange}>
                <option value="">-- Sélectionnez --</option>
                {annees.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label className="form-label">Père Célébrant</label>
            <input className="form-input" type="text" name="pereCelebrant" value={form.pereCelebrant} onChange={handleChange} placeholder="Nom du père célébrant"/>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label className="form-label">Photo</label>
            <input type="file" accept="image/*" onChange={handlePhoto} style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#0D2B55' }}/>
            {apercu && (
              <div style={{ marginTop: '12px', position: 'relative', width: '100px', height: '100px', borderRadius: '8px', overflow: 'hidden', border: '2px solid rgba(201,168,76,0.3)' }}>
                <Image src={apercu} alt="Aperçu" fill style={{ objectFit: 'cover' }}/>
              </div>
            )}
          </div>

          <button onClick={handleAjouter} disabled={envoi} style={{ background: '#7A1A1A', color: '#FFFFFF', border: 'none', borderRadius: '6px', padding: '14px 32px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', opacity: envoi ? 0.7 : 1 }}>
            {envoi ? '⏳ Enregistrement...' : '✅ Ajouter'}
          </button>
        </div>

        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(13,43,85,0.08)' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', fontWeight: 400, color: '#0D2B55', padding: '20px 24px', background: '#FFFFFF', borderBottom: '1px solid rgba(201,168,76,0.2)', margin: 0 }}>
            📋 Liste des Confirmés ({liste.length})
          </h2>
          {chargement ? (
            <div style={{ background: '#FFFFFF', padding: '40px', textAlign: 'center' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>⏳ Chargement...</p></div>
          ) : liste.length === 0 ? (
            <div style={{ background: '#FFFFFF', padding: '40px', textAlign: 'center' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun confirmé enregistré.</p></div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr><th>#</th><th>Photo</th><th>Nom</th><th>Prénom</th><th>Catégorie</th><th>Année</th><th>Père Célébrant</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {liste.map((c) => (
                    <tr key={c.id}>
                      <td style={{ color: '#C9A84C', fontWeight: 700 }}>{c.id}</td>
                      <td>
                        {c.photo ? (
                          <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '6px', overflow: 'hidden' }}>
                            <Image src={c.photo} alt={c.nom} fill style={{ objectFit: 'cover' }}/>
                          </div>
                        ) : (
                          <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#FFF5F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🔥</div>
                        )}
                      </td>
                      <td style={{ fontWeight: 700 }}>{c.nom}</td>
                      <td>{c.prenom}</td>
                      <td><span style={{ background: '#FFF5F0', color: '#7A1A1A', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{c.categorie}</span></td>
                      <td>{c.annee}</td>
                      <td>{c.pereCelebrant || '-'}</td>
                      <td><button className="delete-btn" onClick={() => handleSupprimer(c.id)}>🗑 Supprimer</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}