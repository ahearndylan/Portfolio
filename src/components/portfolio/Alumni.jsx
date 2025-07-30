import React from "react";

const Alumni = ({ onBack }) => {
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

        <h1 className="text-4xl font-bold mb-8 text-center">Alumni App Project</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/2.png"
            alt="Alumni App Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              The Alumni App is designed to connect Clark University students with alumni for career-related activities like resume reviews, mock interviews, and mentorship opportunities. Alumni can engage with students and offer support based on their expertise and roles, fostering stronger professional connections within the Clark community.
            </p>
            <p><strong>Technologies Used:</strong> Django, Python, PostgreSQL, HTML, CSS, JavaScript, Git</p>
            <p>
              <strong>Hosted Project:</strong>{" "}
              <a
                href="https://alumniapp.onrender.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the hosted project on Render
              </a>
            </p>
            <p>
              <strong>Project Repository:</strong>{" "}
              <a
                href="https://github.com/ahearndylan/AlumniApp"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the project on GitHub
              </a>
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="mb-4">
            The Alumni App aims to facilitate mentorship and career guidance by allowing students to reach out to alumni for professional assistance. Alumni can select the requests they want to engage with, helping students grow their professional network and improve their career readiness.
          </p>
          <p>
            The app is currently hosted for free on Render, with a PostgreSQL database set up for managing user data and interactions. Future updates will focus on improving the user interface (UI), enhancing mobile responsiveness, and expanding the app’s functionality to improve usability for both students and alumni.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>User Registration & Authentication:</strong> Students and alumni can register, log in, and manage their profiles.</li>
            <li><strong>Request System:</strong> Students submit career-related requests, and alumni choose which to respond to.</li>
            <li><strong>Mentorship Opportunities:</strong> Alumni offer guidance based on experience and interest.</li>
            <li><strong>PostgreSQL Database Integration:</strong> Data is securely stored and managed via PostgreSQL hosted on Render.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Set up Django apps for users, requests, and alumni interactions.</li>
            <li>Integrated user registration and authentication features.</li>
            <li>Deployed the app on Render with a PostgreSQL database.</li>
            <li>Developed the request system for student-alumni engagement.</li>
            <li>Continued improving UI design and mobile responsiveness.</li>
          </ol>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Collaborate with alumni to refine features and gather feedback.</li>
            <li>Enhance UI layout and design to improve usability.</li>
            <li>Ensure full mobile responsiveness across all devices.</li>
            <li>Continue improving functionality based on user feedback.</li>
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

export default Alumni;
