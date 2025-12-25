import Hero from "@/src/components/sections/Hero";
import SkillsSection from "@/src/components/sections/SkillsSection";
import ProjectsSection from "@/src/components/sections/ProjectsSection";
import ContactSection from "@/src/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
