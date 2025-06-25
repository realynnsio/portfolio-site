import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div id="top" /> {/* Anchor for the top of the page */}
      <Navbar />
      <HeroSection />
      <div id="about" className="mx-auto w-full h-screen bg-amber-100">
        <h2 className="text-2xl font-bold mb-4">Content Section 1</h2>
        <p>This is the first content section. You can add more details here.</p>
      </div>

      <div id="projects" className="mx-auto w-full h-screen bg-amber-500">
        <h2 className="text-2xl font-bold mb-4">Content Section 2</h2>
        <p>This is the second content section. Feel free to expand it with more information.</p>
      </div>

      {/* use container class when putting in content */}
      <div id="contact" className="mx-auto w-full h-screen bg-amber-300">
        <h2 className="text-2xl font-bold mb-4">Content Section 3</h2>
        <p>This is the third content section. You can customize it as needed.</p>
      </div>
    </main>
  );
}
