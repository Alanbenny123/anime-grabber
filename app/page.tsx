import AnimeSection from "@/components/AnimeSection";
import HeroBanner from "@/components/HeroBanner";
import { getTopAnime, transformJikanToAnimeData } from "@/lib/api/jikan";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [airingResult, popularResult] = await Promise.allSettled([
    getTopAnime(1, { filter: "airing" }),
    getTopAnime(1, { filter: "bypopularity" }),
  ]);
  const airing = airingResult.status === "fulfilled"
    ? airingResult.value.data.slice(0, 6).map(transformJikanToAnimeData)
    : [];
  const popular = popularResult.status === "fulfilled"
    ? popularResult.value.data.slice(0, 6).map(transformJikanToAnimeData)
    : [];
  const featured = airing[0] || popular[0];

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {featured && (
        <HeroBanner
          id={featured.id}
          title={featured.title}
          description={featured.description || "Explore this anime on MyAnimeList."}
          imageUrl={featured.image}
          type={featured.type}
          rating={featured.rating}
        />
      )}
      {airing.length > 0 && <AnimeSection title="Top Airing" viewAllLink="/top-airing" animeList={airing} />}
      {popular.length > 0 && <AnimeSection title="Most Popular" viewAllLink="/most-popular" animeList={popular} />}
      {!featured && (
        <div className="container mx-auto px-4 py-16 text-gray-300" role="alert">
          Anime data is temporarily unavailable. Please try again later.
        </div>
      )}
    </main>
  );
}
