import React, {useState, useEffect} from 'react';
import {projectsList} from '../features/projectsList';
import { FaArrowRight } from "react-icons/fa";
import { bounce } from '../features/bounce';
import './projects.css';

export function Projects () {
    const [ projectHoverLocation, setProjectHoverLocation ] = useState(20);
    const [ projectHoverOpacity, setProjectHoverOpacity ] = useState(0);
    const [ projectHoverTransitionTime, setProjectHoverTransitionTime ] = useState(0.2);
    const [activeProject, setActiveProject] = useState(0);    
    const [projectBouncePosition, setProjectBouncePosition] = useState(1);
    const [projectTransitionDuration, setProjectTransitionDuration] = useState(0.3);
    const [ hoverMessage, setHoverMessage ] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [ followMouseVisible, setFollowMouseVisible] = useState(false);
    const [ windowWidth, setWindowWidth ] = useState(0);
    const [ showClickMe, setShowClickMe] = useState(false);

    //Check if device is touch screen
    const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    useEffect (() => {
        if (isTouchScreen && activeProject >0 && projectHoverOpacity < 1) {
            setShowClickMe(true);
        } else {
            setShowClickMe(false);
        }
    },[isTouchScreen, projectHoverOpacity, activeProject])
    
    //Update windowWidth
    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            if (width < 500) {
                setWindowWidth(2);
            }else if (width < 700){
                setWindowWidth(3);
            } else {
                setWindowWidth(4);
            }
        };
        
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    },[])

    //Set mouse position
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    //Make following mouse message visible
    useEffect(() => {
        if (hoverMessage) {
            setFollowMouseVisible(true);
        } else {
            setFollowMouseVisible(false);
        }
    }, [hoverMessage])
    
    //Make logo bounce
    function mouseEnterSkill (project) {
        setActiveProject(project.index);
        bounce(setProjectBouncePosition, projectTransitionDuration, setProjectTransitionDuration);
    }

    //Show details when hovering over project
    function activeProjectOnEnter () {
        bounce(setProjectHoverLocation, projectHoverTransitionTime, setProjectHoverTransitionTime);
        setProjectHoverOpacity(1);
    }

    //Hide details when no longer hovering project
    function activeProjectOnLeave () {
        setProjectHoverLocation(20);
        setProjectHoverOpacity(0);
    }

    return (
        <div className="box" id="projects">
            <div id="projectsHoverMessage" style={{display: followMouseVisible && !isTouchScreen ? "inline" : "none", left: windowWidth === 2 ? 0 : `${mousePosition.x + 7}px`, top: `${mousePosition.y - 80}px`}}>
                <p dangerouslySetInnerHTML={{ __html: hoverMessage }} />
            </div>

            <div id="activeProjectDetails" style={{backgroundImage:`url(${projectsList[activeProject].image})`}}> 
                <h3 style={{position:"relative", top:"1rem", display:  showClickMe ? "inline" : "none"}}>Click me for details</h3>
                {activeProject > 0 ?
                <div id="projectDisplay" onMouseDown={activeProjectOnEnter} onMouseEnter={activeProjectOnEnter} onMouseLeave={activeProjectOnLeave}>
                    <div id="projectTitle" style={{bottom: projectHoverLocation, opacity: projectHoverOpacity}}>
                        <h2>{projectsList[activeProject].name}</h2>
                        <p>{projectsList[activeProject].shortDescription}</p>    
                    </div>
                    <div id="projectLinks">
                        {projectHoverOpacity > 0 ? 
                        <><a 
                            href={projectsList[activeProject].websiteLink}
                            target="_blank" 
                            rel="noreferrer"
                            className="projectLink"  
                            onMouseEnter={ () => setHoverMessage(projectsList[activeProject].warning) }
                            onMouseLeave={ () => setHoverMessage("")}
                            style={{right: projectHoverLocation, opacity: projectHoverOpacity, transition: `all ${projectHoverTransitionTime}s ease-in-out}`}}>
                                View Website
                        </a>
                        
                        <a href={projectsList[activeProject]}  className="projectLink" target="_blank" rel="noreferrer" style={{left: projectHoverLocation, opacity: projectHoverOpacity}}>View on Github</a>
                        </>
                        : null
                    }
                        </div>
                    <p id="projectSkillsDescription" dangerouslySetInnerHTML={{ __html: projectsList[activeProject].skillsDescription }} style={{top: projectHoverLocation, opacity: projectHoverOpacity}} />
                
                </div>
                : null
                }
            </div>
            
            <div className="projectList">
                <h2 id="projectListHeading">Projects</h2>
                {projectsList.map((project, index) => (
                    index > 0 ?
                    <div 
                        key={index} 
                        onMouseEnter={() => mouseEnterSkill(project)} 
                        style={{backgroundColor: activeProject === index ? "#ffffff10" : ""}}
                        className="projectSelection">
                        <img className="projectLogo" src={project.logo} alt={`${project.name} logo`} style={{left:activeProject === index ? projectBouncePosition : windowWidth > 3 ? "2rem" : 0, transition: `all ${projectTransitionDuration}s ease-in-out`}}/>
                        <FaArrowRight className="projectArrow" style={{opacity: activeProject === index ? 1 : 0, right:activeProject === index ? projectBouncePosition : "2rem", transition: `all ${projectTransitionDuration}s ease-in-out`}}/>
                    </div> :
                    null
                ))}
                
            </div>
        </div>
    );
}