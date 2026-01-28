import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const testimonialCount = 4; // Original items count

    const testimonialsData = [
        { name: 'Tim Bailey', role: 'SEO Specialist', img: './oka.jpg' },
        { name: 'Brandon Fraser', role: 'Senior Dev', img: './oka.jpg' },
        { name: 'Sarah Jenkins', role: 'Product Manager', img: './oka.jpg' },
        { name: 'Michael Chen', role: 'UX Designer', img: './oka.jpg' },
        { name: 'Tim Bailey (Clone)', role: 'SEO Specialist', img: './oka.jpg' },
        { name: 'Brandon Fraser (Clone)', role: 'Senior Dev', img: './oka.jpg' }
    ];

    const onTouchStart = (e) => {
        setIsSwiping(true);
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        setStartX(clientX);
        setTransitionEnabled(true);
    };

    const onTouchMove = (e) => {
        if (!isSwiping) return;
        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        setCurrentX(clientX);
    };

    const onTouchEnd = () => {
        if (!isSwiping) return;
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setActiveTestimonial((prev) => (prev + 1) % (testimonialCount + 1));
            } else {
                setActiveTestimonial((prev) => (prev === 0 ? testimonialCount : prev - 1));
            }
        }
        setIsSwiping(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => {
                setTransitionEnabled(true);
                return prev + 1;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [testimonialCount]);

    useEffect(() => {
        if (activeTestimonial === testimonialCount) {
            const jumpTimer = setTimeout(() => {
                setTransitionEnabled(false);
                setActiveTestimonial(0);
            }, 1500);
            return () => clearTimeout(jumpTimer);
        }
    }, [activeTestimonial, testimonialCount]);

    useEffect(() => {
        if (activeTestimonial === 0 && !transitionEnabled) {
            void document.body.offsetHeight;
            setTransitionEnabled(true);
        }
    }, [activeTestimonial, transitionEnabled]);

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="section-header side-header">
                    <h2 className="section-title"><span className="gradient-text">My Client's Stories</span></h2>
                    <p className="section-description">Empowering people in new a digital journey with my super services</p>
                </div>

                <div className={`testimonials-grid ${isSwiping ? 'swiping' : ''}`}
                    style={{
                        transform: `translateX(-${activeTestimonial * 50}%)`,
                        transition: transitionEnabled ? 'transform 1.5s cubic-bezier(0.90, 0, 0.95, 1)' : 'none'
                    }}
                    onMouseDown={onTouchStart}
                    onMouseMove={onTouchMove}
                    onMouseUp={onTouchEnd}
                    onMouseLeave={onTouchEnd}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {testimonialsData.map((item, index) => (
                        <div key={index} className="testimonials-slide">
                            <div className="testimonial-card">
                                <div className="client-avatar-wrapper">
                                    <div className={`avatar-frame ${index % 2 !== 0 ? 'alternate' : ''}`}>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="quote-icon">
                                        <svg width="40" height="30" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.899 15.192 15 17.069 15C18.945 15 20.329 16.384 20.329 18C20.329 19.616 19.049 21 17.069 21H14.017ZM3 21L3 18C3 16.899 4.175 15 6.052 15C7.928 15 9.312 16.384 9.312 18C9.312 19.616 8.032 21 6.052 21H3ZM16.208 13C14.01 13 12.017 14.899 12.017 18V22H19.017V18C19.017 15.616 18.049 13 16.208 13ZM5.191 13C2.993 13 1.017 14.899 1.017 18V22H8.017V18C8.017 15.616 7.049 13 5.191 13Z" />
                                        </svg>
                                    </div>
                                    <p className="testimonial-text">
                                        “Taylor is a professional Designer he really helps my business by providing value to my business.”
                                    </p>
                                    <div className="client-info">
                                        <h4 className="client-name">{item.name}</h4>
                                        <p className="client-role">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
