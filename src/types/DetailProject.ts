export type TechCategory = {
  title: string;
  items: string[];
};

export type ChallengePair = {
  challenge: string;
  solution: string;
};

export type DetailProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  period: string;
  role: string;
  team: string;
  tone?: "1" | "2" | "3";

  githubUrl?: string;
  demoUrl?: string;

  mainImage: { src: string; alt: string };
  features: string[];

  screenshots: Array<{ src: string; alt: string; span?: "col-span-2" | "col-span-1" }>;
  techStack: TechCategory[];

  challengePairs: ChallengePair[];
};