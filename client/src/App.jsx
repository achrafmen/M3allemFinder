import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import UrgentOrder from './pages/UrgentOrder';
import Artisans from './pages/Artisans';
import ConfirmRequest from './pages/ConfirmRequest';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <div className="app-wrap">
        <main className="app-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/urgent-order" element={<UrgentOrder />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/confirm-request" element={<ConfirmRequest />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
