import type { SkillCategory } from "../interfaces/skill.interface";

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Hard Skills",
    items: [
      { name: "C/C++" },
      { name: "C#", framework: [".NET"] },
      { name: "Java" },
      {
        name: "Python",
        framework: [
          "Flask",
          "Jupyter",
          "Numpy",
          "Pandas",
          "Scikit-Learn",
          "Matplotlib",
        ],
      },
      {
        name: "Bash/Powershell",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
        framework: ["React"],
      },
      {
        name: "TypeScript",
        framework: ["React", "Vite"],
      },
      {
        name: "Firebase",
      },
      {
        name: "Microsoft SQL Server",
      },
      {
        name: "Git",
      },
      {
        name: "PHP",
        framework: ["Laravel"],
      },
      {
        name: "Dart",
        framework: ["Flutter"],
      },
    ],
  },
  {
    category: "Soft Skills",
    items: [{ name: "Team Collaboration" }, { name: "Time Management" }],
  },
];
