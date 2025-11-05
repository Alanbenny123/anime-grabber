import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Users2, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shounen",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [showAllGenres, setShowAllGenres] = useState(false);
  const displayedGenres = showAllGenres ? genres : genres.slice(0, 6);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a2e] transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4">
          <button
            onClick={onClose}
            className="flex items-center text-gray-400 hover:text-white mb-6"
          >
            <X className="h-5 w-5 mr-2" />
            Close menu
          </button>

          <div className="mb-6">
            <Link
              href="/community"
              className="flex items-center bg-[#2a2a3e] text-white rounded-lg p-3 hover:bg-[#3a3a4e] transition-colors"
            >
              <Users2 className="h-5 w-5 mr-2 text-pink-400" />
              Community
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <nav className="space-y-1">
            <Link
              href="/"
              className="block text-gray-400 hover:text-white py-2"
            >
              Home
            </Link>
            <Link
              href="/genre"
              className="block text-gray-400 hover:text-white py-2"
            >
              Genre
            </Link>
            <Link
              href="/most-popular"
              className="block text-gray-400 hover:text-white py-2"
            >
              Most Popular
            </Link>
            <Link
              href="/movies"
              className="block text-gray-400 hover:text-white py-2"
            >
              Movies
            </Link>
            <Link
              href="/tv-series"
              className="block text-gray-400 hover:text-white py-2"
            >
              TV Series
            </Link>
            <Link
              href="/ovas"
              className="block text-gray-400 hover:text-white py-2"
            >
              OVAs
            </Link>
            <Link
              href="/onas"
              className="block text-gray-400 hover:text-white py-2"
            >
              ONAs
            </Link>
            <Link
              href="/specials"
              className="block text-gray-400 hover:text-white py-2"
            >
              Specials
            </Link>
            <Link
              href="/events"
              className="block text-gray-400 hover:text-white py-2"
            >
              Events
            </Link>

            <div className="pt-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                GENRE
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {displayedGenres.map((genre) => (
                  <Link
                    key={genre}
                    href={`/genre/${genre.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
              {genres.length > 6 && (
                <button
                  onClick={() => setShowAllGenres(!showAllGenres)}
                  className="flex items-center text-gray-400 hover:text-white mt-3 text-sm"
                >
                  <ChevronDown
                    className={`h-4 w-4 mr-1 transition-transform duration-200 ${
                      showAllGenres ? "rotate-180" : ""
                    }`}
                  />
                  {showAllGenres ? "Show Less" : "More"}
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
