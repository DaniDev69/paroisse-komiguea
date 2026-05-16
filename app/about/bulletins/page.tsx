'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const bulletins = [
  { id: 1, titre: 'Bulletin du 06 Avril 2025', date: '2025-04-06', desc: 'Dimanche des Rameaux — Semaine Sainte', fichier: '/bulletins/bulletin_06_04_2025.pdf' },
  { id: 2, titre: 'Bulletin du 30 Mars 2025', date: '2025-03-30', desc: '5ème Dimanche de Carême', fichier: '/bulletins/bulletin_30_03_2025.pdf' },
  { id: 3, titre: 'Bulletin du 23 Mars 2025', date: '2025-03-23', desc: '4ème Dimanche de Carême — Laetare', fichier: '/bulletins/bulletin_23_03_2025.pdf' },
  { id: 4, titre: 'Bulletin du 16 Mars 2025', date: '2025-03-16', desc: '3ème Dimanche de Carême', fichier: '/bulletins/bulletin_16_03_2025.pdf' },
  { id: 5, titre: 'Bulletin du 09 Mars 2025', date: '2025-03-09', desc: '2ème Dimanche de Carême', fichier: '/bulletins/bulletin_09_03_2025.pdf' },
  { id: 6, titre: 'Bulletin du 02 Mars 2025', date: '2025-03-02', desc: '1er Dimanche de Carême', fichier: '/bulletins/bulletin_02_03_2025.pdf' },
]

export default function BulletinsPage() {
  const [dateChoisie, setDateChoisie] = useState('')
  const [resultat, setResultat] = useState<typeof bulletins[0] | null>(null)
  const [aucunResultat, setAucunResultat] = useState(false)

  const handleRecherche = () => {
    if (!dateChoisie) return alert('Veuillez choisir une date')
    const trouve = bulletins.find(b => b.date === dateChoisie)
    if (trouve) {
      setResultat(trouve)
      setAucunResultat(false)
    } else {
      setResultat(null)
      setAucunResultat(true)
    }
  }

  const handleTelechargement = (fichier: string, titre: string) => {
    const link = document.createElement('a')
    link.href = fichier
    link.download = `${titre}.pdf`
    link.click()
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #1A4A1A 0%, #2D7A2D 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Publications</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Bulletins Hebdomadaires</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Restez informés de la vie de notre paroisse
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* RECHERCHE PAR DATE */}
        <section style={{ background: '#FFFFFF', padding: '60px 40px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Recherche</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', fontWeight: 400, color: '#0D2B55', marginBottom: '32px' }}>
              Télécharger un Bulletin par Date
            </h2>

            <div style={{ background: '#FAF8F3', borderRadius: '12px', padding: '36px', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 24px rgba(13,43,85,0.08)' }}>
              <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0D2B55', marginBottom: '12px', fontWeight: 600 }}>
                🗓 Choisissez une Date
              </label>
              <input
                type="date"
                value={dateChoisie}
                onChange={(e) => { setDateChoisie(e.target.value); setResultat(null); setAucunResultat(false) }}
                style={{ width: '100%', padding: '14px 16px', border: '1.5px solid rgba(201,168,76,0.3)', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '15px', color: '#0D2B55', background: '#FFFFFF', boxSizing: 'border-box', marginBottom: '16px', cursor: 'pointer' }}
              />
              <button
                onClick={handleRecherche}
                style={{ width: '100%', padding: '14px', background: '#1A4A1A', color: '#FFFFFF', border: 'none', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                🔍 Rechercher
              </button>

              {/* RÉSULTAT */}
              {resultat && (
                <div style={{ marginTop: '24px', background: '#FFFFFF', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.3)', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📰</div>
                    <div>
                      <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#0D2B55', marginBottom: '4px' }}>{resultat.titre}</h3>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#6B7A8D', fontStyle: 'italic' }}>{resultat.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTelechargement(resultat.fichier, resultat.titre)}
                    style={{ width: '100%', padding: '12px', background: '#C9A84C', color: '#0D2B55', border: 'none', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer' }}
                  >
                    ⬇ Télécharger le Bulletin (PDF)
                  </button>
                </div>
              )}

              {aucunResultat && (
                <div style={{ marginTop: '20px', background: '#FFF0F0', borderRadius: '8px', padding: '16px', border: '1px solid rgba(201,64,26,0.2)' }}>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#C9401A', fontStyle: 'italic', margin: 0 }}>
                    ⚠ Aucun bulletin trouvé pour cette date.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* DERNIERS BULLETINS */}
        <section style={{ background: '#FAF8F3', padding: '60px 40px' }}>
          <style>{`
            .bulletins-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto; }
            .bulletin-card { background: #FFFFFF; border-radius: 10px; padding: 28px; border: 1px solid rgba(201,168,76,0.2); box-shadow: 0 4px 16px rgba(0,0,0,0.06); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; gap: 12px; }
            .bulletin-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(13,43,85,0.12); }
            @media (max-width: 900px) { .bulletins-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .bulletins-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Archives</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Nos Derniers Bulletins</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="bulletins-grid">
            {bulletins.map((b) => (
              <div key={b.id} className="bulletin-card">
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>📰</div>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C' }}>{b.date}</p>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', fontWeight: 600, color: '#0D2B55', lineHeight: 1.4 }}>{b.titre}</h3>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65, flex: 1 }}>{b.desc}</p>
                <button
                  onClick={() => handleTelechargement(b.fichier, b.titre)}
                  style={{ background: '#1A4A1A', color: '#FFFFFF', border: 'none', borderRadius: '4px', padding: '10px 20px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', textAlign: 'center' }}
                >
                  ⬇ Télécharger PDF
                </button>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/about" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour À Propos
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}