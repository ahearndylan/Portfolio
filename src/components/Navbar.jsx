import React from "react";

const Navbar = ({ setSelectedProject }) => {
  const handleNavClick = (sectionId) => {
    setSelectedProject(null); // Exit project view if open
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide">Dylan Ahearn</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <button onClick={() => handleNavClick("hero")} className="hover:text-indigo-400 transition">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("about")} className="hover:text-indigo-400 transition">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("projects")} className="hover:text-indigo-400 transition">
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("resume")} className="hover:text-indigo-400 transition">
              Resume
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick("contact")} className="hover:text-indigo-400 transition">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
