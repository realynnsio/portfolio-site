import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
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

      <div id="projects" className="mx-auto w-full h-fit">
        <ProjectSection />
      </div>

      <div id="contact" className="mx-auto w-full h-full">
        <ContactSection />
      </div>

      <footer className="bg-gradient-to-r from-cyan-50 from-10% via-white via-70% to-cyan-50 to-100% w-full h-fit pb-8 pt-4">
        <div className="container mx-auto text-center text-dive-200">
          <p>&copy; 2025 Alma Putri Nashrida. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
