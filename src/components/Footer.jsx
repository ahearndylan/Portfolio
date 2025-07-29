const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/ahearndylan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.289 3.438 9.773 8.205 11.387.6.111.82-.26.82-.577 
              0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
              1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 
              0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 
              2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 
              0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .32.216.694.825.576C20.565 
              22.067 24 17.584 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/dylan-ahearn-b58235236"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
              2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 
              1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 
              1.75zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 
              .9-2 2v5.5h-3v-10h3v1.39c.44-.78 
              1.56-1.39 2.5-1.39 1.93 0 3.5 1.57 
              3.5 3.5v6.5z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Dylan Ahearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
