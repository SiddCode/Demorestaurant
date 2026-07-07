import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    id: 'feature-fresh',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28c0 0-1-3-1-6c0-4 3-7 3-7s-5 1-8 5c-2.5 3.3-1 7-1 7" />
        <path d="M16 28c0 0 1-3 1-6c0-4-3-7-3-7s5 1 8 5c2.5 3.3 1 7 1 7" />
        <path d="M16 4c0 0-2 3-2 7c0 3 2 6 2 6" />
        <path d="M16 4c0 0 2 3 2 7c0 3-2 6-2 6" />
        <circle cx="16" cy="17" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Fresh Ingredients',
    desc: 'Farm-to-table ingredients sourced daily from local organic farms',
  },
  {
    id: 'feature-chefs',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 28h12v-3H10v3z" />
        <path d="M10 25c0-2 0-4 0-5c-3 0-5-2.5-5-5.5C5 11 8 8 11 8c0-2.5 2-4 5-4s5 1.5 5 4c3 0 6 3 6 6.5c0 3-2 5.5-5 5.5c0 1 0 3 0 5" />
        <path d="M16 8v17" />
      </svg>
    ),
    title: 'Expert Chefs',
    desc: 'Award-winning chefs with 20+ years of culinary mastery',
  },
  {
    id: 'feature-delivery',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="16" height="12" rx="1" />
        <path d="M18 14h6l4 5v3h-10V14z" />
        <circle cx="9" cy="24" r="2.5" />
        <circle cx="23" cy="24" r="2.5" />
        <path d="M11.5 22H18" />
        <path d="M2 15h7" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Hot meals delivered to your doorstep within 30 minutes',
  },
  {
    id: 'feature-family',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28s-10-5.5-10-13c0-4.5 3.5-8 7-8c2 0 3.5 1 3 1s1-1 3-1c3.5 0 7 3.5 7 8c0 7.5-10 13-10 13z" />
        <path d="M16 12v6" />
        <path d="M13 15h6" />
      </svg>
    ),
    title: 'Family Friendly',
    desc: 'Cozy ambiance perfect for family gatherings and celebrations',
  },
  {
    id: 'feature-hygiene',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L4 9v7c0 8.5 5 14 12 17c7-3 12-8.5 12-17V9L16 3z" />
        <path d="M11 16l3.5 3.5L21 13" strokeWidth="2.2" />
      </svg>
    ),
    title: '100% Hygiene',
    desc: 'FSSAI certified kitchen with the highest safety standards',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Why Us</span>
          <h2 className="section-title">
            Why Choose <span className="gold">Us</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className={`why-card reveal delay-${i + 1}`}
            >
              <div className="why-icon-wrap">
                <div className="why-icon">{f.icon}</div>
              </div>
              <h4 className="why-card-title">{f.title}</h4>
              <p className="why-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
