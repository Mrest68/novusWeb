"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logoNovus.png" 
                alt="Novus Home Remodeling" 
                width={60} 
                height={60} 
                className="rounded-lg mr-3"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <Link 
              href="/" 
              className={`text-orange-500 ${currentPage === 'home' ? 'font-medium' : 'hover:text-orange-600'} transition-all duration-300 font-light text-lg relative group`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 ${currentPage === 'home' ? 'w-full' : 'w-0'} h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link 
              href="/services" 
              className={`text-orange-500 ${currentPage === 'services' ? 'font-medium' : 'hover:text-orange-600'} transition-all duration-300 font-light text-lg relative group`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 ${currentPage === 'services' ? 'w-full' : 'w-0'} h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-orange-500 ${currentPage === 'about' ? 'font-medium' : 'hover:text-orange-600'} transition-all duration-300 font-light text-lg relative group`}
            >
              About
              <span className={`absolute -bottom-1 left-0 ${currentPage === 'about' ? 'w-full' : 'w-0'} h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link 
              href="/reviews" 
              className={`text-orange-500 ${currentPage === 'reviews' ? 'font-medium' : 'hover:text-orange-600'} transition-all duration-300 font-light text-lg relative group`}
            >
              Reviews
              <span className={`absolute -bottom-1 left-0 ${currentPage === 'reviews' ? 'w-full' : 'w-0'} h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-orange-500 ${currentPage === 'contact' ? 'font-medium' : 'hover:text-orange-600'} transition-all duration-300 font-light text-lg relative group`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 ${currentPage === 'contact' ? 'w-full' : 'w-0'} h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
          </div>

          {/* Call Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-6">
            <Link
              href="tel:+!7542464687" 
              className="hidden sm:inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#F29D35'}} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#E8932F'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#F29D35'}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (754) 246-4687
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-orange-500 hover:text-orange-600 focus:outline-none p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className={`block px-4 py-3 text-orange-500 ${currentPage === 'home' ? 'bg-orange-50 font-medium' : 'hover:text-orange-600 hover:bg-orange-50'} rounded-lg transition-all duration-300 font-light`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`block px-4 py-3 text-orange-500 ${currentPage === 'services' ? 'bg-orange-50 font-medium' : 'hover:text-orange-600 hover:bg-orange-50'} rounded-lg transition-all duration-300 font-light`}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={`block px-4 py-3 text-orange-500 ${currentPage === 'about' ? 'bg-orange-50 font-medium' : 'hover:text-orange-600 hover:bg-orange-50'} rounded-lg transition-all duration-300 font-light`}
              >
                About
              </Link>
              <Link 
                href="/reviews" 
                className={`block px-4 py-3 text-orange-500 ${currentPage === 'reviews' ? 'bg-orange-50 font-medium' : 'hover:text-orange-600 hover:bg-orange-50'} rounded-lg transition-all duration-300 font-light`}
              >
                Reviews
              </Link>
              <Link 
                href="/contact" 
                className={`block px-4 py-3 text-orange-500 ${currentPage === 'contact' ? 'bg-orange-50 font-medium' : 'hover:text-orange-600 hover:bg-orange-50'} rounded-lg transition-all duration-300 font-light`}
              >
                Contact
              </Link>
              <Link
                href="tel:+15551234567" 
                className="block w-full text-center text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
                style={{backgroundColor: '#F29D35'}}
              >
                (754) 246-4687
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}