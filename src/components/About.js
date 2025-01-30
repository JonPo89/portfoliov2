import React, { useEffect, useState } from 'react';
import './about.css';
import { skills } from '../features/skillsList';
import { introHighlights } from '../features/introHighlights';

export function About() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [introHoverMouse, setIntroHoverMouse] = useState("");
    const [randomNo, setRandomNo] = useState(0);
    const [easterEgg, setEasterEgg] = useState(false);


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


    //Show picture of Scout
    function mouseEnterScout() {
        const randomNo = Math.floor(Math.random() * introHighlights.scout.noImages);
        setRandomNo(randomNo + 1);
        setIntroHoverMouse("scoutImage");
    }

    return (
        <div className="box" id="about">
            <div id="introBox">
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

                <p id="intro">Hey!
                    <br />
                    I’m <span className="introHighlight activeHighlight" id="introMyName" onMouseEnter={() => setIntroHoverMouse("name")} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.name.text}</span>.
                    <br /><br />
                    I’m a <span className="introHighlight" >Full Stack Engineer</span> from <span className="introHighlight" >Melbourne, Australia.</span>
                    <br/><br />
                    I come from a <span className="introHighlight">3D Design/Product Design Engineering</span> background, working in the industry since 2012, as well as doing a <span className="introHighlight">UX/UI Design</span> Course before discovering the amazing and versatile world of coding. 
                    I started my coding journey at <span className="introHighlight">Codecademy</span> doing a couple of short courses on <span className="introHighlight">C#</span> and <span className="introHighlight">Python</span>, before deciding to put all my old MySpace (miss you Tom) coding knowledge to use and focusing on <span className="introHighlight">Full Stack Engineering and Web Development.</span>  It's been crazy, and so interesting learning about how web development has evolved to suit our requirements, and I'm so excited to be part of where it goes in the future.
                    <br /> <br />
                    I love the problem solving side of coding, how can I make <span className="introHighlight">designs pop more</span>, where can I add <span className="introHighlight">user interaction and feedback</span>, how did a certain website do something, can I add little <span className="introHighlight activeHighlight" onClick={() => setEasterEgg(!easterEgg)}>easter eggs</span> for people to find? With coding there really is no limit to what you can achieve, it just requires a lot of problem solving, and testing different methods, and I’m always eager to learn and do more.
                    <br /> <br />
                    When I’m not coding I like to watch moves, read books, draw, game, hang out with friends, or <span className="introHighlight activeHighlight" onMouseEnter={mouseEnterScout} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.scout.text}</span>!
                </p>
                <img id="mePortrait" src={easterEgg ? '/images/about/meEgg.png' : '/images/about/me.png'} alt="Illustration of Jon Porter"/>
            </div>
            {skills && skills[0] ? 
            
                <div id="techSkills">
                    <h2>Technical Skills</h2>
                    <h3>Frontend Development</h3>
                    <div id="skillsList">
                        {Object.values(skills[0]).map((skill, index) => (
                            <div className="skillBox">
                                <img
                                    key={index}
                                    src={`/images/skillIcons/${skill.fileName}Icon.png`}
                                    className="skill"
                                    

                                    alt={`/images/skillIcons/${skill.name}Icon.png`}
                                />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Backend Development</h3>
                    <div id="skillsList" >
                        {Object.values(skills[1]).map((skill, index) => (
                            <div className="skillBox">
                                <img
                                    key={index}
                                    src={`/images/skillIcons/${skill.fileName}Icon.png`}
                                    className="skill"

                                    alt={`/images/skillIcons/${skill.name}Icon.png`}
                                />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <h3>DevOps & Deployment</h3>
                    <div id="skillsList" >
                        {Object.values(skills[2]).map((skill, index) => (
                            <div className="skillBox">
                                <img
                                    key={index}
                                    src={`/images/skillIcons/${skill.fileName}Icon.png`}
                                    className="skill"

                                    alt={`/images/skillIcons/${skill.name}Icon.png`}
                                />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <h3>APIs & Data Handling</h3>
                    <div id="skillsList" >
                        {Object.values(skills[3]).map((skill, index) => (
                            <div className="skillBox">
                                <img
                                    key={index}
                                    src={`/images/skillIcons/${skill.fileName}Icon.png`}
                                    className="skill"

                                    alt={`/images/skillIcons/${skill.name}Icon.png`}
                                />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Testing & Debugging</h3>
                    <div id="skillsList" >
                        {Object.values(skills[4]).map((skill, index) => (
                            <div className="skillBox">
                                <img
                                    key={index}
                                    src={`/images/skillIcons/${skill.fileName}Icon.png`}
                                    className="skill"

                                    alt={`/images/skillIcons/${skill.name}Icon.png`}
                                />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : null}
        </div>
    );
}
