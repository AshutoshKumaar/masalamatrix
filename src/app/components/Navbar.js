'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" ><h1 className="text-2xl font-bold text-blue-600"> MasalaMatrix</h1></Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500 transition duration-200">Home</Link>
          <Link href="/local" className="hover:text-blue-500 transition duration-200">Local</Link>
          <Link href="/api-news" className="hover:text-blue-500 transition duration-200">API News</Link>
          <Link href="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
            {isOpen ? <FaTimes className='text-xl font-700 text-center items-center' /> : <FaBars className='text-2xl font-700 text-center items-center' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full bg-white absolute px-4 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'left-[-100%]'
        }`}
      >
        <div className="flex flex-col space-y-4 text-gray-700 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:underline">Home</Link>
          <Link href="/local" onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:underline">Local</Link>
          <Link href="/apinews" onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:underline">API News</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:underline">About</Link>
           <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
