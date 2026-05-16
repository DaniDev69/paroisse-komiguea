import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const EspritSaintIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '52px', height: '52px' }}>
    {/* Flamme centrale */}
    <path d="M30 8 C30 8 22 18 22 28 C22 34 26 38 30 40 C34 38 38 34 38 28 C38 18 30 8 30 8Z" fill="white" opacity="0.95"/>
    <path d="M30 14 C30 14 25 22 25 29 C25 33 27 36 30 38 C33 36 35 33 35 29 C35 22 30 14 30 14Z" fill="white" opacity="0.6"/>
    {/* Flammes côtés */}
    <path d="M18 20 C18 20 13 26 13 32 C13 36 15 39 18 40 C21 39 23 36 23 32 C23 26 18 20 18 20Z" fill="white" opacity="0.8"/>
    <path d="M42 20 C42 20 47 26 47 32 C47 36 45 39 42 40 C39 39 37 36 37 32 C37 26 42 20 42 20Z" fill="white" opacity="0.8"/>
    {/* Rayons */}
    <line x1="30" y1="44" x2="30" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="10" y1="35" x2="4" y2="38" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="50" y1="35" x2="56" y2="38" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="20" x2="6" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="48" y1="20" x2="54" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const sacrements = [
  {
    titre: 'Baptême',
    icon: '💧',
    desc: 'Le premier sacrement de l\'initiation chrétienne. Accueillez votre enfant ou vous-même dans la grande famille de l\'Église.',
    href: '/culte/bapteme',
    bg: 'linear-gradient(135deg, #0D3B55 0%, #1A6080 100%)',
    btnColor: '#1A6080',
    btnText: '#FFFFFF',
  },
  {
    titre: 'Communion',
    icon: '🍞',
    desc: 'Préparez-vous à recevoir pour la première fois le Corps et le Sang du Christ.',
    href: '/culte/communion',
    bg: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)',
    btnColor: '#4A1A80',
    btnText: '#FFFFFF',
  },
  {
    titre: 'Confirmation',
    icon: 'esprit',
    desc: 'Recevez le don de l\'Esprit Saint et affirmez votre foi en pleine conscience.',
    href: '/culte/confirmation',
    bg: 'linear-gradient(135deg, #7A1A1A 0%, #C9401A 100%)',
    btnColor: '#7A1A1A',
    btnText: '#FFFFFF',
  },
  {
    titre: 'Mariage',
    icon: '💍',
    desc: 'Célébrez votre union sacrée dans la joie et la foi à notre paroisse.',
    href: '/culte/mariage',
    bg: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)',
    btnColor: '#C9A84C',
    btnText: '#0D2B55',
  },
]

export default function SacrementsPage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #7A1A1A 0%, #C9A84C 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#0D2B55', marginBottom: '16px' }}>Sacrements</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Les Sacrements</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#FBF4E0', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Les signes visibles de la grâce invisible de Dieu
            </p>
            <div style={{ width: '60px', height: '1px', background: '#FFFFFF', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* CARDS */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .sacrements-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
              max-width: 1200px;
              margin: 0 auto;
            }
            .sacrement-card {
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.08);
              display: flex;
              flex-direction: column;
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .sacrement-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 16px 48px rgba(13,43,85,0.15);
            }
            .sacrement-card-top {
              height: 160px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 10px;
              position: relative;
              overflow: hidden;
            }
            .sacrement-card-top::before {
              content: '';
              position: absolute;
              inset: 0;
              background-image: repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 16px);
            }
            .sacrement-card-body {
              background: #FFFFFF;
              padding: 22px;
              border: 1px solid rgba(201,168,76,0.2);
              border-top: none;
              border-radius: 0 0 12px 12px;
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 14px;
            }
            .sacrement-btn {
              display: block;
              padding: 11px 20px;
              border-radius: 4px;
              font-family: Lato, sans-serif;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              text-decoration: none;
              text-align: center;
              transition: opacity 0.2s;
            }
            .sacrement-btn:hover { opacity: 0.85; }
            @media (max-width: 1000px) {
              .sacrements-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 560px) {
              .sacrements-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Notre Foi</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Célébrez les Sacrements</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="sacrements-grid">
            {sacrements.map((s) => (
              <div key={s.titre} className="sacrement-card">
                <div className="sacrement-card-top" style={{ background: s.bg }}>
                  {s.icon === 'esprit' ? (
                    <EspritSaintIcon />
                  ) : (
                    <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>{s.icon}</span>
                  )}
                  <span style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', position: 'relative', zIndex: 1 }}>{s.titre}</span>
                </div>
                <div className="sacrement-card-body">
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '17px', color: '#4A5568', lineHeight: 1.75, flex: 1 }}>
                    {s.desc}
                  </p>
                  <Link href={s.href} className="sacrement-btn" style={{ background: s.btnColor, color: s.btnText }}>
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RETOUR */}
        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/culte" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour Culte & Sacrements
          </Link>
        </section>

      </main>
      <Footer />
    </>
  )
}