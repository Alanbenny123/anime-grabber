import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimeCard from "../../components/AnimeCard";
import { popularAnime } from "../../data/anime";

export const metadata = {
  title: "Anime Movies - AnimeGrabber",
  description:
    "Watch the latest and popular anime movies online for free in HD quality.",
};

// Filter only the movie types for display
const movies = popularAnime.filter((anime) => anime.type === "TV");

// Create some additional movie data
const animeMovies = [
  {
    id: "demon-slayer-mugen-train",
    title: "Demon Slayer: Mugen Train",
    image:
      "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
    type: "Movie",
    rating: 8.3,
  },
  {
    id: "your-name",
    title: "Your Name",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    type: "Movie",
    rating: 8.8,
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    type: "Movie",
    rating: 8.6,
  },
  {
    id: "jujutsu-kaisen-0",
    title: "Jujutsu Kaisen 0",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg",
    type: "Movie",
    rating: 7.9,
  },
  {
    id: "weathering-with-you",
    title: "Weathering with You",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_.jpg",
    type: "Movie",
    rating: 7.5,
  },
  {
    id: "a-silent-voice",
    title: "A Silent Voice",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    type: "Movie",
    rating: 8.1,
  },
  {
    id: "dragon-ball-super-broly",
    title: "Dragon Ball Super: Broly",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjhhMDU5Y2QtMzcyZS00ZGE1LTg3ZjMtMTYyOTM0OTFlYTRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    type: "Movie",
    rating: 7.8,
  },
  {
    id: "violet-evergarden-movie",
    title: "Violet Evergarden: The Movie",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzUxNGNkZWYtMjZmYS00NjJiLThmZDgtZGI3MzE1ZDY3MmQxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg",
    type: "Movie",
    rating: 8.5,
  },
];

export default function MoviesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Anime Movies</h1>

          {/* Featured Movies Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Popular Movies</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {animeMovies.map((movie) => (
                <AnimeCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  type={movie.type}
                  rating={movie.rating}
                />
              ))}
            </div>
          </div>

          {/* Recently Added Movies */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recently Added</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {animeMovies
                .slice(3)
                .concat(animeMovies.slice(0, 3))
                .map((movie) => (
                  <AnimeCard
                    key={`recent-${movie.id}`}
                    id={movie.id}
                    title={movie.title}
                    image={movie.image}
                    type={movie.type}
                    rating={movie.rating}
                  />
                ))}
            </div>
          </div>

          {/* Movie Genres */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">Movie Genres</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Horror",
                "Mystery",
                "Romance",
                "Sci-Fi",
                "Slice of Life",
                "Sports",
                "Supernatural",
              ].map((genre) => (
                <a
                  key={genre}
                  href={`/genre/${genre.toLowerCase().replace(" ", "-")}`}
                  className="bg-[#1f2937] hover:bg-[#374151] transition-colors p-4 rounded text-center font-medium"
                >
                  {genre}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
