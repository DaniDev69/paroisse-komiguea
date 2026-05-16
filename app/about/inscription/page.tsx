'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'

const API_URL = '/api'

type Fidele = { id: number; nom: string; prenom: string; fonction: string; age: number; cevb: string; mouvement: string }
type Catechumene = { id: number; nom: string; prenom: string; classe: string; langue: string; annee: string; telephone: string }
type Catechiste = { id: number; nom: string; prenom: string; fonction: string; telephone: string; annee: string }

export default function InscriptionPage() {
  const [connecte, setConnecte] = useState(false)
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [erreur, setErreur] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [onglet, setOnglet] = useState<'fideles' | 'catechumenes' | 'catechistes'>('fideles')
  const [fideles, setFideles] = useState<Fidele[]>([])
  const [catechumenes, setCatechumenes] = useState<Catechumene[]>([])
  const [catechistes, setCatechistes] = useState<Catechiste[]>([])
  const [chargement, setChargement] = useState(false)

  const handleLogin = async () => {
    if (!username || !motDePasse) return setErreur('Veuillez remplir tous les champs')
    setChargement(true)
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password: motDePasse }),
      })
      const data = await res.json()
      if (res.ok) {
        setToken(data.token)
        setConnecte(true)
        setErreur('')
        chargerDonnees(data.token)
      } else {
        setErreur(data.message || 'Identifiants incorrects')
      }
    } catch {
      setErreur('Erreur de connexion au serveur')
    }
    setChargement(false)
  }

  const chargerDonnees = async (tk: string) => {
    setChargement(true)
    try {
      const headers = { Authorization: `Bearer ${tk}` }
      const [f, c, ca] = await Promise.all([
        fetch(`${API_URL}/inscriptions/fideles`, { headers }).then(r => r.json()),
        fetch(`${API_URL}/inscriptions/catechumenes`, { headers }).then(r => r.json()),
        fetch(`${API_URL}/inscriptions/catechistes`, { headers }).then(r => r.json()),
      ])
      setFideles(Array.isArray(f) ? f : [])
      setCatechumenes(Array.isArray(c) ? c : [])
      setCatechistes(Array.isArray(ca) ? ca : [])
    } catch {
      setErreur('Erreur lors du chargement des données')
    }
    setChargement(false)
  }

  const supprimerFidele = async (id: number) => {
    if (!confirm('Confirmer la suppression ?')) return
    try {
      await fetch(`${API_URL}/inscriptions/fideles/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      setFideles(fideles.filter(f => f.id !== id))
    } catch {
      alert('Erreur lors de la suppression')
    }
  }

  const supprimerCatechumene = async (id: number) => {
    if (!confirm('Confirmer la suppression ?')) return
    try {
      await fetch(`${API_URL}/inscriptions/catechumenes/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      setCatechumenes(catechumenes.filter(c => c.id !== id))
    } catch {
      alert('Erreur lors de la suppression')
    }
  }

  const supprimerCatechiste = async (id: number) => {
    if (!confirm('Confirmer la suppression ?')) return
    try {
      await fetch(`${API_URL}/inscriptions/catechistes/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      setCatechistes(catechistes.filter(c => c.id !== id))
    } catch {
      alert('Erreur lors de la suppression')
    }
  }

  const deconnecter = () => {
    setConnecte(false)
    setToken('')
    setUsername('')
    setMotDePasse('')
    setShowLogin(false)
    setFideles([])
    setCatechumenes([])
    setCatechistes([])
  }

  return (
    <>
      <main>
        <style>{`
          .onglet-btn { padding: 12px 28px; border: none; border-radius: 6px 6px 0 0; font-family: Cinzel, serif; font-size: 12px; font-weight: 600; letter-spacing: 1px; cursor: pointer; transition: all 0.2s; }
          .onglet-btn.actif { background: #0D2B55; color: #E2C070; }
          .onglet-btn.inactif { background: #EAF2FF; color: #0D2B55; }
          .onglet-btn.inactif:hover { background: #C9A84C; color: #FFFFFF; }
          .table-container { overflow-x: auto; border-radius: 0 8px 8px 8px; box-shadow: 0 4px 24px rgba(13,43,85,0.1); }
          table { width: 100%; border-collapse: collapse; background: #FFFFFF; }
          thead { background: linear-gradient(135deg, #0D2B55 0%, #1A4480 100%); }
          thead th { padding: 14px 16px; text-align: left; font-family: Cinzel, serif; font-size: 11px; letter-spacing: 1px; color: #E2C070; font-weight: 600; white-space: nowrap; }
          tbody tr { border-bottom: 1px solid rgba(201,168,76,0.1); transition: background 0.15s; }
          tbody tr:hover { background: #EAF2FF; }
          tbody td { padding: 12px 16px; font-family: Lato, sans-serif; font-size: 13px; color: #0D2B55; }
          .badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; }
          .delete-btn { background: #FFF0F0; color: #C9401A; border: 1px solid rgba(201,64,26,0.3); padding: 6px 14px; border-radius: 4px; font-family: Lato, sans-serif; font-size: 11px; font-weight: 700; cursor: pointer; transition: background 0.2s; white-space: nowrap; }
          .delete-btn:hover { background: #C9401A; color: #FFFFFF; }
          .stat-card { background: #FFFFFF; border-radius: 10px; padding: 20px 24px; border: 1px solid rgba(201,168,76,0.2); display: flex; align-items: center; gap: 16px; box-shadow: 0 2px 12px rgba(13,43,85,0.06); }
          .stat-icon { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
          .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(201,168,76,0.3); border-radius: 6px; font-family: Lato, sans-serif; font-size: 14px; color: #0D2B55; background: #FAF8F3; transition: border-color 0.2s; box-sizing: border-box; }
          .form-input:focus { outline: none; border-color: #C9A84C; background: #FFFFFF; }
        `}</style>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg, #0D2B55 0%, #1A4480 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E2C070', marginBottom: '16px' }}>Administration</p>
            <h1 style={{ fontFamily: 'Crimson Text, serif', fontSize: '52px', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.2, marginBottom: '16px' }}>Inscription Paroissiale</h1>
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '20px', color: '#B8C5D4', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Espace réservé à l&apos;administration de la paroisse
            </p>
            <div style={{ width: '60px', height: '1px', background: '#C9A84C', margin: '32px auto 0', opacity: 0.5 }}></div>
          </div>
        </section>

        {!connecte ? (
          <section style={{ background: '#FAF8F3', padding: '80px 40px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
              <div style={{ width: '90px', height: '90px', background: 'linear-gradient(135deg, #0D2B55 0%, #1A4480 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '40px', boxShadow: '0 8px 32px rgba(13,43,85,0.2)' }}>
                🔐
              </div>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '26px', fontWeight: 400, color: '#0D2B55', marginBottom: '12px' }}>Accès Restreint</h2>
              <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '36px' }}>
                Cette section est réservée aux administrateurs de la paroisse.
              </p>

              {!showLogin ? (
                <button onClick={() => setShowLogin(true)} style={{ background: '#0D2B55', color: '#FBF4E0', border: 'none', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '16px 40px', borderRadius: '6px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(13,43,85,0.2)' }}>
                  🔑 Connexion Administrateur
                </button>
              ) : (
                <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '36px', boxShadow: '0 8px 40px rgba(13,43,85,0.12)', border: '1px solid rgba(201,168,76,0.2)', textAlign: 'left' }}>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#0D2B55', marginBottom: '24px', textAlign: 'center' }}>Connexion Admin</h3>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0D2B55', marginBottom: '8px', fontWeight: 600 }}>Nom d&apos;utilisateur</label>
                    <input className="form-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin"/>
                  </div>

                  <div style={{ marginBottom: '8px' }}>
                    <label style={{ display: 'block', fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0D2B55', marginBottom: '8px', fontWeight: 600 }}>Mot de Passe</label>
                    <input className="form-input" type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} placeholder="••••••••"/>
                  </div>

                  {erreur && (
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#C9401A', marginBottom: '12px', marginTop: '8px' }}>⚠ {erreur}</p>
                  )}

                  <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                    <button onClick={() => { setShowLogin(false); setUsername(''); setMotDePasse(''); setErreur('') }} style={{ flex: 1, padding: '13px', background: '#FAF8F3', color: '#6B7A8D', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
                      Annuler
                    </button>
                    <button onClick={handleLogin} disabled={chargement} style={{ flex: 2, padding: '13px', background: '#0D2B55', color: '#FBF4E0', border: 'none', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', opacity: chargement ? 0.7 : 1 }}>
                      {chargement ? '⏳ Connexion...' : '🔑 Se Connecter'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          <section style={{ background: '#FAF8F3', padding: '60px 40px' }}>
            <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

              {/* HEADER */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '6px' }}>Tableau de Bord</p>
                  <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', fontWeight: 400, color: '#0D2B55' }}>Gestion des Inscriptions</h2>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => chargerDonnees(token)} style={{ background: '#EAF2FF', color: '#0D2B55', border: '1px solid rgba(13,43,85,0.2)', padding: '10px 22px', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
                    🔄 Actualiser
                  </button>
                  <button onClick={deconnecter} style={{ background: '#FFF0F0', color: '#C9401A', border: '1px solid rgba(201,64,26,0.3)', padding: '10px 22px', borderRadius: '6px', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
                    🚪 Se Déconnecter
                  </button>
                </div>
              </div>

              {/* STATS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
                <div className="stat-card">
                  <div className="stat-icon" style={{ background: '#EAF2FF' }}>🙏</div>
                  <div>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6B7A8D', marginBottom: '4px' }}>Fidèles</p>
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', color: '#0D2B55', fontWeight: 600 }}>{fideles.length}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{ background: '#E8F5E8' }}>📖</div>
                  <div>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6B7A8D', marginBottom: '4px' }}>Catéchumènes</p>
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', color: '#1A4A1A', fontWeight: 600 }}>{catechumenes.length}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon" style={{ background: '#FFF5F0' }}>✝</div>
                  <div>
                    <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6B7A8D', marginBottom: '4px' }}>Catéchistes</p>
                    <p style={{ fontFamily: 'Cinzel, serif', fontSize: '28px', color: '#7A1A1A', fontWeight: 600 }}>{catechistes.length}</p>
                  </div>
                </div>
              </div>

              {/* ONGLETS + BOUTON AJOUTER */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button className={`onglet-btn ${onglet === 'fideles' ? 'actif' : 'inactif'}`} onClick={() => setOnglet('fideles')}>
                    🙏 Fidèles ({fideles.length})
                  </button>
                  <button className={`onglet-btn ${onglet === 'catechumenes' ? 'actif' : 'inactif'}`} onClick={() => setOnglet('catechumenes')}>
                    📖 Catéchumènes ({catechumenes.length})
                  </button>
                  <button className={`onglet-btn ${onglet === 'catechistes' ? 'actif' : 'inactif'}`} onClick={() => setOnglet('catechistes')}>
                    ✝ Catéchistes ({catechistes.length})
                  </button>
                </div>
                <Link href={onglet === 'fideles' ? '/about/inscription/fideles' : onglet === 'catechumenes' ? '/about/inscription/catechumenes' : '/about/inscription/catechistes'} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A4A1A', color: '#FFFFFF', fontFamily: 'Lato, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none', borderRadius: '6px', boxShadow: '0 4px 12px rgba(26,74,26,0.3)' }}>
                  ➕ Ajouter {onglet === 'fideles' ? 'un Fidèle' : onglet === 'catechumenes' ? 'un Catéchumène' : 'un Catéchiste'}
                </Link>
              </div>

              {/* CHARGEMENT */}
              {chargement && (
                <div style={{ background: '#FFFFFF', padding: '48px', textAlign: 'center', borderRadius: '0 8px 8px 8px' }}>
                  <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>⏳ Chargement des données...</p>
                </div>
              )}

              {/* TABLEAU FIDÈLES */}
              {!chargement && onglet === 'fideles' && (
                <div className="table-container">
                  {fideles.length === 0 ? (
                    <div style={{ background: '#FFFFFF', padding: '48px', textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun fidèle inscrit pour le moment.</p>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>#</th><th>Nom</th><th>Prénom</th><th>Fonction</th><th>Âge</th><th>CEVB</th><th>Mouvement</th><th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fideles.map((f) => (
                          <tr key={f.id}>
                            <td style={{ color: '#C9A84C', fontWeight: 700 }}>{f.id}</td>
                            <td style={{ fontWeight: 700 }}>{f.nom}</td>
                            <td>{f.prenom}</td>
                            <td><span className="badge" style={{ background: '#EAF2FF', color: '#0D2B55' }}>{f.fonction}</span></td>
                            <td>{f.age} ans</td>
                            <td><span className="badge" style={{ background: '#FBF4E0', color: '#7A4A10' }}>{f.cevb}</span></td>
                            <td><span className="badge" style={{ background: '#E8F5E8', color: '#1A4A1A' }}>{f.mouvement}</span></td>
                            <td><button className="delete-btn" onClick={() => supprimerFidele(f.id)}>🗑 Supprimer</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* TABLEAU CATÉCHUMÈNES */}
              {!chargement && onglet === 'catechumenes' && (
                <div className="table-container">
                  {catechumenes.length === 0 ? (
                    <div style={{ background: '#FFFFFF', padding: '48px', textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun catéchumène inscrit pour le moment.</p>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>#</th><th>Nom</th><th>Prénom</th><th>Classe</th><th>Langue</th><th>Année</th><th>Téléphone</th><th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catechumenes.map((c) => (
                          <tr key={c.id}>
                            <td style={{ color: '#C9A84C', fontWeight: 700 }}>{c.id}</td>
                            <td style={{ fontWeight: 700 }}>{c.nom}</td>
                            <td>{c.prenom}</td>
                            <td><span className="badge" style={{ background: '#E8F5E8', color: '#1A4A1A' }}>{c.classe}</span></td>
                            <td><span className="badge" style={{ background: '#EAF2FF', color: '#0D2B55' }}>{c.langue}</span></td>
                            <td>{c.annee}</td>
                            <td>{c.telephone}</td>
                            <td><button className="delete-btn" onClick={() => supprimerCatechumene(c.id)}>🗑 Supprimer</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {/* TABLEAU CATÉCHISTES */}
              {!chargement && onglet === 'catechistes' && (
                <div className="table-container">
                  {catechistes.length === 0 ? (
                    <div style={{ background: '#FFFFFF', padding: '48px', textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '18px', color: '#6B7A8D', fontStyle: 'italic' }}>Aucun catéchiste inscrit pour le moment.</p>
                    </div>
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th>#</th><th>Nom</th><th>Prénom</th><th>Fonction</th><th>Téléphone</th><th>Année</th><th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {catechistes.map((c) => (
                          <tr key={c.id}>
                            <td style={{ color: '#C9A84C', fontWeight: 700 }}>{c.id}</td>
                            <td style={{ fontWeight: 700 }}>{c.nom}</td>
                            <td>{c.prenom}</td>
                            <td><span className="badge" style={{ background: '#FFF5F0', color: '#7A1A1A' }}>{c.fonction}</span></td>
                            <td>{c.telephone}</td>
                            <td><span className="badge" style={{ background: '#FBF4E0', color: '#7A4A10' }}>{c.annee}</span></td>
                            <td><button className="delete-btn" onClick={() => supprimerCatechiste(c.id)}>🗑 Supprimer</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

            </div>
          </section>
        )}

        <section style={{ background: '#FFFFFF', padding: '50px 40px', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: '#0D2B55', color: '#FBF4E0', fontFamily: 'Lato, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', borderRadius: '3px' }}>
            ← Retour à l&apos;Accueil
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}