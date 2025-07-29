import React from "react";

const CKHQ = ({ onBack }) => {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
                    <br></br>

        <button
          className="mb-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onBack}
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center">Court Kings HQ</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/public/logo5.png"
            alt="Court Kings HQ Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              Court Kings HQ is a full-stack NBA stats platform that delivers real-time analytics via Twitter bots and a dynamic website. The system automates daily stat tracking across key performance categories, including scoring, efficiency, clutch play, and season leaders. Data is fetched, processed, and stored centrally in Supabase and displayed on a modern, mobile-optimized site.
            </p>
            <p><strong>Project Status:</strong> Live and fully functional, with ongoing enhancements and feature expansions planned.</p>
            <p><strong>Live Website:</strong> <a href="https://courtkingshq.onrender.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Court Kings HQ</a></p>
            <p><strong>X Account:</strong> <a href="https://x.com/CourtKingsHQ" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">X Feed @CourtKingsHQ</a></p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="mb-4">
            This platform combines automation, live data syncing, and user-friendly design to offer fans nightly NBA highlights through stats. Bots track and tweet category leaders, while the website reflects the same data in a sleek interface. All components are connected through Supabase and hosted via Render and Railway.
          </p>
          <p>
            Individual pages highlight nightly leaders, season highs, player spotlights, and a live Twitter feed. A terminal-style analytics dashboard adds a technical, system-level feel to the experience.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Automated Twitter Bots:</strong> Python-based bots post daily leaders for scoring, efficiency, clutch performance, season leaders, and NBA trivia.</li>
            <li><strong>Real-Time Stat Syncing:</strong> All data is stored and served from Supabase using JSON tables updated nightly.</li>
            <li><strong>Responsive Website:</strong> Multi-page site built with HTML/CSS/Bootstrap and hosted on Render.</li>
            <li><strong>Terminal-Style Analytics:</strong> Live system logs emulate a data stream to enhance technical depth.</li>
            <li><strong>Player Spotlight:</strong> Daily player bios and images are randomly featured from a full player index.</li>
            <li><strong>Stat Archives:</strong> Each bot has a full archive view of historical leaders via dedicated pages.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Architecture & Stack</h2>
          <p className="mb-4">
            The Court Kings HQ system is built on a serverless architecture using Supabase for data handling and JSON storage, with bots hosted via Railway and the front-end site deployed on Render.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript</li>
            <li><strong>Backend:</strong> Python, Tweepy, Supabase (PostgreSQL)</li>
            <li><strong>Automation:</strong> Cron jobs (Railway Scheduler)</li>
            <li><strong>Hosting:</strong> Render (Website), Railway (Bots)</li>
            <li><strong>Database:</strong> Supabase JSON tables</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Built initial Twitter bots using Tweepy to post stat leaders.</li>
            <li>Integrated Supabase to act as a central data source across bots and frontend.</li>
            <li>Created and styled multi-page HTML website with responsive layout and embedded data fetches.</li>
            <li>Connected bots to Supabase using REST API and cron jobs via Railway.</li>
            <li>Launched the full platform and added advanced features like player spotlight and system logs.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expand bots to include more advanced analytics and real-time comparisons.</li>
            <li>Add user-interactive components such as player lookup and stat filters.</li>
            <li>Implement a mini CMS to allow content updates without code changes.</li>
            <li>Collaborate with other sports projects or content creators to extend reach.</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <p><strong>Technologies Used:</strong> Python, HTML, CSS, JavaScript, Bootstrap, Supabase, Tweepy, JSON, Git, Render, Railway.</p>
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

export default CKHQ;
