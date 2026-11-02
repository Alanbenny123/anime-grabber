// Jikan API (MyAnimeList) integration
// Documentation: https://docs.api.jikan.moe/

const JIKAN_BASE_URL = "https://api.jikan.moe/v4";
const FETCH_TIMEOUT = 8000;
const MAX_ATTEMPTS = 3;
const RETRY_DELAY = 500;

export class JikanHttpError extends Error {
  constructor(public status: number, statusText: string) {
    super(`Jikan returned HTTP ${status}: ${statusText}`);
    this.name = "JikanHttpError";
  }
}

function isRetryable(error: unknown): boolean {
  if (error instanceof JikanHttpError) {
    return error.status === 429 || error.status >= 500;
  }
  return error instanceof Error &&
    (error.name === "AbortError" || error instanceof TypeError ||
      "code" in error && error.code === "UND_ERR_CONNECT_TIMEOUT");
}

function retryAfterMs(value: string | null): number {
  if (!value) return 0;
  const seconds = Number(value);
  const milliseconds = Number.isFinite(seconds)
    ? seconds * 1000
    : Date.parse(value) - Date.now();
  return Number.isFinite(milliseconds) ? Math.max(0, Math.min(milliseconds, 5000)) : 0;
}

// Helper function to fetch with timeout and retry
async function fetchWithRetry(
  url: string
): Promise<Response> {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
    let failure: unknown;
    let serverDelay = 0;
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        next: { revalidate: 300 },
        headers: { "User-Agent": "AnimeGrabber/1.0" },
      });
      if (response.ok) return response;
      failure = new JikanHttpError(response.status, response.statusText);
      serverDelay = retryAfterMs(response.headers.get("retry-after"));
    } catch (error) {
      failure = error;
    } finally {
      clearTimeout(timeoutId);
    }

    if (attempt === MAX_ATTEMPTS - 1 || !isRetryable(failure)) throw failure;
    const delay = Math.max(RETRY_DELAY * 2 ** attempt, serverDelay);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error("Jikan request failed");
}

export interface JikanAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
  };
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string | null;
    prop: {
      from: { day: number | null; month: number | null; year: number | null };
      to: { day: number | null; month: number | null; year: number | null };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: Array<{ mal_id: number; type: string; name: string; url: string }>;
  licensors: Array<{ mal_id: number; type: string; name: string; url: string }>;
  studios: Array<{ mal_id: number; type: string; name: string; url: string }>;
  genres: Array<{ mal_id: number; type: string; name: string; url: string }>;
  explicit_genres: Array<{ mal_id: number; type: string; name: string; url: string }>;
  themes: Array<{ mal_id: number; type: string; name: string; url: string }>;
  demographics: Array<{ mal_id: number; type: string; name: string; url: string }>;
}

export interface JikanResponse<T> {
  data: T[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
}

export interface JikanAnimeDetails extends JikanAnime {
  relations: Array<{
    relation: string;
    entry: Array<{ mal_id: number; type: string; name: string; url: string }>;
  }>;
  external: Array<{ name: string; url: string }>;
  streaming: Array<{ name: string; url: string }>;
}

export interface JikanGenre {
  mal_id: number;
  name: string;
}

export async function getTopAnime(
  page: number = 1,
  options: { filter?: "airing" | "bypopularity" | "favorite"; type?: "tv" | "movie" } = {}
) {
  const params = new URLSearchParams({ page: String(page), limit: "24" });
  if (options.filter) params.set("filter", options.filter);
  if (options.type) params.set("type", options.type);
  const response = await fetchWithRetry(`${JIKAN_BASE_URL}/top/anime?${params}`);
  return (await response.json()) as JikanResponse<JikanAnime>;
}

export async function getAnimeGenres() {
  const response = await fetchWithRetry(`${JIKAN_BASE_URL}/genres/anime`);
  return (await response.json()) as { data: JikanGenre[] };
}

// Fetch top airing anime
export async function getTopAiringAnime(page: number = 1, limit: number = 25) {
  try {
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/top/anime?filter=airing&page=${page}&limit=${limit}`
    );
    return await response.json() as JikanResponse<JikanAnime>;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    throw error;
  }
}

// Fetch most popular anime
export async function getMostPopularAnime(page: number = 1, limit: number = 25) {
  try {
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/top/anime?filter=bypopularity&page=${page}&limit=${limit}`
    );
    return await response.json() as JikanResponse<JikanAnime>;
  } catch (error) {
    console.error("Error fetching popular anime:", error);
    throw error;
  }
}

