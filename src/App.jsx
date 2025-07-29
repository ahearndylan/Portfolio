import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Centro from "./components/portfolio/Centro";
import CKHQ from "./components/portfolio/CKHQ";
import Wecan from "./components/portfolio/Wecan";
import Barcard from "./components/portfolio/Barcard";
import Foodwaste from "./components/portfolio/Foodwaste";
import IVOC from "./components/portfolio/IVOC";
import Pacman from "./components/portfolio/Pacman";
import Game from "./components/portfolio/Game";
import Alumni from "./components/portfolio/Alumni";






const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const handleProjectSelect = (projectName) => {
    setSelectedProject(projectName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setTimeout(() => {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar setSelectedProject={setSelectedProject} />
      {selectedProject === null ? (
        <>
          <Hero />
          <About />
          <div ref={projectsRef}>
            <Projects onSelect={handleProjectSelect} />
          </div>
          <Resume />
          <Contact />
        </>
      ) : selectedProject === "Centro" ? (
        <Centro onBack={handleBack} />
      ) : selectedProject === "CKHQ" ? (
        <CKHQ onBack={handleBack} />
      ) : selectedProject === "Wecan" ? (
        <Wecan onBack={handleBack} />
      ) : selectedProject === "Barcard" ? (
        <Barcard onBack={handleBack} />
      ) : selectedProject === "Foodwaste" ? (
        <Foodwaste onBack={handleBack} />
      ) : selectedProject === "IVOC" ? (
        <IVOC onBack={handleBack} />
      ) : selectedProject === "Pacman" ? (
        <Pacman onBack={handleBack} />
      ) : selectedProject === "Game" ? (
        <Game onBack={handleBack} />
      ) : selectedProject === "Alumni" ? (
        <Alumni onBack={handleBack} />
      ) : null}
      <Footer />
    </div>
  );
};

export default App;
