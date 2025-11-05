import Footer from "../../../components/Footer";
import AnimeCard from "../../../components/AnimeCard";
import { popularAnime, topAiringAnime } from "../../../data/anime";
import { Metadata } from "next";

// Define available genres
const genres = [
  "action",
  "adventure",
  "comedy",
  "drama",
  "fantasy",
  "horror",
  "mecha",
  "mystery",
  "romance",
  "sci-fi",
  "slice-of-life",
  "sports",
  "supernatural",
  "thriller",
];

// Define props type for consistency
type Props = {
  params: { slug: string };
};

// Generate metadata for each genre page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const genre = params.slug;
  const displayName = getGenreDisplayName(genre);

  return {
    title: `${displayName} Anime - AnimeGrabber`,
    description: `Watch the best ${displayName.toLowerCase()} anime series and movies in HD quality.`,
  };
}

// Helper function to get display name for genre
function getGenreDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Helper function to get anime by genre
function getAnimeByGenre(genre: string) {
  // In a real app, this would filter based on genre
  // For now, just return some sample data
  return [...popularAnime, ...topAiringAnime];
}

export default function GenrePage({ params }: Props) {
  const genre = params.slug;
  const displayName = getGenreDisplayName(genre);
  const animeInGenre = getAnimeByGenre(genre);

  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {displayName} Anime
        </h1>

        {/* Filter options */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium">
            All
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            TV Series
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Movies
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            This Season
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

        {/* Anime Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {animeInGenre.map((anime) => (
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
