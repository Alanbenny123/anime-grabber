import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimeCard from "../../components/AnimeCard";
import { popularAnime } from "../../data/anime";

export const metadata = {
  title: "Most Popular Anime - AnimeGrabber",
  description:
    "Browse and watch the most popular anime series and movies in HD quality.",
};

// Additional popular anime data
const allTimePopular = [
  {
    id: "death-note",
    title: "Death Note",
    image:
      "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg",
    type: "TV",
    rating: 9.0,
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
    type: "TV",
    rating: 9.1,
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    type: "TV",
    rating: 9.1,
  },
  {
    id: "code-geass",
    title: "Code Geass: Lelouch of the Rebellion",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzZjNzI1NjctYmNhZC00YTg4LWIwZTEtYzY4ZjA5YmYyY2IzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "one-punch-man",
    title: "One-Punch Man",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg",
    type: "TV",
    rating: 8.9,
  },
  {
    id: "monster",
    title: "Monster",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2ZkYTAwMGMtOGEwOS00MzBjLTgxOGYtZTYwY2E1ZjMyZmY4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    image:
      "https://m.media-amazon.com/images/M/MV5BODJhZGE4NzgtYjQzZC00ZDUwLWI1ZjItNDQ2NDRjY2Y2Y2Q1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    rating: 8.4,
  },
  {
    id: "gintama",
    title: "Gintama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
  {
    id: "mob-psycho-100",
    title: "Mob Psycho 100",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmE1NjIyNjYtMTVmMy00M2YyLTljMjMtZGQwYmUxOTU4NjRlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    rating: 8.6,
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQwODI0ODItMmFkMS00ZmRiLWFhM2ItODViNDlkNjRmZGI1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    type: "TV",
    rating: 8.8,
  },
  {
    id: "kaguya-sama",
    title: "Kaguya-sama: Love is War",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWUwYmVhYTctZGY5Ni00MGU2LTkwMTYtOTE4MTY5ODI5OTRlXkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_.jpg",
    type: "TV",
    rating: 8.7,
  },
];

// Combine all popular anime data
const allPopularAnime = [...allTimePopular, ...popularAnime];

export default function MostPopularPage() {
  return (
    <>
      <Header />
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
            <button className="bg-[#1f2937] hover:bg-[#374151] text-white px-4 py-2 rounded font-medium">
              Last Season
            </button>
          </div>

          {/* Sort options */}
          <div className="flex items-center mb-8">
            <label className="mr-3 font-medium">Sort by:</label>
            <select className="bg-[#1f2937] text-white px-4 py-2 rounded font-medium border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Popularity</option>
              <option>Rating</option>
              <option>Latest</option>
              <option>Title A-Z</option>
            </select>
          </div>

          {/* Anime Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allPopularAnime.map((anime) => (
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
      <Footer />
    </>
  );
}
