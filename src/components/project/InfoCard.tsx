import { Project } from "@/src/types/Project";
import { toneIconBoxClass } from "@/src/utils/tone";

export default function InfoCard({
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