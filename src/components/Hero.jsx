import React, { useEffect, useRef, useState } from "react";

const terminalText = [
  "Hi there! I'm Dylan Ahearn, a recent Computer Science graduate from Clark University.",
  "I'm currently based in MA and enjoy building clean, functional software.",
  "Most of my projects are focused on making a real impact in my community.",
  "I have worked across the stack to build tools that are simple, scalable, and user-focused.",
  "Explore my recent work and feel free to connect with me!",
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showMatrixOnly, setShowMatrixOnly] = useState(false);
  const consoleRef = useRef(null);
  const matrixContainerRef = useRef(null);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (!showWelcome && lineIndex < terminalText.length) {
      if (charIndex < terminalText[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + terminalText[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setDisplayedText((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }

    if (!showWelcome && lineIndex === terminalText.length && !isFinished) {
      setIsFinished(true);
    }
  }, [charIndex, lineIndex, showWelcome]);

  useEffect(() => {
    if (isFinished) {
      const matrixDelay = setTimeout(() => {
        setShowMatrix(true);
        setShowMatrixOnly(true); 
      }, 6000);
      return () => clearTimeout(matrixDelay);
    }
  }, [isFinished]);

  useEffect(() => {
    if (!showMatrix || !matrixContainerRef.current) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";

    const createMatrixLine = () => {
  const matrixLine = document.createElement("div");
  matrixLine.classList.add("matrix-line");

  const containerWidth = matrixContainerRef.current.offsetWidth;
  matrixLine.style.left = Math.random() * containerWidth + "px";

  matrixLine.style.top = "0px";
  matrixLine.textContent =
    chars.charAt(Math.floor(Math.random() * chars.length));

  matrixContainerRef.current.appendChild(matrixLine);

  matrixLine.addEventListener("animationend", () => {
    matrixLine.remove();
  });
};


    const interval = setInterval(createMatrixLine, 30);
    return () => clearInterval(interval);
  }, [showMatrix]);

  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-[#1e293b] text-white px-4 pt-20 relative overflow-hidden"
    >
      <div
        ref={consoleRef}
        className="w-full max-w-3xl rounded-md shadow-2xl bg-[#0a0f1e] border-2 border-[#2e3a59] relative"
      >
        <div className="flex items-center px-4 py-2 bg-[#1c253c] rounded-t-md space-x-2 z-10 relative">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div
          className="p-4 font-mono text-sm sm:text-base h-56 overflow-hidden relative"
          style={{ color: "#00ff00" }}
        >
          {showWelcome ? (
            <div className="flex items-center justify-center h-full text-4xl sm:text-5xl font-bold tracking-wider">
              WELCOME
            </div>
          ) : showMatrixOnly ? (
            <></> 
          ) : (
            <pre className="whitespace-pre-wrap">{displayedText}</pre>
          )}

          <div
            ref={matrixContainerRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
            style={{ zIndex: 5 }}
          ></div>
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition z-10"
      >
        Explore My Projects
      </button>

      <style>
  {`
    .matrix-line {
      position: absolute;
      top: 0;
      color: #00ff00;
      font-family: monospace;
      font-size: 1rem;
      white-space: nowrap;
      pointer-events: none;
      animation: matrixDrop 2s linear forwards;
      z-index: 1;
    }

    @keyframes matrixDrop {
      0% {
        top: 0%;
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% {
        top: 100%;
        opacity: 0;
      }
    }
  `}
</style>


    </div>
  );
};

export default Hero;
