const Resume = () => {
  return (
    <div id="resume" className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">My Resume</h2>
        <p className="text-gray-600 text-lg">
          View or download my latest resume to learn more about my background and experience.
        </p>
      </div>

      <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md mb-10 text-center">
        <a
          href="/resume.pdf"
          download="Dylan_Ahearn_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
        >
          Download PDF
        </a>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <iframe
          src="/resumeNov.pdf"
          title="Resume PDF"
          className="w-full h-[85vh] rounded-b-xl"
        />
      </div>
    </div>
  );
};

export default Resume;
