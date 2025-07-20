import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">About Us</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>MasalaMatrix</strong> — your one-stop destination for trending news, spicy blogs, and everything that keeps the internet buzzing!
        </p>

        <p className="text-gray-700 mb-4">
          From latest viral news to fun adult reads, our platform delivers fresh and engaging content that’s meant to entertain, inform, and surprise.
          We believe in quality storytelling, unbiased news, and providing a safe space for open and enjoyable reads.
        </p>

        <p className="text-gray-700 mb-4">
          Our goal is to make your scroll worth it. Whether you're here for the latest headlines, thought-provoking blogs, or just to chill with something spicy — we’ve got you covered.
        </p>

        <p className="text-gray-700">
          Built with love ❤️ by creators who believe content is king and curiosity is queen. Thanks for being part of our growing community!
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
