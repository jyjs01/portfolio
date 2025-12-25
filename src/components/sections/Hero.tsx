import Link from "next/link";
import { Mail, Github, MapPin, ArrowDown } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-white">
      <Container className="flex min-h-[92vh] flex-col items-center justify-center py-16 text-center">
        {/* Avatar */}
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

        {/* Contact Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>duawodud12@naver.com</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>github.com/jyjs01</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>인천, 대한민국</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href="#projects">
            <Button>프로젝트 보기</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">연락하기</Button>
          </Link>
        </div>
      </Container>

      {/* Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400">
        <Link href="#skills" aria-label="Scroll to skills">
          <ArrowDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
