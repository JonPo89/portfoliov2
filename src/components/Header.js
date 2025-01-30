import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

export function Header (props) {
    const { onClickToggleHome, headingClick, headingColour, headingFont, headerNameAnimate} = props;
    

    return (
            <header>
                <div className="heading">
                    <h1 
                        id="name" 
                        
                        onClick={onClickToggleHome}
                        onMouseEnter={headingClick}
                        style={{webkitTextStrokeColor:headingColour ? `hsl(${headingColour}, 100%, 50%)`:'white', fontFamily:`${headingFont}, sans-serif`}}>
                            {headerNameAnimate()}
                    </h1>
                    <h2 id="title">Full Stack Engineer</h2>
                </div>
                <div id="nav">
                    <NavLink to="/" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >About</NavLink>
                    <NavLink to="/projects" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >Projects</NavLink>
                    <a  
                        href='/images/JonPorterResume.pdf'
                        target="_blank"
                        rel="noreferrer"  
                        className='inactiveNavLink' >Resume
                    </a>
                    <NavLink to="/contact" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >Contact</NavLink>

                </div>
            </header>
    );
}
