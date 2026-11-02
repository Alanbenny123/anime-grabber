import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";

export default async function MostPopularPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  return (
    <CatalogPage
      title="Most Popular Anime"
      description="Anime ranked by popularity on MyAnimeList."
      baseUrl="/most-popular"
      page={parseCatalogPage(page)}
      source={{ kind: "top", filter: "bypopularity" }}
    />
  );
}
