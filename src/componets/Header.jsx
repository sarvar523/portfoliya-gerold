import React from 'react'

export default function Header() {
  return (
     <div className='headers'>
      <div className="cursor-follower" ></div>
      <div className="cursor-follower" ></div>
      <div className="video-background">
        <iframe
          className="bg-iframe"
          src="https://www.youtube.com/embed/X-HL-r5TOiU?playlist=X-HL-r5TOiU&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="bg-overlay"></div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-symbol">S</div>
          <span className="email-text">sarvarakmalovich523@gmail.com</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolios">Portfolios</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <button href="#hire" className="hire-btn">Hire Me!</button>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h3>I am Sarvar</h3>
          <h1>sdf-Level Web <br /> <span className="gradient-text">Developer.</span></h1>
          <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
          <div className="hero-actions">
            <button className="outline-btn">Download CV <span className="icon">⬇</span></button>
            <div className="socials">
              <div className="social-icon">t</div>
              <div className="social-icon">in</div>
              <div className="social-icon">dr</div>
              <div className="social-icon">gh</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img src="./f12881ce390f0688ed897a67f64722079a412f73.png" alt="Gerold" />
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="stat-item">
          <h2><CountUp end={14} duration={2000} /></h2>
          <p>Years of <br />Experience</p>
        </div>
        <div className="stat-item">
          <h2><CountUp end={50} suffix="+" duration={2000} /></h2>
          <p>Project <br />Completed</p>
        </div>
        <div className="stat-item">
          <h2><CountUp end={1.5} suffix="K" decimals={1} duration={2000} /></h2>
          <p>Happy <br />Clients</p>
        </div>
      </section>
</div>
  )
}
