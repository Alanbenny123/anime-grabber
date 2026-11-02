import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Top Airing Anime - AnimeGrabber" };

export default async function TopAiringPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  return (
    <CatalogPage
      title="Top Airing Anime"
      description="Currently airing anime ranked by MyAnimeList."
      baseUrl="/top-airing"
      page={parseCatalogPage(page)}
      source={{ kind: "top", filter: "airing" }}
    />
  );
}
