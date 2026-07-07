import { useState, useEffect, useRef, useCallback } from 'react';
import './About.css';

const STATS = [
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 50, suffix: 'K+', label: 'Happy Customers' },
  { target: 200, suffix: '+', label: 'Recipes' },
  { target: 50, suffix: '+', label: 'Expert Chefs' },
];

function AnimatedCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const animate = useCallback(() => {
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, animate]);

  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat__number">
        {count}
        {suffix}
      </span>
      <span className="about-stat__label">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title">
            About <span className="gold">Us</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="about__grid">
          {/* Left column — images */}
          <div className="about__images reveal-left">
            <div className="about__img-wrapper about__img-wrapper--chef">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=700&fit=crop"
                alt="Our head chef preparing a signature dish"
                loading="lazy"
              />
            </div>
            <div className="about__img-wrapper about__img-wrapper--interior">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Elegant restaurant interior"
                loading="lazy"
              />
            </div>
            {/* decorative gold corner accent */}
            <span className="about__corner-accent" aria-hidden="true" />
          </div>

          {/* Right column — text */}
          <div className="about__content reveal-right">
            <span className="about__since">Since 2009</span>
            <h3 className="about__heading">A Legacy of Authentic Flavors</h3>
            <p className="about__text">
              For over 15 years, we have served authentic flavors using the
              freshest ingredients and time-honored traditional recipes. Every
              dish tells a story of passion, heritage, and culinary excellence.
            </p>
            <p className="about__text">
              Our chefs bring decades of experience from the finest kitchens,
              blending traditional techniques with modern presentation to create
              an unforgettable dining experience.
            </p>

            <div className="about__stats">
              {STATS.map((s) => (
                <AnimatedCounter
                  key={s.label}
                  target={s.target}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
