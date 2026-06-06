import Image from 'next/image'

export default function Welcome() {
  return (
    <section style={{ background: '#FFFFFF', padding: '60px 40px' }}>
      <style>{`
        .welcome-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .welcome-img {
          border-radius: 4px;
          aspect-ratio: 4/3;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .welcome-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>

      <div className="welcome-grid">

        <div className="welcome-img">
          <Image
            src="/images/Autel.jpeg"
            alt="Photo de la paroisse"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div>
          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#1A4480', marginBottom: '14px' }}>Bienvenue</p>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55', lineHeight: 1.35, marginBottom: '20px' }}>
            Bienvenue à la Paroisse Notre Dame de  l&apos;Assomption de Komiguéa
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '24px 0' }}></div>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85, marginBottom: '14px' }}>
            La Paroisse Notre Dame de l&apos;Assomption de Komiguéa est un lieu de foi et de vie . Placée sous le patronage de la Vierge Marie montant au Ciel, elle accompagne les fidèles dans leur cheminement spirituel.
          </p>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85 }}>
            Chaque année, des milliers de personnes viennent prier, célébrer les sacrements et partager la vie fraternelle en ce lieu béni.
          </p>
          <a href="/culte/horaires" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '10.5px', fontWeight: 700, letterSpacing: '1.3px', textTransform: 'uppercase', padding: '13px 28px', textDecoration: 'none', borderRadius: '3px', marginTop: '24px' }}>
            Horaires des Messes
          </a>
        </div>

      </div>
    </section>
  )
}