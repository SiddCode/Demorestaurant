import { useEffect, useRef, useCallback } from 'react';
import './Hero.css';

export default function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const progress = Math.min(scrollY / vh, 1.5); // clamp for safety

    // Parallax zoom on background
    if (bgRef.current) {
      bgRef.current.style.transform = `scale(${1 + progress * 0.6})`;
    }

    // Parallax text drift
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="hero" id="home">
      {/* Parallax zoom background */}
      <div className="hero-bg-image" ref={bgRef} aria-hidden="true" />

      {/* Gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Floating sparkle particles */}
      <div className="hero-particles" aria-hidden="true">
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
        <span className="sparkle" />
      </div>

      {/* Content */}
      <div className="hero-content" ref={contentRef}>
        <span className="hero-welcome">Welcome to</span>

        <h1 className="hero-title">
          <span className="gold">SHOWCASE</span>
          <br />
          RESTAURANT
        </h1>

        <p className="hero-tagline">Authentic Taste, Crafted with Passion</p>

        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary" id="hero-view-menu-btn">
            View Menu
          </a>
          <a href="#contact" className="btn btn-outline" id="hero-reserve-btn">
            Reserve a Table
          </a>
          <a href="#menu" className="btn btn-ghost" id="hero-order-btn">
            Order Online
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-chevron">
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
