import { Link, useNavigate } from 'react-router-dom';

export default function Header({ 
  title, 
  showBrand = false, 
  centerTitle = false, 
  showBack = false,
  rightAction 
}) {
  const navigate = useNavigate();

  return (
    <div className="topbar" style={{ marginBottom: showBrand ? 0 : 14 }}>
      {showBrand && (
        <div className="brand">
          <div className="brand-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L14 13" />
              <path d="m19 5-4 4" />
            </svg>
          </div>
          <div className="brand-name">M3allem Finder</div>
        </div>
      )}

      {showBack && (
        <button className="icon-plain" onClick={() => navigate(-1)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {title && (
        <div className={`topbar-title ${centerTitle ? 'center' : ''}`}>
          {title}
        </div>
      )}

      <div className="topbar-actions">
        {rightAction ? rightAction : (
          showBrand && (
            <>
              <span className="icon-round">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 17H5.5a1.5 1.5 0 0 1-1.2-2.4C5.5 13.1 6 11.8 6 10V9a6 6 0 1 1 12 0v1c0 1.8.5 3.1 1.7 4.6A1.5 1.5 0 0 1 18.5 17H15" />
                  <path d="M9 17a3 3 0 0 0 6 0" />
                </svg>
              </span>
              <span className="icon-round">?</span>
            </>
          )
        )}
      </div>
    </div>
  );
}
