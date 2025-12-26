import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CalendarDays,
  User2,
  Users2,
  Wrench,
  Lightbulb,
  Mail,
} from "lucide-react";
import { DETAIL_PROJECTS } from "@/src/data/DetailProjects";
import { Tag, InfoCard, FeatureItem, SoftCard } from "@/src/components/project/ProjectDetailParts";
import { toneClass, tonePageBg } from "@/src/utils/tone";
import ScreenshotGallery from "@/src/components/project/ScreenshotGallery";

export default async function ProjectDetailPage({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const project = DETAIL_PROJECTS.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <main className={["min-h-screen", tonePageBg(project.tone)].join(" ")}>
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            돌아가기
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-950"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <ExternalLink className="h-4 w-4" />
                라이브 데모
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12">
        {/* 프로젝트 소개 */}
        <section className="pb-12">
          <span className="inline-flex items-center rounded-full px-4 py-2 text-xs font-bold text-slate-800">
            프로젝트 상세
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* 프로젝트 정보 카드 */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <InfoCard tone={project.tone} icon={<CalendarDays className="h-5 w-5" />} label="프로젝트 기간" value={project.period} />
            <InfoCard tone={project.tone} icon={<User2 className="h-5 w-5" />} label="역할" value={project.role} />
            <InfoCard tone={project.tone} icon={<Users2 className="h-5 w-5" />} label="팀 구성" value={project.team} />
          </div>
        </section>

        {/* 메인 이미지 */}
        <section className="pb-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-16/6 w-full">
              <Image src={project.mainImage.src} alt={project.mainImage.alt} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* 주요 기능 */}
        <section className="pb-14">
          <h2 className="text-3xl font-extrabold text-slate-950">주요 기능</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.features.map((f) => (
              <FeatureItem key={f} text={f} />
            ))}
          </div>
        </section>

        {/* 스크린샷 */}
        <section className="pb-14">
          <h2 className="text-3xl font-extrabold text-slate-950">스크린샷</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
            클릭 시 확대
          </p>
          <ScreenshotGallery screenshots={project.screenshots} />
        </section>

        {/* 기술 스택 */}
        <section className="pb-14">
          <h2 className="text-3xl font-extrabold text-slate-950">기술 스택</h2>

          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {project.techStack.map((cat) => (
              <div key={cat.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-slate-950">{cat.title}</h3>
                <ul className="mt-5 space-y-3">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 도전 과제 & 해결 방법 */}
        <section className="pb-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-950">도전 과제</h2>
              <div className="mt-7 space-y-4">
                {project.challengePairs.map((p, idx) => (
                  <SoftCard key={`c-${idx}`} tone="danger" icon={<Wrench className="h-4 w-4" />} text={p.challenge} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-slate-950">해결 방법</h2>
              <div className="mt-7 space-y-4">
                {project.challengePairs.map((p, idx) => (
                  <SoftCard
                    key={`s-${idx}`}
                    tone="success"
                    icon={<Lightbulb className="h-4 w-4" />}
                    text={p.solution}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 하단 연락 섹션 */}
        <section className={["rounded-3xl px-6 py-14 text-center md:px-10",
            toneClass(project.tone)
        ].join(" ")}>
          <h2 className="text-3xl font-extrabold text-slate-950">프로젝트가 마음에 드셨나요?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-slate-700 md:text-base">
            더 많은 프로젝트를 확인하거나 함께 일할 기회를 논의해보세요.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={"/#projects"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-950"
            >
              <ArrowLeft className="h-4 w-4" />
              다른 프로젝트 보기
            </Link>

            <Link
              href={"/#contact"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              <Mail className="h-4 w-4" />
              연락하기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
