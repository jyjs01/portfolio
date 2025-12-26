import React from "react";
import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/src/types/Project";
import { toneIconBoxClass } from "@/src/utils/tone";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
      {children}
    </span>
  );
}

export function InfoCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: Project["tone"];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={[
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
            toneIconBoxClass(tone),
          ].join(" ")}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-500">{label}</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
      </span>
      <p className="text-sm font-medium text-slate-800">{text}</p>
    </div>
  );
}

export function SoftCard({
  tone,
  icon,
  text,
}: {
  tone: "danger" | "success";
  icon: React.ReactNode;
  text: string;
}) {
  const cls =
    tone === "danger"
      ? "border-rose-200 bg-rose-50 text-rose-900"
      : "border-emerald-200 bg-emerald-50 text-emerald-900";

  const iconCls =
    tone === "danger"
      ? "bg-rose-100 text-rose-700"
      : "bg-emerald-100 text-emerald-700";

  return (
    <div className={`flex items-start gap-3 rounded-2xl border px-5 py-4 ${cls}`}>
      <span className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full ${iconCls}`}>
        {icon}
      </span>
      <p className="text-sm font-semibold leading-relaxed">{text}</p>
    </div>
  );
}
