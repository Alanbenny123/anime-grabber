import { notFound } from "next/navigation";
import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";
import { getAnimeGenres } from "@/lib/api/jikan";
import { genreSlug } from "@/lib/genres";

export const dynamic = "force-dynamic";

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ slug }, { page }] = await Promise.all([params, searchParams]);
  let genres;
  try {
    genres = (await getAnimeGenres()).data;
  } catch (error) {
    console.error("Could not load anime genres:", error);
    return <main className="container mx-auto px-4 py-8 text-yellow-300">Genres are temporarily unavailable. Please try again later.</main>;
  }
  const genre = genres.find((entry) => genreSlug(entry.name) === slug);
  if (!genre) notFound();

  return (
    <CatalogPage
      title={`${genre.name} Anime`}
      description={`Browse anime in the ${genre.name} genre.`}
      baseUrl={`/genre/${slug}`}
      page={parseCatalogPage(page)}
      source={{ kind: "genre", genreId: genre.mal_id }}
    />
  );
}
