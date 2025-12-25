import {
  Atom,
  Code2,
  FileType2,
  Braces,
  Wrench,
  Server,
  Database,
  Cloud,
  GitBranch,
  Github,
  Figma,
} from "lucide-react";
import type { SkillItem, SkillCategoryKey } from "@/src/types/SkillItem";

export const skills: Record<SkillCategoryKey, SkillItem[]> = {
  web: [
    { icon: <Atom className="h-5 w-5 text-sky-500" />, label: "React" },
    { icon: <Code2 className="h-5 w-5 text-slate-900" />, label: "Next.js" },
    { icon: <FileType2 className="h-5 w-5 text-blue-600" />, label: "TypeScript" },
    { icon: <Braces className="h-5 w-5 text-yellow-500" />, label: "JavaScript" },
  ],

  mobile: [
    { icon: <Atom className="h-5 w-5 text-emerald-600" />, label: "React Native" },
    { icon: <Wrench className="h-5 w-5 text-slate-700" />, label: "Android Studio" },
  ],

  db: [
    { icon: <Database className="h-5 w-5 text-green-600" />, label: "MongoDB" },
    { icon: <Database className="h-5 w-5 text-blue-700" />, label: "MySQL" },
  ],

  server: [
    { icon: <Server className="h-5 w-5 text-lime-600" />, label: "Node.js" },
    { icon: <Server className="h-5 w-5 text-slate-900" />, label: "Next.js (API)" },
  ],

  tools: [
    { icon: <GitBranch className="h-5 w-5 text-rose-500" />, label: "Git" },
    { icon: <Github className="h-5 w-5 text-slate-900" />, label: "GitHub" },
    { icon: <Cloud className="h-5 w-5 text-slate-700" />, label: "Vercel" },
    { icon: <Figma className="h-5 w-5 text-purple-500" />, label: "Figma" },
  ],
};