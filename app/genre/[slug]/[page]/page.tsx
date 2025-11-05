import { popularAnime, topAiringAnime } from "../../../../data/anime";
import AnimeCard from "../../../../components/AnimeCard";
import Pagination from "../../../../components/Pagination";

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
  params: { slug: string; page: string };
};

// Generate metadata for each genre page
export function generateMetadata({ params }: Props) {
  const genre = params.slug;
  const page = parseInt(params.page) || 1;
  const displayName = getGenreDisplayName(genre);

  return {
    title: `${displayName} Anime - Page ${page} - AnimeGrabber`,
    description: `Browse page ${page} of the best ${displayName.toLowerCase()} anime series and movies in HD quality.`,
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

// Items per page
const ITEMS_PER_PAGE = 24;

// Generate static params for all genres and pages
export function generateStaticParams() {
  const params = [];
  const animeCount = popularAnime.length + topAiringAnime.length;
  const totalPages = Math.ceil(animeCount / ITEMS_PER_PAGE);

  for (const genre of genres) {
    for (let page = 1; page <= totalPages; page++) {
      params.push({
        slug: genre,
        page: page.toString(),
      });
    }
  }
  return params;
}

export default function GenrePage({ params }: Props) {
  const genre = params.slug;
  const currentPage = parseInt(params.page) || 1;
  const displayName = getGenreDisplayName(genre);

  // Get all anime for this genre
  const allAnimeInGenre = getAnimeByGenre(genre);

  // Calculate total pages
  const totalPages = Math.ceil(allAnimeInGenre.length / ITEMS_PER_PAGE);

  // Calculate slice indices
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get current page items
  const currentAnime = allAnimeInGenre.slice(startIndex, endIndex);

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
            <option>Popularity</option>
            <option>A-Z</option>
          </select>
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {currentAnime.map((anime) => (
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl={`/genre/${genre}`}
        />
      </section>
    </main>
  );
}
