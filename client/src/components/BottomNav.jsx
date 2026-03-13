import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        <svg fill="none" height="21" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="21">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
        </svg>
        <span>Accueil</span>
      </Link>
      <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>
        <svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="18">
          <path d="M6 7h12l1 12H5L6 7Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
        <span>Demandes</span>
      </Link>
      <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
        <svg fill="none" height="21" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="21">
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span>Profil</span>
      </Link>
    </nav>
  );
}
