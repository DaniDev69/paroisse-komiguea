import Link from 'next/link'
import Footer from '@/components/layout/Footer'

export default function BaptemePage() {
  return (
    <>
      <main>
        <section style={{ background: 'linear-gradient(160deg, #0D3B55 0%, #1A6080 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Sacrement</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Bienvenue, chers fidèles</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '22px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '650px', margin: '0 auto 32px' }}>
              Vous êtes sur votre espace dédié au sacrement du <strong style={{ color: '#E2C070' }}>Baptême</strong>
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#B8C5D4', maxWidth: '600px', margin: '0 auto 8px' }}>
              Pour consulter la liste des baptisés en fonction des années, cliquez ci-dessous 👇
            </p>
            <div style={{ marginTop: '28px' }}>
              <Link href="/culte/bapteme/liste" style={{ display: 'inline-block', background: '#C9A84C', color: '#0D2B55', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', borderRadius: '4px' }}>
                Consulter la Liste des Baptisés
              </Link>
            </div>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '40px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>Le Sacrement</p>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55', marginBottom: '32px' }}>Le Baptême, Porte de la Foi</h2>
            <div style={{ width: '48px', height: '2px', background: '#C9A84C', margin: '0 auto 32px' }}></div>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85, marginBottom: '20px' }}>
              Le Baptême est le premier et le plus important des sacrements de l&apos;initiation chrétienne. Par ce sacrement, la personne baptisée est libérée du péché originel et devient enfant de Dieu et membre de l&apos;Église catholique.
            </p>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '19px', color: '#4A5568', lineHeight: 1.85 }}>
              Pour toute demande de baptême, veuillez suivre rigousement les étapes définies par l&apos;Eglise catholique, vous pouvez contacter les prètes pour plus de détaille.
            </p>
          </div>
        </section>

        <section style={{ background: '#FFFFFF', padding: '40px', textAlign: 'center' }}>
          <Link href="/culte/sacrements" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour aux Sacrements
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}