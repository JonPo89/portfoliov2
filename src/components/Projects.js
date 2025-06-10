import React, {useState, useEffect} from 'react';
import {projectsList} from '../features/projectsList';
import { FaArrowLeft } from "react-icons/fa";
import { bounce } from '../features/bounce';
import './projects.css';

export function Projects () {
    const [activeProject, setActiveProject] = useState(1);    
    const [projectBouncePosition, setProjectBouncePosition] = useState(1);
    const [projectTransitionDuration, setProjectTransitionDuration] = useState(0.3);
    const [ hoverMessage, setHoverMessage ] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [ followMouseVisible, setFollowMouseVisible] = useState(false);
    const [ windowWidth, setWindowWidth ] = useState(0);

    //Check if device is touch screen
    const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    
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
        setActiveProject(project);
        bounce(setProjectBouncePosition, projectTransitionDuration, setProjectTransitionDuration);
    }

    return (
        <div className="box" id="projects">
            <div id="projectsHoverMessage" style={{display: followMouseVisible && !isTouchScreen ? "inline" : "none", left: windowWidth === 2 ? 0 : `${mousePosition.x + 7}px`, top: `${mousePosition.y - 80}px`}}>
                <p dangerouslySetInnerHTML={{ __html: hoverMessage }} />
            </div>

            
                {activeProject > 0 ?
                <div id="activeProjectDetails"> 
                    <div id="projectTitle">
                        <h2>{projectsList[activeProject].name}</h2>
                        <p>{projectsList[activeProject].shortDescription}</p>    
                    </div>
                    <div id="projectLinks">
                        <a 
                            href={projectsList[activeProject].websiteLink}
                            target="_blank" 
                            rel="noreferrer"
                            className="projectLink"  
                            onMouseEnter={ () => setHoverMessage(projectsList[activeProject].warning) }
                            onMouseLeave={ () => setHoverMessage("")}
                            >
                                {windowWidth === 2 ? 'Website' : 'View Website'}
                        </a>
                        {projectsList[activeProject].gitHubLink ?
                            <a 
                                href={projectsList[activeProject].gitHubLink}  
                                className="projectLink" 
                                target="_blank" 
                                rel="noreferrer"     
                            >
                                {windowWidth === 2 ? 'Github' : 'View on Github'}
                            </a>
                        :
                        null}
                        
                    </div>
                    {isTouchScreen && projectsList[activeProject].warning? 
                    <p className="projectWarning" dangerouslySetInnerHTML={{ __html: projectsList[activeProject].warning}} />
                        :
                    null
                    }
                    <p 
                        id="projectDescription" 
                        dangerouslySetInnerHTML={{ __html: projectsList[activeProject].description }} 
                    />
                    
                    <img id="computerPhoneImage" src={`/images/projects/${projectsList[activeProject].imageLink}Image.png`} alt={`${projectsList[activeProject].name} computer and phone preview`}/>
                    <img id="computerImage" alt={`${projectsList[activeProject].name} computer preview`} src={`/images/projects/${projectsList[activeProject].imageLink}Computer.png`}/>
                    <img id="phoneImage" alt={`${projectsList[activeProject].name} phone preview`} src={`/images/projects/${projectsList[activeProject].imageLink}Phone.png`}/>
                   
                    <p 
                        id="projectSkillsDescription" 
                        dangerouslySetInnerHTML={{ __html: projectsList[activeProject].skillsDescription }} 
                    />
                
                </div>
                : 
                <div id="projectTitle">
                    <h2>{projectsList[activeProject].name}</h2>
                    <p>{projectsList[activeProject].shortDescription}</p>    
                </div>
                }
            
            
            <div className="projectList">
                <h2 id="projectListHeading">Projects</h2>
                {projectsList.map((project, index) => (
                    index > 0 ?
                    <div 
                        key={index} 
                        onMouseEnter={() => mouseEnterSkill(index)} 
                        style={{backgroundColor: activeProject === index ? "#ffffff20" : ""}}
                        className="projectSelection">
                            <FaArrowLeft 
                                className="projectArrow" 
                                style={{opacity: activeProject === index ? 1 : 0, 
                                    left:activeProject === index ? projectBouncePosition : "2rem", 
                                    transition: `all ${projectTransitionDuration}s ease-in-out`}}
                            />
                            <img className="projectLogo" 
                                src={`/images/projects/${projectsList[index].imageLink}Logo.png`} 
                                alt={`${project.name} logo`} 
                                style={{
                                    right:activeProject === index && windowWidth !== 3 ? projectBouncePosition : windowWidth > 3 ? "2rem" : 0, 
                                    bottom: activeProject === index && windowWidth === 3? projectBouncePosition : "0rem",
                                    transition: `all ${projectTransitionDuration}s ease-in-out`}}/>
                        
                    </div> :
                    null
                ))}
                
            </div>
        </div>
    );
}