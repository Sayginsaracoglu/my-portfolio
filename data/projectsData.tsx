import technologies from "./technologiesData";

const projects = [
  {
    id: 4,
    title: "The MET Art Finder",
    description:
      "A web application that allows users to search for and view information about art pieces from The Metropolitan Museum of Art using Next.js, Bootstrap, and Node.js.",
    imageSrc: ["/project-img/met.png"],
    url: "https://art-finder.vercel.app/",
    sourceUrl: "https://github.com/Sayginsaracoglu/Art-Work-Finder",
    usedTech: [
      technologies[0],
      technologies[1],
      technologies[2],
      technologies[3],
      technologies[5],
      technologies[10],
    ],
    active: true,
  },
  {
    id: 6,
    title: "Order Management Desktop Application",
    description:
      "A desktop application built using C++ that manages customer orders for a business, filling orders based on inventory at different stations, and managing orders using a line manager.",
    imageSrc: [
      "/project-img/order1.png",
      "/project-img/order2.png",
      "/project-img/order3.png",
    ],
    sourceUrl: "https://github.com/Sayginsaracoglu/MS3",

    usedTech: [technologies[9]],
    active: true,
  },

  {
    id: 5,
    title: "ChatGeniusPro",
    description:
      "A mobile application that uses the ChatGPT language model to generate responses to user input in real-time, built using React Native, TypeScript, and Node.js.",
    imageSrc: ["/project-img/chatGenius1.png"],
    sourceUrl: "https://github.com/Sayginsaracoglu/ChatGeniusPro",
    usedTech: [technologies[4], technologies[6], technologies[10]],
    active: true,
  },
  {
    id: 1,
    title: "ISS Distance Calculator",
    description:
      "A web application that calculates the distance between the International Space Station and a given location on Earth using HTML, CSS, and JavaScript.",
    imageSrc: ["/project-img/ISS.png"],
    url: "https://sayginsaracoglu.github.io/main/iss.html",
    sourceUrl: "https://github.com/Sayginsaracoglu/Sayginsaracoglu.github.io",
    usedTech: [technologies[0], technologies[1], technologies[3]],
    active: true,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A web or mobile application that displays the current weather conditions and forecast for a given location using HTML, CSS, and JavaScript.",
    imageSrc: ["/project-img/weather.png"],
    url: "https://sayginsaracoglu.github.io/main/weather.html",
    sourceUrl: "https://github.com/Sayginsaracoglu/Sayginsaracoglu.github.io",
    usedTech: [technologies[0], technologies[1], technologies[3]],
    active: true,
  },
  {
    id: 3,
    title: "Aircraft Finder",
    description:
      "A web application that allows users to search for and view information about various aircraft using HTML, CSS, and JavaScript.",
    imageSrc: ["/project-img/aircraft.png"],
    url: "https://sayginsaracoglu.github.io/main/flight-tracker.html",
    sourceUrl: "https://github.com/Sayginsaracoglu/Sayginsaracoglu.github.io",
    usedTech: [technologies[0], technologies[1], technologies[3]],
    active: true,
  },

  {
    id: 9,
    title: "askGPT",
    description:
      "A desktop application that uses the ChatGPT language model to generate responses to user input, built using Python.",
    imageSrc: ["/project-img/twitter.gif"],
    usedTech: [technologies[8]],
    active: true,
  },
  {
    id: 10,
    title: "HeyComputer",
    description:
      "A desktop application that allows users to interact with the ChatGPT language model in real-time, built using Python.",
    imageSrc: ["/project-img/heyComputer.png"],
    usedTech: [technologies[8]],
    active: true,
  },
  {
    id: 11,
    title: "Politek Spray Foam Insulation",
    description:
      "Created a websites for Politek and Alfa Spray Foam Insulation companies using wordpress\nDesigned the user interface with a responsive layout, intuitive navigation, and visual displays of services\nDeveloped features such as service information, blogs and contact information to improve user experience\nImplemented SEO techniques to increase the visibility and accessibility of the website\n",
    imageSrc: ["/project-img/politek.png"],
    url: "https://www.politekpoliuretan.com/",
    active: true,
  },
  {
    id: 14,
    title: "Alfa Spray Foam Insulation",
    description:
      "Created a websites for Politek and Alfa Spray Foam Insulation companies using wordpress\nDesigned the user interface , intuitive navigation, and visual displays of services\nDeveloped features such as service information, blogs and contact information to improve user experience\nImplemented SEO techniques to increase the visibility and accessibility of the website\n",
    imageSrc: ["/project-img/alfa.png"],
    url: "https://www.alfapoliuretan.com",
    active: true,
  },
  {
    id: 12,
    title: "Google Ad Campaigns",
    description:
      "Managing and optimizing Google Ad campaigns for spray foam insulation services, using keyword research and targeted ad copy to improve click-through rates and calls.",
    imageSrc: ["/project-img/googleads.png"],
    active: true,
  },
  {
    id: 13,
    title: "Real-time Messaging Application",
    description:
      "A web or mobile application built using Socket.io that allows users to send and receive real-time messages with each other.",
    imageSrc: ["/project-img/twitter.gif"],
    url: "w",
    active: false,
  },
];

export default projects;
