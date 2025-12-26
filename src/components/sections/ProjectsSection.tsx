import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import Container from "@/src/components/ui/Container";
import Card from "@/src/components/ui/Card";
import Badge from "@/src/components/ui/Badge";
import Button from "@/src/components/ui/Button";
import { projects } from "@/src/data/Projects";
import { toneClass } from "@/src/utils/tone";

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
              <Card
                key={p.title}
                className={[
                  "group overflow-hidden border-slate-200",
                  "transition-all duration-300 motion-reduce:transition-none",
                  "hover:-translate-y-1 hover:shadow-lg hover:border-slate-300",
                  toneClass(p.tone),
                ].join(" ")}
              >
                <div
                  className={[
                    "grid min-h-90 md:grid-cols-2",
                    reverse ? "md:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
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

                    <div className="mt-8 flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-px motion-reduce:transition-none">
                      <Link href={`/project/${p.id}`}>
                        <Button>자세히 보기 →</Button>
                      </Link>

                      <a href={p.githubHref} target="_blank" rel="noreferrer">
                        <Button variant="outline" leftIcon={<Github className="h-4 w-4" />}>
                          GitHub
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="relative min-h-65 overflow-hidden bg-white/40">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none">
                      <div className="absolute inset-0 bg-linear-to-tr from-black/0 via-black/0 to-black/10" />
                    </div>

                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-fill transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.04]"
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
