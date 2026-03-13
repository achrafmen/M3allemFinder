import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function UrgentOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'Plomberie';
  
  const [problemType, setProblemType] = useState('Fuite');

  const rightAction = (
    <span className="icon-plain" style={{ justifyContent: 'flex-end', fontWeight: 800, fontSize: '22px' }}>?</span>
  );

  return (
    <>
      <div className="content">
        <Header title="Commande urgente" showBack={true} centerTitle={true} rightAction={rightAction} />
        <div className="screen-divider"></div>

        <section className="card mt-18" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div className="row-left">
            <span className="icon-bubble" style={{ width: '42px', height: '42px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L14 13"/><path d="m19 5-4 4"/></svg>
            </span>
            <div>
              <div className="row-title" style={{ fontSize: '18px' }}>{initialCategory}</div>
              <div className="subtitle-location">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg> 
                <span style={{ verticalAlign: 'middle', marginLeft: '4px' }}>Autour de moi</span>
              </div>
            </div>
          </div>
          <span className="section-link" style={{ cursor: 'pointer' }}>Modifier</span>
        </section>

        <h2 className="section-title" style={{ fontSize: '18px', marginTop: '26px' }}>Décrivez le problème</h2>
        <textarea className="textarea-box" aria-label="Description" defaultValue="Exemple : fuite sous l’évier" />

        <h2 className="section-title" style={{ fontSize: '18px', marginTop: '26px' }}>Type de problème</h2>
        <div className="chips mt-12">
          {['Fuite', 'Débouchage', 'Installation', 'Autre'].map(type => (
            <div 
              key={type} 
              className={`chip ${problemType === type ? 'active' : ''}`}
              onClick={() => setProblemType(type)}
              style={{ cursor: 'pointer' }}
            >
              {type}
            </div>
          ))}
        </div>

        <div className="upload-box mt-28">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="13" r="3.5"/></svg> 
          Ajouter une photo (facultatif)
        </div>

        <div className="trust-row mt-20">
          <div className="trust-pill">ARTISANS VÉRIFIÉS</div>
          <div className="trust-pill">AVIS AUTHENTIQUES</div>
          <div className="trust-pill">IDENTITÉ CONFIRMÉE</div>
        </div>

        <div className="mt-28">
          <button className="btn-primary" onClick={() => navigate('/artisans')}>
            Trouver un M3allem maintenant 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
