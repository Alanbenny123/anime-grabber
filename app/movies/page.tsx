import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Anime Movies - AnimeGrabber" };

export default async function MoviesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  return (
    <CatalogPage
      title="Anime Movies"
      description="Top-rated anime movies on MyAnimeList."
      baseUrl="/movies"
      page={parseCatalogPage(page)}
      source={{ kind: "top", type: "movie" }}
    />
  );
}
