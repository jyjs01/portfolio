export type TechCategory = {
  title: string;
  items: string[];
};

export type WorkSection = {
  title: string;
  icon?: "ui" | "map" | "server" | "api" | "design" | "etc";
  items: string[];
};

export type TroubleImage = { src: string; alt: string; caption?: string };
export type CompareImage = { src: string; alt: string; caption?: string };

export type CompareSet = {
  title?: string; // 선택: "로딩 화면", "중복 제거 전/후" 같은 소제목
  before: CompareImage;
  after: CompareImage;
};

export type ChallengePair = {
  background: string; // "문제 배경"에 보여줄 상세 설명 (없으면 challenge 사용)
  solutionDetail: string; // "해결 방법" 상세 (없으면 solution 사용)

  images?: TroubleImage[];
  compare?: CompareSet[];

  learnings: string[]; // "해당 경험을 통해 알게된 점"
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

  features: string[];
  workSections?: WorkSection[];

  screenshots: Array<{ src: string; thumbSrc?: string; alt: string; span?: "col-span-2" | "col-span-1" }>;
  techStack: TechCategory[];

  challengePairs: ChallengePair[];
};