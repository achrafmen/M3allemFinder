import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [tab, setTab] = useState('En cours');

  useEffect(() => {
    fetch('http://localhost:5001/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  const filteredOrders = orders.filter(o => 
    tab === 'En cours' ? o.status !== 'Terminée' : o.status === 'Terminée'
  );
  return (
    <>
      <div className="content">
        <div className="topbar" style={{ marginBottom: '8px' }}>
          <div>
            <div className="topbar-title" style={{ fontSize: '22px' }}>Commandes</div>
            <div className="hero-subtitle" style={{ maxWidth: '150px', marginTop: '6px', fontSize: '13px' }}>
              Suivez vos demandes et vos rendez-vous.
            </div>
          </div>
          <span className="icon-round">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l4 2"/></svg>
          </span>
        </div>

        <h2 className="section-title mt-18">Mes demandes</h2>
        <div className="tabs mt-12">
          <div className={`tab ${tab === 'En cours' ? 'active' : ''}`} onClick={() => setTab('En cours')} style={{ cursor: 'pointer' }}>En cours</div>
          <div className={`tab ${tab === 'Terminée' ? 'active' : ''}`} onClick={() => setTab('Terminée')} style={{ cursor: 'pointer' }}>Terminées</div>
        </div>

        {filteredOrders.length === 0 && <div className="muted mt-12 text-center" style={{ textAlign: 'center' }}>Aucune demande.</div>}

        {filteredOrders.map(order => (
          <section key={order._id} className="card order-card mt-12">
            <div className="order-card-top">
              <div className="row-left">
                <span className={`icon-bubble ${order.category?.name === 'Électricité' ? 'yellow' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2s6 6.3 6 10a6 6 0 1 1-12 0C6 8.3 12 2 12 2Z"/></svg>
                </span>
                <div>
                  <div className="row-title" style={{ fontSize: '15px' }}>{order.artisan?.name || 'Artisan'} - {order.category?.name || 'Service'}</div>
                  <div className="muted small">{new Date(order.createdAt).toLocaleDateString('fr-FR')}</div>
                </div>
              </div>
              <span className={`status-pill ${order.status === 'Terminée' ? 'gray' : order.status === 'En cours' ? 'blue' : 'green'}`}>{order.status}</span>
            </div>
            <div className="order-card-bottom"><span className="linkish">Détails</span></div>
          </section>
        ))}

        <section className="cta-blue mt-20">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m13 2 1.4 3.6L18 7l-3.6 1.4L13 12l-1.4-3.6L8 7l3.6-1.4L13 2Z"/><path d="M5 14v5"/><path d="M2.5 16.5H7.5"/></svg> 
                <span style={{ verticalAlign: 'middle', marginLeft: '6px' }}>Demander un autre M3allem</span>
              </h3>
              <p>Disponibilités maintenant</p>
            </div>
            <Link to="/urgent-order" className="inline-btn" style={{ textDecoration: 'none' }}>Démarrer</Link>
          </div>
        </section>

        <section className="card mt-16" style={{ padding: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <div className="section-title" style={{ fontSize: '16px', margin: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg> 
                <span style={{ verticalAlign: 'middle', marginLeft: '6px' }}>Planifier une intervention</span>
              </div>
              <div className="muted small mt-8">Choisir une date</div>
            </div>
            <button className="inline-btn" style={{ background: '#f2f4f7', color: '#1f2940' }}>Planifier</button>
          </div>
        </section>

        <h2 className="section-title mt-24">Raccourcis</h2>
        <div className="shortcut-grid mt-12">
          <div className="shortcut-item"><div className="shortcut-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l4 2"/></svg></div><span>Historique</span></div>
          <div className="shortcut-item"><div className="shortcut-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 20-1.45-1.32C5.4 14.02 2 10.95 2 7.5A4.5 4.5 0 0 1 6.5 3a5 5 0 0 1 5.5 3.09A5 5 0 0 1 17.5 3 4.5 4.5 0 0 1 22 7.5c0 3.45-3.4 6.52-8.55 11.18L12 20Z"/></svg></div><span>Favoris</span></div>
          <div className="shortcut-item"><div className="shortcut-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a8 8 0 0 0-8 8v3a2 2 0 0 0 2 2h2v-5H4"/><path d="M20 14a2 2 0 0 1-2 2h-2v-5h4"/><path d="M18 16v1a3 3 0 0 1-3 3h-3"/></svg></div><span>Support</span></div>
          <div className="shortcut-item"><div className="shortcut-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.41 16.3l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3.2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.24 4.7l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 19.83 7.5l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div><span>Paramètres</span></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
