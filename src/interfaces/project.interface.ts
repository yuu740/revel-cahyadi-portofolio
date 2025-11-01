export interface Project {
  id: string;
  title: string;
  since: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  isContributor: boolean;
  isOnDeveloping: boolean;
}
