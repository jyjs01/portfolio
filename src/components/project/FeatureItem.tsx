import { CheckCircle2 } from "lucide-react";

export default function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
      </span>
      <p className="text-sm font-medium text-slate-800">{text}</p>
    </div>
  );
}