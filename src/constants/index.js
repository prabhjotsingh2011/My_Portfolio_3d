import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  primotech,
  hitech,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  linux,
  sql,
  firebase,
  api,
  android,
  aws,
  xml,
  node,
  whatsappwebapp,
  whatappandroid,
  beverego,
  speakitup,
  androidicon,
  blogger,
  ytklon,
  music,
  keep,
  hackoverflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack  Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile, 
  },
  
  {
    title: "Web Developer",
    icon: creator,
  },
  
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node",
    icon:node
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "Linux",
  //   icon: linux,
  // },
  
  {
    name: "XML",
    icon: xml,
  },
  {
    name: "FireBase",
    icon: firebase,
  },
  {
    name: "API",
    icon: api,
  },
  {
    name: "Android ",
    icon: android,
  },
  
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Primotech",
    icon:primotech,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Ingenious Hi-Tech",
    icon: hitech,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - May 2022",
    points: [
      "Responsible for creating Back End using Node.js and Express.js.",
      "Setting up and managing databases using MongoD, also to handle the AWS EC2 instances for the continuous integration and development .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Lead a team of 1 member working on different project.",
      "Also worked with domains and subdomains for the project.",
    ],
  },
  {
    title: "Subordinate- Tech team",
    company_name: "Hackoverflow",
    icon: hackoverflow,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Jan 2022",
    points: [
      " Maintaining the official website of Hackoverflow Society for 100% efficiency.",
      "Worked on a project to shift the website to SPA ( Single-page Application)",
      "collaborative working with different teams and providing Tech Support",
      "Handling tech part in an event organised by hackoverflow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SpeakItUp",
    description:
      "Web based application to connect with like minded peoples over a voice chat to discuss and create a common voice chat room using the latest technology of webRTC. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "webRTC",
        color: "pink-text-gradient",
      },
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "green-text-gradient",
      },
    ],
    image: speakitup,
    source_code_link: "https://github.com/prabhjotsingh2011/SpeakItUP_",
  },
  {
    name: "Beverego",
    description:
      "Web application to order drinks online. Added features of admin and comsumer logins, realtime communication using Socket.io, Add to cart functionality etc....",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Session management",
        color: "green-text-gradient",
      },
      {
        name: "Separate admin / consumer page",
        color: "pink-text-gradient",
      },
    ],
    image: beverego,
    source_code_link: "https://github.com/prabhjotsingh2011/beverego",
  },
  
  {
    name: "Whatsapp-web",
    description:
      "A full stack web application for chatting purpose. The idea is taken from whatsapp web and I tried to make a similar thing with similar features of login, updating profile, chatting etc...",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      
      },
      {
        name: "Expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "React Hooks",
        color: "green-text-gradient",
      },
    ],
    image: whatsappwebapp,
    source_code_link: "https://github.com/prabhjotsingh2011/WhatsApp-Clone",
  },

  {
    name: "whatsapp-android",
    description:
      "Chatting android application inspired from whatsapp with added features of authentication, chatting, deleting messages, updating profile pictures etc....",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
      {
        name: "AVD",
        color: "blue-text-gradient",
      },
      {
        name: "Gradle Build",
        color: "green-text-gradient",
      },
    ],
    image: whatappandroid,
    source_code_link: "https://github.com/prabhjotsingh2011/Chatter",
  },
  {
    name: "Blogger",
    description:
      "A full stack blogging web application with added feature of create, read, update and delete the blog. Proper authentication and database management is done. Comment feature is also added.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      
      },
      {
        name: "Expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "Database",
        color: "pink-text-gradient",
      }
    ],
    image: blogger,
    source_code_link: "https://github.com/",
  },
  {
    name: "Andorid FoodDelivery UI",
    description:
      "A simple UI design for food ordering application, created using android studio with various list and activities to shift from one screen to another screen.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "JAVA",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      
      },
      {
        name: "Android Emulator",
        color: "blue-text-gradient",
      },
      
    ],
    image: androidicon,
    source_code_link: "https://github.com/prabhjotsingh2011/Bloogg-it",
  },
  {
    name: "Youtube Klon",
    description:
      "Web application to clone the youtube using the youtube APIs and webservices. List of videos, Searching, paginations all these features are implemented.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "green-text-gradient",
      },
      {
        name: "Pagination",
        color: "pink-text-gradient",
      
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
      
    ],
    image: ytklon,
    source_code_link: "https://github.com/prabhjotsingh2011/YT-Klon",
  },
  {
    name: "Music Player",
    description:
      "A Web Based music Player with features to play, pause, move, loop song, shuffle etc...",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      
      },
      
    ],
    image: music,
    source_code_link: "https://github.com/prabhjotsingh2011/JS-Music-Player",
  },
  {
    name: "Note Takker",
    description:
      "A Web Based note taking applicatio to create new notes, edit them, delete, and modify. All these notes are getting stored to local database of browser.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      
      },
      {
        name: "Local Database",
        color: "green-text-gradient",
      },
    ],
    image: keep,
    source_code_link: "https://github.com/prabhjotsingh2011/Keep-Me",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
