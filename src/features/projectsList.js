import { skills } from './skillsList';
import noProject from '../images/projects/noProject.png';
import rdtLogo from '../images/projects/rdtLogo.png';
import rdtImage from '../images/projects/rdtImage.png';
import jammmingLogo from '../images/projects/jammmingLogo.png';
import jammmingImage from '../images/projects/jammmingImage.png';
import billDingLogo from '../images/projects/billDingLogo.png';
import billDingImage from '../images/projects/billDingImage.png';
import wizardQuestLogo from '../images/projects/wizardQuestLogo.png';
import wizardQuestImage from '../images/projects/wizardQuestImage.png';

export const projectsList = [
    {
        index: 0,
        image: noProject
    },
    {
        name: "rdt.",
        index: 1,
        logo: rdtLogo,
        skills: [skills.html, skills.css, skills.javascript, skills.react, skills.redux, skills.json, skills.api],
        image: rdtImage,
        shortDescription: "A minimal reddit app",
        websiteLink: "https://rdtmin.netlify.app",
        gitHubLink: "https://github.com/JonPo89/rdt/tree/main/rdt",
        warning: "",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/><strong>React</strong> and <strong>Redux</strong> are used to add functionality.<br/> <strong>JSON</strong> is then used to access the Reddit <strong>API</strong>, allowing the user to access Subreddits, Posts and Comments."
    },
    {
        name: "jammming",
        index: 2,
        logo: jammmingLogo,
        skills: [skills.html, skills.css, skills.javascript, skills.react, skills.redux, skills.json, skills.api],
        image: jammmingImage,
        shortDescription: "An app to create playlists and save them to your Spotify account.",
        websiteLink: "https://jammming-porter.netlify.app",
        gitHubLink: "https://github.com/JonPo89/jamming",
        warning: "You must be authorised to use this app. <br/>Email <strong>jonporter89@gmail.com</strong> for access.",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/><strong>React</strong> and <strong>Redux</strong> are used to add functionality.<br/> <strong>JSON</strong> is then used to access the Spotify <strong>API</strong>, allowing the user to access music, and save playlists to their profile."
    },
    {
        name: "Bill Ding's Building Co.",
        index: 3,
        logo: billDingLogo,
        skills: [skills.html, skills.css],
        image: billDingImage,
        shortDescription: "A corporate website created for the non existent Bill Ding's company.",
        websiteLink: "https://billdings.netlify.app",
        gitHubLink: "https://github.com/JonPo89/Bill-Dings",
        warning: "",
        skillsDescription: "<br/><br/>This is a basic website created using only <strong>HTML</strong>, and <strong>CSS</strong>."
    },
    {
        name: "Wizard Quest",
        index: 4,
        logo: wizardQuestLogo,
        skills: [skills.html, skills.css],
        image: wizardQuestImage,
        shortDescription: "An interactive text based adventure, that uses AI to allow users to pick their journey.",
        websiteLink: "https://wizardquestjp.netlify.app",
        gitHubLink: "https://github.com/JonPo89/wizardquest",
        warning: "This website uses the Meta AI, llama, <br/>which can be slow, so please be patient",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/><strong>React</strong> and the utilisation of <strong>Props</strong> is used to add functionality.<br/> A backend function was created using <strong>Cloudflare Workers</strong> to incorporate <strong>AI</strong> whose <strong>API</strong> is accessed through <strong>JSON</strong>."
    }
]