export type Project = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  imageSrc: string;
  githubHref: string;
  tone?: "1" | "2" | "3";
};