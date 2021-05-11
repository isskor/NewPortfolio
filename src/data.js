export const data = [
  {
    name: 'Padel Shack',
    desc: 'FullStack CRUD e-commerce for Padel Stuff ',
    mainTools: ['React', 'Mongo-DB', 'JS', 'NodeJS'],
    subTools: [
      'Redux',
      'Firebase',
      'Material-UI',
      'axios',
      'mongoose',
      'JWT',
      'stripe',
    ],
    info: `A full-stack e-commerce for Padel rackets and related accessories. The application  features CRUD operations for admins and has authentication and protected router powered by firebase and JSON-webtokens. The shop features 8 different filter options as well as pagination and sorting. Payment is done by stripe (however only for testing, no actual purchase will be made) `,
    githubUrl: 'https://github.com/isskor/PadelShack',
    siteUrl: 'https://padel-shack-v1.vercel.app/',
    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack_beqekk.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack1_goazah.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack3_slz9zd.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/padelshack4_f3n6wv.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack5_ciyoce.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/padelshack6_epzeet.jpg',
    ],
  },
  {
    name: 'Ceramiz',
    desc: 'Web Shop for ceramics',
    mainTools: ['React', 'JS', 'NodeJS', 'SQLite'],
    subTools: [
      'Redux-toolKit',
      'Styled-Components',
      'Knex',
      'Express',
      'Axios',
    ],
    info:
      'A small fullstack e-commerce for ceramics, built with React and NodeJS and SQLite as database. This project is mainly focused on front-end. But do feature login and authentication as well as update features for users. The cart system is built with redux and if submitted it will create an order in the databse. There is however no payment system involved as of now ',
    siteUrl: 'https://ceramiz.vercel.app/',
    githubUrl: 'https://github.com/isskor/ceramiz',
    githubUrl2: 'https://github.com/isskor/ceramizBackend',
    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz_ioqhgf.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz1_fzlbsv.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz3_dtjgld.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz4_z0q8t0.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz5_qihxdg.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669066/ceramiz6_kpqjwa.jpg',
    ],
  },
  {
    name: 'GME',
    desc: 'Games Library Site',
    mainTools: ['React', 'JS', 'Redux', 'Framer-motion'],
    subTools: ['Framer-motion', 'nodeJS', 'rawg.io API'],
    info: `A games library app powered by rawg.io's API with thousand of games. The application is solely focused on front-end. Here is used redux as state-mangement and api fetching. But due to cors I've implented a  small nodejs server to work around it. The application features filters and search function based on the api `,
    githubUrl: 'https://github.com/isskor/GME-GameWebsite',
    siteUrl: 'https://gme-game-websitev1.vercel.app/game',
    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme7_hbcit7.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme6_fw53vs.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme_eay0mg.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme2_nwssfi.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme3_orekbc.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669067/gme5_puinmb.jpg',
    ],
  },
  {
    name: 'PokerPlanner',
    desc: 'A application for Scrum Poker Planning',
    mainTools: ['React', 'JS', 'Firebase'],
    subTools: ['Redux-toolkit', 'styled-components', 'Firebase-hooks'],
    info: `A application for Scrum/Agile Poker Planning. I got tired of looking for an easy and free poker planning application so I created one! The application is built with firebase and features live communication for users. Users can join or create their own rooms, create tasks and also live chat with each other`,
    githubUrl: 'https://github.com/isskor/ScrumPoker',
    siteUrl: 'https://scrum-poker-ochre.vercel.app/',
    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner_gc72k5.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner1_kwgahb.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner3_nychwq.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner2_q4oks0.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner5_gg9nmm.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/pokerplanner4_bfzal9.jpg',
    ],
  },

  {
    name: 'SR',
    desc: 'Sveriges Radio web-application',
    mainTools: ['React', 'JS', 'SQLite', 'Redux-toolkit'],
    subTools: ['SR-api', 'JWT', 'Knex', 'styled-components'],
    info: ` a web application for Sveriges Radio API, where users can register, add favorite channels/programs/episde and listen to them (the api is unfortunaly not live anymore so some live-url's might be broken). The application is built with redux-toolkit for frontend api to nodeJS server to get data from SR-api.`,
    githubUrl: 'https://github.com/isskor/sr',
    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/sr_l23ujd.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669069/sr5_v6tvtr.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669068/sr2_xcbe7l.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669069/sr1_ibfex0.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669069/sr3_onmrvg.jpg',
      'https://res.cloudinary.com/dluba92th/image/upload/v1620669069/sr4_scuyui.jpg',
    ],
  },
  {
    name: 'This Website!',
    desc: 'My portfolio',
    mainTools: ['React', 'JS', 'Sass', 'GSAP'],

    images: [
      'https://res.cloudinary.com/dluba92th/image/upload/v1620752929/portf_zjwsm7.jpg',
    ],
    info: ' My own portfolio website, built with React and vanilla javascript',
  },
];
