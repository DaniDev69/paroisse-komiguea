'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const news = [
  {
    id: 1,
    date: 'Avril 2025',
    title: 'Jubilé du Centenaire du Diocèse de Parakou',
    desc: 'La paroisse participe activement aux célébrations du Jubilé du Centenaire de l\'Église à Parakou.',
    image: '/images/eglise.jpg',
  },
  {
    id: 2,
    date: '1er Vendredi du Mois',
    title: 'Célébration du Sacré-Cœur de Jésus',
    desc: 'Rejoignez-nous chaque premier vendredi du mois pour la messe et l\'adoration à 11h30.',
    image: '/images/Autel.jpeg',
  },
  {
    id: 3,
    date: 'Chaque Mois',
    title: 'Visites Guidées du Premier Dimanche',
    desc: 'Visite gratuite après la messe de midi. Pour les groupes, réservation par e-mail.',
    image: '/images/paroisse.jpg',
  },
  {
    id: 4,
    date: 'Mai 2025',
    title: 'Mois de Marie — Chapelet en Famille',
    desc: 'Chaque soir du mois de mai, venez prier le chapelet en famille à 18h30 à la paroisse.',
    image: '/images/marie.jpg',
  },
  {
    id: 5,
    date: 'Juin 2025',
    title: 'Fête de la Fête-Dieu',
    desc: 'Grande procession eucharistique dans les rues de Komiguéa. Venez nombreux célébrer le Corps du Christ.',
    image: '/images/evenement.jpeg',
  },
]

export default function NewsGrid() {
  const [current, setCurrent] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('left')
  const visibleCount = 3

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    if (sliding) return
    setDirection(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrent(index)
      setSliding(false)
    }, 450)
  }, [sliding])

  const next = useCallback(() => {
    goTo((current + 1) % news.length, 'left')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + news.length) % news.length, 'right')
  }, [current, goTo])

  useEffect(() => {
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [next])

  const getVisible = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      items.push(news[(current + i) % news.length])
    }
    return items
  }

  return (
    <section style={{ background: '#FAF8F3', padding: '60px 40px', overflow: 'hidden' }}>
      <style>{`
        .news-slider {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .news-slider.slide-left {
          opacity: 0;
          transform: translateX(-40px);
        }
        .news-slider.slide-right {
          opacity: 0;
          transform: translateX(40px);
        }
        .news-card {
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 8px;
          overflow: hidden;
          background: #FFFFFF;
          cursor: pointer;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .news-card:hover {
          box-shadow: 0 12px 40px rgba(13,43,85,0.15);
          transform: translateY(-6px);
        }
        .news-card-img {
          height: 240px;
          position: relative;
          overflow: hidden;
          background: #0D2B55;
        }
        .news-card-img img {
          transition: transform 0.5s ease !important;
        }
        .news-card:hover .news-card-img img {
          transform: scale(1.08) !important;
        }
        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.4);
          background: #FFFFFF;
          color: #0D2B55;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          box-shadow: 0 2px 12px rgba(13,43,85,0.1);
          line-height: 1;
        }
        .nav-btn:hover {
          background: #C9A84C;
          color: #FFFFFF;
          border-color: #C9A84C;
          transform: scale(1.08);
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .dot.active {
          transform: scale(1.4);
          background: #C9A84C !important;
        }
        @media (max-width: 900px) {
          .news-slider {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .news-slider {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* TITRE */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>
          Vie Paroissiale
        </p>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '30px', fontWeight: 400, color: '#0D2B55' }}>
          Actualités & Événements
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px' }}>
          <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
          <div style={{ width: '8px', height: '8px', background: '#C9A84C', transform: 'rotate(45deg)' }}></div>
          <div style={{ height: '1px', width: '60px', background: '#C4B89A' }}></div>
        </div>
      </div>

      {/* SLIDER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        {/* BTN PREV */}
        <button
          className="nav-btn"
          onClick={prev}
          style={{ position: 'absolute', left: '-22px', top: '40%', transform: 'translateY(-50%)', zIndex: 10 }}
        >
          ‹
        </button>

        {/* CARTES */}
        <div className={`news-slider ${sliding ? `slide-${direction}` : ''}`}>
          {getVisible().map((item) => (
            <div key={item.id} className="news-card">

              {/* IMAGE */}
              <div className="news-card-img">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                style={{ 
                objectFit: item.image.includes('marie') ? 'contain' : 'cover',
                objectPosition: 'center center',
                background: '#0D2B55'
              }}
              />

                {/* OVERLAY DÉGRADÉ */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(13,43,85,0.4) 100%)', zIndex: 1 }}></div>
              </div>

              {/* CONTENU */}
              <div style={{ padding: '24px' }}>
                <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '8px' }}>
                  {item.date}
                </p>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', fontWeight: 600, color: '#0D2B55', lineHeight: 1.4, marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '16px', color: '#4A5568', lineHeight: 1.65, marginBottom: '14px' }}>
                  {item.desc}
                </p>
                <a href="#" style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#2260B0', textDecoration: 'none', borderBottom: '1px solid #2260B0', paddingBottom: '2px' }}>
                  Lire la Suite →
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* BTN NEXT */}
        <button
          className="nav-btn"
          onClick={next}
          style={{ position: 'absolute', right: '-22px', top: '40%', transform: 'translateY(-50%)', zIndex: 10 }}
        >
          ›
        </button>

      </div>

      {/* POINTS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
        {news.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i, i > current ? 'left' : 'right')}
            style={{ background: i === current ? '#C9A84C' : '#C4B89A' }}
          />
        ))}
      </div>

    </section>
  )
}