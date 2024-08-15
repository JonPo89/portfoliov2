import React, { useEffect, useState, useRef } from 'react';
import './about.css';
import { skills } from '../features/skillsList';
import { introHighlights } from '../features/introHighlights';
import meImage from '../images/about/me.png';
import meEggImage from '../images/about/meEgg.png';

export function About() {
    const [skillScrollPosition, setSkillsScrollPosition] = useState(0);
    const [pauseScroll, setPauseScroll] = useState(false);
    const [skillName, setSkillName] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [followMouseWidth, setFollowMouseWidth] = useState(0);
    const [introHoverMouse, setIntroHoverMouse] = useState("");
    const [randomNo, setRandomNo] = useState(0);
    const [easterEgg, setEasterEgg] = useState(false);

    const skillNameRef = useRef(null);

    const singleSkillsList = Object.values(skills);
    const skillsList = [...singleSkillsList, ...singleSkillsList, ...singleSkillsList];

    //scroll Skills
    useEffect(() => {
        const interval = setInterval(() => {
            if (!pauseScroll) {
                setSkillsScrollPosition(prevPosition => prevPosition - 0.1);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [pauseScroll]);

    //reset Skills Position
    useEffect(() => {
        if (skillScrollPosition < (-9 / 3 * skillsList.length)) {
            setSkillsScrollPosition(0);
        }
    }, [skillScrollPosition, skillsList.length]);

    //set the width of the following element
    useEffect(() => {
        const updateWidth = () => {
            if (skillNameRef.current) {
                const width = skillNameRef.current.getBoundingClientRect().width;
                setFollowMouseWidth(width);
            }
        };

        updateWidth();
    }, [skillName]);

    //Elements follow mouse position.  Don't allow them to extend past the window
    useEffect(() => {
        const handleMouseMove = (event) => {
            let x = event.clientX;
            const windowWidth = window.innerWidth;

            if (x > windowWidth - followMouseWidth - 15) {
                x = windowWidth - followMouseWidth - 15;
            }
            setMousePosition({ x: x, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [followMouseWidth]);

    //When hover over skill
    function skillNameEnter(skill) {
        setPauseScroll(true);
        setSkillName(skill);
    }

    //When no longer hover over skill
    function skillNameLeave() {
        setPauseScroll(false);
        setSkillName("");
    }

    //Show picture of Scout
    function mouseEnterScout() {
        const randomNo = Math.floor(Math.random() * introHighlights.scout.hoverImage.length);
        setRandomNo(randomNo);
        setIntroHoverMouse("scoutImage");
    }

    return (
        <div className="box" id="about">
            <div id="introBox">
                {introHoverMouse ? (
                    introHoverMouse === "scoutImage" ? (
                        <img
                            id="introImageFollowMouse"
                            src={introHighlights.scout.hoverImage[randomNo]}
                            style={{ left: `${mousePosition.x + 7}px`, top: `${mousePosition.y - 40}px` }}
                            alt="Scout, the cutest little cat"
                        />
                    ) : (
                        <p
                            id="introTextFollowMouse"
                            style={{ left: `${mousePosition.x + 7}px`, top: `${mousePosition.y - 40}px` }}
                        >
                            {introHighlights[introHoverMouse]?.hoverText}
                        </p>
                    )
                ) : null}

                <p id="intro">Hey!
                    <br />
                    I’m <span className="introHighlight activeHighlight" id="introMyName" onMouseEnter={() => setIntroHoverMouse("name")} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.name.text}</span>.
                    <br /><br />
                    I’m a <span className="introHighlight" >Front End Developer</span> from <span className="introHighlight" >Melbourne, Australia.</span> <br />
                    I come from a <span className="introHighlight">3D Design/Product Design Engineering</span> background, working in the industry since 2012, as well as doing a <span className="introHighlight">UX/UI Design</span> Course before discovering the amazing and versatile world of coding. <br />
                    I started my coding journey at <span className="introHighlight">Codecademy</span> doing a couple of short courses on <span className="introHighlight">C#</span> and <span className="introHighlight">Python</span>, before deciding to put all my old MySpace (miss you Tom) coding knowledge to use and focusing on <span className="introHighlight">Front End Development and Web Design.</span> And currently studying to be a <span className="introHighlight">Full Stack Engineer.</span> <br />
                    <br />
                    I love the problem solving side of coding, how can I make <span className="introHighlight">designs pop more</span>, where can I add <span className="introHighlight">user interaction and feedback</span>, how did a certain website do something, can I add little <span className="introHighlight activeHighlight" onClick={() => setEasterEgg(!easterEgg)}>easter eggs</span> for people to find?? With coding there really is no limit to what you can achieve, you just have to work out how to do it, and I’m always eager to learn and do more.
                    <br /> <br />
                    When I’m not coding I like to watch moves, read books, draw, game, hang out with friends, or <span className="introHighlight activeHighlight" onMouseEnter={mouseEnterScout} onMouseLeave={() => setIntroHoverMouse("")}>{introHighlights.scout.text}</span>!
                </p>
                <img id="mePortrait" src={easterEgg ? meEggImage : meImage} alt="Illustration of Jon Porter"/>
            </div>
            <div id="techSkills">
                <h2>Technical Skills</h2>
                <p
                    id="skillNameFollowMouse"
                    ref={skillNameRef}
                    style={{ opacity: pauseScroll ? 1 : 0, left: `${mousePosition.x + 7}px`, top: `${mousePosition.y - 40}px` }}
                >
                    {skillName}
                </p>
                <div id="skillsList" style={{ left: `${skillScrollPosition}rem` }}>
                    {skillsList.map((skill, index) => (
                        <img
                            key={index}
                            src={skill.icon}
                            className="skill"
                            style={{ backgroundColor: skillName === skill.name ? '#ffffff40' : '#ffffff20' }}
                            onMouseEnter={() => skillNameEnter(skill.name)}
                            onMouseLeave={skillNameLeave}
                            alt={`${skill.name} logo`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
