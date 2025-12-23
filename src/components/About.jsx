import React, { useState } from "react";

const tabs = ["Background", "Work Experience", "Skills"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Background");

  const renderContent = () => {
    switch (activeTab) {
      case "Background":
        return (
          <p className="text-sm sm:text-base">
             I’m a Computer Science graduate from Clark University with experience delivering
             customer-facing software solutions across enterprise and nonprofit environments.
             My background centers on translating business needs into clear workflows, usable
             interfaces, and production-ready systems.
            <br></br>
            <br></br>
            I’ve worked closely with stakeholders, designers, and engineers throughout 
            the full software development lifecycle, participating in discovery, sprint planning, 
            backlog refinement, prototyping, and deployment to deliver practical and scalable
            solutions. Ensuring tools are focused on the end user.
          </p>
        );
      case "Work Experience":
        return (
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>
              Supported <strong>Lincoln Financial Group’s CX & CI teams</strong> by translating
              business needs into user flows, Figma prototypes, and interactive demos across
              the GP, RPS, and Wellness Path customer portals.
            </li>
            <li>
              Partnered with <strong>CENTRO</strong> stakeholders to deliver a tailored Django
              platform, including admin workflows and cost-efficient infrastructure using
              PostgreSQL, NGINX, and DigitalOcean.
            </li>
            <li>
              Co-led development of a full software system for <strong>WeCan LLC</strong>,
              supporting scheduling, redemption tracking, and donations through a web and
              mobile-friendly platform.
            </li>
            <li>
              Built and deployed a custom Django site for <strong>Inner Voice Outer Change (IVOC)</strong>,
              enabling mobile access, donation integration, and non-technical staff content control.
            </li>
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
