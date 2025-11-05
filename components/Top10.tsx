"use client";

import React, { useState } from "react";
import { topAiringAnime, mostPopularAnime } from "@/data/anime";

const allTimePopular = [
  {
    id: "death-note",
    title: "Death Note",
    image:
      "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg",
    type: "TV",
    stats: { views: 900, likes: 850 },
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
    type: "TV",
    stats: { views: 870, likes: 800 },
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    type: "TV",
    stats: { views: 800, likes: 780 },
  },
  {
    id: "code-geass",
    title: "Code Geass: Lelouch of the Rebellion",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzZjNzI1NjctYmNhZC00YTg4LWIwZTEtYzY4ZjA5YmYyY2IzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    type: "TV",
    stats: { views: 780, likes: 760 },
  },
  {
    id: "one-punch-man",
    title: "One-Punch Man",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    type: "TV",
    stats: { views: 770, likes: 750 },
  },
  {
    id: "cowboy-bebop",
    title: "Cowboy Bebop",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_.jpg",
    type: "TV",
    stats: { views: 760, likes: 740 },
  },
  {
    id: "monster",
    title: "Monster",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2ZkYTAwMGMtOGEwOS00MzBjLTgxOGYtZTYwY2E1ZjMyZmY4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    type: "TV",
    stats: { views: 750, likes: 730 },
  },
  {
    id: "made-in-abyss",
    title: "Made in Abyss",
    image:
      "https://m.media-amazon.com/images/M/MV5BODJhZGE4NzgtYjQzZC00ZDUwLWI1ZjItNDQ2NDRjY2Y2Y2Q1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    stats: { views: 740, likes: 720 },
  },
  {
    id: "gintama",
    title: "Gintama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
    type: "TV",
    stats: { views: 730, likes: 710 },
  },
  {
    id: "mob-psycho-100",
    title: "Mob Psycho 100",
    image:
      "https://m.media-amazon.com/images/M/MV5BZmE1NjIyNjYtMTVmMy00M2YyLTljMjMtZGQwYmUxOTU4NjRlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
    type: "TV",
    stats: { views: 720, likes: 700 },
  },
];

function fillToTen(list) {
  if (list.length >= 10) return list.slice(0, 10);
  const result = [];
  while (result.length < 10) {
    for (let i = 0; i < list.length && result.length < 10; i++) {
      result.push({ ...list[i], id: `${list[i].id}-copy${result.length}` });
    }
  }
  return result;
}

const tabData = {
  Today: fillToTen(topAiringAnime),
  Week: fillToTen(mostPopularAnime),
  Month: allTimePopular.slice(0, 10),
};

const tabs = ["Today", "Week", "Month"];

export default function Top10({ minHeight }: { minHeight?: string }) {
  const [selectedTab, setSelectedTab] = useState("Today");
  const animeList = tabData[selectedTab];

  return (
    <section
      className="w-full max-w-xs mx-auto mt-8 mb-8 h-full"
      style={minHeight ? { minHeight } : {}}
    >
      <div className="bg-[#191a23] rounded-xl p-6 shadow-lg h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Top 10</h2>
          <div className="flex gap-2 text-xs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-2 py-1 rounded ${
                  selectedTab === tab
                    ? "bg-pink-600 text-white"
                    : "bg-[#23243a] text-gray-200"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <ol className="space-y-3 flex-1">
          {animeList.map((anime, idx) => (
            <li key={anime.id + idx} className="flex items-center gap-3">
              <span className="text-xl font-bold text-pink-500 w-6 text-center">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <img
                src={anime.image}
                alt={anime.title}
                className="w-10 h-14 rounded object-cover"
              />
              <div className="flex-1">
                <div className="text-white text-sm font-semibold">
                  {anime.title}
                </div>
                <div className="flex gap-2 text-xs text-gray-400 mt-1">
                  <span>👁 {anime.stats?.views ?? anime.views ?? 0}</span>
                  <span>❤️ {anime.stats?.likes ?? anime.likes ?? 0}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
