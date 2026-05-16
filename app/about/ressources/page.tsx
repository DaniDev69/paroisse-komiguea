import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const ressources = [
  { titre: 'Saint-Vincent de Paul', icon: '🤝', desc: 'Aide aux familles dans le besoin — vivres, vêtements, accompagnement social.', contact: 'Contactez la paroisse' },
  { titre: 'Aide aux Malades', icon: '🏥', desc: 'Visites et soutien spirituel aux malades et personnes hospitalisées.', contact: 'Contactez la paroisse' },
  { titre: 'Soutien Scolaire', icon: '📚', desc: 'Accompagnement scolaire pour les enfants en difficulté de la paroisse.', contact: 'Contactez la paroisse' },
  { titre: 'Accompagnement Deuil', icon: '🕊', desc: 'Soutien spirituel et matériel aux familles en période de deuil.', contact: 'Contactez la paroisse' },
]

export default function RessourcesPage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #4A2E08 0%, #8A5A18 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#FBF4E0', marginBottom: '16px' }}>Solidarité</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Ressources Communautaires</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#FBF4E0', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Ensemble, au service des plus vulnérables
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .ressources-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; max-width: 900px; margin: 0 auto; }
            .ressource-card { background: #FFFFFF; border-radius: 12px; padding: 32px; border: 1px solid rgba(201,168,76,0.2); box-shadow: 0 4px 16px rgba(0,0,0,0.06); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; gap: 14px; }
            .ressource-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(13,43,85,0.12); }
            @media (max-width: 700px) { .ressources-grid { grid-template-columns: 1fr; } }
          `}</style>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Entraide</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>Nos Services Communautaires</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
              <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
              <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
            </div>
          </div>

          <div className="ressources-grid">
            {ressources.map((r) => (
              <div key={r.titre} className="ressource-card">
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>{r.icon}</div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#0D2B55' }}>{r.titre}</h3>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#4A5568', lineHeight: 1.75, flex: 1 }}>{r.desc}</p>
                <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px', color: '#C9A84C', letterSpacing: '1px', fontStyle: 'italic' }}>{r.contact}</p>
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