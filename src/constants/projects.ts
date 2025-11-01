import type { Project } from "../interfaces/project.interface";
import nutriWise from "../assets/images/projects/nutriwise.png";
import screenome from "../assets/images/projects/screenome.png";
import portfolio from "../assets/images/projects/portfolio.png";
import titikkondisi from "../assets/images/projects/titikkondisi.jpg";
import relist from "../assets/images/projects/relist.jpg";
import remind from "../assets/images/projects/remindapp.jpg";

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj1",
    title: "NutriWise",
    since: "2025",
    description:
      "An application-web based to track your food storage, recipe recommendation, and track your nutritional intake, built using React JS with TypeScript template (Frontend) and Firebase & Python (Backend)",
    imageUrl: nutriWise,
    tags: [
      "React",
      "TypeScript",
      "CSS",
      "Bootstrap",
      "Python",
      "Flask",
      "Firebase",
    ],
    liveUrl: "https://nutri-wise-delta.vercel.app/",
    repoUrl: "https://github.com/Dexcop/NutriWise",
    isContributor: true,
    isOnDeveloping: false
  },
  {
    id: "proj2",
    title: "screenome",
    since: "2025",
    description:
      "A short movie promotion-web, built using HTML, CSS, JavaScript. This short movie is a drama with an educational theme about gadget addiction and the importance of reconnecting with real life.",
    imageUrl: screenome,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://yuu740.github.io/screenome/",
    repoUrl: "https://github.com/yuu740/screenome",
    isContributor: false,
    isOnDeveloping: false
  },
  {
    id: "proj3",
    title: "Portfolio",
    since: "2025",
    description:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my background, skills, projects, and experiences in technology, presented with a modern dark-themed design.",
    imageUrl: portfolio,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/yuu740/revel-cahyadi-portofolio",
    liveUrl: "https://revel-cahyadi-portofolio.vercel.app/",
    isContributor: false,
    isOnDeveloping: true,
  },
  {
    id: "proj4",
    title: "TitikKondisi",
    since: "2025",
    description:
      "A weather mobile-application named TitikKondisi that integrated platform that combines weather data with critical index, such as parameters—air quality, light pollution, moon phases, and more—all in one application. This app built with Flutter with Firebase",
    imageUrl: titikkondisi,
    tags: ["Flutter", "Dart", "Firebase"],
    liveUrl: "https://github.com/yuu740/titik-kondisi-app-weather/releases/tag/v1.0.0-beta.2",
    repoUrl: "https://github.com/yuu740/titik-kondisi-app-weather",
    isContributor: false,
    isOnDeveloping: true,
  },

  {
    id: "proj5",
    title: "Note Reminder App",
    since: "2025",
    description:"A note/task reminder mobile-application that developed based on my use case that I used for remind me about the task or note that have deadline",
    imageUrl: remind,
    tags: ["Flutter", "Dart", "SQLite"],
    liveUrl: "",
    repoUrl: "https://github.com/yuu740/task-reminder-app",
    isContributor: false,
    isOnDeveloping: true,
  },

  {
    id: "proj6",
    title: "Relist",
    since: "2025",
    description:"A reccursive Task Manager Mobile-Application that developed based on my use case that I used for my ordered-reccurence task",
    imageUrl: relist,
    tags: ["Flutter", "Dart", "SQLite"],
    liveUrl: "https://github.com/yuu740/relist/releases/tag/v1.0.0",
    repoUrl: "https://github.com/yuu740/relist",
    isContributor: false,
    isOnDeveloping: true,
  },
  

];
