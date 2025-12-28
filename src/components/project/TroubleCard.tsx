"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AlertCircle, Sparkles, GraduationCap, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { TroubleImage, CompareSet } from "@/src/types/DetailProject";

type Shot = { src: string; alt: string; caption?: string; label?: string; setTitle?: string };

function TextBlock({ text }: { text: string }) {
  return <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{text}</p>;
}

export default function TroubleCard({
  item,
}: {
  item: { background: string; solutionDetail: string; images?: TroubleImage[]; compare?: CompareSet[]; learnings: string[] };
}) {
  const images = useMemo(() => item.images ?? [], [item.images]);

  const compareSets = useMemo(() => {
    const raw = item.compare;
    return Array.isArray(raw) ? raw : raw ? [raw] : [];
  }, [item.compare]);

  const imageShots: Shot[] = useMemo(
    () =>
      images.map((img) => ({
        src: img.src,
        alt: img.alt,
        caption: img.caption,
        label: "이미지",
      })),
    [images]
  );

  const compareShots: Shot[] = useMemo(() => {
    const out: Shot[] = [];
    for (const set of compareSets) {
      out.push({ src: set.before.src, alt: set.before.alt, caption: set.before.caption, label: "이전", setTitle: set.title });
      out.push({ src: set.after.src, alt: set.after.alt, caption: set.after.caption, label: "이후", setTitle: set.title });
    }
    return out;
  }, [compareSets]);

  const [open, setOpen] = useState(false);
  const [gallery, setGallery] = useState<"images" | "compare">("images");
  const [idx, setIdx] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);

  const shots = gallery === "images" ? imageShots : compareShots;
  const hasMany = shots.length > 1;

  const openImagesAt = (i: number) => {
    setGallery("images");
    setIdx(i);
    setOpen(true);
  };

  const openCompareAt = (i: number) => {
    setGallery("compare");
    setIdx(i);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = () => setIdx((cur) => (cur - 1 + shots.length) % shots.length);
  const next = () => setIdx((cur) => (cur + 1) % shots.length);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (!hasMany) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, hasMany, shots.length, gallery]);

  useEffect(() => {
    if (!open) return;
    if (!shots[idx]) return;

    setImgLoading(true);

    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    preload(shots[idx].src);

    if (hasMany) {
      preload(shots[(idx + 1) % shots.length].src);
      preload(shots[(idx - 1 + shots.length) % shots.length].src);
    }
  }, [open, idx, hasMany, shots]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-700">
          <AlertCircle className="h-4 w-4" />
        </span>
        <h3 className="text-base font-extrabold text-slate-900">문제 배경</h3>
      </div>
      <TextBlock text={item.background} />

      <div className="mt-6 flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-700">
          <Sparkles className="h-4 w-4" />
        </span>
        <h3 className="text-base font-extrabold text-slate-900">원인 및 해결</h3>
      </div>
      <TextBlock text={item.solutionDetail} />

      {images.length ? (
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {images.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => openImagesAt(i)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left cursor-zoom-in"
                aria-label={`${img.alt} 확대 보기`}
              >
                <div className="relative aspect-16/10 w-full">
                  <Image src={img.src} alt={img.alt} fill className="object-contain transition-transform duration-300 group-hover:scale-[1.01]" sizes="(min-width: 768px) 520px, 90vw" />
                </div>
                {img.caption && (
                  <p className="border-t border-slate-200 px-4 py-3 text-center text-xs font-medium text-slate-600">{img.caption}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {compareSets.length ? (
        <div className="mt-8 space-y-6">
          {compareSets.map((set, setIdx) => {
            const base = setIdx * 2;
            return (
              <div key={setIdx}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => openCompareAt(base)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left cursor-zoom-in"
                    aria-label="이전 이미지 확대 보기"
                  >
                    <div className="relative aspect-16/10 w-full">
                      <Image src={set.before.src} alt={set.before.alt} fill className="object-contain transition-transform duration-300 group-hover:scale-[1.01]" sizes="(min-width: 768px) 520px, 90vw" />
                    </div>
                    <p className="border-t border-slate-200 px-4 py-3 text-center text-xs font-medium text-slate-600">{set.before.caption ?? "이전"}</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => openCompareAt(base + 1)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left cursor-zoom-in"
                    aria-label="이후 이미지 확대 보기"
                  >
                    <div className="relative aspect-16/10 w-full">
                      <Image src={set.after.src} alt={set.after.alt} fill className="object-contain transition-transform duration-300 group-hover:scale-[1.01]" sizes="(min-width: 768px) 520px, 90vw" />
                    </div>
                    <p className="border-t border-slate-200 px-4 py-3 text-center text-xs font-medium text-slate-600">{set.after.caption ?? "이후"}</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

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

      {shots.length > 0 && (
        <Dialog open={open} onClose={close} className="relative z-50">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <DialogTitle className="text-sm font-semibold text-slate-900">
                  {shots[idx]?.setTitle ? `${shots[idx].setTitle} · ` : ""}
                  {shots[idx]?.label ? `${shots[idx].label} · ` : ""}
                  {idx + 1} / {shots.length}
                  {shots[idx]?.caption ? ` · ${shots[idx].caption}` : ""}
                </DialogTitle>

                <button type="button" onClick={close} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50" aria-label="닫기">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative h-[70vh] w-full bg-slate-50">
                {open && shots[idx] && (
                  <>
                    {imgLoading && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">로딩 중...</div>
                      </div>
                    )}

                    <Image
                      src={shots[idx].src}
                      alt={shots[idx].alt}
                      fill
                      className="object-contain p-6"
                      sizes="100vw"
                      priority
                      onLoadingComplete={() => setImgLoading(false)}
                      onError={() => setImgLoading(false)}
                    />
                  </>
                )}

                {hasMany && (
                  <>
                    <button type="button" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-md hover:bg-white" aria-label="이전">
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button type="button" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-md hover:bg-white" aria-label="다음">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="border-t border-slate-200 px-4 py-3">
                <p className="text-xs text-slate-500">ESC로 닫기 · {hasMany ? "←/→로 이동 · " : ""}바깥 클릭으로 닫기</p>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
