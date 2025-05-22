"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#171717] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-500">
                AnimeGrabber
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="nav-item">
              Home
            </Link>
            <Link href="/movies" className="nav-item">
              Movies
            </Link>
            <Link href="/tv-series" className="nav-item">
              TV Series
            </Link>
            <Link href="/most-popular" className="nav-item">
              Most Popular
            </Link>
            <Link href="/top-airing" className="nav-item">
              Top Airing
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:block ml-4 w-64">
            <form>
              <input
                type="text"
                placeholder="Search anime..."
                className="search-bar"
              />
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 py-2">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/movies"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Movies
            </Link>
            <Link
              href="/tv-series"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              TV Series
            </Link>
            <Link
              href="/most-popular"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Most Popular
            </Link>
            <Link
              href="/top-airing"
              className="block px-3 py-2 hover:bg-gray-700 rounded-md"
            >
              Top Airing
            </Link>
            <div className="pt-2 px-3">
              <input
                type="text"
                placeholder="Search anime..."
                className="search-bar w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
