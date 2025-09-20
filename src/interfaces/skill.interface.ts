export interface SkillCategory {
  category: string;
  items: SkillItems[];
}
export interface SkillItems {
  name: string;
  framework?: string[];
}
