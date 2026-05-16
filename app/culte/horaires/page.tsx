import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function HorairesPage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Célébrations</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Horaires des Messes</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Rejoignez-nous pour prier et célébrer ensemble
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* HORAIRES */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .horaires-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
              max-width: 1100px;
              margin: 0 auto;
            }
            .horaire-card {
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            }
            .horaire-card-header {
              padding: 20px 24px;
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .horaire-card-header h3 {
              font-family: Cinzel, serif;
              font-size: 15px;
              font-weight: 600;
              color: #FFFFFF;
              margin: 0;
            }
            .horaire-card-header span {
              font-size: 24px;
            }
            .horaire-card-body {
              background: #FFFFFF;
              padding: 20px 24px;
            }
            .horaire-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 0;
              border-bottom: 1px solid rgba(201,168,76,0.15);
            }
            .horaire-row:last-child { border-bottom: none; }
            .horaire-label {
              font-family: Lato, sans-serif;
              font-size: 13px;
              color: #4A5568;
              font-weight: 600;
            }
            .horaire-time {
              font-family: Cinzel, serif;
              font-size: 13px;
              font-weight: 600;
              padding: 4px 12px;
              border-radius: 20px;
            }
            @media (max-width: 900px) {
              .horaires-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 560px) {
              .horaires-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Programme</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Nos Célébrations</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="horaires-grid">

            {/* MARDI */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)' }}>
                <span>🕊</span>
                <h3>Mardi</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Messe du matin</span>
                  <span className="horaire-time" style={{ background: '#EAF2FF', color: '#0D2B55' }}>6h30</span>
                </div>
              </div>
            </div>

            {/* MERCREDI */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #1A4A1A 0%, #2D7A2D 100%)' }}>
                <span>🕊</span>
                <h3>Mercredi</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Messe du matin</span>
                  <span className="horaire-time" style={{ background: '#E8F5E8', color: '#1A4A1A' }}>6h30</span>
                </div>
              </div>
            </div>

            {/* JEUDI */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #7A4A10 0%, #C9A84C 100%)' }}>
                <span>📿</span>
                <h3>Jeudi</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Chapelet</span>
                  <span className="horaire-time" style={{ background: '#FBF4E0', color: '#7A4A10' }}>6h30</span>
                </div>
                <div className="horaire-row">
                  <span className="horaire-label" style={{ fontSize: '11px', color: '#8A7D6A', fontStyle: 'italic' }}>Pas de messe le matin</span>
                  <span></span>
                </div>
                <div className="horaire-row">
                  <span className="horaire-label">Adoration + Eucharistie</span>
                  <span className="horaire-time" style={{ background: '#FBF4E0', color: '#7A4A10' }}>18h00</span>
                </div>
              </div>
            </div>

            {/* VENDREDI */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #4A0D0D 0%, #8A1A1A 100%)' }}>
                <span>🕊</span>
                <h3>Vendredi</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Messe du matin</span>
                  <span className="horaire-time" style={{ background: '#FFF0F0', color: '#8A1A1A' }}>6h30</span>
                </div>
              </div>
            </div>

            {/* SAMEDI */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)' }}>
                <span>🕊</span>
                <h3>Samedi</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Messe du matin</span>
                  <span className="horaire-time" style={{ background: '#F3EEFF', color: '#2A0D55' }}>6h30</span>
                </div>
              </div>
            </div>

            {/* DIMANCHE */}
            <div className="horaire-card">
              <div className="horaire-card-header" style={{ background: 'linear-gradient(135deg, #7A4A10 0%, #C9A84C 100%)' }}>
                <span>⛪</span>
                <h3>Dimanche</h3>
              </div>
              <div className="horaire-card-body">
                <div className="horaire-row">
                  <span className="horaire-label">Messe en Bariba</span>
                  <span className="horaire-time" style={{ background: '#FBF4E0', color: '#7A4A10' }}>6h30</span>
                </div>
                <div className="horaire-row">
                  <span className="horaire-label">Messe des Jeunes</span>
                  <span className="horaire-time" style={{ background: '#FBF4E0', color: '#7A4A10' }}>9h00</span>
                </div>
                <div className="horaire-row">
                  <span className="horaire-label">Messe des Enfants</span>
                  <span className="horaire-time" style={{ background: '#FBF4E0', color: '#7A4A10' }}>10h30</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* NOTE */}
        <section style={{ background: '#FFFFFF', padding: '40px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#EAF2FF', borderRadius: '8px', padding: '24px 32px', border: '1px solid rgba(13,43,85,0.1)' }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#0D2B55', fontStyle: 'italic', lineHeight: 1.7 }}>
              📌 Les horaires peuvent être modifiés lors des fêtes liturgiques. Consultez les bulletins paroissiaux pour plus d&apos;informations.
            </p>
          </div>
        </section>

        {/* RETOUR */}
        <section style={{ background: '#FFFFFF', padding: '40px 40px', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Accueil
          </Link>
        </section>

      </main>
      <Footer />
    </>
  )
}