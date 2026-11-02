import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "This Season Anime - AnimeGrabber" };

export default function ThisSeasonPage({ searchParams }: { searchParams: { page?: string } }) {
  const now = new Date();
  const seasons = ["winter", "spring", "summer", "fall"] as const;
  const season = seasons[Math.floor(now.getUTCMonth() / 3)];
  const year = now.getUTCFullYear();
  return (
    <CatalogPage
      title={`${season[0].toUpperCase()}${season.slice(1)} ${year} Anime`}
      description="Anime listed for the current season on MyAnimeList."
      baseUrl="/this-season"
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "season", year, season }}
    />
  );
}