// Fetch anime by ID
export async function getAnimeById(id: number) {
  try {
    const response = await fetchWithRetry(`${JIKAN_BASE_URL}/anime/${id}/full`);
    return await response.json() as { data: JikanAnimeDetails };
  } catch (error) {
    console.error("Error fetching anime details:", error);
    throw error;
  }
}

// Search anime
export async function searchAnime(query: string, page: number = 1, limit: number = 25) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/anime?q=${encodedQuery}&page=${page}&limit=${limit}`
    );
    return await response.json() as JikanResponse<JikanAnime>;
  } catch (error) {
    console.error("Error searching anime:", error);
    throw error;
  }
}

// Get anime by genre
export async function getAnimeByGenre(genreId: number, page: number = 1, limit: number = 25) {
  try {
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/anime?genres=${genreId}&page=${page}&limit=${limit}`
    );
    return await response.json() as JikanResponse<JikanAnime>;
  } catch (error) {
    console.error("Error fetching anime by genre:", error);
    throw error;
  }
}

// Get seasonal anime
export async function getSeasonalAnime(
  year: number,
  season: "winter" | "spring" | "summer" | "fall",
  page: number = 1,
  limit: number = 25
) {
  try {
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/seasons/${year}/${season}?page=${page}&limit=${limit}`
    );
    return await response.json() as JikanResponse<JikanAnime>;
  } catch (error) {
    console.error("Error fetching seasonal anime:", error);
    throw error;
  }
}

// Get anime episodes
export async function getAnimeEpisodes(id: number, page: number = 1) {
  try {
    const response = await fetchWithRetry(
      `${JIKAN_BASE_URL}/anime/${id}/episodes?page=${page}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching anime episodes:", error);
    throw error;
  }
}

// Transform Jikan anime to our AnimeData format
export function transformJikanToAnimeData(jikanAnime: JikanAnime): {
  id: string;
  title: string;
  image: string;
  type?: string;
  episodeNumber?: number;
  rating?: number;
  description?: string;
  genres?: string[];
  status?: string;
  releaseYear?: number;
  stats?: {
    views?: number;
    likes?: number;
    episode?: number;
  };
} {
  const image = jikanAnime.images?.jpg?.large_image_url || jikanAnime.images?.jpg?.image_url;
  let supportedImage = "/anime-placeholder.svg";
  if (image) {
    try {
      const url = new URL(image);
      if (url.protocol === "https:" && ["cdn.myanimelist.net", "m.media-amazon.com"].includes(url.hostname)) {
        supportedImage = image;
      }
    } catch {
      // Keep the local placeholder for malformed image URLs.
    }
  }
  return {
    id: jikanAnime.mal_id.toString(),
    title: jikanAnime.title_english || jikanAnime.title,
    image: supportedImage,
    type: jikanAnime.type,
    episodeNumber: jikanAnime.episodes || undefined,
    rating: jikanAnime.score || undefined,
    description: jikanAnime.synopsis || undefined,
    genres: jikanAnime.genres.map((g) => g.name),
    status: jikanAnime.status,
    releaseYear: jikanAnime.year || undefined,
    stats: {
      views: jikanAnime.members,
      likes: jikanAnime.favorites,
      episode: jikanAnime.episodes || undefined,
    },
  };
}


