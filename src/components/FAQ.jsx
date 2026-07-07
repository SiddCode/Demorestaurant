import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What are your opening hours?',
    answer:
      'We are open Monday to Sunday, 11:00 AM to 11:00 PM. We also offer special brunch on weekends from 9:00 AM.',
  },
  {
    question: 'Do you offer home delivery?',
    answer:
      'Yes! We deliver within a 10km radius. You can order through our website or call us directly. Delivery is free on orders above ₹500.',
  },
  {
    question: 'Can I book a table for a private event?',
    answer:
      'Absolutely! We have a beautiful private dining area that can accommodate up to 50 guests. Contact us for special event packages and custom menus.',
  },
  {
    question: 'Do you have vegetarian options?',
    answer:
      'Yes, we have an extensive vegetarian menu with over 40 dishes including our famous Paneer Tikka, Dal Makhani, and Vegetable Biryani.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes, we have complimentary valet parking for all our guests. There is also a spacious parking lot adjacent to the restaurant.',
  },
  {
    question: 'Do you cater for food allergies?',
    answer:
      'Yes, please inform our staff about any allergies. Our chefs can customize dishes to accommodate dietary restrictions and preferences.',
  },
];

const ChevronIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gold">Questions</span>
          </h2>
          <div className="divider" />
        </div>

        <div className="faq__list reveal">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                className="faq__question"
                id={`faq-question-${index}`}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__chevron">
                  <ChevronIcon />
                </span>
              </button>
              <div
                className="faq__answer-wrapper"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
