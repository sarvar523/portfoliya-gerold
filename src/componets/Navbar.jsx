import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <div className="logo-symbol">S</div>
                <span className="email-text">sarvarakmalovich523@gmail.com</span>
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <NavLink to="/" end onClick={() => isMenuOpen && toggleMenu()}>Home</NavLink>
                <NavLink to="/about" onClick={() => isMenuOpen && toggleMenu()}>About</NavLink>
                <NavLink to="/services" onClick={() => isMenuOpen && toggleMenu()}>Services</NavLink>
                <NavLink to="/portfolios" onClick={() => isMenuOpen && toggleMenu()}>Portfolios</NavLink>
                <NavLink to="/blog" onClick={() => isMenuOpen && toggleMenu()}>Blog</NavLink>
                <NavLink to="/contact" onClick={() => isMenuOpen && toggleMenu()}>Contact</NavLink>
            </div>
            <Link to="/contact" className="hire-btn">Hire Me!</Link>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
