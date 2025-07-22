import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }, // ✅ Enabled by removing disabled
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="logo">
            NOIR CAPITAL
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
                  item.disabled
                    ? 'disabled'
                    : location.pathname === item.path
                    ? 'active'
                    : ''
                }`}
                onClick={item.disabled ? (e) => e.preventDefault() : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="nav-mobile">
            <div className="nav-mobile-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link-mobile ${
                    item.disabled
                      ? 'disabled'
                      : location.pathname === item.path
                      ? 'active'
                      : ''
                  }`}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button className="talk-btn-mobile">Let's Talk</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
