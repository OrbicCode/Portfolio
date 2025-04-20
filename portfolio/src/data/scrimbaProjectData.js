import bbScoreFigma from '../assets/bb-figma.png'
import bbScore from '../assets/bb-score.png'
import rpwGen from '../assets/rpw-gen.png'
import unitConv from '../assets/unitConv.png'
import oldagram from '../assets/oldagram.png'
import oldagram2 from '../assets/oldagram-2.png'
import twimba from '../assets/twimba.png'
import jimmysDiner from '../assets/jimmysDiner.png'
import jimmysDiner2 from '../assets/jimmysDiner-2.png'
import myLearningJournal from '../assets/my-learning-journal.png'
import myLearningJournal2 from '../assets/my-learning-journal-2.png'
import csGen from '../assets/cs-gen.png'
import csGen1 from '../assets/cs-gen-1.png'
import mwl from '../assets/mwl.png'
import mwl1 from '../assets/mwl-1.png'

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
        {
            id: "oldagram",
            title: "Oldagram",
            subTitle: "An Instagram clone",
            description: `An Instagram clone featuring some classic paintings,
                            built to practice manipulating the DOM with 
                            JavaScript and using data to map elements onto 
                            the page`,
            coverImage: {
                src: oldagram,
                alt: "oldagram, an instagram clone."
            },
            projectImages: [
                {
                    src: oldagram,
                    alt: "oldagram, an instagram clone.",
                },
                {
                    src: oldagram2,
                    alt: "oldagram, an instagram clone.",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/oldagram",
            liveLink: "https://thegramclone.netlify.app/",
            gitHub: ""
        },
        {
            id: "twimba",
            title: "Twimba",
            subTitle: "A Twitter clone",
            description: `An Twitter clone, built to practice displaying Font Awsome icons,
                            then adding code to make them interactive. Also practicing
                            turning a Figma design file into code`,
            coverImage: {
                src: twimba,
                alt: "twimba, atwiiter clone."
            },
            projectImages: [
                {
                    src: twimba,
                    alt: "twimba, atwiiter clone."
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/twimba",
            liveLink: "https://s-twimba.netlify.app/",
            gitHub: ""
        },
        {
            id: "jimmys-diner",
            title: "Jimmys Diner",
            subTitle: "A restaurant ordering app",
            description: `A restaurant ordering app, built to practice adding and removing
                            items from the DOM using event listeners. setting conditions
                            for information to be displayed.`,
            coverImage: {
                src: jimmysDiner,
                alt: "a restaurant ordering app called Jimmy's Diner"
            },
            projectImages: [
                {
                    src: jimmysDiner2,
                    alt: "a payment prompt after items have been selected."
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/jimmys-diner",
            liveLink: "https://jimmys-scrim-diner.netlify.app/",
            gitHub: ""
        },
        {
            id: "my-learning-journal",
            title: "My Learning Journal",
            subTitle: "A responsive site",
            description: `A site built to practice CSS grid across multiple pages and
                            making the site responsive using media queries as well as 
                            turning a Figma design into code.`,
            coverImage: {
                src: myLearningJournal,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: myLearningJournal,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: myLearningJournal2,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/my-learning-journal",
            liveLink: "https://mlj-scrim.netlify.app/",
            gitHub: ""
        },
        {
            id: "color-scheme-generator",
            title: "Color Scheme Generator",
            subTitle: "A Color Scheme Generator",
            description: `A site built to practice getting info from an API to display
                            on the page. I used thecolorapi in order to get the data.
                            I also practiced getting info from an input to place 
                            in a get request string`,
            coverImage: {
                src: csGen,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: csGen,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: csGen1,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "REST APIs"],
            linkTo: "/projects/color-scheme-generator",
            liveLink: "https://cs-generator.netlify.app/",
            gitHub: ""
        },
        {
            id: "movie-watchlist",
            title: "Movie Watchlist",
            subTitle: "A Movie Watchlist",
            description: `A site built to practice getting info from an API to display
                            on the page. I used OMDB api in order to get the data.
                            I also practiced using local storage in order to save 
                            information to then display on another page.`,
            coverImage: {
                src: mwl,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: mwl,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: mwl1,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "REST APIs"],
            linkTo: "/projects/movie-watchlist",
            liveLink: "https://mov-wl.netlify.app/",
            gitHub: ""
        },
]

export default scrimbaProjectData