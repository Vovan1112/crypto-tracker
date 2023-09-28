'use client'
import { useState } from 'react';
import Link from 'next/link';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button className="text-white" onClick={toggleMenu}>
        {/* SVG-иконка бургера */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 15"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-8 bg-white border border-gray-300 rounded w-full">
          <button className="block w-full text-center px-4 py-2 hover:bg-gray-100">
            <Link href="/">Home</Link>
          </button>
          <button className="block w-full text-center px-4 py-2 hover:bg-gray-100">
            <Link href="/contact">Contact</Link>
          </button>
          <button className="block w-full text-center px-4 py-2 hover:bg-gray-100">
           Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export { BurgerMenu };
