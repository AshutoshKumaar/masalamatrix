"use client";
import React, { useEffect, useState } from "react";
import blogPosts from "./blogData";
import NewsCard from "./NewsCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function BlogApp() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("News");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    if (category === "News") {
      setLoading(true);
      fetch(
        `http://api.mediastack.com/v1/news?access_key=a6c2cb75bf118c3b93b18a1960d3abed&languages=en&limit=50`
      )
        .then((res) => res.json())
        .then((data) => {
          setNews(data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setNews([]);
          setLoading(false);
        });
    }
  }, [category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredPosts =
    category === "Adlut"
      ? blogPosts
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.excerpt.toLowerCase().includes(search.toLowerCase())
          )
          .filter((post) => post.category === "Adlut")
      : (news || []).filter((article) =>
          article.title?.toLowerCase().includes(search.toLowerCase())
        );

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {category === "Adlut" ? "📘 Adlut Stories" : "📰 Latest News"}
          </h2>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSearch("");
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="News">News</option>
              <option value="Adlut">Adlut</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        {loading ? (
          <p className="text-center text-gray-500 h-screen">Loading...</p>
        ) : (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {paginatedPosts.map((item, index) => (
              <NewsCard
                key={item.id || index}
                title={item.title}
                description={item.excerpt || item.description}
                url={
                  category === "Adlut"
                    ? `/blog/${item.id}`
                    : item.url || "#"
                }
                image={
                  item.image ||
                  "https://via.placeholder.com/400x200.png?text=No+Image"
                }
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="w-full mt-6 px-4 flex flex-wrap gap-3 justify-start">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded text-sm md:text-base ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                } transition duration-300 ease-in-out`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {paginatedPosts.length === 0 && !loading && (
          <p className="text-center mt-6 text-gray-500 text-sm md:text-base h-screen">
            No items match your search.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
