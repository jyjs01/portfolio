import { LayoutGrid, MapPinned, Server, Cpu, PenTool, Dot } from "lucide-react";
import { WorkSection } from "@/src/types/DetailProject";

function SectionIcon({ kind }: { kind?: WorkSection["icon"] }) {
  const cls = "h-4 w-4 text-slate-700";
  switch (kind) {
    case "ui":
      return <LayoutGrid className={cls} />;
    case "map":
      return <MapPinned className={cls} />;
    case "server":
      return <Server className={cls} />;
    case "api":
      return <Cpu className={cls} />;
    case "design":
      return <PenTool className={cls} />;
    default:
      return <Dot className={cls} />;
  }
}

export default function WorkSectionsCard({ sections }: { sections: WorkSection[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
      <div className="space-y-7">
        {sections.map((sec) => (
          <div key={sec.title}>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                <SectionIcon kind={sec.icon} />
              </span>
              <h3 className="text-sm font-bold text-slate-900">{sec.title}</h3>
            </div>

            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 break-keep wrap-anywhere">
              {sec.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}