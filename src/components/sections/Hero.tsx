"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Mail, Github, MapPin, ArrowDown } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      setShowArrow(window.scrollY <= 10);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToId = (id: "projects" | "contact") => {
  // 다른 페이지면 먼저 홈으로 이동한 뒤 스크롤
  if (pathname !== "/") {
    sessionStorage.setItem("pendingScrollId", id);
    router.push("/");
    return;
  }

  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

  useEffect(() => {
    // 홈으로 온 직후 pending scroll 처리
    if (pathname !== "/") return;
    const id = sessionStorage.getItem("pendingScrollId") as "projects" | "contact" | null;
    if (!id) return;

    sessionStorage.removeItem("pendingScrollId");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return (
    <section className="relative min-h-screen bg-white">
      <Container className="flex min-h-[92vh] flex-col items-center justify-center py-16 text-center">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
          JY
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          안녕하세요,
          <br />
          <span className="text-slate-900">프론트엔드 개발자 </span>
          <span className="text-emerald-600">염재영</span>입니다
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 지향합니다. <br />
          새로운 기술을 배우고 적용하는 것을 즐기며, 끊임없이 성장하는 개발자가 되고자 합니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>duawodud12@naver.com</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Link href={"https://github.com/jyjs01"} className="flex flex-row">
              <Github className="mr-1 h-4 w-4" />
              <span>github.com/jyjs01</span>
            </Link>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>인천, 대한민국</span>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Button onClick={() => scrollToId("projects")}>프로젝트 보기</Button>
          <Button variant="outline" onClick={() => scrollToId("contact")}>
            연락하기
          </Button>
        </div>
      </Container>

      {showArrow && (
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400">
          <ArrowDown
            className="h-15 w-10 animate-bounce motion-reduce:animate-none"
            style={{ animationDuration: "0.65s" }}
          />
        </div>
      )}
    </section>
  );
}
