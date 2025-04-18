import image from '../assets/garden.jpeg'
import garden from '../assets/garden-2.jpeg'
import mesh from '../assets/mesh-1.jpeg'
import reelMagicHome from '../assets/reelMagic-home.png'
import reeLMagic1 from '../assets/reelMagic-1.png'

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
            image: reelMagicHome,
            alt: "ReelMagic homepage in desktop mode."
        },
        projectImages: [
            {
                src: reelMagicHome,
                alt: "ReelMagic homepage.",
            },
            {
                src: reeLMagic1,
                alt: "On the left an image of the dynamic review system. On the right an image of a movie information page.",
            },
        ],
        techUsed: [],
        linkTo: "/projects/reel-magic",
        liveLink: "",
        gitHub: ""
    },
    {
        id: "dew-it",
        title: "Dew It",
        subTitle: "Todo List",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        coverImage: {
            image: garden,
            alt: "image of"
        },
        projectImages: [
            {
                src: "",
                alt: "",
            }
        ],
        techUsed: [],
        linkTo: "/projects/dew-it",
        liveLink: "",
        gitHub: ""
    },
    {
        id: "eco-sage",
        title: "Eco Sage",
        subTitle: "Eco recommendations App",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        coverImage: {
            image: image,
            alt: "image of"
        },
        projectImages: [
            {
                src: "",
                alt: "",
            }
        ],
        techUsed: [],
        linkTo: "/projects/focus-points",
        liveLink: "",
        gitHub: ""
    },
    {
        id: "scrimba",
        title: "Scrimba",
        subTitle: "My Scrimba projects",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        coverImage: {
            image: mesh,
            alt: "image of"
        },
        linkTo: "/scrimba",
    }
]

export default projectData