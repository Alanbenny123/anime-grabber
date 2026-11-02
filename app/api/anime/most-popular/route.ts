import { NextResponse } from "next/server";
import {
  getMostPopularAnime,
  transformJikanToAnimeData,
} from "@/lib/api/jikan";
import { parseListQuery } from "@/lib/api/validation";
import { jikanErrorResponse } from "@/lib/api/responses";

// GET /api/anime/most-popular
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = parseListQuery(searchParams);
    if (!query) {
      return NextResponse.json({ error: "page must be 1–1000 and limit must be 1–25" }, { status: 400 });
    }

    const response = await getMostPopularAnime(query.page, query.limit);
    const transformedData = response.data.map(transformJikanToAnimeData);

    return NextResponse.json({
      data: transformedData,
      pagination: response.pagination,
    });
  } catch (error) {
    console.error("Error in /api/anime/most-popular:", error);
    return jikanErrorResponse(error);
  }
}


