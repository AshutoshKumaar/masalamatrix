import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Local = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Local Blog Stories 📍</h2>
        <p className="text-gray-700 mb-2">
          Read user-submitted blogs and spicy tales from your area. Dive into
          real stories, personal experiences, and local gossip shared by people
          near you. Whether it&apos;s a heartwarming incident, a steamy affair, or a
          thrilling neighborhood rumor — we&apos;ve got it all covered.
        </p>
        <p className="text-gray-700 mb-2">
          ✨ From late-night chai stall conversations to forgotten friendships
          rekindled — every story paints the true colors of your city.
        </p>
        <p className="text-gray-700 mb-2">
          📝 Want to contribute? Submit your own blog post anonymously or with
          your name — your voice deserves to be heard!
        </p>
        <p className="text-gray-700 mb-2">
          🔥 Trending Now: Most-read blogs of the week, handpicked just for you.
          Don’t miss the drama, the laughs, and the love!
        </p>
        <p className="text-gray-700">
          🔄 Keep coming back — this space gets updated daily with the freshest
          and most exciting content from locals like you. Because every street
          has a story, and every voice matters.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Local;
