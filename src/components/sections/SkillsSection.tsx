import Container from "@/src/components/ui/Container";
import SkillCard from "../ui/SkillCard";
import { skills } from "@/src/data/Skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            기술 스택
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SkillCard title="Web" items={skills.web} />
          <SkillCard title="Mobile" items={skills.mobile} />
          <SkillCard title="Database" items={skills.db} />
          <SkillCard title="Server" items={skills.server} />

          <SkillCard
            title="Tools / Others"
            items={skills.tools}
            className="md:col-span-2 xl:col-span-4"
          />
        </div>
      </Container>
    </section>
  );
}
