import image from '../assets/garden.jpeg'
import garden1 from '../assets/garden-1.jpeg'
import garden from '../assets/garden-2.jpeg'
import mesh from '../assets/mesh-1.jpeg'

const projectData = [
    {
        id: "focus-points",
        title: "Focus Points",
        subTitle: "Self-reflection App",
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
        liveLink: ""
    },
    {
        id: "reel-magic",
        title: "Reel Magic",
        subTitle: "Movie Review Site",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        coverImage: {
            image: garden1,
            alt: "image of"
        },
        projectImages: [
            {
                src: "",
                alt: "",
            }
        ],
        techUsed: [],
        linkTo: "/projects/reel-magic",
        liveLink: ""
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
        liveLink: ""
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
        projectImages: [
            {
                src: "",
                alt: "",
            }
        ],
        techUsed: [],
        linkTo: "/scrimba",
        liveLink: ""
    }
]

export default projectData