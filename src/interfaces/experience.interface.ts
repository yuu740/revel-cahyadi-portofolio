export interface Experience {
  id: number;
  type: "work" | "extracurricular";
  title: string;
  institution: string;
  period: string;
  description: string[];
}
