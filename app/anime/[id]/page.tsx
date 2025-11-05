"use client";
import React, { useState, useRef, useEffect } from "react";
import EpisodePlayer from "@/components/EpisodePlayer";
import ExternalVideoPlayer from "@/components/ExternalVideoPlayer";
import StreamingOptions from "@/components/StreamingOptions";
import { mostPopularAnime, topAiringAnime } from "@/data/anime";
import { useParams } from "next/navigation";

interface AnimeDetails {
  mal_id: number;
  title: string;
  title_english: string | null;
  synopsis: string | null;
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
  };
  episodes: number | null;
  score: number | null;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  aired: {
    from: string;
    to: string | null;
    string: string;
  };
  genres: Array<{ name: string }>;
}

export default function AnimeWatchPage() {
  const params = useParams();
  const animeId = params.id as string;
  
  const [animeData, setAnimeData] = useState<AnimeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEp, setSelectedEp] = useState(1);
  const [selectedServer, setSelectedServer] = useState("trailer");
  const [comments, setComments] = useState([
    { user: "User1", text: "Great episode!" },
    { user: "User2", text: "Can't wait for the next one." },
  ]);
  const [commentInput, setCommentInput] = useState("");
  const playerRef = useRef<any>(null);

  // Fetch anime details from API
  useEffect(() => {
    async function fetchAnimeDetails() {
      try {
        setLoading(true);
        setError(null);
        
        // Try to parse as MyAnimeList ID
        const malId = parseInt(animeId);
        if (isNaN(malId)) {
          // If not a number, try to use it as a title for fallback
          setError(null); // Don't show error, use fallback
          setAnimeData({
            mal_id: 0,
            title: animeId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
            title_english: animeId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
            synopsis: null,
            trailer: { youtube_id: null, url: null, embed_url: null },
            episodes: null,
            score: null,
            images: { jpg: { large_image_url: "" } },
            aired: { from: "", to: null, string: "" },
            genres: [],
          });
          setLoading(false);
          return;
        }

        const response = await fetch(`/api/anime/${malId}`);
        
        if (!response.ok) {
          // API failed, but continue with fallback
          console.warn("API unavailable, using fallback data");
          setError("API temporarily unavailable - showing basic info");
          // Create fallback data
          setAnimeData({
            mal_id: malId,
            title: "Anime",
            title_english: "Anime",
            synopsis: null,
            trailer: { youtube_id: null, url: null, embed_url: null },
            episodes: 12,
            score: null,
            images: { jpg: { large_image_url: "" } },
            aired: { from: "", to: null, string: "" },
            genres: [],
          });
          setLoading(false);
          return;
        }

        const data = await response.json();
        setAnimeData(data);
        setError(null); // Clear any previous errors
      } catch (error: any) {
        console.error("Error fetching anime details:", error);
        // Even on error, show fallback so streaming options work
        setError("API unavailable - using fallback");
        setAnimeData({
          mal_id: parseInt(animeId) || 0,
          title: animeId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          title_english: animeId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          synopsis: null,
          trailer: { youtube_id: null, url: null, embed_url: null },
          episodes: 12,
          score: null,
          images: { jpg: { large_image_url: "" } },
          aired: { from: "", to: null, string: "" },
          genres: [],
        });
      } finally {
        setLoading(false);
      }
    }
    
    fetchAnimeDetails();
  }, [animeId]);

  // Generate episodes list
  const episodes = animeData?.episodes
    ? Array.from({ length: Math.min(animeData.episodes, 12) }, (_, i) => ({
        id: i + 1,
        number: i + 1,
        title: `Episode ${i + 1}`,
      }))
    : [];

  // Get video URL - use YouTube trailer if available
  const getVideoUrl = () => {
    if (animeData?.trailer?.youtube_id) {
      return `https://www.youtube.com/watch?v=${animeData.trailer.youtube_id}`;
    }
    return null;
  };

  // Auto-next episode
  const handleEnded = () => {
    if (selectedEp < episodes.length) {
      setSelectedEp(selectedEp + 1);
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
    setSelectedEp(Number(e.target.value));
  };

  // Report issue (placeholder)
  const handleReport = () => {
    alert("Report submitted! (demo)");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#18181c] text-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-gray-400 mb-2">Loading anime details...</div>
            <div className="text-xs text-gray-500">This may take a moment</div>
          </div>
        </div>
      </main>
    );
  }

  // Only show error page if we have no data AND no fallback possible
  if (!animeData && !loading) {
    return (
      <main className="min-h-screen bg-[#18181c] text-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md px-4">
            <div className="text-red-400 mb-4 text-xl font-semibold">
              Unable to load anime data
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="/"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
              >
                Return to Home
              </a>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Ensure animeData exists before accessing properties
  if (!animeData) {
    return (
      <main className="min-h-screen bg-[#18181c] text-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-gray-400 mb-2">Loading anime details...</div>
            <div className="text-xs text-gray-500">This may take a moment</div>
          </div>
        </div>
      </main>
    );
  }

  const title = animeData.title_english || animeData.title;
  const videoUrl = getVideoUrl();

  return (
    <main className="min-h-screen bg-[#18181c] text-white">
      <div className="flex gap-6 max-w-[1400px] mx-auto pt-6 pb-12 px-2">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <div className="mb-2 text-lg font-semibold text-gray-200">
            {title}
          </div>
          
          {/* Episode Navigation Grid - BEFORE video player */}
          {episodes.length > 0 && (
            <div className="mb-4">
              <div className="text-sm text-gray-400 mb-2">
                Episodes ({episodes.length} total)
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-4 mb-2 max-w-full overflow-x-auto">
                {episodes.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => setSelectedEp(ep.number)}
                    className={`w-12 h-12 rounded font-medium text-sm border transition-colors flex items-center justify-center ${
                      selectedEp === ep.number
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
                  onClick={() => setSelectedEp(Math.max(1, selectedEp - 1))}
                  disabled={selectedEp === 1}
                  className="px-3 py-1 rounded font-medium text-sm border bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a] disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setSelectedEp(Math.min(episodes.length, selectedEp + 1))
                  }
                  disabled={selectedEp === episodes.length}
                  className="px-3 py-1 rounded font-medium text-sm border bg-[#23243a] text-gray-200 border-[#23243a] hover:bg-[#35364a] disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {/* Player - ONLY video */}
          <div className="rounded-lg overflow-hidden bg-black mb-4 border border-[#23243a]">
            {videoUrl ? (
              <EpisodePlayer
                url={videoUrl}
                onEnded={handleEnded}
                ref={playerRef}
              />
            ) : (
              <ExternalVideoPlayer
                animeTitle={title}
                episodeNumber={selectedEp}
              />
            )}
          </div>
          {/* API Status Banner */}
          {error && (
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-4">
              <div className="text-sm text-yellow-200">
                <strong>⚠️ API Temporarily Unavailable:</strong> Showing basic info. 
                Streaming options below will still work and redirect you to providers.
              </div>
            </div>
          )}
          
          {/* Info Banner */}
          {!videoUrl && !error && (
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-4">
              <div className="text-sm text-yellow-200">
                <strong>Note:</strong> This site uses Jikan API for anime metadata
                only. Actual video streaming requires legal licensing or partnerships
                with streaming services like Crunchyroll, Funimation, etc.
              </div>
            </div>
          )}
          
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
            {title} {episodes.length > 0 && `- Episode ${selectedEp}`}
          </div>
          <div className="mb-2 text-gray-400 text-sm flex gap-4 flex-wrap">
            {animeData.aired?.string && (
              <span>Aired: {animeData.aired.string}</span>
            )}
            {animeData.score && (
              <span>Rating: ⭐ {animeData.score}/10</span>
            )}
            {animeData.episodes && <span>Episodes: {animeData.episodes}</span>}
          </div>
          {animeData.genres.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {animeData.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}
          {animeData.synopsis && (
            <div className="mb-4 text-gray-300 text-sm">
              <strong className="text-white">Synopsis:</strong>{" "}
              {animeData.synopsis.substring(0, 500)}
              {animeData.synopsis.length > 500 && "..."}
            </div>
          )}
          
          {/* Streaming Options */}
          <StreamingOptions
            animeTitle={title}
            malId={animeData.mal_id}
          />
          
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
