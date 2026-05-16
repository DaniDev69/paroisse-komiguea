import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const sections = [
  { titre: 'Inscription Paroissiale', icon: '📝', desc: 'Rejoignez officiellement notre communauté paroissiale.', href: '/about/inscription', bg: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)' },
  { titre: 'Bulletins Hebdomadaires', icon: '📰', desc: 'Consultez et téléchargez nos bulletins paroissiaux.', href: '/about/bulletins', bg: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)' },
  { titre: 'Ressources Communautaires', icon: '🤝', desc: 'Découvrez les ressources disponibles pour la communauté.', href: '/about/ressources', bg: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)' },
  { titre: 'Personnel & Conseil', icon: '👥', desc: 'Rencontrez l\'équipe pastorale et le conseil paroissial.', href: '/about/personnel', bg: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)' },
  { titre: 'Nous Contacter', icon: '✉', desc: 'Envoyez-nous un message ou venez nous rendre visite.', href: '/contact', bg: 'linear-gradient(135deg, #7A1A1A 0%, #C9401A 100%)' },
]

export default function AboutPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>La Paroisse</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>À Propos</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Tout ce que vous devez savoir sur notre communauté paroissiale
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .about-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1100px; margin: 0 auto; }
            .about-card { border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); display: flex; flex-direction: column; transition: transform 0.3s, box-shadow 0.3s; }
            .about-card:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(13,43,85,0.15); }
            .about-card-top { height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; position: relative; overflow: hidden; }
            .about-card-top::before { content: ''; position: absolute; inset: 0; background-image: repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 16px); }
            .about-card-body { background: #FFFFFF; padding: 22px; border: 1px solid rgba(201,168,76,0.2); border-top: none; border-radius: 0 0 12px 12px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
            @media (max-width: 900px) { .about-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .about-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Informations</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Notre Communauté</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="about-grid">
            {sections.map((s) => (
              <div key={s.titre} className="about-card">
                <div className="about-card-top" style={{ background: s.bg }}>
                  <span style={{ fontSize: '40px', position: 'relative', zIndex: 1 }}>{s.icon}</span>
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', fontWeight: 600, color: '#FFFFFF', position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 12px' }}>{s.titre}</span>
                </div>
                <div className="about-card-body">
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '17px', color: '#4A5568', lineHeight: 1.75, flex: 1 }}>{s.desc}</p>
                  <Link href={s.href} style={{ display: 'block', padding: '11px 20px', background: s.bg, color: '#FFFFFF', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', textAlign: 'center' }}>
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