import React, { useEffect, useState } from 'react';
import './about.css';
import { introHighlights } from '../features/introHighlights';

export function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [introHoverMouse, setIntroHoverMouse] = useState("");
    const [randomNo, setRandomNo] = useState(0);
    const [easterEgg, setEasterEgg] = useState(2);
    const [fHair1No, setFHair1No] = useState(0);
    const [hair1No, setHair1No] = useState(0);
    const [fHair2No, setFHair2No] = useState(1);
    const [hair2No, setHair2No] = useState(1);
    const [hairToggle, setHairToggle] = useState(false);
    const [smallWindow, setSmallWindow] = useState('large');

    useEffect(() => {
        let w = window.innerWidth;
        if (w < 450){
            setSmallWindow('small');
        } else {
            setSmallWindow('large');
        }
    }, [window.innerWidth])

    const hairLocation = {
        hair: {small: ['-205px', '-405px'],
               large: ['-365px', '-725px']
        },
        facialHair: {small: ['0px', '-200px'],
                    large: ['0px', '-360px']
        }
    }

    //Elements follow mouse position. 
    useEffect(() => {
        const handleMouseMove = (event) => {

            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    //Change Hair Style
    useEffect(() => {
        const interval = setInterval(() => {
            let randHair = Math.floor(Math.random() * 5);
            let randFHair = Math.floor(Math.random() * 3);
            if (hairToggle) {
                setHair2No(randHair);
                setFHair2No(randFHair);
                setHairToggle(false);
            } else {
                setHair1No(randHair);
                setFHair1No(randFHair);
                setHairToggle(true);
            }
            if (easterEgg < 2) {
                setEasterEgg(easterEgg + 1);
            }
        },3000)
        
        return () => clearInterval(interval);
    }, [hairToggle, easterEgg])


    //Show picture of Scout
    function mouseEnterScout() {
        const randomNo = Math.floor(Math.random() * introHighlights.scout.noImages);
        setRandomNo(randomNo + 1);
        setIntroHoverMouse("scoutImage");
    }

    return (
        <div className="box" id="about">
            {introHoverMouse ? (
                    introHoverMouse === "scoutImage" ? (
                        <img
                            id="introImageFollowMouse"
                            src={`/images/scoutPhotos/scout0${randomNo}.png`}
                            style={{ left: `${mousePosition.x + 7}px`, top: `${mousePosition.y - 40}px` }}
                            alt="Scout, the cutest little cat"
                        />
                    ) : (
                        <p
                            id="introTextFollowMouse"
                            style={{ left: `${mousePosition.x + 7}px`, top: `${mousePosition.y - 40}px` }}
                            dangerouslySetInnerHTML={{ __html: introHighlights[introHoverMouse]?.hoverText }}
                        />
                        )
                ) : null}
            <div id="introBox">
                <p id="intro">Hey!
                    <br />
                    I’m <span className="introHighlight activeHighlight" id="introMyName" onMouseEnter={() => setIntroHoverMouse("name")} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.name.text}</span>.
                    <br /><br />
                    I’m a <span className="introHighlight" >Full Stack Engineer</span> from <span className="introHighlight" >Melbourne, Australia.</span>
                    <br/><br />
                    As a <span className="introHighlight"> Full Stack Engineer</span> with a strong and versatile background, including  <span className="introHighlight">design, engineering</span> and  <span className="introHighlight">UX/UI</span>, I bring a unique perspective to Web Development.  With a strong enthusiasm in problem solving, design and a keen eye for detail, I create  <span className="introHighlight">unique, user friendly</span> and  <span className="introHighlight">responsive</span> websites to suit all client needs.
                    <br/><br/>
                    Despite already being a confident and capable Developer, I know that there’s always room to grow.  I am constantly looking at areas that I can improve, taking courses, learning new technologies, languages and looking at other websites and studying how they achieved something.  
                    <br/><br/>
                    Outside of coding I love drawing, watching movies, design, <span className="introHighlight activeHighlight" onClick={() => setEasterEgg(0)}>silly gags</span>, hanging out with friends, gaming, going to the gym, and will typically be found with my cat, <span className="introHighlight activeHighlight" onMouseEnter={mouseEnterScout} onMouseLeave={() => setIntroHoverMouse("")}>Scout</span>, on my lap.

                </p>

                <div id="portraitBox" className="mePortrait" style={{backgroundImage: easterEgg < 2 ? 'url("/images/about/meEgg.png")' : 'url("/images/about/AFaceTemplate00.png")'}}>
                    <div className="mePortrait" id="facialHair" style={{left:hairToggle?hairLocation.facialHair[smallWindow][0]:hairLocation.facialHair[smallWindow][1], display:easterEgg < 2?'none':''}} >
                        <img className="mePortrait" src={`/images/about/BFHair0${fHair1No}.png`}  alt="Facial Hair" />
                        <img className="mePortrait" src={`/images/about/BFHair0${fHair2No}.png`} alt="Facial Hair" />
                    </div>
                    <div className="mePortrait" id="hair" style={{top:hairToggle?hairLocation.hair[smallWindow][0]:hairLocation.hair[smallWindow][1], display:easterEgg < 2?'none':''}}>
                        <img className="mePortrait" src={`/images/about/CHair0${hair1No}.png`} alt="Hair" />
                        <img className="mePortrait" src={`/images/about/CHair0${hair2No}.png`} alt="Hair" />
                    </div>
                    <div className="mePortrait" id="eyesEars" style={{display:easterEgg < 2?'none':''}}>
                       <img className="mePortrait" src={`/images/about/DEyesEars00.png`} alt="Eyes and Ears" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
