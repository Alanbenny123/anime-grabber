"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1a1a1a] text-white">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-1 hover:bg-[#2a2a2a] rounded-lg"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link href="/" className="text-2xl font-bold text-blue-500">
                AnimeWeb
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/" className="nav-item">
                  Home
                </Link>
                <Link href="/genre" className="nav-item">
                  Genre
                </Link>
                <Link href="/most-popular" className="nav-item">
                  Most Popular
                </Link>
                <Link href="/movies" className="nav-item">
                  Movies
                </Link>
                <Link href="/tv-series" className="nav-item">
                  TV Series
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anime..."
                  className="w-64 px-4 py-2 rounded-full bg-[#2a2a2a] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
