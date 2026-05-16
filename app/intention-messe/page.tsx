'use client'

import { useState } from 'react'
import Footer from '@/components/layout/Footer'

const intentionsDefaut = [
  'Pour la santé d\'un proche',
  'Pour le repos de l\'âme d\'un défunt',
  'Pour une intention personnelle',
  'Pour la paix dans le monde',
  'Pour la famille',
  'Pour une guérison',
  'Pour une réussite scolaire ou professionnelle',
  'Autre (préciser)',
]

const PRIX_PAR_MESSE = 2000

export default function IntentionMessePage() {
  const [form, setForm] = useState({ nom: '', prenom: '', numero: '', intentionChoisie: '', intentionPersonnelle: '', nombreMesses: 1 })
  const [panier, setPanier] = useState(false)
  const [paiement, setPaiement] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const total = form.nombreMesses * PRIX_PAR_MESSE

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleNombre = (val: number) => {
    if (val < 1) return
    setForm({ ...form, nombreMesses: val })
  }

  const handleAjouterPanier = () => {
    if (!form.intentionChoisie) return alert('Veuillez choisir une intention')
    if (!form.numero) return alert('Veuillez entrer votre numéro')
    setPanier(true)
  }

  const handlePayer = () => {
    if (!paiement) return alert('Veuillez choisir un mode de paiement')
    setSubmitted(true)
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Spiritualité</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '48px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Intentions de Messe</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '650px', margin: '0 auto' }}>
              Confiez vos intentions au Seigneur à travers la Sainte Messe. Chaque messe est une prière puissante portée par toute la communauté.
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {submitted ? (
          <section style={{ background: '#FAF8F3', padding: '80px 40px', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', padding: '56px', boxShadow: '0 8px 40px rgba(13,43,85,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>🙏</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', fontWeight: 400, color: '#0D2B55', marginBottom: '16px' }}>Intention Soumise !</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.8 }}>
                Votre intention de messe a bien été reçue. Le prêtre la portera lors de la célébration. Que le Seigneur exauce votre prière.
              </p>
            </div>
          </section>
        ) : (
          <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
            <style>{`
              .form-label { display: block; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 8px; font-weight: 600; }
              .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; box-sizing: border-box; transition: border-color 0.2s; }
              .form-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
              .form-select { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; appearance: none; }
              .form-select:focus { outline: none; border-color: #C9A84C; }
              .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
              .paiement-btn { padding: 14px 24px; border: 2px solid rgba(201,168,76,0.3); border-radius: 8px; background: #FFFFFF; font-family: Lato, sans-serif; font-size: 13px; font-weight: 700; color: #0D2B55; cursor: pointer; transition: all 0.2s; text-align: center; }
              .paiement-btn.selected { border-color: #C9A84C; background: #FBF4E0; color: #7A4A10; }
              .paiement-btn:hover { border-color: #C9A84C; }
              @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }
            `}</style>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '48px', boxShadow: '0 8px 40px rgba(13,43,85,0.08)', border: '1px solid rgba(201,168,76,0.2)', marginBottom: '32px' }}>
                <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '22px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>Formulaire d&apos;Intention</h2>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#6B7A8D', fontStyle: 'italic', marginBottom: '32px' }}>Le nom et prénom sont facultatifs</p>

                <div className="form-grid">
                  <div>
                    <label className="form-label">Nom (facultatif)</label>
                    <input className="form-input" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom"/>
                  </div>
                  <div>
                    <label className="form-label">Prénom (facultatif)</label>
                    <input className="form-input" type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom"/>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label className="form-label">Numéro de téléphone *</label>
                  <input className="form-input" type="tel" name="numero" value={form.numero} onChange={handleChange} placeholder="+229 XX XX XX XX"/>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label className="form-label">Intention *</label>
                  <select className="form-select" name="intentionChoisie" value={form.intentionChoisie} onChange={handleChange}>
                    <option value="">-- Choisissez une intention --</option>
                    {intentionsDefaut.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                {form.intentionChoisie === 'Autre (préciser)' && (
                  <div style={{ marginBottom: '20px' }}>
                    <label className="form-label">Précisez votre intention</label>
                    <textarea className="form-input" name="intentionPersonnelle" value={form.intentionPersonnelle} onChange={handleChange} placeholder="Décrivez votre intention..." rows={4} style={{ resize: 'vertical' }}/>
                  </div>
                )}

                <div style={{ marginBottom: '24px' }}>
                  <label className="form-label">Nombre de Messes</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                    <button onClick={() => handleNombre(form.nombreMesses - 1)} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid rgba(201,168,76,0.4)', background: '#FFFFFF', fontSize: '20px', cursor: 'pointer', color: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#0D2B55', minWidth: '40px', textAlign: 'center' }}>{form.nombreMesses}</span>
                    <button onClick={() => handleNombre(form.nombreMesses + 1)} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid rgba(201,168,76,0.4)', background: '#FFFFFF', fontSize: '20px', cursor: 'pointer', color: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                    <div style={{ background: '#EAF2FF', borderRadius: '8px', padding: '10px 20px', marginLeft: '8px' }}>
                      <p style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', margin: 0 }}>
                        {form.nombreMesses} messe{form.nombreMesses > 1 ? 's' : ''} = <strong style={{ color: '#C9A84C' }}>{total.toLocaleString()} FCFA</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <button onClick={handleAjouterPanier} style={{ width: '100%', padding: '16px', background: '#1A4A1A', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                  🛒 Ajouter au Panier
                </button>
              </div>

              {/* PANIER */}
              {panier && (
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '36px', boxShadow: '0 8px 40px rgba(13,43,85,0.08)', border: '2px solid #1A4A1A' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ width: '56px', height: '56px', background: '#1A4A1A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
                      🧺
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#0D2B55', marginBottom: '4px' }}>Votre Panier</h3>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', fontStyle: 'italic' }}>
                        {form.nombreMesses} messe{form.nombreMesses > 1 ? 's' : ''} — {form.intentionChoisie}
                      </p>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      <p style={{ fontFamily: 'Cinzel, serif', fontSize: '22px', color: '#C9A84C', fontWeight: 700 }}>{total.toLocaleString()} F</p>
                    </div>
                  </div>

                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0D2B55', marginBottom: '16px' }}>Mode de Paiement</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                    {['MTN Mobile Money', 'Moov Money', 'Celtis Cash'].map((mode) => (
                      <button key={mode} className={`paiement-btn ${paiement === mode ? 'selected' : ''}`} onClick={() => setPaiement(mode)}>
                        {mode === 'MTN Mobile Money' && '🟡 '}
                        {mode === 'Moov Money' && '🔵 '}
                        {mode === 'Celtis Cash' && '🟠 '}
                        {mode}
                      </button>
                    ))}
                  </div>

                  {paiement && (
                    <div style={{ background: '#FAF8F3', borderRadius: '8px', padding: '16px 20px', marginBottom: '20px', border: '1px solid rgba(201,168,76,0.2)' }}>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#0D2B55', fontStyle: 'italic', margin: 0 }}>
                        📱 Vous allez payer <strong>{total.toLocaleString()} FCFA</strong> via <strong>{paiement}</strong> au numéro <strong>+229 XX XX XX XX</strong>
                      </p>
                    </div>
                  )}

                  <button onClick={handlePayer} style={{ width: '100%', padding: '16px', background: '#C9A84C', color: '#0D2B55', border: 'none', borderRadius: '8px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer' }}>
                    ✅ Confirmer le Paiement — {total.toLocaleString()} FCFA
                  </button>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}