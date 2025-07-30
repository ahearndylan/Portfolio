import React from "react";

const Foodwaste = ({ onBack }) => {
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

        <h1 className="text-4xl font-bold mb-2 text-center">Food Waste Reduction Project</h1>
        <h2 className="text-xl font-medium mb-8 text-center">Clark University</h2>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/FOODWASTEproject.png"
            alt="Clark University Dining Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              This project focuses on reducing food waste at Clark University by developing a web application that allows dining services to log and track food waste data. The system aims to help the university minimize waste and improve sustainability efforts.
            </p>
            <p><strong>Technologies Used:</strong> ExpressJS, MongoDB, JavaScript, HTML, CSS, Docker, Git</p>
            <p>
              <strong>GitHub Repository:</strong>{" "}
              <a
                href="https://github.com/ahearndylan/ClarkFoodWasteApp"
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
            The Food Waste Reduction project is a web-based application developed for Clark University Dining Services. The application allows staff to log food waste by category, date, and weight. This data is then used to analyze patterns and implement strategies to reduce overall food waste on campus.
          </p>
          <p>
            This project was developed during a hackathon focused on green initiatives and sustainability, organized by C4 and TIE. It was built with the aim of increasing sustainability on campus, providing real-time data analysis to help dining services make informed decisions.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Food Waste Logging:</strong> Allows staff to log food waste by category, including overproduction, spoilage, and plate waste.</li>
            <li><strong>Real-Time Data Analysis:</strong> Provides immediate insights into waste patterns, helping to identify areas for improvement.</li>
            <li><strong>User Authentication:</strong> Ensures that only authorized staff members can access the system and log data.</li>
            <li><strong>Responsive Design:</strong> Fully accessible on both desktop and mobile devices.</li>
            <li><strong>Data Export:</strong> Allows exporting of food waste data for further analysis and reporting.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Setup and Installation</h2>
          <p className="mb-4">To set up the Food Waste Reduction system locally:</p>
          <p className="mb-2 font-semibold">Prerequisites:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Docker</li>
          </ul>
          <p className="mb-2 font-semibold">Setup Instructions:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>Clone the repository:</strong><br />
              <code>git clone https://github.com/ahearndylan/ClarkFoodWasteApp.git</code><br />
              <code>cd ClarkFoodWasteApp</code>
            </li>
            <li>
              <strong>Install dependencies:</strong><br />
              <code>npm install</code>
            </li>
            <li>
              <strong>Run the application:</strong><br />
              <code>npm start</code>
            </li>
          </ol>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>src/:</strong> Contains the source code for the application, including the server and routes.</li>
            <li><strong>public/:</strong> Contains static assets like CSS, JavaScript, and images.</li>
            <li><strong>views/:</strong> Contains the HTML templates used to render the web pages.</li>
            <li><strong>package.json:</strong> Lists the dependencies and scripts for running the application.</li>
            <li><strong>Dockerfile:</strong> Defines the Docker image configuration for the project.</li>
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

export default Foodwaste;
