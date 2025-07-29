const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form
          action="https://formspree.io/f/xyzgvgnd"
          method="POST"
          className="bg-white p-8 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Message:</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
