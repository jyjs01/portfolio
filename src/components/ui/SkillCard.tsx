import Card from "@/src/components/ui/Card";
import type { SkillItem } from "@/src/types/SkillItem";

function SkillRow({ item }: { item: SkillItem }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
        {item.icon}
      </div>
      <p className="text-sm font-medium text-slate-900">{item.label}</p>
    </div>
  );
}

export default function SkillCard({
  title,
  items,
  className = "",
}: {
  title: string;
  items: SkillItem[];
  className?: string;
}) {
  return (
    <Card className={`p-7 ${className}`}>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <div className="mt-5 grid gap-4">
        {items.map((s) => (
          <SkillRow key={s.label} item={s} />
        ))}
      </div>
    </Card>
  );
}