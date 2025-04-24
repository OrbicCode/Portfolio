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
            description: `This project was used to gain an understanding of React Router. 
                            I learned how to use relative paths, nested routes, search params
                            and protected routes. If you want to test the protected route, via the live link below, 
                            I've given you the login details on the login page`,
            coverImage: {
                src: vanLifeHome,
                alt: "The van life app home page."
            },
            projectImages: [
                {
                    src: vanLifeHome,
                    alt: "The van life app home page."
                },
                {
                    src: vanLifeInfo,
                    alt: "a page showing information about a specific van"
                },
                {
                    src: vanLifeVans,
                    alt: "a page showing a list of different vans for hire"
                },
                {
                    src: vanLifeLogin,
                    alt: "a login page"
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
            subTitle: "On the tin",
            description: `The watchlist helped me get to know .then() chaining, and local storage
                            better. The movie information is gathered from the OMDB Api. I used local storage to save a movie to be displayed on the watchlist
                            page, where the movie can then be removed. The design was translated from a Figma design.`,
            coverImage: {
                src: movieWatchlistSearch,
                alt: "a page showing a list of movies after the word blade is searched."
            },
            projectImages: [
                {
                    src: movieWatchlistSearch,
                    alt: "a page showing a list of movies after the word blade is searched."
                },
                {
                    src: movieWatchlistWl,
                    alt: "a page showing the movies that have been added to the watchlist"
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
            description: `A hangman style game built with React to practice using useRef, useState and useEffect
                            to store information and change the appearance of items
                            in the DOM`,
            coverImage: {
                src: assemblyEndgameWin,
                alt: "The page filled with confetti because the game has been won."
            },
            projectImages: [
                {
                    src: assemblyEndgameWin,
                    alt: "The page filled with confetti because the game has been won."
                },
                {
                    src: assemblyEndgameLoss,
                    alt: "The page when the game has been lost."
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
            description: `The game tenzies build with React to practice using useRef, useState and useEffect
                            to store information and change the appearance of items
                            in the DOM`,
            coverImage: {
                src: tenziesWin,
                alt: "The page displayeing confetti because the game has been won."
            },
            projectImages: [
                {
                    src: tenziesWin,
                    alt: "The page displayeing confetti because the game has been won."
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