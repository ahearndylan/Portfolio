import React from "react";

const Game = ({ onBack }) => {
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

        <h1 className="text-4xl font-bold mb-8 text-center">Game Platform Project</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/GAMEPLATFORMgif.gif"
            alt="Game Platform Screenshot"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              This project involves developing a Game Platform that hosts multiple games, including Plinko, Horse Racing Derby, Roulette, and a Memory Matching Game. The platform is designed to showcase GUI development skills and game logic implementation.
            </p>
            <p><strong>Technologies Used:</strong> Java, JavaFX, IntelliJ IDEA, Game Development</p>
            <p>
              <strong>GitHub Repository:</strong>{" "}
              <a
                href="https://github.com/ahearndylan/GamePlatform"
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
            The Game Platform project is a software application that features multiple games accessible from a single interface. The project explores GUI development using JavaFX and demonstrates the implementation of different game logics, including physics-based ball drop in Plinko, a race simulation in Horse Racing Derby, a color-based roulette system, and a memory matching game with sport icons.
          </p>
          <p>
            This project not only showcases game development skills but also highlights the use of Java for creating interactive and user-friendly applications.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Multiple Games:</strong> Includes Plinko, Horse Racing Derby, Roulette, and Memory Matching — each with unique gameplay.</li>
            <li><strong>Interactive GUI:</strong> Built using JavaFX for smooth navigation and polished interfaces.</li>
            <li><strong>Scoring System:</strong> Tracks player performance across games.</li>
            <li><strong>Responsive Controls:</strong> Smooth and responsive input handling across all games.</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Setup and Installation</h2>
          <p className="mb-4">To set up the Game Platform locally:</p>
          <p className="mb-2 font-semibold">Prerequisites:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Java 8 or higher</li>
            <li>JavaFX SDK</li>
          </ul>
          <p className="mb-2 font-semibold">Setup Instructions:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <strong>Clone the repository:</strong><br />
              <code>git clone https://github.com/ahearndylan/GamePlatform.git</code><br />
              <code>cd GamePlatform</code>
            </li>
            <li>
              <strong>Open the project in IntelliJ IDEA:</strong><br />
              Import as a Gradle project
            </li>
            <li>
              <strong>Run the application:</strong><br />
              <code>./gradlew run</code>
            </li>
          </ol>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>src/:</strong> Game logic and platform source code</li>
            <li><strong>resources/:</strong> Game assets like images and sounds</li>
            <li><strong>build.gradle:</strong> Project build configuration</li>
            <li><strong>gradle/:</strong> Gradle wrapper setup</li>
          </ul>
          <p className="mt-4 font-semibold">Main Class Components:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><code>GamePlatform.java</code>: Entry point; handles GUI and navigation</li>
            <li><code>PlinkoGame.java</code>: Logic and UI for Plinko</li>
            <li><code>HorseRacingGame.java</code>: Logic and UI for Horse Racing Derby</li>
            <li><code>RouletteGame.java</code>: Logic and UI for Roulette</li>
            <li><code>MemoryMatchGame.java</code>: Logic and UI for Matching Game</li>
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

export default Game;
