import { NextResponse } from "next/server";
import {
  getTopAiringAnime,
  getMostPopularAnime,
  getAnimeById,
  searchAnime,
  getAnimeByGenre,
  transformJikanToAnimeData,
} from "@/lib/api/jikan";

// Rate limiting helper (Jikan has rate limits: 3 requests/second, 60 requests/minute)
const RATE_LIMIT_DELAY = 350; // 350ms between requests

// GET /api/anime/top-airing
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "25");

    const response = await getTopAiringAnime(page, limit);
    const transformedData = response.data.map(transformJikanToAnimeData);

    return NextResponse.json({
      data: transformedData,
      pagination: response.pagination,
    });
  } catch (error) {
    console.error("Error in /api/anime/top-airing:", error);
    return NextResponse.json(
      { error: "Failed to fetch top airing anime" },
      { status: 500 }
    );
  }
}


