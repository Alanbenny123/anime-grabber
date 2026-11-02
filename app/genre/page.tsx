import Link from "next/link";
import { featuredGenres, genreSlug } from "@/lib/genres";

export default function GenrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Anime Genres</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredGenres.map((genre) => (
          <Link
            key={genre}
            href={`/genre/${genreSlug(genre)}`}
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-200 rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold text-white">{genre}</h2>
            <p className="text-gray-400 mt-2 text-sm">Browse {genre} anime</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
