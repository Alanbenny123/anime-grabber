import Footer from "../../components/Footer";
import AnimeCard from "../../components/AnimeCard";
import { popularAnime, topAiringAnime } from "../../data/anime";

export const metadata = {
  title: "Anime TV Series - AnimeGrabber",
  description:
    "Watch the latest and popular anime TV series online for free in HD quality.",
};

// Additional TV Series data
const seasonalAnime = [
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGJhYzgzZmUtYzI0Yi00MmE0LTkzZjAtMDlkMmI5NjI5NjAwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    type: "TV",
    episodeNumber: 28,
    rating: 9.0,
  },
  {
    id: "oshi-no-ko",
    title: "Oshi No Ko",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGVhZWQ5NzAtOWU0Yi00MTg5LTk3OTgtMzVmOTBhOTM2YjE4XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    type: "TV",
    episodeNumber: 11,
    rating: 8.7,
  },
  {
    id: "classroom-elite",
    title: "Classroom of the Elite",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzc3YmZhZWItNGY4ZC00NjdmLTk3ZjUtY2E0MDQxYmY3MmQwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 13,
    rating: 7.9,
  },
  {
    id: "bungo-stray-dogs",
    title: "Bungo Stray Dogs",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmQyODI2M2ItMzA2Ny00ZDJhLTgzMDQtODcwZTY2YzY0NTE4XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg",
    type: "TV",
    episodeNumber: 54,
    rating: 8.2,
  },
  {
    id: "horimiya",
    title: "Horimiya",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmY2ZDUxYzEtMjQzYy00NzM5LTgwOWMtZGRkOTFiNmY1NDU1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 13,
    rating: 8.1,
  },
  {
    id: "hyouka",
    title: "Hyouka",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTk1MDc1MDkzOF5BMl5BanBnXkFtZTgwOTA4NTcwNjE@._V1_.jpg",
    type: "TV",
    episodeNumber: 22,
    rating: 8.1,
  },
];

export default function TVSeriesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Anime TV Series</h1>

        {/* Top Airing Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Top Airing</h2>
            <a
              href="/top-airing"
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {topAiringAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                type={anime.type}
                rating={"rating" in anime && typeof anime.rating === "number" ? anime.rating : undefined}
              />
            ))}
          </div>
        </div>

        {/* Popular TV Series */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Popular TV Series</h2>
            <a
              href="/popular"
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {popularAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image}
                type={anime.type}
                rating={"rating" in anime && typeof anime.rating === "number" ? anime.rating : undefined}
              />
            ))}
          </div>
        </div>

        {/* Filter options */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium">
            All
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Subbed
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Dubbed
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            This Season
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Last Season
          </button>
        </div>

        {/* Sort options */}
        <div className="flex items-center mb-8">
          <label className="mr-3 font-medium">Sort by:</label>
          <select className="bg-[#1f2937] text-white px-4 py-2 rounded font-medium border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Latest</option>
            <option>Rating</option>
            <option>A-Z</option>
          </select>
        </div>

        {/* All TV Series Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {popularAnime.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              type={anime.type}
              rating={anime.rating}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex">
            <button className="bg-[#1f2937] text-white px-4 py-2 rounded-l-md font-medium">
              Previous
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 font-medium">
              1
            </button>
            <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 font-medium">
              2
            </button>
            <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 font-medium">
              3
            </button>
            <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded-r-md font-medium">
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
