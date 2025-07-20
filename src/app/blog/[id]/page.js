"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import blogPosts from "@/app/blogData";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LocalBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const currentIndex = blogPosts.findIndex((p) => p.id.toString() === id);
  const post = blogPosts[currentIndex];

  const [step, setStep] = useState(1);
  const [visibleContent, setVisibleContent] = useState("");

  useEffect(() => {
    if (post) {
      const words = post.content.split(" ");
      const total = words.length;
      if (step === 1) {
        setVisibleContent(words.slice(0, Math.ceil(total * 0.5)).join(" "));
      } else if (step === 2) {
        setVisibleContent(words.slice(0, Math.ceil(total * 0.8)).join(" "));
      } else {
        setVisibleContent(post.content);
      }
    }
  }, [step, post]);

  if (!post) {
    return <div className="text-center p-6">Blog post not found.</div>;
  }

  const goToPost = (index) => {
    const target = blogPosts[index];
    if (target) {
      setStep(1); // Reset step on new post
      router.push(`/blog/${target.id}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          className="mb-4 text-blue-600 hover:underline"
        >
          ← Back to Blogs
        </button>

        {/* Blog content */}
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-4">Category: {post.category}</p>
        <img
          src={post.image}
          alt={post.title}
          className="rounded-lg w-full mb-4"
        />

        <p className="text-lg mb-6">{visibleContent}</p>

        {/* Load more button */}
        {step < 3 && (
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {step === 1 ? "Read More" : "Continue Reading"}
          </button>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => goToPost(currentIndex - 1)}
            className={`px-4 py-2 rounded ${
              currentIndex > 0
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={currentIndex <= 0}
          >
            ← Previous
          </button>

          <button
            onClick={() => goToPost(currentIndex + 1)}
            className={`px-4 py-2 rounded ${
              currentIndex < blogPosts.length - 1
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={currentIndex >= blogPosts.length - 1}
          >
            Next →
          </button>
        </div>
      </div>

      <Footer />

      

    </div>
  );
}
