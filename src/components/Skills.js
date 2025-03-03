import { skills } from '../features/skillsList';
import './skills.css';
import { useState } from 'react';

export function Skills () {
    const [skillBubble, setSkillBubble] = useState([]);
    const [bubbleNumber, setBubbleNumber] = useState(0);

    const addSkillToBubble = (skill) => {
        const leftLocation = Math.random()*90
        const newBubble = { name: skill.fileName, top: "-6rem", left: `${leftLocation}rem`, transition: 'all 0s'};

        setSkillBubble(skills => {
            const updatedSkills = [...skills];
            if (updatedSkills.length > 40) {
                updatedSkills[bubbleNumber] = newBubble;

            } else {
                updatedSkills.push(newBubble);
            }
            return updatedSkills;
        });

        setTimeout(() => {
            setSkillBubble(skills =>
                skills.map((bubble, index) =>
                    index === bubbleNumber ? { name: newBubble.name, transition: 'all 3s ease-in', top: "calc(100dvh - 6rem)", left:newBubble.left } : bubble
                )
            );
            setBubbleNumber(bubbleNumber + 1);
            bubbleNumber > 40 ? setBubbleNumber(0) : setBubbleNumber(bubbleNumber + 1);
        }, 100);
    }    

    return (
        <div id="skills" className="box">
            <div id="skillBubblesBox">
                {skillBubble && skillBubble.length > 0 ? 
                skillBubble.map(skillBubble => (

                        <img
                            src={`/images/skillIcons/${skillBubble.name}Icon.png`}
                            className="skillBubble"
                            style={{top: skillBubble.top, left: skillBubble.left, transition: skillBubble.transition}}
                            alt={skillBubble.name}
                        />

                ))
                :null
                }
            </div>
            <h2>Technical Skills</h2>
            <p>As a Full Stack Engineer with a versatile background including Design, UX/UI and Project Management, I have a diverse range of skills, problem solving abilities, and a strong eye for detail.
                <br/><br/>I'm always looking to learn new things, discovering the latest languages, frameworks and skills, refining my UI/UX skills, and taking courses and classes.
                <br/><br/>Below is a selection of some of my skills.
            </p>
            
            {skills && skills[0] ? 
            
            <div id="techSkills">
                <div className="skillSections">
                    <div  className="skillsList">
                        <h3>Frontend Development</h3>
                        <ul>
                            {Object.values(skills[0]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skillsList">
                        <h3>Backend Development</h3>
                        <ul>
                            {Object.values(skills[1]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="skillSections">
                    <div className="skillsList">
                        <h3>DevOps & Deployment</h3>
                        <ul>
                            {Object.values(skills[2]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skillsList">
                        <h3>APIs & Data Handling</h3>
                        <ul>
                            {Object.values(skills[3]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skillsList">
                        <h3>Testing & Debugging</h3>
                        <ul>
                            {Object.values(skills[4]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skillsList">
                        <h3>Other Languages</h3>
                        <ul >
                            {Object.values(skills[5]).map((skill, index) => (
                                <li className="skill" onMouseOver={() => addSkillToBubble(skill)}>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}