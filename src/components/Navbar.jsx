import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Menu',    href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark = true, toggleTheme, activeSection = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      {/* Logo */}
      <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
        <span className="navbar-logo-diamond" />
        <span className="navbar-logo-text">SHOWCASE</span>
      </a>

      {/* Desktop Links */}
      <ul className="navbar-links">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`navbar-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="navbar-actions">
        <button
          id="theme-toggle-btn"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? (
            /* Sun icon */
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            /* Moon icon */
            <svg viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <a href="#contact" className="btn btn-primary navbar-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Reserve Table
        </a>

        {/* Hamburger */}
        <button
          id="navbar-hamburger-btn"
          className={`navbar-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`navbar-mobile-overlay${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`navbar-mobile-link${activeSection === item.href.slice(1) ? ' active' : ''}`}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <div className="navbar-mobile-actions">
          <button
            id="theme-toggle-mobile-btn"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn btn-primary navbar-cta" style={{ display: 'inline-block' }} onClick={(e) => handleNavClick(e, '#contact')}>
            Reserve Table
          </a>
        </div>
      </div>
    </nav>
  );
}
