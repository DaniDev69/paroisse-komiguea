import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function HorairesVisiterPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #4A2E08 0%, #8A5A18 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#FBF4E0', marginBottom: '16px' }}>Pratique</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Horaires & Itinéraire</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#FBF4E0', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Tout ce qu&apos;il faut savoir pour nous rendre visite
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

            <div>
              <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Horaires de visite</p>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '28px' }}>Heures d&apos;Ouverture</h2>
              {[
                { jour: 'Lundi', heure: 'Fermé' },
                { jour: 'Mardi – Vendredi', heure: '7h00 – 12h00 · 15h00 – 18h00' },
                { jour: 'Samedi', heure: '7h00 – 12h00' },
                { jour: 'Dimanche', heure: '6h00 – 13h00' },
              ].map((h) => (
                <div key={h.jour} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
                  <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#4A5568', fontWeight: 600 }}>{h.jour}</span>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: h.heure === 'Fermé' ? '#C9401A' : '#0D2B55' }}>{h.heure}</span>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Localisation</p>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 400, color: '#0D2B55', marginBottom: '28px' }}>Comment Nous Trouver</h2>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)', marginBottom: '20px' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#C9A84C', marginBottom: '8px', letterSpacing: '1px' }}>ADRESSE</p>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#0D2B55', lineHeight: 1.65 }}>
                  Komiguéa<br/>Parakou, Bénin
                </p>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)', marginBottom: '20px' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#C9A84C', marginBottom: '8px', letterSpacing: '1px' }}>TÉLÉPHONE</p>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#0D2B55' }}>+229 21 31 50 00</p>
              </div>
              <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#C9A84C', marginBottom: '8px', letterSpacing: '1px' }}>REPÈRE</p>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#0D2B55', lineHeight: 1.65 }}>
                  À proximité du marché de Komiguéa, facilement accessible depuis le centre de komiguéa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/visiter" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour Visiter
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}