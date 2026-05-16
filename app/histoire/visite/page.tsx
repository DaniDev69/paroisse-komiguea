'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

const photos = [
  { id: 1, src: '/images/eglise.jpg', titre: 'Façade de l\'Église', desc: 'Vue extérieure de la Paroisse  Notre Dame de l\'Assomption de Komiguéa' },
  { id: 2, src: '/images/Autel.jpg', titre: 'L\'Autel', desc: 'L\'autel principal où sont célébrées les messes' },
  { id: 3, src: '/images/eglise_vue.jpg', titre: 'Intérieur de l\'Église', desc: 'La nef principale et les bancs des fidèles' },
  { id: 4, src: '/images/chorale.jpg', titre: 'La Communauté', desc: 'Notre belle communauté paroissiale réunie' },
  { id: 5, src: '/images/mariagee.jpg', titre: 'Célébration de Mariage', desc: 'Une belle cérémonie de mariage dans notre église' },
  { id: 6, src: '/images/histoire.jpg', titre: 'Moments Historiques', desc: 'Les grands moments de l\'histoire de notre paroisse' },
]

export default function VisiteVirtuellePage() {
  const [photoActive, setPhotoActive] = useState<number | null>(null)

  return (
    <>
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #2A0D55 0%, #4A1A80 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Découverte</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Visite Virtuelle</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Explorez notre belle église depuis chez vous
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ background: '#FFFFFF', padding: '60px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.85 }}>
              Bienvenue dans la visite virtuelle de la Paroisse Notre Dame de l&apos;Assomption de Komiguéa. Parcourez notre galerie de photos pour découvrir les beautés de notre Eglise et les moments forts de notre vie communautaire.
            </p>
          </div>
        </section>

        {/* GALERIE */}
        <section style={{ background: '#FAF8F3', padding: '60px 40px' }}>
          <style>{`
            .galerie-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              max-width: 1200px;
              margin: 0 auto;
            }
            .galerie-item {
              border-radius: 10px;
              overflow: hidden;
              position: relative;
              aspect-ratio: 4/3;
              cursor: pointer;
              box-shadow: 0 4px 16px rgba(0,0,0,0.1);
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .galerie-item:hover {
              transform: scale(1.03);
              box-shadow: 0 12px 40px rgba(13,43,85,0.2);
            }
            .galerie-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(13,43,85,0.9) 0%, transparent 60%);
              opacity: 0;
              transition: opacity 0.3s;
              display: flex;
              align-items: flex-end;
              padding: 20px;
            }
            .galerie-item:hover .galerie-overlay {
              opacity: 1;
            }
            .modal-bg {
              position: fixed;
              inset: 0;
              background: rgba(0,0,0,0.85);
              z-index: 1000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            .modal-content {
              background: #FFFFFF;
              border-radius: 12px;
              overflow: hidden;
              max-width: 800px;
              width: 100%;
              box-shadow: 0 24px 80px rgba(0,0,0,0.4);
            }
            @media (max-width: 900px) { .galerie-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .galerie-grid { grid-template-columns: 1fr; } }
          `}</style>

            {/* VIDÉO */}
<section style={{ background: '#0D2B55', padding: '50px 30px', textAlign: 'center' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '12px' }}>Vidéo</p>
    <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#FFFFFF', marginBottom: '8px' }}>
      Vivez la Présentation de la Paroisse
    </h2>
    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#B8C5D4', fontStyle: 'italic', marginBottom: '32px' }}>
      Découvrez notre communauté en vidéo
    </p>
    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}>
      <video
        controls
        controlsList="nodownload"
        style={{ width: '100%', display: 'block', maxHeight: '500px', background: '#000' }}
        poster="/images/eglise.jpg"
      >
        <source src="/videos/presentation-paroisse.mp4" type="video/mp4"/>
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>

  </div>

</section>



          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Galerie</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Notre Église en Images</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="galerie-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="galerie-item" onClick={() => setPhotoActive(photo.id)}>
                <Image src={photo.src} alt={photo.titre} fill sizes="33vw" style={{ objectFit: 'cover' }}/>
                <div className="galerie-overlay">
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#FFFFFF', marginBottom: '4px' }}>{photo.titre}</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '13px', color: '#B8C5D4', fontStyle: 'italic' }}>{photo.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {photoActive && (
          <div className="modal-bg" onClick={() => setPhotoActive(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {photos.filter((p) => p.id === photoActive).map((photo) => (
                <div key={photo.id}>
                  <div style={{ position: 'relative', height: '400px' }}>
                    <Image src={photo.src} alt={photo.titre} fill sizes="800px" style={{ objectFit: 'cover' }}/>
                  </div>
                  <div style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#0D2B55', marginBottom: '6px' }}>{photo.titre}</h3>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', fontStyle: 'italic' }}>{photo.desc}</p>
                    </div>
                    <button onClick={() => setPhotoActive(null)} style={{ background: '#FAF8F3', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '6px', padding: '10px 20px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, color: '#0D2B55', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase', flexShrink: 0 }}>
                      ✕ Fermer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/histoire" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour Histoire
          </Link>
        </section>

      </main>
      <Footer />
    </>
  )
}