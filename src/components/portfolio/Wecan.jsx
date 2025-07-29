import React from "react";

const Wecan = ({ onBack }) => {
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

        <h1 className="text-4xl font-bold mb-8 text-center">WeCan Mobile Redemption App</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <img
            src="/WECANproject.png"
            alt="WeCan Logo"
            className="w-64 h-auto mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="mb-4">
              The WeCan Mobile Redemption App is designed to streamline the process of redeeming beverage containers in Worcester. 
              Using a mobile platform, residents can schedule collections and redeem cans and bottles directly from their homes or businesses. 
              The app leverages Django for backend services and Android Studio for the mobile experience, making it accessible and easy to use.
            </p>
            <p><strong>Live Website:</strong> <a href="https://wecan-4520.onrender.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CENTRO Inc.</a></p>
            <p><strong>GitHub Repository:</strong> <a href="https://github.com/Gitesh307/WeCan" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View the Project on GitHub</a></p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About WeCan</h2>
          <p className="mb-4">
            Founded to address the decreasing redemption rates in Massachusetts, WeCan, LLC provides a modern solution to the state’s bottle bill by offering 
            convenient mobile redemption services. The app is free to use, and customers can track their redemption history, payments, and even donate their refunds to charity.
          </p>
          <p>
            WeCan is committed to promoting sustainability, reducing waste, and helping the community through second-chance hiring and community development initiatives.
          </p>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide a user-friendly mobile app for scheduling can and bottle pickups.</li>
            <li>Increase beverage container redemption rates in Massachusetts through accessible services.</li>
            <li>Offer features such as payment processing, donation options, and container tracking.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Anticipated Outcomes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increased redemption rates in Massachusetts, supporting environmental sustainability efforts.</li>
            <li>Enhanced community engagement by making redemption more accessible and convenient.</li>
            <li>Empowerment of returning citizens through job creation and community development programs.</li>
          </ul>
        </section>

        <section className="bg-gray-200 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expand the app to cover more regions in Massachusetts and beyond.</li>
            <li>Develop a rewards program for users based on the amount of containers redeemed.</li>
            <li>Implement advanced tracking features to show users their environmental impact.</li>
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

export default Wecan;
