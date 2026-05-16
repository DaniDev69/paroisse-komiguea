import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white text-center" style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 55%, #1B5FA8 100%)', padding: '100px 40px 90px' }}>

      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.18) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #C9A84C', margin: '0 auto 24px', boxShadow: '0 4px 20px rgba(201,168,76,0.3)' }}>
          <Image src="/images/marie.jpg" alt="Notre-Dame" fill sizes="90px" style={{ objectFit: 'cover' }}/>
        </div>

        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '15px', letterSpacing: '4px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '10px' }}>
          Paroisse
        </p>

        <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '46px', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.2, color: '#FFFFFF', marginBottom: '8px', textShadow: '0 2px 20px rgba(13,43,85,0.5)' }}>
          Notre Dame de l&apos;Assomption<br />de Komiguéa
        </h1>

        <p style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#B8C5D4', marginBottom: '36px' }}>
          Parakou &nbsp;·&nbsp; Diocèse de Parakou &nbsp;·&nbsp; Bénin
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/culte/horaires" style={{ background: '#C9A84C', color: '#0D2B55', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 34px', textDecoration: 'none', borderRadius: '3px' }}>
            Horaires des Messes
          </a>
          <a href="/visiter/tours" style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.35)', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 34px', textDecoration: 'none', borderRadius: '3px' }}>
            Visiter la Paroisse
          </a>
        </div>

        <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '40px auto 0', opacity: 0.5 }}></div>

      </div>
    </section>
  )
}