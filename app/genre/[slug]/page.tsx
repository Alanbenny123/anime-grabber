import Header from "../../../components/Header";
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
  "mystery",
  "romance",
  "sci-fi",
  "slice-of-life",
  "sports",
  "supernatural",
];

// Define props type for consistency
type Props = {
  params: { slug: string };
};

// Get display name for genre from slug
function getGenreDisplayName(slug: string): string {
  if (slug === "sci-fi") return "Sci-Fi";
  if (slug === "slice-of-life") return "Slice of Life";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

// Generate static params for all genres
export function generateStaticParams() {
  return genres.map((genre) => ({
    slug: genre,
  }));
}

// Generate metadata for each genre page
export function generateMetadata({ params }: Props): Metadata {
  const displayName = getGenreDisplayName(params.slug);
  return {
    title: `${displayName} Anime - AnimeGrabber`,
    description: `Watch the best ${displayName.toLowerCase()} anime series and movies online for free in HD quality.`,
  };
}

// Filter anime by genre (mock implementation since we don't have genre data in our anime objects)
function getAnimeByGenre(genre: string) {
  // In a real implementation, you would filter by the actual genre
  // For now, let's just return a mix of anime to simulate content for each genre
  const allAnime = [...popularAnime, ...topAiringAnime];

  // Shuffle the array to get different results for different genres
  const shuffled = [...allAnime].sort(() => 0.5 - Math.random());

  // Return a subset based on a hash of the genre name length to simulate consistent results per genre
  return shuffled.slice(0, genre.length * 2 + 4);
}

export default function GenrePage({ params }: Props) {
  const genre = params.slug;
  const displayName = getGenreDisplayName(genre);
  const animeInGenre = getAnimeByGenre(genre);

  return (
    <>
      <Header />
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
                episodeNumber={anime.episodeNumber}
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
      <Footer />
    </>
  );
}
