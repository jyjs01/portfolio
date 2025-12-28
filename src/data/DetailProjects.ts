import type { DetailProject } from "@/src/types/DetailProject";

export const DETAIL_PROJECTS: DetailProject[] = [
  // JobTracker
  {
    id: "jobtracker",
    title: "JobTracker",
    description:
      "채용 공고 등록부터 지원 이력, 면접/과제 일정까지 취업 준비 흐름을 한 곳에서 관리하는 서비스입니다. 대시보드와 필터를 통해 마감·일정 D-day를 빠르게 확인하고 준비 과정을 체계적으로 정리할 수 있습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    period: "2025.12.01 - 2025.12.27",
    role: "풀스택 개발",
    team: "개인 프로젝트",
    tone: "1",

    githubUrl: "https://github.com/jyjs01/job_tracker",
    demoUrl: "https://job-tracker-iota-pied.vercel.app/",

    features: [
      "채용 공고 등록 및 관리 (회사/포지션/마감일/URL/메모)",
      "지원 이력 관리 (상태·단계·지원일 기록)",
      "면접/과제 일정 관리 (예정·합격·불합격, 장소/라운드)",
      "마감·일정 D-day 대시보드 요약 (임박 공고/다가오는 일정)",
      "상태/기간 필터 및 회사명 검색",
    ],
    workSections: [
      {
        title: "기획 · 구조 설계",
        icon: "design",
        items: [
          "기능 범위 정의 및 화면 흐름 설계(대시보드/공고/지원/면접)",
          "MongoDB 컬렉션 구조 및 도메인 관계(JobPosting ↔ Application ↔ Interview) 설계",
        ],
      },
      {
        title: "프론트엔드 UI 구현",
        icon: "ui",
        items: [
          "대시보드 요약 카드(임박 공고/다가오는 일정) 및 리스트 화면 구현",
          "상태/기간 필터, 회사명 검색 UI 구성 및 UX 흐름 정리",
          "로딩/에러/빈 상태 처리로 사용 흐름 안정화",
        ],
      },
      {
        title: "API · 서비스 레이어 구현",
        icon: "api",
        items: [
          "Next.js Route Handler(API)로 CRUD 엔드포인트 구성",
          "서비스 레이어 분리로 API 로직과 DB 접근 책임 분리",
          "컬렉션 관계 기반 조회 로직 정리(상세 조회 시 연관 데이터 함께 조회)",
        ],
      },
      {
        title: "비즈니스 로직",
        icon: "etc",
        items: [
          "D-day 계산 유틸 작성 및 상태 enum 기반 필터·정렬 로직 공통화",
          "마감/일정 우선순위 기준 정리로 대시보드 노출 규칙 통일",
        ],
      },
      {
        title: "배포 · 운영",
        icon: "server",
        items: [
          "Vercel 배포 및 환경변수 세팅(MongoDB 연결 포함)",
        ],
      },
    ],


    screenshots: [
      { src: "/jobtracker/JT_dashboard.png", thumbSrc: "/jobtracker/thumbs/JT_dashboard.webp", alt: "스크린샷 1", span: "col-span-1" },
      { src: "/jobtracker/JT_jobpostings.png", thumbSrc: "/jobtracker/thumbs/JT_jobpostings.webp", alt: "스크린샷 2", span: "col-span-1" },
      { src: "/jobtracker/JT_createJobpostings.png", thumbSrc: "/jobtracker/thumbs/JT_createJobpostings.webp", alt: "스크린샷 3", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_jobposting.png", thumbSrc: "/jobtracker/thumbs/JT_Detail_jobposting.webp", alt: "스크린샷 4", span: "col-span-1" },
      { src: "/jobtracker/JT_applications.png", thumbSrc: "/jobtracker/thumbs/JT_applications.webp", alt: "스크린샷 5", span: "col-span-1" },
      { src: "/jobtracker/JT_createApplications.png", thumbSrc: "/jobtracker/thumbs/JT_createApplications.webp", alt: "스크린샷 6", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_applications.png", thumbSrc: "/jobtracker/thumbs/JT_Detail_applications.webp", alt: "스크린샷 7", span: "col-span-1" },
      { src: "/jobtracker/JT_interviews.png", thumbSrc: "/jobtracker/thumbs/JT_interviews.webp", alt: "스크린샷 8", span: "col-span-1" },
      { src: "/jobtracker/JT_createInterviews.png", thumbSrc: "/jobtracker/thumbs/JT_createInterviews.webp", alt: "스크린샷 9", span: "col-span-1" },
      { src: "/jobtracker/JT_Detail_interview.png", thumbSrc: "/jobtracker/thumbs/JT_Detail_interview.webp", alt: "스크린샷 10", span: "col-span-1" },
    ],

    techStack: [
      { title: "Frontend", items: ["Next.js (App Router)", "TypeScript", "axios"] },
      { title: "Backend / DB", items: ["Next.js Route Handlers (API)", "MongoDB"] },
      { title: "Styling", items: ["Tailwind CSS", "lucide-react"] },
      { title: "Validation", items: ["Zod"] },
      { title: "Tools", items: ["Git", "UX Pilot", "VS Code", "Vercel" ] },
    ],

    challengePairs: [
      {
        background:
          "Vercel 배포 중 Next.js 버전 이슈(보안 취약/권장 패치 미적용)로 빌드가 실패했습니다. \n" +
          "로컬에서는 정상 실행되었지만, 배포 환경에서만 빌드 단계에서 에러가 발생해 원인 파악이 필요했습니다.",

        solutionDetail:
          "빌드 로그에서 'Vulnerable version of Next.js detected'와 함께 CVE-2025-66478 안내를 확인했습니다.\n\n" +
          "에러 문구를 검색해본 결과, 원격 코드 실행 취약점이라는 것을 알게 되었습니다.\n" +
          "React 19 버전에 도입된 React Server Components에서, 서버와 클라이언트 간에 데이터를 주고받을 때 검증을 제대로 하지 않는다는 취약점이 발견되었다고 합니다.\n" +
          "실제로 전 세계 클라우드 환경의 약 39%가 이 취약점에 노출되어 있다고 하는 만큼 매우 치명적인 취약점이라고 합니다.\n\n" +
          "배포 시도 당시의 Next.js의 버전이 16.0.5였습니다. \n" +
          "\"npx fix-react2shell-next\" 명령을 통해 보안 패치가 적용된 버전인 16.0.10으로 업데이트했습니다. \n" +
          "마지막으로 재배포하여 빌드 실패를 해결하고 배포를 안정화했습니다.",

        compare: [
          {
            title: "배포 에러",
            before: { src: "/jobtracker/CVE.png", alt: "CVE 에러"},
            after: { src: "/jobtracker/BuildSuccess.png", alt: "빌드 성공" },
          }
        ],

        learnings: [
          "배포 실패 시 로컬과 배포 환경 차이를 고려해 빌드 로그부터 확인하는 습관을 갖게 됨",
          "CVE가 단순 경고가 아니라 배포 차단으로 이어질 수 있어, 보안 패치 적용과 버전 관리가 필수임을 알게 됨",
        ],
      },
    ],
  },

  // CoursePlate
  {
    id: "courseplate",
    title: "CoursePlate",
    description:
      "여행지에서 사용자의 음식 취향을 설문으로 수집하고, 결과를 바탕으로 음식점을 필터링·추천해 코스를 제안하는 모바일 앱입니다. Naver Maps API를 연동해 추천 음식점을 지도에서 확인하고, 리뷰 작성까지 이어지는 흐름을 구현했습니다.",
    tags: ["React Native(Expo)", "Naver Maps API", "Spring", "Flask", "MongoDB"],
    period: "2025.03.04 - 2025.06.10",
    role: "프론트엔드 개발 (FE 50%)",
    team: "4인 팀 프로젝트",
    tone: "2",

    githubUrl: "https://github.com/Course-Plate/CP_Final",

    features: [
      "여행 지역 선택",
      "음식 취향 설문 및 결과 기반 필터링",
      "추천 음식점 지도 마킹 및 코스 추천",
      "리뷰 작성",
    ],
    workSections: [
      {
        title: "UI/UX 기획 · 화면 설계",
        icon: "design",
        items: [
          "Figma로 전체 플로우(지역 선택 → 설문 → 추천 결과/지도 → 리뷰) 설계",
          "화면 컴포넌트 구조를 먼저 정리한 뒤 구현 단계로 연결",
        ],
      },
      {
        title: "홈 · 여행 지역 선택 화면 개발",
        icon: "ui",
        items: [
          "홈 진입 흐름 구성 및 여행 지역 선택 UI 구현",
          "선택 상태 관리 및 설문 화면으로의 전환 UX 정리",
        ],
      },
      {
        title: "취향 설문 화면 개발",
        icon: "ui",
        items: [
          "다단계 설문 UI 구현(선택/다중 선택/다음·이전)",
          "설문 결과를 AsyncStorage에 저장",
        ],
      },
      {
        title: "추천 결과(리스트 · 지도) 화면 개발",
        icon: "map",
        items: [
          "추천 음식점 리스트/코스 결과 UI 구현",
          "추천 결과 화면에 Naver Maps를 포함하고, useRef로 지도 인스턴스를 관리해 마커 표시 로직을 구현",
          "리스트 ↔ 지도 간 선택 상태를 연결해 추천 결과 확인 흐름 개선",
        ],
      },
      {
        title: "서버 연동 · 예외 처리",
        icon: "server",
        items: [
          "REST API 연동(설문 결과 전송, 추천 리스트 조회, 리뷰 작성)",
          "로딩/에러/빈 상태 처리로 사용자 흐름 안정화",
        ],
      },
    ],


    screenshots: [
      { src: "/courseplate/CoursePlate6.png", thumbSrc: "/courseplate/thumbs/CoursePlate6.webp", alt: "스크린샷 1", span: "col-span-1" },
      { src: "/courseplate/CoursePlate7.png", thumbSrc: "/courseplate/thumbs/CoursePlate7.webp", alt: "스크린샷 2", span: "col-span-1" },
      { src: "/courseplate/CoursePlate1.png", thumbSrc: "/courseplate/thumbs/CoursePlate1.webp", alt: "스크린샷 3", span: "col-span-1" },
      { src: "/courseplate/CoursePlate2.png", thumbSrc: "/courseplate/thumbs/CoursePlate2.webp", alt: "스크린샷 4", span: "col-span-1" },
      { src: "/courseplate/CoursePlate3.png", thumbSrc: "/courseplate/thumbs/CoursePlate3.webp", alt: "스크린샷 5", span: "col-span-1" },
    ],
    
    techStack: [
      { title: "Frontend", items: ["React Native(Expo)", "JavaScript", "AsyncStorage", "axios"] },
      { title: "Backend / DB", items: ["Spring", "Flask", "MongoDB"] },
      { title: "Styling", items: ["StyleSheet"] },
      { title: "API", items: ["Naver Maps API", "Naver Search API", "coolSMS"] },
      { title: "Tools", items: ["Git", "IntelliJ IDEA", ] },
    ],

    challengePairs: [
      {
        background:
          "React Native 앱에 Naver Maps API를 연동하는 과정에서 지도가 로드되지 않는 문제가 발생했습니다. \n",

        solutionDetail:
          "관련 이슈를 검색해보니 네이티브 라이브러리 설치와 AndroidManifest/Gradle 설정 등 네이티브 설정이 필요하다는 것을 알게 되었습니다. \n" +
          "하지만 당시 프로젝트 환경에서는 네이티브 설정 파일을 직접 수정할 수 없는 문제가 지속되었습니다. \n\n" +
          "관련 이슈를 검색한 뒤, 현재 개발 환경인 Expo Managed Workflow에서는 필요한 네이티브 설정 적용에 제약이 있다는 점을 확인했습니다. \n" +
          "프로젝트의 현재 워크플로우를 점검한 후 Expo Bare Workflow로 전환했고, 이후 네이티브 라이브러리 설치 및 AndroidManifest/Gradle 설정을 반영하여 지도 로드를 정상화했습니다.",

        compare: [
          {
            title: "네이버 지도 연동 오류",
            before: { src: "/courseplate/rn_navermap.png", alt: "navermap", caption: "Expo Managed 연동 불가(공식 문서)"},
            after: { src: "/courseplate/CoursePlate7.png", alt: "success", caption: "연동 완료"},
          }
        ],

        learnings: [
          "지도 SDK 연동은 네이티브 설정이 필요한 경우가 많아, 요구사항 단계에서 워크플로우(Managed/Bare) 적합성을 먼저 검토해야 함을 알게 됨",
          "에러 로그 → 검색 → 현재 환경(워크플로우/설정) 확인 → 해결 적용의 흐름으로 문제를 좁혀가는 습관을 갖게 됨",
        ],
      },
    ],
  },

  // NoticeCounsel
  {
    id: "noticecounsel",
    title: "NoticeCounsel",
    description:
      "학사 상담을 예약·관리할 수 있는 모바일 앱입니다. 상담 신청/일정 확인 흐름을 단순하게 구성했고, 상담 내용은 요약 기능으로 핵심만 빠르게 확인할 수 있도록 했습니다.",
    tags: ["Android(Java)", "Node.js", "KoBART Summarizer API(Hugging Face)", "MySQL", "Firebase Cloud Messaging"],
    period: "2024.09.02 ~ 2024.12.16",
    role: "풀스택 개발(FE 50%, BE 70%)",
    team: "3인 팀 프로젝트",
    tone: "3",

    githubUrl: "https://github.com/jyjs01/Notice-Counsel",

    features: [
      "상담 예약 및 일정 관리(학생 예약 / 교수 가능 시간 설정·일정 확인)",
      "상담 기록 작성 및 기록 조회",
      "상담 내용 자동 요약(Hugging Face API) 및 요약 결과 저장",
      "이전 상담 요약/기록 내역 조회",
      "공지사항 전달 시스템(관리자 작성 → 전체 학생/교수에게 전달)",
      "푸시 알림 기능(연동 보완 중)",
    ],

    workSections: [
      {
        title: "UI/UX 기획 및 화면 설계",
        icon: "design",
        items: [
          "Figma로 주요 화면 와이어프레임/레이아웃 설계",
        ],
      },
      {
        title: "상담 예약/일정 화면 개발",
        icon: "ui",
        items: [
          "학생: 상담 가능 시간 조회 후 예약 신청 UI 구현",
          "교수: 상담 가능 시간 설정 및 예약 일정 확인 UI 구현",
          "예약 상태(대기/확정/완료)에 따른 화면 분기 처리",
        ],
      },
      {
        title: "상담 기록 및 요약 조회 화면 개발",
        icon: "ui",
        items: [
          "상담 기록 작성/조회 화면 UI 구현",
          "요약 결과 확인 및 이전 요약/기록 내역 조회 UI 구현",
          "목록/상세 화면에서 로딩·빈 상태 UI 처리",
        ],
      },
      {
        title: "공지사항 화면 개발",
        icon: "ui",
        items: [
          "공지사항 목록/상세 UI 구현 및 실시간 확인 흐름 구성",
          "관리자: 공지사항 작성/전달 UI 구현(권한 기반 노출)",
        ],
      },
      {
        title: "백엔드 API 및 DB 연동",
        icon: "api",
        items: [
          "Node.js 기반 REST API 설계 및 CRUD 구현(예약/기록/요약/공지)",
          "MySQL 테이블 설계 및 관계 정리(사용자/예약/기록/요약/공지)",
          "Android 앱에서 Retrofit으로 API 연동 및 에러/로딩 처리",
        ],
      },
      {
        title: "상담 내용 요약 기능 구현",
        icon: "etc",
        items: [
          "KoBART Summarizer 기반 상담 내용 요약 기능 연동",
          "요약 요청/응답 흐름 설계(원문 저장 → 요약 요청 → 결과 저장)",
        ],
      },
    ],

    screenshots: [
      {
        src: "/noticecounsel/NoticeCounsel1.png",
        thumbSrc: "/noticecounsel/thumbs/NoticeCounsel1.webp",
        alt: "NoticeCounsel - 로그인 화면",
        span: "col-span-1",
      },
      {
        src: "/noticecounsel/NoticeCounsel2.png",
        thumbSrc: "/noticecounsel/thumbs/NoticeCounsel2.webp",
        alt: "NoticeCounsel - 상담 예약 화면",
        span: "col-span-1",
      },
      {
        src: "/noticecounsel/NoticeCounsel3.png",
        thumbSrc: "/noticecounsel/thumbs/NoticeCounsel3.webp",
        alt: "NoticeCounsel - 내 예약 목록 화면",
        span: "col-span-1",
      },
      {
        src: "/noticecounsel/NoticeCounsel4.png",
        thumbSrc: "/noticecounsel/thumbs/NoticeCounsel4.webp",
        alt: "NoticeCounsel - 상담 상세/기록 화면",
        span: "col-span-1",
      },
      {
        src: "/noticecounsel/NoticeCounsel5.png",
        thumbSrc: "/noticecounsel/thumbs/NoticeCounsel5.webp",
        alt: "NoticeCounsel - 요약 결과 화면",
        span: "col-span-2",
      },
    ],

    techStack: [
      { title: "Frontend", items: ["Android(Java)", "Retrofit"] },
      { title: "Backend / DB", items: ["Node.js + Express", "axios", "MySQL"] },
      { title: "Styling", items: ["Android XML Layout(Style/Theme)"] },
      { title: "API", items: ["KoBART Summarizer(Hugging Face)", "Firebase Cloud Messaging"] },
      { title: "Tools", items: ["Git", "Slack", "Android Studio", "VS Code"]},
    ],

    challengePairs: [
      {
        background:
          "상담 내용을 API를 통해 요약하면 입력이 길어질수록 반복 문장이 섞이는 문제가 발생했습니다.",
        solutionDetail:
          "요약 결과에서 동일 문장이 여러 번 반복 생성되는 문제가 발생했습니다. \n" + 
          "특히 긴 입력을 여러 번 요청하거나, 모델이 유사한 문장을 재생성할 때 결과가 일정 횟수 반복되어 가독성이 크게 떨어졌습니다. \n\n" +
          "해결을 위해 요약 결과에 후처리 함수를 적용했습니다. \n" +
          "removeDuplicateSentences(text)는 \n" +
          "1) 마침표(.) 기준으로 문장을 분리하고 빈 문장을 제거한 뒤, \n" +
          "2) 이미 나온 문장은 제외하고 처음 등장한 문장만 uniqueSentences 배열에 저장합니다. \n" +
          "3) 마지막으로 uniqueSentences를 다시 “. ”로 이어 붙여 최종 결과를 만들고 끝에 마침표를 붙입니다. \n\n" +
          "이를 통해 같은 문장이 반복돼도 최초 1회만 남기고 제거해 요약 결과의 가독성을 개선했습니다.",
        
        images: [
          { src: "/noticecounsel/removeDuplicate.png", alt: "반복 제거 함수", caption: "반복 제거 함수" }
        ],
        compare: [
          {
            title: "반복 현상 발생",
            before: { src: "/noticecounsel/summarize.png", alt: "반복 문장 출력", caption: "초기 테스트 결과 반복 발생"},
            after: { src: "/noticecounsel/summarize_remove.png", alt: "반복 제거", caption: "함수 적용 후 반복 문장 제거" },
          },
        ],
        
        learnings: [
          "요약 품질은 모델뿐 아니라 입력 데이터의 길이/구조에 크게 영향을 받음.",
          "문제 재현 → 작은 단위 실험 → 점진 적용 방식이 효과적이었음.",
        ],
      },
    ],
  },
];