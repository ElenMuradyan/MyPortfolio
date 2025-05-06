import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export const navbarItems = [
  { name: "About", link: "#about", icon: <FaHome /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];
  
export const gridItems = [
  {
    id: 1,
    title:
      "I started learning JavaScript on my own in my hometown. A year later, I joined Armenian Code Academy and became one of the top students in the Advanced JS and React courses (April–December 2024).",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/Images/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Coding is more than just a skill to me — it’s my passion and favorite hobby.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title:
      "I’ve been building projects and deepening my knowledge in TypeScript and Next.js ever since.",
    description: "Always learning and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Soon I'll start studying Information Security at Yerevan State University (Applied Informatics & Mathematics).",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start items-end",
    img: "/Images/grid.svg",
    spareImg: "/Images/b4.png",
  },
  {
    id: 5,
    title:
      "I’m currently seeking a remote role — freelance, internship, or anything meaningful where I can grow.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/Images/b5.svg",
    spareImg: "/Images/grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const projects = [
  {
    id: 1,
    title: "AI Chatbot Assistant",
    des: "A smart AI chatbot built with Next.js and OpenAI API, designed to provide interactive responses and integrate with modern web apps.",
    img: "/Projects/chatbot.png",
    iconLists: ["/Icons/nextdotjs.svg", "/Icons/typescript.svg", "/Icons/openai.svg", "/Icons/redux.svg", "/Icons/cookiecutter.svg", "/Icons/supabase.svg", "/Icons/firebase.svg"],
    link: "z-chatbot.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/chatBot'

  },  
  {
    id: 2,
    title: "Jira Clone",
    des: "A simplified Jira board clone for task and project management, with drag-and-drop support and Redux integration.",
    img: "/Projects/jira.png",
    iconLists: ["/Icons/nextdotjs.svg", "/Icons/typescript.svg", "/Icons/redux.svg", "/Icons/cookiecutter.svg", "/Icons/antdesign.svg","/Icons/supabase.svg", "/Icons/firebase.svg"],
    link: "jira-project-4mr6.vercel.app",
    gitLink: 'https://github.com/ElenMuradyan/JiraProject'
  },
  {
    id: 3,
    title: "E-commerce App",
    des: "A full-featured e-commerce platform with user-friendly navigation, built using React and modern state management.",
    img: "/Projects/ecommerce.png",
    iconLists: ["/Icons/react.svg", "/Icons/typescript.svg", "/Icons/redux.svg", "/Icons/tailwindcss.svg", "/Icons/firebase.svg", "/Icons/supabase.svg"],
    link: "omega-ecommerce.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/OmegaShop'
  },
  {
    id: 4,
    title: "Crypto Viewer",
    des: "Real-time cryptocurrency price viewer app with charting and market details, built using React and TypeScript.",
    img: "/Projects/crypto.png",
    iconLists: ["/Icons/react.svg", "/Icons/typescript.svg", "/Icons/coinmarketcap.svg", "/Icons/css.svg", "/Icons/antdesign.svg", "/Icons/visx.svg"],
    link: "currencytypescriptreactapp.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/crypto-app'
  },
  {
    id: 5,
    title: "Personal Waste Tracker",
    des: "Track your daily waste and environmental impact with this lightweight tracker built in React and TypeScript.",
    img: "/Projects/waste.png",
    iconLists: ["/Icons/react.svg", "/Icons/typescript.svg", "/Icons/redux.svg", "/Icons/firebase.svg", "/Icons/antdesign.svg"],
    link: "mywallettypescript.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/spender_ts'
  },
  {
    id: 6,
    title: "Weather App",
    des: "Simple and clean weather app that shows real-time weather info based on user location.",
    img: "/Projects/weather.png",
    iconLists: ["/Icons/react.svg", "/Icons/javascript.svg", "/Icons/redux.svg", "/Icons/antdesign.svg"],
    link: "weatherforecasterevan.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/Weather-App'
  },
  {
    id: 7,
    title: "Millionaire Quiz App",
    des: "Challenge your knowledge and climb the ladder of wealth in this 'Who Wants to Be a Millionaire'-style quiz game built with React, Firebase, and Ant Design.",
    img: "/Projects/millionaire.png", 
    iconLists: ["/Icons/react.svg", "/Icons/javascript.svg", "/Icons/redux.svg", "/Icons/firebase.svg", "/Icons/antdesign.svg"],
    link: "milionairegame.netlify.app",
    gitLink: 'https://github.com/ElenMuradyan/MillionaireQuiz'
  }  
];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

  export const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "/Icons/react.svg" },
        { name: "Next.js", icon: "/Icons/nextdotjs.svg" },
        { name: "TypeScript", icon: "/Icons/typescript.svg" },
        { name: "JavaScript", icon: "/Icons/javascript.svg" },
        { name: "HTML", icon: "/Icons/html5.svg" },
        { name: "CSS", icon: "/Icons/css.svg" },  
        { name: "Tailwind CSS", icon: "/Icons/tailwindcss.svg" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Firebase", icon: "/Icons/firebase.svg" },
        { name: "Supabase", icon: "/Icons/supabase.svg" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Redux", icon: "/Icons/redux.svg" },
        { name: "Git", icon: "/Icons/git.svg" },
        { name: "GitHub", icon: "/Icons/github.svg" },
        { name: "Ant Design", icon: "/Icons/antdesign.svg" },
      ],
    },
  ];
  