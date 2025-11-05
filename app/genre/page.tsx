import Link from "next/link";

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mecha",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

export default function GenrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Anime Genres</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <Link
            key={genre}
            href={`/genre/${genre.toLowerCase().replace(/ /g, "-")}`}
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
