import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

// Importing components
import Navbar from './componets/Navbar';
import Hero from './componets/Hero';
import About from './componets/About';
import Services from './componets/Services';
import Portfolio from './componets/Portfolio';
import Testimonials from './componets/Testimonials';
import Blogs from './componets/Blogs';
import Footer from './componets/Footer';
import ScrollToTop from './componets/ScrollToTop';
import Preloader from './componets/Preloader';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [load, setLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Initial loading timer
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll('.service-item, .portfolio-item, .section-header, .blog-card, .resume-item, .skill-item').forEach((item) => {
        observer.observe(item);
      });
    };

    observe();
    const timeout = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [location.pathname]); // Re-observe when changing pages

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {load && <Preloader />}
      <div className="app-container" style={{ visibility: load ? 'hidden' : 'visible' }}>
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <div id="home"><Hero /></div>
                <div id="services"><Services /></div>
                <div id="portfolio"><Portfolio /></div>
                <div id="about"><About /></div>
                <div id="testimonials"><Testimonials /></div>
                <div id="blog"><Blogs /></div>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolios" element={<Portfolio />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Footer />} />
          </Routes>
        </main>

        {/* Show footer on all pages except maybe specific ones, but usually keep it */}
        {location.pathname !== '/contact' && <Footer />}
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
