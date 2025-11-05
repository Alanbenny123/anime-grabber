import Footer from "../../components/Footer";
import AnimeCard from "../../components/AnimeCard";
import { topAiringAnime } from "../../data/anime";

export const metadata = {
  title: "Top Airing Anime - AnimeGrabber",
  description:
    "Watch the top currently airing anime series with the highest ratings and popularity.",
};

// Additional top airing anime data
const moreTopAiringAnime = [
  {
    id: "dandadan",
    title: "Dandadan",
    image:
      "https://m.media-amazon.com/images/M/MV5BODI1ZTI5YTktOTRlYS00MGJiLTg4MzYtN2ViZTc3OGQ4NTA4XkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 7,
    rating: 8.5,
  },
  {
    id: "mushoku-tensei-s2",
    title: "Mushoku Tensei: Jobless Reincarnation Season 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2QyY2NmYTgtMzZjMy00NTcwLTgwYTMtZTU4OWM0YWUwYTQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
    type: "TV",
    episodeNumber: 12,
    rating: 8.8,
  },
  {
    id: "black-clover",
    title: "Black Clover",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 170,
    rating: 8.3,
  },
  {
    id: "boruto",
    title: "Boruto: Naruto Next Generations",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg",
    type: "TV",
    episodeNumber: 293,
    rating: 7.0,
  },
  {
    id: "spy-x-family-s2",
    title: "Spy x Family Season 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGY5NWIxMjAtODBjNC00MmZhLTk1ZTAtNGRhYTYyYjgwYTJiXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 12,
    rating: 8.3,
  },
  {
    id: "dr-stone-s3",
    title: "Dr. Stone Season 3",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmEyM2VlZWItNWY4Ni00YmJlLWEwYTQtOTRjMjQ5NGEwOGQyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    type: "TV",
    episodeNumber: 11,
    rating: 8.4,
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    episodeNumber: 12,
    rating: 7.8,
  },
  {
    id: "hell-paradise",
    title: "Hell's Paradise",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmY0MDNkYmUtOTFkNS00YmIzLWExNmUtZWYzZmZiOGQwNmY4XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_.jpg",
    type: "TV",
    episodeNumber: 13,
    rating: 8.1,
  },
];

// Combine all the top airing anime
const allTopAiringAnime = [...topAiringAnime, ...moreTopAiringAnime];

export default function TopAiringPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Top Airing Anime
        </h1>

        {/* TV Schedule */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">TV Schedule</h2>
          <div className="flex overflow-x-auto pb-2 mb-4">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <button
                key={day}
                className={`px-4 py-2 mr-2 rounded font-medium whitespace-nowrap ${
                  day === "Monday"
                    ? "bg-blue-600 text-white"
                    : "bg-[#1f2937] text-gray-300 hover:bg-[#374151]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Filter */}
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
            OVAs
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            ONAs
          </button>
          <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
            Specials
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
          {allTopAiringAnime.map((anime) => (
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
