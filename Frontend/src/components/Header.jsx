import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../App';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  if (user && user.role === 'admin') {
    if (!navItems.some(item => item.path === '/hr-dashboard')) {
      navItems.unshift({ name: 'Dashboard', path: '/hr-dashboard' });
    }
  }

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login', { replace: true });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            NOIR CAPITAL
          </Link>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            {user && (
              <button onClick={handleLogout} className="logout-btn">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            )}
          </nav>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="nav-mobile">
            <div className="nav-mobile-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link-mobile ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user && (
                <button onClick={handleLogout} className="logout-btn-mobile">
                   <LogOut size={16} />
                   <span>Logout</span>
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
