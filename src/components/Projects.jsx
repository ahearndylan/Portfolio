import React from "react";

const projects = [
  {
    title: "CENTRO Inc. Non-Profit",
    description:
      "Upgrading Centro’s digital footprint with improved UI, enhanced functionality, and a mobile-friendly experience.",
    technologies: "Django, PostgreSQL, HTML, CSS, JavaScript, Bootstrap",
    image: "/CENTRO.jpg",
  },
  {
    title: "Court Kings HQ",
    description:
      "A fully automated NBA stats platform that delivers daily analytics through python bots and a dynamic website.",
    technologies: "Python, HTML, CSS, JavaScript, Supabase, Railway, Tweepy",
    image: "/logo5.png",
  },
  {
    title: "WeCan Mobile Redemption App",
    description:
      "Developed a mobile platform to streamline the redemption of beverage containers through tech-driven services.",
    technologies: "Django, PostgreSQL, HTML, CSS, Android Studio, Figma",
    image: "/WECANproject.png",
  },
  {
    title: "Digital Bar Card Project",
    description:
      "A Django-based project aiming to replace traditional paper-based Bar Cards for Massachusetts lawyers with digital versions.",
    technologies: "Django, Python, SQLite, HTML, CSS, JavaScript, Git",
    image: "/BARCARDproject.png",
  },
  {
    title: "Food Waste Reduction App",
    description:
      "Participated in a hackathon to develop a food waste tracking app for Clark Dining Services with actionable insights.",
    technologies: "ExpressJS, MongoDB, JavaScript, HTML, CSS",
    image: "/FOODWASTEproject.png",
  },
  {
    title: "IVOC Nonprofit Website",
    description:
      "Developed and maintained a Django-based nonprofit site to enhance engagement and streamline operations.",
    technologies: "Django, Python, HTML, CSS, JavaScript, NGINX, Docker, Git",
    image: "/IVOCproject.png",
  },
  {
    title: "Pac-Man Game",
    description:
      "Created a Pac-Man game using algorithms to simulate intelligent behavior and enhance gameplay.",
    technologies: "Python, Pygame, DFS, A* Algorithm, Game Development",
    image: "/PACMANgif.gif",
  },
  {
    title: "Game Platform Project",
    description:
      "Built a platform with multiple custom games like Plinko, Derby, and Memory Match to showcase GUI integration.",
    technologies: "Java, IntelliJ, GUI, Game Development",
    image: "/GAMEPLATFORMproject.png",
  },
  {
    title: "Clark Alumni App",
    description:
      "An app connecting Clark University alumni and students to foster networking and mentorship opportunities.",
    technologies: "Django, PostgreSQL, HTML, CSS, JavaScript, DigitalOcean",
    image: "/2.png",
  },
];

const Projects = ({ onSelect }) => {
  return (
    <section
      id="projects"
      className="bg-gray-200 py-16 px-4 border-t border-gray-200"
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const isCentro = project.title === "CENTRO Inc. Non-Profit";
          const isCKHQ = project.title === "Court Kings HQ";
          const isWecan = project.title === "WeCan Mobile Redemption App";
          const isBarcard = project.title === "Digital Bar Card Project";
          const isFoodwaste = project.title === "Food Waste Reduction App";
          const isIVOC = project.title === "IVOC Nonprofit Website";
          const isPacman = project.title === "Pac-Man Game";
          const isGame = project.title === "Game Platform Project";
          const isAlumni = project.title === "Clark Alumni App";

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <p className="text-sm text-gray-600 font-medium mb-6">
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                onClick={() =>
                  isCentro
                    ? onSelect("Centro")
                    : isCKHQ
                    ? onSelect("CKHQ")
                    : isWecan
                    ? onSelect("Wecan")
                    : isBarcard
                    ? onSelect("Barcard")
                    : isFoodwaste
                    ? onSelect("Foodwaste")
                    : isIVOC
                    ? onSelect("IVOC")
                    : isPacman
                    ? onSelect("Pacman")
                    : isGame
                    ? onSelect("Game")
                    : isAlumni
                    ? onSelect("Alumni")
                    : alert("Learn More Coming Soon")
                }
              >
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
