'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'Accueil', href: '/', children: [] },
  {
    label: 'À Propos', href: '/about',
    children: [
      { label: 'Horaires des Messes', href: '/culte/horaires' },
      { label: 'Inscription Paroissiale', href: '/about/inscription' },
      { label: 'Bulletins', href: '/about/bulletins' },
      { label: 'Ressources', href: '/about/ressources' },
      { label: 'Personnel', href: '/about/personnel' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Histoire', href: '/histoire',
    children: [
    { label: 'Nos Séminaristes', href: '/histoire/mission' },
    { label: 'Histoire de la Paroisse', href: '/histoire' },
    { label: 'Visite Virtuelle', href: '/histoire/visite' },
    ],
  },
  {
    label: 'Sacrement', href: '/culte',
    children: [
      { label: 'Horaires des Messes', href: '/culte/horaires' },
      { label: 'Les Sacrements', href: '/culte/sacrements' },
      { label: 'Mariage', href: '/culte/mariage' },
      { label: 'Baptême', href: '/culte/bapteme' },
      { label: 'Communion', href: '/culte/communion' },
    ],
  },
  {
    label: 'Visiter', href: '/visiter',
    children: [
      { label: 'Visites Guidées', href: '/visiter/tours' },
      { label: 'Horaires', href: '/visiter/horaires' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

type Child = { label: string; href: string }
type NavItem = { label: string; href: string; children: Child[] }

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  return (
    <header style={{ background: '#FFFFFF', borderBottom: '2px solid #EAF2FF', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 16px rgba(13,43,85,0.09)' }}>
      <style>{`
        .header-nav { display: flex; align-items: center; height: 80px; }
        .burger-btn { display: none; }
        .mobile-menu { display: none; }
        @media (max-width: 900px) {
          .header-nav { display: none; }
          .burger-btn { display: flex; flex-direction: column; gap: 5px; padding: 8px; cursor: pointer; background: none; border: none; }
          .burger-line { width: 24px; height: 2px; background: #0D2B55; border-radius: 2px; transition: all 0.3s; display: block; }
          .mobile-menu { display: block; background: #0D2B55; border-top: 2px solid #C9A84C; }
          .mobile-link { display: block; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: #B8C5D4; text-decoration: none; padding: 14px 24px; border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.15s, color 0.15s; font-weight: 700; }
          .mobile-link:hover { background: #1A4480; color: #E2C070; }
          .mobile-sub-link { display: block; font-size: 11px; color: #6B7A8D; text-decoration: none; padding: 10px 24px 10px 40px; border-bottom: 1px solid rgba(255,255,255,0.03); transition: background 0.15s, color 0.15s; }
          .mobile-sub-link:hover { background: #1A4480; color: #E2C070; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>

          <div style={{ position: 'relative', width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #C9A84C', flexShrink: 0 }}>
  <Image
    src="/images/marie.jpg"
    alt="Notre-Dame de Komiguéa"
    fill
    sizes="60px"
    style={{ objectFit: 'cover' }}
  />
</div>
          <div>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', fontWeight: 600, color: '#0D2B55', lineHeight: 1.3, margin: 0 }}>
              Notre Dame de d&apos;Assomption de Komiguéa
            </p>
            <p style={{ fontSize: '10px', color: '#6B7A8D', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px', margin: 0 }}>
              Parakou · Diocèse de Parakou
            </p>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="header-nav">
          {navItems.map((item: NavItem) => (
            <div key={item.label} style={{ position: 'relative', height: '80px', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
              <Link href={item.href} style={{ fontFamily: 'Lato, sans-serif', fontSize: '11.5px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', textDecoration: 'none', padding: '0 14px', height: '80px', display: 'flex', alignItems: 'center', borderBottom: openMenu === item.label ? '3px solid #C9A84C' : '3px solid transparent', color: openMenu === item.label ? '#C9A84C' : '#0D2B55', background: openMenu === item.label ? '#EAF2FF' : 'transparent', transition: 'all 0.2s' }}>
                {item.label}
                {item.children.length > 0 && <span style={{ marginLeft: '4px', fontSize: '9px' }}>▾</span>}
              </Link>

              {item.children.length > 0 && openMenu === item.label && (
                <div style={{ position: 'absolute', top: '80px', left: 0, background: '#0D2B55', minWidth: '220px', padding: '10px 0', zIndex: 200, boxShadow: '0 8px 28px rgba(13,43,85,0.25)', borderTop: '2px solid #C9A84C' }}>
                  {item.children.map((child: Child) => (
                    <Link key={child.label} href={child.href} style={{ display: 'block', fontSize: '11.5px', color: '#B8C5D4', textDecoration: 'none', padding: '9px 22px', transition: 'all 0.15s' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#1A4480'; (e.target as HTMLElement).style.color = '#E2C070' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#B8C5D4' }}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* BURGER */}
        <button className="burger-btn" aria-label="Ouvrir le menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="burger-line" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span className="burger-line" style={{ opacity: mobileOpen ? 0 : 1 }}></span>
          <span className="burger-line" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>

      </div>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map((item: NavItem) => (
            <div key={item.label}>
              <Link href={item.children.length === 0 ? item.href : '#'} className="mobile-link" onClick={() => { if (item.children.length > 0) { setMobileSubmenu(mobileSubmenu === item.label ? null : item.label) } }}>
                {item.label}
                {item.children.length > 0 && <span style={{ float: 'right', display: 'inline-block', transform: mobileSubmenu === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▾</span>}
              </Link>
              {mobileSubmenu === item.label && item.children.map((child: Child) => (
                <Link key={child.label} href={child.href} className="mobile-sub-link">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

    </header>
  )
}