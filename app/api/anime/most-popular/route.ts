import { NextResponse } from "next/server";
import {
  getMostPopularAnime,
  transformJikanToAnimeData,
} from "@/lib/api/jikan";

// GET /api/anime/most-popular
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "25");

    const response = await getMostPopularAnime(page, limit);
    const transformedData = response.data.map(transformJikanToAnimeData);

    return NextResponse.json({
      data: transformedData,
      pagination: response.pagination,
    });
  } catch (error) {
    console.error("Error in /api/anime/most-popular:", error);
    return NextResponse.json(
      { error: "Failed to fetch popular anime" },
      { status: 500 }
    );
  }
}


