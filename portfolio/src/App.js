import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./pages/Hero";
import { AboutSection } from "./pages/About";
import { SkillsSection } from "./pages/Skills";
import { ProjectsSection } from "./pages/Projects";
import { BlogsSection } from "./pages/Blogs";
import { ContactSection } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0b] min-h-screen text-white">
      <Navbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="blogs">
          <BlogsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;