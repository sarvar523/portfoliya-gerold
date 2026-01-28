import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-contact" id="contact">
            <div className="footer-wrapper">
                <div className="contact-card">
                    <h2>Let’s work together!</h2>
                    <p>
                        I design and code beautifully simple things and I love what I do.
                        Just simple like that!
                    </p>

                    <div className="row">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>

                    <div className="row">
                        <input type="email" placeholder="Email address" />
                        <input type="tel" placeholder="Phone number" />
                    </div>

                    <select>
                        <option>Branding Design</option>
                    </select>

                    <textarea placeholder="Message"></textarea>

                    <button>Send Message</button>
                </div>

                <div className="contact-info">
                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+998 99 999 99 99</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <div>
                            <h4>Email</h4>
                            <p>sarvarakmalovich523@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div>
                            <h4>Address</h4>
                            <p>
                                Warne Park Street Pine,<br />
                                FL 33157, New York
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="footer-inner">
                    <div className="footer-logo">G</div>

                    <ul className="footer-menu">
                        <li>Services.</li>
                        <li>Work.</li>
                        <li>Skills.</li>
                        <li>Experience.</li>
                        <li>Blog.</li>
                    </ul>

                    <p className="footer-copy">
                        © 2025 All Rights Reserved by <span>ThemeJunction</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
