import React from 'react';
import './service.css';

const Services = () => {
    const handleServiceMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleServiceMouseEnter = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const entryTop = Math.abs(e.clientY - rect.top);
        const entryBottom = Math.abs(e.clientY - rect.bottom);

        if (entryTop < entryBottom) {
            e.currentTarget.classList.add('enter-top');
            e.currentTarget.classList.remove('enter-bottom');
        } else {
            e.currentTarget.classList.add('enter-bottom');
            e.currentTarget.classList.remove('enter-top');
        }
    };

    const handleServiceMouseLeave = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const exitTop = Math.abs(e.clientY - rect.top);
        const exitBottom = Math.abs(e.clientY - rect.bottom);

        if (exitTop < exitBottom) {
            e.currentTarget.classList.add('exit-top');
            e.currentTarget.classList.remove('exit-bottom');
        } else {
            e.currentTarget.classList.add('exit-bottom');
            e.currentTarget.classList.remove('exit-top');
        }
        setTimeout(() => {
            e.currentTarget.classList.remove('enter-top', 'enter-bottom', 'exit-top', 'exit-bottom');
        }, 100);
    };

    return (
        <section className="services" id="services">
            <div className="section-header">
                <h2 className="section-title"><span className="gradient-text">My Quality</span> Services</h2>
                <p className="section-description">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
            </div>

            <div className="services-list">
                {[
                    { num: '01', title: 'Responsive Design', desc: 'Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.' },
                    { num: '02', title: 'CMS Development', desc: 'Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.' },
                    { num: '03', title: 'API Integrations', desc: 'Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.' },
                    { num: '04', title: 'Website Redesign', desc: 'Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.' }
                ].map((service, index) => (
                    <div key={index} className="service-item"
                        onMouseMove={handleServiceMouseMove}
                        onMouseEnter={handleServiceMouseEnter}
                        onMouseLeave={handleServiceMouseLeave}
                    >
                        <div className="service-number">{service.num}</div>
                        <div className="service-title">{service.title}</div>
                        <div className="service-description">{service.desc}</div>
                        <div className="service-icon">
                            <span className="arrow-icon">↘</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
