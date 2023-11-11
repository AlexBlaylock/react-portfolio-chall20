import React from 'react';
import { NavLink } from 'react-router-dom';
// importing custom colors
import "../colors.css"

function Header() {
    return (
        <div className="hero fourthBGC">
            <div className="hero-body" id="gradientTop">
                <div className="container">
                    <div className="columns is-vcentered">

                        <div className="column">
                            <h1 className="title is-size-3-mobile is-justify-content-center-mobile" id="nameText">Alex Blaylock</h1>
                            <h1 className="subtitle is-size-5-desktop is-size-5-mobile" id="">Web Developer</h1>

                        </div>

                        <div className="column is-narrow">
                        <img src="./MeCircle.png" alt="Picture of me" className="is-align-content-end is-hidden-desktop" id="mePictureMobile"/>
                        <ul className="tabs">
                                <li className="">
                                    <NavLink to="/"  className={({ isActive }) => isActive ? "has-text-weight-bold is-size-3 is-size-6-mobile" : "has-text-weight-normal is-size-4 is-size-6-mobile" }>
                                        About Me
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "has-text-weight-bold is-size-3 is-size-6-mobile" : "has-text-weight-normal is-size-4 is-size-6-mobile" }>
                                        Portfolio
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink 
                                        to="/contact" 
                                        className={({ isActive }) => isActive ? "has-text-weight-bold is-size-3 is-size-6-mobile" : "has-text-weight-normal is-size-4 is-size-6-mobile" }>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="">
                                    <NavLink to="/resume" className={({ isActive }) => isActive ? "has-text-weight-bold is-size-3 is-size-6-mobile" : "has-text-weight-normal is-size-4 is-size-6-mobile" }>
                                        Resume
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;

// https://blog.logrocket.com/how-to-use-bulma-css-with-react/ used this as a reference
// https://javascript.plainenglish.io/react-router-how-to-highlight-the-active-navlink-50ecb95384ca for using activeClassName
