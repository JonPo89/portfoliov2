import React, { useState, useEffect } from 'react';
import './splash.css';
import useAnimatedLetters from '../features/animateLetters';


export function Splash (props) {
    const { splashHeadingAlternate, splashHeadingAnimate, splashDisplay, splashOpacity, splashHeadingClick, descriptionOpacity} = props;
    const [ folioTerSwap, setFolioTerSwap ] = useState(false); 
    const [ headingHeight, setHeadingHeight ] = useState("3rem");

    //Change the Er / Folio switch to suit font changes
    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            if (width < 700){
                setHeadingHeight("2.25rem");
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
            setFolioTerSwap(true);
        }
    }, );

    const jonPorterLetterdrop = useAnimatedLetters("Jon Porter", splashHeadingAnimate, splashHeadingAnimate ? 0 : 50, splashHeadingAnimate ? 50 : 0, splashHeadingAnimate ? 1 : 0, splashHeadingAnimate ? 0 : 1);
    
    //Swap to Er in Er / Folio
    function onMouseEnter () {
        setFolioTerSwap(true);
    }

    //Swap to Folio in Er / Folio
    function onMouseLeave () {
        setFolioTerSwap(false);
    }

    return (
        <div className="box" id="splash" style={{
                opacity: splashOpacity,
                display: splashDisplay
        }}>
            <div id="splashHeading" 
                onClick={splashHeadingClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{overflow: splashHeadingAnimate ? 'visible' : 'hidden'}} 
            >
                {splashHeadingAlternate ? 
                    <h1>{jonPorterLetterdrop()}</h1>
                :
                    <>
                    <h1 style={{color: folioTerSwap ? "var(--bright-colour" : "#ffffff00"}}>Jon Port</h1>
                        <div id="terFolio" 
                        style={{
                            position:"relative", 
                            top: folioTerSwap ? `${headingHeight}` : `-${headingHeight}`, 
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
