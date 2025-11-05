import { NextResponse } from "next/server";
import { searchAnime, transformJikanToAnimeData } from "@/lib/api/jikan";

// GET /api/anime/search
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "25");

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required" },
        { status: 400 }
      );
    }

    const response = await searchAnime(query, page, limit);
    const transformedData = response.data.map(transformJikanToAnimeData);

    return NextResponse.json({
      data: transformedData,
      pagination: response.pagination,
    });
  } catch (error) {
    console.error("Error in /api/anime/search:", error);
    return NextResponse.json(
      { error: "Failed to search anime" },
      { status: 500 }
    );
  }
}


