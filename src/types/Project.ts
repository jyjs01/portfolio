export type Project = {
  title: string;
  desc: string;
  tags: string[];
  imageSrc: string;
  detailHref: string;
  githubHref: string;
  tone?: "mint" | "cream" | "mint2";
};