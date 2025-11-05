import { popularAnime } from "../../../data/anime";
import AnimeCard from "../../../components/AnimeCard";
import Pagination from "../../../components/Pagination";

// Define props type for consistency
type Props = {
  params: { page: string };
};

// Generate metadata for each page
export function generateMetadata({ params }: Props) {
  const page = parseInt(params.page) || 1;
  return {
    title: `Most Popular Anime - Page ${page} - AnimeGrabber`,
    description: `Browse page ${page} of the most popular anime series and movies in HD quality.`,
  };
}

// Items per page
const ITEMS_PER_PAGE = 24;

// Calculate total pages
const TOTAL_PAGES = Math.ceil(popularAnime.length / ITEMS_PER_PAGE);

// Generate static params for all pages
export function generateStaticParams() {
  const pages = [];
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    pages.push({ page: i.toString() });
  }
  return pages;
}

export default function PopularPage({ params }: Props) {
  const currentPage = parseInt(params.page) || 1;

  // Calculate slice indices
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get current page items
  const currentAnime = popularAnime.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Most Popular Anime
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
            <option>Popularity</option>
            <option>Rating</option>
            <option>Latest</option>
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
              rating={anime.rating}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          baseUrl="/most-popular"
        />
      </section>
    </main>
  );
}
