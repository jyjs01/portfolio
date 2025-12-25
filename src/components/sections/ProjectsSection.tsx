import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import Container from "@/src/components/ui/Container";
import Card from "@/src/components/ui/Card";
import Badge from "@/src/components/ui/Badge";
import Button from "@/src/components/ui/Button";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  imageSrc: string;
  detailHref: string;
  githubHref: string;
  tone?: "mint" | "cream" | "mint2";
};

const projects: Project[] = [
  {
    title: "이커머스 쇼핑몰 프로젝트",
    desc:
      "React와 TypeScript를 활용한 반응형 쇼핑몰 웹사이트입니다. 상품 목록, 장바구니, 결제 기능을 구현했으며 사용자 친화적인 UI/UX를 제공합니다.",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS", "REST API"],
    imageSrc: "/projects/project-1.png",
    detailHref: "/projects/1",
    githubHref: "https://github.com/developer",
    tone: "mint",
  },
  {
    title: "날씨 정보 대시보드",
    desc:
      "실시간 날씨 API를 연동하여 주요 도시의 날씨 정보를 제공하는 대시보드입니다. 차트 시각화와 위치 기반 기능, 5일 예보를 구현했습니다.",
    tags: ["React", "Chart.js", "Weather API", "Geolocation", "CSS3"],
    imageSrc: "/projects/project-2.png",
    detailHref: "/projects/2",
    githubHref: "https://github.com/developer",
    tone: "cream",
  },
  {
    title: "할 일 관리 애플리케이션",
    desc:
      "드래그 앤 드롭으로 작업 순서를 변경하고, 카테고리/우선순위를 관리할 수 있는 투두 앱입니다. LocalStorage 영속성과 다크모드를 지원합니다.",
    tags: ["React", "DnD Kit", "LocalStorage", "Dark Mode", "Responsive"],
    imageSrc: "/projects/project-3.png",
    detailHref: "/projects/3",
    githubHref: "https://github.com/developer",
    tone: "mint2",
  },
];

function toneClass(tone?: Project["tone"]) {
  if (tone === "cream") return "bg-amber-50";
  return "bg-emerald-50";
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">프로젝트</h2>
          <p className="mt-3 text-sm text-slate-500">제가 진행한 주요 프로젝트들입니다</p>
        </div>

        <div className="mt-12 space-y-10">
          {projects.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <Card key={p.title} className={`overflow-hidden ${toneClass(p.tone)}`}>
                <div className={`grid min-h-90 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* Text */}
                  <div className="p-8 md:p-10">
                    <div className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700">
                      프로젝트 {idx + 1}
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold text-slate-900">{p.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{p.desc}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      <Link href={p.detailHref}>
                        <Button>자세히 보기 →</Button>
                      </Link>

                      <a href={p.githubHref} target="_blank" rel="noreferrer">
                        <Button variant="outline" leftIcon={<Github className="h-4 w-4" />}>
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative min-h-65 bg-white/40">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
