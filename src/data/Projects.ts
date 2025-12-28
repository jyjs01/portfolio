import type { Project } from "@/src/types/Project";

export const projects: Project[] = [
  {
    id: "jobtracker",
    title: "JobTracker",
    desc:
      "채용 공고, 지원 이력, 면접/과제 일정을 한 곳에서 관리하는 취업 준비 관리 서비스입니다. 대시보드와 필터로 마감·일정 D-day를 빠르게 확인할 수 있습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    imageSrc: "/jobtracker/JT_dashboard.png",
    githubHref: "https://github.com/jyjs01/job_tracker",
    tone: "1",
  },
  {
    id: "courseplate",
    title: "CoursePlate",
    desc:
      "여행지에서 취향 설문을 바탕으로 맛집을 추천하고 코스를 제안하는 모바일 앱입니다. Naver Maps API 연동으로 추천 음식점을 지도에서 바로 확인할 수 있습니다.",
    tags: ["React Native(Expo)", "Naver Maps API", "Spring", "Flask", "MongoDB"],
    imageSrc: "/courseplate/CoursePlate.png",
    githubHref: "https://github.com/Course-Plate/CP_Final",
    tone: "2",
  },
  {
    id: "noticecounsel",
    title: "Notice Counsel",
    desc:
      "상담 예약·공지·질문 기능을 갖춘 학사 정보 관리 앱입니다. 상담 내용을 KoBART Summarizer API로 자동 요약해 핵심만 빠르게 확인할 수 있도록 개선했습니다.",
    tags: ["Android(Java)", "Node.js", "KoBART Summarizer API(Hugging Face)", "MySQL", "Firebase Cloud Messaging"],
    imageSrc: "/noticecounsel/NoticeCounsel.png",
    githubHref: "https://github.com/jyjs01/Notice-Counsel",
    tone: "3",
  },
];