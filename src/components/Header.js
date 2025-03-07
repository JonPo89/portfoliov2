import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdDehaze } from "react-icons/md";

import './header.css';

export function Header (props) {
    const { onClickToggleHome, headingClick, headingColour, headingFont, headerNameAnimate } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const [largeScreen, setLargeScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            setLargeScreen(w > 950);
            setMenuOpen(false);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header onMouseLeave={()=>setMenuOpen(false)}>
            <nav className="navbar">
                <div className="heading navbar-brand">
                    <h1 
                        id="name" 
                        onClick={onClickToggleHome}
                        onMouseEnter={headingClick}
                        style={{
                            webkitTextStrokeColor: headingColour ? `hsl(${headingColour}, 100%, 50%)` : 'white', 
                            fontFamily: `${headingFont}, sans-serif`
                        }}>
                        {headerNameAnimate()}
                    </h1>
                    <h2 id="title">Full Stack Engineer</h2>
                </div>
                
                <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
                    {menuOpen ? <MdClose className="expandMenu"/> : <MdDehaze className="expandMenu"/> }
                </button>
                
                <div className={`navbar-collapse ${menuOpen ? 'active' : ''}`} id="navbarSupportedContent"
                    style = {{top: largeScreen ? '0' : menuOpen ? '4.5rem' : '-15rem'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <a  
                                href='/images/JonPorterResume.pdf'
                                target="_blank"
                                rel="noreferrer"  
                                className='inactiveNavLink'>Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
