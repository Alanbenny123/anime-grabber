import AnimeCard from "@/components/AnimeCard";
import Pagination from "@/components/Pagination";
import {
  getAnimeByGenre,
  getSeasonalAnime,
  getTopAnime,
  searchAnime,
  transformJikanToAnimeData,
} from "@/lib/api/jikan";

type CatalogSource =
  | { kind: "top"; filter?: "airing" | "bypopularity" | "favorite"; type?: "tv" | "movie" }
  | { kind: "genre"; genreId: number }
  | { kind: "season"; year: number; season: "winter" | "spring" | "summer" | "fall" }
  | { kind: "search"; query: string };

interface CatalogPageProps {
  title: string;
  description?: string;
  baseUrl: string;
  page: number;
  source: CatalogSource;
}

export function parseCatalogPage(value?: string) {
  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0 ? page : 1;
}

export default async function CatalogPage({
  title,
  description,
  baseUrl,
  page,
  source,
}: CatalogPageProps) {
  let anime: ReturnType<typeof transformJikanToAnimeData>[] = [];
  let totalPages = 1;
  let error = false;

  try {
    const result =
      source.kind === "top"
        ? await getTopAnime(page, source)
        : source.kind === "genre"
          ? await getAnimeByGenre(source.genreId, page, 24)
          : source.kind === "season"
            ? await getSeasonalAnime(source.year, source.season, page, 24)
            : await searchAnime(source.query, page, 24);
    anime = result.data.map(transformJikanToAnimeData);
    totalPages = Math.max(1, result.pagination.last_visible_page);
  } catch (cause) {
    console.error(`Could not load ${title}:`, cause);
    error = true;
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        {description && <p className="text-gray-400 mb-8">{description}</p>}
        {error ? (
          <p role="alert" className="text-yellow-300">
            Anime data is temporarily unavailable. Please try again later.
          </p>
        ) : anime.length === 0 ? (
          <p className="text-gray-400">No anime found.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {anime.map((entry) => (
                <AnimeCard key={entry.id} {...entry} />
              ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} baseUrl={baseUrl} />
          </>
        )}
      </section>
    </main>
  );
}
