import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content" style={{ paddingBottom: '24px' }}>
        <section className="check-wrap">
          <div className="check-hero">
            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>
            <div className="floating-blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 22 2 9l13 3-10 10Z"/><path d="m9 9 6-6"/><path d="M17 3v4"/><path d="M21 7h-4"/></svg>
            </div>
          </div>
          <h1 className="success-title">C'est en route !</h1>
          <div className="success-sub">Votre M3allem arrive d'ici quelques minutes.</div>
        </section>

        <section className="card summary-card">
          <div className="summary-top">
            <img src="/src/assets/service-thumb.png" className="summary-thumb" alt="Service" />
            <div>
              <div className="overline-blue" style={{ fontSize: '11px' }}>SERVICE</div>
              <div style={{ fontSize: '23px', fontWeight: 900, letterSpacing: '-.03em' }}>Plomberie Urgente</div>
              <div className="muted" style={{ fontSize: '14px', marginTop: '2px' }}>"Fuite sous l'évier"</div>
            </div>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-columns">
            <div>
              <div className="label">Paiement</div>
              <div style={{ fontSize: '18px', fontWeight: 900, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 12h10"/><path d="M16 9c.8 1.2 2 2 3 2-1 .2-2.2 1-3 2"/><path d="M8 9c-.8 1.2-2 2-3 2 1 .2 2.2 1 3 2"/></svg> Sur place
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="label">Montant</div>
              <div className="summary-amount" style={{ marginTop: '8px' }}>150 MAD</div>
            </div>
          </div>
          <div className="arrival-strip">
            <img src="/src/assets/avatar-karim.png" alt="Karim A." />
            <div>
              <div style={{ fontSize: '16px', fontWeight: 900 }}>Karim A.</div>
              <div className="muted" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '.04em' }}>Arrivée estimée : 12 min</div>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-actions">
        <div className="screen-divider" style={{ margin: '0 -24px 32px' }}></div>
        <button className="btn-primary" onClick={() => navigate('/orders')}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg> 
          Suivre la Commande 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button className="btn-ghost mt-20" style={{ fontSize: '17px', fontWeight: 800 }} onClick={() => navigate('/')}>
          Retour à l’accueil
        </button>
      </div>
    </>
  );
}
