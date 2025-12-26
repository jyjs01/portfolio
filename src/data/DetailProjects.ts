import type { DetailProject } from "@/src/types/DetailProject";

export const DETAIL_PROJECTS: DetailProject[] = [
  {
    id: "jobtracker",
    title: "JobTracker",
    description:
      "채용 공고 등록부터 지원 이력, 면접/과제 일정까지 취업 준비 흐름을 한 곳에서 관리하는 서비스입니다. 대시보드와 필터를 통해 마감·일정 D-day를 빠르게 확인하고 준비 과정을 체계적으로 정리할 수 있습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "MongoDB"],
    period: "2025.12.01 - 2025.12.27",
    role: "풀스택 개발",
    team: "개인 프로젝트",
    tone: "1",

    githubUrl: "https://github.com/jyjs01/job_tracker",
    demoUrl: "https://job-tracker-iota-pied.vercel.app/",

    mainImage: { src: "/jobtracker/JT_Main.png", alt: "JobTracker 메인 화면" },

    features: [
      "채용 공고 등록 및 관리 (회사/포지션/마감일/URL/메모)",
      "지원 이력 관리 (상태·단계·지원일 기록)",
      "면접/과제 일정 관리 (예정·합격·불합격, 장소/라운드)",
      "마감·일정 D-day 대시보드 요약 (임박 공고/다가오는 일정)",
      "상태/기간 필터 및 회사명 검색",
    ],

    screenshots: [
      { src: "/jobtracker/JT_dashboard.png", alt: "스크린샷 1", span: "col-span-1" },
      { src: "/jobtracker/JT_jobpostings.png", alt: "스크린샷 2", span: "col-span-1" },
      { src: "/jobtracker/JT_createJobpostings.png", alt: "스크린샷 3", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_jobposting.png", alt: "스크린샷 4", span: "col-span-1" },
      { src: "/jobtracker/JT_applications.png", alt: "스크린샷 5", span: "col-span-1" },
      { src: "/jobtracker/JT_createApplications.png", alt: "스크린샷 6", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_applications.png", alt: "스크린샷 7", span: "col-span-1" },
      { src: "/jobtracker/JT_interviews.png", alt: "스크린샷 8", span: "col-span-1" },
      { src: "/jobtracker/JT_createInterviews.png", alt: "스크린샷 9", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_interview.png", alt: "스크린샷 10", span: "col-span-1" },
    ],

    techStack: [
      { title: "Frontend", items: ["Next.js (App Router)", "TypeScript", "Axios"] },
      { title: "Backend / DB", items: ["Next.js Route Handlers (API)", "MongoDB"] },
      { title: "Styling", items: ["Tailwind CSS", "lucide-react"] },
      { title: "Validation", items: ["Zod"] },
      { title: "Tools", items: ["Git", "VS Code", "Vercel" ] },
    ],

    challengePairs: [
      {
        challenge: "여러 도메인(채용 공고 · 지원 이력 · 면접/과제 일정) 간 데이터 연동 설계",
        solution: "API와 서비스 분리 + 컬렉션 관계 조회 로직 정리",
      },
      {
        challenge: "마감·일정 D-day 계산과 상태별 필터/정렬 로직 구현",
        solution: "날짜 유틸/상태 enum 기반으로 필터·정렬 로직 통합",
      },
      {
        challenge: "배포 과정에서 Next.js 보안 취약 버전으로 인한 Vercel 빌드 실패 대응",
        solution: "Next.js 패치 버전으로 업데이트 및 lockfile 반영 후 재배포로 배포 안정화",
      },
    ],
  },
];
