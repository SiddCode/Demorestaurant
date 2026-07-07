import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Food Blogger',
    rating: 5,
    text: 'The best biryani I have ever had! The flavors are absolutely incredible. Every visit is a new culinary journey.',
    avatar: 'R',
  },
  {
    name: 'Priya Sharma',
    role: 'Regular Customer',
    rating: 5,
    text: 'Excellent ambience and outstanding food quality. The butter chicken is to die for. Perfect for family dinners.',
    avatar: 'P',
  },
  {
    name: 'Amit Patel',
    role: 'Restaurant Critic',
    rating: 5,
    text: 'A gem in the city! Their attention to detail and use of authentic spices sets them apart from every other restaurant.',
    avatar: 'A',
  },
  {
    name: 'Sneha Reddy',
    role: 'Foodie',
    rating: 4,
    text: 'Love the warm ambience and the friendly staff. The paneer tikka is phenomenal. Always my go-to spot for celebrations.',
    avatar: 'S',
  },
  {
    name: 'Mohammed Ali',
    role: 'Chef',
    rating: 5,
    text: 'As a fellow chef, I appreciate their dedication to authentic cooking. The spices are perfectly balanced every single time.',
    avatar: 'M',
  },
  {
    name: 'Kavitha Nair',
    role: 'Event Planner',
    rating: 5,
    text: 'We hosted our anniversary dinner here. The service, food, and ambience were absolutely world-class. Highly recommended!',
    avatar: 'K',
  },
];

const StarIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill={filled ? 'var(--accent-gold)' : 'none'}
    stroke="var(--accent-gold)"
    strokeWidth="1.5"
  >
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.26 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const QuoteIcon = () => (
  <svg
    className="review-quote-icon"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="var(--accent-gold)"
    opacity="0.25"
  >
    <path d="M10 25c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-14l1 3c-4.5 1.5-7.5 5-8 8.5C10.7 16 12 17 12 19.5 12 22.5 10 25 10 25zm16 0c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-14l1 3c-4.5 1.5-7.5 5-8 8.5C26.7 16 28 17 28 19.5 28 22.5 26 25 26 25z" />
  </svg>
);

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const total = reviews.length;

  const goTo = useCallback(
    (idx) => {
      setCurrent(((idx % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* auto-play */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gold">Guests</span> Say
          </h2>
          <div className="divider" />
        </div>

        <div
          className="reviews-carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Arrows */}
          <button
            id="reviews-prev"
            className="reviews-arrow reviews-arrow--left"
            onClick={prev}
            aria-label="Previous review"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            id="reviews-next"
            className="reviews-arrow reviews-arrow--right"
            onClick={next}
            aria-label="Next review"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>

          {/* Track */}
          <div className="reviews-viewport">
            <div
              className="reviews-track"
              ref={trackRef}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((r, i) => (
                <div className="reviews-slide" key={i}>
                  <div className="review-card">
                    <QuoteIcon />

                    <div className="review-stars">
                      {Array.from({ length: 5 }, (_, s) => (
                        <StarIcon key={s} filled={s < r.rating} />
                      ))}
                    </div>

                    <p className="review-text">&ldquo;{r.text}&rdquo;</p>

                    <div className="review-author">
                      <div className="review-avatar">{r.avatar}</div>
                      <div>
                        <p className="review-name">{r.name}</p>
                        <p className="review-role">{r.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="reviews-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                id={`reviews-dot-${i}`}
                className={`reviews-dot${i === current ? ' reviews-dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
