import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Top Airing Anime - AnimeGrabber" };

export default function TopAiringPage({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <CatalogPage
      title="Top Airing Anime"
      description="Currently airing anime ranked by MyAnimeList."
      baseUrl="/top-airing"
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "top", filter: "airing" }}
    />
  );
}
