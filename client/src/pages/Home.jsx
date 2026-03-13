import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="content">
        <Header showBrand={true} />
        
        <div className="hero-title">Trouvez un artisan<br/>en quelques minutes</div>
        <div className="hero-subtitle">Disponibilité, avis et estimation — au même endroit.</div>

        <div className="search">
          <span style={{ color: '#7e889c' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.2-3.2" />
            </svg>
          </span>
          <input defaultValue="Rechercher un métier (plombier...)" aria-label="Recherche" />
          <span style={{ color: '#7e889c' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/>
            </svg>
          </span>
        </div>

        <div className="section-head mt-20">
          <div>
            <div className="section-title" style={{ fontSize: '18px', margin: 0 }}>
              <span className="urgent-dot"></span>Besoin urgent
            </div>
            <div className="row-subtitle" style={{ marginTop: '2px', fontSize: '11px' }}>Réponse rapide • Disponibilités maintenant</div>
          </div>
          <Link className="section-link" to="/urgent-order">Voir tout</Link>
        </div>

        <div className="service-grid">
          <Link to="/urgent-order?category=Plomberie" className="card service-card" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="icon-bubble">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2s6 6.3 6 10a6 6 0 1 1-12 0C6 8.3 12 2 12 2Z"/></svg>
            </span>
            <h4>Plomberie</h4>
            <p className="available">Disponible</p>
          </Link>
          <Link to="/urgent-order?category=Electricite" className="card service-card" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="icon-bubble yellow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>
            </span>
            <h4>Électricité</h4>
            <p className="available">Disponible</p>
          </Link>
          <Link to="/urgent-order?category=Climatisation" className="card service-card" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="icon-bubble" style={{ background: '#ecfbff', color: '#21b4d9' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/></svg>
            </span>
            <h4>Climatisation</h4>
            <p>~30 min</p>
          </Link>
          <Link to="/urgent-order?category=Serrurerie" className="card service-card" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="icon-bubble gray">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="7.5" cy="15.5" r="4.5"/><path d="M21 2l-9 9"/><path d="M15 8l3 3"/><path d="M17 6l3 3"/></svg>
            </span>
            <h4>Serrurerie</h4>
            <p>~45 min</p>
          </Link>
        </div>

        <h2 className="section-title mt-22">Pourquoi M3allem Finder?</h2>
        <div className="hero-subtitle">Des profils fiables et une expérience sécurisée.</div>
        <div className="feature-grid mt-12">
          <div className="feature-pill blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s7 2 8 3v5c0 5-3 8-8 10-5-2-8-5-8-10V6c1-1 8-3 8-3Z"/><path d="m9 12 2 2 4-4"/></svg> 
            Artisans vérifiés
          </div>
          <div className="feature-pill green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s6 2 8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6c2-1 8-3 8-3Z"/><path d="M9 12h6"/></svg> 
            Avis authentiques
          </div>
        </div>

        <h2 className="section-title mt-20">Planifier une intervention</h2>
        <div className="hero-subtitle">Choisissez une date et comparez tranquillement</div>
        <div className="plan-grid">
          <div className="plan-card"><div className="plan-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L14 13"/><path d="m19 5-4 4"/></svg></div><span>Menuiserie</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/><path d="M4 4h16v16H4z"/></svg></div><span>Jardinage</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 7h12l1 12H5L6 7Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg></div><span>Peinture</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/></svg></div><span>Rénovation</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div><span>Déménagement</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg></div><span>Ménage</span></div>
          <div className="plan-card"><div className="plan-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.41 16.3l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3.2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.24 4.7l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 19.83 7.5l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><span>Désinsectisation</span></div>
          <div className="plan-card"><div className="plan-icon">...</div><span>Autres</span></div>
        </div>

        <section className="cta-blue mt-22" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-.02em' }}>Devenir un M3allem ?</div>
              <p style={{ fontSize: '13px', marginTop: '4px', maxWidth: '170px' }}>Rejoignez notre réseau de professionnels.</p>
            </div>
            <button className="inline-btn">En savoir plus</button>
          </div>
        </section>
      </div>
      <BottomNav />
    </>
  );
}
