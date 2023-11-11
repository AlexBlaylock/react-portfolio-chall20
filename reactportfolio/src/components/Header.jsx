import React from 'react';
import { Link } from 'react-router-dom';
// importing custom colors
import "../colors.css"

function Header() {
    return (
        <div className="hero fourthBGC">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-size-1">Alex Blaylock • Web Developer</h1>

                </div>
            </div>

            <div className="hero-foot">
                <div className="container">
                    <div className="tabs is-centered">
                        
                            <li><Link to="/" className="is-size-4">Home</Link></li>

                            <li><Link to="/portfolio" className="is-size-4">Portfolio</Link></li>

                            <li><Link to="/contact" className="is-size-4">Contact</Link></li>

                            <li><Link to="/resume" className="is-size-4">Resume</Link></li>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;

// https://blog.logrocket.com/how-to-use-bulma-css-with-react/ used this as a reference
