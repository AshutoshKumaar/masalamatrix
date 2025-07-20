import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us 📬</h2>
        <p className="text-gray-700 mb-4">Have questions, feedback, or spicy stories to share?</p>
        <form className="space-y-4">
          <input className="w-full border px-4 py-2 rounded" type="text" placeholder="Your Name" required />
          <input className="w-full border px-4 py-2 rounded" type="email" placeholder="Your Email" required />
          <textarea className="w-full border px-4 py-2 rounded" rows="4" placeholder="Your Message" required />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </main>
    </>
  );
};

export default Contact;
