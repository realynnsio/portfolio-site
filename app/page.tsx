import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechstackSection from "./components/TechstackSection";

export default function Home() {
  return (
    <main>
      <div id="top" /> {/* Anchor for the top of the page */}
      <Navbar />
      <HeroSection />
      <div id="about" className="mx-auto w-full h-9/10">
        <AboutSection />
      </div>

      <div className="mx-auto w-full h-fit">
        <TechstackSection />
      </div>

      <div id="projects" className="mx-auto w-full h-9/10">
        <ProjectSection />
      </div>

      {/* use container class when putting in content */}
      <div id="contact" className="mx-auto w-full h-screen bg-amber-300">
        <h2 className="text-2xl font-bold mb-4">Content Section 3</h2>
        <p>This is the third content section. You can customize it as needed.</p>
      </div>
    </main>
  );
}
