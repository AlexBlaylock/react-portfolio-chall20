import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar">
                
                <div className="navbar-brand">
                    <h1 className="navbar-item">Alex Blaylock</h1>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">Personal</Link>
                        <Link to="/portfolio" className="navbar-item">Portfolio</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                        <Link to="/resume" className="navbar-item">Resume</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;