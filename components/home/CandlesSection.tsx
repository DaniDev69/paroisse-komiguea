'use client'

import Link from 'next/link'

const BougieIcon = () => (
  <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '56px', height: '70px' }}>
    <ellipse cx="32" cy="10" rx="5" ry="8" fill="#FFD700" opacity="0.95"/>
    <ellipse cx="32" cy="12" rx="3" ry="5" fill="#FFA500"/>
    <ellipse cx="32" cy="13" rx="1.5" ry="3" fill="#FF6600"/>
    <ellipse cx="32" cy="11" rx="9" ry="10" fill="rgba(255,200,50,0.12)"/>
    <line x1="32" y1="17" x2="32" y2="22" stroke="#555" strokeWidth="1.2" strokeLinecap="round"/>
    <rect x="20" y="22" width="24" height="48" rx="3" fill="#F8F8F0"/>
    <rect x="23" y="26" width="4" height="36" rx="2" fill="rgba(255,255,255,0.5)"/>
    <path d="M20 30 Q18 35 19 40 L20 40Z" fill="#EDEDDD"/>
    <path d="M44 28 Q46 33 45 38 L44 38Z" fill="#EDEDDD"/>
    <rect x="18" y="67" width="28" height="5" rx="2" fill="#DDDDC8"/>
    <rect x="18" y="69" width="28" height="3" rx="1.5" fill="rgba(201,168,76,0.3)"/>
  </svg>
)

const PaixIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', height: '64px' }}>
    <ellipse cx="40" cy="14" rx="9" ry="10" fill="#F5DEB3"/>
    <path d="M31 10 Q33 4 40 4 Q47 4 49 10 Q46 7 40 7 Q34 7 31 10Z" fill="#4A3520"/>
    <rect x="37" y="23" width="6" height="6" rx="2" fill="#F5DEB3"/>
    <path d="M25 30 Q28 27 40 27 Q52 27 55 30 L58 65 Q50 70 40 70 Q30 70 22 65Z" fill="#1A4480"/>
    <path d="M25 32 Q15 30 10 22 Q8 18 11 16 Q14 14 16 18 Q19 24 26 28Z" fill="#F5DEB3"/>
    <path d="M55 32 Q65 30 70 22 Q72 18 69 16 Q66 14 64 18 Q61 24 54 28Z" fill="#F5DEB3"/>
    <ellipse cx="10" cy="15" rx="5" ry="4" fill="#F5DEB3"/>
    <line x1="7" y1="12" x2="5" y2="8" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="10" y1="11" x2="9" y2="7" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="13" y1="12" x2="13" y2="8" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <ellipse cx="70" cy="15" rx="5" ry="4" fill="#F5DEB3"/>
    <line x1="73" y1="12" x2="75" y2="8" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="70" y1="11" x2="71" y2="7" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="67" y1="12" x2="67" y2="8" stroke="#F5DEB3" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M36 18 Q40 21 44 18" stroke="#8B6914" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <ellipse cx="36" cy="14" rx="1.5" ry="1.5" fill="#4A3520"/>
    <ellipse cx="44" cy="14" rx="1.5" ry="1.5" fill="#4A3520"/>
    <circle cx="40" cy="38" r="26" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="3 4"/>
  </svg>
)

const DonIcon = () => (
  <svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '64px', height: '56px' }}>
    <path d="M10 45 Q8 38 12 34 L28 30 Q34 28 36 32 L38 40" fill="#F5DEB3" stroke="#E8C9A0" strokeWidth="0.5"/>
    <path d="M70 45 Q72 38 68 34 L52 30 Q46 28 44 32 L42 40" fill="#F5DEB3" stroke="#E8C9A0" strokeWidth="0.5"/>
    <ellipse cx="24" cy="44" rx="14" ry="8" fill="#F5DEB3" transform="rotate(-10 24 44)"/>
    <ellipse cx="56" cy="44" rx="14" ry="8" fill="#F5DEB3" transform="rotate(10 56 44)"/>
    <rect x="10" y="36" width="5" height="10" rx="2.5" fill="#F5DEB3" transform="rotate(-15 10 36)"/>
    <rect x="16" y="33" width="5" height="11" rx="2.5" fill="#F5DEB3" transform="rotate(-8 16 33)"/>
    <rect x="22" y="32" width="5" height="11" rx="2.5" fill="#F5DEB3"/>
    <rect x="28" y="33" width="5" height="10" rx="2.5" fill="#F5DEB3" transform="rotate(8 28 33)"/>
    <rect x="45" y="33" width="5" height="10" rx="2.5" fill="#F5DEB3" transform="rotate(-8 45 33)"/>
    <rect x="51" y="32" width="5" height="11" rx="2.5" fill="#F5DEB3"/>
    <rect x="57" y="33" width="5" height="11" rx="2.5" fill="#F5DEB3" transform="rotate(8 57 33)"/>
    <rect x="63" y="36" width="5" height="10" rx="2.5" fill="#F5DEB3" transform="rotate(15 63 36)"/>
    <path d="M40 18 C40 18 28 10 28 20 C28 26 34 30 40 36 C46 30 52 26 52 20 C52 10 40 18 40 18Z" fill="#C9A84C"/>
    <path d="M40 20 C40 20 32 14 32 21 C32 25 36 28 40 33 C44 28 48 25 48 21 C48 14 40 20 40 20Z" fill="#E2C070"/>
    <ellipse cx="35" cy="20" rx="3" ry="2" fill="rgba(255,255,255,0.3)" transform="rotate(-20 35 20)"/>
  </svg>
)

