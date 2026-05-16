import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function ToursPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Découverte</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Visites Guidées</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Découvrez l&apos;histoire et l&apos;architecture de notre belle église
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Programme</p>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55', marginBottom: '32px' }}>Informations sur les Visites</h2>
              <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
              {[
                { label: 'Visites Individuelles', icon: '👤', info: 'Premier dimanche du mois après la messe de midi — Accès libre' },
                { label: 'Visites en Groupe', icon: '👥', info: 'Pour les groupes de 10 personnes et plus — Sur réservation par email' },
                { label: 'Durée', icon: '⏱', info: 'Environ 45 minutes à 1 heure selon l\'intérêt du groupe' },
                { label: 'Tarif', icon: '🎁', info: 'Visite gratuite — Une offrande volontaire est la bienvenue' },
              ].map((item) => (
                <div key={item.label} style={{ background: '#FAF8F3', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginBottom: '6px' }}>{item.label}</h3>
                    <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65 }}>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#EAF2FF', borderRadius: '10px', padding: '28px 32px', textAlign: 'center', border: '1px solid rgba(13,43,85,0.1)' }}>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#0D2B55', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '16px' }}>
                📧 Pour réserver une visite de groupe, envoyez un email à :
              </p>
              <a href="mailto:paroisse.komiguea@diocese-parakou.bj" style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#1A4480', textDecoration: 'none', fontWeight: 600 }}>
                paroisse.komiguea@diocese-parakou.bj
              </a>
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