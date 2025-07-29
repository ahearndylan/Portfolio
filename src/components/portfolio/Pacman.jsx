import React from "react";

const Pacman = ({ onBack }) => {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <br />

        <button
          className="mb-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onBack}
        >
          ← Back to Projects
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center">Pac-Man Game Project</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/PACMANgif.gif"
            alt="Pac-Man Screenshot"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              This project involves developing a Pac-Man game using various algorithms like Depth-First Search (DFS), A*, and Dijkstra's to manipulate game logic. The project serves as both a practical application of algorithm theory and a demonstration of game development skills.
            </p>
            <p><strong>Technologies Used:</strong> Python, Pygame, DFS, Dijkstra's, A* Algorithm, Game Development</p>
            <p>
              <strong>GitHub Repository:</strong>{" "}
              <a
                href="https://github.com/ChristopherSiems/PacmanAlgExploration"
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
            The Pac-Man game project is a software application developed to simulate the classic Pac-Man arcade game. The project explores the implementation of various search algorithms, such as Depth-First Search (DFS), Dijkstra's, and A*, to control the behavior of PacMan and optimize the gameplay experience.
          </p>
          <p>
            This project not only showcases game development skills but also demonstrates the practical application of complex algorithms in a gaming environment. The project tracks and compares the performance of each algorithm, intending to explore the performance of different ideas for traversal in Pac-Man.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Classic Pac-Man Gameplay:</strong> Recreates the classic experience with maze navigation and ghost evasion.</li>
            <li><strong>Algorithm-Driven AI:</strong> Uses DFS, A*, and Dijkstra's to drive character behavior and pathfinding.</li>
            <li><strong>Customizable Levels:</strong> Supports user-defined level layouts and difficulty tuning.</li>
            <li><strong>High Score Tracking:</strong> Tracks top scores achieved by players.</li>
            <li><strong>Responsive Controls:</strong> Smooth keyboard input for fluid gameplay.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Algorithm Implementation</h2>
          <p className="mb-4">
            The Pac-Man game uses the following algorithms to enhance gameplay:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Depth-First Search (DFS):</strong> Used to generate maze paths and define the initial layout of game levels.</li>
            <li><strong>A* Algorithm:</strong> Controls ghost movement with heuristic-based optimization.</li>
            <li><strong>Dijkstra's Algorithm:</strong> An alternate method explored for ghost pathfinding, noted to be less efficient.</li>
          </ul>
          <p className="mb-2">Each algorithm's performance is tracked and compared:</p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>BFS (Breadth-First Search):</strong>
              <ul className="list-disc list-inside ml-6">
                <li>BFS to the nearest pacgum</li>
                <li>BFS to a random spot</li>
                <li>BFS to powerups then ghosts</li>
                <li>Observations: “Kinda smart, kinda dumb,” sometimes slow but can win and earn lives</li>
              </ul>
            </li>
            <li>
              <strong>A* Algorithm:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>A* to a random spot</li>
                <li>A* to powerups then ghosts</li>
                <li>Observations: Similar results to BFS — sometimes smart, sometimes dumb, occasionally wins</li>
              </ul>
            </li>
            <li>
              <strong>Dijkstra's Algorithm:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Dijkstra to a random spot</li>
                <li>Observations: “Very dumb,” often avoids pacgums — room for improvement</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4">Heuristics like Manhattan distance are used in A* for optimal path decisions.</p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Setup and Installation</h2>
          <p className="mb-4">Instructions for running the Pac-Man game locally:</p>
          <p className="mb-2 font-semibold">Prerequisites:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Python 3.x</li>
            <li>Pygame</li>
          </ul>
          <p className="mb-2 font-semibold">Setup Instructions:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>Clone the repository:</strong><br />
              <code>git clone https://github.com/ahearndylan/PacmanGame.git</code><br />
              <code>cd PacmanGame</code>
            </li>
            <li>
              <strong>Install dependencies:</strong><br />
              <code>pip install -r requirements.txt</code>
            </li>
            <li>
              <strong>Run the game:</strong><br />
              <code>python pacman.py</code>
            </li>
          </ol>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>src/:</strong> Main game logic and loop</li>
            <li><strong>assets/:</strong> Images and sounds used in the game</li>
            <li><strong>levels/:</strong> Layout and difficulty for each game level</li>
            <li><strong>requirements.txt:</strong> Lists Python dependencies</li>
          </ul>
          <p className="mt-4 font-semibold">Main Class Components:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><code>game</code> field – Stores the game instance</li>
            <li><code>setup</code> method – Handles pregame calculations</li>
            <li><code>get_dir</code> method – Determines movement direction</li>
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

export default Pacman;
