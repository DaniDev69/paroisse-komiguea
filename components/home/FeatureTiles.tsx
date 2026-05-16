import Image from 'next/image'

export default function FeatureTiles() {
  const tiles = [
    { 
      title: 'La Paroisse', 
      bg: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)',
      image: '/images/Autel.jpeg',
      href: '#',
    },
    { 
      title: 'Mariages', 
      bg: 'linear-gradient(135deg, #1A2E0D 0%, #2D5018 100%)',
      image: '/images/mariagee.jpeg',
      href: '/culte/mariage',
    },
    { 
      title: 'Histoire', 
      bg: 'linear-gradient(135deg, #4A2E08 0%, #8A5A18 100%)',
      image: '/images/histoire.jpg',
      href: '/histoire',
    },
  ]

  return (
    <section style={{ background: '#FFFFFF', padding: '60px 40px' }}>
      <style>{`
        .tiles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .feature-tile {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          aspect-ratio: 4/3;
          cursor: pointer;
        }
        .feature-tile img {
          transition: transform 0.5s ease !important;
        }
        .feature-tile:hover img {
          transform: scale(1.08) !important;
        }
        .tile-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(10,30,58,0.85) 0%, transparent 100%);
          padding: 32px 24px 22px;
          z-index: 2;
          transition: background 0.3s;
        }
        .feature-tile:hover .tile-overlay {
          background: linear-gradient(to top, rgba(10,30,58,0.95) 0%, rgba(10,30,58,0.2) 100%);
        }
        @media (max-width: 900px) {
          .tiles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .tiles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TITRE */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>Découvrir</p>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>La Vie de Notre Paroisse</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
          <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
          <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
          <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
        </div>
      </div>

      {/* TUILES */}
      <div className="tiles-grid">
        {tiles.map((tile) => (
          <a key={tile.title} href={tile.href} style={{ textDecoration: 'none' }}>
            <div className="feature-tile" style={{ background: tile.bg }}>

              {/* IMAGE */}
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', opacity: 0.75 }}
              />

              {/* PATTERN */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(201,168,76,0.07) 0px, rgba(201,168,76,0.07) 1px, transparent 1px, transparent 16px)', zIndex: 1 }}></div>

              {/* OVERLAY */}
              <div className="tile-overlay">
                <p style={{ fontFamily: 'Cinzel, serif', fontSize: '17px', fontWeight: 600, color: '#FFFFFF', marginBottom: '5px' }}>{tile.title}</p>
                <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#E2C070' }}>En savoir plus →</p>
              </div>

            </div>
          </a>
        ))}
      </div>

    </section>
  )
}