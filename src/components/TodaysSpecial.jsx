import { useState, useEffect } from 'react';
import './TodaysSpecial.css';

// Target: midnight tonight (resets each day)
function getSecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((midnight - now) / 1000));
}

function formatTime(totalSeconds) {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return { h, m, s };
}

export default function TodaysSpecial() {
  const [seconds, setSeconds] = useState(getSecondsUntilMidnight);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const { h, m, s } = formatTime(seconds);

  return (
    <section id="special" className="section special reveal-scale">
      {/* Decorative floating elements */}
      <span className="special__deco special__deco--1" aria-hidden="true" />
      <span className="special__deco special__deco--2" aria-hidden="true" />
      <span className="special__deco special__deco--3" aria-hidden="true" />
      <span className="special__sparkle special__sparkle--1" aria-hidden="true">✦</span>
      <span className="special__sparkle special__sparkle--2" aria-hidden="true">✦</span>
      <span className="special__sparkle special__sparkle--3" aria-hidden="true">✦</span>

      <div className="container special__container">
        {/* Left — image */}
        <div className="special__image-col">
          <div className="special__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
              alt="Delicious family combo spread"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="special__content">
          <span className="special__badge" id="special-badge">
            🔥 Weekend Special
          </span>

          <h2 className="special__title">Family Combo</h2>
          <p className="special__includes">
            4 Biryani &nbsp;+&nbsp; 4 Drinks &nbsp;+&nbsp; 2 Desserts
          </p>

          <div className="special__pricing">
            <span className="special__price-old">₹1,999</span>
            <span className="special__price-new">₹1,599</span>
            <span className="special__discount-tag">20% OFF</span>
          </div>

          <button id="special-order-btn" className="btn btn-primary special__cta">
            Order Now
          </button>

          <div className="special__timer">
            <span className="special__timer-label">Offer ends in</span>
            <div className="special__timer-boxes">
              <div className="special__timer-box">
                <span className="special__timer-val">{h}</span>
                <span className="special__timer-unit">hrs</span>
              </div>
              <span className="special__timer-sep">:</span>
              <div className="special__timer-box">
                <span className="special__timer-val">{m}</span>
                <span className="special__timer-unit">min</span>
              </div>
              <span className="special__timer-sep">:</span>
              <div className="special__timer-box">
                <span className="special__timer-val">{s}</span>
                <span className="special__timer-unit">sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
