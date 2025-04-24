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
                            I've given you the login details on the login page.`,
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
            techUsed: ["HTML", "CSS", "JavaScript", "Figma", "React", "React Router"],
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
            techUsed: ["HTML", "CSS", "JavaScript", "Figma", "REST APIs"],
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
                            in the DOM.`,
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
            techUsed: ["HTML", "CSS", "JavaScript", "Figma", "React"],
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
                            in the DOM.`,
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
            techUsed: ["HTML", "CSS", "JavaScript", "Figma", "React"],
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
                            the page.`,
            coverImage: {
                src: oldagramTop,
                alt: "the top of the page showing a painting and a comment."
            },
            projectImages: [
                {
                    src: oldagramTop,
                    alt: "the top of the page showing a painting and a comment.",
                },
                {
                    src: oldagramBottom,
                    alt: "the bottom of the page showing a painting and a comment.",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/oldagram",
            liveLink: "https://thegramclone.netlify.app/",
            gitHub: ""
        },
        {
            id: "twimba",
            title: "Twimba",
            subTitle: "A Twitter clone",
            description: `A Twitter clone, built to practice displaying Font Awesome icons,
                            then adding code to make them interactive. Also practicing
                            turning a Figma design file into code.`,
            coverImage: {
                src: twimba,
                alt: "Showing fake tweets from celebrities."
            },
            projectImages: [
                {
                    src: twimba,
                    alt: "Showing fake tweets from celebrities."
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/twimba",
            liveLink: "https://s-twimba.netlify.app/",
            gitHub: ""
        },
        {
            id: "color-scheme-generator",
            title: "Color Scheme Generator",
            subTitle: "On the tin",
            description: `The generator was built to practice getting info from an API to display
                            on the page. I used thecolorapi in order to get the data.
                            I also practiced getting info from an input to place 
                            in a GET request string.`,
            coverImage: {
                src: colorGeneratorAnalogic,
                alt: "5 different colours displayed showing their respective hex codes."
            },
            projectImages: [
                {
                    src: colorGeneratorAnalogic,
                    alt: "5 different colours displayed showing their respective hex codes."
                },
                {
                    src: colorGeneratorMono,
                    alt: "5 different colours displayed showing their respective hex codes."
                }
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma", "REST APIs"],
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
                alt: "The home page of the my learning journal site."
            },
            projectImages: [
                {
                    src: myLearningJournalHome,
                    alt: "The home page of the my learning journal site."
                },
                {
                    src: myLearningJournalAbout,
                    alt: "The about page of the my learning journal site."
                }
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/my-learning-journal",
            liveLink: "https://mlj-scrim.netlify.app/",
            gitHub: ""
        },
        {
            id: "jimmys-diner",
            title: "Jimmy's Diner",
            subTitle: "A restaurant ordering app",
            description: `A restaurant ordering app, built to practice adding and removing
                            items from the DOM using event listeners and setting conditions
                            for information to be displayed.`,
            coverImage: {
                src: jimmysDinerHome,
                alt: "The page displayed food items that can be ordered."
            },
            projectImages: [
                {
                    src: jimmysDinerHome,
                    alt: "The page displayed food items that can be ordered."
                },
                {
                    src: jimmysDinerItems,
                    alt: "The page displaying items that have been ordered and are ready to be payed for."
                },
                {
                    src: jimmysDinerPayment,
                    alt: "A payment prompt after items have been selected."
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/jimmys-diner",
            liveLink: "https://jimmys-scrim-diner.netlify.app/",
            gitHub: ""
        },
        {
            id: "unit-converter",
            title: "Unit Converter",
            subTitle: "A metric/imperial unit converter",
            description: `A metric/imperial unit converter that converts length, volume and mass, built to practise
                            using event listeners and inner HTML as well as turning a figma design file
                            into code.`,
            coverImage: {
                src: unitConverter,
                alt: "A unit converter where a number is entered and converted from metric to imperial and vice a versa."
            },
            projectImages: [
                {
                    src: unitConverter,
                    alt: "A unit converter where a number is entered and converted from metric to imperial and vice a versa.",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/unit-converter",
            liveLink: "https://unit-converterer.netlify.app/",
            gitHub: ""
        },
        {
            id: "password-generator",
            title: "Password Generator",
            subTitle: "A random password generator",
            description: `A random password generator, built to practise
                            using Math.random() and using JavaScript to display items.`,
            coverImage: {
                src: passwordGenerator,
                alt: "The generator displaying 2 different passwords that have been created."
            },
            projectImages: [
                {
                    src: passwordGenerator,
                    alt: "The generator displaying 2 different passwords that have been created.",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/password-generator",
            liveLink: "https://rpw-generator.netlify.app/",
            gitHub: ""
        },
        {
            id: "basketball-scoreboard",
            title: "Basketball Scoreboard",
            subTitle: "A basketball scoreboard",
            description: `A basketball scoreboard, built to practise
                            JavaScript functions that increment and decrement a number,
                            that is then displayed on the page.`,
            coverImage: {
                src: scoreboard,
                alt: "A basketball scoreboard, showing scores for a home and guest team."
            },
            projectImages: [
                {
                    src: scoreboard,
                    alt: "A basketball scoreboard, showing scores for a home and guest team.",
                },
            ],
            techUsed: ["HTML", "CSS", "JavaScript", "Figma"],
            linkTo: "/projects/basketball-scoreboard",
            liveLink: "https://bb-sboard.netlify.app/",
            gitHub: ""
        },
]

export default scrimbaProjectsData