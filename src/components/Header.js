import React, {useState, useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Splash } from './Splash';
import { fontList } from '../features/fontList';
import useAnimatedLetters from '../features/animateLetters';
import './header.css';

export function Header () {
    const [splashDisplay, setSplashDisplay] = useState("inline-flex");
    const [splashOpacity, setSplashOpacity] = useState(1);
    const [splashDescriptionOpacity, setSplashDescriptionOpacity] = useState(1);
    const [splashHeadingAlternate, setSplashHeadingAlternate] = useState(false);
    const [splashHeadingAnimate, setSplashHeadingAnimate] = useState(false);
    const [splashFolioTerSwap, setSplashFolioTerSwap] = useState(false);

    const [headingColour, setHeadingColour] = useState(null);
    const [headingFont, setHeadingFont] = useState("Lilita One");
    const [headingAnimate, setHeadingAnimate] = useState(true);

    //Change heading colour when mouse wheel scrolled
    useEffect(() => {
        const generateRandomColour = () => {
            const randomColour = Math.random() * 360;
            setHeadingColour(randomColour);
        }
        window.addEventListener("wheel", generateRandomColour);

        return () => {
            window.removeEventListener("wheel", generateRandomColour);
        }
    },[]);
       
    const headerNameAnimate = useAnimatedLetters("Jon Porter", headingAnimate, headingAnimate ? 0 : 50, headingAnimate ? 50 : 0, headingAnimate ? 1 : 0, headingAnimate ? 0 : 1, "#ffffff00", "#ffffff00", headingFont, headingColour)

    //Animate and swap to Splash Page
    const onClickToggleHome = () => {
        setSplashDisplay("inline-flex");
        setHeadingAnimate(true);
        setSplashFolioTerSwap(true);
        
        setTimeout(() => {
            setSplashOpacity(1);
        }, 500)
        setTimeout(() => {
            setSplashDescriptionOpacity(1);
            setSplashHeadingAnimate(false);
        }, 700)
        setTimeout(() => {
            setSplashHeadingAlternate(false);
        }, 1650)
    }

    //Animate and return to home page, when on splash screen
    const splashHeadingClick = () => {
        setHeadingColour(0);
        setHeadingFont("Lilita One");
        
        setSplashHeadingAlternate(true);
        setSplashHeadingAnimate(true);
        
        setTimeout(() => {
            setSplashOpacity(0);
        }, 950);

        setTimeout(() => {
            setSplashDisplay("none");
            setHeadingAnimate(false);
        }, 1350);
    }

    //Randomly change header font
    const headingClick = () => {
        let randomFontNo = Math.floor(Math.random() * fontList.length);

        setHeadingFont(fontList[randomFontNo]);
        console.log(headingFont);
    }

    return (
        <div className="app">
            <header>
                <div className="heading">
                    <h1 
                        id="name" 
                        onClick={headingClick}
                        style={{webkitTextStrokeColor:headingColour ? `hsl(${headingColour}, 100%, 50%)`:'white', fontFamily:`${headingFont}, sans-serif`}}>
                            {headerNameAnimate()}
                    </h1>
                    <h2 id="title">Front End Developer</h2>
                </div>
                <div id="nav">
                    <NavLink to="about" className='inactiveNavLink' onClick={onClickToggleHome}>
                        Splash Page
                    </NavLink>
                    <NavLink to="about" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >About</NavLink>
                    <NavLink to="projects" className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} >Projects</NavLink>
                </div>
            </header>
            <Outlet />
            <Splash 
                splashDisplay={splashDisplay}
                splashOpacity={splashOpacity}
                splashHeadingClick={splashHeadingClick}
                splashDescriptionOpacity={splashDescriptionOpacity}
                splashHeadingAnimate = {splashHeadingAnimate}
                splashHeadingAlternate={splashHeadingAlternate}
                splashFolioTerSwap = {splashFolioTerSwap}
                setSplashFolioTerSwap={setSplashFolioTerSwap}
            />
            <Footer />
        </div>
    );
}
