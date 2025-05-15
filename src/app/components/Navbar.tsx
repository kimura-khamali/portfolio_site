'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#FF6B35]">
          Bresh
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-[#AB9898] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[#AB9898] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-[#AB9898] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/"
            className={`nav-link transition duration-300 ${pathname === '/' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898] hover:text-[#FF6B35]'}`}
          >
            Home
          </Link>
          <Link 
            href="/cv"
            className={`nav-link transition duration-300 ${pathname === '/cv' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898] hover:text-[#FF6B35]'}`}
          >
            CV
          </Link>
          <Link 
            href="/projects"
            className={`nav-link transition duration-300 ${pathname === '/projects' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898] hover:text-[#FF6B35]'}`}
          >
            Projects
          </Link>
          <Link 
            href="/contact"
            className={`nav-link transition duration-300 ${pathname === '/contact' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898] hover:text-[#FF6B35]'}`}
          >
            Contact
          </Link>
          <div className="hidden md:block ml-4">
            <p className="text-sm font-medium text-gray-800">THIS IS BRENDA KHAMALI</p>
            <p className="text-xs text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`${isMenuOpen ? 'max-h-60' : 'max-h-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-4 py-2 bg-white flex flex-col space-y-3">
          <Link 
            href="/"
            className={`block py-2 ${pathname === '/' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898]'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/cv"
            className={`block py-2 ${pathname === '/cv' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898]'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            CV
          </Link>
          <Link 
            href="/projects"
            className={`block py-2 ${pathname === '/projects' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898]'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/contact"
            className={`block py-2 ${pathname === '/contact' ? 'text-[#FF6B35] font-semibold' : 'text-[#AB9898]'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="py-2 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-800">THIS IS BRENDA KHAMALI</p>
            <p className="text-xs text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>
    </nav>
  );
}