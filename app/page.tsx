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

      <div id="contact">
      </div>
    </main>
  );
}
