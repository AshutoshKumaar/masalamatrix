import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ApiNews = () => {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Latest API News 🌍</h2>
        <p className="text-gray-700 mb-2">
          Stay up to date with breaking headlines, global events, and trending
          stories — all powered by the reliable{" "}
          <span className="font-semibold">Aaj Tak News API</span>.
        </p>

        <p className="text-gray-700 mb-2">
          📰 Whether it&apos;s politics, technology, health, sports, or entertainment
          — we bring you **real-time updates** from trusted news sources around
          the world. The feed refreshes every hour to keep you ahead of the
          curve.
        </p>

        <p className="text-gray-700 mb-2">
          🚨 Breaking News alerts are marked clearly so you never miss something
          urgent or important. From local developments to global crises — get
          the news that matters, when it matters.
        </p>

        <p className="text-gray-700 mb-2">
          📍 Region-based filtering: Get tailored news based on your location or
          interest. Want only Indian headlines? Or just global tech updates? Use
          the filters to personalize your feed.
        </p>

        <p className="text-gray-700 mb-2">
          📊 Clean UI & Lightning Fast: We’ve designed the experience to be
          clean, fast, and distraction-free. Read summaries, expand full
          articles, and even save your favorites to read later.
        </p>

        <p className="text-gray-700 mb-2">
          🔁 Updated Continuously: Unlike traditional blogs, this section pulls
          live content from APIs — so every visit feels fresh and up-to-date.
        </p>

        <p className="text-gray-700">
          ✍️ Coming Soon: Comment on stories, react with emojis, and join the
          discussion. Because news isn&apos;t just to be read — it&apos;s to be felt and
          shared.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ApiNews;
