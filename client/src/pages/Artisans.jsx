import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Artisans() {
  const navigate = useNavigate();

  const titleAction = (
    <div>
      <div className="topbar-title" style={{ fontSize: '20px' }}>Artisans disponibles</div>
      <div className="subtitle-location">Plomberie • Rabat</div>
    </div>
  );

  return (
    <>
      <div className="content">
        <div className="listing-head">
          <div className="topbar-actions" style={{ gap: '10px', alignItems: 'flex-start' }}>
            <span className="icon-plain" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/><path d="M9 12h10"/></svg>
            </span>
            {titleAction}
          </div>
          <span className="icon-plain">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/></svg>
          </span>
        </div>

        <h1 className="hero-title" style={{ fontSize: '32px', marginTop: '26px' }}>M3allem prêts à intervenir</h1>
        <div className="filters">
          <div className="filter-chip">ETA ▾</div>
          <div className="filter-chip">Note ▾</div>
          <div className="filter-chip active">Vérifié ✓</div>
        </div>
        <div className="screen-divider"></div>

        <section className="card worker-card mt-16" onClick={() => navigate('/confirm-request')} style={{ cursor: 'pointer' }}>
          <div className="worker-top">
            <div className="worker-avatar-wrap">
              <img className="worker-avatar" src="/src/assets/avatar-karim.png" alt="Karim A." />
              <div className="worker-verify-dot">✓</div>
            </div>
            <div>
              <div className="worker-name">Karim A.</div>
              <div className="rating-line">
                <span style={{ color: '#2b7ce4' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 9.5l6.6-1L12 2.5Z"/></svg>
                </span>
                <strong>4.9</strong><span>(124 avis)</span>
              </div>
              <div className="badge-row"><span className="info-pill">IDENTITÉ CONFIRMÉE</span><span className="info-pill">VÉRIFIÉ</span></div>
            </div>
            <div className="pro-badge">PRO</div>
          </div>
          <div className="worker-bottom">
            <div className="rating-line" style={{ margin: 0, fontSize: '17px', color: '#516078' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ~12 min
            </div>
            <div className="price-btn"><span>CHOISIR POUR</span><span>150 MAD</span></div>
          </div>
        </section>

        <section className="card worker-card mt-16">
          <div className="worker-top">
            <div className="worker-avatar-wrap">
              <div className="worker-avatar" style={{ background: '#d1d1d1' }}></div>
              <div className="worker-verify-dot">✓</div>
            </div>
            <div>
              <div className="worker-name">Mounir S.</div>
              <div className="rating-line">
                <span style={{ color: '#2b7ce4' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 9.5l6.6-1L12 2.5Z"/></svg>
                </span>
                <strong>4.7</strong><span>(89 avis)</span>
              </div>
              <div className="badge-row"><span className="info-pill">VÉRIFIÉ</span></div>
            </div>
          </div>
          <div className="worker-bottom">
            <div className="rating-line" style={{ margin: 0, fontSize: '17px', color: '#516078' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ~20 min
            </div>
            <div className="price-btn"><span>CHOISIR POUR</span><span>200 MAD</span></div>
          </div>
        </section>

        <section className="card worker-card mt-16">
          <div className="worker-top">
            <div className="worker-avatar-wrap">
              <div className="worker-avatar" style={{ background: '#d1d1d1' }}></div>
            </div>
            <div>
              <div className="worker-name">Said L.</div>
              <div className="rating-line">
                <span style={{ color: '#2b7ce4' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 9.5l6.6-1L12 2.5Z"/></svg>
                </span>
                <strong>4.8</strong><span>(210 avis)</span>
              </div>
              <div className="badge-row"><span className="info-pill">EXPERT (15 ANS)</span></div>
            </div>
          </div>
          <div className="worker-bottom">
            <div className="rating-line" style={{ margin: 0, fontSize: '17px', color: '#516078' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ~45 min
            </div>
            <div className="price-btn"><span>CHOISIR POUR</span><span>100 MAD</span></div>
          </div>
        </section>
      </div>
      <BottomNav />
    </>
  );
}
