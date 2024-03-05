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
        "Highly recommend Dr. Jay! Professional, attentive, and provides clear explanations.",
      name: "Mamta",
      designation: "Chennai",
      company: "Tamilnadu",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Dr. Patel's understanding of my problem was evident. Their clear guidance and support greatly helped me navigate my health concerns.",
      name: "Ramu Singh",
      designation: "Vijayawada",
      company: "Ap",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Dr. Smith addressed my issue with care and expertise. Their thorough explanation of my condition reassured me immensely",
      name: "Rema",
      designation: "Avadi",
      company: "Chennai",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Heart disease",
      description:
        "Heart disease treatment depends on the cause and type of heart damage. Healthy lifestyle habits — such as eating a low-fat, low-salt diet, getting regular exercise and good sleep, and not smoking — are an important part of treatment.",
      tags: [
        {
          name: "Aoid Smooking",
          color: "blue-text-gradient",
        },
        {
          name: "Low Salt Diet",
          color: "green-text-gradient",
        },
        {
          name: "Regular Exercise",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.youtube.com/watch?v=8E_NPCZCNdo",
    },
    {
      name: "Fever",
      description:
        "Take paracetamol or ibuprofen for fever. Stay hydrated with water, avoiding alcohol, tea, and coffee. Sponge skin with lukewarm water and use a fan. Avoid cold baths or showers to prevent trapping heat. Rest, including bed rest, is essential for recovery. These steps aid in reducing fever and promoting healing.",
        tags: [{
          name: "Paracetamol",
          color: "blue-text-gradient",
        },
        {
          name: "ibuprofen",
          color: "green-text-gradient",
        },
        {
          name: "Avoiding Alcohol",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.youtube.com/watch?app=desktop&v=t-ljzFLT00c",
    },
    {
      name: "Stomach Pain",
      description:
        "Choose hydrating fluids like water, juice, or warm lemon water with honey, avoiding dehydrating substances like caffeine and alcohol. Opt for nutritious options like chicken soup or warm apple juice for comfort. Rest at home to prevent spreading illness. Maintain warm room temperature and use a cool-mist humidifier for comfort.",
      tags: [
        {
          name: "prioritize water",
          color: "blue-text-gradient",
        },
        {
          name: "warm lemon water",
          color: "green-text-gradient",
        },
        {
          name: "drink juice",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.youtube.com/watch?v=lBPaJIIXO_E",
    },
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };