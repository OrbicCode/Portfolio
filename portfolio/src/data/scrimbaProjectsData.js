import {vanLifeHome, vanLifeInfo, vanLifeVans, vanLifeLogin,
        movieWatchlistSearch, movieWatchlistWl,
        assemblyEndgameWin, assemblyEndgameLoss,
        tenziesWin,
        oldagramTop, oldagramBottom,
        twimba,
        colorGeneratorAnalogic, colorGeneratorMono,
        myLearningJournalHome, myLearningJournalAbout,
        jimmysDinerHome, jimmysDinerItems, jimmysDinerPayment,
        unitConverter,
        passwordGenerator,
        scoreboard
    } from "../assets/scrimba"

const scrimbaProjectsData = [
        {
            id: "van-life",
            title: "Van Life",
            subTitle: "A Van Hiring App",
            description: `A React site build to practice using React Router, protected routes and nested routes`,
            coverImage: {
                src: vanLifeHome,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: vanLifeHome,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: vanLifeInfo,
                    alt: "the about me page of my learning journal"
                },
                {
                    src: vanLifeVans,
                    alt: "the about me page of my learning journal"
                },
                {
                    src: vanLifeLogin,
                    alt: "the about me page of my learning journal"
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "React", "React Router"],
            linkTo: "/projects/van-life",
            liveLink: "https://van-lifey.netlify.app/",
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
                src: movieWatchlistSearch,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: movieWatchlistSearch,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: movieWatchlistWl,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "REST APIs"],
            linkTo: "/projects/movie-watchlist",
            liveLink: "https://mov-wl.netlify.app/",
            gitHub: ""
        },
        {
            id: "assembly-endgame",
            title: "Assembly Endgame",
            subTitle: "A hangman style game",
            description: `A React site build to practice using useRef, useState and useEffect
                            to store information and change the appearance of items
                            in the DOM`,
            coverImage: {
                src: assemblyEndgameWin,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: assemblyEndgameWin,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: assemblyEndgameLoss,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "React"],
            linkTo: "/projects/assembly-endgame",
            liveLink: "https://assem-endgame.netlify.app/",
            gitHub: ""
        },
        {
            id: "tenzies",
            title: "Tenzies",
            subTitle: "The game Tenzies",
            description: `A React site build to practice using useRef, useState and useEffect
                            to store information and change the appearance of items
                            in the DOM`,
            coverImage: {
                src: tenziesWin,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: tenziesWin,
                    alt: "my learning journal, responsive site"
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "React"],
            linkTo: "/projects/tenzies",
            liveLink: "https://tennys.netlify.app/",
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
                src: oldagramTop,
                alt: "oldagram, an instagram clone."
            },
            projectImages: [
                {
                    src: oldagramTop,
                    alt: "oldagram, an instagram clone.",
                },
                {
                    src: oldagramBottom,
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
            id: "color-scheme-generator",
            title: "Color Scheme Generator",
            subTitle: "A Color Scheme Generator",
            description: `A site built to practice getting info from an API to display
                            on the page. I used thecolorapi in order to get the data.
                            I also practiced getting info from an input to place 
                            in a get request string`,
            coverImage: {
                src: colorGeneratorAnalogic,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: colorGeneratorAnalogic,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: colorGeneratorMono,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma", "REST APIs"],
            linkTo: "/projects/color-scheme-generator",
            liveLink: "https://cs-generator.netlify.app/",
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
                src: myLearningJournalHome,
                alt: "my learning journal, responsive site"
            },
            projectImages: [
                {
                    src: myLearningJournalHome,
                    alt: "my learning journal, responsive site"
                },
                {
                    src: myLearningJournalAbout,
                    alt: "the about me page of my learning journal"
                }
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/my-learning-journal",
            liveLink: "https://mlj-scrim.netlify.app/",
            gitHub: ""
        },
        {
            id: "jimmys-diner",
            title: "Jimmy's Diner",
            subTitle: "A restaurant ordering app",
            description: `A restaurant ordering app, built to practice adding and removing
                            items from the DOM using event listeners. setting conditions
                            for information to be displayed.`,
            coverImage: {
                src: jimmysDinerHome,
                alt: "a restaurant ordering app called Jimmy's Diner"
            },
            projectImages: [
                {
                    src: jimmysDinerHome,
                    alt: "a payment prompt after items have been selected."
                },
                {
                    src: jimmysDinerItems,
                    alt: "a payment prompt after items have been selected."
                },
                {
                    src: jimmysDinerPayment,
                    alt: "a payment prompt after items have been selected."
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/jimmys-diner",
            liveLink: "https://jimmys-scrim-diner.netlify.app/",
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
                src: unitConverter,
                alt: "a unit converter"
            },
            projectImages: [
                {
                    src: unitConverter,
                    alt: "a unit converter",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/unit-converter",
            liveLink: "https://unit-converterer.netlify.app/",
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
                src: passwordGenerator,
                alt: "a random password generator"
            },
            projectImages: [
                {
                    src: passwordGenerator,
                    alt: "a random password generator",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/password-generator",
            liveLink: "https://rpw-generator.netlify.app/",
            gitHub: ""
        },
        {
            id: "basketball-scoreboard",
            title: "Basketball Scoreboard",
            subTitle: "A basketball scoreboard",
            description: `A basketball scoreboard, built to practise
                            JavaScript functions and turning a figma design file
                            into code`,
            coverImage: {
                src: scoreboard,
                alt: "a basketball scoreboard"
            },
            projectImages: [
                {
                    src: scoreboard,
                    alt: "a basketball scoreboard",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaSCript", "Figma"],
            linkTo: "/projects/basketball-scoreboard",
            liveLink: "https://bb-sboard.netlify.app/",
            gitHub: ""
        },
]

export default scrimbaProjectsData