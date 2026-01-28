import React from 'react';

const Resume = () => {
    return (
        <section className="resume" id="resume">
            <div className="resume-container">
                <div className="resume-column">
                    <h2 className="resume-header">
                        <span className="icon">
                            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" />
                                <circle cx="12" cy="8" r="7" />
                            </svg>
                        </span>
                        My Experience
                    </h2>
                    <div className="resume-items">
                        <div className="resume-item">
                            <span className="date">2017 - 2022</span>
                        <h3>316-School</h3>
                            <p>Toshkent</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2022 - 2026</span>
                            <h3>320-School</h3>
                            <p>Toshkent</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2025 - 2025</span>
                            <h3>MARS IT SCHOOL</h3>
                            <p>Toshkent</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2025 - 2026</span>
                            <h3>JUNIOR FRONTEND DEVELOPER</h3>
                            <p>Theme Junction, Bursa</p>
                        </div>
                    </div>
                </div>

                <div className="resume-column">
                    <h2 className="resume-header">
                        <span className="icon">
                            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10L12 5L2 10L12 15L22 10Z" />
                                <path d="M6 12V17C6 17 8 20 12 20C16 20 18 17 18 17V12" />
                            </svg>
                        </span>
                        My Education
                    </h2>
                    <div className="resume-items">
                        <div className="resume-item">
                            <span className="date">2025 - 2026</span>
                            <h3>PROGRAMMING COURSE</h3>
                            <p>Mars IT School</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2023 - 2024</span>
                            <h3>ENGLISH COURSE</h3>
                            <p>lETS STUDY</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2025 - 2026</span>
                            <h3>WEB DESIGN COURSE</h3>
                            <p>MARS IT SCHOOL</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2024 - 2025</span>
                            <h3>FOOTBALL ACADEMY</h3>
                            <p>FC AKBARS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
