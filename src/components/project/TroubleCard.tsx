import Image from "next/image";
import { AlertCircle, Sparkles, GraduationCap } from "lucide-react";

function TextBlock({ text }: { text: string }) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
      {text}
    </p>
  );
}

export default function TroubleCard({
  item,
}: {
  item: {
    background: string;
    solutionDetail: string;
    compare?: {
      before: { src: string; alt: string; caption?: string };
      after: { src: string; alt: string; caption?: string };
    };
    learnings: string[];
  };
}) {
  const background = item.background;
  const solution = item.solutionDetail;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* 문제 배경 */}
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-700">
          <AlertCircle className="h-4 w-4" />
        </span>
        <h3 className="text-base font-extrabold text-slate-900">문제 배경</h3>
      </div>
      <TextBlock text={background} />

      {/* 원인 및 해결 */}
      <div className="mt-6 flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-700">
          <Sparkles className="h-4 w-4" />
        </span>
        <h3 className="text-base font-extrabold text-slate-900">원인 및 해결</h3>
      </div>
      <TextBlock text={solution} />

      {/* 이전과 비교 (옵션) */}
      {item.compare && (
        <div className="mt-8">
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-16/10 w-full">
                <Image src={item.compare.before.src} alt={item.compare.before.alt} fill className="object-contain p-3" />
              </div>
              {item.compare.before.caption && (
                <p className="border-t border-slate-200 px-4 py-3 text-xs text-center font-medium text-slate-600">
                  {item.compare.before.caption}
                </p>
              )}
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-16/10 w-full">
                <Image src={item.compare.after.src} alt={item.compare.after.alt} fill className="object-contain p-3" />
              </div>
              {item.compare.after.caption && (
                <p className="border-t border-slate-200 px-4 py-3 text-xs text-center font-medium text-slate-600">
                  {item.compare.after.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 알게 된 점 (옵션) */}
      {item.learnings?.length ? (
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <GraduationCap className="h-4 w-4" />
            </span>
            <h3 className="text-base font-extrabold text-slate-900">해당 경험을 통해 알게된 점</h3>
          </div>

          <ul className="mt-3 space-y-2">
            {item.learnings.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}