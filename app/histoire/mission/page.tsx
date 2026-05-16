import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const seminaristes = [
  { id: 1, nom: 'AKPA', prenom: 'Daniel', numero: '+229 01 94 41 45 39', seminaire: 'Grand Séminaire de  Gaah BaKa' },
  { id: 2, nom: 'GARADIMA', prenom: 'Calixte', numero: '+229 01 61 81 39 06', seminaire: 'Grand Séminaire de Gaah BaKa ' },
  { id: 3, nom: 'SOUNON', prenom: 'Déclairveau', numero: ' ', seminaire: 'Grand Séminaire de Gaah BaKa' },
  { id: 4, nom: 'M\'PO', prenom: 'Victorien', numero: '+229 01 61 34 62 21', seminaire: 'Séminaire Propédeutique Mgr Robert CHOPARD-LALLIER de Ténonrou ' },
  { id: 5, nom: 'GARADIMA', prenom: 'Roger', numero: ' ', seminaire: 'Séminaire Notre Dame de Fatima de Parakou' },
  { id: 6, nom: 'DAFIA', prenom: 'Didier', numero: ' ', seminaire: 'Séminaire Notre Dame de Fatima de Parakou' },

]

const pretresOrdonne = [
  {
    id: 1,
    nom: 'GARADIMA',
    prenom: 'Germain',
    titre: 'Abbé',
    desc: 'Fils de la Paroisse Notre Dame de l\'Assomption de Komiguéa, ordonné prêtre à la Cathéedrale Saint Pierre et Paul de Parakou. Sa vocation est le fruit de la prière et de l\'accompagnement de toute notre communauté paroissiale.',
    image: '/images/abbegermain.jpeg',
  },

]

export default function MissionPage() {
  return (
    <>
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Notre Raison d&apos;Être</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Notre Mission</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Annoncez l&apos;Évangile à toute créature  " Marc 16,15 "
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* MISSION */}
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>Notre Engagement</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '16px' }}>
              La Mission de Notre Paroisse
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 40px' }}></div>

            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              La Paroisse Notre Dame de l&apos;Assomption de Komiguéa a pour mission fondamentale d&apos;annoncer la Bonne Nouvelle de Jésus-Christ à tous les habitants de Komiguéa et ses environs, de célébrer les sacrements avec ferveur et de construire une communauté fraternelle enracinée dans l&apos;amour de Dieu.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              Notre paroisse s&apos;engage à accompagner chaque fidèle dans son cheminement spirituel, à travers la catéchèse, la liturgie, les sacrements et les œuvres de charité. Nous voulons être une Église en sortie, qui va vers les périphéries et accueille tout homme et toute femme dans la dignité.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9 }}>
              Placée sous le patronage de Notre Dame de  l&apos;Assomption, notre communauté s&apos;inspire de Marie pour vivre dans l&apos;espérance, la foi et le service des plus petits.
            </p>

            {/* VALEURS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
              {[
                { icon: '🙏', titre: 'Prière', desc: 'La prière au cœur de toute action pastorale' },
                { icon: '🤝', titre: 'Fraternité', desc: 'Une communauté unie dans l\'amour du prochain' },
                { icon: '📖', titre: 'Évangélisation', desc: 'Annoncer l\'Évangile par la parole et le témoignage' },
              ].map((v) => (
                <div key={v.titre} style={{ background: '#FAF8F3', borderRadius: '10px', padding: '24px', border: '1px solid rgba(201,168,76,0.2)', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#0D2B55', marginBottom: '8px' }}>{v.titre}</h3>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', color: '#4A5568', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRÊTRES ORDONNÉS */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>Fruits de Notre Paroisse</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '16px' }}>
              Prêtres Ordonnés de Notre Paroisse
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 48px' }}></div>

            {pretresOrdonne.map((p) => (
              <div key={p.id} style={{ background: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', boxShadow: '0 4px 24px rgba(13,43,85,0.08)', display: 'grid', gridTemplateColumns: '280px 1fr' }}>
                <div style={{ background: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)', minHeight: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,168,76,0.05) 0px, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 18px)' }}></div>
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(201,168,76,0.2)', border: '3px solid rgba(201,168,76,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '48px' }}>
                      ✝
                    </div>
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '12px', color: '#E2C070', letterSpacing: '2px', textTransform: 'uppercase' }}>{p.titre}</p>
                  </div>
                </div>
                <div style={{ padding: '40px' }}>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>Prêtre Ordonné</p>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 600, color: '#0D2B55', marginBottom: '20px' }}>
                    {p.titre} {p.prenom} {p.nom}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: '#C9A84C', marginBottom: '20px' }}></div>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SÉMINARISTES */}
        <section style={{ background: '#0D2B55', padding: '80px 40px' }}>
          <style>{`
            .seminaristes-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
              max-width: 900px;
              margin: 0 auto;
            }
            .seminariste-card {
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(201,168,76,0.25);
              border-radius: 10px;
              padding: 28px;
              display: flex;
              gap: 18px;
              align-items: flex-start;
              transition: background 0.2s;
            }
            .seminariste-card:hover {
              background: rgba(255,255,255,0.1);
            }
            @media (max-width: 700px) {
              .seminaristes-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px', textAlign: 'center' }}>Formation Sacerdotale</p>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#FFFFFF', textAlign: 'center', marginBottom: '16px' }}>
            Nos Séminaristes
          </h2>
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#B8C5D4', fontStyle: 'italic', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            Jeunes hommes de notre paroisse en chemin vers le sacerdoce
          </p>
          <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 48px', opacity: 0.6 }}></div>

          <div className="seminaristes-grid">
            {seminaristes.map((s) => (
              <div key={s.id} className="seminariste-card">
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(201,168,76,0.2)', border: '2px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  ✝
                </div>
                <div>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '6px' }}>Séminariste</p>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
                    {s.prenom} {s.nom}
                  </h3>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#B8C5D4', lineHeight: 1.65, marginBottom: '8px' }}>
                    📍 {s.seminaire}
                  </p>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#E2C070', letterSpacing: '0.5px' }}>
                    📞 {s.numero}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', fontStyle: 'italic', color: '#B8C5D4', maxWidth: '600px', margin: '0 auto' }}>
              &ldquo; Priez le maître de la moisson d&apos;envoyer des ouvriers pour sa moisson. &rdquo; " Matthieu 9,38 "
            </p>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/histoire" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour Histoire
          </Link>
        </section>

      </main>
      <Footer />
    </>
  )
}