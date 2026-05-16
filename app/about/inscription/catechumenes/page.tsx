'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const classeOptions = ['CI', 'CP', 'CE1', 'CE2', 'CM1', 'CM2', '6ème', '5ème', '4ème', '3ème', '2nde', '1ère', 'Terminale', '1ère Année Université', '2ème Année Université', '3ème Année Université', 'Autre']
const langueOptions = ['Bariba', 'Français']
const anneeOptions = ['1ère année A', '2ème année A', '3ème année A','1ère année en langue', '2ème année en langue', '3ème année en langue', '1ère année B', '2ème année B', '3ème année B', '4ème année B', '5ème année B',]

export default function CatechumenesPage() {
  const [form, setForm] = useState({ nom: '', prenom: '', classe: '', langue: '', annee: '', telephone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.nom || !form.prenom || !form.classe) return alert('Veuillez remplir les champs obligatoires')
    try {
      const response = await fetch('/api/inscriptions/catechumenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Erreur lors de l\'inscription. Veuillez réessayer.')
      }
    } catch {
      alert('Erreur de connexion au serveur.')
    }
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #1A4A1A 0%, #2D7A2D 100%)', padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Inscription</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '44px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2 }}>Catéchumènes</h1>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .form-card { max-width: 700px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; padding: 48px; box-shadow: 0 8px 40px rgba(13,43,85,0.1); border: 1px solid rgba(201,168,76,0.2); }
            .form-group { margin-bottom: 24px; }
            .form-label { display: block; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 8px; font-weight: 600; }
            .form-required { color: #C9401A; margin-left: 4px; }
            .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; transition: border-color 0.2s; }
            .form-input:focus { outline: none; border-color: #2D7A2D; background: #FFFFFF; }
            .form-select { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D2B55' stroke-width='2' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; cursor: pointer; }
            .form-select:focus { outline: none; border-color: #2D7A2D; }
            .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .submit-btn { width: 100%; padding: 16px; background: #1A4A1A; color: #FFFFFF; border: none; border-radius: 6px; font-family: Lato, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s; margin-top: 8px; }
            .submit-btn:hover { background: #2D7A2D; }
            @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } .form-card { padding: 28px; } }
          `}</style>

          {submitted ? (
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', background: '#FFFFFF', borderRadius: '12px', padding: '48px', boxShadow: '0 8px 40px rgba(13,43,85,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '16px' }}>Inscription Enregistrée !</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.75, marginBottom: '28px' }}>
                Bienvenue <strong>{form.prenom} {form.nom}</strong> ! Votre inscription en tant que catéchumène a bien été enregistrée.
              </p>
              <Link href="/about/inscription" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '5px' }}>
                ← Retour aux Inscriptions
              </Link>
            </div>
          ) : (
            <div className="form-card">
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>Formulaire Catéchumène</h2>
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

              <div className="form-group">
                <label className="form-label">Classe <span className="form-required">*</span></label>
                <select className="form-select" name="classe" value={form.classe} onChange={handleChange}>
                  <option value="">-- Sélectionnez votre classe --</option>
                  {classeOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Langue</label>
                  <select className="form-select" name="langue" value={form.langue} onChange={handleChange}>
                    <option value="">-- Sélectionnez --</option>
                    {langueOptions.map((l) => (<option key={l} value={l}>{l}</option>))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Année de Catéchisme</label>
                  <select className="form-select" name="annee" value={form.annee} onChange={handleChange}>
                    <option value="">-- Sélectionnez --</option>
                    {anneeOptions.map((a) => (<option key={a} value={a}>{a}</option>))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Numéro d&apos;un Parent</label>
                <input className="form-input" type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+229 XX XX XX XX"/>
              </div>

              <button className="submit-btn" onClick={handleSubmit}>
                ✅ Soumettre l&apos;Inscription
              </button>
            </div>
          )}
        </section>

        <section style={{ background: '#FFFFFF', padding: '40px', textAlign: 'center' }}>
          <Link href="/about/inscription" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour aux Inscriptions
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}