'use client'

import { useState } from 'react'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.nom || !form.message) return alert('Veuillez remplir les champs obligatoires')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch {
      alert('Erreur de connexion au serveur.')
    }
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Communication</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Nous Contacter</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Nous sommes à votre écoute
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; max-width: 1100px; margin: 0 auto; align-items: start; }
            .contact-info { display: flex; flex-direction: column; gap: 24px; }
            .info-card { background: #FFFFFF; border-radius: 10px; padding: 24px; border: 1px solid rgba(201,168,76,0.2); display: flex; align-items: flex-start; gap: 16px; }
            .info-icon { width: 44px; height: 44px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
            .form-card { background: #FFFFFF; border-radius: 12px; padding: 40px; box-shadow: 0 8px 40px rgba(13,43,85,0.1); border: 1px solid rgba(201,168,76,0.2); }
            .form-group { margin-bottom: 20px; }
            .form-label { display: block; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 8px; font-weight: 600; }
            .form-required { color: #C9401A; margin-left: 4px; }
            .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; transition: border-color 0.2s; box-sizing: border-box; }
            .form-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
            .form-textarea { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; resize: vertical; min-height: 120px; transition: border-color 0.2s; box-sizing: border-box; }
            .form-textarea:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
            .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            .submit-btn { width: 100%; padding: 16px; background: #0D2B55; color: #FBF4E0; border: none; border-radius: 6px; font-family: Lato, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s; }
            .submit-btn:hover { background: #1A4480; }
            @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } .form-grid { grid-template-columns: 1fr; } }
          `}</style>

          {submitted ? (
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', background: '#FFFFFF', borderRadius: '12px', padding: '48px', boxShadow: '0 8px 40px rgba(13,43,85,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '16px' }}>Message Envoyé !</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.75 }}>
                Merci <strong>{form.nom}</strong> ! Votre message a bien été reçu. Nous vous répondrons dans les meilleurs délais.
              </p>
            </div>
          ) : (
            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon" style={{ background: '#EAF2FF' }}>📍</div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginBottom: '6px' }}>Adresse</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65 }}>Quartier Komiguéa<br/>Parakou, Bénin</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon" style={{ background: '#E8F5E8' }}>📞</div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginBottom: '6px' }}>Téléphone</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568' }}>+229 21 31 50 00</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon" style={{ background: '#FBF4E0' }}>✉</div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginBottom: '6px' }}>Email</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568' }}>paroisse.komiguea@<br/>diocese-parakou.bj</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon" style={{ background: '#FFF0F0' }}>🕐</div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginBottom: '6px' }}>Heures de Bureau</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65 }}>Lun – Ven : 8h – 12h<br/>15h – 17h</p>
                  </div>
                </div>
              </div>

              <div className="form-card">
                <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '22px', fontWeight: 400, color: '#0D2B55', marginBottom: '8px' }}>Envoyez-nous un Message</h2>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#6B7A8D', fontStyle: 'italic', marginBottom: '28px' }}>Les champs <span style={{ color: '#C9401A' }}>*</span> sont obligatoires</p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nom <span className="form-required">*</span></label>
                    <input className="form-input" type="text" name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com"/>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input className="form-input" type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+229 XX XX XX XX"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Sujet</label>
                    <input className="form-input" type="text" name="sujet" value={form.sujet} onChange={handleChange} placeholder="Objet de votre message"/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message <span className="form-required">*</span></label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Écrivez votre message ici..."/>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  ✉ Envoyer le Message
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}