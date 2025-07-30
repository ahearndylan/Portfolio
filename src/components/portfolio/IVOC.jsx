import React from "react";

const IVOC = ({ onBack }) => {
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

        <h1 className="text-4xl font-bold mb-2 text-center">IVOC Nonprofit Website Project</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/IVOCproject.png"
            alt="IVOC Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              I developed and maintained a Django-based website for the IVOC nonprofit organization, enhancing online engagement and streamlining operations. This project was part of an internship for which I received the Barth Internship Award.
            </p>
            <p><strong>Award Received:</strong> Barth Internship Award</p>
            <p><strong>Technologies Used:</strong> Django, Python, HTML, CSS, JavaScript, NGINX, Docker, Git</p>
            <p><strong>Live Website:</strong>{" "}
              <a
                href="https://ivocforyouth.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inner Voice Outer Change
              </a>
            </p>
            <p><strong>GitHub Repository:</strong>{" "}
              <a
                href="https://github.com/ahearndylan/IVOC"
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
            This project is a web application developed for the IVOC nonprofit organization. The website aims to provide information about the organization, its services, and how to get involved. The main features of the website include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Information about IVOC and its mission</li>
            <li>Details about services offered</li>
            <li>Online donation functionality</li>
            <li>User registration and login</li>
            <li>Photo gallery and media content</li>
            <li>Contact and connect with the organization</li>
            <li>Chat bot functionality</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>User-Friendly Interface:</strong> Designed for accessibility and ease of use.</li>
            <li><strong>Responsive Design:</strong> Fully functional on both desktop and mobile devices.</li>
            <li><strong>Secure User Registration:</strong> Uses Django’s built-in authentication system.</li>
            <li><strong>Online Donations:</strong> Integrated a donation system to support the organization.</li>
            <li><strong>Contact Form:</strong> Enables easy connection and communication with the organization.</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>app/:</strong> Contains the Django applications.</li>
            <li><strong>static/:</strong> Static files (CSS, JavaScript, images).</li>
            <li><strong>templates/:</strong> HTML templates for page rendering.</li>
            <li><strong>docker-compose.yml:</strong> Docker Compose configuration.</li>
            <li><strong>Dockerfile:</strong> Docker image build configuration.</li>
            <li><strong>manage.py:</strong> Django’s CLI management tool.</li>
            <li><strong>requirements.txt:</strong> Lists Python dependencies.</li>
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

export default IVOC;
