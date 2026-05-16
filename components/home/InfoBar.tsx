export default function InfoBar() {
  return (
    <div style={{ background: '#FBF4E0', borderTop: '2px solid #C9A84C', borderBottom: '2px solid rgba(201,168,76,0.3)', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

      <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px 44px', borderRight: '1px solid rgba(201,168,76,0.25)', cursor: 'pointer' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>🕊</div>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#8A7D6A' }}>Messe du Dimanche</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginTop: '2px' }}>7h00 · 9h00 · 11h00</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px 44px', borderRight: '1px solid rgba(201,168,76,0.25)', cursor: 'pointer' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>📖</div>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#8A7D6A' }}>Bulletin de la Semaine</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginTop: '2px' }}>Télécharger →</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px 44px', borderRight: '1px solid rgba(201,168,76,0.25)', cursor: 'pointer' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>🏛</div>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#8A7D6A' }}>Visite de la Paroisse</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginTop: '2px' }}>Mar – Sam · 9h–17h</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '20px 44px', cursor: 'pointer' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#0D2B55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>✉</div>
        <div>
          <div style={{ fontSize: '10px', letterSpacing: '1.2px', textTransform: 'uppercase', color: '#8A7D6A' }}>Intentions de Messe</div>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '13px', color: '#0D2B55', marginTop: '2px' }}>Soumettre →</div>
        </div>
      </div>

    </div>
  )
}