import type { Project } from "@/src/types/Project";

export function toneClass(tone?: Project["tone"]) {
  switch (tone) {
    case "2":
      return "bg-gradient-to-br from-amber-50 to-white";
    case "3":
      return "bg-gradient-to-br from-violet-50 to-white";
    case "1":
    default:
      return "bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50";
  }
}

export function toneIconBoxClass(tone?: Project["tone"]) {
  switch (tone) {
    case "2":
      return "bg-amber-50 text-amber-700";
    case "3":
      return "bg-violet-50 text-violet-700";
    case "1":
    default:
      return "bg-slate-50 text-emerald-700";
  }
}

export function tonePageBg(tone?: Project["tone"]) {
  switch (tone) {
    case "2":
      return "bg-linear-to-b from-amber-50 via-white to-white";
    case "3":
      return "bg-linear-to-b from-violet-50 via-white to-white";
    case "1":
    default:
      return "bg-linear-to-b from-slate-300 via-white to-white";
  }
}