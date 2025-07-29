import React from "react";

const Barcard = ({ onBack }) => {
  return (
    <div className="bg-gray-100 text-black min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <br />
        <button
          className="mb-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={onBack}
        >
          ← Back to Portfolio
        </button>


        <h1 className="text-4xl font-bold mt-10 mb-6 text-center">
          Digital Bar Card Project
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/BARCARDproject.png"
            alt="Digital Bar Card"
            className="rounded-xl mx-auto w-[300px] h-[300px] object-contain"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-2">
              The Digital Bar Card project simulates replacing traditional paper-based Bar
              Cards for Massachusetts lawyers with digital versions. This Proof of Concept
              (PoC) demonstrates how lawyers' credentials can be verified via a mock API,
              simulating interaction with the Massachusetts Board of Bar Overseers (BBO)
              database. Once verified, a digital Bar Card is generated and can be stored in
              mobile wallets like Apple Wallet or Google Wallet.
            </p>
            <p className="mb-2">
              <span className="font-semibold">Technologies Used:</span> Django, Python, SQLite (for development),
              PostgreSQL (planned for production), HTML, CSS, JavaScript, Git.
            </p>
            <p className="mb-2">
              <span className="font-semibold">Hosted Project:</span>{" "}
              <a
                href="https://digitalbarcard.onrender.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the hosted project on Render
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Project Repository:</span>{" "}
              <a
                href="https://github.com/ahearndylan/DigitalBarCard"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the project on GitHub
              </a>
            </p>
            <p>
              <span className="font-semibold">Mock API Repository:</span>{" "}
              <a
                href="https://github.com/ahearndylan/mockAPI"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View the Mock API on GitHub
              </a>
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="mb-2">
            The Digital Bar Card project aims to streamline the process of lawyer verification and Bar Card
            generation, eliminating the need for physical Bar Cards. The mock API simulates the Massachusetts
            Board of Bar Overseers (BBO) database, allowing lawyers to verify their credentials and generate
            a digital version of their Bar Card. These digital cards can be used in court for real-time
            verification via a scannable code.
          </p>
          <p>
            The digital Bar Card includes information such as the lawyer’s name, law firm, BBO number,
            admittance date, expiration date, and lawyer’s electronic signature. In future updates, lawyers
            may be able to store their malpractice insurance details and pay Bar dues directly through the app.
          </p>
        </section>

        <section className="mt-16 bg-gray-200 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Proof of Concept</h2>
          <p className="mb-4">
            You can view the detailed project overview and documentation in the PDF below:
          </p>
          <iframe
            src="/DigitalBarCard.pdf"
            className="w-full h-[500px] border rounded"
            title="Digital Bar Card PDF"
          />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>Set up Django apps for users, Bar Cards, and verification.</li>
            <li>Implemented user authentication and lawyer verification using a mock API.</li>
            <li>Developed digital Bar Card generation and security features.</li>
            <li>Hosted the project on Render, with both the Digital Bar Card and Mock API available online.</li>
            <li>
              Continued development, including future features like real-time lawyer verification, malpractice
              insurance tracking, and integration with Apple Wallet/Google Wallet.
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Expansion Plans</h2>
          <p className="mb-2">
            The Digital Bar Card project is currently focused on Massachusetts lawyers, but there are plans
            to expand the service to other U.S. states. Each state may have different requirements, such as
            malpractice insurance verification, which can be incorporated into the system as it scales.
          </p>
          <p>
            Future updates will also explore adding a one-stop payment system for Bar dues and direct
            integration with mobile wallets to ensure that lawyers no longer need a physical Bar Card or
            Wi-Fi to access their credentials.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions about this project or would like to discuss it further, please feel free
            to contact me:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Email:</span> dahearn2021@gmail.com
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Barcard;