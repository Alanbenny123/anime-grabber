import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import AnimeSection from "../components/AnimeSection";

import {
  featuredAnime,
  latestEpisodes,
  popularAnime,
  topAiringAnime,
  upcomingAnime,
} from "../data/anime";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Banner */}
        <HeroBanner
          id={featuredAnime.id}
          title={featuredAnime.title}
          description={featuredAnime.description || ""}
          imageUrl={featuredAnime.image}
          type={featuredAnime.type}
          rating={featuredAnime.rating}
        />

        {/* Latest Episodes */}
        <AnimeSection
          title="Latest Episodes"
          viewAllLink="/latest"
          animeList={latestEpisodes}
        />

        {/* Popular Anime */}
        <AnimeSection
          title="Popular Anime"
          viewAllLink="/popular"
          animeList={popularAnime}
        />

        {/* Top Airing */}
        <AnimeSection
          title="Top Airing"
          viewAllLink="/top-airing"
          animeList={topAiringAnime}
        />

        {/* Upcoming */}
        <AnimeSection
          title="Upcoming Anime"
          viewAllLink="/upcoming"
          animeList={upcomingAnime}
        />
      </main>

      <Footer />
    </>
  );
}
