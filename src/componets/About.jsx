import React from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

export default function About() {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <div className='about'>
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
                            <p>Mars IT School </p>
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
                            <p>lets study</p>
                        </div>
                        <div className="resume-item">
                            <span className="date">2025 - 2026</span>
                            <h3>WEB DESIGN COURSE</h3>
                            <p>maris it school</p>
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
            <section className="skills" id="skills">
                <div className="section-header">
                    <h2 className="section-title"><span className="gradient-text">My Skills</span></h2>
                    <p className="section-description">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                </div>

                <div className="skills-grid">
                    {[
                        { name: 'Figma', percent: '49%', img: './figma.png' },
                        { name: 'HTML', percent: '75%', icon: 'fa-brands fa-html5' },
                        { name: 'python', percent: '15%', img: './py.jpg' },
                        { name: 'CSS', percent: '65%', icon: 'fa-brands fa-css3-alt' },
                        { name: 'React', percent: '85%', icon: 'fa-brands fa-react' },
                        { name: 'JavaScript', percent: '55%', icon: 'fa-brands fa-js-square' }
                    ].map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-card">
                                <div className="skill-icon-box">
                                    {skill.img ? (
                                        <img src={skill.img} alt={skill.name} className={`skill-icon-img ${skill.name.toLowerCase()}`} />
                                    ) : (
                                        <i className={`${skill.icon} skill-icon`}></i>
                                    )}
                                </div>
                                <div className="skill-percent">{skill.percent}</div>
                            </div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
