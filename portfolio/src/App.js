import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./pages/Hero";
import { AboutSection } from "./pages/About";
import { SkillsSection } from "./pages/Skills";
import { ProjectsSection } from "./pages/Projects";
import { ContactSection } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { BlogsSection } from "./pages/Blogs";

function App() {
  return (
    <div className="bg-[#0a0a0b] min-h-screen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;