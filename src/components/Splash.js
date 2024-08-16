import React, { useState, useEffect } from 'react';
import './splash.css';
import useAnimatedLetters from '../features/animateLetters';


export function Splash (props) {
    const { splashHeadingAlternate, splashHeadingAnimate, splashDisplay, splashOpacity, splashHeadingClick, descriptionOpacity, splashFolioTerSwap, setSplashFolioTerSwap} = props;
    const [ headingHeight, setHeadingHeight ] = useState("3rem");

    //Check if device is touch screen
    const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    //Change the Er / Folio switch to suit font changes
    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            if (width < 450){
                setHeadingHeight("1.5rem");
            } else if(width < 750) {
                setHeadingHeight("2.25rem")
            } else {
                setHeadingHeight("3rem");
            }
        };
        
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    },[])

    //Activate Er / Folio swap when the animated heading ends
    useEffect(() => {
        if (splashHeadingAnimate) {
            setSplashFolioTerSwap(true);
        }
    }, [splashHeadingAnimate, setSplashFolioTerSwap]);

    const jonPorterLetterdrop = useAnimatedLetters("Jon Porter", splashHeadingAnimate, splashHeadingAnimate ? 0 : 50, splashHeadingAnimate ? 50 : 0, splashHeadingAnimate ? 1 : 0, splashHeadingAnimate ? 0 : 1);
    
    //Swap to Er in Er / Folio
    function onMouseEnter () {
        setSplashFolioTerSwap(true);
    }

    //Swap to Folio in Er / Folio
    function onMouseLeave () {
        setSplashFolioTerSwap(false);
    }

    //Click event, depending on if touch screen or not
    function onClick () {
        if (isTouchScreen) {
            setSplashFolioTerSwap(true);
            setTimeout(() => {
                splashHeadingClick();
            },500)
        } else {
            splashHeadingClick();
        }
    }

    return (
        <div className="box" id="splash" style={{
                opacity: splashOpacity,
                display: splashDisplay
        }}>
            <div id="splashHeading" 
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{overflow: splashHeadingAnimate ? 'visible' : 'hidden'}} 
            >
                {splashHeadingAlternate ? 
                    <h1>{jonPorterLetterdrop()}</h1>
                :
                    <>
                    <h1 id="jonPort" style={{color: splashFolioTerSwap ? "var(--bright-colour" : "#ffffff00"}}>Jon Port</h1>
                        <div id="terFolio" 
                        style={{
                            position:"relative", 
                            top: splashFolioTerSwap ? `${headingHeight}` : `-${headingHeight}`, 
                            transition: "all 0.5s",
                        }}>
                        <h1 style={{
                            color: "white",
                            }}>er</h1>
                        <h1 style={{

                            }}>folio</h1>    
                        </div>
                    </>    
                }


            </div>
            <h2 id="splashIntro" style={{opacity:descriptionOpacity}}>
                Front End Web-Developer
            </h2>
        </div>
    )
}
