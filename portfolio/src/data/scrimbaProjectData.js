import bbScoreFigma from '../assets/bb-figma.png'
import bbScore from '../assets/bb-score.png'
import rpwGen from '../assets/rpw-gen.png'
import unitConv from '../assets/unitConv.png'

const scrimbaProjectData = [
        {
            id: "basketball-scoreboard",
            title: "Basketball Scoreboard",
            subTitle: "A basketball scoreboard",
            description: `A basketball scoreboard, built to practise
                            JavaScript functions and turning a figma design file
                            into code`,
            coverImage: {
                src: bbScore,
                alt: "a basketball scoreboard"
            },
            projectImages: [
                {
                    src: bbScore,
                    alt: "a basketball scoreboard",
                },
                {
                    src: bbScoreFigma,
                    alt: "figma design file",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/basketball-scoreboard",
            liveLink: "https://bb-sboard.netlify.app/",
            gitHub: ""
        },
        {
            id: "password-generator",
            title: "Password Generator",
            subTitle: "A random password generator",
            description: `A random password generator, built to practise
                            JavaScript functions, Math.random and turning a figma design file
                            into code`,
            coverImage: {
                src: rpwGen,
                alt: "a random password generator"
            },
            projectImages: [
                {
                    src: rpwGen,
                    alt: "a random password generator",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/password-generator",
            liveLink: "https://rpw-generator.netlify.app/",
            gitHub: ""
        },
        {
            id: "unit-converter",
            title: "Unit Converter",
            subTitle: "A metric/imperial unit converter",
            description: `A metric/imperial unit converter that converts length, volume and mass, built to practise
                            JavaScript functions and turning a figma design file
                            into code`,
            coverImage: {
                src: unitConv,
                alt: "a unit converter"
            },
            projectImages: [
                {
                    src: unitConv,
                    alt: "a unit converter",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/unit-converter",
            liveLink: "https://unit-converterer.netlify.app/",
            gitHub: ""
        },
]

export default scrimbaProjectData