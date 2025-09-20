import type { Project } from "../interfaces/project.interface";
import nutriWise from "../assets/images/projects/nutriwise.png";
import screenome from "../assets/images/projects/screenome.png";
import portfolio from "../assets/images/projects/portfolio.png";
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
  },
  {
    id: "proj3",
    title: "Portfolio",
    since: "2025",
    description:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my background, skills, projects, and experiences in technology, presented with a modern dark-themed design.",
    imageUrl: portfolio,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://yuu740.github.io/screenome/",
    repoUrl: "https://github.com/yuu740/screenome",
    isContributor: false,
  },
];
