// Jikan API (MyAnimeList) integration
// Documentation: https://docs.api.jikan.moe/

const JIKAN_BASE_URL = "https://api.jikan.moe/v4";
const FETCH_TIMEOUT = 30000; // 30 seconds
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second base delay

// Helper function to fetch with timeout and retry
async function fetchWithRetry(
  url: string,
  retries: number = MAX_RETRIES,
  delay: number = RETRY_DELAY
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "AnimeWeb/1.0",
      },
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    // If it's an abort error (timeout) or connection error, retry
    if (
      (error.name === "AbortError" || error.code === "UND_ERR_CONNECT_TIMEOUT") &&
      retries > 0
    ) {
      console.log(`Retrying fetch (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchWithRetry(url, retries - 1, delay * 2); // Exponential backoff
    }
    
    throw error;
  }
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
  return {
    id: jikanAnime.mal_id.toString(),
    title: jikanAnime.title_english || jikanAnime.title,
    image: jikanAnime.images.jpg.large_image_url || jikanAnime.images.jpg.image_url,
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


