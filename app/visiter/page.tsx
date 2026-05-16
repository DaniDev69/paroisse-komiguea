import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const options = [
  { titre: 'Visites Guidées', icon: '🏛', desc: 'Visitez notre belle église avec un guide passionné par son histoire.', href: '/visiter/tours', bg: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)' },
  { titre: 'Horaires & Itinéraire', icon: '📍', desc: 'Retrouvez nos horaires d\'ouverture et comment nous rejoindre facilement.', href: '/visiter/horaires', bg: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)' },
  { titre: 'Nous Contacter', icon: '✉', desc: 'Une question ? Envoyez-nous un message ou appelez-nous.', href: '/contact', bg: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)' },
]

export default function VisiterPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Bienvenue</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Visiter la Paroisse</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Venez découvrir notre belle église et notre communauté
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .visiter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1000px; margin: 0 auto; }
            .visiter-card { border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); display: flex; flex-direction: column; transition: transform 0.3s, box-shadow 0.3s; }
            .visiter-card:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(13,43,85,0.15); }
            .visiter-card-top { height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; position: relative; overflow: hidden; }
            .visiter-card-top::before { content: ''; position: absolute; inset: 0; background-image: repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 16px); }
            .visiter-card-body { background: #FFFFFF; padding: 24px; border: 1px solid rgba(201,168,76,0.2); border-top: none; border-radius: 0 0 12px 12px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
            @media (max-width: 700px) { .visiter-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Informations</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Préparez Votre Visite</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="visiter-grid">
            {options.map((o) => (
              <div key={o.titre} className="visiter-card">
                <div className="visiter-card-top" style={{ background: o.bg }}>
                  <span style={{ fontSize: '44px', position: 'relative', zIndex: 1 }}>{o.icon}</span>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', position: 'relative', zIndex: 1 }}>{o.titre}</span>
                </div>
                <div className="visiter-card-body">
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '17px', color: '#4A5568', lineHeight: 1.75, flex: 1 }}>{o.desc}</p>
                  <Link href={o.href} style={{ display: 'block', padding: '11px 20px', background: o.bg, color: '#FFFFFF', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', textAlign: 'center' }}>
                    Accéder →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour à l&apos;Accueil
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}