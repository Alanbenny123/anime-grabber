import { NextResponse } from "next/server";
import { searchAnime, transformJikanToAnimeData } from "@/lib/api/jikan";
import { parseListQuery, parseSearchQuery } from "@/lib/api/validation";
import { animeApiErrorResponse } from "@/lib/api/responses";

// GET /api/anime/search
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = parseSearchQuery(searchParams);
    const listQuery = parseListQuery(searchParams);

    if (!query || !listQuery) {
      return NextResponse.json(
        { error: "q must be 1–100 characters, page 1–1000, and limit 1–25" },
        { status: 400 }
      );
    }

    const response = await searchAnime(query, listQuery.page, listQuery.limit);
    const transformedData = response.data.map(transformJikanToAnimeData);

    return NextResponse.json({
      data: transformedData,
      pagination: response.pagination,
    });
  } catch (error) {
    console.error("Error in /api/anime/search:", error);
    return animeApiErrorResponse(error);
  }
}


