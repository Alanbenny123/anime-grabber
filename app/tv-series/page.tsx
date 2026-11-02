import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Anime TV Series - AnimeGrabber" };

export default function TVSeriesPage({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <CatalogPage
      title="Anime TV Series"
      description="Top-rated anime TV series on MyAnimeList."
      baseUrl="/tv-series"
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "top", type: "tv" }}
    />
  );
}
