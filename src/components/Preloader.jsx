import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const completeTimer = setTimeout(() => {
      setUnmount(true);
      if (onComplete) onComplete();
    }, 3100); // 2500 + 600ms fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (unmount) return null;

  return (
    <div className={`preloader${fadeOut ? ' fade-out' : ''}`} aria-label="Loading">
      <div className="preloader-logo">SHOWCASE</div>
      <div className="preloader-ring" />
      <div className="preloader-bar-track">
        <div className="preloader-bar-fill" />
      </div>
      <p className="preloader-tagline">Crafting Culinary Excellence</p>
    </div>
  );
}