const cards = [
  {
    icon: <BougieIcon />,
    title: 'Allumer une Bougie',
    desc: 'Offrir une lumière en mémoire ou en prière pour un être cher',
    href: null,
  },
  {
    icon: <PaixIcon />,
    title: 'Intentions de Messe',
    desc: 'Soumettre une intention pour qu\'elle soit portée lors de la messe',
    href: '/intention-messe',
  },
  {
    icon: <DonIcon />,
    title: 'Faire un Don',
    desc: 'Soutenir la vie et les œuvres de notre paroisse communautaire',
    href: '/don',
  },
]

export default function CandlesSection() {
  return (
    <section style={{ background: '#2D1A00', position: 'relative', overflow: 'hidden', padding: '60px 40px', textAlign: 'center' }}>
      <style>{`
        .candle-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 860px; margin: 0 auto; }
        .candle-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(201,168,76,0.3); border-radius: 6px; padding: 32px 20px 26px; display: flex; flex-direction: column; align-items: center; gap: 12px; transition: background 0.2s, border-color 0.2s, transform 0.2s; text-decoration: none; }
        .candle-card:hover { background: rgba(255,180,60,0.1); border-color: #C9A84C; transform: translateY(-4px); }
        .candle-card-static { cursor: default; }
        .candle-card-link { cursor: pointer; }
        @media (max-width: 768px) { .candle-cards { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse at 50% 30%, rgba(255,160,30,0.18) 0%, rgba(201,100,10,0.10) 40%, transparent 70%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,180,60,0.07) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ margin: '0 auto 24px', width: '68px', height: '68px', opacity: 0.85 }}>
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <circle cx="32" cy="14" r="9" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.7"/>
            <ellipse cx="32" cy="14" rx="6" ry="7" fill="rgba(245,222,179,0.7)"/>
            <path d="M22 21Q24 14 32 11Q40 14 42 21Q37 26 32 27Q27 26 22 21Z" fill="#1A4480" opacity="0.8"/>
            <path d="M26 30Q28 27 32 26Q36 27 38 30L40 57Q36 62 32 62Q28 62 24 57Z" fill="#1A4480" opacity="0.85"/>
            <ellipse cx="32" cy="57" rx="9" ry="3.5" fill="rgba(214,228,247,0.35)"/>
            <circle cx="22" cy="11" r="1.2" fill="#C9A84C" opacity="0.7"/>
            <circle cx="42" cy="11" r="1.2" fill="#C9A84C" opacity="0.7"/>
          </svg>
        </div>

        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '24px' }}>
          Intentions de Messe & Dévotion
        </p>

        <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '26px', fontStyle: 'italic', color: '#F5DEB3', maxWidth: '680px', margin: '0 auto 44px', lineHeight: 1.75 }}>
          Toutes les ténèbres du monde ne peuvent éteindre la lumière d&apos;une seule bougie…
        </p>

        <div className="candle-cards">
          {cards.map((card) => (
            card.href ? (
              <Link key={card.title} href={card.href} className="candle-card candle-card-link">
                {card.icon}
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '13.5px', fontWeight: 600, color: '#E2C070' }}>{card.title}</span>
                <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', fontStyle: 'italic', color: 'rgba(245,222,179,0.65)', lineHeight: 1.55, textAlign: 'center' }}>{card.desc}</span>
              </Link>
            ) : (
              <div key={card.title} className="candle-card candle-card-static">
                {card.icon}
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: '13.5px', fontWeight: 600, color: '#E2C070' }}>{card.title}</span>
                <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '15px', fontStyle: 'italic', color: 'rgba(245,222,179,0.65)', lineHeight: 1.55, textAlign: 'center' }}>{card.desc}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}