import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = windowHeight > 0 ? Math.min(100, Math.max(0, (scrollY / windowHeight) * 100)) : 0;

            document.body.style.setProperty('--scroll-y', `${scrollY}px`);
            document.body.style.setProperty('--scroll-percent', `${scrollPercent}%`);
            document.body.style.setProperty('--scroll-percent-val', scrollPercent);
            setShowScrollTop(scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <svg className="progress-ring" width="50" height="50">
                <circle className="progress-ring-bg" strokeWidth="2" fill="transparent" r="22" cx="25" cy="25" />
                <circle className="progress-ring-circle" strokeWidth="2" fill="transparent" r="22" cx="25" cy="25" />
            </svg>
            <svg className="arrow-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </button>
    );
};

export default ScrollToTop;
