import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PopularDishes from './components/PopularDishes'
import TodaysSpecial from './components/TodaysSpecial'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Reservation from './components/Reservation'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  // Toggle dark/light theme
  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Scroll reveal observer
  useEffect(() => {
    if (loading) return

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [loading])

  // Active section tracking
  useEffect(() => {
    if (loading) return

    const sections = document.querySelectorAll('section[id], .hero-section')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || 'home'
            setActiveSection(id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-70px 0px 0px 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [loading])

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />
  }

  return (
    <div className="app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} activeSection={activeSection} />
      <Hero />
      <About />
      <PopularDishes />
      <TodaysSpecial />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Reservation />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
