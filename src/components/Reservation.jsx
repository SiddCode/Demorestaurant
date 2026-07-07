import { useState } from 'react';
import './Reservation.css';

const PersonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    requests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', guests: '2', date: '', time: '', requests: '' });
  };

  return (
    <section id="reservation" className="section reservation">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Book a Table</span>
          <h2 className="section-title">
            Make a <span className="gold">Reservation</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="reservation__grid">
          <div className="reservation__image-col reveal-left">
            <div className="reservation__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=900&fit=crop"
                alt="Fine dining atmosphere"
                className="reservation__image"
                loading="lazy"
              />
              <div className="reservation__image-overlay" />
            </div>
          </div>

          <div className="reservation__form-col reveal-right">
            <form
              className="reservation__form"
              onSubmit={handleSubmit}
              id="reservation-form"
            >
              <div className="reservation__field">
                <div className="reservation__input-wrapper">
                  <span className="reservation__icon"><PersonIcon /></span>
                  <input
                    type="text"
                    id="reservation-name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="reservation__field">
                <div className="reservation__input-wrapper">
                  <span className="reservation__icon"><PhoneIcon /></span>
                  <input
                    type="tel"
                    id="reservation-phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="reservation__field">
                <div className="reservation__input-wrapper">
                  <span className="reservation__icon"><UsersIcon /></span>
                  <select
                    id="reservation-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reservation__row">
                <div className="reservation__field">
                  <div className="reservation__input-wrapper">
                    <span className="reservation__icon"><CalendarIcon /></span>
                    <input
                      type="date"
                      id="reservation-date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="reservation__field">
                  <div className="reservation__input-wrapper">
                    <span className="reservation__icon"><ClockIcon /></span>
                    <input
                      type="time"
                      id="reservation-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="reservation__field">
                <textarea
                  id="reservation-requests"
                  name="requests"
                  placeholder="Special Requests (optional)"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                id="reservation-submit"
                className="btn btn-primary reservation__submit"
              >
                Book Table
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <div className={`reservation__toast ${submitted ? 'reservation__toast--visible' : ''}`}>
        <span className="reservation__toast-icon"><CheckIcon /></span>
        Table reserved successfully!
      </div>
    </section>
  );
}
