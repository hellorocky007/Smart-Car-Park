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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blogging,
    drumset,
    twitter,
    food,
    python
  } from "../components/assets";
  
  const navLinks = [
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mern Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
{
    name:"Python",
    icon:python
},
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Mern Stack Development",
      company_name: "Food Delivery App",
      icon: food,
      iconBg: "#383E56",
      link:"https://github.com/hellorocky007/Food_Delivery_website",
      date: "Oct 2023 -  Dec 2023",
      points: [
        "Developed a MERN stack food delivery application.",
        "Utilized React.js, Bootstrap, Node.js, Express and MongoDB technologies.",
        "Implemented secure authentication, search functionality, cart management, and efficient order processing features.",
        "Employed Redux for seamless state management, focusing on scalability and performance optimization.",
      ],
    },
    {
      title: "Full Stack Developement",
      company_name: "blogging platform",
      icon: blogging,
      iconBg: "#E6DEDD",
      link:"https://github.com/hellorocky007/Bloging_website",
      date: "Jun 2023 - Sept 2023",
      points: [
        "Created a dynamic blogging platform using HTML/CSS/JavaScript for frontend and Node.js/Express.js for backend.",
        "Integrated MongoDB for efficient data storage and management.",
        "Implemented secure user authentication, post management, and messaging functionalities.",
        "Ensured responsive design for compatibility across devices, optimizing user experience.",
      ],
    },
    {
      title: "Frontend Development",
      company_name: "Virtual Drumkit",
      link: "https://magical-axolotl-39dca6.netlify.app/",
      icon: drumset,
      iconBg: "#383E56",
      date: " Feb 2023 - May 2023",
      points: [
        "Developed a Virtual Drum Kit web application using HTML, CSS, and JavaScript.",
        "Enables users to play various drum sounds via keyboard or interactive virtual drums.",
        "Designed to provide an engaging and interactive experience for music and rhythm enthusiasts."
      ],
    },
    {
      title: "Frontend Development",
      company_name: "Twitter Clone",
      icon: twitter,
      link:"https://idyllic-custard-b16641.netlify.app/",
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Created a Twitter clone using HTML, CSS, and JavaScript.",
        "Designed and styled the user interface to closely resemble the look and feel of Twitter's interface.",
        "Implemented functionality for posting tweets, following users, liking and retweeting posts, and displaying timelines.",
        "Utilized JavaScript for dynamic interactions, such as updating timelines in real-time and handling user interactions smoothly.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };