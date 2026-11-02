"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { featuredGenres, genreSlug } from "@/lib/genres";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  { href: "/", label: "Home" },
  { href: "/genre", label: "Genre" },
  { href: "/most-popular", label: "Most Popular" },
  { href: "/top-airing", label: "Top Airing" },
  { href: "/this-season", label: "This Season" },
  { href: "/movies", label: "Movies" },
  { href: "/tv-series", label: "TV Series" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [showAllGenres, setShowAllGenres] = useState(false);
  const displayedGenres = showAllGenres ? featuredGenres : featuredGenres.slice(0, 6);

  return (
    <aside
      aria-label="Site menu"
      aria-hidden={!isOpen}
      className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a2e] transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4">
          <button onClick={onClose} className="flex items-center text-gray-400 hover:text-white mb-6">
            <X className="h-5 w-5 mr-2" /> Close menu
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} onClick={onClose} className="block text-gray-400 hover:text-white py-2">
              {section.label}
            </Link>
          ))}
          <div className="pt-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Genre</h3>
            <div className="grid grid-cols-2 gap-2">
              {displayedGenres.map((genre) => (
                <Link key={genre} href={`/genre/${genreSlug(genre)}`} onClick={onClose} className="text-sm text-gray-400 hover:text-blue-400">
                  {genre}
                </Link>
              ))}
            </div>
            <button onClick={() => setShowAllGenres((value) => !value)} className="flex items-center text-gray-400 hover:text-white mt-3 text-sm">
              <ChevronDown className={`h-4 w-4 mr-1 ${showAllGenres ? "rotate-180" : ""}`} />
              {showAllGenres ? "Show less" : "More"}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}
