import { NextResponse } from "next/server";
import { getAnimeById, searchAnime } from "@/lib/api/jikan";

// GET /api/anime/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // If it's a number, use it as MAL ID
    if (!isNaN(id)) {
      const response = await getAnimeById(id);
      return NextResponse.json(response.data);
    }
    
    // If it's a string, try to search for it
    // This is a fallback for old slug-based IDs like "one-piece"
    const searchResults = await searchAnime(params.id, 1, 5);
    if (searchResults.data.length > 0) {
      // Return the first result
      const fullDetails = await getAnimeById(searchResults.data[0].mal_id);
      return NextResponse.json(fullDetails.data);
    }
    
    return NextResponse.json(
      { error: "Anime not found" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error in /api/anime/[id]:", error);
    return NextResponse.json(
      { error: "Failed to fetch anime details" },
      { status: 500 }
    );
  }
}


