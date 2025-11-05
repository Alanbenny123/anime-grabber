"use client";
import HeroBanner from "@/components/HeroBanner";
import AnimeSection from "@/components/AnimeSection";
import ScheduleWidget from "@/components/ScheduleWidget";
import TrendingPosts from "@/components/TrendingPosts";
import Top10 from "@/components/Top10";
import React, { useRef, useLayoutEffect, useState } from "react";

import {
  featuredAnime,
  topAiringAnime,
  mostPopularAnime,
  mostFavoriteAnime,
  latestCompletedAnime,
} from "@/data/anime";

export default function Home() {
  const scheduleRef = useRef<HTMLDivElement>(null);
  const [scheduleHeight, setScheduleHeight] = useState<string | undefined>(
    undefined
  );

  useLayoutEffect(() => {
    if (!scheduleRef.current) return;
    const updateHeight = () => {
      setScheduleHeight(`${scheduleRef.current?.offsetHeight}px`);
    };
    updateHeight();
    const observer = new window.ResizeObserver(updateHeight);
    observer.observe(scheduleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Banner */}
      <HeroBanner
        id={featuredAnime.id}
        title={featuredAnime.title}
        description={featuredAnime.description}
        imageUrl={featuredAnime.image}
        type={featuredAnime.type}
        rating={featuredAnime.rating}
      />
      {/* Top Airing */}
      <AnimeSection
        title="Top Airing"
        viewAllLink="/top-airing"
        animeList={topAiringAnime}
      />
      {/* Most Popular */}
      <AnimeSection
        title="Most Popular"
        viewAllLink="/most-popular"
        animeList={mostPopularAnime}
      />
      {/* Most Favorite */}
      <AnimeSection
        title="Most Favorite"
        viewAllLink="/most-favorite"
        animeList={mostFavoriteAnime}
      />
      {/* Latest Completed */}
      <AnimeSection
        title="Latest Completed"
        viewAllLink="/latest-completed"
        animeList={latestCompletedAnime}
      />
      {/* Schedule + Top 10 side by side, Trending Posts below Schedule */}
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
          {/* Left column: Schedule + Trending */}
          <div className="flex-1 flex flex-col gap-8" ref={scheduleRef}>
            <ScheduleWidget />
            <TrendingPosts />
          </div>
          {/* Right column: Top 10 */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col">
            <Top10 minHeight={scheduleHeight} />
          </div>
        </div>
      </div>
    </main>
  );
}
