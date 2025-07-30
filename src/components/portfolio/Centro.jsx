import React from "react";

const Centro = ({ onBack }) => {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <br />
<br></br>
        <button
          className="mb-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onBack}
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center">Centro Non-Profit Project</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/CENTRO.jpg"
            alt="Centro Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              This project focused on modernizing the digital presence of Centro, a non-profit
              organization serving the Worcester community. The completed redesign introduced a more
              user-friendly interface, improved functionality, and mobile responsiveness to enhance
              user engagement and accessibility for those seeking to connect with the organization.
            </p>
            <p><strong>Technologies Used:</strong> Django, Python, HTML, CSS, JavaScript, NGINX, Docker, Git.</p>
            <p>
              <strong>Live Website:</strong>{" "}
              <a
                href="https://centroinc.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CENTRO Inc.
              </a>
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Centro</h2>
          <p className="mb-4">
            Established in 1977, Centro is the largest minority-led, community-based, multiservice,
            multicultural, and multilingual nonprofit organization in Central Massachusetts. The
            organization’s mission is to help individuals and families achieve self-sufficiency while
            promoting social responsibility and fostering cultural identity.
          </p>
          <p>
            Centro provides a wide range of services, including health, behavioral, and social
            services, to over 24,000 people annually from diverse backgrounds, including Latino,
            African, Asian, and Middle Eastern communities.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Redesign the existing website with a focus on improved user experience and accessibility.</li>
            <li>Ensure full mobile responsiveness for a seamless experience across all devices.</li>
            <li>
              Integrate modern features, such as online donations and interactive forms for volunteers and
              community members to get involved more easily.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Outcomes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              A modern, intuitive website that improves community access to Centro’s services.
            </li>
            <li>
              Stronger engagement with volunteers, donors, and the wider community through enhanced
              digital tools.
            </li>
            <li>
              An easy-to-maintain content system that enables Centro staff to manage and update the
              site independently, ensuring long-term usability.
            </li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Developing a community forum for users to share experiences, ask questions, and give
              feedback.
            </li>
            <li>
              Expanding integration with social media platforms to improve outreach and visibility.
            </li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>If you have any questions about this project or would like to connect, feel free to reach out:</p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Email:</strong> dahearn2021@gmail.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Centro;
