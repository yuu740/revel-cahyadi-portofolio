export interface Experience {
  id: number;
  type: "work" | "extracurricular" | "internship";
  title: string;
  institution: string;
  period: string;
  description: string[];
}
