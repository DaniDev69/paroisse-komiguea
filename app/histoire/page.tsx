import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const pretres = [
  {
    id: 1,
    nom: 'Père Bruno',
    periode: '2010 — 2013',
    role: 'Premier curé de la station missionnaire',
    desc: 'Il fut le premier prêtre à s\'installer à Komiguéa, posant les bases de la communauté chrétienne avec dévouement et persévérance.',
    image: '/images/dd.jpg',
  },
  {
    id: 2,
    nom: 'Père Serge DANON',
    periode: '2014 — 2017',
    role: 'Curé bâtisseur',
    desc: 'Sous sa direction, l\'église actuelle fut construite pierre par pierre grâce à la générosité des fidèles et son inlassable engagement.',
    image: '/images/chef.jpg',
  },
  {
    id: 3,
    nom: 'Père Pierre DAMADO',
    periode: '2018 — 2021',
    role: 'Curé de l\'érection en paroisse',
    desc: 'C\'est sous son ministère que la station missionnaire fut érigée en paroisse officielle du Diocèse de Parakou.',
    image: '/images/Danidev.png',
  },
  {
    id: 4,
    nom: 'Père Patrick SABI SIKA',
    periode: '2022 — aujourd\'hui',
    role: 'Curé actuel',
    desc: 'Il développa les œuvres sociales de la paroisse, créant des groupes de prière, des associations et renforçant la vie communautaire.',
    image: '/images/cure.jpeg',
  },
]

