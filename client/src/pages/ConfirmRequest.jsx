import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';

export default function ConfirmRequest() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Carte Bancaire');

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: "Fuite sous l'évier de la cuisine",
          address: "Autour de moi",
          problemType: "Fuite",
          status: "En cours",
          paymentMethod: paymentMethod,
          price: 150
        })
      });
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    navigate('/success');
  };

  return (
    <>
      <div className="content">
        <Header title="Confirmer la demande" centerTitle={true} showBack={true} rightAction={<span style={{ width: '26px' }}></span>} />
        <div className="screen-divider"></div>

        <div className="overline-blue mt-20">✱ DEMANDE URGENTE</div>

        <section className="card header-panel mt-12">
          <img src="/src/assets/map-banner.png" className="map-banner" alt="Carte" />
          <div className="header-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '26px', color: 'var(--blue)', fontWeight: 900, letterSpacing: '-.03em' }}>Plomberie</div>
                <div className="subtitle-location mt-8">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg> 
                  <span style={{ verticalAlign: 'middle', marginLeft: '3px' }}>Autour de moi</span>
                </div>
              </div>
              <div className="inline-status">EN DIRECT</div>
            </div>
            <div className="screen-divider" style={{ margin: '18px 0' }}></div>
            <div className="label">Description</div>
            <div style={{ fontSize: '18px', color: '#4a433f', marginTop: '6px' }}>"Fuite sous l’évier de la cuisine"</div>
          </div>
        </section>

        <h2 className="section-title mt-24" style={{ fontSize: '24px' }}>Artisan sélectionné</h2>
        <section className="card selected-worker mt-10">
          <div className="worker-avatar-wrap" style={{ width: '84px', height: '84px' }}>
            <img className="worker-avatar" src="/src/assets/avatar-karim.png" alt="Karim A." style={{ width: '80px', height: '80px' }} />
            <div style={{ position: 'absolute', right: '4px', bottom: '1px', width: '24px', height: '24px', background: '#2cc65b', border: '4px solid white', borderRadius: '50%' }}></div>
          </div>
          <div>
            <div className="worker-name" style={{ fontSize: '22px', margin: '0 0 8px' }}>Karim A.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <div className="eta-pill">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ~12 min
              </div>
              <div className="muted" style={{ fontSize: '16px' }}>Plombier Certifié</div>
            </div>
          </div>
          <div className="rating-line" style={{ margin: 0, fontSize: '18px', color: '#2b7ce4', fontWeight: 900 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 9.5l6.6-1L12 2.5Z"/></svg> 4.9
          </div>
        </section>

        <section className="card price-panel mt-20">
          <div className="price-head">
            <div style={{ fontSize: '18px', color: '#534a45' }}>Prix Fixe</div>
            <div className="price-big">150 MAD</div>
          </div>
          <div className="screen-divider" style={{ margin: '14px 0 18px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '12px', alignItems: 'start', color: '#4e4640', fontSize: '16px', lineHeight: '1.35' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3s7 2 8 3v5c0 5-3 8-8 10-5-2-8-5-8-10V6c1-1 8-3 8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
            <div>Prix garanti, aucune surprise. Facturation transparente.</div>
          </div>
        </section>

        <div className="label mt-28">Mode de paiement</div>
        <div className="pay-grid mt-18">
          <button 
            className={paymentMethod === 'Carte Bancaire' ? 'btn-primary' : 'btn-secondary'} 
            onClick={() => setPaymentMethod('Carte Bancaire')}
            style={paymentMethod === 'Carte Bancaire' ? { height: '54px' } : {}}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg> Payer par Carte
          </button>
          <button 
            className={paymentMethod === 'Espèces' ? 'btn-primary' : 'btn-outline'} 
            onClick={() => setPaymentMethod('Espèces')}
            style={paymentMethod === 'Espèces' ? { height: '54px' } : {}}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 12h10"/><path d="M16 9c.8 1.2 2 2 3 2-1 .2-2.2 1-3 2"/><path d="M8 9c-.8 1.2-2 2-3 2 1 .2 2.2 1 3 2"/></svg> Payer sur place
          </button>
        </div>

        <div className="mt-28">
          <button className="btn-primary" onClick={handleConfirm} disabled={loading}>
            {loading ? 'Création...' : 'Confirmer la demande'}
            {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>}
          </button>
        </div>
        <button className="btn-ghost mt-20" onClick={() => navigate(-1)}>Modifier les détails</button>
      </div>
    </>
  );
}
