'use client'

import { useState } from 'react'
import Footer from '@/components/layout/Footer'

export default function DonFormulairePage() {
  const [form, setForm] = useState({ nom: '', prenom: '', telephone: '', nature: '', precisionNature: '', montant: '', paiement: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.nature) return alert('Veuillez choisir la nature du don')
    if (form.nature === 'espece' && !form.paiement) return alert('Veuillez choisir un mode de paiement')
    if (form.nature === 'nature' && !form.precisionNature) return alert('Veuillez préciser la nature de votre don')
    setSubmitted(true)
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #4A2E08 0%, #8A5A18 100%)', padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#FBF4E0', marginBottom: '16px' }}>Formulaire</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '44px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2 }}>Mon Don</h1>
          </div>
        </section>

        {submitted ? (
          <section style={{ background: '#FAF8F3', padding: '80px 40px', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', padding: '56px', boxShadow: '0 8px 40px rgba(13,43,85,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>🙏</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', fontWeight: 400, color: '#0D2B55', marginBottom: '16px' }}>Merci pour votre Don !</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.8 }}>
                Que Dieu vous bénisse et récompense votre générosité. Votre don contribue à la vie et au rayonnement de notre paroisse.
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
              .form-group { margin-bottom: 20px; }
              .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
              .paiement-btn { padding: 14px 20px; border: 2px solid rgba(201,168,76,0.3); border-radius: 8px; background: #FFFFFF; font-family: Lato, sans-serif; font-size: 13px; font-weight: 700; color: #0D2B55; cursor: pointer; transition: all 0.2s; text-align: center; width: 100%; }
              .paiement-btn.selected { border-color: #C9A84C; background: #FBF4E0; color: #7A4A10; }
              @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }
            `}</style>

            <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', borderRadius: '16px', padding: '48px', boxShadow: '0 8px 40px rgba(13,43,85,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '22px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>Formulaire de Don</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#6B7A8D', fontStyle: 'italic', marginBottom: '32px' }}>Nom et prénom facultatifs</p>

              <div className="form-grid" style={{ marginBottom: '20px' }}>
                <div>
                  <label className="form-label">Nom (facultatif)</label>
                  <input className="form-input" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom"/>
                </div>
                <div>
                  <label className="form-label">Prénom (facultatif)</label>
                  <input className="form-input" type="text" name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom"/>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Numéro de téléphone</label>
                <input className="form-input" type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+229 XX XX XX XX"/>
              </div>

              <div className="form-group">
                <label className="form-label">Nature du Don *</label>
                <select className="form-select" name="nature" value={form.nature} onChange={handleChange}>
                  <option value="">-- Choisissez --</option>
                  <option value="nature">Don en Nature</option>
                  <option value="espece">Don en Espèce</option>
                </select>
              </div>

              {/* DON EN NATURE */}
              {form.nature === 'nature' && (
                <div className="form-group" style={{ background: '#FAF8F3', borderRadius: '10px', padding: '20px', border: '1px solid rgba(201,168,76,0.2)' }}>
                  <label className="form-label">Précisez votre don *</label>
                  <textarea className="form-input" name="precisionNature" value={form.precisionNature} onChange={handleChange} placeholder="Ex: Sacs de riz, vêtements, matériaux de construction..." rows={4} style={{ resize: 'vertical' }}/>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '14px', color: '#6B7A8D', fontStyle: 'italic', marginTop: '8px' }}>
                    Notre équipe vous contactera pour organiser la remise de votre don.
                  </p>
                </div>
              )}

              {/* DON EN ESPÈCE */}
              {form.nature === 'espece' && (
                <div style={{ background: '#FAF8F3', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)', marginBottom: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Montant (FCFA)</label>
                    <input className="form-input" type="number" name="montant" value={form.montant} onChange={handleChange} placeholder="Ex: 5000" min="500"/>
                    {form.montant && (
                      <p style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#C9A84C', marginTop: '8px' }}>
                        Montant : <strong>{parseInt(form.montant).toLocaleString()} FCFA</strong>
                      </p>
                    )}
                  </div>

                  <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>Mode de Paiement *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    {['MTN Mobile Money', 'Moov Money', 'Celtis Cash'].map((mode) => (
                      <button key={mode} className={`paiement-btn ${form.paiement === mode ? 'selected' : ''}`} onClick={() => setForm({ ...form, paiement: mode })}>
                        {mode === 'MTN Mobile Money' && '🟡 '}
                        {mode === 'Moov Money' && '🔵 '}
                        {mode === 'Celtis Cash' && '🟠 '}
                        {mode}
                      </button>
                    ))}
                  </div>

                  {form.paiement && form.montant && (
                    <div style={{ marginTop: '16px', background: '#FFFFFF', borderRadius: '8px', padding: '14px 18px', border: '1px solid rgba(201,168,76,0.3)' }}>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#0D2B55', fontStyle: 'italic', margin: 0 }}>
                        📱 Paiement de <strong>{parseInt(form.montant).toLocaleString()} FCFA</strong> via <strong>{form.paiement}</strong>
                      </p>
                    </div>
                  )}
                </div>
              )}

              <button onClick={handleSubmit} style={{ width: '100%', padding: '16px', background: '#C9A84C', color: '#0D2B55', border: 'none', borderRadius: '8px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '8px' }}>
                💝 Soumettre Mon Don
              </button>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}