export default function HistoirePage() {
  return (
    <>
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>
              Notre Héritage
            </p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>
              Histoire de la Paroisse
            </h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Notre Dame de l&apos;Assomption de Komiguéa
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {/* ── NOS ORIGINES ── */}
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>Nos Origines</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '40px' }}>
              La Naissance d&apos;une Communauté
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 40px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              C&apos;est au cœur du village de Komiguéa, que germa la première graine de foi qui allait donner naissance à notre communauté paroissiale. Les premiers chrétiens de ce quartier se réunissaient dans des conditions modestes, animés par une foi ardente et un désir profond de vivre ensemble l&apos;Évangile.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              À une époque où la foi catholique commençait à s&apos;enraciner dans cette région du Bénin, quelques hommes et femmes courageux prirent l&apos;initiative de rassembler leurs voisins autour de la Parole de Dieu. Ces premières réunions, tenues sous les arbres ou dans de petites cases, furent le berceau de ce qui deviendrait un jour la Paroisse Notre-Dame d&apos;Assomption.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9 }}>
              La dévotion à la Vierge Marie, sous le titre de l&apos;Assomption, fut au cœur de cette communauté naissante dès ses premiers jours. Marie, montant au Ciel, devint le symbole d&apos;espérance et d&apos;élévation spirituelle pour tous ces fidèles.
            </p>
          </div>
        </section>

        {/* ── FONDATEURS ── */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>Les Pionniers</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '40px' }}>
              Ceux qui ont Tout Commencé
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 40px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              Plusieurs familles pionnières jouèrent un rôle fondamental dans la création et le développement de la communauté. Ils allèrent de maison en maison, sensibilisant leurs voisins, invitant les indécis, accueillant les nouveaux arrivants. Leur zèle apostolique fut le moteur de la croissance rapide de la communauté.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9 }}>
              Ces hommes et ces femmes de foi organisèrent les premières catéchèses, préparèrent les baptêmes, coordonnèrent les célébrations liturgiques avant même l&apos;arrivée d&apos;un prêtre résident. Leur héritage spirituel demeure vivant dans le cœur de tous les paroissiens d&apos;aujourd&apos;hui.
            </p>
          </div>
        </section>

        {/* ── CONSTRUCTION ── */}
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>La Construction</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '40px' }}>
              Bâtir la Maison de Dieu
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 40px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              La construction de l&apos;église fut un projet collectif qui mobilisa toute la communauté. Chacun apporta sa contribution — les uns par leur travail physique, les autres par leurs dons financiers, d&apos;autres encore en fournissant les matériaux de construction. Ce fut un véritable chantier de foi et de solidarité.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9 }}>
              Pierres après pierres, semaine après semaine, l&apos;édifice prit forme sous les mains habiles et dévoués des fidèles. Lorsque l&apos;église fut enfin consacrée, ce fut une immense joie pour toute la communauté qui voyait ainsi couronné des années d&apos;efforts et de prières.
            </p>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ background: '#0D2B55', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px', textAlign: 'center' }}>Évolution</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#FFFFFF', textAlign: 'center', marginBottom: '40px' }}>
              De la Station à la Paroisse
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 56px' }}></div>
            <div style={{ position: 'relative', paddingLeft: '40px' }}>
              <div style={{ position: 'absolute', left: '12px', top: 0, bottom: 0, width: '2px', background: 'rgba(201,168,76,0.3)' }}></div>
              {[
                { annee: '20XX', titre: 'Premières réunions', desc: 'Les premiers chrétiens de Komiguéa se rassemblent pour prier ensemble.' },
                { annee: '20XX', titre: 'Station Missionnaire', desc: 'Komiguéa devient officiellement une station missionnaire rattachée à une paroisse mère.' },
                { annee: '20XX', titre: 'Construction de l\'église', desc: 'La communauté s\'unit pour construire sa propre église.' },
                { annee: '20XX', titre: 'Premier prêtre résident', desc: 'Un prêtre s\'installe définitivement à Komiguéa.' },
                { annee: '20XX', titre: 'Érection en Paroisse', desc: 'Komiguéa est officiellement érigée en paroisse par le Diocèse de Parakou.' },
              ].map((item, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '40px', paddingLeft: '24px' }}>
                  <div style={{ position: 'absolute', left: '-34px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', background: '#C9A84C', border: '2px solid #0D2B55', zIndex: 1 }}></div>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '12px', color: '#E2C070', letterSpacing: '2px', marginBottom: '6px' }}>{item.annee}</p>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>{item.titre}</h3>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '17px', color: '#B8C5D4', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOS PRÊTRES ── */}
        <section style={{ background: '#FAF8F3', padding: '80px 40px' }}>
          <style>{`
            .pretres-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1100px; margin: 0 auto; }
            .pretre-card { background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid rgba(201,168,76,0.2); transition: box-shadow 0.3s, transform 0.3s; }
            .pretre-card:hover { box-shadow: 0 8px 32px rgba(13,43,85,0.12); transform: translateY(-4px); }
            .pretre-photo { height: 220px; position: relative; overflow: hidden; background: linear-gradient(135deg, #0D2B55 0%, #1A4480 100%); }
            @media (max-width: 900px) { .pretres-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 560px) { .pretres-grid { grid-template-columns: 1fr; } }
          `}</style>

          <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px', textAlign: 'center' }}>Nos Pasteurs</p>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', textAlign: 'center', marginBottom: '16px' }}>
            Les Prêtres qui ont Servi
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 56px' }}></div>

          <div className="pretres-grid">
            {pretres.map((pretre) => (
              <div key={pretre.id} className="pretre-card">
                <div className="pretre-photo">
                  <Image src={pretre.image} alt={pretre.nom} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.85 }}/>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '1.5px', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '8px' }}>{pretre.periode}</p>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', fontWeight: 600, color: '#0D2B55', marginBottom: '6px', lineHeight: 1.3 }}>{pretre.nom}</h3>
                  <p style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '0.5px', marginBottom: '12px', fontStyle: 'italic' }}>{pretre.role}</p>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.7 }}>{pretre.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AUJOURD'HUI ── */}
        <section style={{ background: '#FFFFFF', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Aujourd&apos;hui</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', fontWeight: 400, color: '#0D2B55', marginBottom: '40px' }}>
              Une Paroisse Vivante & Rayonnante
            </h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 40px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#4A5568', lineHeight: 1.9, marginBottom: '24px' }}>
              Aujourd&apos;hui, la Paroisse Notre Dame l&apos;Assomption de Komiguéa est une communauté dynamique et accueillante qui continue d&apos;écrire son histoire. Portée par la foi de ses ancêtres spirituels, elle avance avec confiance vers l&apos;avenir.
            </p>
            <Link href="/" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px', marginTop: '16px' }}>
              Retour à l&apos;Accueil
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}