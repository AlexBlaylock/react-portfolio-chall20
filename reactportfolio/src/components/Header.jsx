import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            {/* need to add class for header styling */}
            <div className = ""> 
            <h1>Alex Blaylock</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Personal</Link>
                        </li>

                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;