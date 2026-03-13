import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <>
      <div className="content tight-bottom">
        <div className="topbar">
          <span className="icon-plain"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/><path d="M9 12h10"/></svg></span>
          <div className="topbar-title" style={{ marginRight: 'auto' }}>Profil</div>
          <span className="icon-round">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.41 16.3l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3.2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.24 4.7l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 19.83 7.5l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </span>
        </div>

        <section className="card profile-tile mt-10">
          <div className="avatar-initials"><div className="avatar-circle">AD</div></div>
          <div>
            <div className="profile-name">Mon compte</div>
            <div className="row-subtitle" style={{ fontSize: '12px' }}>Gérer vos informations et préférences</div>
          </div>
        </section>

        <h2 className="section-title mt-18">&nbsp;</h2>
        <section className="card list-card" style={{ marginTop: '-10px' }}>
          <div className="row-card">
            <div className="row-left">
              <span className="icon-bubble"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 7h12l1 12H5L6 7Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg></span>
              <div><div className="row-title">Mes commandes</div></div>
            </div>
            <span className="icon-plain" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
          </div>
          <div className="row-card">
            <div className="row-left">
              <span className="icon-bubble"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg></span>
              <div><div className="row-title">Messages</div></div>
            </div>
            <div className="topbar-actions"><span className="badge-count">1</span><span className="icon-plain" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></span></div>
          </div>
          <div className="row-card">
            <div className="row-left">
              <span className="icon-bubble"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 20-1.45-1.32C5.4 14.02 2 10.95 2 7.5A4.5 4.5 0 0 1 6.5 3a5 5 0 0 1 5.5 3.09A5 5 0 0 1 17.5 3 4.5 4.5 0 0 1 22 7.5c0 3.45-3.4 6.52-8.55 11.18L12 20Z"/></svg></span>
              <div><div className="row-title">Favoris</div></div>
            </div>
            <span className="icon-plain" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
          </div>
        </section>

        <h2 className="section-title mt-18">Aide &amp; Confiance</h2>
        <section className="card list-card">
          <div className="row-card">
            <div className="row-left">
              <span className="icon-bubble gray"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m14 12-8.5 8.5"/><path d="m17 15 3-3-8-8-3 3 8 8Z"/><path d="m8 8 3-3"/><path d="m2 14 8 8"/></svg></span>
              <div><div className="row-title">Support &amp; médiation</div><div className="row-subtitle">Assistance en cas de litige</div></div>
            </div>
            <span className="icon-plain" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
          </div>
          <div className="row-card">
            <div className="row-left">
              <span className="icon-bubble gray"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/><path d="M4 4h16v16H4z"/></svg></span>
              <div><div className="row-title">Centre d’aide</div></div>
            </div>
            <span className="icon-plain" style={{ width: '16px', height: '16px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></span>
          </div>
        </section>

        <div className="center" style={{ padding: '28px 0 8px', color: '#ec5f66', fontWeight: 900, fontSize: '15px' }}>Se déconnecter</div>
        <div className="center muted tiny">Version 1.0.0</div>
      </div>
      <BottomNav />
    </>
  );
}
