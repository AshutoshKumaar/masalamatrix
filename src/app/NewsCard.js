// components/NewsCard.js
import React from 'react';
import Link from 'next/link';

export default function NewsCard({ title, description, image, url }) {
  const isExternal = url.startsWith('http');

  return (
    <div className="w-full md:w-[300px] p-1 sm:p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-[16px] sm:text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          {isExternal ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline transition ease-in-out duration-75"
            >
              Read More → 
            </a>
          ) : (
            <Link
              href={url}
              className="text-blue-500 hover:underline"
            >
              Read More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
