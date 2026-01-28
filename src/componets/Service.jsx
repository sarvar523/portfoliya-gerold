import React from 'react'

export default function Service() {
  return (
   <section className="services" id="services">
        <div className="section-header">
          <h2 className="section-title"><span className="gradient-text">My Quality</span> Services</h2>
          <p className="section-description">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
        </div>

        <div className="services-list">
          <div className="service-item"
            onMouseMove={handleServiceMouseMove}
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className="service-number">01</div>
            <div className="service-title">Responsive Design</div>
            <div className="service-description">
              Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.
            </div>
            <div className="service-icon">
              <span className="arrow-icon">↘</span>
            </div>
          </div>

          <div className="service-item"
            onMouseMove={handleServiceMouseMove}
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className="service-number">02</div>
            <div className="service-title">CMS Development</div>
            <div className="service-description">
              Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.
            </div>
            <div className="service-icon">
              <span className="arrow-icon">↘</span>
            </div>
          </div>

          <div className="service-item"
            onMouseMove={handleServiceMouseMove}
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className="service-number">03</div>
            <div className="service-title">API Integrations</div>
            <div className="service-description">
              Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.
            </div>
            <div className="service-icon">
              <span className="arrow-icon">↘</span>
            </div>
          </div>

          <div className="service-item"
            onMouseMove={handleServiceMouseMove}
            onMouseEnter={handleServiceMouseEnter}
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className="service-number">04</div>
            <div className="service-title">Website Redesign</div>
            <div className="service-description">
              Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.
            </div>
            <div className="service-icon">
              <span className="arrow-icon">↘</span>
            </div>
          </div>
        </div>
      </section>
  )
}
