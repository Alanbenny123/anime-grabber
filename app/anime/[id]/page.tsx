"use client";
import React, { useState, useRef } from "react";
import EpisodePlayer from "@/components/EpisodePlayer";
import { mostPopularAnime, topAiringAnime } from "@/data/anime";

const anime = {
  id: "fire-force-s3",
  title: "Fire Force Season 3",
  description:
    'The story follows Special Fire Force Company 8, which features young and powerful third-generation pyrokinetic Shinra Kusakabe, nicknamed "Devil\'s Footprints".',
  episodes: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    number: i + 1,
    title: `Episode ${i + 1}`,
    videoUrl:
      i % 2 === 0
        ? "https://www.w3schools.com/html/mov_bbb.mp4"
        : "https://www.w3schools.com/html/movie.mp4",
    airDate: `2024-06-${String(i + 1).padStart(2, "0")}`,
    duration: "24m",
    summary: `Summary for episode ${i + 1}`,
  })),
  servers: [
    { name: "Main", url: "main" },
    { name: "Backup", url: "backup" },
  ],
};

export default function AnimeWatchPage() {
  const [selectedEp, setSelectedEp] = useState(anime.episodes[0]);
  const [selectedServer, setSelectedServer] = useState(anime.servers[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [comments, setComments] = useState([
    { user: "User1", text: "Great episode!" },
    { user: "User2", text: "Can't wait for the next one." },
  ]);
  const [commentInput, setCommentInput] = useState("");
  const playerRef = useRef<any>(null);

  // Auto-next episode
  const handleEnded = () => {
    const idx = anime.episodes.findIndex((ep) => ep.id === selectedEp.id);
    if (idx < anime.episodes.length - 1) {
      setSelectedEp(anime.episodes[idx + 1]);
    }
  };

  // Add comment
  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments((prev) => [...prev, { user: "You", text: commentInput }]);
      setCommentInput("");
    }
  };

  // Episode dropdown
  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ep = anime.episodes.find((ep) => ep.id === Number(e.target.value));
    if (ep) setSelectedEp(ep);
  };

  // Report issue (placeholder)
  const handleReport = () => {
    alert("Report submitted! (demo)");
  };

  return (
    <main className="min-h-screen bg-[#18181c] text-white">
      <div className="flex gap-6 max-w-[1400px] mx-auto pt-6 pb-12 px-2">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <div className="mb-2 text-lg font-semibold text-gray-200">
            {anime.title}
          </div>
          {/* Player */}
          <div className="rounded-lg overflow-hidden bg-black mb-4 border border-[#23243a]">
            <EpisodePlayer
              url={selectedEp.videoUrl}
              onEnded={handleEnded}
              ref={playerRef}
            />
          </div>
          {/* Server Selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            {anime.servers.map((server) => (
              <button
                key={server.url}
                onClick={() => setSelectedServer(server)}
                className={`px-4 py-1 rounded font-medium text-sm border transition-colors ${
                  selectedServer.url === server.url
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a]"
                }`}
              >
                {server.name}
              </button>
            ))}
          </div>
          {/* Episode Navigation Grid */}
          <div className="mb-4">
            <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mb-2 max-w-full overflow-x-auto">
              {anime.episodes.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => setSelectedEp(ep)}
                  className={`w-12 h-12 rounded font-medium text-sm border transition-colors flex items-center justify-center ${
                    selectedEp.id === ep.id
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a]"
                  }`}
                >
                  {ep.number}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() =>
                  setSelectedEp(
                    anime.episodes[
                      Math.max(
                        0,
                        anime.episodes.findIndex(
                          (ep) => ep.id === selectedEp.id
                        ) - 1
                      )
                    ]
                  )
                }
                disabled={selectedEp.id === 1}
                className="px-3 py-1 rounded font-medium text-sm border bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a] disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setSelectedEp(
                    anime.episodes[
                      Math.min(
                        anime.episodes.length - 1,
                        anime.episodes.findIndex(
                          (ep) => ep.id === selectedEp.id
                        ) + 1
                      )
                    ]
                  )
                }
                disabled={selectedEp.id === anime.episodes.length}
                className="px-3 py-1 rounded font-medium text-sm border bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a] disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          {/* Report Issue */}
          <div className="mb-4">
            <button
              onClick={handleReport}
              className="px-4 py-1 rounded bg-red-600 text-white font-medium text-sm hover:bg-red-700"
            >
              Report Issue
            </button>
          </div>
          {/* Episode Info */}
          <div className="mb-2 text-xl font-bold text-white">
            {anime.title} - {selectedEp.title}
          </div>
          <div className="mb-2 text-gray-400 text-sm flex gap-4">
            <span>Air date: {selectedEp.airDate}</span>
            <span>Duration: {selectedEp.duration}</span>
          </div>
          <div className="mb-4 text-gray-300 text-sm">{selectedEp.summary}</div>
          {/* Comments Section */}
          <div className="bg-[#23243a] rounded-lg p-4 mt-8">
            <div className="font-semibold mb-2">Comments</div>
            <form onSubmit={handleComment} className="flex gap-2 mb-4">
              <input
                className="flex-1 px-3 py-2 rounded bg-[#18181c] text-white border border-[#35364a] focus:outline-none"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-pink-600 text-white font-medium text-sm hover:bg-pink-700"
              >
                Post
              </button>
            </form>
            <div className="space-y-2">
              {comments.map((c, i) => (
                <div key={i} className="text-sm text-gray-200">
                  <span className="font-semibold text-pink-400 mr-2">
                    {c.user}:
                  </span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <aside className="w-[320px] hidden lg:block">
          <div className="mb-8">
            <div className="text-lg font-bold mb-4">RELATED</div>
            <div className="space-y-3">
              {topAiringAnime.slice(0, 5).map((anime) => (
                <div
                  key={anime.id}
                  className="flex gap-3 items-center bg-[#23243a] rounded-lg p-2 hover:bg-[#35364a] transition-colors"
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm line-clamp-2">
                      {anime.title}
                    </div>
                    <div className="text-xs text-gray-400">
                      {anime.type}{" "}
                      {anime.stats && "episode" in anime.stats
                        ? `• ${anime.stats.episode} eps`
                        : ""}
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500 mt-1">
                      {anime.stats?.views !== undefined && (
                        <span>👁️ {anime.stats.views}</span>
                      )}
                      {anime.stats?.likes !== undefined && (
                        <span>❤️ {anime.stats.likes}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-bold mb-4">RECOMMENDATIONS</div>
            <div className="space-y-3">
              {mostPopularAnime.slice(0, 5).map((anime) => (
                <div
                  key={anime.id}
                  className="flex gap-3 items-center bg-[#23243a] rounded-lg p-2 hover:bg-[#35364a] transition-colors"
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm line-clamp-2">
                      {anime.title}
                    </div>
                    <div className="text-xs text-gray-400">
                      {anime.type}{" "}
                      {anime.stats && "episode" in anime.stats
                        ? `• ${anime.stats.episode} eps`
                        : ""}
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500 mt-1">
                      {anime.stats?.views !== undefined && (
                        <span>👁️ {anime.stats.views}</span>
                      )}
                      {anime.stats?.likes !== undefined && (
                        <span>❤️ {anime.stats.likes}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
