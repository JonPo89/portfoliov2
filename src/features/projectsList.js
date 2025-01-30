
export const projectsList = [
    {
        index: 0,
        name: "No Project Selected",
        shortDescription: "Select a project from the list"
    },
    {
        name: "rdt.",
        index: 1,
        imageLink: 'rdt',
        shortDescription: "A minimal reddit app",
        websiteLink: "https://rdtmin.netlify.app",
        gitHubLink: "https://github.com/JonPo89/rdt/tree/main/rdt",
        warning: "",
        description: "This app illustrates my skills with working with external API’s, as well as working with Redux.<br/> Through the API’s users are able to explore and interact with subreddit content. Users can browse popular subreddits, load posts with metadata (such as comments and upvotes), view post comments, and search through posts with ease.",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/><strong>React</strong> and <strong>Redux</strong> are used to add functionality.<br/> <strong>JSON</strong> is then used to access the Reddit <strong>API</strong>, allowing the user to access Subreddits, Posts and Comments."
    },
    {
        name: "Bill Ding's Building Co.",
        imageLink: 'billding',
        index: 2,
        shortDescription: "A corporate website created for the non existent Bill Ding's company.",
        websiteLink: "https://billdings.netlify.app",
        gitHubLink: "https://github.com/JonPo89/Bill-Dings",
        warning: "",
        description: "This website illustrates my skills in creating a static webpage without the use of Javascript.<br/>It demonstrates my ability to create a static webpage using only HTML and CSS. It features a responsive design, adheres to standard accessibility practices, and employs proper semantic structure.",
        skillsDescription: "<br/><br/>This is a basic website created using only <strong>HTML</strong>, and <strong>CSS</strong>."
    },
    {
        name: "Wizard Quest",
        index: 3,
        imageLink: 'wizardQuest',
        shortDescription: "An interactive text based adventure, that uses AI to allow users to pick their journey.",
        websiteLink: "https://wizardquestjp.netlify.app",
        gitHubLink: "https://github.com/JonPo89/wizardquest",
        warning: "This website uses the Meta AI, llama, <br/>which can be slow, so please be patient",
        description: "This app illustrates my skills in working with LLM’s to create unique and responsive websites to suit user requirements.<br/>Through the creation of a Worker on Cloudspace I have connected to Llama 3, Meta’s open source AI model, directing it on how to respond to the user.  Because of limitations in the free version, I have it summarise the story every few responses to not lose the history of the user’s adventure.",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/><strong>React</strong> and the utilisation of <strong>Props</strong> is used to add functionality.<br/> A backend function was created using <strong>Cloudflare Workers</strong> to incorporate <strong>AI</strong> whose <strong>API</strong> is accessed through <strong>JSON</strong>."
    },
    {
        name: "Breakfast Time",
        index: 4,
        imageLink: 'breakfastTime',
        shortDescription: "A Full Stack fake E-Commerce website that sells cards.",
        websiteLink: "https://breakfasttimeshop.netlify.app/",
        gitHubLink: "https://github.com/JonPo89/breakfastTime",
        warning: "The backend is hosted on a free server which falls asleep when not used.<br/>The page may need to be refreshed a few times awaken it.",
        description: "This app illustrates my skills in full-stack web development, including frontend, backend, and database integration.<br/>Users can browse products, create accounts, sign in, place orders, save carts and view order history.  All information is stored securely in a PostgreSQL database, with user passwords hashed for security.<br/>Because the backend is hosted on a free site it may be asleep and the website will need to be refreshed a few times to wake it up.",
        skillsDescription: "This app creates a Front-End with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework, incorporating <strong>React</strong> and <strong>Redux</strong> for added functionality.<br/> The Back-End is created using <strong>Javascript</strong>, <strong>Express.js</strong>, to send SQL Queries to a <strong>PostgreSQL</strong> database using <strong>node-Postgres</strong>.<br/>The database is created using <strong>PostgreSQL</strong>."
    },
    {
        name: "Class Clicker",
        index: 5,
        imageLink: 'classClicker',
        shortDescription: "An infinite clicker app.",
        websiteLink: "https://classclicker.netlify.app/",
        gitHubLink: "https://github.com/JonPo89/classClicker",
        warning: "",
        description: "This app illustrates my skills in Javascript, particularly in the creation of custom classes.<br/>The clicker game is a web app that allows users to “click” earning them a currency that they can use to purchase and upgrade ‘Producers’ (which automatically generate currency) and upgrade the value of the “clicks”.<br/>Through the creation of a custom ‘Producer’ class, the costs, production values, and colours are automatically calculated, meaning there is no limit to how many ‘Producers’ can be created.",
        skillsDescription: "This app uses <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Javascript</strong> for the framework.  <br/>Incorporating <strong>Custom Classes</strong> to create an essentially never ending clicker game."
    }
]