import {reelMagicHome, reelMagicReviews,
        dewIt, 
        ecoSage, 
        scrimbaLogo
    } from '../assets/projects'

const projectData = [
    {
        id: "reel-magic",
        title: "Reel Magic",
        subTitle: "Movie Review Site",
        description: `This was my final project at School of Code and was the 
                        culmination of what we learned. We built a community-driven 
                        movie review site. Where the reviews are made by 
                        users, for users. Users can vote on each others reviews
                        for user engagement.`,
        coverImage: {
            src: reelMagicHome,
            alt: "ReelMagic homepage in desktop mode."
        },
        projectImages: [
            {
                src: reelMagicHome,
                alt: "ReelMagic homepage.",
            },
            {
                src: reelMagicReviews,
                alt: "On the left an image of the dynamic review system. On the right an image of a movie information page.",
            },
        ],
        techUsed: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Figma", "REST APIs", "Git", "GitHub", "PlayWright"],
        linkTo: "/projects/reel-magic",
        liveLink: "https://reelmagic.netlify.app/",
        gitHub: "https://github.com/SchoolOfCode/final-project-reelstack"
    },
    {
        id: "dew-it",
        title: "Dew It",
        subTitle: "Todo List",
        description: `I started this project during my time at School of 
    ]                  Code in order to practice my vanilla JavaScript 
                       skills and API calls. The skills I honed in this project 
                       will be used to make a personal dashboard app with an integrated
                       todo list in a series of widgets. Stay tuned on LinkedIn 
                       for updates coming soon.`,
        coverImage: {
            src: dewIt,
            alt: "a Star Wars themed to-do list with a joke widget and NASA photo of the day."
        },
        projectImages: [
            {
                src: dewIt,
                alt: "a Star Wars themed to-do list with a joke widget and NASA photo of the day.",
            }
        ],
        techUsed: ["HTML", "CSS", "JavaScript", "REST APIs", "Netlify"],
        linkTo: "/projects/dew-it",
        liveLink: "https://dewit.netlify.app/",
        gitHub: "https://github.com/OrbicCode/Dew-It"
    },
    {
        id: "eco-sage",
        title: "Eco Sage",
        subTitle: "Eco recommendations App",
        description: ` An app that uses AI to give you personalised recommendations to 
                        help with climate change based on your location, while giving you 
                        local climate data.
                        At my second ever hackathon for SandboxAQ we were given the task
                        of developing an App that solves one of the UN's SDGs, while
                        imagining that we had access to a quantum computer. As a group we decided
                        to try React-Native for the first time.`,
        coverImage: {
            src: ecoSage,
            alt: "EcoSage app displayed on a phone with a background of a churning sea next to a cliff."
        },
        projectImages: [
            {
                src: ecoSage,
                alt: "EcoSage app displayed on a phone with a background of a churning sea next to a cliff.",
            }
        ],
        techUsed: ["HTML", "CSS", "JavaScript", "React-Native", "Expo-go", "Hugging Face", "REST APIs", "Figma", "Git", "GitHub"],
        linkTo: "/projects/eco-sage",
        liveLink: "",
        gitHub: "https://github.com/dne15/sandbox-hackathon"
    },
    {
        id: "scrimba",
        title: "Scrimba",
        subTitle: "My Scrimba projects",
        coverImage: {
            src: scrimbaLogo,
            alt: "The Scrimba logo"
        },
        linkTo: "/scrimba",
    }
]

export default projectData