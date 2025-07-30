import React, { useState } from "react";

const Navbar = ({ setSelectedProject }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setSelectedProject(null);
    setMenuOpen(false); 
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="flex items-center space-x-3">
          <img
            src="/logo2.PNG"
            alt="DA Logo"
            className="h-14 w-auto object-contain"
          />
          <h1 className="text-xl font-bold tracking-wide">Dylan Ahearn</h1>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><button onClick={() => handleNavClick("hero")} className="hover:text-indigo-400 transition">Home</button></li>
          <li><button onClick={() => handleNavClick("about")} className="hover:text-indigo-400 transition">About</button></li>
          <li><button onClick={() => handleNavClick("projects")} className="hover:text-indigo-400 transition">Portfolio</button></li>
          <li><button onClick={() => handleNavClick("resume")} className="hover:text-indigo-400 transition">Resume</button></li>
          <li><button onClick={() => handleNavClick("contact")} className="hover:text-indigo-400 transition">Contact</button></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-white">
            <li><button onClick={() => handleNavClick("hero")} className="hover:text-indigo-400 transition">Home</button></li>
            <li><button onClick={() => handleNavClick("about")} className="hover:text-indigo-400 transition">About</button></li>
            <li><button onClick={() => handleNavClick("projects")} className="hover:text-indigo-400 transition">Portfolio</button></li>
            <li><button onClick={() => handleNavClick("resume")} className="hover:text-indigo-400 transition">Resume</button></li>
            <li><button onClick={() => handleNavClick("contact")} className="hover:text-indigo-400 transition">Contact</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
