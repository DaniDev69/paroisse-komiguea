import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function DonPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #4A2E08 0%, #8A5A18 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#FBF4E0', marginBottom: '16px' }}>Générosité</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '48px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '20px' }}>Faire un Don</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#FBF4E0', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto' }}>
              &ldquo; Que chacun donne comme il l&apos;a résolu en son cœur, sans tristesse ni contrainte, car Dieu aime celui qui donne avec joie. &rdquo; — 2 Corinthiens 9,7
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Votre Générosité</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55', marginBottom: '28px' }}>Soutenez Notre Communauté</h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 32px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.85, marginBottom: '20px' }}>
              Votre don, qu&apos;il soit grand ou petit, contribue à la vie de notre paroisse, à l&apos;entretien de notre église, à la formation des catéchistes et au soutien des plus vulnérables de notre communauté.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.85, marginBottom: '48px' }}>
              Vous souhaitez faire un don en nature ou en espèce ? C&apos;est ici !
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
              <div style={{ background: '#FAF8F3', borderRadius: '12px', padding: '32px', border: '1px solid rgba(201,168,76,0.2)', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎁</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#0D2B55', marginBottom: '12px' }}>Don en Nature</h3>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.7 }}>
                  Vivres, vêtements, matériaux de construction, équipements liturgiques...
                </p>
              </div>
              <div style={{ background: '#FAF8F3', borderRadius: '12px', padding: '32px', border: '1px solid rgba(201,168,76,0.2)', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>💰</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#0D2B55', marginBottom: '12px' }}>Don en Espèce</h3>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.7 }}>
                  Contribution financière via Mobile Money ou en espèce à la paroisse.
                </p>
              </div>
            </div>

            <Link href="/don/formulaire" style={{ display: 'inline-block', background: '#C9A84C', color: '#0D2B55', fontFamily: 'Lato, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}>
              💝 Mon Don
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}