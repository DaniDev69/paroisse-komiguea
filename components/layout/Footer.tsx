export default function Footer() {
  return (
    <footer style={{ background: '#0D2B55', padding: '70px 40px 30px' }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 52px;
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 52px;
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .footer-bot {
          max-width: 1200px;
          margin: 28px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-col h4 {
          font-family: Cinzel, serif;
          font-size: 11px;
          letter-spacing: 1.5px;
          color: #C9A84C;
          text-transform: uppercase;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.25);
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col ul li a {
          font-size: 13px;
          color: #B8C5D4;
          text-decoration: none;
          display: block;
          padding: 6px 0;
          transition: color 0.15s;
        }
        .footer-col ul li a:hover {
          color: #E2C070;
        }
        .soc-btn {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 11px;
          color: #B8C5D4;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .soc-btn:hover {
          border-color: #C9A84C;
          background: rgba(201,168,76,0.1);
          color: #E2C070;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-bot {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-grid">

        {/* BRAND */}
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: '14px', color: '#E2C070', marginBottom: '14px', lineHeight: 1.45 }}>
            Paroisse Notre Dame<br />de l&apos;Assomption de Komiguéa
          </p>
          <p style={{ fontSize: '13px', color: '#B8C5D4', lineHeight: 1.8, marginBottom: '6px' }}>
            Komiguéa, Parakou, Bénin
          </p>
          <p style={{ fontSize: '13px', color: '#B8C5D4', lineHeight: 1.8, marginBottom: '6px' }}>
            <a href="tel:+22921315000" style={{ color: '#E2C070', textDecoration: 'none' }}>+229 21 31 50 00</a>
          </p>
          <p style={{ fontSize: '13px', color: '#B8C5D4', lineHeight: 1.8 }}>
            <a href="mailto:paroisse.komiguea@diocese-parakou.bj" style={{ color: '#E2C070', textDecoration: 'none' }}>
              paroisse.komiguea@diocese-parakou.bj
            </a>
          </p>
        </div>

        {/* COLONNE À PROPOS */}
        <div className="footer-col">
          <h4>À Propos</h4>
          <ul>
            {['Horaires des Messes', 'Inscription Paroissiale', 'Bulletin Hebdomadaire', 'Ressources', 'Personnel & Conseil'].map((item) => (
              <li key={item}><a href="/culte/horaires" >{item}</a></li>
            ))}
          </ul>
        </div>

        {/* COLONNE CULTE */}
        <div className="footer-col">
          <h4>Culte</h4>
          <ul>
            {['Horaires', 'Sacrements', 'Mariage', 'Baptême', 'Confessions'].map((item) => (
              <li key={item}><a href="/culte/horaires">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* COLONNE LIENS */}
        <div className="footer-col">
          <h4>Liens Utiles</h4>
          <ul>
            {['Diocèse de Parakou', 'La Croix du Bénin', 'Caritas Bénin', 'Conférence Épiscopale'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

      </div>

      {/* BAS DE PAGE */}
      <div className="footer-bot">
        <p style={{ fontSize: '11px', color: '#6B7A8D' }}>
          © 2026 Paroisse Notre-Dame d&apos;Assomption de Komiguéa · Tous droits réservés
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['f', 'in', 'yt'].map((s) => (
            <a key={s} href="#" className="soc-btn">{s}</a>
          ))}
        </div>
      </div>

    </footer>
  )
}