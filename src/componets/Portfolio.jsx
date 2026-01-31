import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const filterContainerRef = useRef(null);

    useEffect(() => {
        if (filterContainerRef.current) {
            const activeBtn = filterContainerRef.current.querySelector('button.active');
            if (activeBtn) {
                setIndicatorStyle({
                    left: `${activeBtn.offsetLeft}px`,
                    width: `${activeBtn.offsetWidth}px`,
                    height: `${activeBtn.offsetHeight}px`
                });
            }
        }

        // Local observer for portfolio items to fix the filtering visibility issue
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

        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [activeFilter]);

    return (
        <section className="portfolio" id="portfolios">
            <div className="section-header">
                <h2 className="section-title"><span className="gradient-text">My Recent</span> Works</h2>
            </div>

            {/* Filtr tugmalari map-siz, har biri alohida yozilgan */}
            <div className="filter-buttons" ref={filterContainerRef}>
                <div className="filter-active-bg" style={indicatorStyle}></div>
                <button
                    className={activeFilter === 'All' ? 'active' : ''}
                    onClick={() => setActiveFilter('All')}
                >
                    All
                </button>
                <button
                    className={activeFilter === 'Apps' ? 'active' : ''}
                    onClick={() => setActiveFilter('Apps')}
                >
                    Apps
                </button>
                <button
                    className={activeFilter === 'Branding' ? 'active' : ''}
                    onClick={() => setActiveFilter('Branding')}
                >
                    Branding
                </button>
                <button
                    className={activeFilter === 'Content' ? 'active' : ''}
                    onClick={() => setActiveFilter('Content')}
                >
                    Content
                </button>
                <button
                    className={activeFilter === 'UX/UI' ? 'active' : ''}
                    onClick={() => setActiveFilter('UX/UI')}
                >
                    UX/UI
                </button>
            </div>

            <div className="portfolio-grid">
                {/* 1-Loyiha */}
                {(activeFilter === 'All' || activeFilter === 'UX/UI') && (
                    <a href="https://sarvar523.github.io/6-oy-2-dars/" target="_blank">
                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <img src="./les.png" alt="Bigger, Bolder and Better" target="_blank" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info-card">
                                        <div className="info-content">
                                            <h3>Bigger, Bolder and Better</h3>
                                            <p>Project was about precision and information....</p>
                                        </div>
                                        <div className="info-arrow">↗</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-info-static">
                            <p>UX/UI</p>
                        </div>
                    </a>
                )}

                {/* 2-Loyiha */}
                {(activeFilter === 'All' || activeFilter === 'Apps') && (
                    <a href="https://sarvar523.github.io/bankomat/" target="_blank">
                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <img src="./bank.png" alt="Sebastian Camargo" target="_blank" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info-card">
                                        <div className="info-content">
                                            <h3>Sebastian Camargo</h3>
                                            <p>Mobile experience design for a premium portfolio.</p>
                                        </div>
                                        <div className="info-arrow">↗</div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-info-static">
                                <p>Apps</p>
                            </div>
                        </div>
                    </a>
                )}

                {/* 3-Loyiha */}
                {(activeFilter === 'All' || activeFilter === 'Branding') && (
                    <a href="https://sarvar523.github.io/6-oy-11-dars/" target="_blank">
                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <img src="./pokemon.png" alt="Grow Your Business" target="_blank" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info-card">
                                        <div className="info-content">
                                            <h3>Grow Your Business, With Us</h3>
                                            <p>Conversion-optimized landing page for business growth.</p>
                                        </div>
                                        <div className="info-arrow">↗</div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-info-static">
                                <p>Branding</p>
                            </div>
                        </div>
                    </a>
                )}

                {/* 4-Loyiha */}
                {(activeFilter === 'All' || activeFilter === 'Content') && (
                    <a href="https://sarvar523.github.io/velo-org/" target="_blank">
                        <div className="portfolio-item">
                            <div className="portfolio-image">
                                <img src="./velosiped.png" alt="Deloitte Strategy" target="_blank" />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-info-card">
                                        <div className="info-content">
                                            <h3>Deloitte. Strategy</h3>
                                            <p>Enterprise solutions and strategic content layout.</p>
                                        </div>
                                        <div className="info-arrow">↗</div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-info-static">
                                <p>Content</p>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
