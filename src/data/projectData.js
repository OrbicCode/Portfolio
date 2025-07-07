import {
  reelMagicHome,
  reelMagicReviews,
  dewIt,
  scrimbaLogo,
  starDweller1,
  starDweller2,
  starDweller3,
} from '../assets/projects';

const projectData = [
  {
    id: 'star-dweller',
    title: 'Star Dweller',
    subTitle: 'Personal Dashboard App',
    description: `a space-themed personal dashboard app designed to keep you productive
					while keeping up with everything cosmic. Built with a mobile-first 
					approach, it features widgets such as a To-Do list, Space News, 
					SpaceX launch dates, all styled with a sleek night-sky palette. 
					This project challenges me to continue learning new technologies 
					(Jest, TypeScript) on the fly while leveraging my existing skills, 
					aiming to create a standout portfolio piece for my developer journey.`,
    coverImage: {
      src: starDweller1,
      alt: 'EcoSage app displayed on a phone with a background of a churning sea next to a cliff.',
    },
    projectImages: [
      {
        src: starDweller1,
        alt: 'EcoSage app displayed on a phone with a background of a churning sea next to a cliff.',
      },
      {
        src: starDweller2,
        alt: 'EcoSage app displayed on a phone with a background of a churning sea next to a cliff.',
      },
      {
        src: starDweller3,
        alt: 'EcoSage app displayed on a phone with a background of a churning sea next to a cliff.',
      },
    ],
    techUsed: [
      'TypeScript',
      'Supabase',
      'Next.js',
      'Vercel',
      'TDD',
      'Jest',
      'Playwright',
      'REST APIs',
      'Figma',
      'CI/CD',
      'Git',
      'GitHub',
      'Husky',
      'Notion',
    ],
    linkTo: '/projects/star-dweller',
    liveLink: 'https://stardweller.vercel.app',
    gitHub: 'https://github.com/OrbicCode/star-dweller',
  },
  {
    id: 'reel-magic',
    title: 'Reel Magic',
    subTitle: 'Movie Review Site',
    description: `This was my final project at School of Code and was the 
                        culmination of what we learned. We built a community-driven 
                        movie review site. Where the reviews are made by 
                        users, for users. Users can vote on each others reviews
                        for user engagement.`,
    coverImage: {
      src: reelMagicHome,
      alt: 'ReelMagic homepage in desktop mode.',
    },
    projectImages: [
      {
        src: reelMagicHome,
        alt: 'ReelMagic homepage.',
      },
      {
        src: reelMagicReviews,
        alt: 'On the left an image of the dynamic review system. On the right an image of a movie information page.',
      },
    ],
    techUsed: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Figma',
      'REST APIs',
      'Git',
      'GitHub',
      'PlayWright',
    ],
    linkTo: '/projects/reel-magic',
    liveLink: 'https://reelmagic.netlify.app/',
    gitHub: 'https://github.com/SchoolOfCode/final-project-reelstack',
  },
  {
    id: 'dew-it',
    title: 'Dew It',
    subTitle: 'To-Do List',
    description: `I started this project during my time at School of 
                       Code in order to practice my vanilla JavaScript 
                       skills and API calls. The skills I honed in this project 
                       will be used to make a personal dashboard app with an integrated
                       to-do list in a series of widgets. Stay tuned on LinkedIn 
                       for updates coming soon.`,
    coverImage: {
      src: dewIt,
      alt: 'a Star Wars themed to-do list with a joke widget and NASA photo of the day.',
    },
    projectImages: [
      {
        src: dewIt,
        alt: 'a Star Wars themed to-do list with a joke widget and NASA photo of the day.',
      },
    ],
    techUsed: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Netlify'],
    linkTo: '/projects/dew-it',
    liveLink: 'https://dewit.netlify.app/',
    gitHub: 'https://github.com/OrbicCode/Dew-It',
  },
  {
    id: 'scrimba',
    title: 'Scrimba',
    subTitle: 'My Scrimba projects',
    coverImage: {
      src: scrimbaLogo,
      alt: 'The Scrimba logo',
    },
    linkTo: '/scrimba',
  },
];

export default projectData;
