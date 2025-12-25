import Hero from "@/src/components/sections/Hero";
import ProjectsSection from "@/src/components/sections/ProjectsSection";
import ContactSection from "@/src/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
