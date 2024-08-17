import React, {useState} from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './footer.css';

export function Footer () {
    const [emailColour, setEmailColour] = useState("white");
    const [githubColour, setGithubColour] = useState("white");
    const [linkedInColour, setLinkedInColour] = useState("white");

    const copyEmail = () => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText("jonporter89@gmail.com").then(() => {
                alert("Email copied to clipboard.");
            }).catch(err => {
                console.error("Failed to copy email:", err);
                alert("Failed to copy email. Please try again.");
            });
        } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement("textarea");
            textArea.value = "jonporter89@gmail.com";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
    
            try {
                document.execCommand('copy');
                alert("Email copied to clipboard.");
            } catch (err) {
                console.error("Fallback: Failed to copy email:", err);
                alert("Failed to copy email. Please try again.");
            }
    
            document.body.removeChild(textArea);
        }
    }

    return (
        <footer>
            <h3 id="contactMe">Contact me:</h3>
            <div className="contact" id="email" onClick={copyEmail} onMouseEnter={()=>{setEmailColour("var(--bright-colour")}} onMouseLeave={()=>{setEmailColour("white")}}>
                <MdEmail className="contactIcon" style={{color:emailColour}}/>
                <p className="contactLink" style={{color:emailColour}}>jonporter89@gmail.com</p>
            </div>
            <a href="https://github.com/JonPo89" target="_blank" rel="noreferrer"> 
                <div className="contact" id="github" onMouseEnter={()=>{setGithubColour("var(--bright-colour")}} onMouseLeave={()=>{setGithubColour("white")}}>
                    <FaGithub className="contactIcon" style={{color:githubColour}} />
                    <p className="contactLink" style={{color:githubColour}}>jonporter89</p>
                </div> </a>
            <a href="https://www.linkedin.com/in/jon-porter-7258bb157/" target="_blank" rel="noreferrer">
                <div className="contact" id="linkedIn" onMouseEnter={()=>{setLinkedInColour("var(--bright-colour")}} onMouseLeave={()=>{setLinkedInColour("white")}}>
                    <FaLinkedin className="contactIcon" style={{color:linkedInColour}} />
                    <p className="contactLink" style={{color:linkedInColour}}>Jon Porter</p>
                </div>
            </a>
        </footer>
    );
}