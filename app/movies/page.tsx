import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Anime Movies - AnimeGrabber" };

export default function MoviesPage({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <CatalogPage
      title="Anime Movies"
      description="Top-rated anime movies on MyAnimeList."
      baseUrl="/movies"
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "top", type: "movie" }}
    />
  );
}
