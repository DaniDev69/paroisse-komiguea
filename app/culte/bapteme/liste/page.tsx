'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const annees = Array.from({ length: 30 }, (_, i) => (2024 - i).toString())
const categories = ['Petit enfant (0-7 ans)', 'Adolescent (8-17 ans)', 'Adulte (18-59 ans)', 'Senior (60 ans et plus)']

export default function BaptemeListePage() {
  const [annee, setAnnee] = useState('')
  const [categorie, setCategorie] = useState('')

const handleDownload = async () => {
  if (!annee || !categorie) return
  try {
    const res = await fetch(`/api/listes/baptemes?annee=${annee}&categorie=${encodeURIComponent(categorie)}`)
    const data = await res.json()
    if (data.length === 0) return alert('Aucun résultat trouvé.')

    // Générer PDF
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text('Paroisse Notre-Dame d\'Assomption de Komiguéa', 14, 20)
    doc.setFontSize(13)
    doc.text(`Liste des Baptisés — ${categorie} — ${annee}`, 14, 32)
    doc.setFontSize(10)
    doc.text('Nom', 14, 50)
    doc.text('Prénom', 60, 50)
    doc.text('Année', 110, 50)
    doc.text('Père Célébrant', 140, 50)
    doc.line(14, 53, 196, 53)

    data.forEach((b: any, i: number) => {
      const y = 60 + i * 10
      if (y > 270) return
      doc.text(b.nom || '', 14, y)
      doc.text(b.prenom || '', 60, y)
      doc.text(String(b.annee || ''), 110, y)
      doc.text(b.pereCelebrant || '', 140, y)
    })

    doc.save(`baptemes_${annee}_${categorie}.pdf`)

    // Aussi CSV
    const csv = [
      'Nom,Prénom,Année,Père Célébrant',
      ...data.map((b: any) => `${b.nom},${b.prenom},${b.annee},${b.pereCelebrant || ''}`)
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `baptemes_${annee}_${categorie}.csv`
    link.click()
    URL.revokeObjectURL(url)

  } catch {
    alert('Erreur lors du téléchargement.')
  }
}

  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D3B55 0%, #1A6080 100%)', padding: '70px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Registre</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '44px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2 }}>
              Liste des Baptisés
            </h1>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .liste-form { max-width: 700px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; padding: 48px; box-shadow: 0 8px 40px rgba(13,43,85,0.1); border: 1px solid rgba(201,168,76,0.2); }
            .form-group { margin-bottom: 28px; }
            .form-label { display: block; font-family: Cinzel, serif; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #0D2B55; margin-bottom: 10px; font-weight: 600; }
            .form-select { width: 100%; padding: 14px 18px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D2B55' stroke-width='2' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; cursor: pointer; transition: border-color 0.2s; }
            .form-select:focus { outline: none; border-color: #C9A84C; }
            .download-btn { width: 100%; padding: 16px; background: #C9A84C; color: #0D2B55; border: none; border-radius: 6px; font-family: Lato, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s, opacity 0.2s; margin-top: 8px; }
            .download-btn:hover { background: #E2C070; }
            .download-btn:disabled { opacity: 0.4; cursor: not-allowed; }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Recherche</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55', marginBottom: '12px' }}>Télécharger la Liste</h2>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>
              Sélectionnez l&apos;année et la catégorie pour télécharger la liste correspondante
            </p>
          </div>

          <div className="liste-form">
            <div className="form-group">
              <label className="form-label">Année de Baptême</label>
              <select className="form-select" value={annee} onChange={(e) => setAnnee(e.target.value)}>
                <option value="">-- Sélectionnez une année --</option>
                {annees.map((a) => (<option key={a} value={a}>{a}</option>))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Catégorie</label>
              <select className="form-select" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                <option value="">-- Sélectionnez une catégorie --</option>
                {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            </div>

            <div style={{ background: '#EAF2FF', borderRadius: '8px', padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>ℹ️</span>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#0D2B55', fontStyle: 'italic', margin: 0 }}>
                La liste contiendra : Nom, Prénom, Année de baptême et Père célébrant
              </p>
            </div>

            <button className="download-btn" disabled={!annee || !categorie} onClick={handleDownload}>
              ⬇ Télécharger la Liste
            </button>

            {(!annee || !categorie) && (
              <p style={{ textAlign: 'center', fontFamily: 'Crimson Text, serif', fontSize: '14px', color: '#8A7D6A', fontStyle: 'italic', marginTop: '12px' }}>
                Veuillez sélectionner une année et une catégorie pour activer le téléchargement
              </p>
            )}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '40px', textAlign: 'center' }}>
          <Link href="/culte/bapteme" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour Baptême
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}