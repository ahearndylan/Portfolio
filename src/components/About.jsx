import React, { useState } from "react";

const tabs = ["Background", "Work Experience", "Skills"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Background");

  const renderContent = () => {
    switch (activeTab) {
      case "Background":
        return (
          <p className="text-sm sm:text-base">
            I'm a recent Computer Science graduate from Clark University, where I focused on software engineering,
            web development, and backend systems. My time at Clark was shaped by real-world projects that pushed
            me to build scalable, user-focused solutions. 
            <br></br>
            <br></br>
            Before Clark, I was a student-athlete at Slippery Rock
            University (NCAA Division II), where I deepened my skills in programming and gained hands-on experience
            applying core computer science principles in both academic and personal projects.
          </p>
        );
      case "Work Experience":
        return (
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>
              Supported <strong>Lincoln Financial Group’s CX & CI teams</strong> by creating user flows,
              Figma prototypes, and interactive demos that shaped enhancements across the GP, RPS,
              and Wellness Path customer portals.
            </li>
            <li>
              Partnered with <strong>CENTRO</strong> staff to launch a tailored Django platform, including dynamic
              admin tools and cost-saving infrastructure using PostgreSQL, NGINX, and DigitalOcean.
            </li>
            <li>
              Co-led the development of a full software system for <strong>WeCan LLC</strong>, enabling user scheduling,
              redemption tracking, and nonprofit donations through a web and mobile-friendly platform.
            </li>
            <li>
              Built and deployed a custom Django site for <strong>Inner Voice Outer Change (IVOC)</strong>,
              featuring mobile responsiveness, donation integration, and full staff content control via the admin panel.
            </li>
            <li>
              Contributed to real-world software builds with Clark’s <strong>Software Engineering Team</strong>,
              collaborating with faculty and peers on full lifecycle projects across diverse domains.
            </li>
            <br></br>
          </ul>
        );
      case "Skills":
        return (
          <div className="text-sm sm:text-base">
            <p className="mb-4">
              I’ve built a strong foundation in full-stack development, cloud deployment, and collaborative software design.
              My hands-on experience spans nonprofit systems, internal tools, and client-focused platforms that prioritize usability and scale.
            </p>
            <p>
              <strong>Core Skills:</strong> Python, Django, JavaScript, React, HTML/CSS, SQL, Git, Docker, Agile (Jira), DigitalOcean, AWS
            </p>
            <a
              href="#projects"
              className="inline-block mt-6 bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition"
            >
              EXPLORE MY PROJECTS
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="about" className="bg-gray-100 px-4 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/headshot2.jpg"
            alt="Dylan Ahearn"
            className="w-36 h-auto rounded-lg shadow-md object-cover"
          />
          <h1 className="text-2xl font-bold">Dylan Ahearn</h1>
          <p className="text-gray-600 text-base font-medium">
            Computer Science Graduate from Clark University
          </p>
          <img
            src="/ClarkU.png"
            alt="Clark University"
            className="w-20"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex space-x-4 border-b mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-sm sm:text-base font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

<div className="min-h-80 max-h-80 overflow-y-auto pr-2">
  {renderContent()}
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
