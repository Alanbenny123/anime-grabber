import Footer from "../../components/Footer";
import AnimeCard from "../../components/AnimeCard";
import { popularAnime } from "../../data/anime";

export const metadata = {
  title: "Anime Movies - AnimeGrabber",
  description:
    "Watch the latest and popular anime movies online for free in HD quality.",
};

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Anime Movies</h1>

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
            Latest
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Popular
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

        {/* Movies Grid */}
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
