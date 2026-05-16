'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const cevbOptions = ['CEVB Saint Gabriel', 'CEVB NDA de Komiguéa', 'CEVB Saint Joseph', 'CEVB Saint Michel', 'CEVB Saints Pierre et Paul', 'CEVB Saint Etienne', 'CEVB Saint David', 'CEVB Saint Jean Baptiste', 'CEVB Sainte Thérèse', 'CEVB Saint Célestin', 'CEVB Saint Paul','CEVB ND Reine de la famille', 'CEVB Saint François', 'CEVB Saint Antoine de Padoue']
const mouvementOptions = ['Liturgie', 'Renouveau Charismatique', 'Maguier', 'Chorale', 'Servants de Messe', 'Autre']

export default function FidelesPage() {
  const [form, setForm] = useState({ nom: '', prenom: '', fonction: '', age: '', cevb: '', mouvement: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
  if (!form.nom || !form.prenom || !form.age) return alert('Veuillez remplir les champs obligatoires')
  
  try {
    const response = await fetch('/api/inscriptions/fideles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: form.nom,
        prenom: form.prenom,
        fonction: form.fonction,
        age: parseInt(form.age),
        cevb: form.cevb,
        mouvement: form.mouvement,
      }),
    })
    
    if (response.ok) {
      setSubmitted(true)
    } else {
      alert('Erreur lors de l\'inscription. Veuillez réessayer.')
    }
  } catch (error) {
    alert('Erreur de connexion au serveur.')
  }

  }

  return (
    
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Inscription</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '44px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2 }}>Fidèles</h1>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .form-card { max-width: 700px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; padding: 48px; box-shadow: 0 8px 40px rgba(13,43,85,0.1); border: 1px solid rgba(201,168,76,0.2); }
            .form-group { margin-bottom: 24px; }
            .form-label { display: block; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 8px; font-weight: 600; }
            .form-required { color: #C9401A; margin-left: 4px; }
            .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; transition: border-color 0.2s; }
            .form-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
            .form-select { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D2B55' stroke-width='2' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; cursor: pointer; }
            .form-select:focus { outline: none; border-color: #C9A84C; }
            .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .submit-btn { width: 100%; padding: 16px; background: #0D2B55; color: #FBF4E0; border: none; border-radius: 6px; font-family: Lato, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s; margin-top: 8px; }
            .submit-btn:hover { background: #1A4480; }
            @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } .form-card { padding: 28px; } }
          `}</style>

          {submitted ? (
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', background: '#FFFFFF', borderRadius: '12px', padding: '48px', boxShadow: '0 8px 40px rgba(13,43,85,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '16px' }}>Inscription Enregistrée !</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.75, marginBottom: '28px' }}>
                Bienvenue <strong>{form.prenom} {form.nom}</strong> ! Votre inscription a bien été enregistrée. La paroisse vous réconnait comme fidél.
              </p>
              <Link href="/about/inscription" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
                ← Retour aux Inscriptions
              </Link>
            </div>
          ) : (
            <div className="form-card">
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>Formulaire d&apos;Inscription</h2>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#6B7A8D', fontStyle: 'italic' }}>Les champs marqués <span style={{ color: '#C9401A' }}>*</span> sont obligatoires</p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Nom <span className="form-required">*</span></label>
                  <input className="form-input" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Prénom <span className="form-required">*</span></label>
                  <input className="form-input" type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom"/>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Fonction</label>
                  <input className="form-input" type="text" name="fonction" value={form.fonction} onChange={handleChange} placeholder="Ex: Enseignant, Commerçant..."/>
                </div>
                <div className="form-group">
                  <label className="form-label">Âge <span className="form-required">*</span></label>
                  <input className="form-input" type="number" name="age" value={form.age} onChange={handleChange} placeholder="Votre âge" min="1" max="120"/>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">CEVB</label>
                <select className="form-select" name="cevb" value={form.cevb} onChange={handleChange}>
                  <option value="">-- Sélectionnez votre CEVB --</option>
                  {cevbOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Mouvement ou Groupe de prière</label>
                <select className="form-select" name="mouvement" value={form.mouvement} onChange={handleChange}>
                  <option value="">-- Sélectionnez votre mouvement --</option>
                  {mouvementOptions.map((m) => (<option key={m} value={m}>{m}</option>))}
                </select>
              </div>

              <button className="submit-btn" onClick={handleSubmit}>
                ✅ Soumettre l&apos;Inscription
              </button>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  )

}