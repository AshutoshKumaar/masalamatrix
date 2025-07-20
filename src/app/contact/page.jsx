import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Form */}
      <form className="bg-white shadow-md rounded-lg p-6 mb-10 space-y-4">
        <div>
          <label className="block font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-semibold">Message</label>
          <textarea
            rows={4}
            placeholder="Your message..."
            className="w-full border rounded p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>

      {/* Feedback Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <p className="mb-4 text-gray-700">We’d love to hear your thoughts!</p>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold">How was your experience?</label>
            <textarea
              rows={3}
              placeholder="Share your experience..."
              className="w-full border rounded p-2"
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold">Rate Us</label>
            <select className="w-full border rounded p-2">
              <option value="">Choose a rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Poor</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
