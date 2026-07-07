import { useState } from 'react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const hours = [
  { day: 'Mon — Fri', time: '11:00 AM — 11:00 PM' },
  { day: 'Sat — Sun', time: '9:00 AM — 11:00 PM' },
  { day: 'Happy Hour', time: '4:00 PM — 7:00 PM' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Column 1 — Brand */}
          <div className="footer__col footer__brand-col">
            <a href="#hero" className="footer__logo" id="footer-logo">
              SHOWCASE
            </a>
            <p className="footer__tagline">
              Authentic Taste, Crafted with Passion
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-btn" id="footer-social-ig" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="footer__social-btn" id="footer-social-fb" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a
                href=""
                className="footer__social-btn"
                id="footer-social-wa"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer__link" id={`footer-link-${link.label.toLowerCase()}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Hours */}
          <div className="footer__col">
            <h4 className="footer__heading">Opening Hours</h4>
            <ul className="footer__hours">
              {hours.map((item, i) => (
                <li key={i} className="footer__hours-item">
                  <span className="footer__hours-day">{item.day}</span>
                  <span className="footer__hours-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div className="footer__col">
            <h4 className="footer__heading">Newsletter</h4>
            <p className="footer__newsletter-desc">
              Subscribe for exclusive offers and updates
            </p>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe} id="footer-newsletter-form">
              <input
                type="email"
                id="footer-newsletter-email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary footer__newsletter-btn" id="footer-newsletter-submit">
                Subscribe
              </button>
            </form>
            {subscribed && (
              <span className="footer__newsletter-success">✓ Subscribed!</span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__divider" />
          <p className="footer__copyright">
            © 2024 Showcase Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
