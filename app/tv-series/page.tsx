import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Anime TV Series - AnimeGrabber" };

export default async function TVSeriesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  return (
    <CatalogPage
      title="Anime TV Series"
      description="Top-rated anime TV series on MyAnimeList."
      baseUrl="/tv-series"
      page={parseCatalogPage(page)}
      source={{ kind: "top", type: "tv" }}
    />
  );
}
