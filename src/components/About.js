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
    }, [hairToggle])


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
                    I come from a <span className="introHighlight">3D Design/Product Design Engineering</span> background, working in the industry since 2012, as well as doing a <span className="introHighlight">UX/UI Design</span> Course before discovering the amazing and versatile world of coding. 
                    I started my coding journey at <span className="introHighlight">Codecademy</span> doing a couple of short courses on <span className="introHighlight">C#</span> and <span className="introHighlight">Python</span>, before deciding to put all my old MySpace (miss you Tom) coding knowledge to use and focusing on <span className="introHighlight">Full Stack Engineering and Web Development.</span>  It's been crazy, and so interesting learning about how web development has evolved to suit our requirements, and I'm so excited to be part of where it goes in the future.
                    <br /> <br />
                    I love the problem solving side of coding, how can I make <span className="introHighlight">designs pop more</span>, where can I add <span className="introHighlight">user interaction and feedback</span>, how did a certain website do something, can I add little <span className="introHighlight activeHighlight" onClick={() => setEasterEgg(0)}>easter eggs</span> for people to find? With coding there really is no limit to what you can achieve, it just requires a lot of problem solving, and testing different methods, and I’m always eager to learn and do more.
                    <br /> <br />
                    When I’m not coding I like to watch moves, read books, draw, game, hang out with friends, or <span className="introHighlight activeHighlight" onMouseEnter={mouseEnterScout} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.scout.text}</span>!
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
