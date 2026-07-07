import React, { useState, useCallback, useEffect } from 'react';
import './Gallery.css';

const images = [
  {
    id: 'gallery-1',
    label: 'Signature Dishes',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    id: 'gallery-2',
    label: 'Fine Dining',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop',
    tall: true,
  },
  {
    id: 'gallery-3',
    label: 'Our Kitchen',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    id: 'gallery-4',
    label: 'Happy Diners',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=800&fit=crop',
    tall: true,
  },
  {
    id: 'gallery-5',
    label: 'Sweet Endings',
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
    tall: false,
  },
  {
    id: 'gallery-6',
    label: 'Live Cooking',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    tall: false,
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((img) => setLightbox(img), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  /* close on Escape */
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Gallery</span>
          <h2 className="section-title">
            Our <span className="gold">Gallery</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={img.id}
              id={img.id}
              className={`gallery-item${img.tall ? ' gallery-tall' : ''} reveal-scale delay-${i + 1}`}
              onClick={() => openLightbox(img)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.label}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') openLightbox(img);
              }}
            >
              <img src={img.url} alt={img.label} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <button
            id="lightbox-close"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="22" y2="22" />
              <line x1="22" y1="6" x2="6" y2="22" />
            </svg>
          </button>
          <img
            className="lightbox-img"
            src={lightbox.url.replace('w=600', 'w=1200').replace('h=400', 'h=800').replace('h=800', 'h=900')}
            alt={lightbox.label}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox-caption">{lightbox.label}</p>
        </div>
      )}
    </section>
  );
}
