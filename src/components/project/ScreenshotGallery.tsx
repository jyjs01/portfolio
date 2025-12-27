"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Shot = {
  src: string;
  thumbSrc?: string;
  alt: string;
  span?: string; // "md:col-span-2"
};

export default function ScreenshotGallery({ screenshots }: { screenshots: Shot[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // 썸네일 로딩 상태 (index별)
  const [thumbLoaded, setThumbLoaded] = useState<Record<number, boolean>>({});

  // 모달 메인 이미지 로딩 상태
  const [mainLoading, setMainLoading] = useState(false);

  const stripRef = useRef<HTMLDivElement | null>(null);

  const hasMany = screenshots.length > 1;

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setIdx((cur) => (cur - 1 + screenshots.length) % screenshots.length);
  const next = () => setIdx((cur) => (cur + 1) % screenshots.length);

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
  }, [open, hasMany, screenshots.length]);

  // 모달 열리거나 idx 바뀔 때마다 로딩 UI 다시 표시
  useEffect(() => {
    if (!open) return;
    setMainLoading(true);
  }, [open, idx]);

  return (
    <>
      {/* 썸네일 리스트 */}
      <div
        ref={stripRef}
        className="mt-7 overflow-x-auto pb-2"
        onWheel={(e) => {
          const el = stripRef.current;
          if (!el) return;

          if (el.scrollWidth <= el.clientWidth) return;

          // 일반 휠(세로) 입력을 가로 이동으로 변환
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();

            // 감도
            const sensitivity = 3;

            el.scrollBy({
              left: e.deltaY * sensitivity,
              behavior: "smooth",
            });
          }
        }}
        style={{ overscrollBehaviorY: "contain" }}
      >
        <div className="flex gap-5 snap-x snap-mandatory">
          {screenshots.map((s, i) => {
            const loaded = !!thumbLoaded[i];

            return (
              <button
                key={`${s.src}-${i}`}
                type="button"
                onClick={() => openAt(i)}
                className={[
                  "group shrink-0 snap-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
                  "text-left cursor-pointer",
                  "w-[320px] sm:w-105 md:w-130",
                ].join(" ")}
                aria-label={`${s.alt} 확대 보기`}
              >
                <div className="relative aspect-16/10 w-full bg-slate-50">
                  {/* 로딩 UI (썸네일) */}
                  {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-full animate-pulse bg-slate-100" />
                      <div className="absolute flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-xs text-slate-600 shadow-sm">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
                        로딩중…
                      </div>
                    </div>
                  )}

                  <Image
                    src={s.thumbSrc ?? s.src}
                    alt={s.alt}
                    fill
                    className={[
                      "object-contain p-4 transition-transform duration-300 group-hover:scale-[1.01]",
                      loaded ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    sizes="(min-width: 768px) 520px, 90vw"
                    onLoadingComplete={() =>
                      setThumbLoaded((prev) => ({ ...prev, [i]: true }))
                    }
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 모달 */}
      <Dialog open={open} onClose={close} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* 상단바 */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <DialogTitle className="text-sm font-semibold text-slate-900">
                {idx + 1} / {screenshots.length} · {screenshots[idx]?.alt}
              </DialogTitle>

              <button
                type="button"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm cursor-pointer hover:bg-slate-50"
                aria-label="닫기"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* 이미지 영역 */}
            <div className="relative h-[70vh] w-full bg-slate-50">
              {/* 로딩 UI (모달 메인) */}
              {open && mainLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="absolute inset-0 animate-pulse bg-slate-100" />
                  <div className="relative flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-md">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-800" />
                    이미지 불러오는 중…
                  </div>
                </div>
              )}

              {open && (
                <Image
                  src={screenshots[idx].src}
                  alt={screenshots[idx].alt}
                  fill
                  className={["object-contain p-6", mainLoading ? "opacity-0" : "opacity-100"].join(" ")}
                  sizes="100vw"
                  priority
                  onLoadingComplete={() => setMainLoading(false)}
                />
              )}

              {hasMany && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-md cursor-pointer hover:bg-white"
                    aria-label="이전"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-slate-900 shadow-md cursor-pointer hover:bg-white"
                    aria-label="다음"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* 하단 안내 */}
            <div className="border-t border-slate-200 px-4 py-3">
              <p className="text-xs text-slate-500">
                ESC로 닫기 · {hasMany ? "←/→로 이동 · " : ""}바깥 클릭으로 닫기
              </p>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
