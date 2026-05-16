import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

const personnel = [
  { nom: 'Père Patrik SABI SIKA', role: 'Curé de la Paroisse', image: '/images/Danidevv.png', desc: 'Responsable pastoral de la paroisse Notre-Dame d\'Assomption de Komiguéa.' },
  { nom: 'Père Pierre DAMADO', role: 'Vicaire', image: '/images/Danidev.png', desc: 'Accompagne le curé dans les célébrations et l\'animation pastorale.' },
]

const conseil = [
  { nom: 'Jean BIOKOU', role: 'Président du Conseil Paroissial', icon: '👤' },
  { nom: 'Marie SAKA', role: 'Secrétaire', icon: '👤' },
  { nom: 'Paul GOSSOU', role: 'Trésorier', icon: '👤' },
  { nom: 'Anne KORA', role: 'Responsable Liturgie', icon: '👤' },
  { nom: 'Thomas DOKO', role: 'Responsable Catéchèse', icon: '👤' },
  { nom: 'Claire BANI', role: 'Responsable Jeunesse', icon: '👤' },
]

export default function PersonnelPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #2A0D55 0%, #4A1A80 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Notre Équipe</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Personnel & Conseil</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Les hommes et femmes au service de notre communauté
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* PRÊTRES */}
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <style>{`
            .pretres-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 800px; margin: 0 auto; }
            .pretre-card { background: #FAF8F3; border-radius: 12px; overflow: hidden; border: 1px solid rgba(201,168,76,0.2); box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: transform 0.3s; }
            .pretre-card:hover { transform: translateY(-4px); }
            .pretre-photo { height: 200px; position: relative; background: linear-gradient(135deg, #0D2B55 0%, #1A4480 100%); }
            .conseil-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1000px; margin: 0 auto; }
            .conseil-card { background: #FFFFFF; border-radius: 10px; padding: 24px; border: 1px solid rgba(201,168,76,0.2); text-align: center; transition: transform 0.3s; }
            .conseil-card:hover { transform: translateY(-4px); }
            @media (max-width: 700px) { .pretres-grid { grid-template-columns: 1fr; } .conseil-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 480px) { .conseil-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Équipe Pastorale</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Nos Prêtres</h2>
          </div>

          <div className="pretres-grid">
            {personnel.map((p) => (
              <div key={p.nom} className="pretre-card">
                <div className="pretre-photo">
                  <Image src={p.image} alt={p.nom} fill sizes="50vw" style={{ objectFit: 'cover' }}/>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>{p.role}</p>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', fontWeight: 600, color: '#0D2B55', marginBottom: '10px' }}>{p.nom}</h3>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONSEIL */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Gouvernance</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Conseil Paroissial</h2>
          </div>

          <div className="conseil-grid">
            {conseil.map((c) => (
              <div key={c.nom} className="conseil-card">
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #2A0D55 0%, #4A1A80 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 14px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', fontWeight: 600, color: '#0D2B55', marginBottom: '6px' }}>{c.nom}</h3>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '11px', color: '#C9A84C', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{c.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/about" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour À Propos
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}