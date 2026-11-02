import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";

export default function MostPopularPage({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <CatalogPage
      title="Most Popular Anime"
      description="Anime ranked by popularity on MyAnimeList."
      baseUrl="/most-popular"
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "top", filter: "bypopularity" }}
    />
  );
}
