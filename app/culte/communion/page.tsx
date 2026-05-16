'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'

type Photo = { id: number; url: string }
type Communion = { id: number; nom: string; prenom: string; categorie: string; annee: number; pereCelebrant: string; photos: Photo[] }

const CandidatCard = ({ candidat }: { candidat: Communion }) => {
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    if (candidat.photos.length <= 1) return
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % candidat.photos.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [candidat.photos.length])

  return (
    <div style={{ background: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 20px rgba(13,43,85,0.08)', transition: 'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(13,43,85,0.15)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(13,43,85,0.08)' }}
    >
      <div style={{ position: 'relative', height: '220px', background: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)', overflow: 'hidden' }}>
        {candidat.photos.length > 0 ? (
          <>
            <Image src={candidat.photos[photoIndex].url} alt={candidat.prenom} fill sizes="33vw" style={{ objectFit: 'cover', transition: 'opacity 0.5s' }}/>
            {candidat.photos.length > 1 && (
              <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', zIndex: 2 }}>
                {candidat.photos.map((_, i) => (
                  <div key={i} onClick={() => setPhotoIndex(i)} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === photoIndex ? '#C9A84C' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'background 0.3s' }}></div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '48px', opacity: 0.3 }}>🍞</div>
        )}
      </div>
      <div style={{ padding: '18px 20px' }}>
        <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', fontWeight: 600, color: '#0D2B55', marginBottom: '6px' }}>{candidat.prenom} {candidat.nom}</h3>
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '11px', color: '#C9A84C', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{candidat.annee}</p>
        {candidat.pereCelebrant && (
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '14px', color: '#6B7A8D', fontStyle: 'italic' }}>Père : {candidat.pereCelebrant}</p>
        )}
        <span style={{ display: 'inline-block', marginTop: '8px', background: '#F3EEFF', color: '#2A0D55', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>{candidat.categorie}</span>
      </div>
    </div>
  )
}

export default function CommunionPage() {
  const [communiants, setCommuniants] = useState<Communion[]>([])
  const [chargement, setChargement] = useState(true)
  const [voirTout, setVoirTout] = useState(false)
  const [showDownload, setShowDownload] = useState(false)
  const [anneeDownload, setAnneeDownload] = useState('')
  const annees = Array.from({ length: 30 }, (_, i) => (2024 - i).toString())

  useEffect(() => {
    fetch('/api/listes/communions')
      .then(r => r.json())
      .then(data => { setCommuniants(Array.isArray(data) ? data : []); setChargement(false) })
      .catch(() => setChargement(false))
  }, [])

  const visibles = voirTout ? communiants : communiants.slice(0, 6)

  const handleDownloadPhotos = async () => {
    if (!anneeDownload) return alert('Veuillez sélectionner une année')
    const filtered = communiants.filter(c => c.annee === parseInt(anneeDownload))
    if (filtered.length === 0) return alert('Aucun communiant pour cette année')
    const photos = filtered.flatMap(c => c.photos.map(p => p.url))
    if (photos.length === 0) return alert('Aucune photo disponible pour cette année')
    for (let i = 0; i < photos.length; i++) {
      const link = document.createElement('a')
      link.href = photos[i]
      link.download = `communion_${anneeDownload}_${i + 1}.jpg`
      link.click()
      await new Promise(r => setTimeout(r, 300))
    }
    setShowDownload(false)
  }

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #2A0D55 0%, #4A1A80 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Sacrement</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Bienvenue, chers fidèles</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '22px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '650px', margin: '0 auto 32px' }}>
              Vous êtes sur votre espace dédié au sacrement de la <strong style={{ color: '#E2C070' }}>Sainte Communion</strong>
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/culte/communion/liste" style={{ display: 'inline-block', background: '#C9A84C', color: '#0D2B55', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '4px' }}>
                Consulter la Liste
              </Link>
              <button onClick={() => setShowDownload(!showDownload)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#FFFFFF', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', borderRadius: '4px', cursor: 'pointer' }}>
                📥 Télécharger les Photos
              </button>
            </div>
            {showDownload && (
              <div style={{ maxWidth: '400px', margin: '24px auto 0', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '24px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '12px', letterSpacing: '1px', color: '#E2C070', marginBottom: '12px', textTransform: 'uppercase' }}>Choisir une Année</p>
                <select value={anneeDownload} onChange={(e) => setAnneeDownload(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: 'none', fontFamily: 'Lato, sans-serif', fontSize: '14px', color: '#0D2B55', marginBottom: '12px' }}>
                  <option value="">-- Sélectionnez une année --</option>
                  {annees.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
                <button onClick={handleDownloadPhotos} style={{ width: '100%', padding: '12px', background: '#C9A84C', color: '#0D2B55', border: 'none', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
                  ⬇ Télécharger
                </button>
              </div>
            )}
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '60px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Le Sacrement</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55', marginBottom: '32px' }}>La Communion, Pain de Vie</h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 32px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85 }}>
              La Première Communion est un moment inoubliable dans la vie du chrétien. C&apos;est la première fois que la personne reçoit le Corps et le Sang de Jésus-Christ dans l&apos;Eucharistie.
            </p>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '60px 40px' }}>
          <style>{`
            .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
            @media (max-width: 900px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .cards-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Notre Communauté</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Nos Communiants</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          {chargement ? (
            <div style={{ textAlign: 'center', padding: '40px' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>⏳ Chargement...</p></div>
          ) : communiants.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}><p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun communiant enregistré pour le moment.</p></div>
          ) : (
            <>
              <div className="cards-grid">
                {visibles.map((c) => <CandidatCard key={c.id} candidat={c} />)}
              </div>
              {communiants.length > 6 && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <button onClick={() => setVoirTout(!voirTout)} style={{ background: '#2A0D55', color: '#FBF4E0', border: 'none', borderRadius: '6px', padding: '14px 36px', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer' }}>
                    {voirTout ? '▲ Voir Moins' : `▼ Voir Plus (${communiants.length - 6} restants)`}
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/culte/sacrements" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour aux Sacrements
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}